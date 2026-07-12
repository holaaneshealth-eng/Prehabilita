// ui.js
// Renderizado de vistas (funciones puras que devuelven HTML). Bilingüe vía i18n.

import {
  PREOP_CHECKLIST, PREOP_CHECKLIST_EN, PREOP_CHECKLIST_CA,
  DISCLAIMER, DISCLAIMER_EN, DISCLAIMER_CA, ERAS_NOTE, ERAS_NOTE_EN, ERAS_NOTE_CA,
  ALARM_SIGNS, ALARM_SIGNS_EN, ALARM_SIGNS_CA, CAREGIVER_TIPS, FRAIL_QUESTIONS, frailResult, getPhase,
  EDMONTON_QUESTIONS, edmontonResult, PRIVACY_POINTS,
} from './content.js';
import { todayKey, daysBetween, listProfiles, getActiveProfileId, assessmentHistory } from './state.js';
import { GAD7, PHQ9, DASI, MUST, FREQ_OPTIONS, MUST_WEIGHTLOSS, SCALE_LIST, scaleMeta, resultForScale } from './scales.js';
import {
  levelInfo, dayXp, isDayComplete, tasksDoneCount, taskIsDone, getWeeklyChallenge,
} from './gamification.js';
import {
  getTasks, getPillars, getPillarById, getLessons, getPosts, getPostById,
  getResources, getDailyGoal, parseYouTubeId, youTubeEmbedUrl,
} from './data.js';
import { t, tr, getLang, LANGS, pickArr } from './i18n.js';

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

export function formatBody(body) {
  return esc(body).replace(/\n/g, '<br>');
}

function disc() { return pickArr([DISCLAIMER], [DISCLAIMER_EN], [DISCLAIMER_CA])[0]; }
function erasNote() { return pickArr([ERAS_NOTE], [ERAS_NOTE_EN], [ERAS_NOTE_CA])[0]; }

export function daysToSurgery(state) {
  const d = state.profile.surgeryDate;
  if (!d) return null;
  return daysBetween(d, todayKey());
}

/* ---------- Componentes ---------- */

function progressBar(pct, color = 'var(--accent)') {
  const p = Math.max(0, Math.min(100, Math.round(pct)));
  return `<div class="bar"><span style="width:${p}%;background:${color}"></span></div>`;
}

function statChip(icon, value, label) {
  return `<div class="chip"><span class="chip-ico">${icon}</span><div><strong>${esc(value)}</strong><small>${esc(label)}</small></div></div>`;
}

/* ---------- Cabecera ---------- */

export function renderHeader(state) {
  const li = levelInfo(state.stats.xp);
  const dts = daysToSurgery(state);
  let countdown = '';
  if (dts === null) {
    countdown = `<div class="countdown neutral"><strong>—</strong><small>${t('date_unset')}</small></div>`;
  } else if (dts > 0) {
    countdown = `<div class="countdown"><strong>${dts}</strong><small>${t('days_to_surgery', { s: dts === 1 ? '' : (getLang() === 'en' ? 's' : 's') })}</small></div>`;
  } else if (dts === 0) {
    countdown = `<div class="countdown today"><strong>${t('today')}</strong><small>${t('its_the_day')}</small></div>`;
  } else {
    countdown = `<div class="countdown neutral"><strong>+${Math.abs(dts)}</strong><small>${t('post_surgery')}</small></div>`;
  }

  return `
  <header class="app-header">
    <div class="header-top">
      <div class="brand">
        <span class="brand-logo">🫁</span>
        <div>
          <div class="brand-name">PreHabilítame</div>
          <div class="brand-sub">${t('greeting', { name: esc(state.profile.name || t('patient_default')) })}</div>
        </div>
      </div>
      ${countdown}
    </div>
    <div class="level-row">
      <div class="level-badge">${t('level_abbr')} ${li.level}</div>
      <div class="level-bar">
        ${progressBar(li.progress * 100)}
        <div class="level-xp">${li.into} / ${li.span} XP</div>
      </div>
      <div class="streak" title="${t('streak_title')}">🔥 ${state.stats.streak}</div>
    </div>
  </header>`;
}

/* ---------- Banner de fase (plan adaptativo) ---------- */

function phaseBanner(state) {
  const dts = daysToSurgery(state);
  const ph = getPhase(dts);
  return `
    <section class="card phase-banner" style="--pc:${ph.color}">
      <div class="phase-head"><span class="phase-emoji">${ph.emoji}</span>
        <div><small class="muted">${t('phase_label')}</small><strong class="phase-title">${esc(tr(ph, 'title'))}</strong></div>
      </div>
      <p class="phase-focus">${esc(tr(ph, 'focus'))}</p>
    </section>`;
}

/** Sugerencia de reevaluación cuando se acerca la cirugía y ya hay medida basal. */
function reevalBanner(state) {
  const dts = daysToSurgery(state);
  if (dts == null || dts < 0 || dts > 3) return '';
  const hasBaseline = SCALE_LIST.some((sc) => assessmentHistory(sc.id).length > 0);
  if (!hasBaseline) return '';
  return `<section class="card reeval-card">
    <p>${t('assess_reeval_soon')}</p>
    <button class="btn primary block" data-action="nav" data-view="evaluaciones">${t('m_assess')}</button>
  </section>`;
}

/* ---------- Vista: HOY ---------- */

export function renderToday(state) {
  const tasks = getTasks(state);
  const goal = getDailyGoal(state);
  const dayLog = state.logs[todayKey()] || { tasks: {} };
  const xp = dayXp(dayLog, tasks);
  const complete = isDayComplete(dayLog, tasks, goal);
  const doneN = tasksDoneCount(dayLog, tasks);
  const goalPct = (xp / goal) * 100;
  const wc = getWeeklyChallenge(state);
  const pillars = getPillars(state);

  const dailyCard = `
    <section class="card daily-goal ${complete ? 'is-complete' : ''}">
      <div class="daily-goal-head">
        <div>
          <h2>${t('today_title')}</h2>
          <p class="muted">${complete ? t('goal_reached') : t('add_more_xp', { n: Math.max(0, goal - xp) })}</p>
        </div>
        <div class="daily-ring">${doneN}<small>${t('tasks_word')}</small></div>
      </div>
      ${progressBar(goalPct)}
      <div class="daily-goal-foot">
        <span>${t('daily_xp', { a: xp, b: goal })}</span>
        ${complete ? `<span class="badge-ok">${t('day_complete')}</span>` : ''}
      </div>
    </section>`;

  const challengeCard = `
    <section class="card challenge">
      <div class="challenge-head"><span>🎯 ${esc(tr(wc.challenge, 'title'))}</span><span class="challenge-xp">+${wc.challenge.xp} XP</span></div>
      ${progressBar((wc.progress / wc.target) * 100, '#f59e0b')}
      <div class="muted small">${wc.progress} / ${wc.target} ${esc(tr(wc.challenge, 'unit'))} ${wc.done ? '· ' + t('completed_excl') + ' ✅' : ''}</div>
    </section>`;

  const groups = pillars.map((p) => {
    const pt = tasks.filter((x) => x.pillar === p.id);
    if (pt.length === 0) return '';
    const items = pt.map((x) => renderTaskItem(x, dayLog)).join('');
    const doneInPillar = pt.filter((x) => taskIsDone(x, dayLog)).length;
    return `
      <section class="card pillar-group" style="--pc:${p.color}">
        <button class="pillar-head" data-action="open-pillar" data-pillar="${p.id}">
          <span class="pillar-emoji">${p.emoji}</span>
          <span class="pillar-title">${esc(tr(p, 'name'))}</span>
          <span class="pillar-count">${doneInPillar}/${pt.length}</span>
        </button>
        <div class="task-list">${items}</div>
      </section>`;
  }).join('');

  return `
    ${phaseBanner(state)}
    ${reevalBanner(state)}
    ${dailyCard}
    ${challengeCard}
    <div class="section-label">${t('tasks_today')}</div>
    ${groups}
    ${moodCard(dayLog)}
    <p class="disclaimer-mini" data-action="show-disclaimer">${t('disclaimer_link')}</p>
  `;
}

