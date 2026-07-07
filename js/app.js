// app.js
// Controlador principal: init, enrutado, eventos, editor, recordatorios y feedback.

import {
  loadState, saveState, getState, resetState, getDayLog, todayKey,
  exportState, importState,
} from './state.js';
import { BADGES, DISCLAIMER, FRAIL_QUESTIONS, MEMORY_EMOJIS } from './content.js';
import {
  seedLibrary, getTasks, getTaskById, getAllTasksForEditor, getPillarById,
  getResources, getPosts, getDailyGoal, uid,
} from './data.js';
import { applyEngine, recompute, dayXp, tasksDoneCount } from './gamification.js';
import * as ui from './ui.js';
import * as editor from './editor.js';
import * as charts from './charts.js';

let route = 'hoy';
let editorTab = 'tareas';
let currentPostId = null;
let editorUnlocked = false;
let memoryGame = null;

/* ---------- Arranque ---------- */

function init() {
  loadState();
  const state = getState();
  seedLibrary(state);
  recompute(state);
  saveState();
  applyDisplaySettings();
  render();

  const app = document.getElementById('app');
  app.addEventListener('click', onClick);
  app.addEventListener('submit', onSubmit);
  app.addEventListener('change', onChange);

  // Delegación para el contenido de los modales (se registra una sola vez).
  const modalRoot = document.getElementById('modal-root');
  modalRoot.addEventListener('click', onClick);
  modalRoot.addEventListener('submit', onSubmit);
  modalRoot.addEventListener('change', onChange);

  registerServiceWorker();
  startReminderLoop();
}

function applyDisplaySettings() {
  const s = getState().settings;
  document.body.classList.toggle('reduce-motion', !!s.reducedMotion);
  document.body.classList.toggle('high-contrast', !!s.highContrast);
  // El texto grande se aplica a <html> para que escale todas las medidas rem.
  document.documentElement.classList.toggle('large-text', !!s.largeText);
}

/* ---------- Render principal ---------- */

function render() {
  const state = getState();
  const app = document.getElementById('app');

  if (!state.onboarded) {
    app.className = 'onboarding-mode';
    app.innerHTML = ui.renderOnboarding();
    return;
  }

  app.className = '';
  let body = '';
  switch (route) {
    case 'recursos': body = ui.renderResources(state); break;
    case 'progreso': body = ui.renderProgress(state, charts); break;
    case 'aprende': body = ui.renderLearn(state); break;
    case 'post': body = ui.renderPost(state, currentPostId); break;
    case 'mas': body = ui.renderMore(state); break;
    case 'plan': body = ui.renderPlan(state); break;
    case 'logros': body = ui.renderBadges(state, BADGES); break;
    case 'editor': body = editor.renderEditor(state, editorTab); break;
    case 'fragilidad': body = ui.renderFrailty(state); break;
    case 'medicacion': body = ui.renderMeds(state); break;
    case 'cuidador': body = ui.renderCaregiver(); break;
    case 'juego': body = ui.renderMemoryGame(state, memoryGame); break;
    default: body = ui.renderToday(state);
  }

  app.innerHTML = `
    ${ui.renderHeader(state)}
    <main class="content" id="view">${body}</main>
    ${ui.renderNav(route)}
  `;
}

/* ---------- Navegación ---------- */

function navigate(view, tab) {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (view === 'editor') {
    if (tab) editorTab = tab;
    if (!enterEditorGuard()) return;
  }
  route = view;
  render();
  window.scrollTo(0, 0);
}

function enterEditorGuard() {
  const s = getState().settings.editor;
  if (s.pinEnabled && s.pin && !editorUnlocked) {
    openPinPrompt(() => { editorUnlocked = true; route = 'editor'; render(); window.scrollTo(0, 0); });
    return false;
  }
  return true;
}

/* ---------- Click ---------- */

