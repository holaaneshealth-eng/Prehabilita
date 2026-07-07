// state.js
// Gestión del estado de la aplicación y persistencia en localStorage.

const STORAGE_KEY = 'prehabilita.v1';

/** Devuelve la fecha local en formato YYYY-MM-DD. */
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
    version: 2,
    onboarded: false,
    profile: {
      name: '',
      surgeryType: '',
      surgeryDate: '',     // YYYY-MM-DD
      activityLevel: 'medio',
      smoker: false,
      startDate: todayKey(),
    },
    // Registro diario: { 'YYYY-MM-DD': { tasks: { taskId: value }, done: bool, xp: n, mood: n } }
    logs: {},
    stats: {
      xp: 0,
      level: 1,
      streak: 0,
      bestStreak: 0,
      daysCompleted: 0,
      lastCompletedDay: null,
      taskCounts: {},      // veces que se ha completado cada tarea (check)
      counterTotals: {},   // acumulado de tareas tipo counter
      lessonsRead: 0,
      hydrationGoalDays: 0,
      bonusXp: 0,
    },
    readLessons: [],
    readPosts: [],
    badges: [],            // ids de medallas desbloqueadas
    challengeAwards: {},

    // Lista de medicación y alergias (para la consulta de preanestesia).
    medList: { meds: [], allergies: '', notes: '' },
    // Último resultado del cribado de fragilidad (escala FRAIL).
    frail: { score: null, date: null, answers: {} },
    // Datos de minijuegos.
    games: { memory: { wins: 0, bestMoves: null } },

    // Contenido editable desde la propia interfaz (gestor de contenidos).
    library: {
      seeded: false,
      tasks: [],           // tareas personalizadas añadidas por el profesional
      taskOverrides: {},   // { taskId: { target, xp, title, desc, disabled } }
      resources: [],       // { id, pillar, type:'youtube'|'link', url, title, desc }
      posts: [],           // { id, title, body, category, cover, date, author }
    },

    settings: {
      reducedMotion: false,
      largeText: false,
      highContrast: false,
      dailyGoal: 60,
      reminders: {
        enabled: false,
        times: ['09:00'],
        notified: {},       // { 'YYYY-MM-DD HH:MM': true }
      },
      editor: {
        pinEnabled: false,
        pin: '',
      },
    },
  };
}

let state = defaultState();

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = deepMerge(defaultState(), parsed);
    }
  } catch (e) {
    console.warn('No se pudo leer el estado guardado, se usa el estado por defecto.', e);
    state = defaultState();
  }
  return state;
}

export function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('No se pudo guardar el estado.', e);
  }
}

export function getState() {
  return state;
}

export function resetState() {
  state = defaultState();
  saveState();
  return state;
}

/** Devuelve (creando si hace falta) el log del día indicado. */
export function getDayLog(dayKey = todayKey()) {
  if (!state.logs[dayKey]) {
    state.logs[dayKey] = { tasks: {}, done: false, xp: 0, mood: null };
  }
  return state.logs[dayKey];
}

/** Fusión profunda simple para migraciones seguras del estado. */
function deepMerge(base, override) {
  if (Array.isArray(base)) return Array.isArray(override) ? override : base;
  if (typeof base === 'object' && base !== null) {
    const out = { ...base };
    for (const k of Object.keys(base)) {
      if (override && k in override) {
        out[k] = deepMerge(base[k], override[k]);
      }
    }
    // conserva claves extra del override (p.ej. logs con fechas nuevas, overrides)
    if (override && typeof override === 'object') {
      for (const k of Object.keys(override)) {
        if (!(k in out)) out[k] = override[k];
      }
    }
    return out;
  }
  return override === undefined ? base : override;
}

/** Exporta el estado como JSON (para copia de seguridad del paciente). */
export function exportState() {
  return JSON.stringify(state, null, 2);
}

/** Importa el estado desde un JSON. */
export function importState(json) {
  const parsed = JSON.parse(json);
  state = deepMerge(defaultState(), parsed);
  saveState();
  return state;
}
