// content.js
// Contenido clínico del programa de prehabilitación anestésica.
// NOTA: Contenido educativo general. No sustituye la indicación de tu equipo médico.

/**
 * Categorías (pilares) de la prehabilitación.
 * Cada pilar agrupa tareas diarias y contenido educativo.
 */
export const PILLARS = [
  {
    id: 'fisico',
    name: 'Ejercicio físico',
    emoji: '🏃',
    color: '#0ea5e9',
    tagline: 'Mejora tu reserva cardiorrespiratoria y tu fuerza.',
    why: 'Una mejor capacidad física antes de la cirugía se asocia con menos complicaciones, recuperación más rápida y menor estancia hospitalaria.',
  },
  {
    id: 'respiratorio',
    name: 'Entrenamiento respiratorio',
    emoji: '🫁',
    color: '#8b5cf6',
    tagline: 'Fortalece tus músculos respiratorios.',
    why: 'El entrenamiento de la musculatura inspiratoria reduce el riesgo de complicaciones pulmonares tras la anestesia general.',
  },
  {
    id: 'nutricion',
    name: 'Nutrición',
    emoji: '🥗',
    color: '#22c55e',
    tagline: 'Llega a la cirugía bien nutrido e hidratado.',
    why: 'Un buen estado nutricional (sobre todo suficiente proteína) favorece la cicatrización y la respuesta al estrés quirúrgico.',
  },
  {
    id: 'mental',
    name: 'Bienestar mental',
    emoji: '🧘',
    color: '#f59e0b',
    tagline: 'Reduce la ansiedad y duerme mejor.',
    why: 'Menor ansiedad preoperatoria se asocia con menos dolor percibido, menor necesidad de analgésicos y mejor recuperación.',
  },
  {
    id: 'cognitivo',
    name: 'Salud cognitiva',
    emoji: '🧠',
    color: '#6366f1',
    tagline: 'Mantén tu mente activa y protégida.',
    why: 'Mantener la mente activa y descansar bien ayuda a prevenir la confusión aguda (delírium) tras la cirugía, una complicación frecuente en personas mayores o frágiles.',
  },
  {
    id: 'habitos',
    name: 'Hábitos saludables',
    emoji: '🚭',
    color: '#ef4444',
    tagline: 'Tabaco, alcohol y medicación bajo control.',
    why: 'Dejar de fumar y reducir el alcohol antes de la cirugía disminuye significativamente las complicaciones respiratorias y de la herida.',
  },
  {
    id: 'educacion',
    name: 'Educación y preparación',
    emoji: '📚',
    color: '#14b8a6',
    tagline: 'Entiende tu anestesia y tu cirugía.',
    why: 'Un paciente informado colabora mejor, tiene menos miedo y se recupera antes.',
  },
];

/**
 * Catálogo de tareas diarias por pilar.
 * type:
 *   - 'check'   -> se marca como hecha (booleano)
 *   - 'counter' -> se registra una cantidad hasta una meta (target)
 * xp: puntos de experiencia otorgados al completar.
 */
