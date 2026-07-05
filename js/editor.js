// editor.js
// "Modo médico": gestor de contenidos y personalización desde la interfaz.

import { esc } from './ui.js';
import { getPillars, getAllTasksForEditor, getResources, getPosts, parseYouTubeId, getDailyGoal } from './data.js';
import { ERAS_NOTE } from './content.js';

function pillarOptions(state, selected) {
  return getPillars(state).map((p) =>
    `<option value="${p.id}" ${p.id === selected ? 'selected' : ''}>${esc(p.emoji + ' ' + p.name)}</option>`
  ).join('');
}

function categoryOptions(state, selected) {
  return `<option value="general" ${selected === 'general' ? 'selected' : ''}>📌 General</option>` + pillarOptions(state, selected);
}

/* ---------- Vista principal del editor ---------- */

export function renderEditor(state, tab = 'tareas') {
  const tabs = [
    { id: 'tareas', label: '✅ Tareas' },
    { id: 'recursos', label: '🎬 Recursos' },
    { id: 'blog', label: '📝 Blog' },
    { id: 'ajustes', label: '⚙️ Metas' },
  ];
  const tabBar = `<div class="editor-tabs">${tabs.map((t) =>
    `<button class="etab ${t.id === tab ? 'active' : ''}" data-action="editor-tab" data-tab="${t.id}">${t.label}</button>`
  ).join('')}</div>`;

  let body = '';
  if (tab === 'tareas') body = renderTasksTab(state);
  else if (tab === 'recursos') body = renderResourcesTab(state);
  else if (tab === 'blog') body = renderBlogTab(state);
  else body = renderSettingsTab(state);

  return `
    <div class="section-label">🩺 Modo médico · gestión de contenidos</div>
    <p class="muted small editor-intro">Aquí puedes ampliar y personalizar la app sin tocar código: crea tareas, añade vídeos y publicaciones, y ajusta las metas.</p>
    ${tabBar}
    <div class="editor-body">${body}</div>`;
}

/* ---------- Pestaña: Tareas ---------- */

function renderTasksTab(state) {
  const pillars = getPillars(state);
  const all = getAllTasksForEditor(state);
  const groups = pillars.map((p) => {
    const tasks = all.filter((t) => t.pillar === p.id);
    if (tasks.length === 0) return '';
    const items = tasks.map((t) => `
      <div class="etask ${t.disabled ? 'off' : ''}">
        <div class="etask-main">
          <span>${t.icon || '•'} ${esc(t.title)}</span>
          <small class="muted">${t.type === 'counter' ? `meta ${t.target} ${esc(t.unit || '')} · ` : ''}+${t.xp} XP ${t.isDefault ? '' : '· personalizada'}</small>
        </div>
        <div class="etask-actions">
          <button class="mini-btn" data-action="edit-task" data-id="${t.id}">✏️</button>
          <button class="mini-btn" data-action="toggle-task-active" data-id="${t.id}">${t.disabled ? '👁️' : '🚫'}</button>
          ${t.isDefault ? '' : `<button class="mini-btn danger" data-action="delete-task" data-id="${t.id}">🗑️</button>`}
        </div>
      </div>`).join('');
    return `<section class="card" style="--pc:${p.color}">
      <div class="etask-group-head">${p.emoji} ${esc(p.name)}</div>
      ${items}
    </section>`;
  }).join('');

  return `
    <button class="btn primary block" data-action="new-task">➕ Añadir nueva tarea</button>
    ${groups}`;
}