/**
 * Bloque de descripción de una tarea. Si la tarea tiene un resumen breve,
 * se muestra el resumen (frase completa) con un botón para desplegar la
 * explicación detallada. Si no, se muestra la descripción tal cual.
 */
function taskDescBlock(tk) {
  const desc = tr(tk, 'desc');
  const summary = tr(tk, 'summary');
  if (summary && summary !== desc) {
    return `<div class="task-desc has-detail">
      <p class="task-summary">${esc(summary)}</p>
      <div class="task-detail" hidden>${esc(desc)}</div>
      <button type="button" class="task-more" data-action="toggle-desc" aria-expanded="false">${t('read_more')}</button>
    </div>`;
  }
  return `<div class="task-desc">${esc(desc)}</div>`;
}

function renderTaskItem(tk, dayLog) {
  const v = dayLog.tasks[tk.id];
  const done = taskIsDone(tk, dayLog);
  const title = tr(tk, 'title');
  if (tk.type === 'check') {
    return `
      <div class="task ${done ? 'done' : ''}">
        <button class="task-check" data-action="toggle-task" data-task="${tk.id}" aria-pressed="${done}" aria-label="${esc(title)}">${done ? '✔' : ''}</button>
        <div class="task-body">
          <div class="task-title">${esc(tk.icon || '')} ${esc(title)}</div>
          ${taskDescBlock(tk)}
        </div>
        <div class="task-xp">+${tk.xp}</div>
      </div>`;
  }
  const cur = typeof v === 'number' ? v : 0;
  const pct = Math.min(100, (cur / tk.target) * 100);
  return `
    <div class="task counter ${done ? 'done' : ''}">
      <div class="task-body">
        <div class="task-title">${esc(tk.icon || '')} ${esc(title)} ${done ? '✔' : ''}</div>
        ${taskDescBlock(tk)}
        <div class="counter-row">
          <button class="stepper" data-action="counter-dec" data-task="${tk.id}" aria-label="−">−</button>
          <div class="counter-val">${cur} <small>/ ${tk.target} ${esc(tr(tk, 'unit'))}</small></div>
          <button class="stepper" data-action="counter-inc" data-task="${tk.id}" aria-label="+">+</button>
        </div>
        ${progressBar(pct)}
      </div>
      <div class="task-xp">+${tk.xp}</div>
    </div>`;
}

function moodCard(dayLog) {
  const moods = ['😣', '😕', '😐', '🙂', '😄'];
  const cur = dayLog.mood;
  const btns = moods.map((m, i) => `
    <button class="mood-btn ${cur === i + 1 ? 'sel' : ''}" data-action="set-mood" data-mood="${i + 1}" aria-label="${i + 1}/5">${m}</button>
  `).join('');
  return `<section class="card mood"><h3>${t('mood_question')}</h3><div class="mood-row">${btns}</div></section>`;
}

/* ---------- Vista: PLAN ---------- */

export function renderPlan(state) {
  const tasks = getTasks(state);
  const cards = getPillars(state).map((p) => {
    const pt = tasks.filter((x) => x.pillar === p.id);
    if (pt.length === 0) return '';
    return `
      <section class="card plan-pillar" style="--pc:${p.color}">
        <div class="plan-pillar-head">
          <span class="pillar-emoji">${p.emoji}</span>
          <div><h3>${esc(tr(p, 'name'))}</h3><p class="muted small">${esc(tr(p, 'tagline'))}</p></div>
        </div>
        ${tr(p, 'why') ? `<p class="why">💡 ${esc(tr(p, 'why'))}</p>` : ''}
        <ul class="plan-tasks">
          ${pt.map((x) => `<li><span>${esc(x.icon || '•')}</span><div><strong>${esc(tr(x, 'title'))}</strong><br><small class="muted">${esc(tr(x, 'desc'))}</small></div><span class="xp-tag">+${x.xp}</span></li>`).join('')}
        </ul>
      </section>`;
  }).join('');
  return `<div class="section-label">${t('plan_title')}</div>${phaseBanner(state)}${cards}`;
}

/* ---------- Vista: PROGRESO ---------- */

