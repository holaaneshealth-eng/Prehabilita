// editor.js
// "Modo médico": gestor de contenidos y personalización desde la interfaz (bilingüe).

import { esc } from './ui.js';
import { getPillars, getAllTasksForEditor, getResources, getPosts, parseYouTubeId, getDailyGoal } from './data.js';
import { ERAS_NOTE, ERAS_NOTE_EN } from './content.js';
import { t, tr, getLang, LANGS } from './i18n.js';

function L(es, en) { return getLang() === 'en' ? en : es; }

function pillarOptions(state, selected) {
  return getPillars(state).map((p) =>
    `<option value="${p.id}" ${p.id === selected ? 'selected' : ''}>${esc(p.emoji + ' ' + tr(p, 'name'))}</option>`
  ).join('');
}

function categoryOptions(state, selected) {
  return `<option value="general" ${selected === 'general' ? 'selected' : ''}>📌 ${L('General', 'General')}</option>` + pillarOptions(state, selected);
}

export function renderEditor(state, tab = 'tareas') {
  const tabs = [
    { id: 'tareas', label: t('ed_tab_tasks') },
    { id: 'recursos', label: t('ed_tab_res') },
    { id: 'blog', label: t('ed_tab_blog') },
    { id: 'ajustes', label: t('ed_tab_set') },
  ];
  const tabBar = `<div class="editor-tabs">${tabs.map((x) =>
    `<button class="etab ${x.id === tab ? 'active' : ''}" data-action="editor-tab" data-tab="${x.id}">${x.label}</button>`
  ).join('')}</div>`;

  let body = '';
  if (tab === 'tareas') body = renderTasksTab(state);
  else if (tab === 'recursos') body = renderResourcesTab(state);
  else if (tab === 'blog') body = renderBlogTab(state);
  else body = renderSettingsTab(state);

  return `
    <div class="section-label">${t('ed_title')}</div>
    <p class="muted small editor-intro">${t('ed_intro')}</p>
    ${tabBar}
    <div class="editor-body">${body}</div>`;
}

/* ---------- Pestaña: Tareas ---------- */

function renderTasksTab(state) {
  const pillars = getPillars(state);
  const all = getAllTasksForEditor(state);
  const groups = pillars.map((p) => {
    const tasks = all.filter((x) => x.pillar === p.id);
    if (tasks.length === 0) return '';
    const items = tasks.map((x) => `
      <div class="etask ${x.disabled ? 'off' : ''}">
        <div class="etask-main">
          <span>${x.icon || '•'} ${esc(tr(x, 'title'))}</span>
          <small class="muted">${x.type === 'counter' ? `${L('meta', 'goal')} ${x.target} ${esc(tr(x, 'unit'))} · ` : ''}+${x.xp} XP ${x.isDefault ? '' : '· ' + L('personalizada', 'custom')}</small>
        </div>
        <div class="etask-actions">
          <button class="mini-btn" data-action="edit-task" data-id="${x.id}">✏️</button>
          <button class="mini-btn" data-action="toggle-task-active" data-id="${x.id}">${x.disabled ? '👁️' : '🚫'}</button>
          ${x.isDefault ? '' : `<button class="mini-btn danger" data-action="delete-task" data-id="${x.id}">🗑️</button>`}
        </div>
      </div>`).join('');
    return `<section class="card" style="--pc:${p.color}">
      <div class="etask-group-head">${p.emoji} ${esc(tr(p, 'name'))}</div>
      ${items}
    </section>`;
  }).join('');

  return `<button class="btn primary block" data-action="new-task">${t('ed_add_task')}</button>${groups}`;
}