function onClick(e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;
  const state = getState();

  switch (action) {
    case 'nav':
      navigate(el.dataset.view, el.dataset.tab);
      break;

    case 'toggle-task': {
      const id = el.dataset.task;
      const t = getTaskById(state, id);
      const log = getDayLog();
      log.tasks[id] = !(log.tasks[id] === true);
      afterTaskChange(log.tasks[id] === true ? t : null);
      break;
    }

    case 'counter-inc':
    case 'counter-dec': {
      const id = el.dataset.task;
      const t = getTaskById(state, id);
      if (!t) break;
      const step = t.target >= 20 ? 5 : 1;
      const log = getDayLog();
      const cur = typeof log.tasks[id] === 'number' ? log.tasks[id] : 0;
      const wasDone = cur >= t.target;
      const next = Math.max(0, cur + (action === 'counter-inc' ? step : -step));
      log.tasks[id] = next;
      afterTaskChange(!wasDone && next >= t.target ? t : null);
      break;
    }

    case 'set-mood': {
      const log = getDayLog();
      log.mood = Number(el.dataset.mood);
      saveState();
      render();
      break;
    }

    case 'open-pillar': openPillarInfo(el.dataset.pillar); break;
    case 'show-disclaimer': openModal('Aviso médico', `<p>${ui.esc(DISCLAIMER)}</p>`); break;
    case 'export': doExport(); break;
    case 'reset': confirmReset(); break;
    case 'close-modal': closeModal(); break;

    /* ----- Accesibilidad / voz ----- */
    case 'speak': speakFrom(el); break;

    /* ----- Medicación ----- */
    case 'print-meds': window.print(); break;
    case 'del-med': delMed(Number(el.dataset.idx)); break;

    /* ----- Juego de memoria ----- */
    case 'memory-start': startMemory(Number(el.dataset.pairs)); break;
    case 'memory-exit': memoryGame = null; render(); break;
    case 'flip-card': flipCard(Number(el.dataset.idx)); break;

    /* ----- Blog ----- */
    case 'open-post': openPost(el.dataset.id); break;
    case 'edit-profile': openModal('Editar mis datos', ui.profileFormHtml(state)); break;

    /* ----- Editor: navegación de pestañas ----- */
    case 'editor-tab': editorTab = el.dataset.tab; render(); break;

    /* ----- Editor: tareas ----- */
    case 'new-task': openModal('Nueva tarea', editor.taskFormHtml(state, null)); break;
    case 'edit-task': {
      const t = getAllTasksForEditor(state).find((x) => x.id === el.dataset.id);
      openModal('Editar tarea', editor.taskFormHtml(state, t));
      break;
    }
    case 'toggle-task-active': toggleTaskActive(el.dataset.id); break;
    case 'delete-task': confirmDelete('tarea', () => deleteCustomTask(el.dataset.id)); break;

    /* ----- Editor: recursos ----- */
    case 'new-resource': openModal('Nuevo recurso', editor.resourceFormHtml(state, null)); break;
    case 'edit-resource': {
      const r = getResources(state).find((x) => x.id === el.dataset.id);
      openModal('Editar recurso', editor.resourceFormHtml(state, r));
      break;
    }
    case 'delete-resource': confirmDelete('recurso', () => deleteResource(el.dataset.id)); break;

    /* ----- Editor: blog ----- */
    case 'new-post': openModal('Nueva publicación', editor.postFormHtml(state, null)); break;
    case 'edit-post': {
      const p = getPosts(state).find((x) => x.id === el.dataset.id);
      openModal('Editar publicación', editor.postFormHtml(state, p));
      break;
    }
    case 'delete-post': confirmDelete('publicación', () => deletePost(el.dataset.id)); break;

    /* ----- Editor: metas y ajustes ----- */
    case 'goal-inc': changeGoal(5); break;
    case 'goal-dec': changeGoal(-5); break;
    case 'add-reminder-time': addReminderTime(); break;
    case 'remove-reminder-time': removeReminderTime(Number(el.dataset.idx)); break;
    case 'save-pin': savePin(); break;
  }
}

