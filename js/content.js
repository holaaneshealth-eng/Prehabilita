// content.js
// Contenido clínico del programa de prehabilitación anestésica (bilingüe ES/EN).
// NOTA: Contenido educativo general. No sustituye la indicación de tu equipo médico.
// Los campos "_en" son las traducciones al inglés (ver i18n.js -> tr()).

export const PILLARS = [
  {
    id: 'fisico', emoji: '🏃', color: '#0ea5e9',
    name: 'Ejercicio físico', name_en: 'Physical exercise',
    tagline: 'Mejora tu reserva cardiorrespiratoria y tu fuerza.',
    tagline_en: 'Improve your cardiorespiratory reserve and strength.',
    why: 'Una mejor capacidad física antes de la cirugía se asocia con menos complicaciones, recuperación más rápida y menor estancia hospitalaria.',
    why_en: 'Better physical fitness before surgery is linked to fewer complications, faster recovery and shorter hospital stay.',
  },
  {
    id: 'respiratorio', emoji: '🫁', color: '#8b5cf6',
    name: 'Entrenamiento respiratorio', name_en: 'Breathing training',
    tagline: 'Fortalece tus músculos respiratorios.',
    tagline_en: 'Strengthen your breathing muscles.',
    why: 'El entrenamiento de la musculatura inspiratoria reduce el riesgo de complicaciones pulmonares tras la anestesia general.',
    why_en: 'Training the inspiratory muscles reduces the risk of lung complications after general anesthesia.',
  },
  {
    id: 'nutricion', emoji: '🥗', color: '#22c55e',
    name: 'Nutrición', name_en: 'Nutrition',
    tagline: 'Llega a la cirugía bien nutrido e hidratado.',
    tagline_en: 'Arrive at surgery well nourished and hydrated.',
    why: 'Un buen estado nutricional (sobre todo suficiente proteína) favorece la cicatrización y la respuesta al estrés quirúrgico.',
    why_en: 'Good nutritional status (especially enough protein) supports healing and the response to surgical stress.',
  },
  {
    id: 'mental', emoji: '🧘', color: '#f59e0b',
    name: 'Bienestar mental', name_en: 'Mental wellbeing',
    tagline: 'Reduce la ansiedad y duerme mejor.',
    tagline_en: 'Reduce anxiety and sleep better.',
    why: 'Menor ansiedad preoperatoria se asocia con menos dolor percibido, menor necesidad de analgésicos y mejor recuperación.',
    why_en: 'Lower pre-op anxiety is linked to less perceived pain, less need for painkillers and better recovery.',
  },
  {
    id: 'cognitivo', emoji: '🧠', color: '#6366f1',
    name: 'Salud cognitiva', name_en: 'Cognitive health',
    tagline: 'Mantén tu mente activa y protégida.',
    tagline_en: 'Keep your mind active and protected.',
    why: 'Mantener la mente activa y descansar bien ayuda a prevenir la confusión aguda (delírium) tras la cirugía, una complicación frecuente en personas mayores o frágiles.',
    why_en: 'Keeping the mind active and resting well helps prevent acute confusion (delirium) after surgery, a common complication in older or frail people.',
  },
  {
    id: 'habitos', emoji: '🚭', color: '#ef4444',
    name: 'Hábitos saludables', name_en: 'Healthy habits',
    tagline: 'Tabaco, alcohol y medicación bajo control.',
    tagline_en: 'Tobacco, alcohol and medication under control.',
    why: 'Dejar de fumar y reducir el alcohol antes de la cirugía disminuye significativamente las complicaciones respiratorias y de la herida.',
    why_en: 'Quitting smoking and cutting alcohol before surgery significantly reduces respiratory and wound complications.',
  },
  {
    id: 'educacion', emoji: '📚', color: '#14b8a6',
    name: 'Educación y preparación', name_en: 'Education & preparation',
    tagline: 'Entiende tu anestesia y tu cirugía.',
    tagline_en: 'Understand your anesthesia and your surgery.',
    why: 'Un paciente informado colabora mejor, tiene menos miedo y se recupera antes.',
    why_en: 'An informed patient cooperates better, feels less fear and recovers sooner.',
  },
];