export function taskFormHtml(state, task) {
  const isEdit = !!task;
  const isDefault = task ? task.isDefault : false;
  const x = task || { type: 'check', xp: 15, target: 10, unit: '', icon: '', pillar: getPillars(state)[0].id };
  // En tareas base mostramos el texto en el idioma activo (traducido); en personalizadas, el texto propio.
  const titleVal = isDefault ? tr(x, 'title') : (x.title || '');
  const descVal = isDefault ? tr(x, 'desc') : (x.desc || '');
  const unitVal = isDefault ? tr(x, 'unit') : (x.unit || '');
  return `
  <form id="form-task" class="stack-form">
    <input type="hidden" name="id" value="${isEdit ? esc(x.id) : ''}" />
    <input type="hidden" name="isDefault" value="${isDefault ? '1' : ''}" />
    <label>${L('Título de la tarea', 'Task title')}
      <input name="title" type="text" required value="${esc(titleVal)}" placeholder="${L('Ej.: Paseo por la mañana', 'E.g.: Morning walk')}" />
    </label>
    <label>${L('Pilar / categoría', 'Pillar / category')}
      <select name="pillar" ${isDefault ? 'disabled' : ''}>${pillarOptions(state, x.pillar)}</select>
    </label>
    <label>${L('Icono (emoji, opcional)', 'Icon (emoji, optional)')}
      <input name="icon" type="text" maxlength="4" value="${esc(x.icon || '')}" placeholder="🚶" />
    </label>
    <label>${L('Tipo', 'Type')}
      <select name="type" ${isDefault ? 'disabled' : ''}>
        <option value="check" ${x.type === 'check' ? 'selected' : ''}>${L('Casilla (hecho / no hecho)', 'Checkbox (done / not done)')}</option>
        <option value="counter" ${x.type === 'counter' ? 'selected' : ''}>${L('Contador (con meta)', 'Counter (with a goal)')}</option>
      </select>
    </label>
    <div class="two-col">
      <label>${L('Meta (si es contador)', 'Goal (if counter)')}
        <input name="target" type="number" min="1" value="${esc(x.target || 10)}" />
      </label>
      <label>${L('Unidad', 'Unit')}
        <input name="unit" type="text" value="${esc(unitVal)}" placeholder="${L('min, reps, vasos', 'min, reps, glasses')}" />
      </label>
    </div>
    <label>${L('Puntos (XP) al completar', 'Points (XP) on completion')}
      <input name="xp" type="number" min="0" max="100" value="${esc(x.xp ?? 15)}" />
    </label>
    <label>${L('Descripción', 'Description')}
      <textarea name="desc" rows="3" placeholder="${L('Instrucciones para el paciente', 'Instructions for the patient')}">${esc(descVal)}</textarea>
    </label>
    ${isDefault ? `<p class="muted small">${L('Es una tarea del programa base: puedes personalizar sus textos, meta y puntos.', 'This is a base-program task: you can customize its text, goal and points.')}</p>` : ''}
    <button type="submit" class="btn primary block">${isEdit ? t('save_changes') : L('Crear tarea', 'Create task')}</button>
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
  }).join('') : `<p class="muted small">${L('Aún no hay recursos. Añade tu primer vídeo o enlace.', 'No resources yet. Add your first video or link.')}</p>`;

  return `
    <button class="btn primary block" data-action="new-resource">${t('ed_add_res')}</button>
    <section class="card">${list}</section>
    <p class="muted small">${L('Consejo: pega la dirección de un vídeo de YouTube y se mostrará incrustado dentro de la app.', 'Tip: paste a YouTube video URL and it will be embedded inside the app.')}</p>`;
}

export function resourceFormHtml(state, res) {
  const isEdit = !!res;
  const r = res || { pillar: getPillars(state)[0].id, url: '', title: '', desc: '' };
  return `
  <form id="form-resource" class="stack-form">
    <input type="hidden" name="id" value="${isEdit ? esc(r.id) : ''}" />
    <label>${L('Título', 'Title')}
      <input name="title" type="text" required value="${esc(r.title || '')}" placeholder="${L('Ej.: Meditación guiada 10 min', 'E.g.: Guided meditation 10 min')}" />
    </label>
    <label>${L('Dirección (URL de YouTube u otro enlace)', 'Address (YouTube URL or other link)')}
      <input name="url" type="url" required value="${esc(r.url || '')}" placeholder="https://www.youtube.com/watch?v=..." />
    </label>
    <label>${L('Pilar / categoría', 'Pillar / category')}
      <select name="pillar">${pillarOptions(state, r.pillar)}</select>
    </label>
    <label>${L('Descripción (opcional)', 'Description (optional)')}
      <textarea name="desc" rows="2" placeholder="${L('Breve descripción del recurso', 'Short description of the resource')}">${esc(r.desc || '')}</textarea>
    </label>
    <button type="submit" class="btn primary block">${isEdit ? t('save_changes') : L('Añadir recurso', 'Add resource')}</button>
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
    </div>`).join('') : `<p class="muted small">${L('Aún no hay publicaciones. Crea la primera entrada de tu blog.', 'No articles yet. Create the first entry of your blog.')}</p>`;

  return `<button class="btn primary block" data-action="new-post">${t('ed_new_post')}</button><section class="card">${list}</section>`;
}

export function postFormHtml(state, post) {
  const isEdit = !!post;
  const p = post || { category: 'general', title: '', body: '', cover: '' };
  return `
  <form id="form-post" class="stack-form">
    <input type="hidden" name="id" value="${isEdit ? esc(p.id) : ''}" />
    <label>${L('Título', 'Title')}
      <input name="title" type="text" required value="${esc(p.title || '')}" placeholder="${L('Título de la entrada', 'Article title')}" />
    </label>
    <label>${L('Categoría', 'Category')}
      <select name="category">${categoryOptions(state, p.category)}</select>
    </label>
    <label>${L('Imagen de portada (URL, opcional)', 'Cover image (URL, optional)')}
      <input name="cover" type="url" value="${esc(p.cover || '')}" placeholder="https://..." />
    </label>
    <label>${L('Contenido', 'Content')}
      <textarea name="body" rows="9" required placeholder="${L('Escribe aquí tu contenido. Puedes usar saltos de línea y viñetas con •', 'Write your content here. You can use line breaks and bullets with •')}">${esc(p.body || '')}</textarea>
    </label>
    <button type="submit" class="btn primary block">${isEdit ? t('save_changes') : L('Publicar', 'Publish')}</button>
  </form>`;
}

/* ---------- Pestaña: Ajustes y metas ---------- */

function renderSettingsTab(state) {
  const s = state.settings;
  const goal = getDailyGoal(state);
  const rem = s.reminders;
  const timesChips = (rem.times || []).map((tm, i) =>
    `<span class="time-chip">${esc(tm)} <button data-action="remove-reminder-time" data-idx="${i}" aria-label="✕">✕</button></span>`
  ).join('');
  const langOptions = LANGS.map((l) => `<option value="${l.id}" ${s.lang === l.id ? 'selected' : ''}>${l.flag} ${l.label}</option>`).join('');

  return `
    <section class="card">
      <h3>${t('set_language')}</h3>
      <p class="muted small">${t('set_language_note')}</p>
      <select class="lang-select" data-action="set-lang">${langOptions}</select>
    </section>

    <section class="card">
      <h3>${t('set_goal')}</h3>
      <p class="muted small">${t('set_goal_note')}</p>
      <div class="goal-setter">
        <button class="stepper" data-action="goal-dec">−</button>
        <div class="counter-val">${goal} <small>${t('set_goal_unit')}</small></div>
        <button class="stepper" data-action="goal-inc">+</button>
      </div>
    </section>

    <section class="card">
      <h3>${t('set_reminders')}</h3>
      <label class="switch-row"><span>${t('set_reminders_on')}</span>
        <input type="checkbox" data-action="toggle-reminders" ${rem.enabled ? 'checked' : ''} /></label>
      <p class="muted small">${t('set_reminders_note')}</p>
      <div class="times-list">${timesChips || `<span class="muted small">${t('set_no_times')}</span>`}</div>
      <div class="add-time-row">
        <input type="time" id="new-reminder-time" value="09:00" />
        <button class="btn ghost" data-action="add-reminder-time">${t('set_add_time')}</button>
      </div>
    </section>

    <section class="card">
      <h3>${t('set_pin_title')}</h3>
      <label class="switch-row"><span>${t('set_pin_ask')}</span>
        <input type="checkbox" data-action="toggle-pin" ${s.editor.pinEnabled ? 'checked' : ''} /></label>
      ${s.editor.pinEnabled ? `
      <label>PIN
        <input type="text" inputmode="numeric" maxlength="4" id="editor-pin" value="${esc(s.editor.pin || '')}" placeholder="0000" />
        <button class="btn ghost" data-action="save-pin">${t('save')} PIN</button>
      </label>` : ''}
    </section>

    <section class="card">
      <h3>${t('set_access')}</h3>
      <p class="muted small">${t('set_access_note')}</p>
      <label class="switch-row"><span>${t('set_large')}</span><input type="checkbox" data-action="toggle-large-text" ${s.largeText ? 'checked' : ''} /></label>
      <label class="switch-row"><span>${t('set_contrast')}</span><input type="checkbox" data-action="toggle-contrast" ${s.highContrast ? 'checked' : ''} /></label>
      <label class="switch-row"><span>${t('set_motion')}</span><input type="checkbox" data-action="toggle-motion" ${s.reducedMotion ? 'checked' : ''} /></label>
    </section>

    <section class="card">
      <h3>${t('set_data')}</h3>
      <p class="muted small">${t('set_data_note')}</p>
      <div class="row-btns">
        <button class="btn ghost" data-action="export">${t('set_export')}</button>
        <label class="btn ghost file-btn">${t('set_import')}<input type="file" id="import-file" accept="application/json" hidden /></label>
        <button class="btn danger ghost" data-action="reset">${t('set_reset')}</button>
      </div>
    </section>

    <section class="card disclaimer-card">
      <h3>${t('set_eras')}</h3>
      <p class="small">${esc(getLang() === 'en' ? ERAS_NOTE_EN : ERAS_NOTE)}</p>
    </section>`;
}
