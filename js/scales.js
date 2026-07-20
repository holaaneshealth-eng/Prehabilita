// scales.js
// Escalas de cribado autocumplimentadas de uso libre, bilingües (ES/EN):
//  - DASI: Duke Activity Status Index (capacidad funcional). Hlatky et al., 1989.
//  - MUST: Malnutrition Universal Screening Tool (BAPEN). Uso libre citando la fuente.
//  - GAD-7: ansiedad (Spitzer et al., 2006). Dominio público.
//  - PHQ-9: depresión (Kroenke et al., 2001). Dominio público.
// Todas son ORIENTATIVAS y no diagnósticas.

import { frailResult, edmontonResult } from './content.js';

/* ---------- Opciones de frecuencia (GAD-7 / PHQ-9) ---------- */
export const FREQ_OPTIONS = [
  { v: 0, label: 'Nunca', label_en: 'Not at all', label_ca: 'Mai' },
  { v: 1, label: 'Varios días', label_en: 'Several days', label_ca: 'Diversos dies' },
  { v: 2, label: 'Más de la mitad de los días', label_en: 'More than half the days', label_ca: 'Més de la meitat dels dies' },
  { v: 3, label: 'Casi todos los días', label_en: 'Nearly every day', label_ca: 'Gairebé cada dia' },
];

const FREQ_STEM = 'En las últimas 2 semanas, ¿con qué frecuencia le han molestado los siguientes problemas?';
const FREQ_STEM_EN = 'Over the last 2 weeks, how often have you been bothered by the following problems?';
const FREQ_STEM_CA = 'En les últimes 2 setmanes, amb quina freqüència t’han molestat els problemes següents?';

/* ---------- GAD-7 (ansiedad) ---------- */
export const GAD7 = {
  id: 'gad7', max: 21, stem: FREQ_STEM, stem_en: FREQ_STEM_EN, stem_ca: FREQ_STEM_CA,
  title: 'Ansiedad (GAD-7)', title_en: 'Anxiety (GAD-7)', title_ca: 'Ansietat (GAD-7)',
  intro: 'Cuestionario de ansiedad de uso libre. Piensa en las ÚLTIMAS 2 SEMANAS y responde con sinceridad.',
  intro_en: 'Free anxiety questionnaire. Think about the LAST 2 WEEKS and answer honestly.',
  intro_ca: 'Qüestionari d’ansietat d’ús lliure. Pensa en les ÚLTIMES 2 SETMANES i respon amb sinceritat.',
  note: 'GAD-7 (Spitzer et al., 2006). Cribado orientativo, no diagnóstico.',
  note_en: 'GAD-7 (Spitzer et al., 2006). Guidance screening, not diagnostic.',
  note_ca: 'GAD-7 (Spitzer et al., 2006). Cribratge orientatiu, no diagnòstic.',
  items: [
    { q: 'Sentirse nervioso/a, ansioso/a o con los nervios de punta', q_en: 'Feeling nervous, anxious or on edge', q_ca: 'Sentir-se nerviós/osa, ansiós/osa o amb els nervis de punta' },
    { q: 'No poder dejar de preocuparse o no poder controlar la preocupación', q_en: 'Not being able to stop or control worrying', q_ca: 'No poder deixar de preocupar-se o no poder controlar la preocupació' },
    { q: 'Preocuparse demasiado por diferentes cosas', q_en: 'Worrying too much about different things', q_ca: 'Preocupar-se massa per diferents coses' },
    { q: 'Dificultad para relajarse', q_en: 'Trouble relaxing', q_ca: 'Dificultat per relaxar-se' },
    { q: 'Estar tan inquieto/a que le cuesta quedarse quieto/a', q_en: 'Being so restless that it is hard to sit still', q_ca: 'Estar tan inquiet/a que costa quedar-se quiet/a' },
    { q: 'Molestarse o irritarse con facilidad', q_en: 'Becoming easily annoyed or irritable', q_ca: 'Enfadar-se o irritar-se amb facilitat' },
    { q: 'Sentir miedo, como si algo terrible fuera a pasar', q_en: 'Feeling afraid, as if something awful might happen', q_ca: 'Sentir por, com si alguna cosa terrible hagués de passar' },
  ],
};