export const TASKS = [
  // --- Ejercicio físico ---
  { id: 'caminar', pillar: 'fisico', type: 'counter', unit: 'min', unit_en: 'min', target: 30, xp: 25, icon: '🚶',
    title: 'Caminata activa', title_en: 'Active walk',
    desc: 'Camina a paso ligero (puedes hablar pero no cantar). Suma minutos a lo largo del día.',
    desc_en: 'Walk at a brisk pace (you can talk but not sing). Add up minutes throughout the day.' },
  { id: 'fuerza', pillar: 'fisico', type: 'check', xp: 20, icon: '💪',
    title: 'Rutina de fuerza', title_en: 'Strength routine',
    desc: 'Sentadillas a una silla, puntillas y elevaciones de brazos: 2 series de 10.',
    desc_en: 'Chair squats, calf raises and arm raises: 2 sets of 10.' },
  { id: 'movilidad', pillar: 'fisico', type: 'check', xp: 10, icon: '🤸',
    title: 'Movilidad y estiramientos', title_en: 'Mobility & stretching',
    desc: '5 minutos de estiramientos suaves de piernas, espalda y hombros.',
    desc_en: '5 minutes of gentle stretches for legs, back and shoulders.' },
  { id: 'equilibrio', pillar: 'fisico', type: 'check', xp: 15, icon: '🧍',
    title: 'Equilibrio (con apoyo)', title_en: 'Balance (with support)',
    desc: 'Junto a una silla o encimera y, a ser posible, acompañado: mantén el equilibrio sobre una pierna 10-20 s por lado. Ten SIEMPRE un punto de apoyo cerca para evitar caídas.',
    desc_en: 'Next to a chair or counter and, if possible, with company: balance on one leg for 10-20 s per side. ALWAYS keep a support nearby to avoid falls.' },

  // --- Respiratorio ---
  { id: 'inspiratorio', pillar: 'respiratorio', type: 'counter', unit: 'reps', unit_en: 'reps', target: 30, xp: 25, icon: '🫁',
    title: 'Entrenamiento inspiratorio', title_en: 'Inspiratory training',
    desc: 'Inspiraciones profundas y lentas (o con tu inspirómetro incentivador si tienes uno).',
    desc_en: 'Slow, deep breaths in (or with your incentive spirometer if you have one).' },
  { id: 'diafragmatica', pillar: 'respiratorio', type: 'check', xp: 15, icon: '🌬️',
    title: 'Respiración diafragmática', title_en: 'Diaphragmatic breathing',
    desc: '5 minutos: inhala 4 s por la nariz, exhala 6 s por la boca, moviendo el abdomen.',
    desc_en: '5 minutes: inhale 4 s through the nose, exhale 6 s through the mouth, moving your belly.' },
  { id: 'tos-eficaz', pillar: 'respiratorio', type: 'check', xp: 10, icon: '💨',
    title: 'Técnica de tos eficaz', title_en: 'Effective cough technique',
    desc: 'Practica la tos asistida que usarás tras la cirugía para despejar secreciones.',
    desc_en: 'Practise the assisted cough you will use after surgery to clear secretions.' },

  // --- Nutrición ---
  { id: 'proteina', pillar: 'nutricion', type: 'check', xp: 20, icon: '🍳',
    title: 'Proteína en cada comida', title_en: 'Protein at every meal',
    desc: 'Incluye una fuente de proteína (huevo, legumbre, pescado, carne magra, lácteos) en cada comida principal.',
    desc_en: 'Include a protein source (egg, legumes, fish, lean meat, dairy) at every main meal.' },
  { id: 'hidratacion', pillar: 'nutricion', type: 'counter', unit: 'vasos', unit_en: 'glasses', target: 8, xp: 15, icon: '💧',
    title: 'Hidratación', title_en: 'Hydration',
    desc: 'Bebe agua a lo largo del día (salvo indicación médica de restricción).',
    desc_en: 'Drink water throughout the day (unless your doctor advised fluid restriction).' },
  { id: 'fruta-verdura', pillar: 'nutricion', type: 'check', xp: 10, icon: '🥦',
    title: '5 raciones de fruta/verdura', title_en: '5 servings of fruit/veg',
    desc: 'Colorea tu plato con frutas y verduras para vitaminas y fibra.',
    desc_en: 'Fill your plate with colorful fruits and vegetables for vitamins and fiber.' },

  // --- Bienestar mental ---
  { id: 'relajacion', pillar: 'mental', type: 'check', xp: 20, icon: '🧘',
    title: 'Relajación guiada', title_en: 'Guided relaxation',
    desc: '10 minutos de relajación, meditación o respiración consciente.',
    desc_en: '10 minutes of relaxation, meditation or mindful breathing.' },
  { id: 'sueno', pillar: 'mental', type: 'check', xp: 15, icon: '😴',
    title: 'Higiene del sueño', title_en: 'Sleep hygiene',
    desc: 'Sin pantallas 30 min antes de dormir; apunta a 7-8 h de sueño.',
    desc_en: 'No screens 30 min before bed; aim for 7-8 h of sleep.' },
  { id: 'animo', pillar: 'mental', type: 'check', xp: 10, icon: '📓',
    title: 'Registro de ánimo', title_en: 'Mood check-in',
    desc: 'Anota cómo te sientes hoy y una cosa por la que estés agradecido.',
    desc_en: 'Note how you feel today and one thing you are grateful for.' },

  // --- Salud cognitiva ---
  { id: 'gimnasia-mental', pillar: 'cognitivo', type: 'check', xp: 15, icon: '🧩',
    title: 'Gimnasia mental', title_en: 'Brain training',
    desc: 'Dedica 10-15 min a un pasatiempo que te haga pensar: el juego de memoria de la app, un crucigrama, sudoku, cartas o sopa de letras.',
    desc_en: 'Spend 10-15 min on a puzzle that makes you think: the app\'s memory game, a crossword, sudoku, cards or word search.' },
  { id: 'lectura-conversa', pillar: 'cognitivo', type: 'check', xp: 10, icon: '📗',
    title: 'Lectura o conversación', title_en: 'Reading or conversation',
    desc: 'Lee un rato o mantén una conversación estimulante. Mantener la mente activa ayuda a prevenir la confusión tras la cirugía.',
    desc_en: 'Read for a while or have a stimulating conversation. Keeping the mind active helps prevent confusion after surgery.' },

  // --- Hábitos ---
  { id: 'no-tabaco', pillar: 'habitos', type: 'check', xp: 30, icon: '🚭',
    title: 'Día sin tabaco', title_en: 'Smoke-free day',
    desc: 'Cada día sin fumar mejora tu oxigenación y reduce complicaciones. ¡Cuenta!',
    desc_en: 'Every smoke-free day improves your oxygenation and reduces complications. It counts!' },
  { id: 'no-alcohol', pillar: 'habitos', type: 'check', xp: 20, icon: '🚱',
    title: 'Día sin alcohol', title_en: 'Alcohol-free day',
    desc: 'Evitar el alcohol mejora la coagulación, el hígado y el sistema inmune.',
    desc_en: 'Avoiding alcohol improves clotting, liver function and the immune system.' },
  { id: 'medicacion', pillar: 'habitos', type: 'check', xp: 15, icon: '💊',
    title: 'Medicación según indicación', title_en: 'Medication as prescribed',
    desc: 'Toma tu medicación habitual tal y como te indicó tu equipo médico.',
    desc_en: 'Take your usual medication exactly as your medical team instructed.' },

  // --- Educación ---
  { id: 'leccion', pillar: 'educacion', type: 'check', xp: 15, icon: '📖',
    title: 'Lección del día', title_en: 'Lesson of the day',
    desc: 'Lee una píldora educativa sobre tu proceso quirúrgico y anestésico.',
    desc_en: 'Read a quick educational tip about your surgical and anesthetic journey.' },
  { id: 'checklist-preop', pillar: 'educacion', type: 'check', xp: 10, icon: '✅',
    title: 'Repaso de preparativos', title_en: 'Review your prep',
    desc: 'Revisa tu lista de preparativos preoperatorios (ayuno, documentos, acompañante).',
    desc_en: 'Review your pre-op checklist (fasting, documents, companion).' },
];

