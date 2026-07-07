// ui.js
// Renderizado de vistas (funciones puras que devuelven HTML).

import {
  PREOP_CHECKLIST, DISCLAIMER, ERAS_NOTE,
  ALARM_SIGNS, CAREGIVER_TIPS, FRAIL_QUESTIONS, frailResult,
} from './content.js';
import { todayKey, daysBetween } from './state.js';
import {
  levelInfo, dayXp, isDayComplete, tasksDoneCount, taskIsDone, getWeeklyChallenge,
} from './gamification.js';
import {
  getTasks, getPillars, getPillarById, getLessons, getPosts, getPostById,
  getResources, getDailyGoal, parseYouTubeId, youTubeEmbedUrl,
} from './data.js';

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/** Convierte texto plano (con saltos de línea) en HTML seguro. */
export function formatBody(body) {
  return esc(body).replace(/\n/g, '<br>');
}

/** Días restantes hasta la cirugía (o null si no hay fecha). */
export function daysToSurgery(state) {
  const d = state.profile.surgeryDate;
  if (!d) return null;
  return daysBetween(d, todayKey());
}

/* ---------- Componentes reutilizables ---------- */

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
    countdown = `<div class="countdown neutral"><strong>—</strong><small>fecha sin definir</small></div>`;
  } else if (dts > 0) {
    countdown = `<div class="countdown"><strong>${dts}</strong><small>día${dts === 1 ? '' : 's'} para tu cirugía</small></div>`;
  } else if (dts === 0) {
    countdown = `<div class="countdown today"><strong>Hoy</strong><small>¡es el día!</small></div>`;
  } else {
    countdown = `<div class="countdown neutral"><strong>+${Math.abs(dts)}</strong><small>días post-cirugía</small></div>`;
  }

  return `
  <header class="app-header">
    <div class="header-top">
      <div class="brand">
        <span class="brand-logo">🫁</span>
        <div>
          <div class="brand-name">PreHabilita</div>
          <div class="brand-sub">Hola, ${esc(state.profile.name || 'paciente')} 👋</div>
        </div>
      </div>
      ${countdown}
    </div>
    <div class="level-row">
      <div class="level-badge">Nv ${li.level}</div>
      <div class="level-bar">
        ${progressBar(li.progress * 100)}
        <div class="level-xp">${li.into} / ${li.span} XP</div>
      </div>
      <div class="streak" title="Racha de días">🔥 ${state.stats.streak}</div>
    </div>
  </header>`;
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
          <h2>Tu día de hoy</h2>
          <p class="muted">${complete ? '¡Objetivo diario logrado! 🎉' : `Suma ${Math.max(0, goal - xp)} XP más para completar el día`}</p>
        </div>
        <div class="daily-ring">${doneN}<small>tareas</small></div>
      </div>
      ${progressBar(goalPct)}
      <div class="daily-goal-foot">
        <span>${xp} / ${goal} XP diarios</span>
        ${complete ? '<span class="badge-ok">✔ Día completo</span>' : ''}
      </div>
    </section>`;

  const challengeCard = `
    <section class="card challenge">
      <div class="challenge-head"><span>🎯 ${esc(wc.challenge.title)}</span><span class="challenge-xp">+${wc.challenge.xp} XP</span></div>
      ${progressBar((wc.progress / wc.target) * 100, '#f59e0b')}
      <div class="muted small">${wc.progress} / ${wc.target} ${esc(wc.challenge.unit)} ${wc.done ? '· ¡completado! ✅' : ''}</div>
    </section>`;

  const groups = pillars.map((p) => {
    const pt = tasks.filter((t) => t.pillar === p.id);
    if (pt.length === 0) return '';
    const items = pt.map((t) => renderTaskItem(t, dayLog)).join('');
    const doneInPillar = pt.filter((t) => taskIsDone(t, dayLog)).length;
    return `
      <section class="card pillar-group" style="--pc:${p.color}">
        <button class="pillar-head" data-action="open-pillar" data-pillar="${p.id}">
          <span class="pillar-emoji">${p.emoji}</span>
          <span class="pillar-title">${esc(p.name)}</span>
          <span class="pillar-count">${doneInPillar}/${pt.length}</span>
        </button>
        <div class="task-list">${items}</div>
      </section>`;
  }).join('');

  return `
    ${dailyCard}
    ${challengeCard}
    <div class="section-label">Tareas de hoy</div>
    ${groups}
    ${moodCard(dayLog)}
    <p class="disclaimer-mini" data-action="show-disclaimer">ⓘ Aviso médico importante</p>
  `;
}

function renderTaskItem(t, dayLog) {
  const v = dayLog.tasks[t.id];
  const done = taskIsDone(t, dayLog);
  if (t.type === 'check') {
    return `
      <div class="task ${done ? 'done' : ''}">
        <button class="task-check" data-action="toggle-task" data-task="${t.id}" aria-pressed="${done}" aria-label="Marcar ${esc(t.title)}">
          ${done ? '✔' : ''}
        </button>
        <div class="task-body">
          <div class="task-title">${esc(t.icon || '')} ${esc(t.title)}</div>
          <div class="task-desc">${esc(t.desc || '')}</div>
        </div>
        <div class="task-xp">+${t.xp}</div>
      </div>`;
  }
  const cur = typeof v === 'number' ? v : 0;
  const pct = Math.min(100, (cur / t.target) * 100);
  return `
    <div class="task counter ${done ? 'done' : ''}">
      <div class="task-body">
        <div class="task-title">${esc(t.icon || '')} ${esc(t.title)} ${done ? '✔' : ''}</div>
        <div class="task-desc">${esc(t.desc || '')}</div>
        <div class="counter-row">
          <button class="stepper" data-action="counter-dec" data-task="${t.id}" aria-label="Restar">−</button>
          <div class="counter-val">${cur} <small>/ ${t.target} ${esc(t.unit || '')}</small></div>
          <button class="stepper" data-action="counter-inc" data-task="${t.id}" aria-label="Sumar">+</button>
        </div>
        ${progressBar(pct)}
      </div>
      <div class="task-xp">+${t.xp}</div>
    </div>`;
}

function moodCard(dayLog) {
  const moods = ['😣', '😕', '😐', '🙂', '😄'];
  const cur = dayLog.mood;
  const btns = moods.map((m, i) => `
    <button class="mood-btn ${cur === i + 1 ? 'sel' : ''}" data-action="set-mood" data-mood="${i + 1}" aria-label="Ánimo ${i + 1} de 5">${m}</button>
  `).join('');
  return `
    <section class="card mood">
      <h3>¿Cómo te sientes hoy?</h3>
      <div class="mood-row">${btns}</div>
    </section>`;
}

/* ---------- Vista: PLAN ---------- */

export function renderPlan(state) {
  const tasks = getTasks(state);
  const cards = getPillars(state).map((p) => {
    const pt = tasks.filter((t) => t.pillar === p.id);
    if (pt.length === 0) return '';
    return `
      <section class="card plan-pillar" style="--pc:${p.color}">
        <div class="plan-pillar-head">
          <span class="pillar-emoji">${p.emoji}</span>
          <div>
            <h3>${esc(p.name)}</h3>
            <p class="muted small">${esc(p.tagline || '')}</p>
          </div>
        </div>
        ${p.why ? `<p class="why">💡 ${esc(p.why)}</p>` : ''}
        <ul class="plan-tasks">
          ${pt.map((t) => `<li><span>${esc(t.icon || '•')}</span><div><strong>${esc(t.title)}</strong><br><small class="muted">${esc(t.desc || '')}</small></div><span class="xp-tag">+${t.xp}</span></li>`).join('')}
        </ul>
      </section>`;
  }).join('');
  return `<div class="section-label">Tu programa de prehabilitación</div>${cards}`;
}

/* ---------- Vista: PROGRESO (con gráficas) ---------- */

export function renderProgress(state, charts) {
  const li = levelInfo(state.stats.xp);
  const tasks = getTasks(state);
  const goal = getDailyGoal(state);

  const chips = `
    <div class="chips">
      ${statChip('⭐', li.level, 'Nivel')}
      ${statChip('✨', state.stats.xp, 'XP total')}
      ${statChip('🔥', state.stats.streak, 'Racha actual')}
      ${statChip('🏅', state.stats.bestStreak, 'Mejor racha')}
      ${statChip('📅', state.stats.daysCompleted, 'Días completos')}
      ${statChip('🎖️', state.badges.length, 'Medallas')}
    </div>`;

  // Datos para la gráfica de líneas: XP diaria últimos 14 días
  const lineData = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = todayKey(d);
    const log = state.logs[key];
    lineData.push({ label: key.slice(8) + '/' + key.slice(5, 7), value: log ? dayXp(log, tasks) : 0 });
  }
  const lineCard = `
    <section class="card">
      <h3>📈 XP diaria (últimos 14 días)</h3>
      ${charts.lineChart(lineData, { color: '#0f766e' })}
    </section>`;

  // Adherencia por pilar (últimos 7 días)
  const pillars = getPillars(state);
  const barData = pillars.map((p) => {
    const pt = tasks.filter((t) => t.pillar === p.id);
    if (pt.length === 0) return null;
    let done = 0, possible = 0;
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const log = state.logs[todayKey(d)];
      possible += pt.length;
      if (log) done += pt.filter((t) => taskIsDone(t, log)).length;
    }
    const pctv = possible ? Math.round((done / possible) * 100) : 0;
    return { label: p.emoji, value: pctv, color: p.color, sub: pctv + '%' };
  }).filter(Boolean);
  const barCard = `
    <section class="card">
      <h3>📊 Adherencia por pilar (7 días)</h3>
      ${charts.barChart(barData)}
    </section>`;

  // Mapa de constancia 21 días
  const cells = [];
  for (let i = 20; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = todayKey(d);
    const log = state.logs[key];
    const xp = log ? dayXp(log, tasks) : 0;
    const lvl = xp === 0 ? 0 : xp >= goal ? 3 : xp >= goal / 2 ? 2 : 1;
    cells.push(`<div class="heat l${lvl}" title="${key}: ${xp} XP"></div>`);
  }
  const heat = `
    <section class="card">
      <h3>Constancia (últimos 21 días)</h3>
      <div class="heatmap">${cells.join('')}</div>
      <div class="heat-legend"><span>Menos</span><i class="heat l0"></i><i class="heat l1"></i><i class="heat l2"></i><i class="heat l3"></i><span>Más</span></div>
    </section>`;

  // Ánimo reciente
  const moodLogs = Object.entries(state.logs)
    .filter(([, l]) => l.mood)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-7);
  const moodEmoji = ['', '😣', '😕', '😐', '🙂', '😄'];
  const moodRow = moodLogs.length
    ? `<section class="card"><h3>Ánimo reciente</h3><div class="mood-history">${moodLogs.map(([k, l]) => `<div class="mh"><span>${moodEmoji[l.mood]}</span><small>${k.slice(5)}</small></div>`).join('')}</div></section>`
    : '';

  return `${chips}${lineCard}${barCard}${heat}${moodRow}`;
}

/* ---------- Vista: LOGROS ---------- */

export function renderBadges(state, BADGES) {
  const unlocked = new Set(state.badges);
  const grid = BADGES.map((b) => {
    const has = unlocked.has(b.id);
    return `
      <div class="badge ${has ? 'unlocked' : 'locked'}">
        <div class="badge-emoji">${has ? b.emoji : '🔒'}</div>
        <div class="badge-name">${esc(b.name)}</div>
        <div class="badge-desc">${esc(b.desc)}</div>
      </div>`;
  }).join('');
  return `
    <div class="section-label">Medallas · ${state.badges.length}/${BADGES.length}</div>
    <div class="badge-grid">${grid}</div>`;
}

/* ---------- Vista: RECURSOS ---------- */

export function renderResources(state) {
  const resources = getResources(state);
  if (resources.length === 0) {
    return `
      <div class="section-label">Biblioteca de recursos</div>
      <section class="card empty-state">
        <div class="empty-emoji">🎬</div>
        <p>Aún no hay vídeos ni enlaces.</p>
        <p class="muted small">Entra en <strong>Más → Modo médico → Recursos</strong> para añadir vídeos de YouTube (mindfulness, nutrición, ejercicio…) o cualquier enlace.</p>
        <button class="btn primary" data-action="nav" data-view="editor" data-tab="recursos">➕ Añadir recursos</button>
      </section>`;
  }

  const byPillar = getPillars(state).map((p) => {
    const rs = resources.filter((r) => r.pillar === p.id);
    if (rs.length === 0) return '';
    const cards = rs.map((r) => renderResourceCard(r)).join('');
    return `<div class="section-label" style="color:${p.color}">${p.emoji} ${esc(p.name)}</div>${cards}`;
  }).join('');

  // Recursos sin pilar reconocido
  const known = new Set(getPillars(state).map((p) => p.id));
  const others = resources.filter((r) => !known.has(r.pillar));
  const otherHtml = others.length ? `<div class="section-label">Otros</div>${others.map(renderResourceCard).join('')}` : '';

  return `<div class="section-label">🎬 Biblioteca de recursos</div>${byPillar}${otherHtml}`;
}

function renderResourceCard(r) {
  const ytId = parseYouTubeId(r.url);
  if (ytId) {
    return `
      <section class="card resource">
        <div class="resource-title">▶️ ${esc(r.title)}</div>
        ${r.desc ? `<p class="muted small">${esc(r.desc)}</p>` : ''}
        <div class="video"><iframe src="${youTubeEmbedUrl(ytId)}" title="${esc(r.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </section>`;
  }
  return `
    <section class="card resource">
      <div class="resource-title">🔗 ${esc(r.title)}</div>
      ${r.desc ? `<p class="muted small">${esc(r.desc)}</p>` : ''}
      <a class="btn ghost block" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Abrir recurso ↗</a>
    </section>`;
}