export function renderProgress(state, charts) {
  const li = levelInfo(state.stats.xp);
  const tasks = getTasks(state);
  const goal = getDailyGoal(state);

  const chips = `
    <div class="chips">
      ${statChip('⭐', li.level, t('st_level'))}
      ${statChip('✨', state.stats.xp, t('st_xp'))}
      ${statChip('🔥', state.stats.streak, t('st_streak'))}
      ${statChip('🏅', state.stats.bestStreak, t('st_best'))}
      ${statChip('📅', state.stats.daysCompleted, t('st_days'))}
      ${statChip('🎖️', state.badges.length, t('st_medals'))}
    </div>`;

  const lineData = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = todayKey(d);
    const log = state.logs[key];
    lineData.push({ label: key.slice(8) + '/' + key.slice(5, 7), value: log ? dayXp(log, tasks) : 0 });
  }
  const lineCard = `<section class="card"><h3>${t('chart_xp')}</h3>${charts.lineChart(lineData, { color: '#0f766e' })}</section>`;

  const pillars = getPillars(state);
  const barData = pillars.map((p) => {
    const pt = tasks.filter((x) => x.pillar === p.id);
    if (pt.length === 0) return null;
    let done = 0, possible = 0;
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const log = state.logs[todayKey(d)];
      possible += pt.length;
      if (log) done += pt.filter((x) => taskIsDone(x, log)).length;
    }
    const pctv = possible ? Math.round((done / possible) * 100) : 0;
    return { label: p.emoji, value: pctv, color: p.color, sub: pctv + '%' };
  }).filter(Boolean);
  const barCard = `<section class="card"><h3>${t('chart_adh')}</h3>${charts.barChart(barData)}</section>`;

  const cells = [];
  for (let i = 20; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = todayKey(d);
    const log = state.logs[key];
    const xp = log ? dayXp(log, tasks) : 0;
    const lvl = xp === 0 ? 0 : xp >= goal ? 3 : xp >= goal / 2 ? 2 : 1;
    cells.push(`<div class="heat l${lvl}" title="${key}: ${xp} XP"></div>`);
  }
  const heat = `<section class="card"><h3>${t('consistency')}</h3><div class="heatmap">${cells.join('')}</div>
    <div class="heat-legend"><span>${t('less')}</span><i class="heat l0"></i><i class="heat l1"></i><i class="heat l2"></i><i class="heat l3"></i><span>${t('more')}</span></div></section>`;

  const moodLogs = Object.entries(state.logs).filter(([, l]) => l.mood).sort((a, b) => a[0].localeCompare(b[0])).slice(-7);
  const moodEmoji = ['', '😣', '😕', '😐', '🙂', '😄'];
  const moodRow = moodLogs.length
    ? `<section class="card"><h3>${t('recent_mood')}</h3><div class="mood-history">${moodLogs.map(([k, l]) => `<div class="mh"><span>${moodEmoji[l.mood]}</span><small>${k.slice(5)}</small></div>`).join('')}</div></section>`
    : '';

  const reportBtn = `<button class="btn ghost block" data-action="nav" data-view="report">${t('report_btn')}</button>`;

  return `${chips}${lineCard}${barCard}${heat}${moodRow}${reportBtn}`;
}

/* ---------- Vista: LOGROS ---------- */

export function renderBadges(state, BADGES) {
  const unlocked = new Set(state.badges);
  const grid = BADGES.map((b) => {
    const has = unlocked.has(b.id);
    return `<div class="badge ${has ? 'unlocked' : 'locked'}">
      <div class="badge-emoji">${has ? b.emoji : '🔒'}</div>
      <div class="badge-name">${esc(tr(b, 'name'))}</div>
      <div class="badge-desc">${esc(tr(b, 'desc'))}</div>
    </div>`;
  }).join('');
  return `<div class="section-label">${t('medals_title')} · ${state.badges.length}/${BADGES.length}</div><div class="badge-grid">${grid}</div>`;
}

/* ---------- Vista: RECURSOS ---------- */

export function renderResources(state) {
  const resources = getResources(state);
  if (resources.length === 0) {
    return `
      <div class="section-label">${t('res_library')}</div>
      <section class="card empty-state">
        <div class="empty-emoji">🎬</div>
        <p>${t('res_empty_1')}</p>
        <p class="muted small">${t('res_empty_2')}</p>
        <button class="btn primary" data-action="nav" data-view="editor" data-tab="recursos">${t('res_add')}</button>
      </section>`;
  }
  const byPillar = getPillars(state).map((p) => {
    const rs = resources.filter((r) => r.pillar === p.id);
    if (rs.length === 0) return '';
    return `<div class="section-label" style="color:${p.color}">${p.emoji} ${esc(tr(p, 'name'))}</div>${rs.map(renderResourceCard).join('')}`;
  }).join('');
  const known = new Set(getPillars(state).map((p) => p.id));
  const others = resources.filter((r) => !known.has(r.pillar));
  const otherHtml = others.length ? `<div class="section-label">${t('res_other')}</div>${others.map(renderResourceCard).join('')}` : '';
  return `<div class="section-label">${t('res_library')}</div>${byPillar}${otherHtml}`;
}

function renderResourceCard(r) {
  const ytId = parseYouTubeId(r.url);
  const title = tr(r, 'title');
  const desc = tr(r, 'desc');
  if (ytId) {
    return `<section class="card resource">
      <div class="resource-title">▶️ ${esc(title)}</div>
      ${desc ? `<p class="muted small">${esc(desc)}</p>` : ''}
      <div class="video"><iframe src="${youTubeEmbedUrl(ytId)}" title="${esc(title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </section>`;
  }
  return `<section class="card resource">
    <div class="resource-title">🔗 ${esc(title)}</div>
    ${desc ? `<p class="muted small">${esc(desc)}</p>` : ''}
    <a class="btn ghost block" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${t('res_open')}</a>
  </section>`;
}

/* ---------- Vista: APRENDE ---------- */

export function renderLearn(state) {
  const posts = getPosts(state);
  const readPosts = new Set(state.readPosts || []);
  const postCards = posts.length ? posts.map((p) => `
    <button class="post-card ${readPosts.has(p.id) ? 'read' : ''}" data-action="open-post" data-id="${p.id}">
      ${p.cover ? `<div class="post-cover" style="background-image:url('${esc(p.cover)}')"></div>` : `<div class="post-cover ph">📝</div>`}
      <div class="post-info"><strong>${esc(tr(p, 'title'))}</strong><small class="muted">${esc(p.date || '')} · ${esc(p.category || 'general')}</small></div>
    </button>`).join('') : `<p class="muted small">${t('learn_no_posts')}</p>`;

  const read = new Set(state.readLessons);
  const lessons = getLessons().map((l) => `
    <details class="card lesson ${read.has(l.id) ? 'read' : ''}" data-lesson="${l.id}" data-speak-scope>
      <summary>${read.has(l.id) ? '✅' : '📖'} ${esc(tr(l, 'title'))}</summary>
      <div class="speakable lesson-body">${formatBody(tr(l, 'body'))}</div>
      <button class="btn ghost speak-btn" data-action="speak">${t('listen')}</button>
    </details>`).join('');

  const preop = pickArr(PREOP_CHECKLIST, PREOP_CHECKLIST_EN, PREOP_CHECKLIST_CA);
  const checklist = preop.map((c) => `<li>☐ ${esc(c)}</li>`).join('');

  return `
    <div class="section-label">${t('learn_posts')}</div>
    <div class="post-list">${postCards}</div>
    <div class="section-label">${t('learn_pills')}</div>
    ${lessons}
    <section class="card">
      <h3>${t('preop_title')}</h3>
      <ul class="preop">${checklist}</ul>
      <p class="muted small">${t('preop_note')}</p>
    </section>
    <section class="card disclaimer-card"><h3>${t('med_notice')}</h3><p class="small">${esc(disc())}</p></section>`;
}

