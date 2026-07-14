// app.js
// Controlador principal: init, enrutado, eventos, editor, recordatorios y feedback.

import {
  loadState, saveState, getState, resetState, getDayLog, todayKey,
  exportState, importState,
  listProfiles, getActiveProfileId, switchProfile, createProfile, renameProfile, deleteProfile,
  recordAssessment,
} from './state.js';
import { BADGES, DISCLAIMER, DISCLAIMER_EN, DISCLAIMER_CA, FRAIL_QUESTIONS, EDMONTON_QUESTIONS, MEMORY_EMOJIS } from './content.js';
import { GAD7, PHQ9, DASI, bmiScore } from './scales.js';
import {
  seedLibrary, syncDefaultResources, getTasks, getTaskById, getAllTasksForEditor, getPillarById,
  getResources, getPosts, getDailyGoal, uid,
} from './data.js';
import { applyEngine, recompute, dayXp, tasksDoneCount } from './gamification.js';
import { setLang, getLang, tr, t } from './i18n.js';
import * as ui from './ui.js';
import * as editor from './editor.js';
import * as charts from './charts.js';

/** Helper de idioma para cadenas locales del controlador (es/en/ca). */
function L(es, en, ca) {
  const l = getLang();
  if (l === 'en') return en;
  if (l === 'ca') return (ca != null ? ca : es);
  return es;
}

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
  syncDefaultResources(state);
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
  setLang(state.settings.lang);
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
    case 'ayuno-guide': body = ui.renderFastingGuide(state); break;
    case 'ejercicio-guide': body = ui.renderExerciseGuide(state); break;
    case 'respiratorio-guide': body = ui.renderRespiratoryGuide(state); break;
    case 'bienestar-guide': body = ui.renderMentalGuide(state); break;
    case 'pausa': body = ui.renderPausa(state); break;
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
    case 'report': body = ui.renderReport(state); break;
    case 'perfiles': body = ui.renderProfiles(state); break;
    case 'preferencias': body = ui.renderPreferences(state); break;
    case 'privacidad': body = ui.renderPrivacy(state); break;
    case 'edmonton': body = ui.renderEdmonton(state); break;
    case 'evaluaciones': body = ui.renderAssessments(state); break;
    case 'gad7': body = ui.renderFreqScale(state, 'gad7'); break;
    case 'phq9': body = ui.renderFreqScale(state, 'phq9'); break;
    case 'dasi': body = ui.renderDasi(state); break;
    case 'must': body = ui.renderMust(state); break;
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

    case 'toggle-desc': {
      const wrap = el.closest('.task-desc');
      if (wrap) {
        const detail = wrap.querySelector('.task-detail');
        const expanded = el.getAttribute('aria-expanded') === 'true';
        if (detail) detail.hidden = expanded;
        el.setAttribute('aria-expanded', String(!expanded));
        el.textContent = expanded ? t('read_more') : t('read_less');
      }
      break;
    }
    case 'open-pillar': openPillarInfo(el.dataset.pillar); break;
    case 'show-disclaimer': openModal(t('med_notice'), `<p>${ui.esc(getLang() === 'en' ? DISCLAIMER_EN : (getLang() === 'ca' ? DISCLAIMER_CA : DISCLAIMER))}</p>`); break;
    case 'export': doExport(); break;
    case 'reset': confirmReset(); break;
    case 'close-modal': closeModal(); break;

    /* ----- Accesibilidad / voz ----- */
    case 'speak': speakFrom(el); break;

    /* ----- Impresión (medicación / informe) ----- */
    case 'print-doc': window.print(); break;
    case 'del-med': delMed(Number(el.dataset.idx)); break;

    /* ----- Perfiles ----- */
    case 'switch-profile': doSwitchProfile(el.dataset.id); break;
    case 'rename-profile': doRenameProfile(el.dataset.id); break;
    case 'delete-profile': doDeleteProfile(el.dataset.id); break;

    /* ----- Juego de memoria ----- */
    case 'memory-start': startMemory(Number(el.dataset.pairs)); break;
    case 'memory-exit': memoryGame = null; render(); break;
    case 'flip-card': flipCard(Number(el.dataset.idx)); break;

    /* ----- Blog ----- */
    case 'open-post': openPost(el.dataset.id); break;
    case 'edit-profile': openModal(L('Editar mis datos', 'Edit my details'), ui.profileFormHtml(state)); break;

    /* ----- Editor: navegación de pestañas ----- */
    case 'editor-tab': editorTab = el.dataset.tab; render(); break;

    /* ----- Editor: tareas ----- */
    case 'new-task': openModal(L('Nueva tarea', 'New task'), editor.taskFormHtml(state, null)); break;
    case 'edit-task': {
      const t = getAllTasksForEditor(state).find((x) => x.id === el.dataset.id);
      openModal(L('Editar tarea', 'Edit task'), editor.taskFormHtml(state, t));
      break;
    }
    case 'toggle-task-active': toggleTaskActive(el.dataset.id); break;
    case 'delete-task': confirmDelete(L('tarea', 'task'), () => deleteCustomTask(el.dataset.id)); break;

    /* ----- Editor: recursos ----- */
    case 'new-resource': openModal(L('Nuevo recurso', 'New resource'), editor.resourceFormHtml(state, null)); break;
    case 'edit-resource': {
      const r = getResources(state).find((x) => x.id === el.dataset.id);
      openModal(L('Editar recurso', 'Edit resource'), editor.resourceFormHtml(state, r));
      break;
    }
    case 'delete-resource': confirmDelete(L('recurso', 'resource'), () => deleteResource(el.dataset.id)); break;

    /* ----- Editor: blog ----- */
    case 'new-post': openModal(L('Nueva publicación', 'New article'), editor.postFormHtml(state, null)); break;
    case 'edit-post': {
      const p = getPosts(state).find((x) => x.id === el.dataset.id);
      openModal(L('Editar publicación', 'Edit article'), editor.postFormHtml(state, p));
      break;
    }
    case 'delete-post': confirmDelete(L('publicación', 'article'), () => deletePost(el.dataset.id)); break;

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
      case 'set-lang':
        state.settings.lang = ['es', 'en', 'ca'].includes(el.value) ? el.value : 'es';
        setLang(state.settings.lang);
        saveState(); render(); return;
      case 'toggle-fasting':
        if (!state.fasting) state.fasting = {};
        state.fasting[el.dataset.flag] = el.checked;
        saveState(); render(); return;
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
  if (form.id === 'form-edmonton') return submitEdmonton(form);
  if (form.id === 'form-gad7') return submitFreqScale(form, 'gad7');
  if (form.id === 'form-phq9') return submitFreqScale(form, 'phq9');
  if (form.id === 'form-dasi') return submitDasi(form);
  if (form.id === 'form-must') return submitMust(form);
  if (form.id === 'form-med') return submitMed(form);
  if (form.id === 'form-med-extra') return submitMedExtra(form);
  if (form.id === 'form-profile-new') return submitProfileNew(form);
}