/* ---------- Vista: APRENDE (blog + lecciones) ---------- */

export function renderLearn(state) {
  const posts = getPosts(state);
  const readPosts = new Set(state.readPosts || []);
  const postCards = posts.length ? posts.map((p) => `
    <button class="post-card ${readPosts.has(p.id) ? 'read' : ''}" data-action="open-post" data-id="${p.id}">
      ${p.cover ? `<div class="post-cover" style="background-image:url('${esc(p.cover)}')"></div>` : `<div class="post-cover ph">📝</div>`}
      <div class="post-info">
        <strong>${esc(p.title)}</strong>
        <small class="muted">${esc(p.date || '')} · ${esc(p.category || 'general')}</small>
      </div>
    </button>`).join('') : '<p class="muted small">Aún no hay publicaciones. Créalas desde el Modo médico.</p>';

  const read = new Set(state.readLessons);
  const lessons = getLessons().map((l) => `
    <details class="card lesson ${read.has(l.id) ? 'read' : ''}" data-lesson="${l.id}" data-speak-scope>
      <summary>${read.has(l.id) ? '✅' : '📖'} ${esc(l.title)}</summary>
      <p class="speakable">${esc(l.body)}</p>
      <button class="btn ghost speak-btn" data-action="speak">🔊 Escuchar</button>
    </details>`).join('');

  const checklist = PREOP_CHECKLIST.map((c) => `<li>☐ ${esc(c)}</li>`).join('');

  return `
    <div class="section-label">📰 Publicaciones</div>
    <div class="post-list">${postCards}</div>
    <div class="section-label">💡 Píldoras rápidas</div>
    ${lessons}
    <section class="card">
      <h3>✅ Preparativos preoperatorios</h3>
      <ul class="preop">${checklist}</ul>
      <p class="muted small">Sigue siempre las instrucciones concretas de tu centro; esta lista es orientativa.</p>
    </section>
    <section class="card disclaimer-card">
      <h3>ⓘ Aviso médico</h3>
      <p class="small">${esc(DISCLAIMER)}</p>
    </section>`;
}