export const TASKS = [
  // --- Ejercicio físico ---
  { id: 'caminar', pillar: 'fisico', type: 'counter', unit: 'min', target: 30, xp: 25, icon: '🚶',
    title: 'Caminata activa', desc: 'Camina a paso ligero (puedes hablar pero no cantar). Suma minutos a lo largo del día.' },
  { id: 'fuerza', pillar: 'fisico', type: 'check', xp: 20, icon: '💪',
    title: 'Rutina de fuerza', desc: 'Sentadillas a una silla, puntillas y elevaciones de brazos: 2 series de 10.' },
  { id: 'movilidad', pillar: 'fisico', type: 'check', xp: 10, icon: '🤸',
    title: 'Movilidad y estiramientos', desc: '5 minutos de estiramientos suaves de piernas, espalda y hombros.' },
  { id: 'equilibrio', pillar: 'fisico', type: 'check', xp: 15, icon: '🧍',
    title: 'Equilibrio (con apoyo)', desc: 'Junto a una silla o encimera y, a ser posible, acompañado: mantén el equilibrio sobre una pierna 10-20 s por lado. Ten SIEMPRE un punto de apoyo cerca para evitar caídas.' },

  // --- Respiratorio ---
  { id: 'inspiratorio', pillar: 'respiratorio', type: 'counter', unit: 'reps', target: 30, xp: 25, icon: '🫁',
    title: 'Entrenamiento inspiratorio', desc: 'Inspiraciones profundas y lentas (o con tu inspirómetro incentivador si tienes uno).' },
  { id: 'diafragmatica', pillar: 'respiratorio', type: 'check', xp: 15, icon: '🌬️',
    title: 'Respiración diafragmática', desc: '5 minutos: inhala 4 s por la nariz, exhala 6 s por la boca, moviendo el abdomen.' },
  { id: 'tos-eficaz', pillar: 'respiratorio', type: 'check', xp: 10, icon: '💨',
    title: 'Técnica de tos eficaz', desc: 'Practica la tos asistida que usarás tras la cirugía para despejar secreciones.' },

  // --- Nutrición ---
  { id: 'proteina', pillar: 'nutricion', type: 'check', xp: 20, icon: '🍳',
    title: 'Proteína en cada comida', desc: 'Incluye una fuente de proteína (huevo, legumbre, pescado, carne magra, lácteos) en cada comida principal.' },
  { id: 'hidratacion', pillar: 'nutricion', type: 'counter', unit: 'vasos', target: 8, xp: 15, icon: '💧',
    title: 'Hidratación', desc: 'Bebe agua a lo largo del día (salvo indicación médica de restricción).' },
  { id: 'fruta-verdura', pillar: 'nutricion', type: 'check', xp: 10, icon: '🥦',
    title: '5 raciones de fruta/verdura', desc: 'Colorea tu plato con frutas y verduras para vitaminas y fibra.' },

  // --- Bienestar mental ---
  { id: 'relajacion', pillar: 'mental', type: 'check', xp: 20, icon: '🧘',
    title: 'Relajación guiada', desc: '10 minutos de relajación, meditación o respiración consciente.' },
  { id: 'sueno', pillar: 'mental', type: 'check', xp: 15, icon: '😴',
    title: 'Higiene del sueño', desc: 'Sin pantallas 30 min antes de dormir; apunta a 7-8 h de sueño.' },
  { id: 'animo', pillar: 'mental', type: 'check', xp: 10, icon: '📓',
    title: 'Registro de ánimo', desc: 'Anota cómo te sientes hoy y una cosa por la que estés agradecido.' },

  // --- Salud cognitiva ---
  { id: 'gimnasia-mental', pillar: 'cognitivo', type: 'check', xp: 15, icon: '🧩',
    title: 'Gimnasia mental', desc: 'Dedica 10-15 min a un pasatiempo que te haga pensar: el juego de memoria de la app, un crucigrama, sudoku, cartas o sopa de letras.' },
  { id: 'lectura-conversa', pillar: 'cognitivo', type: 'check', xp: 10, icon: '📗',
    title: 'Lectura o conversación', desc: 'Lee un rato o mantén una conversación estimulante. Mantener la mente activa ayuda a prevenir la confusión tras la cirugía.' },

  // --- Hábitos ---
  { id: 'no-tabaco', pillar: 'habitos', type: 'check', xp: 30, icon: '🚭',
    title: 'Día sin tabaco', desc: 'Cada día sin fumar mejora tu oxigenación y reduce complicaciones. ¡Cuenta!' },
  { id: 'no-alcohol', pillar: 'habitos', type: 'check', xp: 20, icon: '🚱',
    title: 'Día sin alcohol', desc: 'Evitar el alcohol mejora la coagulación, el hígado y el sistema inmune.' },
  { id: 'medicacion', pillar: 'habitos', type: 'check', xp: 15, icon: '💊',
    title: 'Medicación según indicación', desc: 'Toma tu medicación habitual tal y como te indicó tu equipo médico.' },

  // --- Educación ---
  { id: 'leccion', pillar: 'educacion', type: 'check', xp: 15, icon: '📖',
    title: 'Lección del día', desc: 'Lee una píldora educativa sobre tu proceso quirúrgico y anestésico.' },
  { id: 'checklist-preop', pillar: 'educacion', type: 'check', xp: 10, icon: '✅',
    title: 'Repaso de preparativos', desc: 'Revisa tu lista de preparativos preoperatorios (ayuno, documentos, acompañante).' },
];