/* ---------- Perfiles ---------- */

function doSwitchProfile(id) {
  switchProfile(id);
  const state = getState();
  setLang(state.settings.lang);
  applyDisplaySettings();
  route = 'hoy';
  editorUnlocked = false;
  render();
  toast(L('Perfil cambiado.', 'Profile switched.'));
}

function submitProfileNew(form) {
  const fd = new FormData(form);
  const name = (fd.get('name') || '').toString().trim() || L('Nuevo paciente', 'New patient');
  const copy = fd.get('copy') === 'on';
  createProfile(name, copy);
  const state = getState();
  seedLibrary(state);
  recompute(state);
  saveState();
  applyDisplaySettings();
  route = 'hoy';
  editorUnlocked = false;
  render();
  toast(L('✔ Perfil creado.', '✔ Profile created.'));
}

function doRenameProfile(id) {
  const current = listProfiles().find((p) => p.id === id);
  const name = window.prompt(L('Nuevo nombre del perfil:', 'New profile name:'), current ? current.name : '');
  if (name && name.trim()) {
    renameProfile(id, name.trim());
    render();
  }
}

function doDeleteProfile(id) {
  if (!window.confirm(L('¿Borrar este perfil y todos sus datos? No se puede deshacer.', 'Delete this profile and all its data? This cannot be undone.'))) return;
  const ok = deleteProfile(id);
  if (!ok) { toast(L('Debe quedar al menos un perfil.', 'At least one profile must remain.')); return; }
  const state = getState();
  setLang(state.settings.lang);
  applyDisplaySettings();
  route = 'hoy';
  render();
}