/* ---------- Change (checkboxes, file input) ---------- */

function onChange(e) {
  const el = e.target.closest('[data-action]');
  const state = getState();
  if (el) {
    switch (el.dataset.action) {
      case 'toggle-reminders': toggleReminders(el.checked); return;
      case 'toggle-pin':
        state.settings.editor.pinEnabled = el.checked;
        saveState(); render(); return;
      case 'toggle-motion':
        state.settings.reducedMotion = el.checked;
        saveState(); applyDisplaySettings(); render(); return;
      case 'toggle-large-text':
        state.settings.largeText = el.checked;
        saveState(); applyDisplaySettings(); render(); return;
      case 'toggle-contrast':
        state.settings.highContrast = el.checked;
        saveState(); applyDisplaySettings(); render(); return;
    }
  }
  if (e.target.id === 'import-file') importFromFile(e.target);
}

/* ---------- Submit (formularios) ---------- */

function onSubmit(e) {
  const form = e.target;
  e.preventDefault();
  const state = getState();

  if (form.id === 'onb-form') return submitOnboarding(form);
  if (form.id === 'form-profile') return submitProfile(form);
  if (form.id === 'form-task') return submitTask(form);
  if (form.id === 'form-resource') return submitResource(form);
  if (form.id === 'form-post') return submitPost(form);
  if (form.id === 'form-frail') return submitFrail(form);
  if (form.id === 'form-med') return submitMed(form);
  if (form.id === 'form-med-extra') return submitMedExtra(form);
}

function submitOnboarding(form) {
  const fd = new FormData(form);
  const state = getState();
  state.profile.name = (fd.get('name') || '').toString().trim() || 'paciente';
  state.profile.surgeryType = (fd.get('surgeryType') || '').toString().trim();
  state.profile.surgeryDate = (fd.get('surgeryDate') || '').toString();
  state.profile.activityLevel = (fd.get('activityLevel') || 'medio').toString();
  state.profile.smoker = fd.get('smoker') === 'on';
  state.profile.startDate = todayKey();
  state.onboarded = true;
  saveState();
  route = 'hoy';
  render();
  toast('🎉 ¡Bienvenido! Tu programa está listo. ¡Empieza a sumar puntos!');
}

function submitProfile(form) {
  const fd = new FormData(form);
  const p = getState().profile;
  p.name = (fd.get('name') || '').toString().trim() || 'paciente';
  p.surgeryType = (fd.get('surgeryType') || '').toString().trim();
  p.surgeryDate = (fd.get('surgeryDate') || '').toString();
  p.activityLevel = (fd.get('activityLevel') || 'medio').toString();
  p.smoker = fd.get('smoker') === 'on';
  saveState();
  closeModal();
  render();
  toast('✔ Datos actualizados.');
}

function submitTask(form) {
  const fd = new FormData(form);
  const state = getState();
  const id = (fd.get('id') || '').toString();
  const isDefault = (fd.get('isDefault') || '') === '1';
  const fields = {
    title: (fd.get('title') || '').toString().trim(),
    icon: (fd.get('icon') || '').toString().trim(),
    xp: Math.max(0, Number(fd.get('xp')) || 0),
    desc: (fd.get('desc') || '').toString().trim(),
    type: (fd.get('type') || 'check').toString(),
    pillar: (fd.get('pillar') || '').toString(),
    unit: (fd.get('unit') || '').toString().trim(),
    target: Math.max(1, Number(fd.get('target')) || 1),
  };

  if (isDefault && id) {
    // Personalización de tarea base: solo textos/valores.
    const prev = state.library.taskOverrides[id] || {};
    state.library.taskOverrides[id] = {
      ...prev,
      title: fields.title, icon: fields.icon, xp: fields.xp, desc: fields.desc,
      target: fields.target, unit: fields.unit,
    };
  } else if (id) {
    const t = state.library.tasks.find((x) => x.id === id);
    if (t) Object.assign(t, fields);
  } else {
    state.library.tasks.push({ id: uid('task'), disabled: false, ...fields });
  }
  recompute(state);
  saveState();
  closeModal();
  render();
  toast('✔ Tarea guardada.');
}

