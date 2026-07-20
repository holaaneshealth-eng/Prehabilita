// state.js
// Estado, persistencia en localStorage y gestión de múltiples perfiles de paciente.

const INDEX_KEY = 'prehabilita.index';          // { activeId, profiles: [{id,name}] }
const DATA_PREFIX = 'prehabilita.data.';        // + id  -> estado completo del perfil
const LEGACY_KEY = 'prehabilita.v1';            // estado antiguo de un solo perfil

/** Fecha local en formato YYYY-MM-DD. */
export function todayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/** Diferencia en días entre dos claves de fecha (a - b). */
export function daysBetween(aKey, bKey) {
  const a = new Date(aKey + 'T00:00:00');
  const b = new Date(bKey + 'T00:00:00');
  return Math.round((a - b) / 86400000);
}

function defaultState() {
  return {
    version: 3,
    onboarded: false,
    profile: {
      name: '', surgeryType: '', surgeryDate: '',
      activityLevel: 'medio', smoker: false, startDate: todayKey(),
    },
    logs: {},
    stats: {
      xp: 0, level: 1, streak: 0, bestStreak: 0, daysCompleted: 0, lastCompletedDay: null,
      taskCounts: {}, counterTotals: {}, lessonsRead: 0, hydrationGoalDays: 0, bonusXp: 0,
    },
    readLessons: [],
    readPosts: [],
    badges: [],
    challengeAwards: {},
    visited: {},
    report: { lastShared: null },
    medList: { meds: [], allergies: '', notes: '' },
    frail: { score: null, date: null, answers: {} },
    edmonton: { score: null, date: null, answers: {} },
    // Historial de evaluaciones por escala: cada entrada { date, score, answers }.
    // El primer elemento es la medida basal; el último, la más reciente.
    assessments: { frail: [], edmonton: [], gad7: [], phq9: [], dasi: [], must: [] },
    games: { memory: { wins: 0, bestMoves: null } },
    library: { seeded: false, tasks: [], taskOverrides: {}, resources: [], posts: [] },
    // Banderas del cuestionario de ayuno (guía "Ayuno"): perfil del paciente.
    fasting: { diabetes: false, glp1: false, pregnancy: false, reflux: false, gastricSurgery: false },
    settings: {
      lang: 'es',
      reducedMotion: false, largeText: false, highContrast: false,
      dailyGoal: 60,
      reminders: { enabled: false, times: ['09:00'], notified: {} },
      editor: { pinEnabled: false, pin: '' },
    },
  };
}

let state = defaultState();
let index = { activeId: null, profiles: [] };

function uidProfile() {
  return 'p-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 5);
}

function readJSON(key) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; } catch (_) { return null; }
}
function writeJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { console.warn('No se pudo guardar', key, e); }
}

function loadProfileData(id) {
  const raw = readJSON(DATA_PREFIX + id);
  const data = raw ? deepMerge(defaultState(), raw) : defaultState();
  migrateAssessments(data);
  return data;
}

/** Migra resultados antiguos de FRAIL/Edmonton al historial de evaluaciones. */
function migrateAssessments(data) {
  if (!data.assessments) data.assessments = { frail: [], edmonton: [], gad7: [], phq9: [], dasi: [], must: [] };
  for (const key of ['frail', 'edmonton']) {
    const legacy = data[key];
    if (legacy && legacy.score != null && (!data.assessments[key] || data.assessments[key].length === 0)) {
      data.assessments[key] = [{ date: legacy.date || todayKey(), score: legacy.score, answers: legacy.answers || null }];
    }
  }
}

export function loadState() {
  index = readJSON(INDEX_KEY) || { activeId: null, profiles: [] };

  if (!index.profiles || index.profiles.length === 0) {
    // Primera vez o migración desde el formato antiguo de un solo perfil.
    const legacy = readJSON(LEGACY_KEY);
    const id = uidProfile();
    if (legacy) {
      state = deepMerge(defaultState(), legacy);
      migrateAssessments(state);
      const name = (state.profile && state.profile.name) || 'Paciente 1';
      index = { activeId: id, profiles: [{ id, name }] };
      writeJSON(DATA_PREFIX + id, state);
      writeJSON(INDEX_KEY, index);
    } else {
      state = defaultState();
      index = { activeId: id, profiles: [{ id, name: 'Paciente 1' }] };
      writeJSON(DATA_PREFIX + id, state);
      writeJSON(INDEX_KEY, index);
      return state;
    }
    return state;
  }

  if (!index.activeId || !index.profiles.some((p) => p.id === index.activeId)) {
    index.activeId = index.profiles[0].id;
    writeJSON(INDEX_KEY, index);
  }
  state = loadProfileData(index.activeId);
  return state;
}