/* ---------- PHQ-9 (depresión) ---------- */
export const PHQ9 = {
  id: 'phq9', max: 27, stem: FREQ_STEM, stem_en: FREQ_STEM_EN, stem_ca: FREQ_STEM_CA,
  title: 'Estado de ánimo (PHQ-9)', title_en: 'Mood (PHQ-9)', title_ca: 'Estat d’ànim (PHQ-9)',
  intro: 'Cuestionario de estado de ánimo de uso libre. Piensa en las ÚLTIMAS 2 SEMANAS y responde con sinceridad.',
  intro_en: 'Free mood questionnaire. Think about the LAST 2 WEEKS and answer honestly.',
  intro_ca: 'Qüestionari d’estat d’ànim d’ús lliure. Pensa en les ÚLTIMES 2 SETMANES i respon amb sinceritat.',
  note: 'PHQ-9 (Kroenke et al., 2001). Cribado orientativo, no diagnóstico.',
  note_en: 'PHQ-9 (Kroenke et al., 2001). Guidance screening, not diagnostic.',
  note_ca: 'PHQ-9 (Kroenke et al., 2001). Cribratge orientatiu, no diagnòstic.',
  // El ítem 9 (índice 8) explora ideas de autolesión: activa una salvaguarda.
  selfHarmIndex: 8,
  items: [
    { q: 'Poco interés o placer en hacer las cosas', q_en: 'Little interest or pleasure in doing things', q_ca: 'Poc interès o plaer a fer les coses' },
    { q: 'Sentirse desanimado/a, deprimido/a o sin esperanza', q_en: 'Feeling down, depressed or hopeless', q_ca: 'Sentir-se desanimat/da, deprimit/da o sense esperança' },
    { q: 'Problemas para dormir, o dormir demasiado', q_en: 'Trouble falling or staying asleep, or sleeping too much', q_ca: 'Problemes per dormir, o dormir massa' },
    { q: 'Sentirse cansado/a o con poca energía', q_en: 'Feeling tired or having little energy', q_ca: 'Sentir-se cansat/da o amb poca energia' },
    { q: 'Poco apetito o comer en exceso', q_en: 'Poor appetite or overeating', q_ca: 'Poca gana o menjar en excés' },
    { q: 'Sentirse mal consigo mismo/a, o sentir que es un fracaso o que ha decepcionado a su familia', q_en: 'Feeling bad about yourself, or that you are a failure or have let yourself or your family down', q_ca: 'Sentir-se malament amb un mateix, o sentir que és un fracàs o que ha decebut la seva família' },
    { q: 'Dificultad para concentrarse (leer, ver la televisión)', q_en: 'Trouble concentrating on things, such as reading or watching television', q_ca: 'Dificultat per concentrar-se (llegir, mirar la televisió)' },
    { q: 'Moverse o hablar tan despacio que otros lo han notado; o lo contrario, estar tan inquieto/a que se mueve mucho más de lo habitual', q_en: 'Moving or speaking so slowly that other people could have noticed; or the opposite, being so restless that you move around much more than usual', q_ca: 'Moure’s o parlar tan a poc a poc que altres ho han notat; o al contrari, estar tan inquiet/a que es mou molt més del que és habitual' },
    { q: 'Pensamientos de que estaría mejor muerto/a o de hacerse daño de alguna manera', q_en: 'Thoughts that you would be better off dead, or of hurting yourself in some way', q_ca: 'Pensaments que estaria millor mort/a o de fer-se mal d’alguna manera' },
  ],
};