export const LESSONS = [
  { id: 'l1', title: '¿Qué es la prehabilitación?', title_en: 'What is prehabilitation?',
    body: 'La prehabilitación es preparar tu cuerpo y tu mente ANTES de la cirugía para llegar en la mejor forma posible. Igual que un atleta entrena antes de una competición, tú te preparas para el "gran día". Cuanto mejor sea tu punto de partida, mejor toleras la anestesia y la cirugía, y más rápido te recuperas.',
    body_en: 'Prehabilitation means preparing your body and mind BEFORE surgery so you arrive in the best possible shape. Just like an athlete trains before a competition, you prepare for the "big day". The better your starting point, the better you tolerate anesthesia and surgery, and the faster you recover.' },
  { id: 'l2', title: 'Los 4 pilares que más importan', title_en: 'The 4 pillars that matter most',
    body: 'Ejercicio (capacidad física), respiración (músculos pulmonares), nutrición (proteína e hidratación) y bienestar mental (ansiedad y sueño). Sumar hábitos como dejar el tabaco potencia enormemente los resultados.',
    body_en: 'Exercise (physical capacity), breathing (lung muscles), nutrition (protein and hydration) and mental wellbeing (anxiety and sleep). Adding habits like quitting smoking greatly boosts the results.' },
  { id: 'l3', title: 'Tu anestesia, paso a paso', title_en: 'Your anesthesia, step by step',
    body: 'El día de la cirugía, el equipo de anestesia te monitorizará (corazón, oxígeno, presión). Con anestesia general dormirás profundamente y no sentirás dolor. Al despertar estarás en la sala de recuperación, vigilado de cerca. Preguntar tus dudas al anestesiólogo reduce mucho el miedo.',
    body_en: 'On surgery day, the anesthesia team will monitor you (heart, oxygen, blood pressure). Under general anesthesia you will sleep deeply and feel no pain. When you wake up you will be in the recovery room, closely watched. Asking the anesthesiologist your questions greatly reduces fear.' },
  { id: 'l4', title: 'Por qué entrenar la respiración', title_en: 'Why train your breathing',
    body: 'Tras una anestesia general, los pulmones pueden colapsar zonas pequeñas (atelectasias). Entrenar la musculatura inspiratoria y practicar la respiración profunda reduce el riesgo de neumonía y otras complicaciones pulmonares.',
    body_en: 'After general anesthesia, small areas of the lungs can collapse (atelectasis). Training the inspiratory muscles and practising deep breathing reduces the risk of pneumonia and other lung complications.' },
  { id: 'l5', title: 'El poder de dejar de fumar', title_en: 'The power of quitting smoking',
    body: 'Dejar de fumar aunque sea 4 semanas antes reduce de forma notable las complicaciones de la herida y respiratorias. A las 12-24 h ya bajan los niveles de monóxido de carbono y mejora el oxígeno que llega a tus tejidos.',
    body_en: 'Quitting smoking even 4 weeks before markedly reduces wound and respiratory complications. Within 12-24 h carbon monoxide levels drop and the oxygen reaching your tissues improves.' },
  { id: 'l6', title: 'Proteína: el ladrillo de tu recuperación', title_en: 'Protein: the building block of recovery',
    body: 'La cirugía es un estrés que consume proteína para cicatrizar y mantener tus músculos. Reparte la proteína entre todas las comidas del día. Si tienes poco apetito, coméntalo con tu equipo: pueden recomendarte suplementos.',
    body_en: 'Surgery is a stress that consumes protein to heal and maintain your muscles. Spread protein across all your meals. If you have little appetite, tell your team: they may recommend supplements.' },
  { id: 'l7', title: 'El ayuno preoperatorio moderno', title_en: 'Modern pre-op fasting',
    body: 'Ya no es necesario "ayuno desde la medianoche" en la mayoría de casos. Muchos protocolos permiten líquidos claros hasta 2 h antes. SIEMPRE sigue exactamente las instrucciones concretas de tu centro: son tu norma.',
    body_en: 'Fasting "from midnight" is no longer needed in most cases. Many protocols allow clear fluids up to 2 h before. ALWAYS follow the exact instructions from your hospital: they are your rule.' },
  { id: 'l8', title: 'Domina la ansiedad preoperatoria', title_en: 'Master pre-op anxiety',
    body: 'Es normal tener miedo. Técnicas como la respiración 4-6, la relajación muscular progresiva y visualizar una recuperación exitosa reducen el estrés. Dormir bien la semana previa también ayuda a tu sistema inmune.',
    body_en: 'Feeling afraid is normal. Techniques like 4-6 breathing, progressive muscle relaxation and picturing a successful recovery reduce stress. Sleeping well the week before also helps your immune system.' },
];