/**
 * Contenido educativo (micro-lecciones).
 */
export const LESSONS = [
  { id: 'l1', title: '¿Qué es la prehabilitación?', body:
    'La prehabilitación es preparar tu cuerpo y tu mente ANTES de la cirugía para llegar en la mejor forma posible. Igual que un atleta entrena antes de una competición, tú te preparas para el "gran día". Cuanto mejor sea tu punto de partida, mejor toleras la anestesia y la cirugía, y más rápido te recuperas.' },
  { id: 'l2', title: 'Los 4 pilares que más importan', body:
    'Ejercicio (capacidad física), respiración (músculos pulmonares), nutrición (proteína e hidratación) y bienestar mental (ansiedad y sueño). Sumar hábitos como dejar el tabaco potencia enormemente los resultados.' },
  { id: 'l3', title: 'Tu anestesia, paso a paso', body:
    'El día de la cirugía, el equipo de anestesia te monitorizará (corazón, oxígeno, presión). Con anestesia general dormirás profundamente y no sentirás dolor. Al despertar estarás en la sala de recuperación, vigilado de cerca. Preguntar tus dudas al anestesiólogo reduce mucho el miedo.' },
  { id: 'l4', title: 'Por qué entrenar la respiración', body:
    'Tras una anestesia general, los pulmones pueden colapsar zonas pequeñas (atelectasias). Entrenar la musculatura inspiratoria y practicar la respiración profunda reduce el riesgo de neumonía y otras complicaciones pulmonares.' },
  { id: 'l5', title: 'El poder de dejar de fumar', body:
    'Dejar de fumar aunque sea 4 semanas antes reduce de forma notable las complicaciones de la herida y respiratorias. A las 12-24 h ya bajan los niveles de monóxido de carbono y mejora el oxígeno que llega a tus tejidos.' },
  { id: 'l6', title: 'Proteína: el ladrillo de tu recuperación', body:
    'La cirugía es un estrés que consume proteína para cicatrizar y mantener tus músculos. Reparte la proteína entre todas las comidas del día. Si tienes poco apetito, coméntalo con tu equipo: pueden recomendarte suplementos.' },
  { id: 'l7', title: 'El ayuno preoperatorio moderno', body:
    'Ya no es necesario "ayuno desde la medianoche" en la mayoría de casos. Muchos protocolos permiten líquidos claros hasta 2 h antes. SIEMPRE sigue exactamente las instrucciones concretas de tu centro: son tu norma.' },
  { id: 'l8', title: 'Domina la ansiedad preoperatoria', body:
    'Es normal tener miedo. Técnicas como la respiración 4-6, la relajación muscular progresiva y visualizar una recuperación exitosa reducen el estrés. Dormir bien la semana previa también ayuda a tu sistema inmune.' },
];

/**
 * Lista de preparativos preoperatorios (checklist informativa).
 */
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

/**
 * Definición de medallas / logros.
 * check(state, ctx) => boolean : condición de desbloqueo.
 */