/* ---------- DASI (capacidad funcional) ---------- */
export const DASI = {
  id: 'dasi', max: 58.2, stem: '¿Es usted capaz de...?', stem_en: 'Are you able to...?', stem_ca: 'Ets capaç de...?',
  title: 'Capacidad funcional (DASI)', title_en: 'Functional capacity (DASI)', title_ca: 'Capacitat funcional (DASI)',
  intro: 'Marca las actividades que eres capaz de hacer. Estima tu forma física (METs). Cuanto más alto, mejor.',
  intro_en: 'Tick the activities you are able to do. It estimates your fitness (METs). The higher, the better.',
  intro_ca: 'Marca les activitats que ets capaç de fer. Estima la teva forma física (METs). Com més alt, millor.',
  note: 'DASI (Hlatky et al., 1989). Estimación orientativa de la capacidad funcional.',
  note_en: 'DASI (Hlatky et al., 1989). Guidance estimate of functional capacity.',
  note_ca: 'DASI (Hlatky et al., 1989). Estimació orientativa de la capacitat funcional.',
  items: [
    { w: 2.75, q: 'Cuidar de sí mismo/a (comer, vestirse, bañarse o ir al baño)', q_en: 'Take care of yourself (eating, dressing, bathing or using the toilet)?', q_ca: 'Tenir cura de tu mateix (menjar, vestir-te, banyar-te o anar al bany)' },
    { w: 1.75, q: 'Caminar dentro de casa', q_en: 'Walk indoors, such as around your house?', q_ca: 'Caminar dins de casa' },
    { w: 2.75, q: 'Caminar una o dos manzanas en llano', q_en: 'Walk a block or two on level ground?', q_ca: 'Caminar una o dues illes de cases en pla' },
    { w: 5.50, q: 'Subir un tramo de escaleras o una cuesta', q_en: 'Climb a flight of stairs or walk up a hill?', q_ca: 'Pujar un tram d’escales o una pujada' },
    { w: 8.00, q: 'Correr una distancia corta', q_en: 'Run a short distance?', q_ca: 'Córrer una distància curta' },
    { w: 2.70, q: 'Hacer tareas ligeras en casa (quitar el polvo, lavar los platos)', q_en: 'Do light work around the house like dusting or washing dishes?', q_ca: 'Fer tasques lleugeres a casa (treure la pols, rentar els plats)' },
    { w: 3.50, q: 'Hacer tareas moderadas en casa (pasar la aspiradora, barrer, cargar la compra)', q_en: 'Do moderate work around the house like vacuuming, sweeping floors or carrying groceries?', q_ca: 'Fer tasques moderades a casa (passar l’aspiradora, escombrar, carregar la compra)' },
    { w: 8.00, q: 'Hacer tareas pesadas en casa (fregar el suelo, mover muebles pesados)', q_en: 'Do heavy work around the house like scrubbing floors or moving heavy furniture?', q_ca: 'Fer tasques pesades a casa (fregar el terra, moure mobles pesats)' },
    { w: 4.50, q: 'Hacer trabajos de jardín (rastrillar hojas, quitar malas hierbas, cortar el césped)', q_en: 'Do yardwork like raking leaves, weeding or pushing a power mower?', q_ca: 'Fer feines de jardí (rasclar fulles, treure males herbes, tallar la gespa)' },
    { w: 5.25, q: 'Tener relaciones sexuales', q_en: 'Have sexual relations?', q_ca: 'Tenir relacions sexuals' },
    { w: 6.00, q: 'Hacer actividades recreativas moderadas (bailar, golf, bolos, tenis en dobles)', q_en: 'Take part in moderate recreational activities like dancing, golf, bowling or doubles tennis?', q_ca: 'Fer activitats recreatives moderades (ballar, golf, bitlles, tennis de dobles)' },
    { w: 7.50, q: 'Practicar deportes intensos (natación, tenis individual, fútbol, baloncesto, esquí)', q_en: 'Take part in strenuous sports like swimming, singles tennis, football, basketball or skiing?', q_ca: 'Practicar esports intensos (natació, tennis individual, futbol, bàsquet, esquí)' },
  ],
};

/** METs estimados a partir de la puntuación DASI (VO2pico = 0,43·DASI + 9,6). */
export function dasiMets(score) {
  const vo2 = 0.43 * score + 9.6;
  return vo2 / 3.5;
}

/* ---------- MUST (riesgo nutricional) ---------- */
export const MUST_WEIGHTLOSS = [
  { v: 0, label: 'Menos del 5% (o nada)', label_en: 'Less than 5% (or none)', label_ca: 'Menys del 5% (o gens)' },
  { v: 1, label: 'Entre el 5% y el 10%', label_en: 'Between 5% and 10%', label_ca: 'Entre el 5% i el 10%' },
  { v: 2, label: 'Más del 10%', label_en: 'More than 10%', label_ca: 'Més del 10%' },
];

