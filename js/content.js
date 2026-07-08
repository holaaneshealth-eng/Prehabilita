// content.js
// Contenido clínico del programa de prehabilitación anestésica (bilingüe ES/EN).
// NOTA: Contenido educativo general. No sustituye la indicación de tu equipo médico.
// Los campos "_en" son las traducciones al inglés (ver i18n.js -> tr()).

export const PILLARS = [
  {
    id: 'fisico', emoji: '🏃', color: '#0ea5e9',
    name: 'Ejercicio físico', name_en: 'Physical exercise', name_ca: 'Exercici físic',
    tagline: 'Mejora tu reserva cardiorrespiratoria y tu fuerza.',
    tagline_en: 'Improve your cardiorespiratory reserve and strength.',
    tagline_ca: 'Millora la teva reserva cardiorespiratòria i la teva força.',
    why: 'Una mejor capacidad física antes de la cirugía se asocia con menos complicaciones, recuperación más rápida y menor estancia hospitalaria.',
    why_en: 'Better physical fitness before surgery is linked to fewer complications, faster recovery and shorter hospital stay.',
    why_ca: 'Una millor capacitat física abans de la cirurgia s’associa amb menys complicacions, recuperació més ràpida i menor estada hospitalària.',
  },
  {
    id: 'respiratorio', emoji: '🫁', color: '#8b5cf6',
    name: 'Entrenamiento respiratorio', name_en: 'Breathing training', name_ca: 'Entrenament respiratori',
    tagline: 'Fortalece tus músculos respiratorios.',
    tagline_en: 'Strengthen your breathing muscles.',
    tagline_ca: 'Enforteix els teus músculs respiratoris.',
    why: 'El entrenamiento de la musculatura inspiratoria reduce el riesgo de complicaciones pulmonares tras la anestesia general.',
    why_en: 'Training the inspiratory muscles reduces the risk of lung complications after general anesthesia.',
    why_ca: 'L’entrenament de la musculatura inspiratòria redueix el risc de complicacions pulmonars després de l’anestèsia general.',
  },
  {
    id: 'nutricion', emoji: '🥗', color: '#22c55e',
    name: 'Nutrición', name_en: 'Nutrition', name_ca: 'Nutrició',
    tagline: 'Llega a la cirugía bien nutrido e hidratado.',
    tagline_en: 'Arrive at surgery well nourished and hydrated.',
    tagline_ca: 'Arriba a la cirurgia ben nodrit i hidratat.',
    why: 'Un buen estado nutricional (sobre todo suficiente proteína) favorece la cicatrización y la respuesta al estrés quirúrgico.',
    why_en: 'Good nutritional status (especially enough protein) supports healing and the response to surgical stress.',
    why_ca: 'Un bon estat nutricional (sobretot prou proteïna) afavoreix la cicatrització i la resposta a l’estrès quirúrgic.',
  },
  {
    id: 'mental', emoji: '🧘', color: '#f59e0b',
    name: 'Bienestar mental', name_en: 'Mental wellbeing', name_ca: 'Benestar mental',
    tagline: 'Reduce la ansiedad y duerme mejor.',
    tagline_en: 'Reduce anxiety and sleep better.',
    tagline_ca: 'Redueix l’ansietat i dorm millor.',
    why: 'Menor ansiedad preoperatoria se asocia con menos dolor percibido, menor necesidad de analgésicos y mejor recuperación.',
    why_en: 'Lower pre-op anxiety is linked to less perceived pain, less need for painkillers and better recovery.',
    why_ca: 'Menys ansietat preoperatòria s’associa amb menys dolor percebut, menys necessitat d’analgèsics i millor recuperació.',
  },
  {
    id: 'cognitivo', emoji: '🧠', color: '#6366f1',
    name: 'Salud cognitiva', name_en: 'Cognitive health', name_ca: 'Salut cognitiva',
    tagline: 'Mantén tu mente activa y protégida.',
    tagline_en: 'Keep your mind active and protected.',
    tagline_ca: 'Mantén la teva ment activa i protegida.',
    why: 'Mantener la mente activa y descansar bien ayuda a prevenir la confusión aguda (delírium) tras la cirugía, una complicación frecuente en personas mayores o frágiles.',
    why_en: 'Keeping the mind active and resting well helps prevent acute confusion (delirium) after surgery, a common complication in older or frail people.',
    why_ca: 'Mantenir la ment activa i descansar bé ajuda a prevenir la confusió aguda (deliri) després de la cirurgia, una complicació freqüent en persones grans o fràgils.',
  },
  {
    id: 'habitos', emoji: '🚭', color: '#ef4444',
    name: 'Hábitos saludables', name_en: 'Healthy habits', name_ca: 'Hàbits saludables',
    tagline: 'Tabaco, alcohol y medicación bajo control.',
    tagline_en: 'Tobacco, alcohol and medication under control.',
    tagline_ca: 'Tabac, alcohol i medicació sota control.',
    why: 'Dejar de fumar y reducir el alcohol antes de la cirugía disminuye significativamente las complicaciones respiratorias y de la herida.',
    why_en: 'Quitting smoking and cutting alcohol before surgery significantly reduces respiratory and wound complications.',
    why_ca: 'Deixar de fumar i reduir l’alcohol abans de la cirurgia disminueix significativament les complicacions respiratòries i de la ferida.',
  },
  {
    id: 'educacion', emoji: '📚', color: '#14b8a6',
    name: 'Educación y preparación', name_en: 'Education & preparation', name_ca: 'Educació i preparació',
    tagline: 'Entiende tu anestesia y tu cirugía.',
    tagline_en: 'Understand your anesthesia and your surgery.',
    tagline_ca: 'Entén la teva anestèsia i la teva cirurgia.',
    why: 'Un paciente informado colabora mejor, tiene menos miedo y se recupera antes.',
    why_en: 'An informed patient cooperates better, feels less fear and recovers sooner.',
    why_ca: 'Un pacient informat col·labora millor, té menys por i es recupera abans.',
  },
];