export const BADGES = [
  { id: 'primer-paso', name: 'Primer paso', emoji: '👟', desc: 'Completa tu primer día de programa.',
    check: (s) => s.stats.daysCompleted >= 1 },
  { id: 'racha-3', name: 'En marcha', emoji: '🔥', desc: 'Mantén una racha de 3 días.',
    check: (s) => s.stats.bestStreak >= 3 },
  { id: 'racha-7', name: 'Semana perfecta', emoji: '⭐', desc: 'Mantén una racha de 7 días.',
    check: (s) => s.stats.bestStreak >= 7 },
  { id: 'racha-14', name: 'Imparable', emoji: '🏆', desc: 'Mantén una racha de 14 días.',
    check: (s) => s.stats.bestStreak >= 14 },
  { id: 'nivel-5', name: 'Atleta prehab', emoji: '🎖️', desc: 'Alcanza el nivel 5.',
    check: (s) => s.stats.level >= 5 },
  { id: 'pulmones', name: 'Pulmones de acero', emoji: '🫁', desc: 'Completa 20 sesiones respiratorias.',
    check: (s) => (s.stats.taskCounts['inspiratorio'] || 0) + (s.stats.taskCounts['diafragmatica'] || 0) >= 20 },
  { id: 'caminante', name: 'Caminante', emoji: '🥾', desc: 'Acumula 300 minutos de caminata.',
    check: (s) => (s.stats.counterTotals['caminar'] || 0) >= 300 },
  { id: 'humo-cero', name: 'Humo cero', emoji: '🚭', desc: '7 días seguidos sin tabaco.',
    check: (s) => (s.stats.taskCounts['no-tabaco'] || 0) >= 7 },
  { id: 'sabio', name: 'Bien informado', emoji: '📚', desc: 'Lee 5 lecciones educativas.',
    check: (s) => (s.stats.lessonsRead || 0) >= 5 },
  { id: 'mente-agil', name: 'Mente ágil', emoji: '🧠', desc: 'Completa 10 sesiones de gimnasia mental.',
    check: (s) => (s.stats.taskCounts['gimnasia-mental'] || 0) >= 10 },
  { id: 'memoria-maestra', name: 'Maestro de la memoria', emoji: '🃏', desc: 'Gana una partida del juego de memoria.',
    check: (s) => (s.games && s.games.memory && s.games.memory.wins > 0) },
  { id: 'hidratado', name: 'Bien hidratado', emoji: '💧', desc: 'Alcanza tu meta de hidratación 5 días.',
    check: (s) => (s.stats.hydrationGoalDays || 0) >= 5 },
  { id: 'listo', name: '¡Listo para el quirófano!', emoji: '🎉', desc: 'Completa 21 días de programa.',
    check: (s) => s.stats.daysCompleted >= 21 },
];

/** Retos semanales rotativos. */
export const WEEKLY_CHALLENGES = [
  { id: 'w-camina', title: 'Reto de la semana: 150 min de caminata', metric: 'caminar', target: 150, unit: 'min', xp: 100 },
  { id: 'w-resp', title: 'Reto de la semana: 5 sesiones respiratorias', metric: 'inspiratorio', target: 5, unit: 'sesiones', xp: 80 },
  { id: 'w-agua', title: 'Reto de la semana: hidrátate 5 días', metric: 'hidratacion', target: 5, unit: 'días', xp: 70 },
];

export const DISCLAIMER =
  'PreHabilita es una herramienta educativa y de acompañamiento. No sustituye la valoración ni las indicaciones de tu equipo médico y anestésico. Ante cualquier duda, dolor o síntoma nuevo, consulta con tu profesional de salud. Sigue siempre las instrucciones concretas de tu centro (ayuno, medicación, ejercicio permitido).';


/**
 * Nota sobre cumplimiento ERAS® (Enhanced Recovery After Surgery).
 * El contenido de este programa se inspira en los principios de recuperación
 * intensificada: prehabilitación multimodal (ejercicio, nutrición y apoyo
 * psicológico), optimización de hábitos (tabaco/alcohol), ayuno abreviado y
 * carga de hidratos de carbono, y educación del paciente.
 */
export const ERAS_NOTE =
  'Este programa sigue los principios de la recuperación intensificada (ERAS®): ' +
  'prehabilitación multimodal (ejercicio + nutrición + apoyo psicológico), ' +
  'cese de tabaco y alcohol, ayuno preoperatorio abreviado con carga de hidratos de carbono, ' +
  'y educación del paciente. Debe adaptarse siempre al protocolo concreto de tu centro.';

/**
 * Publicaciones (blog) educativas por defecto, basadas en principios ERAS.
 * El profesional puede editarlas, borrarlas o crear nuevas desde la app.
 */