export const MUST = {
  id: 'must', max: 6,
  title: 'Riesgo nutricional (MUST)', title_en: 'Nutrition risk (MUST)', title_ca: 'Risc nutricional (MUST)',
  intro: 'Necesitas tu peso y tu estatura. Herramienta de BAPEN de uso libre.',
  intro_en: 'You need your weight and height. Free BAPEN tool.',
  intro_ca: 'Necessites el teu pes i la teva alçada. Eina de BAPEN d’ús lliure.',
  note: 'MUST © BAPEN. Cribado orientativo; no sustituye la valoración de un nutricionista.',
  note_en: 'MUST © BAPEN. Guidance screening; does not replace assessment by a dietitian.',
  note_ca: 'MUST © BAPEN. Cribratge orientatiu; no substitueix la valoració d’un nutricionista.',
};

export function bmiScore(bmi) {
  if (bmi == null || isNaN(bmi)) return 0;
  if (bmi < 18.5) return 2;
  if (bmi < 20) return 1;
  return 0;
}

/* ---------- Interpretación de resultados ---------- */

export function gad7Result(s) {
  if (s <= 4) return { color: '#22c55e', label: 'Ansiedad mínima', label_en: 'Minimal anxiety', label_ca: 'Ansietat mínima', message: 'Tus niveles de ansiedad son bajos. Las técnicas de relajación te ayudarán a mantenerte así.', message_en: 'Your anxiety levels are low. Relaxation techniques will help you stay this way.', message_ca: 'Els teus nivells d’ansietat són baixos. Les tècniques de relaxació t’ajudaran a mantenir-te així.' };
  if (s <= 9) return { color: '#84cc16', label: 'Ansiedad leve', label_en: 'Mild anxiety', label_ca: 'Ansietat lleu', message: 'Ansiedad leve. Practicar la respiración y el mindfulness a diario puede ayudarte mucho.', message_en: 'Mild anxiety. Practising breathing and mindfulness daily can help a lot.', message_ca: 'Ansietat lleu. Practicar la respiració i el mindfulness cada dia et pot ajudar molt.' };
  if (s <= 14) return { color: '#f59e0b', label: 'Ansiedad moderada', label_en: 'Moderate anxiety', label_ca: 'Ansietat moderada', message: 'Ansiedad moderada. Coméntalo con tu equipo médico; hay técnicas y apoyos que pueden ayudarte antes de la cirugía.', message_en: 'Moderate anxiety. Mention it to your medical team; there are techniques and support that can help before surgery.', message_ca: 'Ansietat moderada. Comenta-ho amb el teu equip mèdic; hi ha tècniques i suports que et poden ajudar abans de la cirurgia.' };
  return { color: '#ef4444', label: 'Ansiedad grave', label_en: 'Severe anxiety', label_ca: 'Ansietat greu', message: 'Ansiedad alta. Es importante que lo compartas con tu equipo médico para recibir apoyo adecuado.', message_en: 'High anxiety. It is important to share this with your medical team so you can get proper support.', message_ca: 'Ansietat alta. És important que ho comparteixis amb el teu equip mèdic per rebre suport adequat.' };
}