function submitOnboarding(form) {
  const fd = new FormData(form);
  const state = getState();
  state.profile.name = (fd.get('name') || '').toString().trim() || L('paciente', 'patient');
  state.profile.surgeryType = (fd.get('surgeryType') || '').toString().trim();
  state.profile.surgeryDate = (fd.get('surgeryDate') || '').toString();
  state.profile.activityLevel = (fd.get('activityLevel') || 'medio').toString();
  state.profile.smoker = fd.get('smoker') === 'on';
  state.profile.startDate = todayKey();
  state.onboarded = true;
  saveState();
  route = 'hoy';
  render();
  toast(t('welcome_toast'));
}

function submitProfile(form) {
  const fd = new FormData(form);
  const p = getState().profile;
  p.name = (fd.get('name') || '').toString().trim() || L('paciente', 'patient');
  p.surgeryType = (fd.get('surgeryType') || '').toString().trim();
  p.surgeryDate = (fd.get('surgeryDate') || '').toString();
  p.activityLevel = (fd.get('activityLevel') || 'medio').toString();
  p.smoker = fd.get('smoker') === 'on';
  saveState();
  closeModal();
  render();
  toast(L('✔ Datos actualizados.', '✔ Details updated.'));
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
  toast(L('✔ Tarea guardada.', '✔ Task saved.'));
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
  toast(L('Tarea eliminada.', 'Task deleted.'));
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
  toast(L('✔ Recurso guardado.', '✔ Resource saved.'));
}

function deleteResource(id) {
  const state = getState();
  state.library.resources = state.library.resources.filter((r) => r.id !== id);
  saveState();
  render();
  toast(L('Recurso eliminado.', 'Resource deleted.'));
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
    state.library.posts.push({ id: uid('post'), date: todayKey(), author: state.profile.name || L('Equipo médico', 'Medical team'), ...fields });
  }
  saveState();
  closeModal();
  render();
  toast(L('✔ Publicación guardada.', '✔ Article saved.'));
}

function deletePost(id) {
  const state = getState();
  state.library.posts = state.library.posts.filter((p) => p.id !== id);
  saveState();
  render();
  toast(L('Publicación eliminada.', 'Article deleted.'));
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
    toast(L('Activa las notificaciones en tu navegador para recibir recordatorios.', 'Enable notifications in your browser to receive reminders.'));
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
  toast(L('🔒 PIN guardado.', '🔒 PIN saved.'));
}