export function renderPost(state, id) {
  const p = getPostById(state, id);
  if (!p) return `<p class="muted">${t('post_not_found')}</p>`;
  const pillar = getPillarById(state, p.category);
  return `
    <button class="btn ghost back-btn" data-action="nav" data-view="aprende">${t('back')}</button>
    <article class="card post-full" data-speak-scope>
      ${p.cover ? `<div class="post-cover-full" style="background-image:url('${esc(p.cover)}')"></div>` : ''}
      <span class="post-tag">${pillar ? pillar.emoji + ' ' + esc(tr(pillar, 'name')) : esc(p.category || 'general')}</span>
      <h2>${esc(tr(p, 'title'))}</h2>
      <div class="post-meta muted small">${esc(p.date || '')}${p.author ? ' · ' + esc(p.author) : ''}</div>
      <button class="btn ghost speak-btn" data-action="speak">${t('listen')}</button>
      <div class="post-body speakable">${formatBody(tr(p, 'body'))}</div>
    </article>`;
}

/* ---------- Vista: MÁS ---------- */

export function renderMore(state) {
  const items = [
    { view: 'evaluaciones', icon: '🩺', label: t('m_assess'), sub: t('m_assess_sub') },
    { view: 'medicacion', icon: '💊', label: t('m_meds'), sub: t('m_meds_sub') },
    { view: 'cuidador', icon: '🤝', label: t('m_care'), sub: t('m_care_sub') },
    { view: 'juego', icon: '🧩', label: t('m_game'), sub: t('m_game_sub') },
    { view: 'report', icon: '📄', label: t('m_report'), sub: t('m_report_sub') },
    { view: 'plan', icon: '📋', label: t('m_plan'), sub: t('m_plan_sub') },
    { view: 'logros', icon: '🏅', label: t('m_badges'), sub: t('m_badges_sub', { n: state.badges.length }) },
    { view: 'perfiles', icon: '👥', label: t('m_profiles'), sub: t('m_profiles_sub') },
    { view: 'preferencias', icon: '🌍', label: t('m_prefs'), sub: t('m_prefs_sub') },
    { view: 'privacidad', icon: '🔒', label: t('m_privacy'), sub: t('m_privacy_sub') },
    { view: 'editor', icon: '🩺', label: t('m_editor'), sub: t('m_editor_sub') },
  ];
  const menu = items.map((i) => `
    <button class="more-item" data-action="nav" data-view="${i.view}" ${i.tab ? `data-tab="${i.tab}"` : ''}>
      <span class="more-ico">${i.icon}</span>
      <span class="more-txt"><strong>${esc(i.label)}</strong><small class="muted">${esc(i.sub)}</small></span>
      <span class="more-arrow">›</span>
    </button>`).join('');

  return `
    <div class="section-label">${t('more_options')}</div>
    <section class="card more-menu">${menu}</section>
    <section class="card">
      <h3>${t('personal_data')}</h3>
      <p class="muted small">${esc(state.profile.surgeryType || t('surgery_unset'))}${state.profile.surgeryDate ? ' · ' + esc(state.profile.surgeryDate) : ''}</p>
      <button class="btn ghost block" data-action="edit-profile">${t('edit_my_data')}</button>
    </section>
    <section class="card disclaimer-card"><h3>${t('med_notice')}</h3><p class="small">${esc(disc())}</p></section>`;
}

export function profileFormHtml(state) {
  const p = state.profile;
  return `
  <form id="form-profile" class="stack-form">
    <label>${t('f_name')}<input name="name" type="text" required value="${esc(p.name || '')}" /></label>
    <label>${t('f_surgery_type')}<input name="surgeryType" type="text" value="${esc(p.surgeryType || '')}" placeholder="${t('onb_surgery_ph')}" /></label>
    <label>${t('f_surgery_date')}<input name="surgeryDate" type="date" value="${esc(p.surgeryDate || '')}" /></label>
    <label>${t('f_activity')}
      <select name="activityLevel">
        <option value="bajo" ${p.activityLevel === 'bajo' ? 'selected' : ''}>${t('act_low')}</option>
        <option value="medio" ${p.activityLevel === 'medio' ? 'selected' : ''}>${t('act_med')}</option>
        <option value="alto" ${p.activityLevel === 'alto' ? 'selected' : ''}>${t('act_high')}</option>
      </select>
    </label>
    <label class="check-inline"><input name="smoker" type="checkbox" ${p.smoker ? 'checked' : ''} /> ${t('smoker')}</label>
    <button type="submit" class="btn primary block">${t('save')}</button>
  </form>`;
}

/* ---------- Navegación inferior ---------- */

export function renderNav(route) {
  const items = [
    { id: 'hoy', icon: '🏠', label: t('nav_hoy') },
    { id: 'recursos', icon: '🎬', label: t('nav_recursos') },
    { id: 'progreso', icon: '📈', label: t('nav_progreso') },
    { id: 'aprende', icon: '📚', label: t('nav_aprende') },
    { id: 'mas', icon: '⋯', label: t('nav_mas') },
  ];
  const activeSet = {
    hoy: 'hoy', recursos: 'recursos', progreso: 'progreso', aprende: 'aprende', post: 'aprende',
    mas: 'mas', plan: 'mas', logros: 'mas', editor: 'mas',
    fragilidad: 'mas', medicacion: 'mas', cuidador: 'mas', juego: 'mas', report: 'mas', perfiles: 'mas',
    preferencias: 'mas', edmonton: 'mas',
    evaluaciones: 'mas', gad7: 'mas', phq9: 'mas', dasi: 'mas', must: 'mas',
    privacidad: 'mas',
  };
  return `<nav class="bottom-nav">${items.map((i) => `
    <button class="nav-item ${activeSet[route] === i.id ? 'active' : ''}" data-action="nav" data-view="${i.id}">
      <span class="nav-ico">${i.icon}</span><span class="nav-lbl">${i.label}</span>
    </button>`).join('')}</nav>`;
}

/* ---------- Onboarding ---------- */

export function renderOnboarding() {
  const today = todayKey();
  return `
  <div class="onboarding">
    <div class="onb-hero">
      <div class="onb-logo">🫁</div>
      <h1>PreHabilítame</h1>
      <p>${t('onb_tagline')}</p>
    </div>
    <form id="onb-form" class="card onb-form">
      <label>${t('onb_name_q')}<input name="name" type="text" required placeholder="${t('onb_name_ph')}" autocomplete="given-name" /></label>
      <label>${t('onb_surgery_opt')}<input name="surgeryType" type="text" placeholder="${t('onb_surgery_ph')}" /></label>
      <label>${t('f_surgery_date')}<input name="surgeryDate" type="date" min="${today}" /></label>
      <label>${t('onb_activity_now')}
        <select name="activityLevel">
          <option value="bajo">${t('act_low_o')}</option>
          <option value="medio" selected>${t('act_med_o')}</option>
          <option value="alto">${t('act_high_o')}</option>
        </select>
      </label>
      <label class="check-inline"><input name="smoker" type="checkbox" /> ${t('smoker')}</label>
      <p class="disclaimer-mini">${esc(erasNote())}</p>
      <p class="disclaimer-mini">${esc(disc())}</p>
      <button type="submit" class="btn primary big">${t('onb_start')}</button>
    </form>
  </div>`;
}