export function phq9Result(s) {
  if (s <= 4) return { color: '#22c55e', label: 'Mínima', label_en: 'Minimal', label_ca: 'Mínima', message: 'Tu estado de ánimo es bueno. Cuidar el sueño, el ejercicio y las relaciones te ayuda a mantenerlo.', message_en: 'Your mood is good. Looking after sleep, exercise and relationships helps keep it that way.', message_ca: 'El teu estat d’ànim és bo. Cuidar el son, l’exercici i les relacions t’ajuda a mantenir-lo.' };
  if (s <= 9) return { color: '#84cc16', label: 'Leve', label_en: 'Mild', label_ca: 'Lleu', message: 'Ánimo algo bajo. El ejercicio, la rutina y el apoyo de tus seres queridos suelen ayudar.', message_en: 'Slightly low mood. Exercise, routine and support from loved ones usually help.', message_ca: 'Ànim una mica baix. L’exercici, la rutina i el suport dels teus éssers estimats solen ajudar.' };
  if (s <= 14) return { color: '#f59e0b', label: 'Moderado', label_en: 'Moderate', label_ca: 'Moderat', message: 'Ánimo moderadamente bajo. Coméntalo con tu equipo médico; conviene acompañarlo bien antes de la cirugía.', message_en: 'Moderately low mood. Mention it to your medical team; it is worth supporting well before surgery.', message_ca: 'Ànim moderadament baix. Comenta-ho amb el teu equip mèdic; convé acompanyar-lo bé abans de la cirurgia.' };
  if (s <= 19) return { color: '#f97316', label: 'Moderadamente grave', label_en: 'Moderately severe', label_ca: 'Moderadament greu', message: 'Ánimo bastante bajo. Es importante que lo hables con tu equipo médico cuanto antes.', message_en: 'Quite low mood. It is important to talk to your medical team as soon as possible.', message_ca: 'Ànim força baix. És important que ho parlis amb el teu equip mèdic com més aviat millor.' };
  return { color: '#ef4444', label: 'Grave', label_en: 'Severe', label_ca: 'Greu', message: 'Ánimo muy bajo. Por favor, comparte esto con tu equipo médico; no tienes que pasarlo solo/a.', message_en: 'Very low mood. Please share this with your medical team; you do not have to go through it alone.', message_ca: 'Ànim molt baix. Si us plau, comparteix això amb el teu equip mèdic; no ho has de passar sol/a.' };
}

export function dasiResult(s) {
  const mets = dasiMets(s);
  const m = Math.round(mets * 10) / 10;
  if (s < 10) return { color: '#f59e0b', mets: m, label: 'Capacidad funcional baja', label_en: 'Low functional capacity', label_ca: 'Capacitat funcional baixa', message: `Capacidad estimada ~${m} MET. Empieza con ejercicio suave y seguro (en silla o con apoyo) y progresa poco a poco. Coméntalo con tu equipo.`, message_en: `Estimated capacity ~${m} METs. Start with gentle, safe exercise (seated or with support) and build up slowly. Mention it to your team.`, message_ca: `Capacitat estimada ~${m} MET. Comença amb exercici suau i segur (a la cadira o amb suport) i progressa a poc a poc. Comenta-ho amb el teu equip.` };
  if (s < 34) return { color: '#84cc16', mets: m, label: 'Capacidad funcional moderada', label_en: 'Moderate functional capacity', label_ca: 'Capacitat funcional moderada', message: `Capacidad estimada ~${m} MET. Buen punto de partida: mantén el ejercicio aeróbico y de fuerza para seguir mejorando.`, message_en: `Estimated capacity ~${m} METs. A good starting point: keep up aerobic and strength exercise to keep improving.`, message_ca: `Capacitat estimada ~${m} MET. Bon punt de partida: mantén l’exercici aeròbic i de força per seguir millorant.` };
  return { color: '#22c55e', mets: m, label: 'Buena capacidad funcional', label_en: 'Good functional capacity', label_ca: 'Bona capacitat funcional', message: `Capacidad estimada ~${m} MET. ¡Muy bien! Mantén tu nivel de actividad hasta la cirugía.`, message_en: `Estimated capacity ~${m} METs. Well done! Keep up your activity level until surgery.`, message_ca: `Capacitat estimada ~${m} MET. Molt bé! Mantén el teu nivell d’activitat fins a la cirurgia.` };
}

