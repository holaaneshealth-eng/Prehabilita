// data.js
// Capa de "contenido efectivo": fusiona el contenido por defecto (content.js)
// con el contenido que el profesional crea/edita desde la interfaz (state.library).

import {
  PILLARS as DEFAULT_PILLARS,
  TASKS as DEFAULT_TASKS,
  LESSONS,
  DEFAULT_POSTS,
  DEFAULT_RESOURCES,
} from './content.js';

/** Genera un identificador único legible. */
export function uid(prefix = 'id') {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

/** Siembra la biblioteca con contenido de ejemplo la primera vez. */
export function seedLibrary(state) {
  const lib = state.library;
  if (lib.seeded) return;
  if (!lib.posts || lib.posts.length === 0) lib.posts = DEFAULT_POSTS.map((p) => ({ ...p }));
  if (!lib.resources || lib.resources.length === 0) lib.resources = DEFAULT_RESOURCES.map((r) => ({ ...r }));
  lib.seeded = true;
}

/* ---------- Pilares ---------- */

export function getPillars(state) {
  const custom = (state.library.customPillars || []);
  return [...DEFAULT_PILLARS, ...custom];
}

export function getPillarById(state, id) {
  return getPillars(state).find((p) => p.id === id) || null;
}

/* ---------- Tareas efectivas ---------- */

/**
 * Devuelve las tareas activas: las por defecto (con las personalizaciones
 * aplicadas y sin las desactivadas) más las tareas personalizadas.
 */
export function getTasks(state) {
  const overrides = state.library.taskOverrides || {};
  const base = DEFAULT_TASKS
    .map((t) => {
      const o = overrides[t.id];
      return o ? { ...t, ...o } : t;
    })
    .filter((t) => !t.disabled);
  const custom = (state.library.tasks || []).filter((t) => !t.disabled);
  return [...base, ...custom];
}

/** Todas las tareas (incluidas desactivadas) para el editor. */
export function getAllTasksForEditor(state) {
  const overrides = state.library.taskOverrides || {};
  const base = DEFAULT_TASKS.map((t) => {
    const o = overrides[t.id];
    return { ...t, ...(o || {}), isDefault: true };
  });
  const custom = (state.library.tasks || []).map((t) => ({ ...t, isDefault: false }));
  return [...base, ...custom];
}

export function getTaskById(state, id) {
  return getTasks(state).find((t) => t.id === id) || null;
}

export function isDefaultTask(id) {
  return DEFAULT_TASKS.some((t) => t.id === id);
}

/* ---------- Lecciones, posts, recursos ---------- */

export function getLessons() {
  return LESSONS;
}

export function getPosts(state) {
  return (state.library.posts || []).slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export function getPostById(state, id) {
  return (state.library.posts || []).find((p) => p.id === id) || null;
}

export function getResources(state) {
  return state.library.resources || [];
}

export function getDailyGoal(state) {
  return state.settings?.dailyGoal || 60;
}

/* ---------- YouTube ---------- */

/** Extrae el ID de vídeo de una URL de YouTube (varios formatos). */
export function parseYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?[^#]*\bv=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
    /(?:youtube\.com\/live\/)([\w-]{11})/,
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}

export function youTubeEmbedUrl(id) {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}