/* ---------- Vista: PARA EL CUIDADOR ---------- */

export function renderCaregiver() {
  const tips = CAREGIVER_TIPS.map((tp) => `
    <div class="ctip"><span class="ctip-ico">${tp.icon}</span>
      <div><strong>${esc(tr(tp, 'title'))}</strong><p class="muted small">${esc(tr(tp, 'text'))}</p></div>
    </div>`).join('');
  const alarmsArr = pickArr(ALARM_SIGNS, ALARM_SIGNS_EN, ALARM_SIGNS_CA);
  const alarms = alarmsArr.map((a) => `<li>${esc(a)}</li>`).join('');
  return `
    <div class="section-label">${t('care_title')}</div>
    <section class="card speak-scope" data-speak-scope>
      <p class="speakable">${t('care_intro')}</p>
      <button class="btn ghost speak-btn" data-action="speak">${t('listen')}</button>
    </section>
    <section class="card"><h3>${t('care_how')}</h3><div class="ctips">${tips}</div></section>
    <section class="card alarm-card">
      <h3>${t('alarm_title')}</h3>
      <p class="small">${t('alarm_note')}</p>
      <ul class="alarm-list">${alarms}</ul>
    </section>
    <section class="card disclaimer-card"><h3>${t('med_notice')}</h3><p class="small">${esc(disc())}</p></section>`;
}

/* ---------- Vista: CRIBADO DE FRAGILIDAD ---------- */

export function renderFrailty(state) {
  const fr = state.frail || { score: null, answers: {} };
  let resultCard = '';
  if (fr.score != null) {
    const r = frailResult(fr.score);
    resultCard = `
      <section class="card frail-result" style="--fc:${r.color}">
        <div class="frail-emoji">${r.emoji}</div>
        <div class="frail-score">${fr.score} <small>/ 5</small></div>
        <div class="frail-label">${esc(tr(r, 'label'))}</div>
        <p>${esc(tr(r, 'message'))}</p>
        <p class="muted small">${t('frail_result_note', { date: esc(fr.date || '') })}</p>
      </section>`;
  }
  const qs = FRAIL_QUESTIONS.map((q, i) => {
    const cur = fr.answers ? fr.answers[q.id] : undefined;
    return `<div class="frail-q">
        <p><strong>${i + 1}.</strong> ${esc(tr(q, 'q'))}</p>
        <div class="frail-opts">
          <label class="fopt"><input type="radio" name="${q.id}" value="1" ${cur === 1 ? 'checked' : ''}/> ${t('yes')}</label>
          <label class="fopt"><input type="radio" name="${q.id}" value="0" ${cur === 0 ? 'checked' : ''}/> ${t('no')}</label>
        </div>
      </div>`;
  }).join('');
  return `
    <div class="section-label">${t('frail_title')}</div>
    ${resultCard}
    <form id="form-frail" class="card">
      <p class="muted small">${t('frail_intro')}</p>
      ${qs}
      <button type="submit" class="btn primary block">${t('frail_see')}</button>
    </form>
    <button class="btn ghost block" data-action="nav" data-view="edmonton">${t('frail_more')}</button>
    <section class="card disclaimer-card"><h3>${t('frail_important')}</h3><p class="small">${t('frail_disc')}</p></section>`;
}

/* ---------- Vista: MEDICACIÓN ---------- */

export function renderMeds(state) {
  const m = state.medList || { meds: [], allergies: '', notes: '' };
  const rows = m.meds.length ? m.meds.map((x, i) => `
    <div class="med-row">
      <div><strong>${esc(x.name)}</strong> <small class="muted">${esc(x.dose || '')} ${esc(x.freq || '')}</small></div>
      <button class="mini-btn danger" data-action="del-med" data-idx="${i}" aria-label="🗑️">🗑️</button>
    </div>`).join('') : `<p class="muted small">${t('meds_none')}</p>`;
  const docRows = m.meds.length
    ? m.meds.map((x) => `<tr><td>${esc(x.name)}</td><td>${esc(x.dose || '')}</td><td>${esc(x.freq || '')}</td></tr>`).join('')
    : `<tr><td colspan="3">${t('meds_doc_none')}</td></tr>`;

  return `
    <div class="section-label">${t('meds_title')}</div>
    <div class="no-print">
      <section class="card"><p class="muted small">${t('meds_intro')}</p></section>
      <section class="card">
        <h3>${t('meds_add')}</h3>
        <form id="form-med" class="stack-form">
          <label>${t('meds_name')} <input name="name" type="text" required placeholder="Omeprazol" /></label>
          <div class="two-col">
            <label>${t('meds_dose')} <input name="dose" type="text" placeholder="20 mg" /></label>
            <label>${t('meds_freq')} <input name="freq" type="text" placeholder="1/día" /></label>
          </div>
          <button type="submit" class="btn primary block">${t('meds_add_btn')}</button>
        </form>
      </section>
      <section class="card"><h3>${t('meds_yours')}</h3><div class="med-list">${rows}</div></section>
      <section class="card">
        <h3>${t('meds_allergies_notes')}</h3>
        <form id="form-med-extra" class="stack-form">
          <label>${t('meds_allergies')} <textarea name="allergies" rows="2" placeholder="${t('meds_allergies_ph')}">${esc(m.allergies || '')}</textarea></label>
          <label>${t('meds_other_notes')} <textarea name="notes" rows="2">${esc(m.notes || '')}</textarea></label>
          <button type="submit" class="btn ghost block">${t('meds_save')}</button>
        </form>
      </section>
      <button class="btn primary block" data-action="print-doc">${t('meds_print')}</button>
      <p class="muted small">${t('meds_print_note')}</p>
    </div>
    <section class="print-doc">
      <h2>${t('meds_doc_title')}</h2>
      <p><strong>${t('meds_patient')}:</strong> ${esc(state.profile.name || '')}</p>
      <p><strong>${t('meds_surgery')}:</strong> ${esc(state.profile.surgeryType || '—')} &nbsp;·&nbsp; <strong>${t('meds_date')}:</strong> ${esc(state.profile.surgeryDate || '—')}</p>
      <h3>${t('meds_doc_meds')}</h3>
      <table class="med-table"><thead><tr><th>${t('meds_name')}</th><th>${t('meds_dose')}</th><th>${t('meds_freq')}</th></tr></thead><tbody>${docRows}</tbody></table>
      <h3>${t('meds_doc_allergies')}</h3><p>${esc(m.allergies || '—')}</p>
      <h3>${t('meds_doc_notes')}</h3><p>${esc(m.notes || '—')}</p>
      <p class="doc-foot">${t('meds_doc_foot')}</p>
    </section>`;
}

/* ---------- Vista: INFORME DE PROGRESO (PDF) ---------- */