export const TASKS = [
  // --- Ejercicio físico ---
  { id: 'caminar', pillar: 'fisico', type: 'counter', unit: 'min', unit_en: 'min', unit_ca: 'min', target: 30, xp: 25, icon: '🚶',
    title: 'Caminata activa', title_en: 'Active walk', title_ca: 'Caminada activa',
    summary: 'Camina unos 30 minutos al día, a un ritmo en el que puedas hablar pero no cantar.',
    summary_en: 'Walk about 30 minutes a day, at a pace where you can talk but not sing.',
    summary_ca: 'Camina uns 30 minuts al dia, a un ritme en què puguis parlar però no cantar.',
    desc: 'Caminar es el mejor punto de partida: mejora tu corazón y tus pulmones, que son los que más trabajan durante y después de la cirugía. Intenta acumular unos 30 minutos al día, a un ritmo en el que puedas hablar pero no cantar. Puedes repartirlo en 2 o 3 paseos cortos. Si te encuentras bien, cada semana añade unos minutos.',
    desc_en: 'Walking is the best starting point: it improves your heart and lungs, which work hardest during and after surgery. Try to build up about 30 minutes a day, at a pace where you can talk but not sing. You can split it into 2 or 3 short walks. If you feel well, add a few minutes each week.',
    desc_ca: 'Caminar és el millor punt de partida: millora el cor i els pulmons, que són els que més treballen durant i després de la cirurgia. Intenta acumular uns 30 minuts al dia, a un ritme en què puguis parlar però no cantar. Ho pots repartir en 2 o 3 passejades curtes. Si et trobes bé, cada setmana afegeix uns minuts.' },
  { id: 'fuerza', pillar: 'fisico', type: 'check', xp: 20, icon: '💪',
    title: 'Rutina de fuerza', title_en: 'Strength routine', title_ca: 'Rutina de força',
    summary: 'Haz 2 series de 10 ejercicios sencillos de fuerza (levantarte de una silla, puntillas, elevar los brazos).',
    summary_en: 'Do 2 sets of 10 simple strength exercises (standing up from a chair, calf raises, arm lifts).',
    summary_ca: 'Fes 2 sèries de 10 exercicis senzills de força (aixecar-te d’una cadira, puntetes, elevar els braços).',
    desc: 'Conservar y ganar músculo te da fuerza para levantarte, caminar y recuperarte antes tras la operación. Haz 2 series de 10: sentarte y levantarte de una silla sin usar las manos, ponerte de puntillas y elevar los brazos. Muévete despacio y no contengas la respiración; si puedes hablar mientras lo haces, vas a buen ritmo.',
    desc_en: 'Keeping and gaining muscle gives you the strength to stand up, walk and recover sooner after the operation. Do 2 sets of 10: sit down and stand up from a chair without using your hands, rise on your toes and lift your arms. Move slowly and do not hold your breath; if you can talk while doing it, your pace is good.',
    desc_ca: 'Conservar i guanyar múscul et dona força per aixecar-te, caminar i recuperar-te abans després de l’operació. Fes 2 sèries de 10: seure i aixecar-te d’una cadira sense fer servir les mans, posar-te de puntetes i elevar els braços. Mou-te a poc a poc i no continguis la respiració; si pots parlar mentre ho fas, vas a bon ritme.' },
  { id: 'movilidad', pillar: 'fisico', type: 'check', xp: 10, icon: '🤸',
    title: 'Movilidad y estiramientos', title_en: 'Mobility & stretching', title_ca: 'Mobilitat i estiraments',
    desc: '5 minutos de estiramientos suaves de piernas, espalda y hombros.',
    desc_en: '5 minutes of gentle stretches for legs, back and shoulders.',
    desc_ca: '5 minuts d’estiraments suaus de cames, esquena i espatlles.' },
  { id: 'equilibrio', pillar: 'fisico', type: 'check', xp: 15, icon: '🧍',
    title: 'Equilibrio (con apoyo)', title_en: 'Balance (with support)', title_ca: 'Equilibri (amb suport)',
    summary: 'Mantente sobre una pierna 10-20 segundos por lado, siempre con un apoyo firme al alcance.',
    summary_en: 'Balance on one leg for 10-20 seconds per side, always with a firm support within reach.',
    summary_ca: 'Mantén-te sobre una cama 10-20 segons per costat, sempre amb un suport ferm a l’abast.',
    desc: 'Trabajar el equilibrio reduce el riesgo de caídas, algo clave antes y después de la cirugía. Apóyate en una silla o encimera y, si puedes, hazlo acompañado. Mantente sobre una pierna 10-20 segundos por lado. Ten SIEMPRE un punto de apoyo firme al alcance de la mano.',
    desc_en: 'Working on balance reduces the risk of falls, which is key before and after surgery. Hold on to a chair or counter and, if you can, do it with company. Balance on one leg for 10-20 seconds per side. ALWAYS keep a firm support within reach.',
    desc_ca: 'Treballar l’equilibri redueix el risc de caigudes, clau abans i després de la cirurgia. Recolza’t en una cadira o taulell i, si pots, fes-ho acompanyat. Mantén-te sobre una cama 10-20 segons per costat. Tingues SEMPRE un punt de suport ferm a l’abast de la mà.' },

  // --- Respiratorio ---
  { id: 'inspiratorio', pillar: 'respiratorio', type: 'counter', unit: 'reps', unit_en: 'reps', unit_ca: 'reps', target: 30, xp: 25, icon: '🫁',
    title: 'Entrenamiento inspiratorio', title_en: 'Inspiratory training', title_ca: 'Entrenament inspiratori',
    summary: 'Haz inspiraciones lentas y profundas para entrenar tus músculos respiratorios.',
    summary_en: 'Take slow, deep breaths to train your breathing muscles.',
    summary_ca: 'Fes inspiracions lentes i profundes per entrenar els teus músculs respiratoris.',
    desc: 'Tus músculos de la respiración también se entrenan, y hacerlo antes reduce el riesgo de infecciones pulmonares tras la anestesia. Haz inspiraciones lentas y profundas llenando bien el pecho; si tienes un inspirómetro incentivador, úsalo como te enseñaron. Descansa unos segundos entre repeticiones para no marearte.',
    desc_en: 'Your breathing muscles can be trained too, and doing it beforehand lowers the risk of lung infections after anesthesia. Take slow, deep breaths in, filling your chest well; if you have an incentive spirometer, use it as you were shown. Rest a few seconds between repetitions so you do not get dizzy.',
    desc_ca: 'Els teus músculs de la respiració també s’entrenen, i fer-ho abans redueix el risc d’infeccions pulmonars després de l’anestèsia. Fes inspiracions lentes i profundes omplint bé el pit; si tens un inspiròmetre incentivador, fes-lo servir com et van ensenyar. Descansa uns segons entre repeticions per no marejar-te.' },
  { id: 'diafragmatica', pillar: 'respiratorio', type: 'check', xp: 15, icon: '🌬️',
    title: 'Respiración diafragmática', title_en: 'Diaphragmatic breathing', title_ca: 'Respiració diafragmàtica',
    summary: 'Respira con el abdomen unos 5 minutos: inhala 4 segundos y exhala 6.',
    summary_en: 'Breathe with your belly for about 5 minutes: breathe in for 4 seconds and out for 6.',
    summary_ca: 'Respira amb l’abdomen uns 5 minuts: inspira 4 segons i expira 6.',
    desc: 'Respirar con el abdomen (y no solo con el pecho) mete más aire y ayuda a calmar los nervios. Pon una mano en la barriga: al inhalar 4 segundos por la nariz debe subir, y al exhalar 6 segundos por la boca debe bajar. Repite unos 5 minutos. Esta técnica te servirá también para relajarte el día de la cirugía.',
    desc_en: 'Breathing with your belly (not just your chest) brings in more air and helps calm your nerves. Put a hand on your tummy: breathing in for 4 seconds through the nose it should rise, and breathing out for 6 seconds through the mouth it should fall. Repeat for about 5 minutes. This technique will also help you relax on surgery day.',
    desc_ca: 'Respirar amb l’abdomen (i no només amb el pit) fa entrar més aire i ajuda a calmar els nervis. Posa’t una mà a la panxa: en inspirar 4 segons pel nas ha de pujar, i en expirar 6 segons per la boca ha de baixar. Repeteix uns 5 minuts. Aquesta tècnica també et servirà per relaxar-te el dia de la cirurgia.' },
  { id: 'tos-eficaz', pillar: 'respiratorio', type: 'check', xp: 10, icon: '💨',
    title: 'Técnica de tos eficaz', title_en: 'Effective cough technique', title_ca: 'Tècnica de tos eficaç',
    desc: 'Practica la tos asistida que usarás tras la cirugía para despejar secreciones.',
    desc_en: 'Practise the assisted cough you will use after surgery to clear secretions.',
    desc_ca: 'Practica la tos assistida que faràs servir després de la cirurgia per netejar secrecions.' },

  // --- Nutrición ---
  { id: 'proteina', pillar: 'nutricion', type: 'check', xp: 20, icon: '🍳',
    title: 'Proteína en cada comida', title_en: 'Protein at every meal', title_ca: 'Proteïna a cada àpat',
    summary: 'Incluye una fuente de proteína en cada comida principal, empezando por el desayuno.',
    summary_en: 'Include a source of protein at every main meal, starting with breakfast.',
    summary_ca: 'Inclou una font de proteïna a cada àpat principal, començant per l’esmorzar.',
    desc: 'La proteína es el material que tu cuerpo usa para cicatrizar y no perder músculo con el estrés de la cirugía. Incluye una fuente en cada comida principal: huevos, pescado, pollo, legumbres, yogur o queso. Repartirla a lo largo del día se aprovecha mejor que tomarla toda de golpe. Empieza ya en el desayuno.',
    desc_en: 'Protein is the material your body uses to heal and to avoid losing muscle under the stress of surgery. Include a source at every main meal: eggs, fish, chicken, legumes, yogurt or cheese. Spreading it through the day is used better than having it all at once. Start at breakfast.',
    desc_ca: 'La proteïna és el material que el teu cos fa servir per cicatritzar i no perdre múscul amb l’estrès de la cirurgia. Inclou-ne una font a cada àpat principal: ous, peix, pollastre, llegums, iogurt o formatge. Repartir-la al llarg del dia s’aprofita millor que prendre-la tota de cop. Comença ja a l’esmorzar.' },
  { id: 'hidratacion', pillar: 'nutricion', type: 'counter', unit: 'vasos', unit_en: 'glasses', unit_ca: 'gots', target: 8, xp: 15, icon: '💧',
    title: 'Hidratación', title_en: 'Hydration', title_ca: 'Hidratació',
    summary: 'Bebe unos 6-8 vasos de agua al día, salvo indicación médica de limitar líquidos.',
    summary_en: 'Drink about 6-8 glasses of water a day, unless advised to limit fluids.',
    summary_ca: 'Beu uns 6-8 gots d’aigua al dia, tret d’indicació mèdica de limitar líquids.',
    desc: 'Estar bien hidratado ayuda a tu circulación, tu digestión y tu concentración. Intenta unos 6-8 vasos de agua al día, salvo que tu médico te haya indicado limitar los líquidos. Lleva una botella a la vista como recordatorio. Ojo: el día de la operación sigue solo las normas de ayuno de tu centro.',
    desc_en: 'Being well hydrated helps your circulation, digestion and focus. Aim for about 6-8 glasses of water a day, unless your doctor has told you to limit fluids. Keep a bottle in sight as a reminder. Note: on the day of the operation follow only your hospital fasting rules.',
    desc_ca: 'Estar ben hidratat ajuda la teva circulació, la digestió i la concentració. Intenta uns 6-8 gots d’aigua al dia, tret que el teu metge t’hagi indicat limitar els líquids. Porta una ampolla a la vista com a recordatori. Compte: el dia de l’operació segueix només les normes de dejuni del teu centre.' },
  { id: 'fruta-verdura', pillar: 'nutricion', type: 'check', xp: 10, icon: '🥦',
    title: '5 raciones de fruta/verdura', title_en: '5 servings of fruit/veg', title_ca: '5 racions de fruita/verdura',
    desc: 'Colorea tu plato con frutas y verduras para vitaminas y fibra.',
    desc_en: 'Fill your plate with colorful fruits and vegetables for vitamins and fiber.',
    desc_ca: 'Acoloreix el teu plat amb fruites i verdures per a vitamines i fibra.' },

  // --- Bienestar mental ---
  { id: 'relajacion', pillar: 'mental', type: 'check', xp: 20, icon: '🧘',
    title: 'Relajación guiada', title_en: 'Guided relaxation', title_ca: 'Relaxació guiada',
    summary: 'Dedica unos 10 minutos a una práctica que te calme: meditación, mindfulness o relajación muscular.',
    summary_en: 'Spend about 10 minutes on a calming practice: meditation, mindfulness or muscle relaxation.',
    summary_ca: 'Dedica uns 10 minuts a una pràctica que et calmi: meditació, mindfulness o relaxació muscular.',
    desc: 'Llegar más tranquilo a la cirugía se asocia con menos dolor y una recuperación más fácil. Dedica unos 10 minutos a una práctica que te calme: meditación guiada, atención plena (mindfulness) o relajar los músculos poco a poco, de los pies a la cabeza. No busques "dejar la mente en blanco"; solo vuelve, una y otra vez, a tu respiración.',
    desc_en: 'Arriving calmer for surgery is linked to less pain and an easier recovery. Spend about 10 minutes on a practice that soothes you: guided meditation, mindfulness or relaxing your muscles little by little, from feet to head. Do not try to empty your mind; just keep coming back, again and again, to your breathing.',
    desc_ca: 'Arribar més tranquil a la cirurgia s’associa amb menys dolor i una recuperació més fàcil. Dedica uns 10 minuts a una pràctica que et calmi: meditació guiada, atenció plena (mindfulness) o relaxar els músculs a poc a poc, dels peus al cap. No busquis "deixar la ment en blanc"; només torna, un cop i un altre, a la teva respiració.' },
  { id: 'sueno', pillar: 'mental', type: 'check', xp: 15, icon: '😴',
    title: 'Higiene del sueño', title_en: 'Sleep hygiene', title_ca: 'Higiene del son',
    summary: 'Apunta a 7-8 horas de sueño con un horario regular y sin pantallas antes de acostarte.',
    summary_en: 'Aim for 7-8 hours of sleep with a regular schedule and no screens before bed.',
    summary_ca: 'Apunta a 7-8 hores de son amb un horari regular i sense pantalles abans d’anar a dormir.',
    desc: 'Dormir bien fortalece tus defensas y tu ánimo, y te prepara para el esfuerzo de la operación. Apunta a 7-8 horas: mantén un horario regular, evita la cafeína y las pantallas por la tarde-noche y crea una rutina tranquila antes de acostarte. Si el nerviosismo no te deja dormir en los días previos, coméntalo en tu consulta.',
    desc_en: 'Sleeping well strengthens your defenses and your mood, and prepares you for the effort of the operation. Aim for 7-8 hours: keep a regular schedule, avoid caffeine and screens in the evening and build a calm routine before bed. If nerves keep you awake in the days before, mention it at your appointment.',
    desc_ca: 'Dormir bé enforteix les teves defenses i el teu ànim, i et prepara per a l’esforç de l’operació. Apunta a 7-8 hores: mantén un horari regular, evita la cafeïna i les pantalles a la tarda-vespre i crea una rutina tranquil·la abans d’anar a dormir. Si el nerviosisme no et deixa dormir els dies previs, comenta-ho a la teva consulta.' },
  { id: 'animo', pillar: 'mental', type: 'check', xp: 10, icon: '📓',
    title: 'Registro de ánimo', title_en: 'Mood check-in', title_ca: 'Registre d’ànim',
    desc: 'Anota cómo te sientes hoy y una cosa por la que estés agradecido.',
    desc_en: 'Note how you feel today and one thing you are grateful for.',
    desc_ca: 'Anota com et sents avui i una cosa per la qual estiguis agraït.' },

  // --- Salud cognitiva ---
  { id: 'gimnasia-mental', pillar: 'cognitivo', type: 'check', xp: 15, icon: '🧩',
    title: 'Gimnasia mental', title_en: 'Brain training', title_ca: 'Gimnàstica mental',
    summary: 'Dedica 10-15 minutos a algo que te haga pensar: el juego de memoria, crucigramas o cartas.',
    summary_en: 'Spend 10-15 minutes on something that makes you think: the memory game, crosswords or cards.',
    summary_ca: 'Dedica 10-15 minuts a alguna cosa que et faci pensar: el joc de memòria, mots encreuats o cartes.',
    desc: 'Mantener la mente activa ayuda a prevenir la confusión (delírium) que a veces aparece tras la anestesia, sobre todo en personas mayores. Dedica 10-15 minutos a algo que te haga pensar: el juego de memoria de la app, crucigramas, sudokus, cartas, o leer y comentar una noticia. Hacerlo acompañado suma doble.',
    desc_en: 'Keeping your mind active helps prevent the confusion (delirium) that sometimes appears after anesthesia, especially in older people. Spend 10-15 minutes on something that makes you think: the app memory game, crosswords, sudokus, cards, or reading and discussing a news story. Doing it with company counts double.',
    desc_ca: 'Mantenir la ment activa ajuda a prevenir la confusió (deliri) que de vegades apareix després de l’anestèsia, sobretot en persones grans. Dedica 10-15 minuts a alguna cosa que et faci pensar: el joc de memòria de l’app, mots encreuats, sudokus, cartes, o llegir i comentar una notícia. Fer-ho acompanyat suma doble.' },
  { id: 'lectura-conversa', pillar: 'cognitivo', type: 'check', xp: 10, icon: '📗',
    title: 'Lectura o conversación', title_en: 'Reading or conversation', title_ca: 'Lectura o conversa',
    desc: 'Lee un rato o mantén una conversación estimulante. Mantener la mente activa ayuda a prevenir la confusión tras la cirugía.',
    desc_en: 'Read for a while or have a stimulating conversation. Keeping the mind active helps prevent confusion after surgery.',
    desc_ca: 'Llegeix una estona o mantén una conversa estimulant. Mantenir la ment activa ajuda a prevenir la confusió després de la cirurgia.' },

  // --- Hábitos ---
  { id: 'no-tabaco', pillar: 'habitos', type: 'check', xp: 30, icon: '🚭',
    title: 'Día sin tabaco', title_en: 'Smoke-free day', title_ca: 'Dia sense tabac',
    desc: 'Cada día sin fumar mejora tu oxigenación y reduce complicaciones. ¡Cuenta!',
    desc_en: 'Every smoke-free day improves your oxygenation and reduces complications. It counts!',
    desc_ca: 'Cada dia sense fumar millora la teva oxigenació i redueix complicacions. Compta!' },
  { id: 'no-alcohol', pillar: 'habitos', type: 'check', xp: 20, icon: '🚱',
    title: 'Día sin alcohol', title_en: 'Alcohol-free day', title_ca: 'Dia sense alcohol',
    desc: 'Evitar el alcohol mejora la coagulación, el hígado y el sistema inmune.',
    desc_en: 'Avoiding alcohol improves clotting, liver function and the immune system.',
    desc_ca: 'Evitar l’alcohol millora la coagulació, el fetge i el sistema immunitari.' },
  { id: 'medicacion', pillar: 'habitos', type: 'check', xp: 15, icon: '💊',
    title: 'Medicación según indicación', title_en: 'Medication as prescribed', title_ca: 'Medicació segons indicació',
    desc: 'Toma tu medicación habitual tal y como te indicó tu equipo médico.',
    desc_en: 'Take your usual medication exactly as your medical team instructed.',
    desc_ca: 'Pren la teva medicació habitual tal com et va indicar el teu equip mèdic.' },

  // --- Educación ---
  { id: 'leccion', pillar: 'educacion', type: 'check', xp: 15, icon: '📖',
    title: 'Lección del día', title_en: 'Lesson of the day', title_ca: 'Lliçó del dia',
    desc: 'Lee una píldora educativa sobre tu proceso quirúrgico y anestésico.',
    desc_en: 'Read a quick educational tip about your surgical and anesthetic journey.',
    desc_ca: 'Llegeix una píndola educativa sobre el teu procés quirúrgic i anestèsic.' },
  { id: 'checklist-preop', pillar: 'educacion', type: 'check', xp: 10, icon: '✅',
    title: 'Repaso de preparativos', title_en: 'Review your prep', title_ca: 'Repàs de preparatius',
    desc: 'Revisa tu lista de preparativos preoperatorios (ayuno, documentos, acompañante).',
    desc_en: 'Review your pre-op checklist (fasting, documents, companion).',
    desc_ca: 'Revisa la teva llista de preparatius preoperatoris (dejuni, documents, acompanyant).' },
];