export const PREOP_CHECKLIST = [
  'Confirma la fecha, hora y lugar de tu cirugía.',
  'Anota tus dudas para la consulta de preanestesia.',
  'Ten a mano la lista de tus medicamentos y alergias.',
  'Confirma qué medicación debes suspender o mantener (según indicación).',
  'Organiza a un acompañante para el día del alta.',
  'Prepara ropa cómoda y artículos de aseo para el hospital.',
  'Sigue al pie de la letra las instrucciones de ayuno de tu centro.',
  'Ducha con el jabón antiséptico si te lo indicaron.',
];
export const PREOP_CHECKLIST_EN = [
  'Confirm the date, time and place of your surgery.',
  'Write down your questions for the pre-anesthesia consultation.',
  'Keep your list of medications and allergies handy.',
  'Confirm which medication to stop or continue (as advised).',
  'Arrange a companion for discharge day.',
  'Pack comfortable clothes and toiletries for the hospital.',
  'Follow your hospital\'s fasting instructions to the letter.',
  'Shower with the antiseptic soap if instructed.',
];

export const BADGES = [
  { id: 'primer-paso', emoji: '👟', name: 'Primer paso', name_en: 'First step', desc: 'Completa tu primer día de programa.', desc_en: 'Complete your first day of the program.',
    check: (s) => s.stats.daysCompleted >= 1 },
  { id: 'racha-3', emoji: '🔥', name: 'En marcha', name_en: 'Getting going', desc: 'Mantén una racha de 3 días.', desc_en: 'Keep a 3-day streak.',
    check: (s) => s.stats.bestStreak >= 3 },
  { id: 'racha-7', emoji: '⭐', name: 'Semana perfecta', name_en: 'Perfect week', desc: 'Mantén una racha de 7 días.', desc_en: 'Keep a 7-day streak.',
    check: (s) => s.stats.bestStreak >= 7 },
  { id: 'racha-14', emoji: '🏆', name: 'Imparable', name_en: 'Unstoppable', desc: 'Mantén una racha de 14 días.', desc_en: 'Keep a 14-day streak.',
    check: (s) => s.stats.bestStreak >= 14 },
  { id: 'nivel-5', emoji: '🎖️', name: 'Atleta prehab', name_en: 'Prehab athlete', desc: 'Alcanza el nivel 5.', desc_en: 'Reach level 5.',
    check: (s) => s.stats.level >= 5 },
  { id: 'pulmones', emoji: '🫁', name: 'Pulmones de acero', name_en: 'Lungs of steel', desc: 'Completa 20 sesiones respiratorias.', desc_en: 'Complete 20 breathing sessions.',
    check: (s) => (s.stats.taskCounts['inspiratorio'] || 0) + (s.stats.taskCounts['diafragmatica'] || 0) >= 20 },
  { id: 'caminante', emoji: '🥾', name: 'Caminante', name_en: 'Walker', desc: 'Acumula 300 minutos de caminata.', desc_en: 'Accumulate 300 minutes of walking.',
    check: (s) => (s.stats.counterTotals['caminar'] || 0) >= 300 },
  { id: 'humo-cero', emoji: '🚭', name: 'Humo cero', name_en: 'Smoke-free', desc: '7 días seguidos sin tabaco.', desc_en: '7 days in a row without tobacco.',
    check: (s) => (s.stats.taskCounts['no-tabaco'] || 0) >= 7 },
  { id: 'sabio', emoji: '📚', name: 'Bien informado', name_en: 'Well informed', desc: 'Lee 5 lecciones educativas.', desc_en: 'Read 5 educational lessons.',
    check: (s) => (s.stats.lessonsRead || 0) >= 5 },
  { id: 'mente-agil', emoji: '🧠', name: 'Mente ágil', name_en: 'Sharp mind', desc: 'Completa 10 sesiones de gimnasia mental.', desc_en: 'Complete 10 brain-training sessions.',
    check: (s) => (s.stats.taskCounts['gimnasia-mental'] || 0) >= 10 },
  { id: 'memoria-maestra', emoji: '🃏', name: 'Maestro de la memoria', name_en: 'Memory master', desc: 'Gana una partida del juego de memoria.', desc_en: 'Win a round of the memory game.',
    check: (s) => (s.games && s.games.memory && s.games.memory.wins > 0) },
  { id: 'hidratado', emoji: '💧', name: 'Bien hidratado', name_en: 'Well hydrated', desc: 'Alcanza tu meta de hidratación 5 días.', desc_en: 'Reach your hydration goal on 5 days.',
    check: (s) => (s.stats.hydrationGoalDays || 0) >= 5 },
  { id: 'listo', emoji: '🎉', name: '¡Listo para el quirófano!', name_en: 'Ready for the OR!', desc: 'Completa 21 días de programa.', desc_en: 'Complete 21 days of the program.',
    check: (s) => s.stats.daysCompleted >= 21 },
];