export function renderReport(state) {
  const li = levelInfo(state.stats.xp);
  const tasks = getTasks(state);
  const dts = daysToSurgery(state);
  const pillars = getPillars(state);

  const adhRows = pillars.map((p) => {
    const pt = tasks.filter((x) => x.pillar === p.id);
    if (pt.length === 0) return '';
    let done = 0, possible = 0;
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const log = state.logs[todayKey(d)];
      possible += pt.length;
      if (log) done += pt.filter((x) => taskIsDone(x, log)).length;
    }
    const pctv = possible ? Math.round((done / possible) * 100) : 0;
    return `<tr><td>${p.emoji} ${esc(tr(p, 'name'))}</td><td>${pctv}%</td></tr>`;
  }).join('');

  let frailLine = t('report_frail_none');
  if (state.frail && state.frail.score != null) {
    const r = frailResult(state.frail.score);
    frailLine = `${state.frail.score}/5 · ${esc(tr(r, 'label'))} (${esc(state.frail.date || '')})`;
  }

  const earned = state.badges || [];
  const badgeList = earned.length
    ? earned.map((id) => `<span class="rep-badge">🏅 ${esc(id)}</span>`).join(' ')
    : t('report_none');

  const dtsLine = dts == null ? '—' : (dts > 0 ? dts : (dts === 0 ? t('today') : '—'));

  const assessRows = SCALE_LIST.map((sc) => {
    const h = assessmentHistory(sc.id);
    if (!h.length) return '';
    const base = h[0], lastA = h[h.length - 1];
    const r = resultForScale(sc.id, lastA.score);
    const lastCell = h.length >= 2 ? lastA.score : '—';
    return `<tr><td>${sc.icon} ${esc(tr(sc, 'name'))}</td><td>${base.score}</td><td>${lastCell}</td><td>${r ? esc(tr(r, 'label')) : ''}</td></tr>`;
  }).filter(Boolean).join('');
  const assessTable = assessRows
    ? `<h3>${t('report_assess')}</h3><table class="med-table"><thead><tr><th></th><th>${t('assess_baseline')}</th><th>${t('assess_latest')}</th><th></th></tr></thead><tbody>${assessRows}</tbody></table>`
    : `<h3>${t('report_frail')}</h3><p>${frailLine}</p>`;

  return `
    <div class="section-label">${t('report_title')}</div>
    <div class="no-print">
      <section class="card"><p class="muted small">${t('report_intro')}</p></section>
      <button class="btn primary block" data-action="print-doc">${t('report_print')}</button>
    </div>
    <section class="print-doc">
      <h2>${t('report_doc_title')}</h2>
      <p class="muted small">${t('report_generated', { date: todayKey() })}</p>
      <p><strong>${t('meds_patient')}:</strong> ${esc(state.profile.name || '')} &nbsp;·&nbsp; <strong>${t('meds_surgery')}:</strong> ${esc(state.profile.surgeryType || '—')}</p>
      <p><strong>${t('report_days_to')}:</strong> ${dtsLine} &nbsp;·&nbsp; <strong>${t('meds_date')}:</strong> ${esc(state.profile.surgeryDate || '—')}</p>
      <h3>${t('report_summary')}</h3>
      <table class="med-table"><tbody>
        <tr><td>${t('report_level')}</td><td>${li.level}</td></tr>
        <tr><td>${t('report_xp')}</td><td>${state.stats.xp}</td></tr>
        <tr><td>${t('report_streak')}</td><td>${state.stats.bestStreak}</td></tr>
        <tr><td>${t('report_daysc')}</td><td>${state.stats.daysCompleted}</td></tr>
      </tbody></table>
      <h3>${t('report_adherence')}</h3>
      <table class="med-table"><tbody>${adhRows}</tbody></table>
      ${assessTable}
      <h3>${t('report_badges')} (${earned.length})</h3><p class="rep-badges">${badgeList}</p>
      <p class="doc-foot">${t('report_foot')}</p>
    </section>`;
}

/* ---------- Vista: PERFILES ---------- */

export function renderProfiles(state) {
  const profiles = listProfiles();
  const activeId = getActiveProfileId();
  const rows = profiles.map((p) => `
    <div class="prof-row ${p.id === activeId ? 'active' : ''}">
      <div class="prof-info">
        <strong>${esc(p.name)}</strong>
        ${p.id === activeId ? `<span class="prof-badge">${t('profiles_active')}</span>` : ''}
      </div>
      <div class="prof-actions">
        ${p.id === activeId ? '' : `<button class="mini-btn" data-action="switch-profile" data-id="${p.id}" title="${t('profiles_switch')}">✅</button>`}
        <button class="mini-btn" data-action="rename-profile" data-id="${p.id}" title="${t('profiles_rename')}">✏️</button>
        ${profiles.length > 1 ? `<button class="mini-btn danger" data-action="delete-profile" data-id="${p.id}" title="${t('profiles_delete')}">🗑️</button>` : ''}
      </div>
    </div>`).join('');

  return `
    <div class="section-label">${t('profiles_title')}</div>
    <section class="card"><p class="muted small">${t('profiles_intro')}</p></section>
    <section class="card"><div class="prof-list">${rows}</div></section>
    <section class="card">
      <h3>${t('profiles_new')}</h3>
      <form id="form-profile-new" class="stack-form">
        <label>${t('profiles_new_name')}<input name="name" type="text" required placeholder="${t('patient_default')}" /></label>
        <label class="check-inline"><input name="copy" type="checkbox" /> ${t('profiles_copy')}</label>
        <button type="submit" class="btn primary block">${t('profiles_create')}</button>
      </form>
    </section>`;
}

/* ---------- Vista: JUEGO DE MEMORIA ---------- */

export function renderMemoryGame(state, game) {
  const best = state.games && state.games.memory ? state.games.memory.bestMoves : null;
  if (!game) {
    return `
      <div class="section-label">${t('game_title')}</div>
      <section class="card">
        <p>${t('game_intro')}</p>
        ${best != null ? `<p class="muted small">${t('game_best', { n: best })}</p>` : ''}
        <p class="muted small">${t('game_choose')}</p>
        <div class="row-btns">
          <button class="btn primary" data-action="memory-start" data-pairs="6">${t('game_easy')}</button>
          <button class="btn ghost" data-action="memory-start" data-pairs="8">${t('game_hard')}</button>
        </div>
      </section>`;
  }
  const cards = game.cards.map((c, i) => {
    const shown = c.matched || game.flipped.includes(i);
    return `<button class="mcard ${shown ? 'up' : ''} ${c.matched ? 'matched' : ''}" data-action="flip-card" data-idx="${i}" ${c.matched || game.locked ? 'disabled' : ''} aria-label="?">${shown ? c.emoji : '❓'}</button>`;
  }).join('');
  const isBest = game.done && state.games.memory.bestMoves === game.moves;
  const doneCard = game.done ? `
    <section class="card game-done">
      <div class="big-emoji">🎉</div>
      <h3>${t('game_done', { n: game.moves })}</h3>
      ${isBest ? `<p class="badge-ok">${t('game_newbest')}</p>` : ''}
      <p class="muted small">${t('game_reward')}</p>
      <button class="btn primary block" data-action="memory-start" data-pairs="${game.cards.length / 2}">${t('game_again')}</button>
    </section>` : '';
  return `
    <div class="section-label">${t('game_title')}</div>
    <section class="card">
      <div class="game-head"><span>${t('game_tries')}: <strong>${game.moves}</strong></span><button class="btn ghost mini-exit" data-action="memory-exit">${t('game_exit')}</button></div>
      <div class="mgrid">${cards}</div>
    </section>
    ${doneCard}`;
}