export const LESSONS = [
  { id: 'l1', title: '¿Qué es la prehabilitación y por qué funciona?', title_en: 'What is prehabilitation and why does it work?', title_ca: 'Què és la prehabilitació i per què funciona?',
    body: 'La prehabilitación consiste en preparar tu cuerpo y tu mente en las semanas previas a la operación para llegar lo más fuerte posible. La idea es sencilla: una cirugía es un esfuerzo físico importante, parecido a una carrera de fondo, y llegar entrenado ayuda a superarla mejor.\n\nLa investigación en los últimos años es bastante consistente: las personas que se preparan antes suelen tener menos complicaciones (sobre todo pulmonares), pasan menos días ingresadas y recuperan antes su autonomía para las actividades del día a día. El beneficio es aún mayor en personas mayores o con poca reserva física.\n\nNo hace falta hacerlo perfecto. Lo que de verdad marca la diferencia es la constancia: pequeños pasos, casi todos los días. Cada tarea que completas aquí es una inversión directa en tu recuperación.',
    body_en: 'Prehabilitation means preparing your body and mind in the weeks before surgery so you arrive as strong as possible. The idea is simple: surgery is a major physical effort, similar to a long-distance race, and arriving trained helps you get through it better.\n\nResearch in recent years is fairly consistent: people who prepare beforehand tend to have fewer complications (especially lung problems), spend fewer days in hospital and recover their day-to-day independence sooner. The benefit is even greater for older people or those with little physical reserve.\n\nYou do not need to do it perfectly. What truly makes the difference is consistency: small steps, almost every day. Every task you complete here is a direct investment in your recovery.',
    body_ca: 'La prehabilitació consisteix a preparar el teu cos i la teva ment en les setmanes prèvies a l’operació per arribar tan fort com sigui possible. La idea és senzilla: una cirurgia és un esforç físic important, semblant a una cursa de fons, i arribar entrenat ajuda a superar-la millor.\n\nLa investigació dels últims anys és força consistent: les persones que es preparen abans solen tenir menys complicacions (sobretot pulmonars), passen menys dies ingressades i recuperen abans la seva autonomia per a les activitats del dia a dia. El benefici és encara més gran en persones grans o amb poca reserva física.\n\nNo cal fer-ho perfecte. El que de veritat marca la diferència és la constància: petits passos, gairebé cada dia. Cada tasca que completes aquí és una inversió directa en la teva recuperació.' },

  { id: 'l2', title: 'Los pilares de tu preparación', title_en: 'The pillars of your preparation', title_ca: 'Els pilars de la teva preparació',
    body: 'La prehabilitación se apoya en varios pilares que se refuerzan entre sí:\n\n• Ejercicio: mejora tu corazón, tus pulmones y tu fuerza muscular.\n• Respiración: entrena los músculos que más sufren con la anestesia.\n• Nutrición: aporta el "material" (sobre todo proteína) que tu cuerpo necesita para cicatrizar.\n• Bienestar mental y sueño: reducen el estrés y apoyan a tus defensas.\n\nA estos se suman hábitos decisivos como dejar el tabaco y reducir el alcohol. Trabajar varios a la vez —lo que los profesionales llaman prehabilitación "multimodal"— da mejores resultados que centrarse en uno solo. Por eso el programa combina un poco de cada uno cada día.',
    body_en: 'Prehabilitation rests on several pillars that reinforce each other:\n\n• Exercise: improves your heart, lungs and muscle strength.\n• Breathing: trains the muscles that suffer most with anesthesia.\n• Nutrition: provides the material (especially protein) your body needs to heal.\n• Mental wellbeing and sleep: reduce stress and support your defenses.\n\nOn top of these come decisive habits such as quitting tobacco and cutting down on alcohol. Working on several at once, what professionals call multimodal prehabilitation, gives better results than focusing on just one. That is why the program blends a little of each every day.',
    body_ca: 'La prehabilitació es recolza en diversos pilars que es reforcen entre si:\n\n• Exercici: millora el cor, els pulmons i la força muscular.\n• Respiració: entrena els músculs que més pateixen amb l’anestèsia.\n• Nutrició: aporta el "material" (sobretot proteïna) que el teu cos necessita per cicatritzar.\n• Benestar mental i son: redueixen l’estrès i donen suport a les teves defenses.\n\nA aquests s’hi sumen hàbits decisius com deixar el tabac i reduir l’alcohol. Treballar-ne diversos alhora —el que els professionals anomenen prehabilitació "multimodal"— dona millors resultats que centrar-se en un de sol. Per això el programa combina una mica de cada un cada dia.' },

  { id: 'l3', title: 'Tu anestesia, paso a paso', title_en: 'Your anesthesia, step by step', title_ca: 'La teva anestèsia, pas a pas',
    body: 'Antes de la cirugía tendrás una consulta de preanestesia, donde revisan tu salud, tus medicamentos y tus alergias, y resuelven tus dudas. Es el mejor momento para preguntar todo lo que te preocupe.\n\nEl día de la operación, el equipo de anestesia te vigila de forma continua (corazón, oxígeno, tensión, respiración). Con anestesia general estarás dormido profundamente y no sentirás ni recordarás nada del procedimiento. En otros casos puede usarse anestesia regional (se duerme solo una zona), a veces combinada con sedación.\n\nAl terminar despertarás en una sala de recuperación, atendido de cerca hasta que estés estable. Entender este recorrido reduce mucho el miedo: lo desconocido asusta más que lo que ya conocemos.',
    body_en: 'Before surgery you will have a pre-anesthesia appointment, where they review your health, your medicines and your allergies, and answer your questions. It is the best moment to ask anything that worries you.\n\nOn the day of the operation, the anesthesia team watches you continuously (heart, oxygen, blood pressure, breathing). Under general anesthesia you will be deeply asleep and will not feel or remember anything about the procedure. In other cases regional anesthesia may be used (only one area is numbed), sometimes combined with sedation.\n\nAfterwards you will wake up in a recovery room, closely looked after until you are stable. Understanding this journey greatly reduces fear: the unknown is scarier than what we already understand.',
    body_ca: 'Abans de la cirurgia tindràs una consulta de preanestèsia, on revisen la teva salut, els teus medicaments i les teves al·lèrgies, i resolen els teus dubtes. És el millor moment per preguntar tot el que et preocupi.\n\nEl dia de l’operació, l’equip d’anestèsia et vigila de forma contínua (cor, oxigen, tensió, respiració). Amb anestèsia general estaràs dormit profundament i no sentiràs ni recordaràs res del procediment. En altres casos es pot fer servir anestèsia regional (s’adorm només una zona), de vegades combinada amb sedació.\n\nEn acabar et despertaràs en una sala de recuperació, atès de prop fins que estiguis estable. Entendre aquest recorregut redueix molt la por: allò desconegut fa més por que allò que ja coneixem.' },

  { id: 'l4', title: 'Por qué entrenar la respiración', title_en: 'Why train your breathing', title_ca: 'Per què entrenar la respiració',
    body: 'Durante y después de una anestesia general, es habitual que se cierren pequeñas zonas de los pulmones (se llama atelectasia). Si no se corrige, puede facilitar infecciones como la neumonía.\n\nBuenas noticias: los músculos de la respiración se entrenan, igual que cualquier otro. Practicar antes inspiraciones lentas y profundas, y usar el inspirómetro incentivador si te lo dan, hace que tus pulmones lleguen más preparados. Diversos estudios asocian este entrenamiento con menos complicaciones pulmonares tras la cirugía.\n\nAdemás, dominar la respiración lenta te dará una herramienta muy útil para calmar los nervios antes de entrar a quirófano y para manejar las molestias después.',
    body_en: 'During and after general anesthesia, it is common for small areas of the lungs to close off (this is called atelectasis). If it is not corrected, it can make infections such as pneumonia more likely.\n\nGood news: the breathing muscles can be trained, just like any other. Practising slow, deep breaths beforehand, and using the incentive spirometer if you are given one, means your lungs arrive better prepared. Several studies link this training with fewer lung complications after surgery.\n\nOn top of that, mastering slow breathing gives you a very useful tool to calm your nerves before going into the operating room and to cope with discomfort afterwards.',
    body_ca: 'Durant i després d’una anestèsia general, és habitual que es tanquin petites zones dels pulmons (s’anomena atelèctasi). Si no es corregeix, pot facilitar infeccions com la pneumònia.\n\nBones notícies: els músculs de la respiració s’entrenen, igual que qualsevol altre. Practicar abans inspiracions lentes i profundes, i fer servir l’inspiròmetre incentivador si te’l donen, fa que els teus pulmons arribin més preparats. Diversos estudis associen aquest entrenament amb menys complicacions pulmonars després de la cirurgia.\n\nA més, dominar la respiració lenta et donarà una eina molt útil per calmar els nervis abans d’entrar a quiròfan i per gestionar les molèsties després.' },

  { id: 'l5', title: 'Tabaco y alcohol: el mayor cambio en menos tiempo', title_en: 'Tobacco and alcohol: the biggest change in the least time', title_ca: 'Tabac i alcohol: el canvi més gran en menys temps',
    body: 'Dejar de fumar antes de la cirugía es una de las decisiones con más impacto. En solo 12-24 horas baja el monóxido de carbono de la sangre y llega más oxígeno a tus tejidos. Dejarlo unas 4 semanas antes reduce de forma clara las complicaciones de la herida y respiratorias.\n\nCon el alcohol ocurre algo parecido: reducirlo o suspenderlo mejora la coagulación, la función del hígado y las defensas, y disminuye el riesgo de complicaciones.\n\nNo tienes que hacerlo solo. Pide ayuda a tu equipo: existen consejos, apoyos y, si hace falta, tratamientos que hacen el proceso mucho más llevadero. Cualquier reducción suma, pero dejarlo por completo es lo ideal.',
    body_en: 'Quitting smoking before surgery is one of the most impactful decisions. In just 12-24 hours the carbon monoxide in your blood drops and more oxygen reaches your tissues. Stopping about 4 weeks before clearly reduces wound and respiratory complications.\n\nSomething similar happens with alcohol: reducing or stopping it improves clotting, liver function and your defenses, and lowers the risk of complications.\n\nYou do not have to do it alone. Ask your team for help: there is advice, support and, if needed, treatments that make the process much easier. Any reduction helps, but stopping completely is ideal.',
    body_ca: 'Deixar de fumar abans de la cirurgia és una de les decisions amb més impacte. En només 12-24 hores baixa el monòxid de carboni de la sang i arriba més oxigen als teus teixits. Deixar-ho unes 4 setmanes abans redueix de forma clara les complicacions de la ferida i respiratòries.\n\nAmb l’alcohol passa una cosa semblant: reduir-lo o suspendre’l millora la coagulació, la funció del fetge i les defenses, i disminueix el risc de complicacions.\n\nNo ho has de fer sol. Demana ajuda al teu equip: hi ha consells, suports i, si cal, tractaments que fan el procés molt més suportable. Qualsevol reducció suma, però deixar-ho del tot és l’ideal.' },

  { id: 'l6', title: 'Nutrición: el "ladrillo" de tu recuperación', title_en: 'Nutrition: the building block of your recovery', title_ca: 'Nutrició: el "maó" de la teva recuperació',
    body: 'La cirugía dispara las necesidades de proteína, porque tu cuerpo la usa para cicatrizar la herida, defenderse de infecciones y no perder músculo. Por eso muchos expertos recomiendan cuidar la alimentación como parte de la preparación.\n\nElige proteínas de calidad y repártelas en todas las comidas, incluido el desayuno: huevos, pescado, pollo, legumbres, lácteos como yogur o queso. Repartirla a lo largo del día se aprovecha mejor que concentrarla en una sola comida.\n\nSi tienes poco apetito o has perdido peso sin querer, no lo dejes pasar: coméntalo con tu equipo. Pueden enriquecer tus platos o recomendarte suplementos nutricionales. Llegar bien nutrido es una de las mejores defensas frente a las complicaciones.',
    body_en: 'Surgery raises your protein needs, because your body uses it to heal the wound, fight infections and avoid losing muscle. That is why many experts recommend looking after your diet as part of the preparation.\n\nChoose good-quality protein and spread it across all your meals, including breakfast: eggs, fish, chicken, legumes, dairy such as yogurt or cheese. Spreading it through the day is used better than concentrating it in a single meal.\n\nIf you have little appetite or have lost weight without meaning to, do not ignore it: tell your team. They can enrich your meals or recommend nutritional supplements. Arriving well nourished is one of the best defenses against complications.',
    body_ca: 'La cirurgia dispara les necessitats de proteïna, perquè el teu cos la fa servir per cicatritzar la ferida, defensar-se de les infeccions i no perdre múscul. Per això molts experts recomanen cuidar l’alimentació com a part de la preparació.\n\nTria proteïnes de qualitat i reparteix-les en tots els àpats, inclòs l’esmorzar: ous, peix, pollastre, llegums, lactis com iogurt o formatge. Repartir-la al llarg del dia s’aprofita millor que concentrar-la en un sol àpat.\n\nSi tens poca gana o has perdut pes sense voler, no ho deixis passar: comenta-ho al teu equip. Poden enriquir els teus plats o recomanar-te suplements nutricionals. Arribar ben nodrit és una de les millors defenses davant les complicacions.' },

  { id: 'l7', title: 'El ayuno moderno y la bebida de hidratos', title_en: 'Modern fasting and the carbohydrate drink', title_ca: 'El dejuni modern i la beguda d’hidrats',
    body: 'Durante años se pidió a los pacientes estar "en ayunas desde medianoche". Hoy sabemos que ese ayuno tan largo no aporta seguridad extra y sí más malestar (sed, hambre, debilidad).\n\nMuchos protocolos modernos permiten líquidos claros hasta unas 2 horas antes y, en casos seleccionados, una bebida rica en hidratos de carbono la noche anterior y unas horas antes. Esto puede reducir la sensación de sed y ansiedad y ayudar a tu cuerpo a afrontar mejor el estrés de la operación.\n\nMuy importante: esto depende de tu tipo de cirugía y de las normas de tu centro. NUNCA comas ni bebas nada por tu cuenta el día de la operación; sigue exactamente lo que te indiquen. Esa instrucción concreta es siempre tu norma.',
    body_en: 'For years patients were told to fast "from midnight". We now know that such a long fast adds no extra safety and does cause more discomfort (thirst, hunger, weakness).\n\nMany modern protocols allow clear fluids up to about 2 hours before and, in selected cases, a carbohydrate-rich drink the night before and a few hours before. This can reduce thirst and anxiety and help your body cope better with the stress of the operation.\n\nVery important: this depends on your type of surgery and your hospital rules. NEVER eat or drink anything on your own on the day of the operation; follow exactly what you are told. That specific instruction is always your rule.',
    body_ca: 'Durant anys es demanava als pacients estar "en dejú des de mitjanit". Avui sabem que aquest dejuni tan llarg no aporta seguretat extra i sí més malestar (set, gana, debilitat).\n\nMolts protocols moderns permeten líquids clars fins a unes 2 hores abans i, en casos seleccionats, una beguda rica en hidrats de carboni la nit anterior i unes hores abans. Això pot reduir la sensació de set i ansietat i ajudar el teu cos a afrontar millor l’estrès de l’operació.\n\nMolt important: això depèn del teu tipus de cirurgia i de les normes del teu centre. MAI mengis ni beguis res pel teu compte el dia de l’operació; segueix exactament el que t’indiquin. Aquesta instrucció concreta és sempre la teva norma.' },

  { id: 'l8', title: 'Calmar la ansiedad antes del quirófano', title_en: 'Calming anxiety before the operating room', title_ca: 'Calmar l’ansietat abans del quiròfan',
    body: 'Sentir miedo o nervios antes de una cirugía es completamente normal. La buena noticia es que puedes entrenar tu mente para llevarlo mejor, y hacerlo tiene premio: menos ansiedad se asocia con menos dolor percibido y una recuperación más llevadera.\n\nPrueba técnicas sencillas y con respaldo: la respiración lenta 4-6 (inhalar contando 4, exhalar contando 6), la relajación muscular progresiva (tensar y soltar grupos de músculos de los pies a la cabeza) y la visualización positiva (imaginarte recuperándote bien, en casa).\n\nHablar de tus miedos también ayuda: comparte tus dudas con tu equipo y con tus seres queridos. Y cuida el sueño la semana previa, porque descansar refuerza tu ánimo y tus defensas.',
    body_en: 'Feeling fear or nerves before surgery is completely normal. The good news is that you can train your mind to cope better, and it pays off: less anxiety is linked to less perceived pain and an easier recovery.\n\nTry simple, well-supported techniques: slow 4-6 breathing (breathe in counting to 4, out counting to 6), progressive muscle relaxation (tense and release muscle groups from feet to head) and positive visualization (picturing yourself recovering well, at home).\n\nTalking about your fears also helps: share your worries with your team and your loved ones. And look after your sleep the week before, because resting strengthens your mood and your defenses.',
    body_ca: 'Sentir por o nervis abans d’una cirurgia és completament normal. La bona notícia és que pots entrenar la teva ment per portar-ho millor, i fer-ho té premi: menys ansietat s’associa amb menys dolor percebut i una recuperació més suportable.\n\nProva tècniques senzilles i avalades: la respiració lenta 4-6 (inspirar comptant 4, expirar comptant 6), la relaxació muscular progressiva (tensar i deixar anar grups de músculs dels peus al cap) i la visualització positiva (imaginar-te recuperant-te bé, a casa).\n\nParlar de les teves pors també ajuda: comparteix els teus dubtes amb el teu equip i amb els teus éssers estimats. I cuida el son la setmana prèvia, perquè descansar reforça el teu ànim i les teves defenses.' },

  { id: 'l9', title: 'Dormir bien: tu aliado silencioso', title_en: 'Sleeping well: your quiet ally', title_ca: 'Dormir bé: el teu aliat silenciós',
    body: 'El sueño no es tiempo perdido: mientras duermes, tu cuerpo repara tejidos, ordena la memoria y refuerza el sistema inmune. Llegar descansado a la cirugía te ayuda a tolerar mejor el estrés y a recuperarte antes.\n\nApunta a 7-8 horas la mayoría de las noches. Ayuda mucho mantener horarios regulares, recibir luz natural por la mañana, evitar la cafeína desde la tarde y dejar las pantallas (móvil, televisión) al menos 30-60 minutos antes de acostarte, porque su luz "engaña" a tu reloj interno.\n\nCrea una rutina tranquila antes de dormir: luz tenue, una ducha templada, lectura o respiración lenta. Si los nervios no te dejan dormir en los días previos, no te automediques: coméntalo en tu consulta.',
    body_en: 'Sleep is not wasted time: while you sleep, your body repairs tissues, organizes memory and strengthens the immune system. Arriving rested for surgery helps you tolerate stress better and recover sooner.\n\nAim for 7-8 hours most nights. It helps a lot to keep regular hours, get natural light in the morning, avoid caffeine from the afternoon on and put screens (phone, TV) away at least 30-60 minutes before bed, because their light tricks your internal clock.\n\nCreate a calm bedtime routine: dim light, a warm shower, reading or slow breathing. If nerves keep you awake in the days before, do not self-medicate: mention it at your appointment.',
    body_ca: 'El son no és temps perdut: mentre dorms, el teu cos repara teixits, ordena la memòria i reforça el sistema immunitari. Arribar descansat a la cirurgia t’ajuda a tolerar millor l’estrès i a recuperar-te abans.\n\nApunta a 7-8 hores la majoria de nits. Ajuda molt mantenir horaris regulars, rebre llum natural al matí, evitar la cafeïna des de la tarda i deixar les pantalles (mòbil, televisió) almenys 30-60 minuts abans d’anar a dormir, perquè la seva llum "enganya" el teu rellotge intern.\n\nCrea una rutina tranquil·la abans de dormir: llum tènue, una dutxa temperada, lectura o respiració lenta. Si els nervis no et deixen dormir els dies previs, no t’automediquis: comenta-ho a la teva consulta.' },

  { id: 'l10', title: 'Mindfulness: entrena la calma', title_en: 'Mindfulness: train your calm', title_ca: 'Mindfulness: entrena la calma',
    body: 'El mindfulness, o atención plena, es prestar atención al momento presente sin juzgarlo. No consiste en "dejar la mente en blanco", sino en darte cuenta de cuándo tu mente se va a las preocupaciones y traerla, con amabilidad, de vuelta a la respiración o a lo que estás haciendo.\n\nPracticado a diario, aunque sean 5-10 minutos, ayuda a bajar la ansiedad, mejora el sueño y puede reducir la percepción del dolor. Es como un músculo: cuanto más lo entrenas, más fácil te resulta calmarte cuando lo necesitas, por ejemplo el día de la cirugía.\n\nEmpieza fácil: siéntate cómodo, cierra los ojos y sigue tu respiración durante unos minutos. Puedes apoyarte en audios o vídeos de meditación guiada; en la sección de Recursos tu equipo puede dejarte algunos.',
    body_en: 'Mindfulness means paying attention to the present moment without judging it. It is not about emptying your mind, but about noticing when your mind drifts to worries and gently bringing it back to your breath or to what you are doing.\n\nPractised daily, even for 5-10 minutes, it helps lower anxiety, improves sleep and can reduce how much pain you feel. It is like a muscle: the more you train it, the easier it is to calm down when you need it, for example on the day of surgery.\n\nStart easy: sit comfortably, close your eyes and follow your breathing for a few minutes. You can lean on guided meditation audios or videos; in the Resources section your team can leave you some.',
    body_ca: 'El mindfulness, o atenció plena, és parar atenció al moment present sense jutjar-lo. No consisteix a "deixar la ment en blanc", sinó a adonar-te de quan la teva ment se’n va a les preocupacions i tornar-la, amb amabilitat, a la respiració o al que estàs fent.\n\nPracticat cada dia, encara que siguin 5-10 minuts, ajuda a baixar l’ansietat, millora el son i pot reduir la percepció del dolor. És com un múscul: com més l’entrenes, més fàcil et resulta calmar-te quan ho necessites, per exemple el dia de la cirurgia.\n\nComença fàcil: seu còmode, tanca els ulls i segueix la teva respiració durant uns minuts. Et pots recolzar en àudios o vídeos de meditació guiada; a la secció de Recursos el teu equip te’n pot deixar alguns.' },

  { id: 'l11', title: '¿Cuánto ejercicio y de qué intensidad?', title_en: 'How much exercise and how hard?', title_ca: 'Quant exercici i de quina intensitat?',
    body: 'La recomendación general para prepararte combina ejercicio aeróbico y de fuerza, adaptado a tu punto de partida.\n\n• Aeróbico (caminar, bici estática): apunta a moverte casi todos los días, hasta sumar unos 150 minutos a la semana. Una buena guía de intensidad es la "prueba del habla": deberías poder hablar, pero no cantar.\n• Fuerza: 2-3 días por semana, trabajando piernas, brazos y tronco (levantarte de una silla, puntillas, elevaciones con una botella de agua).\n• Empieza suave y progresa poco a poco. Si tienes poca reserva o miedo a caerte, comienza sentado o con apoyo; es igual de válido.\n\nSeñales para parar y consultar: dolor en el pecho, mareo, falta de aire desproporcionada o palpitaciones. Ajusta siempre la intensidad a lo que tu equipo médico te haya autorizado.',
    body_en: 'The general recommendation to prepare combines aerobic and strength exercise, adapted to your starting point.\n\n• Aerobic (walking, stationary bike): aim to move almost every day, building up to about 150 minutes a week. A good intensity guide is the talk test: you should be able to talk, but not sing.\n• Strength: 2-3 days a week, working legs, arms and trunk (standing up from a chair, calf raises, lifting a water bottle).\n• Start gently and progress little by little. If you have little reserve or fear falling, begin seated or with support; it counts just the same.\n\nSigns to stop and seek advice: chest pain, dizziness, disproportionate breathlessness or palpitations. Always match the intensity to what your medical team has approved.',
    body_ca: 'La recomanació general per preparar-te combina exercici aeròbic i de força, adaptat al teu punt de partida.\n\n• Aeròbic (caminar, bici estàtica): apunta a moure’t gairebé cada dia, fins a sumar uns 150 minuts a la setmana. Una bona guia d’intensitat és la "prova de la parla": hauries de poder parlar, però no cantar.\n• Força: 2-3 dies per setmana, treballant cames, braços i tronc (aixecar-te d’una cadira, puntetes, elevacions amb una ampolla d’aigua).\n• Comença suau i progressa a poc a poc. Si tens poca reserva o por de caure, comença assegut o amb suport; és igual de vàlid.\n\nSenyals per parar i consultar: dolor al pit, mareig, falta d’aire desproporcionada o palpitacions. Ajusta sempre la intensitat al que el teu equip mèdic t’hagi autoritzat.' },
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
export const PREOP_CHECKLIST_CA = [
  'Confirma la data, l’hora i el lloc de la teva cirurgia.',
  'Anota els teus dubtes per a la consulta de preanestèsia.',
  'Tingues a mà la llista dels teus medicaments i al·lèrgies.',
  'Confirma quina medicació has de suspendre o mantenir (segons indicació).',
  'Organitza un acompanyant per al dia de l’alta.',
  'Prepara roba còmoda i articles d’higiene per a l’hospital.',
  'Segueix al peu de la lletra les instruccions de dejuni del teu centre.',
  'Dutxa’t amb el sabó antisèptic si t’ho van indicar.',
];

export const BADGES = [
  { id: 'primer-paso', emoji: '👟', name: 'Primer paso', name_en: 'First step', name_ca: 'Primer pas', desc: 'Completa tu primer día de programa.', desc_en: 'Complete your first day of the program.', desc_ca: 'Completa el teu primer dia de programa.',
    check: (s) => s.stats.daysCompleted >= 1 },
  { id: 'racha-3', emoji: '🔥', name: 'En marcha', name_en: 'Getting going', name_ca: 'En marxa', desc: 'Mantén una racha de 3 días.', desc_en: 'Keep a 3-day streak.', desc_ca: 'Mantén una ratxa de 3 dies.',
    check: (s) => s.stats.bestStreak >= 3 },
  { id: 'racha-7', emoji: '⭐', name: 'Semana perfecta', name_en: 'Perfect week', name_ca: 'Setmana perfecta', desc: 'Mantén una racha de 7 días.', desc_en: 'Keep a 7-day streak.', desc_ca: 'Mantén una ratxa de 7 dies.',
    check: (s) => s.stats.bestStreak >= 7 },
  { id: 'racha-14', emoji: '🏆', name: 'Imparable', name_en: 'Unstoppable', name_ca: 'Imparable', desc: 'Mantén una racha de 14 días.', desc_en: 'Keep a 14-day streak.', desc_ca: 'Mantén una ratxa de 14 dies.',
    check: (s) => s.stats.bestStreak >= 14 },
  { id: 'nivel-5', emoji: '🎖️', name: 'Atleta prehab', name_en: 'Prehab athlete', name_ca: 'Atleta prehab', desc: 'Alcanza el nivel 5.', desc_en: 'Reach level 5.', desc_ca: 'Assoleix el nivell 5.',
    check: (s) => s.stats.level >= 5 },
  { id: 'pulmones', emoji: '🫁', name: 'Pulmones de acero', name_en: 'Lungs of steel', name_ca: 'Pulmons d’acer', desc: 'Completa 20 sesiones respiratorias.', desc_en: 'Complete 20 breathing sessions.', desc_ca: 'Completa 20 sessions respiratòries.',
    check: (s) => (s.stats.taskCounts['inspiratorio'] || 0) + (s.stats.taskCounts['diafragmatica'] || 0) >= 20 },
  { id: 'caminante', emoji: '🥾', name: 'Caminante', name_en: 'Walker', name_ca: 'Caminant', desc: 'Acumula 300 minutos de caminata.', desc_en: 'Accumulate 300 minutes of walking.', desc_ca: 'Acumula 300 minuts de caminada.',
    check: (s) => (s.stats.counterTotals['caminar'] || 0) >= 300 },
  { id: 'humo-cero', emoji: '🚭', name: 'Humo cero', name_en: 'Smoke-free', name_ca: 'Fum zero', desc: '7 días seguidos sin tabaco.', desc_en: '7 days in a row without tobacco.', desc_ca: '7 dies seguits sense tabac.',
    check: (s) => (s.stats.taskCounts['no-tabaco'] || 0) >= 7 },
  { id: 'sabio', emoji: '📚', name: 'Bien informado', name_en: 'Well informed', name_ca: 'Ben informat', desc: 'Lee 5 lecciones educativas.', desc_en: 'Read 5 educational lessons.', desc_ca: 'Llegeix 5 lliçons educatives.',
    check: (s) => (s.stats.lessonsRead || 0) >= 5 },
  { id: 'mente-agil', emoji: '🧠', name: 'Mente ágil', name_en: 'Sharp mind', name_ca: 'Ment àgil', desc: 'Completa 10 sesiones de gimnasia mental.', desc_en: 'Complete 10 brain-training sessions.', desc_ca: 'Completa 10 sessions de gimnàstica mental.',
    check: (s) => (s.stats.taskCounts['gimnasia-mental'] || 0) >= 10 },
  { id: 'memoria-maestra', emoji: '🃏', name: 'Maestro de la memoria', name_en: 'Memory master', name_ca: 'Mestre de la memòria', desc: 'Gana una partida del juego de memoria.', desc_en: 'Win a round of the memory game.', desc_ca: 'Guanya una partida del joc de memòria.',
    check: (s) => (s.games && s.games.memory && s.games.memory.wins > 0) },
  { id: 'hidratado', emoji: '💧', name: 'Bien hidratado', name_en: 'Well hydrated', name_ca: 'Ben hidratat', desc: 'Alcanza tu meta de hidratación 5 días.', desc_en: 'Reach your hydration goal on 5 days.', desc_ca: 'Assoleix la teva meta d’hidratació 5 dies.',
    check: (s) => (s.stats.hydrationGoalDays || 0) >= 5 },
  { id: 'listo', emoji: '🎉', name: '¡Listo para el quirófano!', name_en: 'Ready for the OR!', name_ca: 'A punt per al quiròfan!', desc: 'Completa 21 días de programa.', desc_en: 'Complete 21 days of the program.', desc_ca: 'Completa 21 dies de programa.',
    check: (s) => s.stats.daysCompleted >= 21 },
];

export const WEEKLY_CHALLENGES = [
  { id: 'w-camina', title: 'Reto de la semana: 150 min de caminata', title_en: 'Weekly challenge: 150 min of walking', title_ca: 'Repte de la setmana: 150 min de caminada', metric: 'caminar', target: 150, unit: 'min', unit_en: 'min', unit_ca: 'min', xp: 100 },
  { id: 'w-resp', title: 'Reto de la semana: 5 sesiones respiratorias', title_en: 'Weekly challenge: 5 breathing sessions', title_ca: 'Repte de la setmana: 5 sessions respiratòries', metric: 'inspiratorio', target: 5, unit: 'sesiones', unit_en: 'sessions', unit_ca: 'sessions', xp: 80 },
  { id: 'w-agua', title: 'Reto de la semana: hidrátate 5 días', title_en: 'Weekly challenge: hydrate on 5 days', title_ca: 'Repte de la setmana: hidrata’t 5 dies', metric: 'hidratacion', target: 5, unit: 'días', unit_en: 'days', unit_ca: 'dies', xp: 70 },
];

export const DISCLAIMER =
  'PreHabilita es una herramienta educativa y de acompañamiento. No sustituye la valoración ni las indicaciones de tu equipo médico y anestésico. Ante cualquier duda, dolor o síntoma nuevo, consulta con tu profesional de salud. Sigue siempre las instrucciones concretas de tu centro (ayuno, medicación, ejercicio permitido).';
export const DISCLAIMER_EN =
  'PreHabilita is an educational and support tool. It does not replace the assessment or instructions of your medical and anesthetic team. If you have any doubt, pain or new symptom, consult your healthcare professional. Always follow the specific instructions from your hospital (fasting, medication, permitted exercise).';
export const DISCLAIMER_CA =
  'PreHabilita és una eina educativa i d’acompanyament. No substitueix la valoració ni les indicacions del teu equip mèdic i anestèsic. Davant de qualsevol dubte, dolor o símptoma nou, consulta amb el teu professional de salut. Segueix sempre les instruccions concretes del teu centre (dejuni, medicació, exercici permès).';

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
export const ERAS_NOTE_CA =
  'Aquest programa segueix els principis de la recuperació intensificada (ERAS®): ' +
  'prehabilitació multimodal (exercici + nutrició + suport psicològic), ' +
  'cessació de tabac i alcohol, dejuni preoperatori abreujat amb càrrega d’hidrats de carboni, ' +
  'i educació del pacient. S’ha d’adaptar sempre al protocol concret del teu centre.';

/**
 * Fases del plan según los días que faltan para la cirugía (plan adaptativo).
 */
export function getPhase(days) {
  if (days == null) {
    return { id: 'sinfecha', emoji: '🗓️', color: '#64748b',
      title: 'Plan diario', title_en: 'Daily plan', title_ca: 'Pla diari',
      focus: 'Añade la fecha de tu cirugía (en "Editar mis datos") para adaptar el plan por fases.',
      focus_en: 'Add your surgery date (in "Edit my details") to tailor the plan into phases.',
      focus_ca: 'Afegeix la data de la teva cirurgia (a "Editar les meves dades") per adaptar el pla per fases.' };
  }
  if (days < 0) {
    return { id: 'recuperacion', emoji: '🌤️', color: '#22c55e',
      title: 'Recuperación', title_en: 'Recovery', title_ca: 'Recuperació',
      focus: 'Ya has pasado por el quirófano. Retoma la actividad de forma progresiva según te indique tu equipo, cuida la respiración y la nutrición, y descansa.',
      focus_en: 'You have had your surgery. Resume activity gradually as your team advises, care for your breathing and nutrition, and rest.',
      focus_ca: 'Ja has passat pel quiròfan. Reprèn l’activitat de forma progressiva segons t’indiqui el teu equip, cuida la respiració i la nutrició, i descansa.' };
  }
  if (days === 0) {
    return { id: 'dia-cirugia', emoji: '🏥', color: '#0f766e',
      title: '¡Hoy es el día!', title_en: 'Today is the day!', title_ca: 'Avui és el dia!',
      focus: 'Sigue al pie de la letra las instrucciones de tu centro (ayuno, medicación, higiene). Respira con calma: te has preparado para esto.',
      focus_en: 'Follow your hospital\'s instructions exactly (fasting, medication, hygiene). Breathe calmly: you have prepared for this.',
      focus_ca: 'Segueix al peu de la lletra les instruccions del teu centre (dejuni, medicació, higiene). Respira amb calma: t’has preparat per a això.' };
  }
  if (days <= 2) {
    return { id: 'final', emoji: '🎒', color: '#f59e0b',
      title: 'Preparativos finales', title_en: 'Final preparations', title_ca: 'Preparatius finals',
      focus: 'Baja la intensidad del ejercicio y descansa bien. Repasa la lista de preparativos, prepara la bolsa y confirma tu acompañante y el ayuno.',
      focus_en: 'Ease off exercise intensity and rest well. Review the checklist, pack your bag and confirm your companion and fasting.',
      focus_ca: 'Baixa la intensitat de l’exercici i descansa bé. Repassa la llista de preparatius, prepara la bossa i confirma el teu acompanyant i el dejuni.' };
  }
  if (days <= 7) {
    return { id: 'puesta-a-punto', emoji: '🎯', color: '#8b5cf6',
      title: 'Puesta a punto', title_en: 'Tune-up', title_ca: 'Posada a punt',
      focus: 'Mantén el ejercicio suave, prioriza la respiración, el sueño y la proteína. Reduce el estrés y afina los últimos detalles.',
      focus_en: 'Keep exercise gentle, prioritise breathing, sleep and protein. Lower stress and fine-tune the last details.',
      focus_ca: 'Mantén l’exercici suau, prioritza la respiració, el son i la proteïna. Redueix l’estrès i afina els últims detalls.' };
  }
  if (days <= 21) {
    return { id: 'desarrollo', emoji: '📈', color: '#0ea5e9',
      title: 'Fase de desarrollo', title_en: 'Development phase', title_ca: 'Fase de desenvolupament',
      focus: 'Es el momento de progresar: aumenta poco a poco la caminata y la fuerza, sé constante con la respiración y consolida buenos hábitos.',
      focus_en: 'Time to progress: gradually increase walking and strength, be consistent with breathing and lock in good habits.',
      focus_ca: 'És el moment de progressar: augmenta a poc a poc la caminada i la força, sigues constant amb la respiració i consolida bons hàbits.' };
  }
  return { id: 'base', emoji: '🏗️', color: '#14b8a6',
    title: 'Fase de base', title_en: 'Building phase', title_ca: 'Fase de base',
    focus: 'Tienes tiempo para construir una buena base. Céntrate en crear el hábito diario, empezar a moverte y, si fumas o bebes, empezar a dejarlo.',
    focus_en: 'You have time to build a solid base. Focus on creating the daily habit, starting to move and, if you smoke or drink, starting to quit.',
    focus_ca: 'Tens temps per construir una bona base. Centra’t a crear l’hàbit diari, començar a moure’t i, si fumes o beus, començar a deixar-ho.' };
}

export const DEFAULT_POSTS = [
  {
    id: 'post-eras',
    title: '¿Qué es el protocolo ERAS y por qué te beneficia?',
    title_en: 'What is the ERAS protocol and why does it benefit you?',
    title_ca: 'Què és el protocol ERAS i per què et beneficia?',
    category: 'educacion', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-01',
    body:
`ERAS son las siglas en inglés de "recuperación intensificada tras la cirugía". Es un conjunto de medidas, respaldadas por la evidencia científica, que buscan que te recuperes antes y con menos complicaciones.

La idea central es sencilla: en lugar de esperar pasivamente a la operación, TÚ participas activamente en tu preparación. Esto incluye:

• Prehabilitación: mejorar tu forma física, tu nutrición y tu bienestar mental en las semanas previas.
• Optimizar hábitos: reducir o eliminar tabaco y alcohol.
• Ayuno inteligente: nada de largas horas sin comer sin necesidad; a menudo se permite una bebida rica en hidratos de carbono unas horas antes.
• Movilización precoz y control del dolor tras la cirugía.

Cada tarea que completas en esta app es una pieza de ese rompecabezas. No se trata de hacerlo perfecto, sino de sumar pequeños pasos cada día.`,
    body_en:
`ERAS stands for "enhanced recovery after surgery". It is a set of measures, backed by scientific evidence, aimed at helping you recover sooner and with fewer complications.

The core idea is simple: instead of passively waiting for the operation, YOU take an active part in your preparation. This includes:

• Prehabilitation: improving your fitness, nutrition and mental wellbeing in the weeks before.
• Optimizing habits: reducing or eliminating tobacco and alcohol.
• Smart fasting: no long, needless hours without eating; a carbohydrate-rich drink is often allowed a few hours before.
• Early mobilization and pain control after surgery.

Every task you complete in this app is a piece of that puzzle. It is not about doing it perfectly, but about adding small steps every day.`,
    body_ca:
`ERAS són les sigles en anglès de "recuperació intensificada després de la cirurgia". És un conjunt de mesures, avalades per l’evidència científica, que busquen que et recuperis abans i amb menys complicacions.

La idea central és senzilla: en lloc d’esperar passivament l’operació, TU participes activament en la teva preparació. Això inclou:

• Prehabilitació: millorar la teva forma física, la teva nutrició i el teu benestar mental en les setmanes prèvies.
• Optimitzar hàbits: reduir o eliminar tabac i alcohol.
• Dejuni intel·ligent: res de llargues hores sense menjar sense necessitat; sovint es permet una beguda rica en hidrats de carboni unes hores abans.
• Mobilització precoç i control del dolor després de la cirurgia.

Cada tasca que completes en aquesta app és una peça d’aquest trencaclosques. No es tracta de fer-ho perfecte, sinó de sumar petits passos cada dia.`,
  },
  {
    id: 'post-carga',
    title: 'Carga de hidratos de carbono antes de la cirugía',
    title_en: 'Carbohydrate loading before surgery',
    title_ca: 'Càrrega d’hidrats de carboni abans de la cirurgia',
    category: 'nutricion', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-02',
    body:
`Durante mucho tiempo se pidió a los pacientes estar "en ayunas desde medianoche". Hoy sabemos que llegar al quirófano con las reservas de energía agotadas no ayuda.

Muchos protocolos ERAS recomiendan una bebida rica en hidratos de carbono la noche anterior y unas 2-3 horas antes de la cirugía (según indicación). Esto puede reducir la sensación de sed, hambre y ansiedad, y ayudar a tu cuerpo a afrontar mejor el estrés quirúrgico.

IMPORTANTE: esto depende totalmente de tu tipo de cirugía y de las normas de tu centro. Nunca tomes nada por tu cuenta el día de la operación. Pregunta a tu equipo qué está permitido en tu caso concreto.`,
    body_en:
`For a long time patients were told to fast "from midnight". We now know that arriving at the operating room with your energy reserves exhausted does not help.

Many ERAS protocols recommend a carbohydrate-rich drink the night before and about 2-3 hours before surgery (as advised). This can reduce the feeling of thirst, hunger and anxiety, and help your body cope better with surgical stress.

IMPORTANT: this depends entirely on your type of surgery and your hospital rules. Never take anything on your own on the day of the operation. Ask your team what is allowed in your specific case.`,
    body_ca:
`Durant molt de temps es demanava als pacients estar "en dejú des de mitjanit". Avui sabem que arribar al quiròfan amb les reserves d’energia esgotades no ajuda.

Molts protocols ERAS recomanen una beguda rica en hidrats de carboni la nit anterior i unes 2-3 hores abans de la cirurgia (segons indicació). Això pot reduir la sensació de set, gana i ansietat, i ajudar el teu cos a afrontar millor l’estrès quirúrgic.

IMPORTANT: això depèn totalment del teu tipus de cirurgia i de les normes del teu centre. Mai prenguis res pel teu compte el dia de l’operació. Pregunta al teu equip què està permès en el teu cas concret.`,
  },
  {
    id: 'post-mindfulness',
    title: 'Prepara tu mente: mindfulness antes del quirófano',
    title_en: 'Prepare your mind: mindfulness before the operating room',
    title_ca: 'Prepara la teva ment: mindfulness abans del quiròfan',
    category: 'mental', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-03',
    body:
`Sentir nervios antes de una cirugía es completamente normal. La buena noticia es que puedes entrenar tu mente para afrontarlo mejor.

Prueba este ejercicio de 5 minutos:
1. Siéntate cómodo y cierra los ojos.
2. Inhala por la nariz contando hasta 4.
3. Exhala despacio por la boca contando hasta 6.
4. Si aparece un pensamiento, obsérvalo sin juzgarlo y vuelve a tu respiración.

Practicar esto a diario reduce la ansiedad y puede disminuir la percepción de dolor tras la operación. Añade a tus recursos vídeos de meditación guiada que te resulten agradables y conviértelo en un hábito.`,
    body_en:
`Feeling nervous before surgery is completely normal. The good news is that you can train your mind to cope better.

Try this 5-minute exercise:
1. Sit comfortably and close your eyes.
2. Breathe in through your nose, counting to 4.
3. Breathe out slowly through your mouth, counting to 6.
4. If a thought appears, observe it without judging it and return to your breathing.

Practising this daily reduces anxiety and can lessen the perception of pain after the operation. Add guided meditation videos you find pleasant to your resources and turn it into a habit.`,
    body_ca:
`Sentir nervis abans d’una cirurgia és completament normal. La bona notícia és que pots entrenar la teva ment per afrontar-ho millor.

Prova aquest exercici de 5 minuts:
1. Seu còmode i tanca els ulls.
2. Inspira pel nas comptant fins a 4.
3. Expira a poc a poc per la boca comptant fins a 6.
4. Si apareix un pensament, observa’l sense jutjar-lo i torna a la teva respiració.

Practicar això cada dia redueix l’ansietat i pot disminuir la percepció de dolor després de l’operació. Afegeix als teus recursos vídeos de meditació guiada que et resultin agradables i converteix-ho en un hàbit.`,
  },
  {
    id: 'post-ejercicio',
    title: 'Ejercicio seguro en casa antes de la operación',
    title_en: 'Safe exercise at home before the operation',
    title_ca: 'Exercici segur a casa abans de l’operació',
    category: 'fisico', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-04',
    body:
`No necesitas un gimnasio para prepararte. La combinación más útil es:

• Aeróbico: caminar a paso ligero, 20-30 minutos casi todos los días. Deberías poder hablar, pero no cantar.
• Fuerza: 2-3 veces por semana. Levantarte de una silla sin manos, ponerte de puntillas, elevaciones de brazos con una botella de agua.
• Respiración: ejercicios inspiratorios diarios.

Empieza suave y aumenta poco a poco. Si sientes dolor en el pecho, mareo o falta de aire desproporcionada, para y consulta con tu equipo médico. Adapta siempre la intensidad a lo que tu profesional te haya autorizado.`,
    body_en:
`You do not need a gym to prepare. The most useful combination is:

• Aerobic: brisk walking, 20-30 minutes almost every day. You should be able to talk, but not sing.
• Strength: 2-3 times a week. Standing up from a chair without hands, calf raises, arm lifts with a water bottle.
• Breathing: daily inspiratory exercises.

Start gently and increase little by little. If you feel chest pain, dizziness or disproportionate breathlessness, stop and consult your medical team. Always match the intensity to what your professional has approved.`,
    body_ca:
`No necessites un gimnàs per preparar-te. La combinació més útil és:

• Aeròbic: caminar a pas lleuger, 20-30 minuts gairebé cada dia. Hauries de poder parlar, però no cantar.
• Força: 2-3 vegades per setmana. Aixecar-te d’una cadira sense mans, posar-te de puntetes, elevacions de braços amb una ampolla d’aigua.
• Respiració: exercicis inspiratoris diaris.

Comença suau i augmenta a poc a poc. Si sents dolor al pit, mareig o falta d’aire desproporcionada, atura’t i consulta el teu equip mèdic. Ajusta sempre la intensitat al que el teu professional t’hagi autoritzat.`,
  },
  {
    id: 'post-silla',
    title: 'Ejercicios seguros en silla (para empezar sin riesgo)',
    title_en: 'Safe chair exercises (to start without risk)',
    title_ca: 'Exercicis segurs en cadira (per començar sense risc)',
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
    body_en:
`If you tire quickly, have little strength or fear falling, start here. These are very safe exercises you can do seated or with support. If you can, do them with a relative.

SEATED ON A FIRM CHAIR (no wheels):
• Lift and straighten each leg: 10 times per leg.
• Seated marching (lifting knees alternately): 1-2 minutes.
• Open and close your arms, and raise them above your head: 10 times.

STANDING, WITH YOUR HANDS ON THE BACKREST:
• Stand up and sit down from the chair without using your hands: start with 5 and build up slowly.
• Rise on your toes: 10 times.
• Wall push-ups: 10 times.

Golden rules: never balance without a support nearby, stop if you feel dizzy or short of breath, and stay hydrated. Consistency matters far more than intensity.`,
    body_ca:
`Si et canses ràpid, tens poca força o por de caure, comença per aquí. Són exercicis molt segurs que pots fer assegut o amb suport. Fes-los, si pots, acompanyat d’un familiar.

ASSEGUT EN UNA CADIRA FERMA (sense rodes):
• Aixecar i estirar cada cama: 10 vegades per cama.
• Marxa asseguda (aixecar genolls alternant): 1-2 minuts.
• Obrir i tancar els braços, i elevar-los per damunt del cap: 10 vegades.

DE PEU, AMB LES MANS RECOLZADES AL RESPATLLER:
• Aixecar-te i seure de la cadira sense fer servir les mans: comença amb 5 i puja a poc a poc.
• Posar-te de puntetes: 10 vegades.
• Flexions contra la paret: 10 vegades.

Regles d’or: mai facis equilibri sense un suport a prop, atura’t si et mareges o et falta l’aire, i hidrata’t. La constància importa molt més que la intensitat.`,
  },
  {
    id: 'post-delirium',
    title: 'Prevenir la confusión tras la cirugía (delírium)',
    title_en: 'Preventing confusion after surgery (delirium)',
    title_ca: 'Prevenir la confusió després de la cirurgia (deliri)',
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
    body_en:
`Delirium is a state of acute confusion that can appear in the days after surgery, especially in older or frail people. It is common and almost always temporary, but it is worth preventing because it is very frightening and can delay recovery.

WHAT HELPS PREVENT IT (before and after):
• Keeping the mind active: reading, hobbies, the app memory game, conversation.
• Sleeping well and respecting the day/night rhythm.
• Wearing glasses and hearing aids if you use them (seeing and hearing well reduces disorientation).
• Staying hydrated and eating properly.
• Reviewing with your doctor the drugs that may favour it.

FOR THE FAMILY, after the operation: speak calmly, remind them where they are and what day it is, bring familiar objects and keep them company. If you notice confusion, disorientation or sudden behaviour changes, tell the healthcare staff: they know how to handle it.`,
    body_ca:
`El deliri és un estat de confusió aguda que pot aparèixer en els dies posteriors a una cirurgia, sobretot en persones grans o fràgils. És freqüent i gairebé sempre temporal, però convé prevenir-lo perquè fa molta por i pot endarrerir la recuperació.

QUÈ AJUDA A PREVENIR-LO (abans i després):
• Mantenir la ment activa: lectura, passatemps, el joc de memòria de l’app, conversa.
• Dormir bé i respectar el ritme dia/nit.
• Portar ulleres i audiòfons si en fas servir (veure i sentir bé redueix la desorientació).
• Hidratar-se i menjar adequadament.
• Revisar amb el teu metge els fàrmacs que poden afavorir-lo.

PER A LA FAMÍLIA, després de l’operació: parlar-li amb calma, recordar-li on és i quin dia és, portar objectes familiars i acompanyar-lo. Si noteu confusió, desorientació o canvis bruscos de comportament, aviseu el personal sanitari: saben com gestionar-ho.`,
  },
  {
    id: 'post-sno',
    title: 'Cuando la comida no basta: suplementos nutricionales',
    title_en: 'When food is not enough: nutritional supplements',
    title_ca: 'Quan el menjar no n’hi ha prou: suplements nutricionals',
    category: 'nutricion', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-07',
    body:
`La desnutrición "silenciosa" es muy común y debilita la cicatrización y las defensas. Muchas personas frágiles no llegan a sus necesidades de proteína solo con la dieta, sobre todo si tienen poco apetito.

PRIMERO, LA COMIDA REAL. Prioriza proteínas de alto valor: huevos, pescado, carne magra, lácteos (yogur griego, queso, leche), legumbres. Reparte la proteína entre todas las comidas, incluido el desayuno.

TRUCOS SI COMES POCO: enriquece los platos (leche en polvo, huevo, aceite de oliva, queso rallado), come poco y a menudo, y aprovecha los momentos de más apetito.

SUPLEMENTOS NUTRICIONALES ORALES (SNO): son batidos o preparados ricos en proteínas y calorías. Pueden ser muy útiles, pero deben indicarlos tu médico o tu nutricionista, que elegirán el tipo y la cantidad adecuados a tu caso. Coméntalo en tu consulta si te cuesta comer.`,
    body_en:
`"Silent" malnutrition is very common and weakens healing and defenses. Many frail people do not reach their protein needs through diet alone, especially if they have little appetite.

FIRST, REAL FOOD. Prioritise high-value proteins: eggs, fish, lean meat, dairy (Greek yogurt, cheese, milk), legumes. Spread the protein across all meals, including breakfast.

TRICKS IF YOU EAT LITTLE: enrich dishes (powdered milk, egg, olive oil, grated cheese), eat little and often, and make the most of the times you feel more appetite.

ORAL NUTRITIONAL SUPPLEMENTS (ONS): these are shakes or preparations rich in protein and calories. They can be very useful, but they must be prescribed by your doctor or dietitian, who will choose the type and amount suitable for your case. Mention it at your appointment if you struggle to eat.`,
    body_ca:
`La desnutrició "silenciosa" és molt comuna i debilita la cicatrització i les defenses. Moltes persones fràgils no arriben a les seves necessitats de proteïna només amb la dieta, sobretot si tenen poca gana.

PRIMER, EL MENJAR REAL. Prioritza proteïnes d’alt valor: ous, peix, carn magra, lactis (iogurt grec, formatge, llet), llegums. Reparteix la proteïna entre tots els àpats, inclòs l’esmorzar.

TRUCS SI MENGES POC: enriqueix els plats (llet en pols, ou, oli d’oliva, formatge ratllat), menja poc i sovint, i aprofita els moments de més gana.

SUPLEMENTS NUTRICIONALS ORALS (SNO): són batuts o preparats rics en proteïnes i calories. Poden ser molt útils, però els han d’indicar el teu metge o el teu nutricionista, que triaran el tipus i la quantitat adequats al teu cas. Comenta-ho a la teva consulta si et costa menjar.`,
  },
  {
    id: 'post-anemia',
    title: 'Anemia y medicación: dos cosas que revisar antes de operarte',
    title_en: 'Anemia and medication: two things to check before your operation',
    title_ca: 'Anèmia i medicació: dues coses per revisar abans d’operar-te',
    category: 'general', cover: '', author: 'Equipo de prehabilitación', date: '2026-01-08',
    body:
`Dos aspectos médicos marcan una gran diferencia en cómo toleras la cirugía:

ANEMIA (pocos glóbulos rojos o poco hierro). Llegar anémico a la cirugía aumenta el riesgo de necesitar transfusión y de complicaciones. A menudo se puede corregir en las semanas previas con hierro u otro tratamiento. Si te han dicho que tienes anemia o el hierro bajo, coméntalo cuanto antes en tu consulta.

POLIFARMACIA (tomar muchos medicamentos). Algunos fármacos deben mantenerse y otros suspenderse antes de la operación (por ejemplo, ciertos anticoagulantes o antidiabéticos). Nunca los cambies por tu cuenta.

LO MÁS ÚTIL QUE PUEDES HACER: llevar a la consulta de preanestesia una lista completa y actualizada de TODOS tus medicamentos (incluidos los de herbolario y los que compras sin receta) y de tus alergias. Puedes prepararla y descargarla desde la sección "Mi medicación y alergias" de esta app.`,
    body_en:
`Two medical aspects make a big difference in how you tolerate surgery:

ANEMIA (few red blood cells or low iron). Arriving anemic to surgery increases the risk of needing a transfusion and of complications. It can often be corrected in the weeks before with iron or another treatment. If you have been told you have anemia or low iron, mention it as soon as possible at your appointment.

POLYPHARMACY (taking many medications). Some drugs must be continued and others stopped before the operation (for example, certain anticoagulants or antidiabetics). Never change them on your own.

THE MOST USEFUL THING YOU CAN DO: bring to the pre-anesthesia appointment a complete, up-to-date list of ALL your medications (including herbal and over-the-counter products) and your allergies. You can prepare and download it from the "My medication and allergies" section of this app.`,
    body_ca:
`Dos aspectes mèdics marquen una gran diferència en com toleres la cirurgia:

ANÈMIA (pocs glòbuls vermells o poc ferro). Arribar anèmic a la cirurgia augmenta el risc de necessitar transfusió i de complicacions. Sovint es pot corregir en les setmanes prèvies amb ferro o un altre tractament. Si t’han dit que tens anèmia o el ferro baix, comenta-ho com més aviat millor a la teva consulta.

POLIFARMÀCIA (prendre molts medicaments). Alguns fàrmacs s’han de mantenir i altres suspendre abans de l’operació (per exemple, certs anticoagulants o antidiabètics). Mai els canviïs pel teu compte.

EL MÉS ÚTIL QUE POTS FER: portar a la consulta de preanestèsia una llista completa i actualitzada de TOTS els teus medicaments (inclosos els d’herbolari i els que compres sense recepta) i de les teves al·lèrgies. Pots preparar-la i descarregar-la des de la secció "La meva medicació i al·lèrgies" d’aquesta app.`,
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
export const ALARM_SIGNS_CA = [
  'Dolor al pit, palpitacions o falta d’aire en repòs.',
  'Febre alta o calfreds.',
  'Mareig intens, desmai o caiguda.',
  'Confusió nova, desorientació o canvis bruscos de comportament.',
  'Dolor que no cedeix o empitjora de forma cridanera.',
  'Sagnat, o ferida envermellida, calenta o amb secreció.',
  'Vòmits persistents o incapacitat per beure líquids.',
  'Inflor o dolor en una cama (sobretot en una de sola).',
];

export const CAREGIVER_TIPS = [
  { icon: '🤝', title: 'Acompaña, no sustituyas', title_en: 'Support, don\'t replace', title_ca: 'Acompanya, no substitueixis',
    text: 'Anima a tu familiar a hacer sus tareas por sí mismo cuando sea seguro; tu papel es motivar y supervisar, no hacerlo por él/ella.',
    text_en: 'Encourage your relative to do their tasks themselves when it is safe; your role is to motivate and supervise, not to do it for them.',
    text_ca: 'Anima el teu familiar a fer les seves tasques per si mateix quan sigui segur; el teu paper és motivar i supervisar, no fer-ho per ell/ella.' },
  { icon: '🛟', title: 'Supervisa la seguridad', title_en: 'Watch over safety', title_ca: 'Supervisa la seguretat',
    text: 'Quédate cerca durante los ejercicios de fuerza y equilibrio. Retira alfombras sueltas y asegura que haya un punto de apoyo firme.',
    text_en: 'Stay close during strength and balance exercises. Remove loose rugs and make sure there is a firm support to hold on to.',
    text_ca: 'Queda’t a prop durant els exercicis de força i equilibri. Retira catifes soltes i assegura que hi hagi un punt de suport ferm.' },
  { icon: '📆', title: 'Cread una rutina juntos', title_en: 'Build a routine together', title_ca: 'Creeu una rutina junts',
    text: 'Un horario fijo para caminar, comer y dormir da estructura y facilita la constancia. Celebrad juntos los pequeños logros.',
    text_en: 'A fixed schedule for walking, eating and sleeping gives structure and helps consistency. Celebrate the small wins together.',
    text_ca: 'Un horari fix per caminar, menjar i dormir dona estructura i facilita la constància. Celebreu junts els petits assoliments.' },
  { icon: '🍽️', title: 'Cuida la alimentación', title_en: 'Look after nutrition', title_ca: 'Cuida l’alimentació',
    text: 'Vigila que come suficiente proteína y bebe líquidos. Si come poco, coméntalo con el equipo médico.',
    text_en: 'Check that they eat enough protein and drink fluids. If they eat little, tell the medical team.',
    text_ca: 'Vigila que menja prou proteïna i beu líquids. Si menja poc, comenta-ho amb l’equip mèdic.' },
  { icon: '🧠', title: 'Estimula la mente', title_en: 'Stimulate the mind', title_ca: 'Estimula la ment',
    text: 'Conversad, jugad al juego de memoria o a las cartas, y asegúrate de que lleva gafas y audífonos si los usa.',
    text_en: 'Chat, play the memory game or cards, and make sure they wear glasses and hearing aids if they use them.',
    text_ca: 'Converseu, jugueu al joc de memòria o a les cartes, i assegura’t que porta ulleres i audiòfons si en fa servir.' },
  { icon: '📋', title: 'Prepara la consulta', title_en: 'Prepare the appointment', title_ca: 'Prepara la consulta',
    text: 'Ayúdale a tener lista la lista de medicación y alergias, y anotad juntos las dudas para el anestesiólogo.',
    text_en: 'Help them have the medication and allergy list ready, and note down questions for the anesthesiologist together.',
    text_ca: 'Ajuda’l a tenir a punt la llista de medicació i al·lèrgies, i anoteu junts els dubtes per a l’anestesiòleg.' },
];

export const FRAIL_QUESTIONS = [
  { id: 'fatiga', q: '¿Se ha sentido cansado/a la MAYOR parte del tiempo en las últimas 4 semanas?',
    q_en: 'Have you felt tired MOST of the time in the last 4 weeks?',
    q_ca: 'T’has sentit cansat/da la MAJOR part del temps en les últimes 4 setmanes?' },
  { id: 'resistencia', q: '¿Tiene dificultad para subir un piso de escaleras (unos 10 escalones) sin ayuda ni descansar?',
    q_en: 'Do you have difficulty climbing one flight of stairs (about 10 steps) without help or resting?',
    q_ca: 'Tens dificultat per pujar un pis d’escales (uns 10 esglaons) sense ajuda ni descansar?' },
  { id: 'deambulacion', q: '¿Tiene dificultad para caminar unos 100-200 metros (una manzana) sin ayuda?',
    q_en: 'Do you have difficulty walking about 100-200 metres (one block) without help?',
    q_ca: 'Tens dificultat per caminar uns 100-200 metres (una illa de cases) sense ajuda?' },
  { id: 'enfermedades', q: '¿Le ha dicho un médico que tiene 5 o más enfermedades crónicas (p. ej. hipertensión, diabetes, cáncer, EPOC, cardiopatía, artritis, ictus, enfermedad renal)?',
    q_en: 'Has a doctor told you that you have 5 or more chronic illnesses (e.g. hypertension, diabetes, cancer, COPD, heart disease, arthritis, stroke, kidney disease)?',
    q_ca: 'Un metge t’ha dit que tens 5 o més malalties cròniques (p. ex. hipertensió, diabetis, càncer, MPOC, cardiopatia, artritis, ictus, malaltia renal)?' },
  { id: 'peso', q: '¿Ha perdido más de un 5% de su peso (unos 3-4 kg) en el último año sin proponérselo?',
    q_en: 'Have you lost more than 5% of your weight (about 3-4 kg) in the last year without trying?',
    q_ca: 'Has perdut més d’un 5% del teu pes (uns 3-4 kg) en l’últim any sense proposar-t’ho?' },
];

/** Interpreta la puntuación FRAIL (0-5). */
export function frailResult(score) {
  if (score <= 0) return {
    level: 'robusto', emoji: '💪', color: '#22c55e',
    label: 'Robusto', label_en: 'Robust', label_ca: 'Robust',
    message: 'Tu reserva es buena. La prehabilitación te ayudará a mantenerte fuerte y llegar en tu mejor forma a la cirugía.',
    message_en: 'Your reserve is good. Prehabilitation will help you stay strong and arrive at surgery in your best shape.',
    message_ca: 'La teva reserva és bona. La prehabilitació t’ajudarà a mantenir-te fort i arribar en la teva millor forma a la cirurgia.',
  };
  if (score <= 2) return {
    level: 'prefragil', emoji: '🌱', color: '#f59e0b',
    label: 'Prefragilidad', label_en: 'Pre-frailty', label_ca: 'Prefragilitat',
    message: 'Estás en un punto en el que la prehabilitación tiene un impacto enorme. Empezar hoy mismo puede marcar una gran diferencia en tu recuperación.',
    message_en: 'You are at a point where prehabilitation has a huge impact. Starting today can make a big difference to your recovery.',
    message_ca: 'Estàs en un punt en què la prehabilitació té un impacte enorme. Començar avui mateix pot marcar una gran diferència en la teva recuperació.',
  };
  return {
    level: 'fragil', emoji: '🤗', color: '#ef4444',
    label: 'Fragilidad', label_en: 'Frailty', label_ca: 'Fragilitat',
    message: 'Tu reserva es valiosa y hay mucho que ganar. Trabaja con calma, prioriza la seguridad y el acompañamiento, y comparte este resultado con tu equipo médico para adaptar tu plan.',
    message_en: 'Your reserve is valuable and there is a lot to gain. Work calmly, prioritise safety and support, and share this result with your medical team to tailor your plan.',
    message_ca: 'La teva reserva és valuosa i hi ha molt a guanyar. Treballa amb calma, prioritza la seguretat i l’acompanyament, i comparteix aquest resultat amb el teu equip mèdic per adaptar el teu pla.',
  };
}

export const MEMORY_EMOJIS = ['🫁', '💪', '🥗', '🧘', '🚶', '💧', '😴', '🧠', '🍎', '🏆', '⭐', '🌿'];


/**
 * Escala de Fragilidad de Edmonton — versión AUTOCUMPLIMENTADA (Reported EFS).
 * 9 dominios, máx. 17 puntos. Adaptación autoinformada: el test del reloj y el
 * "Timed Up and Go" de la EFS clínica se sustituyen por preguntas de autopercepción,
 * por lo que puede completarla el paciente (o su cuidador) sin supervisión.
 * Herramienta ORIENTATIVA de cribado, NO diagnóstica.
 */
export const EDMONTON_QUESTIONS = [
  { id: 'cognicion', domain: 'Cognición', domain_en: 'Cognition', domain_ca: 'Cognició',
    q: '¿Nota problemas de memoria en su día a día (olvidar citas, nombres o dónde deja las cosas)?',
    q_en: 'Do you notice memory problems in your daily life (forgetting appointments, names or where you leave things)?',
    q_ca: 'Notes problemes de memòria en el teu dia a dia (oblidar cites, noms o on deixes les coses)?',
    options: [
      { v: 0, label: 'No, ninguno', label_en: 'No, none', label_ca: 'No, cap' },
      { v: 1, label: 'Algunos, leves', label_en: 'Some, mild', label_ca: 'Alguns, lleus' },
      { v: 2, label: 'Sí, importantes', label_en: 'Yes, significant', label_ca: 'Sí, importants' },
    ] },
  { id: 'ingresos', domain: 'Salud general', domain_en: 'General health', domain_ca: 'Salut general',
    q: 'En el último año, ¿cuántas veces ha ingresado en el hospital?',
    q_en: 'In the past year, how many times have you been admitted to hospital?',
    q_ca: 'En l’últim any, quantes vegades has ingressat a l’hospital?',
    options: [
      { v: 0, label: 'Ninguna vez', label_en: 'None', label_ca: 'Cap vegada' },
      { v: 1, label: '1 o 2 veces', label_en: '1 or 2 times', label_ca: '1 o 2 vegades' },
      { v: 2, label: 'Más de 2 veces', label_en: 'More than 2 times', label_ca: 'Més de 2 vegades' },
    ] },
  { id: 'salud', domain: 'Salud general', domain_en: 'General health', domain_ca: 'Salut general',
    q: '¿Cómo describiría su estado de salud en general?',
    q_en: 'How would you describe your general health?',
    q_ca: 'Com descriuries el teu estat de salut en general?',
    options: [
      { v: 0, label: 'Excelente, muy buena o buena', label_en: 'Excellent, very good or good', label_ca: 'Excel·lent, molt bona o bona' },
      { v: 1, label: 'Regular', label_en: 'Fair', label_ca: 'Regular' },
      { v: 2, label: 'Mala', label_en: 'Poor', label_ca: 'Dolenta' },
    ] },
  { id: 'independencia', domain: 'Independencia funcional', domain_en: 'Functional independence', domain_ca: 'Independència funcional',
    q: '¿En cuántas de estas actividades necesita ayuda? (preparar comidas, compras, transporte, teléfono, tareas del hogar, colada, manejar el dinero, tomar la medicación)',
    q_en: 'With how many of these activities do you need help? (preparing meals, shopping, transport, telephone, housework, laundry, managing money, taking medication)',
    q_ca: 'En quantes d’aquestes activitats necessites ajuda? (preparar àpats, compres, transport, telèfon, tasques de la llar, bugada, gestionar els diners, prendre la medicació)',
    options: [
      { v: 0, label: 'En ninguna o en 1', label_en: 'In none or 1', label_ca: 'En cap o en 1' },
      { v: 1, label: 'En 2 a 4', label_en: 'In 2 to 4', label_ca: 'En 2 a 4' },
      { v: 2, label: 'En 5 a 8', label_en: 'In 5 to 8', label_ca: 'En 5 a 8' },
    ] },
  { id: 'apoyo', domain: 'Apoyo social', domain_en: 'Social support', domain_ca: 'Suport social',
    q: 'Cuando necesita ayuda, ¿puede contar con alguien que esté dispuesto y disponible?',
    q_en: 'When you need help, can you count on someone who is willing and able?',
    q_ca: 'Quan necessites ajuda, pots comptar amb algú que estigui disposat i disponible?',
    options: [
      { v: 0, label: 'Siempre', label_en: 'Always', label_ca: 'Sempre' },
      { v: 1, label: 'A veces', label_en: 'Sometimes', label_ca: 'De vegades' },
      { v: 2, label: 'Nunca', label_en: 'Never', label_ca: 'Mai' },
    ] },
  { id: 'polifarmacia', domain: 'Uso de medicación', domain_en: 'Medication use', domain_ca: 'Ús de medicació',
    q: '¿Toma habitualmente 5 o más medicamentos con receta?',
    q_en: 'Do you regularly take 5 or more prescription medications?',
    q_ca: 'Prens habitualment 5 o més medicaments amb recepta?',
    options: [
      { v: 0, label: 'No', label_en: 'No', label_ca: 'No' },
      { v: 1, label: 'Sí', label_en: 'Yes', label_ca: 'Sí' },
    ] },
  { id: 'olvido-med', domain: 'Uso de medicación', domain_en: 'Medication use', domain_ca: 'Ús de medicació',
    q: '¿A veces se olvida de tomar su medicación?',
    q_en: 'Do you sometimes forget to take your medication?',
    q_ca: 'De vegades t’oblides de prendre la medicació?',
    options: [
      { v: 0, label: 'No', label_en: 'No', label_ca: 'No' },
      { v: 1, label: 'Sí', label_en: 'Yes', label_ca: 'Sí' },
    ] },
  { id: 'nutricion', domain: 'Nutrición', domain_en: 'Nutrition', domain_ca: 'Nutrició',
    q: '¿Ha perdido peso recientemente, de forma que la ropa le queda más holgada?',
    q_en: 'Have you recently lost weight so that your clothes have become looser?',
    q_ca: 'Has perdut pes recentment, de manera que la roba et queda més ampla?',
    options: [
      { v: 0, label: 'No', label_en: 'No', label_ca: 'No' },
      { v: 1, label: 'Sí', label_en: 'Yes', label_ca: 'Sí' },
    ] },
  { id: 'animo', domain: 'Estado de ánimo', domain_en: 'Mood', domain_ca: 'Estat d’ànim',
    q: '¿Se siente a menudo triste o decaído/a?',
    q_en: 'Do you often feel sad or down?',
    q_ca: 'Et sents sovint trist o abatut?',
    options: [
      { v: 0, label: 'No', label_en: 'No', label_ca: 'No' },
      { v: 1, label: 'Sí', label_en: 'Yes', label_ca: 'Sí' },
    ] },
  { id: 'continencia', domain: 'Continencia', domain_en: 'Continence', domain_ca: 'Continència',
    q: '¿Tiene problemas para controlar la orina (escapes que no desea)?',
    q_en: 'Do you have problems controlling your urine (leaks you do not want)?',
    q_ca: 'Tens problemes per controlar l’orina (pèrdues que no vols)?',
    options: [
      { v: 0, label: 'No', label_en: 'No', label_ca: 'No' },
      { v: 1, label: 'Sí', label_en: 'Yes', label_ca: 'Sí' },
    ] },
  { id: 'movilidad', domain: 'Movilidad', domain_en: 'Mobility', domain_ca: 'Mobilitat',
    q: '¿Cómo describiría su capacidad para levantarse de una silla y caminar unos pasos?',
    q_en: 'How would you describe your ability to get up from a chair and walk a few steps?',
    q_ca: 'Com descriuries la teva capacitat per aixecar-te d’una cadira i caminar uns passos?',
    options: [
      { v: 0, label: 'Sin dificultad', label_en: 'Without difficulty', label_ca: 'Sense dificultat' },
      { v: 1, label: 'Con algo de dificultad o despacio', label_en: 'With some difficulty or slowly', label_ca: 'Amb una mica de dificultat o a poc a poc' },
      { v: 2, label: 'Necesito ayuda o no puedo', label_en: 'I need help or I cannot', label_ca: 'Necessito ajuda o no puc' },
    ] },
];

/** Puntuación máxima posible de la escala de Edmonton autocumplimentada. */
export const EDMONTON_MAX = EDMONTON_QUESTIONS.reduce((s, q) => s + Math.max(...q.options.map((o) => o.v)), 0);

/** Interpreta la puntuación de Edmonton (0-17). */
export function edmontonResult(score) {
  if (score <= 5) return {
    level: 'no-fragil', emoji: '💪', color: '#22c55e',
    label: 'No frágil', label_en: 'Not frail', label_ca: 'No fràgil',
    message: 'Tu reserva es buena. La prehabilitación te ayudará a mantenerte fuerte y llegar en tu mejor forma a la cirugía.',
    message_en: 'Your reserve is good. Prehabilitation will help you stay strong and arrive at surgery in your best shape.',
    message_ca: 'La teva reserva és bona. La prehabilitació t’ajudarà a mantenir-te fort i arribar en la teva millor forma a la cirurgia.',
  };
  if (score <= 7) return {
    level: 'vulnerable', emoji: '🌱', color: '#84cc16',
    label: 'Aparentemente vulnerable', label_en: 'Apparently vulnerable', label_ca: 'Aparentment vulnerable',
    message: 'Hay pequeñas señales a vigilar. Es un momento ideal para reforzar el ejercicio, la nutrición y el descanso: la prehabilitación tiene aquí mucho que aportar.',
    message_en: 'There are small signs to watch. It is an ideal time to reinforce exercise, nutrition and rest: prehabilitation has a lot to offer here.',
    message_ca: 'Hi ha petits senyals a vigilar. És un moment ideal per reforçar l’exercici, la nutrició i el descans: la prehabilitació té aquí molt a aportar.',
  };
  if (score <= 9) return {
    level: 'leve', emoji: '🤝', color: '#f59e0b',
    label: 'Fragilidad leve', label_en: 'Mild frailty', label_ca: 'Fragilitat lleu',
    message: 'Empezar hoy puede marcar una gran diferencia. Trabaja con calma y constancia, y comparte este resultado con tu equipo médico para adaptar tu plan.',
    message_en: 'Starting today can make a big difference. Work calmly and consistently, and share this result with your medical team to tailor your plan.',
    message_ca: 'Començar avui pot marcar una gran diferència. Treballa amb calma i constància, i comparteix aquest resultat amb el teu equip mèdic per adaptar el teu pla.',
  };
  if (score <= 11) return {
    level: 'moderada', emoji: '🧡', color: '#f97316',
    label: 'Fragilidad moderada', label_en: 'Moderate frailty', label_ca: 'Fragilitat moderada',
    message: 'Tu reserva es valiosa y hay mucho que ganar. Prioriza la seguridad y el acompañamiento, y comenta este resultado con tu equipo médico cuanto antes.',
    message_en: 'Your reserve is valuable and there is a lot to gain. Prioritise safety and support, and discuss this result with your medical team as soon as possible.',
    message_ca: 'La teva reserva és valuosa i hi ha molt a guanyar. Prioritza la seguretat i l’acompanyament, i comenta aquest resultat amb el teu equip mèdic com més aviat millor.',
  };
  return {
    level: 'grave', emoji: '🫶', color: '#ef4444',
    label: 'Fragilidad grave', label_en: 'Severe frailty', label_ca: 'Fragilitat greu',
    message: 'Es importante que compartas este resultado con tu equipo médico para preparar la cirugía con el mayor cuidado. Avanza con pasos pequeños y siempre acompañado/a.',
    message_en: 'It is important to share this result with your medical team to prepare for surgery with the greatest care. Move forward in small steps and always with company.',
    message_ca: 'És important que comparteixis aquest resultat amb el teu equip mèdic per preparar la cirurgia amb la màxima cura. Avança amb passos petits i sempre acompanyat/da.',
  };
}


/**
 * Puntos de privacidad para el paciente (bilingüe).
 */
export const PRIVACY_POINTS = [
  { icon: '📱', es: 'Tus respuestas, tu progreso y tus datos se guardan SOLO en este dispositivo. No se envían a internet ni a ningún servidor.', en: 'Your answers, progress and data are stored ONLY on this device. Nothing is sent to the internet or to any server.', ca: 'Les teves respostes, el teu progrés i les teves dades es desen NOMÉS en aquest dispositiu. No s’envien a internet ni a cap servidor.' },
  { icon: '🙈', es: 'Nadie más puede verlos, salvo que tú compartas tu informe.', en: 'No one else can see them, unless you share your report.', ca: 'Ningú més els pot veure, tret que tu comparteixis el teu informe.' },
  { icon: '📄', es: 'Guarda o envía tu informe en PDF antes de la cirugía: es la forma de conservar tus datos y de que tu equipo médico los vea.', en: 'Save or send your PDF report before surgery: that is how you keep your data and let your medical team see it.', ca: 'Desa o envia el teu informe en PDF abans de la cirurgia: és la manera de conservar les teves dades i que el teu equip mèdic les vegi.' },
  { icon: '🗑️', es: 'Si borras los datos del navegador, desinstalas la app o cambias de dispositivo, la información se pierde.', en: 'If you clear your browser data, uninstall the app or change device, the information is lost.', ca: 'Si esborres les dades del navegador, desinstal·les l’app o canvies de dispositiu, la informació es perd.' },
  { icon: '🔓', es: 'Los datos no están cifrados. En un dispositivo compartido, otras personas que abran la app podrían verlos.', en: 'The data is not encrypted. On a shared device, other people who open the app could see it.', ca: 'Les dades no estan xifrades. En un dispositiu compartit, altres persones que obrin l’app podrien veure-les.' },
  { icon: '🩺', es: 'Comparte tus resultados con tu equipo médico. Esta app es de apoyo y no sustituye su valoración.', en: 'Share your results with your medical team. This app is a support tool and does not replace their assessment.', ca: 'Comparteix els teus resultats amb el teu equip mèdic. Aquesta app és de suport i no substitueix la seva valoració.' },
];