export const WEEKLY_CHALLENGES = [
  { id: 'w-camina', title: 'Reto de la semana: 150 min de caminata', title_en: 'Weekly challenge: 150 min of walking', metric: 'caminar', target: 150, unit: 'min', unit_en: 'min', xp: 100 },
  { id: 'w-resp', title: 'Reto de la semana: 5 sesiones respiratorias', title_en: 'Weekly challenge: 5 breathing sessions', metric: 'inspiratorio', target: 5, unit: 'sesiones', unit_en: 'sessions', xp: 80 },
  { id: 'w-agua', title: 'Reto de la semana: hidrátate 5 días', title_en: 'Weekly challenge: hydrate on 5 days', metric: 'hidratacion', target: 5, unit: 'días', unit_en: 'days', xp: 70 },
];

export const DISCLAIMER =
  'PreHabilita es una herramienta educativa y de acompañamiento. No sustituye la valoración ni las indicaciones de tu equipo médico y anestésico. Ante cualquier duda, dolor o síntoma nuevo, consulta con tu profesional de salud. Sigue siempre las instrucciones concretas de tu centro (ayuno, medicación, ejercicio permitido).';
export const DISCLAIMER_EN =
  'PreHabilita is an educational and support tool. It does not replace the assessment or instructions of your medical and anesthetic team. If you have any doubt, pain or new symptom, consult your healthcare professional. Always follow the specific instructions from your hospital (fasting, medication, permitted exercise).';

export const ERAS_NOTE =
  'Este programa sigue los principios de la recuperación intensificada (ERAS®): ' +
  'prehabilitación multimodal (ejercicio + nutrición + apoyo psicológico), ' +
  'cese de tabaco y alcohol, ayuno preoperatorio abreviado con carga de hidratos de carbono, ' +
  'y educación del paciente. Debe adaptarse siempre al protocolo concreto de tu centro.';
export const ERAS_NOTE_EN =
  'This program follows Enhanced Recovery After Surgery (ERAS®) principles: ' +
  'multimodal prehabilitation (exercise + nutrition + psychological support), ' +
  'smoking and alcohol cessation, shortened pre-op fasting with carbohydrate loading, ' +
  'and patient education. It must always be adapted to your hospital\'s specific protocol.';

/**
 * Fases del plan según los días que faltan para la cirugía (plan adaptativo).
 */
export function getPhase(days) {
  if (days == null) {
    return { id: 'sinfecha', emoji: '🗓️', color: '#64748b',
      title: 'Plan diario', title_en: 'Daily plan',
      focus: 'Añade la fecha de tu cirugía (en "Editar mis datos") para adaptar el plan por fases.',
      focus_en: 'Add your surgery date (in "Edit my details") to tailor the plan into phases.' };
  }
  if (days < 0) {
    return { id: 'recuperacion', emoji: '🌤️', color: '#22c55e',
      title: 'Recuperación', title_en: 'Recovery',
      focus: 'Ya has pasado por el quirófano. Retoma la actividad de forma progresiva según te indique tu equipo, cuida la respiración y la nutrición, y descansa.',
      focus_en: 'You have had your surgery. Resume activity gradually as your team advises, care for your breathing and nutrition, and rest.' };
  }
  if (days === 0) {
    return { id: 'dia-cirugia', emoji: '🏥', color: '#0f766e',
      title: '¡Hoy es el día!', title_en: 'Today is the day!',
      focus: 'Sigue al pie de la letra las instrucciones de tu centro (ayuno, medicación, higiene). Respira con calma: te has preparado para esto.',
      focus_en: 'Follow your hospital\'s instructions exactly (fasting, medication, hygiene). Breathe calmly: you have prepared for this.' };
  }
  if (days <= 2) {
    return { id: 'final', emoji: '🎒', color: '#f59e0b',
      title: 'Preparativos finales', title_en: 'Final preparations',
      focus: 'Baja la intensidad del ejercicio y descansa bien. Repasa la lista de preparativos, prepara la bolsa y confirma tu acompañante y el ayuno.',
      focus_en: 'Ease off exercise intensity and rest well. Review the checklist, pack your bag and confirm your companion and fasting.' };
  }
  if (days <= 7) {
    return { id: 'puesta-a-punto', emoji: '🎯', color: '#8b5cf6',
      title: 'Puesta a punto', title_en: 'Tune-up',
      focus: 'Mantén el ejercicio suave, prioriza la respiración, el sueño y la proteína. Reduce el estrés y afina los últimos detalles.',
      focus_en: 'Keep exercise gentle, prioritise breathing, sleep and protein. Lower stress and fine-tune the last details.' };
  }
  if (days <= 21) {
    return { id: 'desarrollo', emoji: '📈', color: '#0ea5e9',
      title: 'Fase de desarrollo', title_en: 'Development phase',
      focus: 'Es el momento de progresar: aumenta poco a poco la caminata y la fuerza, sé constante con la respiración y consolida buenos hábitos.',
      focus_en: 'Time to progress: gradually increase walking and strength, be consistent with breathing and lock in good habits.' };
  }
  return { id: 'base', emoji: '🏗️', color: '#14b8a6',
    title: 'Fase de base', title_en: 'Building phase',
    focus: 'Tienes tiempo para construir una buena base. Céntrate en crear el hábito diario, empezar a moverte y, si fumas o bebes, empezar a dejarlo.',
    focus_en: 'You have time to build a solid base. Focus on creating the daily habit, starting to move and, if you smoke or drink, starting to quit.' };
}