/* ---------- Vista: PREFERENCIAS DEL PACIENTE (idioma + accesibilidad) ---------- */

export function renderPreferences(state) {
  const s = state.settings;
  const langOptions = LANGS.map((l) => `<option value="${l.id}" ${s.lang === l.id ? 'selected' : ''}>${l.flag} ${l.label}</option>`).join('');
  return `
    <div class="section-label">${t('pref_title')}</div>
    <section class="card"><p class="muted small">${t('pref_intro')}</p></section>
    <section class="card">
      <h3>${t('set_language')}</h3>
      <p class="muted small">${t('set_language_note')}</p>
      <select class="lang-select" data-action="set-lang">${langOptions}</select>
    </section>
    <section class="card">
      <h3>${t('set_access')}</h3>
      <p class="muted small">${t('set_access_note')}</p>
      <label class="switch-row"><span>${t('set_large')}</span><input type="checkbox" data-action="toggle-large-text" ${s.largeText ? 'checked' : ''} /></label>
      <label class="switch-row"><span>${t('set_contrast')}</span><input type="checkbox" data-action="toggle-contrast" ${s.highContrast ? 'checked' : ''} /></label>
      <label class="switch-row"><span>${t('set_motion')}</span><input type="checkbox" data-action="toggle-motion" ${s.reducedMotion ? 'checked' : ''} /></label>
    </section>`;
}


/* ---------- Vista: ESCALA DE EDMONTON (autocumplimentada) ---------- */

export function renderEdmonton(state) {
  const ed = state.edmonton || { score: null, answers: {} };
  let resultCard = '';
  if (ed.score != null) {
    const r = edmontonResult(ed.score);
    resultCard = `
      <section class="card frail-result" style="--fc:${r.color}">
        <div class="frail-emoji">${r.emoji}</div>
        <div class="frail-score">${ed.score} <small>${t('efs_of17')}</small></div>
        <div class="frail-label">${esc(tr(r, 'label'))}</div>
        <p>${esc(tr(r, 'message'))}</p>
        <p class="muted small">${t('efs_result_note', { date: esc(ed.date || ''), score: ed.score })}</p>
      </section>`;
  }
  const qs = EDMONTON_QUESTIONS.map((q, i) => {
    const cur = ed.answers ? ed.answers[q.id] : undefined;
    const opts = q.options.map((o) => `
      <label class="fopt efs-opt"><input type="radio" name="${q.id}" value="${o.v}" ${cur === o.v ? 'checked' : ''}/> <span>${esc(tr(o, 'label'))}</span></label>`).join('');
    return `<div class="frail-q efs-q">
      <p><strong>${i + 1}.</strong> ${esc(tr(q, 'q'))}</p>
      <div class="efs-opts">${opts}</div>
    </div>`;
  }).join('');
  return `
    <div class="section-label">${t('efs_title')}</div>
    ${resultCard}
    <section class="card"><p class="muted small">${t('efs_intro')}</p></section>
    <form id="form-edmonton" class="card">
      ${qs}
      <button type="submit" class="btn primary block">${t('efs_see')}</button>
    </form>
    <section class="card disclaimer-card"><h3>${t('frail_important')}</h3><p class="small">${t('efs_self_note')}</p></section>`;
}


/* ---------- Comparación basal → actual ---------- */

function comparisonNote(id) {
  const h = assessmentHistory(id);
  if (h.length < 2) return '';
  const base = h[0], last = h[h.length - 1];
  const meta = scaleMeta(id);
  const delta = last.score - base.score;
  const improved = meta && meta.higherBetter ? delta > 0 : delta < 0;
  const tag = delta === 0 ? t('assess_same') : (improved ? t('assess_improved') : t('assess_worse'));
  const cls = delta === 0 ? 'cmp-same' : (improved ? 'cmp-up' : 'cmp-down');
  return `<p class="cmp-inline ${cls}">${t('assess_baseline')}: ${base.score} → ${t('assess_latest')}: ${last.score} · ${tag}</p>`;
}

/* ---------- Vista: HUB DE EVALUACIONES ---------- */

export function renderAssessments(state) {
  const dts = daysToSurgery(state);
  const hasBaseline = SCALE_LIST.some((sc) => assessmentHistory(sc.id).length > 0);
  const reeval = (dts != null && dts >= 0 && dts <= 3 && hasBaseline)
    ? `<section class="card reeval-card">${t('assess_reeval_soon')}</section>` : '';

  const rows = SCALE_LIST.map((sc) => {
    const hist = assessmentHistory(sc.id);
    const last = hist.length ? hist[hist.length - 1] : null;
    let body;
    if (!last) {
      body = `<span class="muted small">${t('assess_none')}</span>`;
    } else {
      const r = resultForScale(sc.id, last.score);
      const label = r ? `<strong style="color:${r.color}">${esc(tr(r, 'label'))}</strong>` : `<strong>${last.score}</strong>`;
      const cmp = hist.length >= 2 ? comparisonNote(sc.id) : `<small class="muted">${t('assess_baseline')}: ${last.score} ${t('scale_pts')}</small>`;
      body = `<div>${label}${cmp}</div>`;
    }
    return `<div class="assess-row">
      <span class="assess-ico">${sc.icon}</span>
      <div class="assess-main"><strong>${esc(tr(sc, 'name'))}</strong>${body}</div>
      <button class="btn ghost mini-do" data-action="nav" data-view="${sc.route}">${last ? t('assess_redo') : t('assess_do')}</button>
    </div>`;
  }).join('');

  return `
    <div class="section-label">${t('assess_title')}</div>
    <section class="card"><p class="muted small">${t('assess_intro')}</p></section>
    ${reeval}
    <section class="card assess-list">${rows}</section>`;
}

/* ---------- Vista: escalas de frecuencia (GAD-7 / PHQ-9) ---------- */