function toggleTaskActive(id) {
  const state = getState();
  if (state.library.tasks.some((t) => t.id === id)) {
    const t = state.library.tasks.find((x) => x.id === id);
    t.disabled = !t.disabled;
  } else {
    const o = state.library.taskOverrides[id] || {};
    o.disabled = !o.disabled;
    state.library.taskOverrides[id] = o;
  }
  recompute(state);
  saveState();
  render();
}

function deleteCustomTask(id) {
  const state = getState();
  state.library.tasks = state.library.tasks.filter((t) => t.id !== id);
  recompute(state);
  saveState();
  render();
  toast('Tarea eliminada.');
}

function submitResource(form) {
  const fd = new FormData(form);
  const state = getState();
  const id = (fd.get('id') || '').toString();
  const fields = {
    title: (fd.get('title') || '').toString().trim(),
    url: (fd.get('url') || '').toString().trim(),
    pillar: (fd.get('pillar') || '').toString(),
    desc: (fd.get('desc') || '').toString().trim(),
  };
  if (id) {
    const r = state.library.resources.find((x) => x.id === id);
    if (r) Object.assign(r, fields);
  } else {
    state.library.resources.push({ id: uid('res'), type: 'auto', ...fields });
  }
  saveState();
  closeModal();
  render();
  toast('✔ Recurso guardado.');
}

function deleteResource(id) {
  const state = getState();
  state.library.resources = state.library.resources.filter((r) => r.id !== id);
  saveState();
  render();
  toast('Recurso eliminado.');
}

function submitPost(form) {
  const fd = new FormData(form);
  const state = getState();
  const id = (fd.get('id') || '').toString();
  const fields = {
    title: (fd.get('title') || '').toString().trim(),
    category: (fd.get('category') || 'general').toString(),
    cover: (fd.get('cover') || '').toString().trim(),
    body: (fd.get('body') || '').toString(),
  };
  if (id) {
    const p = state.library.posts.find((x) => x.id === id);
    if (p) Object.assign(p, fields);
  } else {
    state.library.posts.push({ id: uid('post'), date: todayKey(), author: state.profile.name || 'Equipo médico', ...fields });
  }
  saveState();
  closeModal();
  render();
  toast('✔ Publicación guardada.');
}

function deletePost(id) {
  const state = getState();
  state.library.posts = state.library.posts.filter((p) => p.id !== id);
  saveState();
  render();
  toast('Publicación eliminada.');
}

function openPost(id) {
  const state = getState();
  currentPostId = id;
  if (!state.readPosts.includes(id)) {
    state.readPosts.push(id);
    const events = applyEngine(state);
    saveState();
    route = 'post';
    render();
    handleEvents(events);
  } else {
    route = 'post';
    render();
  }
  window.scrollTo(0, 0);
}

/* ---------- Metas, recordatorios, PIN ---------- */

function changeGoal(delta) {
  const state = getState();
  const g = getDailyGoal(state) + delta;
  state.settings.dailyGoal = Math.max(20, Math.min(200, g));
  recompute(state);
  saveState();
  render();
}

async function toggleReminders(enabled) {
  const state = getState();
  if (enabled && 'Notification' in window && Notification.permission !== 'granted') {
    try { await Notification.requestPermission(); } catch (_) {}
  }
  state.settings.reminders.enabled = enabled && (!('Notification' in window) || Notification.permission === 'granted');
  saveState();
  render();
  if (enabled && !state.settings.reminders.enabled) {
    toast('Activa las notificaciones en tu navegador para recibir recordatorios.');
  }
}

function addReminderTime() {
  const input = document.getElementById('new-reminder-time');
  const val = input && input.value;
  if (!val) return;
  const state = getState();
  const times = state.settings.reminders.times;
  if (!times.includes(val)) { times.push(val); times.sort(); }
  saveState();
  render();
}