export function mustResult(s) {
  if (s <= 0) return { color: '#22c55e', label: 'Riesgo bajo', label_en: 'Low risk', label_ca: 'Risc baix', message: 'Riesgo nutricional bajo. Mantén una dieta con suficiente proteína e hidratación.', message_en: 'Low nutritional risk. Keep a diet with enough protein and hydration.', message_ca: 'Risc nutricional baix. Mantén una dieta amb prou proteïna i hidratació.' };
  if (s === 1) return { color: '#f59e0b', label: 'Riesgo medio', label_en: 'Medium risk', label_ca: 'Risc mitjà', message: 'Riesgo nutricional medio. Cuida la proteína en cada comida y coméntalo en tu consulta; quizá convenga vigilar tu peso.', message_en: 'Medium nutritional risk. Take care with protein at each meal and mention it at your appointment; your weight may need monitoring.', message_ca: 'Risc nutricional mitjà. Cuida la proteïna a cada àpat i comenta-ho a la teva consulta; potser convé vigilar el teu pes.' };
  return { color: '#ef4444', label: 'Riesgo alto', label_en: 'High risk', label_ca: 'Risc alt', message: 'Riesgo nutricional alto. Es importante que lo comentes pronto con tu equipo médico o nutricionista.', message_en: 'High nutritional risk. It is important to discuss this soon with your medical team or dietitian.', message_ca: 'Risc nutricional alt. És important que ho comentis aviat amb el teu equip mèdic o nutricionista.' };
}

/* ---------- Cribado de bienestar mental (Fase 2): DT + APAIS + triaje ---------- */
// Escalas del módulo de bienestar mental. Se guardan por separado (no en
// SCALE_LIST) para no alterar el hub de evaluaciones ni el informe de progreso.
// Detección de crisis: SOLO por el ítem 9 del PHQ-9 (no hay análisis de texto libre).

// Termómetro del malestar (ítem único 0–10). Puerta de entrada sensible (≥4) y
// marcador de carga alta (≥6). Nunca decide el triaje en solitario.
export const DISTRESS = {
  id: 'distress', max: 10,
  title: 'Termómetro del malestar', title_en: 'Distress thermometer', title_ca: 'Termòmetre del malestar',
  stem: 'En una escala de 0 a 10, ¿cuánto malestar o angustia has sentido en la última semana? (0 = ninguno, 10 = el máximo)',
  stem_en: 'On a scale of 0 to 10, how much distress have you felt in the past week? (0 = none, 10 = the most)',
  stem_ca: 'En una escala de 0 a 10, quant malestar o angoixa has sentit en l’última setmana? (0 = gens, 10 = el màxim)',
  note: 'Termómetro del distrés (adaptado de NCCN). Cribado orientativo, no diagnóstico.',
  note_en: 'Distress thermometer (adapted from NCCN). Guidance screening, not diagnostic.',
  note_ca: 'Termòmetre del distrés (adaptat de NCCN). Cribratge orientatiu, no diagnòstic.',
};

