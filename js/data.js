// data.js
// Capa de "contenido efectivo": fusiona el contenido por defecto (content.js)
// con el contenido que el profesional crea/edita desde la interfaz (state.library).

import {
  PILLARS as DEFAULT_PILLARS,
  TASKS as DEFAULT_TASKS,
  LESSONS,
  DEFAULT_POSTS,
  DEFAULT_RESOURCES,
  RESOURCES_VERSION,
  DEPRECATED_RESOURCE_IDS,
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
  lib.resourcesVersion = RESOURCES_VERSION;
  lib.seeded = true;
}

/**
 * Migración de recursos por defecto: añade a la biblioteca los recursos por
 * defecto que falten por id (p. ej. recursos nuevos publicados tras la primera
 * siembra), una sola vez por versión. Es idempotente y respeta futuras
 * eliminaciones del profesional: al subir resourcesVersion no se vuelven a
 * reañadir los que ya se introdujeron. Devuelve true si añadió algo.
 */
export function syncDefaultResources(state) {
  const lib = state.library;
  if (!lib) return false;
  const current = lib.resourcesVersion || 0;
  if (current >= RESOURCES_VERSION) return false;
  if (!Array.isArray(lib.resources)) lib.resources = [];
  const have = new Set(lib.resources.map((r) => r.id));
  let added = 0;
  for (const r of DEFAULT_RESOURCES) {
    if (!have.has(r.id)) { lib.resources.push({ ...r }); added++; }
  }
  // Retirar recursos por defecto deprecados (p. ej. sustituidos por otros).
  let removed = 0;
  const deprecated = DEPRECATED_RESOURCE_IDS || [];
  if (deprecated.length) {
    const before = lib.resources.length;
    lib.resources = lib.resources.filter((r) => !deprecated.includes(r.id));
    removed = before - lib.resources.length;
  }
  lib.resourcesVersion = RESOURCES_VERSION;
  return added > 0 || removed > 0;
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

/** Mapa de posts por defecto para recuperar traducciones por id. */
const DEFAULT_POST_MAP = new Map(DEFAULT_POSTS.map((p) => [p.id, p]));

/**
 * Fusiona los campos de traducción (título/cuerpo en/ca) del post por defecto
 * correspondiente, para que las publicaciones sembradas antes de esta versión
 * también se muestren traducidas. No sobrescribe los campos base (es).
 */
function withPostTranslations(p) {
  const d = DEFAULT_POST_MAP.get(p.id);
  if (!d) return p;
  return {
    ...p,
    title_en: p.title_en || d.title_en,
    title_ca: p.title_ca || d.title_ca,
    body_en: p.body_en || d.body_en,
    body_ca: p.body_ca || d.body_ca,
  };
}

export function getPosts(state) {
  return (state.library.posts || [])
    .map(withPostTranslations)
    .slice()
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export function getPostById(state, id) {
  const p = (state.library.posts || []).find((x) => x.id === id);
  return p ? withPostTranslations(p) : null;
}

/** Mapa de recursos por defecto para recuperar traducciones por id. */
const DEFAULT_RESOURCE_MAP = new Map(DEFAULT_RESOURCES.map((r) => [r.id, r]));

/**
 * Fusiona los campos de traducción (título/descripción en/ca) del recurso por
 * defecto correspondiente, para que los recursos sembrados antes de esta
 * versión también se muestren traducidos. No sobrescribe los campos base (es).
 */
function withResourceTranslations(r) {
  const d = DEFAULT_RESOURCE_MAP.get(r.id);
  if (!d) return r;
  return {
    ...r,
    // Refresca campos estructurales de los recursos POR DEFECTO (no de los
    // creados por el profesional), para propagar mejoras de contenido —p. ej.
    // que "Ayuno" pase de enlace a guía interna— a bibliotecas ya sembradas.
    type: d.type || r.type,
    guideId: d.guideId != null ? d.guideId : r.guideId,
    pillar: d.pillar || r.pillar,
    title: d.title || r.title,
    desc: d.desc || r.desc,
    title_en: r.title_en || d.title_en,
    title_ca: r.title_ca || d.title_ca,
    desc_en: r.desc_en || d.desc_en,
    desc_ca: r.desc_ca || d.desc_ca,
  };
}

export function getResources(state) {
  return (state.library.resources || []).map(withResourceTranslations);
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