function removeReminderTime(idx) {
  const state = getState();
  state.settings.reminders.times.splice(idx, 1);
  saveState();
  render();
}

function savePin() {
  const input = document.getElementById('editor-pin');
  const val = (input && input.value || '').trim();
  getState().settings.editor.pin = val;
  saveState();
  toast('🔒 PIN guardado.');
}

function openPinPrompt(onSuccess) {
  openModal('Introduce el PIN', `
    <p class="muted small">El modo médico está protegido con un PIN.</p>
    <input type="text" inputmode="numeric" maxlength="4" id="pin-input" class="pin-input" placeholder="••••" />
    <div class="row-btns">
      <button class="btn ghost" data-action="close-modal">Cancelar</button>
      <button class="btn primary" id="pin-ok">Entrar</button>
    </div>`);
  const ok = document.getElementById('pin-ok');
  const inp = document.getElementById('pin-input');
  if (inp) inp.focus();
  if (ok) ok.addEventListener('click', () => {
    if ((inp.value || '').trim() === getState().settings.editor.pin) {
      closeModal();
      onSuccess();
    } else {
      inp.classList.add('shake');
      toast('PIN incorrecto.');
    }
  });
}

/* ---------- Importar / exportar ---------- */

function importFromFile(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      importState(reader.result.toString());
      const state = getState();
      seedLibrary(state);
      recompute(state);
      saveState();
      applyDisplaySettings();
      route = 'hoy';
      render();
      toast('✔ Datos importados correctamente.');
    } catch (err) {
      toast('No se pudo importar: archivo no válido.');
    }
  };
  reader.readAsText(file);
}

/* ---------- Lógica tras cambiar una tarea ---------- */

function afterTaskChange(completedTask) {
  const state = getState();
  const events = applyEngine(state);
  saveState();
  render();
  if (completedTask) toast(`${completedTask.icon || '✔'} +${completedTask.xp} XP · ${completedTask.title}`);
  handleEvents(events);
}

function handleEvents(events) {
  if (!events) return;
  if (events.leveledUp) setTimeout(() => toast(`⬆️ ¡Subiste al nivel ${events.level}! Sigue así.`, 'level'), 350);
  for (const b of events.newBadges) setTimeout(() => celebrateBadge(b), 600);
  if (events.challengeCompletedNow) setTimeout(() => toast(`🎯 ¡Reto semanal completado! +${events.challenge.xp} XP`, 'level'), 500);
}

/* ---------- Marca de lecciones leídas (evento toggle) ---------- */

document.addEventListener('toggle', (e) => {
  const det = e.target;
  if (det.tagName === 'DETAILS' && det.dataset.lesson && det.open) {
    const state = getState();
    const id = det.dataset.lesson;
    if (!state.readLessons.includes(id)) {
      state.readLessons.push(id);
      const events = applyEngine(state);
      saveState();
      handleEvents(events);
      det.classList.add('read');
    }
  }
}, true);

/* ---------- Modales ---------- */

