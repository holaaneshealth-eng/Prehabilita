// gamification.js
// Motor de gamificación: XP, niveles, rachas, medallas y retos semanales.

import { BADGES, WEEKLY_CHALLENGES } from './content.js';
import { todayKey, daysBetween } from './state.js';
import { getTasks, getTaskById, getDailyGoal } from './data.js';

// Meta diaria por defecto (se puede personalizar en Ajustes).
export const DEFAULT_DAILY_GOAL = 60;

/**
 * XP acumulada necesaria para ALCANZAR un nivel dado (nivel 1 = 0 XP).
 * Salto entre nivel L y L+1 = 100 + (L-1)*40.
 */
function cumulativeXpForLevel(level) {
  let total = 0;
  for (let l = 1; l < level; l++) total += 100 + (l - 1) * 40;
  return total;
}

/** Devuelve la información de nivel a partir de la XP total. */
export function levelInfo(xp) {
  let level = 1;
  while (cumulativeXpForLevel(level + 1) <= xp) level++;
  const floor = cumulativeXpForLevel(level);
  const ceil = cumulativeXpForLevel(level + 1);
  const into = xp - floor;
  const span = ceil - floor;
  return { level, floor, ceil, into, span, progress: Math.min(1, into / span) };
}

/** ¿Está completada una tarea concreta ese día? */
export function taskIsDone(t, dayLog) {
  const v = dayLog?.tasks?.[t.id];
  if (t.type === 'check') return v === true;
  return typeof v === 'number' && v >= t.target;
}

/** XP obtenida por las tareas de un día concreto. */
export function dayXp(dayLog, tasks) {
  if (!dayLog || !tasks) return 0;
  let xp = 0;
  for (const t of tasks) {
    if (taskIsDone(t, dayLog)) xp += t.xp;
  }
  return xp;
}

/** ¿El día alcanzó el objetivo diario? */
export function isDayComplete(dayLog, tasks, goal) {
  return dayXp(dayLog, tasks) >= goal;
}

/** Nº de tareas completadas ese día. */
export function tasksDoneCount(dayLog, tasks) {
  if (!dayLog || !tasks) return 0;
  return tasks.reduce((n, t) => n + (taskIsDone(t, dayLog) ? 1 : 0), 0);
}

/** Lunes (clave YYYY-MM-DD) de la semana que contiene dateKey. */
function mondayOf(dateKey) {
  const d = new Date(dateKey + 'T00:00:00');
  const dow = (d.getDay() + 6) % 7; // 0 = lunes
  d.setDate(d.getDate() - dow);
  return todayKey(d);
}

/** Reto semanal actual, con progreso. */
export function getWeeklyChallenge(state) {
  const startMon = mondayOf(state.profile.startDate || todayKey());
  const nowMon = mondayOf(todayKey());
  const weekIndex = Math.max(0, Math.round(daysBetween(nowMon, startMon) / 7));
  const challenge = WEEKLY_CHALLENGES[weekIndex % WEEKLY_CHALLENGES.length];
  const hydTask = getTaskById(state, 'hidratacion');
  const hydTarget = hydTask ? hydTask.target : 8;

  let progress = 0;
  for (const [key, log] of Object.entries(state.logs)) {
    if (mondayOf(key) !== nowMon) continue;
    const v = log.tasks[challenge.metric];
    if (challenge.id === 'w-camina') {
      if (typeof v === 'number') progress += v;
    } else if (challenge.id === 'w-resp') {
      if (typeof v === 'number' && v > 0) progress += 1;
    } else if (challenge.id === 'w-agua') {
      if (typeof v === 'number' && v >= hydTarget) progress += 1;
    }
  }
  const done = progress >= challenge.target;
  return { challenge, progress: Math.min(progress, challenge.target), rawProgress: progress, target: challenge.target, done, weekKey: nowMon };
}

/**
 * Recalcula todas las estadísticas derivadas a partir de los logs.
 * Es idempotente: siempre produce el mismo resultado para los mismos datos.
 */