export function renderFreqScale(state, scaleId) {
  const scale = scaleId === 'phq9' ? PHQ9 : GAD7;
  const hist = assessmentHistory(scaleId);
  const last = hist.length ? hist[hist.length - 1] : null;
  const prev = last && last.answers ? last.answers : {};
  let resultCard = '';
  if (last) {
    const r = resultForScale(scaleId, last.score);
    resultCard = `
      <section class="card frail-result" style="--fc:${r.color}">
        <div class="frail-score">${last.score} <small>/ ${scale.max}</small></div>
        <div class="frail-label">${esc(tr(r, 'label'))}</div>
        <p>${esc(tr(r, 'message'))}</p>
        ${comparisonNote(scaleId)}
        <p class="muted small">${t('scale_result_note', { date: esc(last.date || '') })}</p>
      </section>`;
  }
  const qs = scale.items.map((it, i) => {
    const cur = prev[i];
    const radios = FREQ_OPTIONS.map((o) => `
      <label class="fopt efs-opt"><input type="radio" name="q${i}" value="${o.v}" ${cur === o.v ? 'checked' : ''}/> <span>${esc(tr(o, 'label'))}</span></label>`).join('');
    return `<div class="frail-q efs-q"><p><strong>${i + 1}.</strong> ${esc(tr(it, 'q'))}</p><div class="efs-opts">${radios}</div></div>`;
  }).join('');
  return `
    <button class="btn ghost back-btn" data-action="nav" data-view="evaluaciones">${t('back')}</button>
    <div class="section-label">🩺 ${esc(tr(scale, 'title'))}</div>
    ${resultCard}
    <section class="card"><p class="muted small">${esc(tr(scale, 'intro'))}</p><p class="small"><em>${esc(tr(scale, 'stem'))}</em></p></section>
    <form id="form-${scaleId}" class="card">${qs}<button type="submit" class="btn primary block">${t('scale_see')}</button></form>
    <section class="card disclaimer-card"><h3>${t('frail_important')}</h3><p class="small">${esc(tr(scale, 'note'))}</p></section>`;
}

/* ---------- Vista: DASI (capacidad funcional) ---------- */

export function renderDasi(state) {
  const hist = assessmentHistory('dasi');
  const last = hist.length ? hist[hist.length - 1] : null;
  const prev = last && last.answers ? last.answers : {};
  let resultCard = '';
  if (last) {
    const r = resultForScale('dasi', last.score);
    resultCard = `
      <section class="card frail-result" style="--fc:${r.color}">
        <div class="frail-score">${Math.round(last.score * 10) / 10} <small>/ 58.2</small></div>
        <div class="frail-label">${esc(tr(r, 'label'))} · ~${r.mets} MET</div>
        <p>${esc(tr(r, 'message'))}</p>
        ${comparisonNote('dasi')}
        <p class="muted small">${t('scale_result_note', { date: esc(last.date || '') })}</p>
      </section>`;
  }
  const qs = DASI.items.map((it, i) => {
    const cur = prev[i];
    return `<div class="frail-q efs-q"><p><strong>${i + 1}.</strong> ${esc(tr(it, 'q'))}</p>
      <div class="frail-opts">
        <label class="fopt"><input type="radio" name="q${i}" value="1" ${cur === 1 ? 'checked' : ''}/> ${t('yes')}</label>
        <label class="fopt"><input type="radio" name="q${i}" value="0" ${cur === 0 ? 'checked' : ''}/> ${t('no')}</label>
      </div></div>`;
  }).join('');
  return `
    <button class="btn ghost back-btn" data-action="nav" data-view="evaluaciones">${t('back')}</button>
    <div class="section-label">🩺 ${esc(tr(DASI, 'title'))}</div>
    ${resultCard}
    <section class="card"><p class="muted small">${esc(tr(DASI, 'intro'))}</p><p class="small"><em>${esc(tr(DASI, 'stem'))}</em></p></section>
    <form id="form-dasi" class="card">${qs}<button type="submit" class="btn primary block">${t('scale_see')}</button></form>
    <section class="card disclaimer-card"><h3>${t('frail_important')}</h3><p class="small">${esc(tr(DASI, 'note'))}</p></section>`;
}

/* ---------- Vista: MUST (riesgo nutricional) ---------- */

export function renderMust(state) {
  const hist = assessmentHistory('must');
  const last = hist.length ? hist[hist.length - 1] : null;
  const prev = last && last.answers ? last.answers : {};
  let resultCard = '';
  if (last) {
    const r = resultForScale('must', last.score);
    resultCard = `
      <section class="card frail-result" style="--fc:${r.color}">
        <div class="frail-score">${last.score} <small>${t('scale_pts')}</small></div>
        <div class="frail-label">${esc(tr(r, 'label'))}</div>
        <p>${esc(tr(r, 'message'))}</p>
        ${comparisonNote('must')}
        <p class="muted small">${t('scale_result_note', { date: esc(last.date || '') })}</p>
      </section>`;
  }
  const wl = MUST_WEIGHTLOSS.map((o) => `<option value="${o.v}" ${prev.wl === o.v ? 'selected' : ''}>${esc(tr(o, 'label'))}</option>`).join('');
  return `
    <button class="btn ghost back-btn" data-action="nav" data-view="evaluaciones">${t('back')}</button>
    <div class="section-label">🩺 ${esc(tr(MUST, 'title'))}</div>
    ${resultCard}
    <section class="card"><p class="muted small">${esc(tr(MUST, 'intro'))}</p></section>
    <form id="form-must" class="card stack-form">
      <div class="two-col">
        <label>${t('must_weight')}<input name="weight" type="number" min="20" max="400" step="0.1" value="${prev.weight != null ? prev.weight : ''}" required /></label>
        <label>${t('must_height')}<input name="height" type="number" min="100" max="230" value="${prev.height != null ? prev.height : ''}" required /></label>
      </div>
      <label>${t('must_wl')}<select name="wl">${wl}</select></label>
      <label class="check-inline"><input name="acute" type="checkbox" ${prev.acute ? 'checked' : ''} /> ${t('must_acute')}</label>
      <button type="submit" class="btn primary block">${t('scale_see')}</button>
    </form>
    <section class="card disclaimer-card"><h3>${t('frail_important')}</h3><p class="small">${esc(tr(MUST, 'note'))}</p></section>`;
}


/* ---------- Vista: PRIVACIDAD ---------- */

export function renderPrivacy(state) {
  const items = PRIVACY_POINTS.map((p) => `
    <div class="ctip"><span class="ctip-ico">${p.icon}</span>
      <div><p class="small">${esc(getLang() === 'en' ? p.en : (getLang() === 'ca' ? p.ca : p.es))}</p></div>
    </div>`).join('');
  return `
    <div class="section-label">${t('privacy_title')}</div>
    <section class="card"><p class="muted small">${t('privacy_intro')}</p></section>
    <section class="card"><div class="ctips">${items}</div></section>
    <button class="btn ghost block" data-action="export">${t('privacy_export_btn')}</button>
    <section class="card disclaimer-card"><h3>${t('med_notice')}</h3><p class="small">${esc(disc())}</p></section>`;
}