export const DEFAULT_POSTS = [
  {
    id: 'post-eras',
    title: '¿Qué es el protocolo ERAS y por qué te beneficia?',
    category: 'educacion', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-01',
    body:
`ERAS son las siglas en inglés de "recuperación intensificada tras la cirugía". Es un conjunto de medidas, respaldadas por la evidencia científica, que buscan que te recuperes antes y con menos complicaciones.

La idea central es sencilla: en lugar de esperar pasivamente a la operación, TÚ participas activamente en tu preparación. Esto incluye:

• Prehabilitación: mejorar tu forma física, tu nutrición y tu bienestar mental en las semanas previas.
• Optimizar hábitos: reducir o eliminar tabaco y alcohol.
• Ayuno inteligente: nada de largas horas sin comer sin necesidad; a menudo se permite una bebida rica en hidratos de carbono unas horas antes.
• Movilización precoz y control del dolor tras la cirugía.

Cada tarea que completas en esta app es una pieza de ese rompecabezas. No se trata de hacerlo perfecto, sino de sumar pequeños pasos cada día.`,
  },
  {
    id: 'post-carga',
    title: 'Carga de hidratos de carbono antes de la cirugía',
    category: 'nutricion', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-02',
    body:
`Durante mucho tiempo se pidió a los pacientes estar "en ayunas desde medianoche". Hoy sabemos que llegar al quirófano con las reservas de energía agotadas no ayuda.

Muchos protocolos ERAS recomiendan una bebida rica en hidratos de carbono la noche anterior y unas 2-3 horas antes de la cirugía (según indicación). Esto puede reducir la sensación de sed, hambre y ansiedad, y ayudar a tu cuerpo a afrontar mejor el estrés quirúrgico.

IMPORTANTE: esto depende totalmente de tu tipo de cirugía y de las normas de tu centro. Nunca tomes nada por tu cuenta el día de la operación. Pregunta a tu equipo qué está permitido en tu caso concreto.`,
  },
  {
    id: 'post-mindfulness',
    title: 'Prepara tu mente: mindfulness antes del quirófano',
    category: 'mental', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-03',
    body:
`Sentir nervios antes de una cirugía es completamente normal. La buena noticia es que puedes entrenar tu mente para afrontarlo mejor.

Prueba este ejercicio de 5 minutos:
1. Siéntate cómodo y cierra los ojos.
2. Inhala por la nariz contando hasta 4.
3. Exhala despacio por la boca contando hasta 6.
4. Si aparece un pensamiento, obsérvalo sin juzgarlo y vuelve a tu respiración.

Practicar esto a diario reduce la ansiedad y puede disminuir la percepción de dolor tras la operación. Añade a tus recursos vídeos de meditación guiada que te resulten agradables y conviértelo en un hábito.`,
  },
  {
    id: 'post-ejercicio',
    title: 'Ejercicio seguro en casa antes de la operación',
    category: 'fisico', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-04',
    body:
`No necesitas un gimnasio para prepararte. La combinación más útil es:

• Aeróbico: caminar a paso ligero, 20-30 minutos casi todos los días. Deberías poder hablar, pero no cantar.
• Fuerza: 2-3 veces por semana. Levantarte de una silla sin manos, ponerte de puntillas, elevaciones de brazos con una botella de agua.
• Respiración: ejercicios inspiratorios diarios.

Empieza suave y aumenta poco a poco. Si sientes dolor en el pecho, mareo o falta de aire desproporcionada, para y consulta con tu equipo médico. Adapta siempre la intensidad a lo que tu profesional te haya autorizado.`,
  },
  {
    id: 'post-silla',
    title: 'Ejercicios seguros en silla (para empezar sin riesgo)',
    category: 'fisico', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-05',
    body:
`Si te cansas rápido, tienes poca fuerza o miedo a caerte, empieza por aquí. Son ejercicios muy seguros que puedes hacer sentado o con apoyo. Hazlos, si puedes, acompañado de un familiar.

SENTADO EN UNA SILLA FIRME (sin ruedas):
• Levantar y estirar cada pierna: 10 veces por pierna.
• Marcha sentado (levantar rodillas alternando): 1-2 minutos.
• Abrir y cerrar los brazos, y elevarlos por encima de la cabeza: 10 veces.

DE PIE, CON LAS MANOS APOYADAS EN EL RESPALDO:
• Levantarse y sentarse de la silla sin usar las manos: empieza con 5 y sube poco a poco.
• Ponerte de puntillas: 10 veces.
• Flexiones contra la pared: 10 veces.

Reglas de oro: nunca hagas equilibrio sin un apoyo cerca, para si te mareas o te falta el aire, e hidrátate. La constancia importa mucho más que la intensidad.`,
  },
  {
    id: 'post-delirium',
    title: 'Prevenir la confusión tras la cirugía (delírium)',
    category: 'cognitivo', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-06',
    body:
`El delírium es un estado de confusión aguda que puede aparecer en los días posteriores a una cirugía, sobre todo en personas mayores o frágiles. Es frecuente y casi siempre temporal, pero conviene prevenirlo porque asusta mucho y puede retrasar la recuperación.

QUÉ AYUDA A PREVENIRLO (antes y después):
• Mantener la mente activa: lectura, pasatiempos, el juego de memoria de la app, conversación.
• Dormir bien y respetar el ritmo día/noche.
• Llevar gafas y audífonos si los usas (ver y oír bien reduce la desorientación).
• Hidratarse y comer adecuadamente.
• Revisar con tu médico los fármacos que pueden favorecerlo.

PARA LA FAMILIA, tras la operación: hablarle con calma, recordarle dónde está y qué día es, traer objetos familiares y acompañarle. Si notáis confusión, desorientación o cambios bruscos de comportamiento, avisad al personal sanitario: saben cómo manejarlo.`,
  },
  {
    id: 'post-sno',
    title: 'Cuando la comida no basta: suplementos nutricionales',
    category: 'nutricion', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-07',
    body:
`La desnutrición "silenciosa" es muy común y debilita la cicatrización y las defensas. Muchas personas frágiles no llegan a sus necesidades de proteína solo con la dieta, sobre todo si tienen poco apetito.

PRIMERO, LA COMIDA REAL. Prioriza proteínas de alto valor: huevos, pescado, carne magra, lácteos (yogur griego, queso, leche), legumbres. Reparte la proteína entre todas las comidas, incluido el desayuno.

TRUCOS SI COMES POCO: enriquece los platos (leche en polvo, huevo, aceite de oliva, queso rallado), come poco y a menudo, y aprovecha los momentos de más apetito.

SUPLEMENTOS NUTRICIONALES ORALES (SNO): son batidos o preparados ricos en proteínas y calorías. Pueden ser muy útiles, pero deben indicarlos tu médico o tu nutricionista, que elegirán el tipo y la cantidad adecuados a tu caso. Coméntalo en tu consulta si te cuesta comer.`,
  },
  {
    id: 'post-anemia',
    title: 'Anemia y medicación: dos cosas que revisar antes de operarte',
    category: 'general', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-08',
    body:
`Dos aspectos médicos marcan una gran diferencia en cómo toleras la cirugía:

ANEMIA (pocos glóbulos rojos o poco hierro). Llegar anémico a la cirugía aumenta el riesgo de necesitar transfusión y de complicaciones. A menudo se puede corregir en las semanas previas con hierro u otro tratamiento. Si te han dicho que tienes anemia o el hierro bajo, coméntalo cuanto antes en tu consulta.

POLIFARMACIA (tomar muchos medicamentos). Algunos fármacos deben mantenerse y otros suspenderse antes de la operación (por ejemplo, ciertos anticoagulantes o antidiabéticos). Nunca los cambies por tu cuenta.

LO MÁS ÚTIL QUE PUEDES HACER: llevar a la consulta de preanestesia una lista completa y actualizada de TODOS tus medicamentos (incluidos los de herbolario y los que compras sin receta) y de tus alergias. Puedes prepararla y descargarla desde la sección "Mi medicación y alergias" de esta app.`,
  },
];