export function taskFormHtml(state, task) {
  const isEdit = !!task;
  const isDefault = task ? task.isDefault : false;
  const t = task || { type: 'check', xp: 15, target: 10, unit: '', icon: '', pillar: getPillars(state)[0].id };
  return `
  <form id="form-task" class="stack-form">
    <input type="hidden" name="id" value="${isEdit ? esc(t.id) : ''}" />
    <input type="hidden" name="isDefault" value="${isDefault ? '1' : ''}" />
    <label>Título de la tarea
      <input name="title" type="text" required value="${esc(t.title || '')}" placeholder="Ej.: Paseo por la mañana" />
    </label>
    <label>Pilar / categoría
      <select name="pillar" ${isDefault ? 'disabled' : ''}>${pillarOptions(state, t.pillar)}</select>
    </label>
    <label>Icono (emoji, opcional)
      <input name="icon" type="text" maxlength="4" value="${esc(t.icon || '')}" placeholder="🚶" />
    </label>
    <label>Tipo
      <select name="type" ${isDefault ? 'disabled' : ''}>
        <option value="check" ${t.type === 'check' ? 'selected' : ''}>Casilla (hecho / no hecho)</option>
        <option value="counter" ${t.type === 'counter' ? 'selected' : ''}>Contador (con meta)</option>
      </select>
    </label>
    <div class="two-col">
      <label>Meta (si es contador)
        <input name="target" type="number" min="1" value="${esc(t.target || 10)}" />
      </label>
      <label>Unidad
        <input name="unit" type="text" value="${esc(t.unit || '')}" placeholder="min, reps, vasos" />
      </label>
    </div>
    <label>Puntos (XP) al completar
      <input name="xp" type="number" min="0" max="100" value="${esc(t.xp ?? 15)}" />
    </label>
    <label>Descripción
      <textarea name="desc" rows="3" placeholder="Instrucciones para el paciente">${esc(t.desc || '')}</textarea>
    </label>
    ${isDefault ? '<p class="muted small">Es una tarea del programa base: puedes personalizar sus textos, meta y puntos.</p>' : ''}
    <button type="submit" class="btn primary block">${isEdit ? 'Guardar cambios' : 'Crear tarea'}</button>
  </form>`;
}

/* ---------- Pestaña: Recursos ---------- */

function renderResourcesTab(state) {
  const res = getResources(state);
  const list = res.length ? res.map((r) => {
    const yt = parseYouTubeId(r.url);
    return `
      <div class="eres">
        <span class="eres-ico">${yt ? '▶️' : '🔗'}</span>
        <div class="eres-main"><strong>${esc(r.title)}</strong><small class="muted">${esc(r.desc || '')}</small></div>
        <div class="etask-actions">
          <button class="mini-btn" data-action="edit-resource" data-id="${r.id}">✏️</button>
          <button class="mini-btn danger" data-action="delete-resource" data-id="${r.id}">🗑️</button>
        </div>
      </div>`;
  }).join('') : '<p class="muted small">Aún no hay recursos. Añade tu primer vídeo o enlace.</p>';

  return `
    <button class="btn primary block" data-action="new-resource">➕ Añadir vídeo o enlace</button>
    <section class="card">${list}</section>
    <p class="muted small">Consejo: pega la dirección de un vídeo de YouTube (por ejemplo <em>youtube.com/watch?v=...</em>) y se mostrará incrustado dentro de la app.</p>`;
}

export function resourceFormHtml(state, res) {
  const isEdit = !!res;
  const r = res || { pillar: getPillars(state)[0].id, url: '', title: '', desc: '' };
  return `
  <form id="form-resource" class="stack-form">
    <input type="hidden" name="id" value="${isEdit ? esc(r.id) : ''}" />
    <label>Título
      <input name="title" type="text" required value="${esc(r.title || '')}" placeholder="Ej.: Meditación guiada 10 min" />
    </label>
    <label>Dirección (URL de YouTube u otro enlace)
      <input name="url" type="url" required value="${esc(r.url || '')}" placeholder="https://www.youtube.com/watch?v=..." />
    </label>
    <label>Pilar / categoría
      <select name="pillar">${pillarOptions(state, r.pillar)}</select>
    </label>
    <label>Descripción (opcional)
      <textarea name="desc" rows="2" placeholder="Breve descripción del recurso">${esc(r.desc || '')}</textarea>
    </label>
    <button type="submit" class="btn primary block">${isEdit ? 'Guardar cambios' : 'Añadir recurso'}</button>
  </form>`;
}

/* ---------- Pestaña: Blog ---------- */

function renderBlogTab(state) {
  const posts = getPosts(state);
  const list = posts.length ? posts.map((p) => `
    <div class="eres">
      <span class="eres-ico">📝</span>
      <div class="eres-main"><strong>${esc(p.title)}</strong><small class="muted">${esc(p.date || '')} · ${esc(p.category || 'general')}</small></div>
      <div class="etask-actions">
        <button class="mini-btn" data-action="edit-post" data-id="${p.id}">✏️</button>
        <button class="mini-btn danger" data-action="delete-post" data-id="${p.id}">🗑️</button>
      </div>
    </div>`).join('') : '<p class="muted small">Aún no hay publicaciones. Crea la primera entrada de tu blog.</p>';

  return `
    <button class="btn primary block" data-action="new-post">➕ Nueva publicación</button>
    <section class="card">${list}</section>`;
}