export function renderPost(state, id) {
  const p = getPostById(state, id);
  if (!p) return `<p class="muted">Publicación no encontrada.</p>`;
  const pillar = getPillarById(state, p.category);
  return `
    <button class="btn ghost back-btn" data-action="nav" data-view="aprende">← Volver</button>
    <article class="card post-full" data-speak-scope>
      ${p.cover ? `<div class="post-cover-full" style="background-image:url('${esc(p.cover)}')"></div>` : ''}
      <span class="post-tag">${pillar ? pillar.emoji + ' ' + esc(pillar.name) : esc(p.category || 'general')}</span>
      <h2>${esc(p.title)}</h2>
      <div class="post-meta muted small">${esc(p.date || '')}${p.author ? ' · ' + esc(p.author) : ''}</div>
      <button class="btn ghost speak-btn" data-action="speak">🔊 Escuchar</button>
      <div class="post-body speakable">${formatBody(p.body)}</div>
    </article>`;
}

/* ---------- Vista: MÁS ---------- */

export function renderMore(state) {
  const items = [
    { view: 'fragilidad', icon: '🧭', label: 'Cribado de fragilidad', sub: 'Test rápido (escala FRAIL)' },
    { view: 'medicacion', icon: '💊', label: 'Mi medicación y alergias', sub: 'Prepara tu lista para el anestesista' },
    { view: 'cuidador', icon: '🤝', label: 'Para el cuidador / familiar', sub: 'Apoyo seguro y señales de alarma' },
    { view: 'juego', icon: '🧩', label: 'Juego de memoria', sub: 'Gimnasia mental divertida' },
    { view: 'plan', icon: '📋', label: 'Tu plan completo', sub: 'Todas las tareas por pilar' },
    { view: 'logros', icon: '🏅', label: 'Medallas', sub: `${state.badges.length} desbloqueadas` },
    { view: 'editor', icon: '🩺', label: 'Modo médico', sub: 'Crear tareas, vídeos y publicaciones' },
    { view: 'editor', icon: '⚙️', label: 'Ajustes y accesibilidad', sub: 'Recordatorios, texto grande, contraste', tab: 'ajustes' },
  ];
  const menu = items.map((i) => `
    <button class="more-item" data-action="nav" data-view="${i.view}" ${i.tab ? `data-tab="${i.tab}"` : ''}>
      <span class="more-ico">${i.icon}</span>
      <span class="more-txt"><strong>${esc(i.label)}</strong><small class="muted">${esc(i.sub)}</small></span>
      <span class="more-arrow">›</span>
    </button>`).join('');

  return `
    <div class="section-label">Más opciones</div>
    <section class="card more-menu">${menu}</section>
    <section class="card">
      <h3>👤 Tus datos personales</h3>
      <p class="muted small">${esc(state.profile.surgeryType || 'Cirugía sin especificar')}${state.profile.surgeryDate ? ' · ' + esc(state.profile.surgeryDate) : ''}</p>
      <button class="btn ghost block" data-action="edit-profile">✏️ Editar mis datos</button>
    </section>
    <section class="card disclaimer-card">
      <h3>ⓘ Aviso médico</h3>
      <p class="small">${esc(DISCLAIMER)}</p>
    </section>`;
}