function openPinPrompt(onSuccess) {
  openModal(L('Introduce el PIN', 'Enter the PIN'), `
    <p class="muted small">${L('El modo médico está protegido con un PIN.', 'Clinician mode is protected with a PIN.')}</p>
    <input type="text" inputmode="numeric" maxlength="4" id="pin-input" class="pin-input" placeholder="••••" />
    <div class="row-btns">
      <button class="btn ghost" data-action="close-modal">${L('Cancelar', 'Cancel')}</button>
      <button class="btn primary" id="pin-ok">${L('Entrar', 'Enter')}</button>
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
      toast(L('PIN incorrecto.', 'Wrong PIN.'));
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
      toast(L('✔ Datos importados correctamente.', '✔ Data imported successfully.'));
    } catch (err) {
      toast(L('No se pudo importar: archivo no válido.', 'Import failed: invalid file.'));
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
  if (completedTask) toast(`${completedTask.icon || '✔'} +${completedTask.xp} XP · ${tr(completedTask, 'title')}`);
  handleEvents(events);
}

function handleEvents(events) {
  if (!events) return;
  if (events.leveledUp) setTimeout(() => toast(t('level_up', { n: events.level }), 'level'), 350);
  for (const b of events.newBadges) setTimeout(() => celebrateBadge(b), 600);
  if (events.challengeCompletedNow) setTimeout(() => toast(L(`🎯 ¡Reto semanal completado! +${events.challenge.xp} XP`, `🎯 Weekly challenge completed! +${events.challenge.xp} XP`), 'level'), 500);
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
  openModal(`${p.emoji} ${tr(p, 'name')}`, `<p><strong>${ui.esc(tr(p, 'tagline'))}</strong></p><p>${ui.esc(tr(p, 'why'))}</p>`);
}

function confirmDelete(what, onConfirm) {
  openModal(L('Confirmar', 'Confirm'), `
    <p>${L('¿Seguro que quieres eliminar esta ' + ui.esc(what) + '? Esta acción no se puede deshacer.', 'Are you sure you want to delete this ' + ui.esc(what) + '? This cannot be undone.')}</p>
    <div class="row-btns">
      <button class="btn ghost" data-action="close-modal">${L('Cancelar', 'Cancel')}</button>
      <button class="btn danger" id="do-del">${L('Eliminar', 'Delete')}</button>
    </div>`);
  const btn = document.getElementById('do-del');
  if (btn) btn.addEventListener('click', () => { closeModal(); onConfirm(); });
}

function confirmReset() {
  openModal(L('Reiniciar programa', 'Reset program'), `
    <p>${L('Esto borrará TODO en este perfil: progreso, tareas personalizadas, recursos, publicaciones y medallas. No se puede deshacer.', 'This will erase EVERYTHING in this profile: progress, custom tasks, resources, articles and badges. It cannot be undone.')}</p>
    <div class="row-btns">
      <button class="btn ghost" data-action="close-modal">${L('Cancelar', 'Cancel')}</button>
      <button class="btn danger" id="do-reset">${L('Sí, reiniciar', 'Yes, reset')}</button>
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
    toast(L('Programa reiniciado.', 'Program reset.'));
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
  toast(L('⬇️ Copia de seguridad descargada.', '⬇️ Backup downloaded.'));
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
        <h2>${t('badge_unlocked')}</h2>
        <h3>${ui.esc(tr(b, 'name'))}</h3>
        <p class="muted">${ui.esc(tr(b, 'desc'))}</p>
        <button class="btn primary" data-action="close-modal">${t('great')}</button>
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
    new Notification('PreHabilítame · tu prehabilitación te espera', { body, tag: 'prehabilita-reminder' });
  } catch (_) { /* algunos navegadores requieren SW para notificar */ }
}

/* ---------- Lectura por voz (Web Speech API) ---------- */

function speakFrom(el) {
  const synth = window.speechSynthesis;
  if (!synth) { toast(L('Tu navegador no permite lectura por voz.', 'Your browser does not support text-to-speech.')); return; }
  if (synth.speaking || synth.pending) { synth.cancel(); toast(L('Lectura detenida.', 'Reading stopped.')); return; }
  const scope = el.closest('[data-speak-scope]') || el.parentElement;
  const target = (scope && scope.querySelector('.speakable')) || scope;
  const text = (target.innerText || target.textContent || '').trim();
  if (!text) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = getLang() === 'en' ? 'en-US' : (getLang() === 'ca' ? 'ca-ES' : 'es-ES');
  u.rate = 0.95;
  synth.speak(u);
  toast(L('🔊 Leyendo… (toca de nuevo para parar)', '🔊 Reading… (tap again to stop)'));
}

/* ---------- Cribado de fragilidad (FRAIL) ---------- */