export const DEFAULT_POSTS = [
  {
    id: 'post-eras',
    title: '¿Qué es el protocolo ERAS y por qué te beneficia?',
    category: 'educacion',
    cover: '',
    author: 'Equipo de prehabilitación',
    date: '2026-01-01',
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
    category: 'nutricion',
    cover: '',
    author: 'Equipo de prehabilitación',
    date: '2026-01-02',
    body:
`Durante mucho tiempo se pidió a los pacientes estar "en ayunas desde medianoche". Hoy sabemos que llegar al quirófano con las reservas de energía agotadas no ayuda.

Muchos protocolos ERAS recomiendan una bebida rica en hidratos de carbono la noche anterior y unas 2-3 horas antes de la cirugía (según indicación). Esto puede reducir la sensación de sed, hambre y ansiedad, y ayudar a tu cuerpo a afrontar mejor el estrés quirúrgico.

IMPORTANTE: esto depende totalmente de tu tipo de cirugía y de las normas de tu centro. Nunca tomes nada por tu cuenta el día de la operación. Pregunta a tu equipo qué está permitido en tu caso concreto.`,
  },
  {
    id: 'post-mindfulness',
    title: 'Prepara tu mente: mindfulness antes del quirófano',
    category: 'mental',
    cover: '',
    author: 'Equipo de prehabilitación',
    date: '2026-01-03',
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
    category: 'fisico',
    cover: '',
    author: 'Equipo de prehabilitación',
    date: '2026-01-04',
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
    category: 'fisico',
    cover: '',
    author: 'Equipo de prehabilitación',
    date: '2026-01-05',
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
    category: 'cognitivo',
    cover: '',
    author: 'Equipo de prehabilitación',
    date: '2026-01-06',
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
    category: 'nutricion',
    cover: '',
    author: 'Equipo de prehabilitación',
    date: '2026-01-07',
    body:
`La desnutrición "silenciosa" es muy común y debilita la cicatrización y las defensas. Muchas personas frágiles no llegan a sus necesidades de proteína solo con la dieta, sobre todo si tienen poco apetito.

PRIMERO, LA COMIDA REAL. Prioriza proteínas de alto valor: huevos, pescado, carne magra, lácteos (yogur griego, queso, leche), legumbres. Reparte la proteína entre todas las comidas, incluido el desayuno.

TRUCOS SI COMES POCO: enriquece los platos (leche en polvo, huevo, aceite de oliva, queso rallado), come poco y a menudo, y aprovecha los momentos de más apetito.

SUPLEMENTOS NUTRICIONALES ORALES (SNO): son batidos o preparados ricos en proteínas y calorías. Pueden ser muy útiles, pero deben indicarlos tu médico o tu nutricionista, que elegirán el tipo y la cantidad adecuados a tu caso. Coméntalo en tu consulta si te cuesta comer.`,
  },
  {
    id: 'post-anemia',
    title: 'Anemia y medicación: dos cosas que revisar antes de operarte',
    category: 'general',
    cover: '',
    author: 'Equipo de prehabilitación',
    date: '2026-01-08',
    body:
`Dos aspectos médicos marcan una gran diferencia en cómo toleras la cirugía:

ANEMIA (pocos glóbulos rojos o poco hierro). Llegar anémico a la cirugía aumenta el riesgo de necesitar transfusión y de complicaciones. A menudo se puede corregir en las semanas previas con hierro u otro tratamiento. Si te han dicho que tienes anemia o el hierro bajo, coméntalo cuanto antes en tu consulta.

POLIFARMACIA (tomar muchos medicamentos). Algunos fármacos deben mantenerse y otros suspenderse antes de la operación (por ejemplo, ciertos anticoagulantes o antidiabéticos). Nunca los cambies por tu cuenta.

LO MÁS ÚTIL QUE PUEDES HACER: llevar a la consulta de preanestesia una lista completa y actualizada de TODOS tus medicamentos (incluidos los de herbolario y los que compras sin receta) y de tus alergias. Puedes prepararla y descargarla desde la sección "Mi medicación y alergias" de esta app.`,
  },
];