export function postFormHtml(state, post) {
  const isEdit = !!post;
  const p = post || { category: 'general', title: '', body: '', cover: '' };
  return `
  <form id="form-post" class="stack-form">
    <input type="hidden" name="id" value="${isEdit ? esc(p.id) : ''}" />
    <label>Título
      <input name="title" type="text" required value="${esc(p.title || '')}" placeholder="Título de la entrada" />
    </label>
    <label>Categoría
      <select name="category">${categoryOptions(state, p.category)}</select>
    </label>
    <label>Imagen de portada (URL, opcional)
      <input name="cover" type="url" value="${esc(p.cover || '')}" placeholder="https://..." />
    </label>
    <label>Contenido
      <textarea name="body" rows="9" required placeholder="Escribe aquí tu contenido. Puedes usar saltos de línea y viñetas con •">${esc(p.body || '')}</textarea>
    </label>
    <button type="submit" class="btn primary block">${isEdit ? 'Guardar cambios' : 'Publicar'}</button>
  </form>`;
}

/* ---------- Pestaña: Ajustes y metas ---------- */

function renderSettingsTab(state) {
  const s = state.settings;
  const goal = getDailyGoal(state);
  const rem = s.reminders;
  const timesChips = (rem.times || []).map((tm, i) =>
    `<span class="time-chip">${esc(tm)} <button data-action="remove-reminder-time" data-idx="${i}" aria-label="Quitar">✕</button></span>`
  ).join('');

  return `
    <section class="card">
      <h3>🎯 Meta diaria</h3>
      <p class="muted small">Puntos (XP) que el paciente debe sumar para completar el día.</p>
      <div class="goal-setter">
        <button class="stepper" data-action="goal-dec">−</button>
        <div class="counter-val">${goal} <small>XP/día</small></div>
        <button class="stepper" data-action="goal-inc">+</button>
      </div>
    </section>

    <section class="card">
      <h3>🔔 Recordatorios</h3>
      <label class="switch-row">
        <span>Activar recordatorios</span>
        <input type="checkbox" data-action="toggle-reminders" ${rem.enabled ? 'checked' : ''} />
      </label>
      <p class="muted small">Recibirás un aviso a las horas indicadas mientras la app esté abierta o instalada. Requiere permiso de notificaciones del navegador.</p>
      <div class="times-list">${timesChips || '<span class="muted small">Sin horas configuradas.</span>'}</div>
      <div class="add-time-row">
        <input type="time" id="new-reminder-time" value="09:00" />
        <button class="btn ghost" data-action="add-reminder-time">➕ Añadir hora</button>
      </div>
    </section>

    <section class="card">
      <h3>🔒 Protección del modo médico</h3>
      <label class="switch-row">
        <span>Pedir PIN para editar</span>
        <input type="checkbox" data-action="toggle-pin" ${s.editor.pinEnabled ? 'checked' : ''} />
      </label>
      ${s.editor.pinEnabled ? `
      <label>PIN (4 dígitos)
        <input type="text" inputmode="numeric" maxlength="4" id="editor-pin" value="${esc(s.editor.pin || '')}" placeholder="0000" />
        <button class="btn ghost" data-action="save-pin">Guardar PIN</button>
      </label>` : ''}
    </section>

    <section class="card">
      <h3>♿ Accesibilidad</h3>
      <label class="switch-row">
        <span>Reducir animaciones</span>
        <input type="checkbox" data-action="toggle-motion" ${s.reducedMotion ? 'checked' : ''} />
      </label>
    </section>

    <section class="card">
      <h3>💾 Datos</h3>
      <p class="muted small">Los datos se guardan solo en este dispositivo.</p>
      <div class="row-btns">
        <button class="btn ghost" data-action="export">⬇️ Exportar copia</button>
        <label class="btn ghost file-btn">⬆️ Importar
          <input type="file" id="import-file" accept="application/json" hidden />
        </label>
        <button class="btn danger ghost" data-action="reset">🗑️ Reiniciar todo</button>
      </div>
    </section>

    <section class="card disclaimer-card">
      <h3>ℹ️ Nota ERAS</h3>
      <p class="small">${esc(ERAS_NOTE)}</p>
    </section>`;
}