export function profileFormHtml(state) {
  const p = state.profile;
  const today = todayKey();
  return `
  <form id="form-profile" class="stack-form">
    <label>Nombre
      <input name="name" type="text" required value="${esc(p.name || '')}" />
    </label>
    <label>Tipo de cirugía
      <input name="surgeryType" type="text" value="${esc(p.surgeryType || '')}" placeholder="Ej.: cirugía abdominal mayor" />
    </label>
    <label>Fecha prevista de la cirugía
      <input name="surgeryDate" type="date" value="${esc(p.surgeryDate || '')}" />
    </label>
    <label>Nivel de actividad
      <select name="activityLevel">
        <option value="bajo" ${p.activityLevel === 'bajo' ? 'selected' : ''}>Bajo</option>
        <option value="medio" ${p.activityLevel === 'medio' ? 'selected' : ''}>Medio</option>
        <option value="alto" ${p.activityLevel === 'alto' ? 'selected' : ''}>Alto</option>
      </select>
    </label>
    <label class="check-inline"><input name="smoker" type="checkbox" ${p.smoker ? 'checked' : ''} /> Actualmente fumo</label>
    <button type="submit" class="btn primary block">Guardar</button>
  </form>`;
}

/* ---------- Navegación inferior ---------- */

export function renderNav(route) {
  const items = [
    { id: 'hoy', icon: '🏠', label: 'Hoy' },
    { id: 'recursos', icon: '🎬', label: 'Recursos' },
    { id: 'progreso', icon: '📈', label: 'Progreso' },
    { id: 'aprende', icon: '📚', label: 'Aprende' },
    { id: 'mas', icon: '⋯', label: 'Más' },
  ];
  const activeSet = {
    hoy: 'hoy', recursos: 'recursos', progreso: 'progreso', aprende: 'aprende', post: 'aprende',
    mas: 'mas', plan: 'mas', logros: 'mas', editor: 'mas',
    fragilidad: 'mas', medicacion: 'mas', cuidador: 'mas', juego: 'mas',
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
      <h1>PreHabilita</h1>
      <p>Prepárate en casa para tu cirugía. Entrena tu cuerpo y tu mente, gana puntos y llega en tu mejor forma al quirófano.</p>
    </div>
    <form id="onb-form" class="card onb-form">
      <label>¿Cómo te llamas?
        <input name="name" type="text" required placeholder="Tu nombre" autocomplete="given-name" />
      </label>
      <label>Tipo de cirugía (opcional)
        <input name="surgeryType" type="text" placeholder="Ej.: cirugía abdominal mayor" />
      </label>
      <label>Fecha prevista de la cirugía
        <input name="surgeryDate" type="date" min="${today}" />
      </label>
      <label>Nivel de actividad actual
        <select name="activityLevel">
          <option value="bajo">Bajo · me muevo poco</option>
          <option value="medio" selected>Medio · algo de actividad</option>
          <option value="alto">Alto · activo con frecuencia</option>
        </select>
      </label>
      <label class="check-inline">
        <input name="smoker" type="checkbox" /> Actualmente fumo
      </label>
      <p class="disclaimer-mini">${esc(ERAS_NOTE)}</p>
      <p class="disclaimer-mini">${esc(DISCLAIMER)}</p>
      <button type="submit" class="btn primary big">Empezar mi programa 🚀</button>
    </form>
  </div>`;
}


/* ---------- Vista: PARA EL CUIDADOR ---------- */

export function renderCaregiver() {
  const tips = CAREGIVER_TIPS.map((t) => `
    <div class="ctip">
      <span class="ctip-ico">${t.icon}</span>
      <div><strong>${esc(t.title)}</strong><p class="muted small">${esc(t.text)}</p></div>
    </div>`).join('');
  const alarms = ALARM_SIGNS.map((a) => `<li>${esc(a)}</li>`).join('');
  return `
    <div class="section-label">🤝 Para el cuidador / familiar</div>
    <section class="card speak-scope" data-speak-scope>
      <p class="speakable">El acompañamiento marca una gran diferencia. Tu apoyo motiva, da seguridad y mejora los resultados. La mayoría de las personas frágiles no siguen el programa completamente solas: tu papel es clave.</p>
      <button class="btn ghost speak-btn" data-action="speak">🔊 Escuchar</button>
    </section>
    <section class="card">
      <h3>Cómo acompañar de forma segura</h3>
      <div class="ctips">${tips}</div>
    </section>
    <section class="card alarm-card">
      <h3>🚨 Señales de alarma</h3>
      <p class="small">Ante cualquiera de estas señales, contacta con tu equipo médico o llama a urgencias (112):</p>
      <ul class="alarm-list">${alarms}</ul>
    </section>
    <section class="card disclaimer-card">
      <h3>ⓘ Aviso médico</h3>
      <p class="small">${esc(DISCLAIMER)}</p>
    </section>`;
}

/* ---------- Vista: CRIBADO DE FRAGILIDAD (FRAIL) ---------- */

export function renderFrailty(state) {
  const fr = state.frail || { score: null, answers: {} };
  let resultCard = '';
  if (fr.score != null) {
    const r = frailResult(fr.score);
    resultCard = `
      <section class="card frail-result" style="--fc:${r.color}">
        <div class="frail-emoji">${r.emoji}</div>
        <div class="frail-score">${fr.score} <small>/ 5</small></div>
        <div class="frail-label">${esc(r.label)}</div>
        <p>${esc(r.message)}</p>
        <p class="muted small">Resultado del ${esc(fr.date || '')}. Es un cribado orientativo, no un diagnóstico. Compártelo con tu equipo médico.</p>
      </section>`;
  }
  const qs = FRAIL_QUESTIONS.map((q, i) => {
    const cur = fr.answers ? fr.answers[q.id] : undefined;
    return `
      <div class="frail-q">
        <p><strong>${i + 1}.</strong> ${esc(q.q)}</p>
        <div class="frail-opts">
          <label class="fopt"><input type="radio" name="${q.id}" value="1" ${cur === 1 ? 'checked' : ''}/> Sí</label>
          <label class="fopt"><input type="radio" name="${q.id}" value="0" ${cur === 0 ? 'checked' : ''}/> No</label>
        </div>
      </div>`;
  }).join('');
  return `
    <div class="section-label">🧭 Cribado de fragilidad (escala FRAIL)</div>
    ${resultCard}
    <form id="form-frail" class="card">
      <p class="muted small">Responde con sinceridad; solo lleva un minuto. Puedes hacerlo con tu cuidador.</p>
      ${qs}
      <button type="submit" class="btn primary block">Ver mi resultado</button>
    </form>
    <section class="card disclaimer-card">
      <h3>ⓘ Importante</h3>
      <p class="small">La escala FRAIL es una herramienta de cribado orientativa; no sustituye la valoración de tu equipo médico. Sea cual sea tu resultado, la prehabilitación te beneficia.</p>
    </section>`;
}

/* ---------- Vista: MI MEDICACIÓN Y ALERGIAS ---------- */

export function renderMeds(state) {
  const m = state.medList || { meds: [], allergies: '', notes: '' };
  const rows = m.meds.length ? m.meds.map((x, i) => `
    <div class="med-row">
      <div><strong>${esc(x.name)}</strong> <small class="muted">${esc(x.dose || '')} ${esc(x.freq || '')}</small></div>
      <button class="mini-btn danger" data-action="del-med" data-idx="${i}" aria-label="Eliminar">🗑️</button>
    </div>`).join('') : '<p class="muted small">Aún no has añadido medicamentos.</p>';
  const docRows = m.meds.length
    ? m.meds.map((x) => `<tr><td>${esc(x.name)}</td><td>${esc(x.dose || '')}</td><td>${esc(x.freq || '')}</td></tr>`).join('')
    : '<tr><td colspan="3">— sin medicación registrada —</td></tr>';

  return `
    <div class="section-label">💊 Mi medicación y alergias</div>
    <div class="no-print">
      <section class="card">
        <p class="muted small">Prepara tu lista para la consulta de preanestesia. Incluye TODO: recetados, sin receta y productos de herbolario. Al terminar podrás guardarla en PDF.</p>
      </section>
      <section class="card">
        <h3>Añadir medicamento</h3>
        <form id="form-med" class="stack-form">
          <label>Nombre <input name="name" type="text" required placeholder="Ej.: Omeprazol" /></label>
          <div class="two-col">
            <label>Dosis <input name="dose" type="text" placeholder="20 mg" /></label>
            <label>Frecuencia <input name="freq" type="text" placeholder="1 al día" /></label>
          </div>
          <button type="submit" class="btn primary block">➕ Añadir a la lista</button>
        </form>
      </section>
      <section class="card">
        <h3>Tus medicamentos</h3>
        <div class="med-list">${rows}</div>
      </section>
      <section class="card">
        <h3>Alergias y notas</h3>
        <form id="form-med-extra" class="stack-form">
          <label>Alergias <textarea name="allergies" rows="2" placeholder="Medicamentos, alimentos, látex...">${esc(m.allergies || '')}</textarea></label>
          <label>Otras notas (enfermedades, anticoagulantes, marcapasos...) <textarea name="notes" rows="2">${esc(m.notes || '')}</textarea></label>
          <button type="submit" class="btn ghost block">Guardar cambios</button>
        </form>
      </section>
      <button class="btn primary block" data-action="print-meds">🖨️ Imprimir / Guardar como PDF</button>
      <p class="muted small">Se abrirá el diálogo de impresión; elige "Guardar como PDF" para tenerlo en tu móvil o imprimirlo.</p>
    </div>

    <section class="print-doc">
      <h2>Lista de medicación y alergias</h2>
      <p><strong>Paciente:</strong> ${esc(state.profile.name || '')}</p>
      <p><strong>Cirugía:</strong> ${esc(state.profile.surgeryType || '—')} &nbsp;·&nbsp; <strong>Fecha prevista:</strong> ${esc(state.profile.surgeryDate || '—')}</p>
      <h3>Medicación habitual</h3>
      <table class="med-table"><thead><tr><th>Medicamento</th><th>Dosis</th><th>Frecuencia</th></tr></thead><tbody>${docRows}</tbody></table>
      <h3>Alergias</h3><p>${esc(m.allergies || '—')}</p>
      <h3>Otras notas</h3><p>${esc(m.notes || '—')}</p>
      <p class="doc-foot">Documento generado con PreHabilita para la consulta de preanestesia.</p>
    </section>`;
}

/* ---------- Vista: JUEGO DE MEMORIA ---------- */

export function renderMemoryGame(state, game) {
  const best = state.games && state.games.memory ? state.games.memory.bestMoves : null;
  if (!game) {
    return `
      <div class="section-label">🧩 Juego de memoria</div>
      <section class="card">
        <p>Encuentra todas las parejas de cartas. Ejercita tu memoria y tu concentración: una forma divertida de prehabilitación cognitiva que ayuda a prevenir la confusión tras la cirugía.</p>
        ${best != null ? `<p class="muted small">🏆 Tu mejor marca: <strong>${best} intentos</strong>.</p>` : ''}
        <p class="muted small">Elige la dificultad:</p>
        <div class="row-btns">
          <button class="btn primary" data-action="memory-start" data-pairs="6">Fácil · 6 parejas</button>
          <button class="btn ghost" data-action="memory-start" data-pairs="8">Difícil · 8 parejas</button>
        </div>
      </section>`;
  }
  const cards = game.cards.map((c, i) => {
    const shown = c.matched || game.flipped.includes(i);
    return `<button class="mcard ${shown ? 'up' : ''} ${c.matched ? 'matched' : ''}" data-action="flip-card" data-idx="${i}" ${c.matched || game.locked ? 'disabled' : ''} aria-label="carta">${shown ? c.emoji : '❓'}</button>`;
  }).join('');
  const isBest = game.done && state.games.memory.bestMoves === game.moves;
  const doneCard = game.done ? `
    <section class="card game-done">
      <div class="big-emoji">🎉</div>
      <h3>¡Completado en ${game.moves} intentos!</h3>
      ${isBest ? '<p class="badge-ok">🏆 ¡Nueva mejor marca!</p>' : ''}
      <p class="muted small">+15 XP · has completado tu gimnasia mental de hoy.</p>
      <button class="btn primary block" data-action="memory-start" data-pairs="${game.cards.length / 2}">Jugar otra vez</button>
    </section>` : '';
  return `
    <div class="section-label">🧩 Juego de memoria</div>
    <section class="card">
      <div class="game-head"><span>Intentos: <strong>${game.moves}</strong></span><button class="btn ghost mini-exit" data-action="memory-exit">Salir</button></div>
      <div class="mgrid">${cards}</div>
    </section>
    ${doneCard}`;
}