export const DEFAULT_RESOURCES = [
  { id: 'res-mindfulness', pillar: 'mental', type: 'link',
    url: 'https://www.youtube.com/results?search_query=meditaci%C3%B3n+guiada+mindfulness+10+minutos',
    title: 'Meditaciones guiadas de mindfulness', desc: 'Ejemplos de meditación guiada (10 min). Reemplázalo por tu vídeo favorito.' },
  { id: 'res-nutricion', pillar: 'nutricion', type: 'link',
    url: 'https://www.youtube.com/results?search_query=alimentaci%C3%B3n+rica+en+prote%C3%ADnas+recuperaci%C3%B3n',
    title: 'Alimentación rica en proteínas', desc: 'Ideas de comidas ricas en proteína para tu prehabilitación.' },
  { id: 'res-ejercicio', pillar: 'fisico', type: 'link',
    url: 'https://www.youtube.com/results?search_query=ejercicios+en+casa+para+mayores+fuerza+suave',
    title: 'Ejercicios de fuerza suaves en casa', desc: 'Rutinas sencillas de fuerza sin material.' },
];

export const ALARM_SIGNS = [
  'Dolor en el pecho, palpitaciones o falta de aire en reposo.',
  'Fiebre alta o escalofríos.',
  'Mareo intenso, desmayo o caída.',
  'Confusión nueva, desorientación o cambios bruscos de comportamiento.',
  'Dolor que no cede o empeora de forma llamativa.',
  'Sangrado, o herida enrojecida, caliente o con secreción.',
  'Vómitos persistentes o incapacidad para beber líquidos.',
  'Hinchazón o dolor en una pierna (sobre todo en una sola).',
];
export const ALARM_SIGNS_EN = [
  'Chest pain, palpitations or shortness of breath at rest.',
  'High fever or chills.',
  'Severe dizziness, fainting or a fall.',
  'New confusion, disorientation or sudden behavior changes.',
  'Pain that does not ease or clearly worsens.',
  'Bleeding, or a wound that is red, warm or discharging.',
  'Persistent vomiting or inability to drink fluids.',
  'Swelling or pain in one leg (especially just one).',
];