function openModal(title, html) {
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-label="${ui.esc(title)}">
        <div class="modal-head"><h3>${ui.esc(title)}</h3><button class="modal-x" data-action="close-modal" aria-label="Cerrar">✕</button></div>
        <div class="modal-body">${html}</div>
      </div>
    </div>`;
  const backdrop = root.querySelector('.modal-backdrop');
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
  // Los formularios y acciones dentro del modal se gestionan por delegación (registrada en init).
}

function closeModal() {
  document.getElementById('modal-root').innerHTML = '';
}

function openPillarInfo(pillarId) {
  const p = getPillarById(getState(), pillarId);
  if (!p) return;
  openModal(`${p.emoji} ${p.name}`, `<p><strong>${ui.esc(p.tagline || '')}</strong></p><p>${ui.esc(p.why || '')}</p>`);
}

function confirmDelete(what, onConfirm) {
  openModal('Confirmar', `
    <p>¿Seguro que quieres eliminar esta ${ui.esc(what)}? Esta acción no se puede deshacer.</p>
    <div class="row-btns">
      <button class="btn ghost" data-action="close-modal">Cancelar</button>
      <button class="btn danger" id="do-del">Eliminar</button>
    </div>`);
  const btn = document.getElementById('do-del');
  if (btn) btn.addEventListener('click', () => { closeModal(); onConfirm(); });
}

function confirmReset() {
  openModal('Reiniciar programa', `
    <p>Esto borrará TODO: progreso, tareas personalizadas, recursos, publicaciones y medallas de este dispositivo. No se puede deshacer.</p>
    <div class="row-btns">
      <button class="btn ghost" data-action="close-modal">Cancelar</button>
      <button class="btn danger" id="do-reset">Sí, reiniciar</button>
    </div>`);
  const btn = document.getElementById('do-reset');
  if (btn) btn.addEventListener('click', () => {
    resetState();
    seedLibrary(getState());
    saveState();
    route = 'hoy';
    editorUnlocked = false;
    closeModal();
    render();
    toast('Programa reiniciado.');
  });
}

function doExport() {
  const blob = new Blob([exportState()], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `prehabilita-datos-${todayKey()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast('⬇️ Copia de seguridad descargada.');
}

/* ---------- Toasts ---------- */

function toast(msg, kind = 'xp') {
  const layer = document.getElementById('toast-layer');
  const el = document.createElement('div');
  el.className = `toast ${kind}`;
  el.textContent = msg;
  layer.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 2600);
}