// APAIS: ansiedad y necesidad de información preoperatoria. 6 ítems, Likert 1–5.
// Ansiedad = ítems 0,1,3,4 (rango 4–20); Información = ítems 2,5 (rango 2–10).
// EN original (Moerman 1996) + ES validado (Vergara-Romero et al., 2017).
// CA: traducción funcional supervisada (NO validada metodológicamente).
export const APAIS_OPTIONS = [
  { v: 1, label: 'En absoluto', label_en: 'Not at all', label_ca: 'Gens' },
  { v: 2, label: 'Un poco', label_en: 'A little', label_ca: 'Una mica' },
  { v: 3, label: 'Moderadamente', label_en: 'Moderately', label_ca: 'Moderadament' },
  { v: 4, label: 'Bastante', label_en: 'Quite a lot', label_ca: 'Bastant' },
  { v: 5, label: 'Muchísimo', label_en: 'Extremely', label_ca: 'Moltíssim' },
];
export const APAIS = {
  id: 'apais', max: 30, anxietyIndexes: [0, 1, 3, 4], infoIndexes: [2, 5],
  title: 'Ansiedad e información antes de la cirugía (APAIS)', title_en: 'Preoperative anxiety and information (APAIS)', title_ca: 'Ansietat i informació abans de la cirurgia (APAIS)',
  intro: 'Indica en qué medida estás de acuerdo con cada frase, pensando en tu próxima cirugía.',
  intro_en: 'Indicate how much you agree with each statement, thinking about your upcoming surgery.',
  intro_ca: 'Indica en quina mesura estàs d’acord amb cada frase, pensant en la teva propera cirurgia.',
  note: 'APAIS (Moerman 1996; validación española de Vergara-Romero et al., 2017). Versión catalana: traducción funcional, no validada. Cribado orientativo, no diagnóstico.',
  note_en: 'APAIS (Moerman 1996; Spanish validation by Vergara-Romero et al., 2017). Catalan version: functional translation, not validated. Guidance screening, not diagnostic.',
  note_ca: 'APAIS (Moerman 1996; validació espanyola de Vergara-Romero et al., 2017). Versió catalana: traducció funcional, no validada. Cribratge orientatiu, no diagnòstic.',
  items: [
    { q: 'Estoy preocupado/a por la anestesia.', q_en: 'I am worried about the anaesthetic.', q_ca: 'Estic preocupat/da per l’anestèsia.' },
    { q: 'Pienso continuamente en la anestesia.', q_en: 'The anaesthetic is on my mind continually.', q_ca: 'Penso contínuament en l’anestèsia.' },
    { q: 'Me gustaría saber lo máximo posible sobre la anestesia.', q_en: 'I would like to know as much as possible about the anaesthetic.', q_ca: 'M’agradaria saber tant com sigui possible sobre l’anestèsia.' },
    { q: 'Estoy preocupado/a por la intervención.', q_en: 'I am worried about the procedure.', q_ca: 'Estic preocupat/da per la intervenció.' },
    { q: 'Pienso continuamente en la intervención.', q_en: 'The procedure is on my mind continually.', q_ca: 'Penso contínuament en la intervenció.' },
    { q: 'Me gustaría saber lo máximo posible sobre la intervención.', q_en: 'I would like to know as much as possible about the procedure.', q_ca: 'M’agradaria saber tant com sigui possible sobre la intervenció.' },
  ],
};

export function distressResult(s) {
  if (s >= 6) return { color: '#ef4444', level: 'high', label: 'Malestar alto', label_en: 'High distress', label_ca: 'Malestar alt', message: 'Estás cargando bastante. Cuidarte hoy y apoyarte en tu equipo puede ayudarte a llegar mejor.', message_en: 'You are carrying quite a lot. Taking care of yourself today and leaning on your team can help you arrive better.', message_ca: 'Estàs carregant força. Cuidar-te avui i recolzar-te en el teu equip et pot ajudar a arribar millor.' };
  if (s >= 4) return { color: '#f59e0b', level: 'moderate', label: 'Malestar moderado', label_en: 'Moderate distress', label_ca: 'Malestar moderat', message: 'Notas cierto malestar. Las prácticas de calma pueden venirte bien estos días.', message_en: 'You feel some distress. The calm practices may help you these days.', message_ca: 'Notes cert malestar. Les pràctiques de calma et poden anar bé aquests dies.' };
  return { color: '#22c55e', level: 'low', label: 'Malestar bajo', label_en: 'Low distress', label_ca: 'Malestar baix', message: 'Tu malestar es bajo. Mantén tus rutinas de calma y sueño.', message_en: 'Your distress is low. Keep up your calm and sleep routines.', message_ca: 'El teu malestar és baix. Mantén les teves rutines de calma i son.' };
}

/** Suma de la subescala de ansiedad del APAIS (ítems 0,1,3,4). */
export function apaisAnxietyScore(answers) {
  return APAIS.anxietyIndexes.reduce((acc, i) => acc + (Number(answers[i]) || 0), 0);
}
/** Suma de la subescala de información del APAIS (ítems 2,5). */
export function apaisInfoScore(answers) {
  return APAIS.infoIndexes.reduce((acc, i) => acc + (Number(answers[i]) || 0), 0);
}
export function apaisResult(anx) {
  if (anx >= 11) return { color: '#f59e0b', label: 'Ansiedad quirúrgica elevada', label_en: 'High surgical anxiety', label_ca: 'Ansietat quirúrgica elevada', message: 'Tu ansiedad ante la cirugía es alta. Reforzaremos la información y las herramientas de calma; coméntalo también en tu consulta de preanestesia.', message_en: 'Your anxiety about surgery is high. We will reinforce information and calm tools; also mention it at your pre-anaesthesia appointment.', message_ca: 'La teva ansietat davant la cirurgia és alta. Reforçarem la informació i les eines de calma; comenta-ho també a la consulta de preanestèsia.' };
  return { color: '#22c55e', label: 'Ansiedad quirúrgica baja', label_en: 'Low surgical anxiety', label_ca: 'Ansietat quirúrgica baixa', message: 'Tu ansiedad ante la cirugía es baja. Las herramientas del programa te ayudarán a mantenerte así.', message_en: 'Your anxiety about surgery is low. The programme tools will help you stay this way.', message_ca: 'La teva ansietat davant la cirurgia és baixa. Les eines del programa t’ajudaran a mantenir-te així.' };
}