export const CAREGIVER_TIPS = [
  { icon: '🤝', title: 'Acompaña, no sustituyas', title_en: 'Support, don\'t replace',
    text: 'Anima a tu familiar a hacer sus tareas por sí mismo cuando sea seguro; tu papel es motivar y supervisar, no hacerlo por él/ella.',
    text_en: 'Encourage your relative to do their tasks themselves when it is safe; your role is to motivate and supervise, not to do it for them.' },
  { icon: '🛟', title: 'Supervisa la seguridad', title_en: 'Watch over safety',
    text: 'Quédate cerca durante los ejercicios de fuerza y equilibrio. Retira alfombras sueltas y asegura que haya un punto de apoyo firme.',
    text_en: 'Stay close during strength and balance exercises. Remove loose rugs and make sure there is a firm support to hold on to.' },
  { icon: '📆', title: 'Cread una rutina juntos', title_en: 'Build a routine together',
    text: 'Un horario fijo para caminar, comer y dormir da estructura y facilita la constancia. Celebrad juntos los pequeños logros.',
    text_en: 'A fixed schedule for walking, eating and sleeping gives structure and helps consistency. Celebrate the small wins together.' },
  { icon: '🍽️', title: 'Cuida la alimentación', title_en: 'Look after nutrition',
    text: 'Vigila que come suficiente proteína y bebe líquidos. Si come poco, coméntalo con el equipo médico.',
    text_en: 'Check that they eat enough protein and drink fluids. If they eat little, tell the medical team.' },
  { icon: '🧠', title: 'Estimula la mente', title_en: 'Stimulate the mind',
    text: 'Conversad, jugad al juego de memoria o a las cartas, y asegúrate de que lleva gafas y audífonos si los usa.',
    text_en: 'Chat, play the memory game or cards, and make sure they wear glasses and hearing aids if they use them.' },
  { icon: '📋', title: 'Prepara la consulta', title_en: 'Prepare the appointment',
    text: 'Ayúdale a tener lista la lista de medicación y alergias, y anotad juntos las dudas para el anestesiólogo.',
    text_en: 'Help them have the medication and allergy list ready, and note down questions for the anesthesiologist together.' },
];

export const FRAIL_QUESTIONS = [
  { id: 'fatiga', q: '¿Se ha sentido cansado/a la MAYOR parte del tiempo en las últimas 4 semanas?',
    q_en: 'Have you felt tired MOST of the time in the last 4 weeks?' },
  { id: 'resistencia', q: '¿Tiene dificultad para subir un piso de escaleras (unos 10 escalones) sin ayuda ni descansar?',
    q_en: 'Do you have difficulty climbing one flight of stairs (about 10 steps) without help or resting?' },
  { id: 'deambulacion', q: '¿Tiene dificultad para caminar unos 100-200 metros (una manzana) sin ayuda?',
    q_en: 'Do you have difficulty walking about 100-200 metres (one block) without help?' },
  { id: 'enfermedades', q: '¿Le ha dicho un médico que tiene 5 o más enfermedades crónicas (p. ej. hipertensión, diabetes, cáncer, EPOC, cardiopatía, artritis, ictus, enfermedad renal)?',
    q_en: 'Has a doctor told you that you have 5 or more chronic illnesses (e.g. hypertension, diabetes, cancer, COPD, heart disease, arthritis, stroke, kidney disease)?' },
  { id: 'peso', q: '¿Ha perdido más de un 5% de su peso (unos 3-4 kg) en el último año sin proponérselo?',
    q_en: 'Have you lost more than 5% of your weight (about 3-4 kg) in the last year without trying?' },
];

/** Interpreta la puntuación FRAIL (0-5). */
export function frailResult(score) {
  if (score <= 0) return {
    level: 'robusto', emoji: '💪', color: '#22c55e',
    label: 'Robusto', label_en: 'Robust',
    message: 'Tu reserva es buena. La prehabilitación te ayudará a mantenerte fuerte y llegar en tu mejor forma a la cirugía.',
    message_en: 'Your reserve is good. Prehabilitation will help you stay strong and arrive at surgery in your best shape.',
  };
  if (score <= 2) return {
    level: 'prefragil', emoji: '🌱', color: '#f59e0b',
    label: 'Prefragilidad', label_en: 'Pre-frailty',
    message: 'Estás en un punto en el que la prehabilitación tiene un impacto enorme. Empezar hoy mismo puede marcar una gran diferencia en tu recuperación.',
    message_en: 'You are at a point where prehabilitation has a huge impact. Starting today can make a big difference to your recovery.',
  };
  return {
    level: 'fragil', emoji: '🤗', color: '#ef4444',
    label: 'Fragilidad', label_en: 'Frailty',
    message: 'Tu reserva es valiosa y hay mucho que ganar. Trabaja con calma, prioriza la seguridad y el acompañamiento, y comparte este resultado con tu equipo médico para adaptar tu plan.',
    message_en: 'Your reserve is valuable and there is a lot to gain. Work calmly, prioritise safety and support, and share this result with your medical team to tailor your plan.',
  };
}

export const MEMORY_EMOJIS = ['🫁', '💪', '🥗', '🧘', '🚶', '💧', '😴', '🧠', '🍎', '🏆', '⭐', '🌿'];