/**
 * Recursos iniciales (biblioteca de vídeos/enlaces).
 * Se usan enlaces de búsqueda de YouTube para que siempre funcionen;
 * el profesional puede sustituirlos por vídeos concretos (se incrustarán).
 */
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


/**
 * Señales de alarma para el paciente y su cuidador.
 * Educativo: ante cualquiera de ellas, contactar con el equipo médico o urgencias.
 */
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

/**
 * Consejos para la persona cuidadora / familiar.
 */
export const CAREGIVER_TIPS = [
  { icon: '🤝', title: 'Acompaña, no sustituyas', text: 'Anima a tu familiar a hacer sus tareas por sí mismo cuando sea seguro; tu papel es motivar y supervisar, no hacerlo por él/ella.' },
  { icon: '🛟', title: 'Supervisa la seguridad', text: 'Quédate cerca durante los ejercicios de fuerza y equilibrio. Retira alfombras sueltas y asegura que haya un punto de apoyo firme.' },
  { icon: '📆', title: 'Cread una rutina juntos', text: 'Un horario fijo para caminar, comer y dormir da estructura y facilita la constancia. Celebrad juntos los pequeños logros.' },
  { icon: '🍽️', title: 'Cuida la alimentación', text: 'Vigila que come suficiente proteína y bebe líquidos. Si come poco, coméntalo con el equipo médico.' },
  { icon: '🧠', title: 'Estimula la mente', text: 'Conversad, jugad al juego de memoria o a las cartas, y asegúrate de que lleva gafas y audífonos si los usa.' },
  { icon: '📋', title: 'Prepara la consulta', text: 'Ayúdale a tener lista la lista de medicación y alergias, y anotad juntos las dudas para el anestesiólogo.' },
];

/**
 * Escala FRAIL de cribado de fragilidad (Morley et al.).
 * 5 ítems; cada "Sí" suma 1 punto. 0 = robusto, 1-2 = prefrágil, 3-5 = frágil.
 * Herramienta orientativa de cribado, NO diagnóstica.
 */
export const FRAIL_QUESTIONS = [
  { id: 'fatiga', q: '¿Se ha sentido cansado/a la MAYOR parte del tiempo en las últimas 4 semanas?' },
  { id: 'resistencia', q: '¿Tiene dificultad para subir un piso de escaleras (unos 10 escalones) sin ayuda ni descansar?' },
  { id: 'deambulacion', q: '¿Tiene dificultad para caminar unos 100-200 metros (una manzana) sin ayuda?' },
  { id: 'enfermedades', q: '¿Le ha dicho un médico que tiene 5 o más enfermedades crónicas (p. ej. hipertensión, diabetes, cáncer, EPOC, cardiopatía, artritis, ictus, enfermedad renal)?' },
  { id: 'peso', q: '¿Ha perdido más de un 5% de su peso (unos 3-4 kg) en el último año sin proponérselo?' },
];

/** Interpreta la puntuación FRAIL (0-5). */
export function frailResult(score) {
  if (score <= 0) return {
    level: 'robusto', label: 'Robusto', emoji: '💪', color: '#22c55e',
    message: 'Tu reserva es buena. La prehabilitación te ayudará a mantenerte fuerte y llegar en tu mejor forma a la cirugía.',
  };
  if (score <= 2) return {
    level: 'prefragil', label: 'Prefragilidad', emoji: '🌱', color: '#f59e0b',
    message: 'Estás en un punto en el que la prehabilitación tiene un impacto enorme. Empezar hoy mismo puede marcar una gran diferencia en tu recuperación.',
  };
  return {
    level: 'fragil', label: 'Fragilidad', emoji: '🤗', color: '#ef4444',
    message: 'Tu reserva es valiosa y hay mucho que ganar. Trabaja con calma, prioriza la seguridad y el acompañamiento, y comparte este resultado con tu equipo médico para adaptar tu plan.',
  };
}

/** Emojis para el minijuego de memoria (parejas). */
export const MEMORY_EMOJIS = ['🫁', '💪', '🥗', '🧘', '🚶', '💧', '😴', '🧠', '🍎', '🏆', '⭐', '🌿'];