export function recompute(state) {
  const stats = state.stats;
  const tasks = getTasks(state);
  const goal = getDailyGoal(state);
  const hydTask = getTaskById(state, 'hidratacion');
  const hydTarget = hydTask ? hydTask.target : 8;

  const taskCounts = {};
  const counterTotals = {};
  let taskXpTotal = 0;
  let hydrationGoalDays = 0;

  const dayKeys = Object.keys(state.logs).sort();
  const doneDays = [];

  for (const key of dayKeys) {
    const log = state.logs[key];
    for (const t of tasks) {
      const v = log.tasks[t.id];
      if (t.type === 'check' && v === true) {
        taskCounts[t.id] = (taskCounts[t.id] || 0) + 1;
      } else if (t.type === 'counter' && typeof v === 'number') {
        counterTotals[t.id] = (counterTotals[t.id] || 0) + v;
        if (v >= t.target) taskCounts[t.id] = (taskCounts[t.id] || 0) + 1;
      }
    }
    const xp = dayXp(log, tasks);
    taskXpTotal += xp;
    log.xp = xp;
    log.done = xp >= goal;
    if (log.done) doneDays.push(key);

    const hyd = log.tasks['hidratacion'];
    if (typeof hyd === 'number' && hyd >= hydTarget) hydrationGoalDays++;
  }

  // Mejor racha (máxima secuencia de días consecutivos completados)
  let bestRun = 0;
  let run = 0;
  let prev = null;
  for (const key of doneDays) {
    if (prev && daysBetween(key, prev) === 1) run++;
    else run = 1;
    prev = key;
    if (run > bestRun) bestRun = run;
  }

  // Racha actual: cuenta hacia atrás desde hoy/ayer
  let currentStreak = 0;
  const doneSet = new Set(doneDays);
  const t = todayKey();
  const lastDone = doneDays[doneDays.length - 1];
  if (lastDone && (daysBetween(t, lastDone) <= 1)) {
    let c = lastDone;
    while (doneSet.has(c)) {
      currentStreak++;
      const d = new Date(c + 'T00:00:00'); d.setDate(d.getDate() - 1); c = todayKey(d);
    }
  }

  stats.taskCounts = taskCounts;
  stats.counterTotals = counterTotals;
  stats.hydrationGoalDays = hydrationGoalDays;
  stats.daysCompleted = doneDays.length;
  stats.streak = currentStreak;
  stats.bestStreak = Math.max(stats.bestStreak || 0, bestRun, currentStreak);
  stats.lastCompletedDay = lastDone || null;
  stats.lessonsRead = state.readLessons.length + (state.readPosts ? state.readPosts.length : 0);

  const bonusXp = stats.bonusXp || 0;
  stats.xp = taskXpTotal + bonusXp;
  stats.level = levelInfo(stats.xp).level;

  return stats;
}

/** Evalúa medallas y devuelve las recién desbloqueadas. */
export function evaluateBadges(state) {
  const unlocked = new Set(state.badges);
  const fresh = [];
  for (const b of BADGES) {
    if (!unlocked.has(b.id) && b.check(state)) {
      state.badges.push(b.id);
      fresh.push(b);
    }
  }
  return fresh;
}

/**
 * Aplica el motor completo tras un cambio: recalcula, otorga XP de reto,
 * evalúa medallas y devuelve eventos para la UI.
 */
export function applyEngine(state) {
  const prevLevel = state.stats.level || 1;

  const wc = getWeeklyChallenge(state);
  state.challengeAwards = state.challengeAwards || {};
  const awardKey = `${wc.weekKey}:${wc.challenge.id}`;
  let challengeCompletedNow = false;
  if (wc.done && !state.challengeAwards[awardKey]) {
    state.challengeAwards[awardKey] = wc.challenge.xp;
    state.stats.bonusXp = (state.stats.bonusXp || 0) + wc.challenge.xp;
    challengeCompletedNow = true;
  }

  recompute(state);
  const newBadges = evaluateBadges(state);
  const level = state.stats.level;

  return {
    prevLevel,
    level,
    leveledUp: level > prevLevel,
    newBadges,
    challengeCompletedNow,
    challenge: wc.challenge,
  };
}