export function saveState() {
  if (!index.activeId) { index.activeId = uidProfile(); index.profiles = [{ id: index.activeId, name: state.profile.name || 'Paciente 1' }]; }
  // Mantener el nombre del índice sincronizado con el perfil.
  const entry = index.profiles.find((p) => p.id === index.activeId);
  if (entry && state.profile && state.profile.name && entry.name !== state.profile.name) {
    entry.name = state.profile.name;
    writeJSON(INDEX_KEY, index);
  }
  writeJSON(DATA_PREFIX + index.activeId, state);
}

export function getState() { return state; }

export function resetState() {
  state = defaultState();
  saveState();
  return state;
}

export function getDayLog(dayKey = todayKey()) {
  if (!state.logs[dayKey]) state.logs[dayKey] = { tasks: {}, done: false, xp: 0, mood: null };
  return state.logs[dayKey];
}

/** Registra el resultado de una escala en su historial (basal = primero). */
export function recordAssessment(key, score, answers) {
  if (!state.assessments[key]) state.assessments[key] = [];
  const arr = state.assessments[key];
  const entry = { date: todayKey(), score, answers: answers || null };
  // Si ya hay una medida de hoy, se actualiza (no se duplica); así se conserva la basal.
  if (arr.length && arr[arr.length - 1].date === entry.date) arr[arr.length - 1] = entry;
  else arr.push(entry);
  saveState();
}

export function assessmentHistory(key) {
  return (state.assessments && state.assessments[key]) ? state.assessments[key] : [];
}
export function latestAssessment(key) {
  const h = assessmentHistory(key);
  return h.length ? h[h.length - 1] : null;
}
export function baselineAssessment(key) {
  const h = assessmentHistory(key);
  return h.length ? h[0] : null;
}

/* ---------- Gestión de perfiles ---------- */

export function listProfiles() { return index.profiles.slice(); }
export function getActiveProfileId() { return index.activeId; }
export function getActiveProfileName() {
  const e = index.profiles.find((p) => p.id === index.activeId);
  return e ? e.name : (state.profile.name || 'Paciente');
}

export function switchProfile(id) {
  if (id === index.activeId) return state;
  if (!index.profiles.some((p) => p.id === id)) return state;
  saveState();
  index.activeId = id;
  writeJSON(INDEX_KEY, index);
  state = loadProfileData(id);
  return state;
}

/** Crea un perfil nuevo. Si copyContent, copia biblioteca y ajustes del activo. */
export function createProfile(name, copyContent) {
  saveState();
  const id = uidProfile();
  const fresh = defaultState();
  fresh.profile.name = name || 'Nuevo paciente';
  if (copyContent) {
    fresh.library = JSON.parse(JSON.stringify(state.library));
    fresh.library.seeded = true;
    fresh.settings.lang = state.settings.lang;
    fresh.settings.dailyGoal = state.settings.dailyGoal;
    fresh.settings.largeText = state.settings.largeText;
    fresh.settings.highContrast = state.settings.highContrast;
    fresh.settings.reducedMotion = state.settings.reducedMotion;
    fresh.settings.editor = JSON.parse(JSON.stringify(state.settings.editor));
  } else {
    fresh.settings.lang = state.settings.lang;
  }
  index.profiles.push({ id, name: fresh.profile.name });
  index.activeId = id;
  writeJSON(DATA_PREFIX + id, fresh);
  writeJSON(INDEX_KEY, index);
  state = fresh;
  return state;
}

export function renameProfile(id, name) {
  const e = index.profiles.find((p) => p.id === id);
  if (e) { e.name = name; writeJSON(INDEX_KEY, index); }
  if (id === index.activeId) { state.profile.name = name; saveState(); }
}

/** Borra un perfil. Devuelve false si es el único. */
export function deleteProfile(id) {
  if (index.profiles.length <= 1) return false;
  index.profiles = index.profiles.filter((p) => p.id !== id);
  try { localStorage.removeItem(DATA_PREFIX + id); } catch (_) {}
  if (index.activeId === id) {
    index.activeId = index.profiles[0].id;
    state = loadProfileData(index.activeId);
  }
  writeJSON(INDEX_KEY, index);
  return true;
}

/* ---------- Utilidades ---------- */

function deepMerge(base, override) {
  if (Array.isArray(base)) return Array.isArray(override) ? override : base;
  if (typeof base === 'object' && base !== null) {
    const out = { ...base };
    for (const k of Object.keys(base)) {
      if (override && k in override) out[k] = deepMerge(base[k], override[k]);
    }
    if (override && typeof override === 'object') {
      for (const k of Object.keys(override)) if (!(k in out)) out[k] = override[k];
    }
    return out;
  }
  return override === undefined ? base : override;
}

export function exportState() { return JSON.stringify(state, null, 2); }

export function importState(json) {
  const parsed = JSON.parse(json);
  state = deepMerge(defaultState(), parsed);
  saveState();
  return state;
}