function submitFrail(form) {
  const fd = new FormData(form);
  const state = getState();
  let score = 0;
  const answers = {};
  for (const q of FRAIL_QUESTIONS) {
    const v = fd.get(q.id);
    if (v == null) { toast(L('Responde a todas las preguntas, por favor.', 'Please answer all the questions.')); return; }
    const n = Number(v);
    answers[q.id] = n;
    score += n;
  }
  state.frail = { score, date: todayKey(), answers };
  recordAssessment('frail', score, answers);
  render();
  window.scrollTo(0, 0);
  toast(L('✔ Cribado guardado. Compártelo con tu equipo médico.', '✔ Screening saved. Share it with your medical team.'));
}

function submitEdmonton(form) {
  const fd = new FormData(form);
  const state = getState();
  let score = 0;
  const answers = {};
  for (const q of EDMONTON_QUESTIONS) {
    const v = fd.get(q.id);
    if (v == null) { toast(L('Responde a todas las preguntas, por favor.', 'Please answer all the questions.')); return; }
    const n = Number(v);
    answers[q.id] = n;
    score += n;
  }
  state.edmonton = { score, date: todayKey(), answers };
  recordAssessment('edmonton', score, answers);
  render();
  window.scrollTo(0, 0);
  toast(L('✔ Test de Edmonton guardado. Compártelo con tu equipo médico.', '✔ Edmonton test saved. Share it with your medical team.'));
}

/* ---------- Escalas de frecuencia (GAD-7 / PHQ-9), DASI y MUST ---------- */

function submitFreqScale(form, scaleId) {
  const scale = scaleId === 'phq9' ? PHQ9 : GAD7;
  const fd = new FormData(form);
  let score = 0;
  const answers = {};
  for (let i = 0; i < scale.items.length; i++) {
    const v = fd.get('q' + i);
    if (v == null) { toast(L('Responde a todas las preguntas, por favor.', 'Please answer all the questions.')); return; }
    const n = Number(v);
    answers[i] = n;
    score += n;
  }
  recordAssessment(scaleId, score, answers);
  render();
  window.scrollTo(0, 0);
  toast(L('✔ Guardado. Compártelo con tu equipo médico.', '✔ Saved. Share it with your medical team.'));
  // Salvaguarda de seguridad: ítem 9 del PHQ-9 (ideas de autolesión).
  if (scaleId === 'phq9' && answers[PHQ9.selfHarmIndex] > 0) {
    setTimeout(() => openModal(t('phq9_safety_title'), `<p>${ui.esc(t('phq9_safety'))}</p>`), 450);
  }
}

function submitDasi(form) {
  const fd = new FormData(form);
  let score = 0;
  const answers = {};
  for (let i = 0; i < DASI.items.length; i++) {
    const v = fd.get('q' + i);
    if (v == null) { toast(L('Responde a todas las preguntas, por favor.', 'Please answer all the questions.')); return; }
    const n = Number(v);
    answers[i] = n;
    if (n === 1) score += DASI.items[i].w;
  }
  score = Math.round(score * 100) / 100;
  recordAssessment('dasi', score, answers);
  render();
  window.scrollTo(0, 0);
  toast(L('✔ Guardado.', '✔ Saved.'));
}

function submitMust(form) {
  const fd = new FormData(form);
  const weight = Number(fd.get('weight'));
  const height = Number(fd.get('height'));
  const wl = Number(fd.get('wl')) || 0;
  const acute = fd.get('acute') === 'on' ? 2 : 0;
  if (!weight || !height) { toast(L('Introduce tu peso y tu estatura.', 'Enter your weight and height.')); return; }
  const bmi = weight / Math.pow(height / 100, 2);
  const score = bmiScore(bmi) + wl + acute;
  recordAssessment('must', score, { weight, height, wl, acute: acute > 0, bmi: Math.round(bmi * 10) / 10 });
  render();
  window.scrollTo(0, 0);
  toast(L('✔ Guardado.', '✔ Saved.'));
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
  toast(L('✔ Medicamento añadido.', '✔ Medication added.'));
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
  toast(L('✔ Guardado.', '✔ Saved.'));
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
  if (!wasDone) setTimeout(() => toast(t('game_xp_toast')), 200);
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