function celebrateBadge(b) {
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-backdrop badge-pop">
      <div class="modal badge-modal">
        <div class="confetti">🎉</div>
        <div class="big-emoji">${b.emoji}</div>
        <h2>¡Medalla desbloqueada!</h2>
        <h3>${ui.esc(b.name)}</h3>
        <p class="muted">${ui.esc(b.desc)}</p>
        <button class="btn primary" data-action="close-modal">¡Genial!</button>
      </div>
    </div>`;
  const backdrop = root.querySelector('.modal-backdrop');
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop || e.target.closest('[data-action="close-modal"]')) closeModal();
  });
}

/* ---------- Recordatorios / notificaciones ---------- */

function startReminderLoop() {
  checkReminders();
  setInterval(checkReminders, 30000);
}

function checkReminders() {
  const state = getState();
  const rem = state.settings.reminders;
  if (!rem.enabled) return;
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  const now = new Date();
  const hhmm = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const dayK = todayKey();
  for (const tm of rem.times) {
    const key = `${dayK} ${tm}`;
    if (tm === hhmm && !rem.notified[key]) {
      rem.notified[key] = true;
      saveState();
      fireReminder();
    }
  }
}

function fireReminder() {
  const state = getState();
  const tasks = getTasks(state);
  const goal = getDailyGoal(state);
  const log = state.logs[todayKey()] || { tasks: {} };
  const xp = dayXp(log, tasks);
  const doneN = tasksDoneCount(log, tasks);
  const pending = tasks.length - doneN;
  let body;
  if (xp >= goal) body = '¡Ya has completado tu objetivo de hoy! 🎉 ¿Sumamos algo extra?';
  else body = `Te quedan ${pending} tareas (${Math.max(0, goal - xp)} XP) para completar tu día. ¡Tú puedes! 💪`;
  try {
    new Notification('PreHabilita · tu prehabilitación te espera', { body, tag: 'prehabilita-reminder' });
  } catch (_) { /* algunos navegadores requieren SW para notificar */ }
}

/* ---------- Lectura por voz (Web Speech API) ---------- */

function speakFrom(el) {
  const synth = window.speechSynthesis;
  if (!synth) { toast('Tu navegador no permite lectura por voz.'); return; }
  if (synth.speaking || synth.pending) { synth.cancel(); toast('Lectura detenida.'); return; }
  const scope = el.closest('[data-speak-scope]') || el.parentElement;
  const target = (scope && scope.querySelector('.speakable')) || scope;
  const text = (target.innerText || target.textContent || '').trim();
  if (!text) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'es-ES';
  u.rate = 0.95;
  synth.speak(u);
  toast('🔊 Leyendo… (toca de nuevo para parar)');
}

/* ---------- Cribado de fragilidad (FRAIL) ---------- */

function submitFrail(form) {
  const fd = new FormData(form);
  const state = getState();
  let score = 0;
  const answers = {};
  for (const q of FRAIL_QUESTIONS) {
    const v = fd.get(q.id);
    if (v == null) { toast('Responde a todas las preguntas, por favor.'); return; }
    const n = Number(v);
    answers[q.id] = n;
    score += n;
  }
  state.frail = { score, date: todayKey(), answers };
  saveState();
  render();
  window.scrollTo(0, 0);
  toast('✔ Cribado guardado. Compártelo con tu equipo médico.');
}

/* ---------- Medicación y alergias ---------- */

function submitMed(form) {
  const fd = new FormData(form);
  const state = getState();
  const name = (fd.get('name') || '').toString().trim();
  if (!name) return;
  state.medList.meds.push({
    name,
    dose: (fd.get('dose') || '').toString().trim(),
    freq: (fd.get('freq') || '').toString().trim(),
  });
  saveState();
  render();
  toast('✔ Medicamento añadido.');
}

function delMed(idx) {
  const state = getState();
  state.medList.meds.splice(idx, 1);
  saveState();
  render();
}

function submitMedExtra(form) {
  const fd = new FormData(form);
  const state = getState();
  state.medList.allergies = (fd.get('allergies') || '').toString().trim();
  state.medList.notes = (fd.get('notes') || '').toString().trim();
  saveState();
  render();
  toast('✔ Guardado.');
}

/* ---------- Juego de memoria ---------- */

function startMemory(pairs) {
  const n = Math.max(2, Math.min(MEMORY_EMOJIS.length, pairs || 6));
  const chosen = MEMORY_EMOJIS.slice(0, n);
  const deck = [...chosen, ...chosen].map((e) => ({ emoji: e, matched: false }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  memoryGame = { cards: deck, flipped: [], moves: 0, locked: false, done: false };
  route = 'juego';
  render();
  window.scrollTo(0, 0);
}

function flipCard(idx) {
  const g = memoryGame;
  if (!g || g.locked || g.done) return;
  const card = g.cards[idx];
  if (!card || card.matched || g.flipped.includes(idx)) return;
  g.flipped.push(idx);

  if (g.flipped.length < 2) { render(); return; }

  g.moves++;
  const [a, b] = g.flipped;
  if (g.cards[a].emoji === g.cards[b].emoji) {
    g.cards[a].matched = true;
    g.cards[b].matched = true;
    g.flipped = [];
    if (g.cards.every((c) => c.matched)) finishMemory();
    render();
  } else {
    g.locked = true;
    render();
    setTimeout(() => { g.flipped = []; g.locked = false; render(); }, 900);
  }
}

function finishMemory() {
  const g = memoryGame;
  g.done = true;
  const state = getState();
  state.games = state.games || { memory: { wins: 0, bestMoves: null } };
  const mem = state.games.memory;
  mem.wins = (mem.wins || 0) + 1;
  if (mem.bestMoves == null || g.moves < mem.bestMoves) mem.bestMoves = g.moves;
  // Completa la tarea de gimnasia mental del día (si aún no lo estaba).
  const log = getDayLog();
  const wasDone = log.tasks['gimnasia-mental'] === true;
  log.tasks['gimnasia-mental'] = true;
  const events = applyEngine(state);
  saveState();
  if (!wasDone) setTimeout(() => toast('🧩 +15 XP · gimnasia mental completada'), 200);
  handleEvents(events);
}

/* ---------- Service Worker (PWA / offline) ---------- */

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

/* ---------- Go ---------- */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