/**
 * Motor de triaje del bienestar mental (reglas transparentes, sin ML).
 * Prioridad: CRISIS > ROJO > ÁMBAR > VERDE. El termómetro no decide en solitario;
 * highBurden (DT≥6) es un marcador informativo que acompaña al nivel.
 * @returns { level, reasons, highBurden }
 */
export function computeMentalTriage({ distress = null, phq9 = null, gad7 = null, apaisAnx = null, phq9Item9 = null } = {}) {
  const highBurden = distress != null && distress >= 6;
  if (phq9Item9 != null && phq9Item9 >= 1) {
    return { level: 'crisis', reasons: ['phq9_item9'], highBurden };
  }
  const reasons = [];
  if ((phq9 != null && phq9 >= 15) || (gad7 != null && gad7 >= 15)) {
    if (phq9 != null && phq9 >= 15) reasons.push('phq9>=15');
    if (gad7 != null && gad7 >= 15) reasons.push('gad7>=15');
    return { level: 'rojo', reasons, highBurden };
  }
  if ((apaisAnx != null && apaisAnx >= 11) || (phq9 != null && phq9 >= 10) || (gad7 != null && gad7 >= 10)) {
    if (apaisAnx != null && apaisAnx >= 11) reasons.push('apais>=11');
    if (phq9 != null && phq9 >= 10) reasons.push('phq9_10_14');
    if (gad7 != null && gad7 >= 10) reasons.push('gad7_10_14');
    return { level: 'ambar', reasons, highBurden };
  }
  return { level: 'verde', reasons: highBurden ? ['distress_high'] : [], highBurden };
}

/* ---------- Registro de todas las escalas (para el hub y la comparación) ---------- */
export const SCALE_LIST = [
  // hub:false -> no aparece en el hub de evaluaciones (fragilidad), pero mantiene
  // metadatos para comparación e informe. DASI vive en Ejercicio, MUST en Nutrición.
  // GAD-7/PHQ-9 se administran en Bienestar mental (no están aquí).
  { id: 'dasi', icon: '🏃', route: 'dasi', name: 'Capacidad funcional (DASI)', name_en: 'Functional capacity (DASI)', name_ca: 'Capacitat funcional (DASI)', higherBetter: true, hub: false },
  { id: 'must', icon: '🥗', route: 'must', name: 'Riesgo nutricional (MUST)', name_en: 'Nutrition risk (MUST)', name_ca: 'Risc nutricional (MUST)', higherBetter: false, hub: false },
  { id: 'frail', icon: '🧭', route: 'fragilidad', name: 'Fragilidad rápida (FRAIL)', name_en: 'Quick frailty (FRAIL)', name_ca: 'Fragilitat ràpida (FRAIL)', higherBetter: false },
  { id: 'edmonton', icon: '📋', route: 'edmonton', name: 'Fragilidad (Edmonton)', name_en: 'Frailty (Edmonton)', name_ca: 'Fragilitat (Edmonton)', higherBetter: false },
];

export function scaleMeta(id) {
  return SCALE_LIST.find((x) => x.id === id) || null;
}

/** Interpretación unificada por id de escala. */
export function resultForScale(id, score) {
  switch (id) {
    case 'gad7': return gad7Result(score);
    case 'phq9': return phq9Result(score);
    case 'dasi': return dasiResult(score);
    case 'must': return mustResult(score);
    case 'frail': return frailResult(score);
    case 'edmonton': return edmontonResult(score);
    default: return null;
  }
}
