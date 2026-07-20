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
    id: 'ayuno', emoji: '⏳', color: '#ef4444',
    name: 'Ayuno', name_en: 'Fasting', name_ca: 'Dejuni',
    tagline: 'Prepárate para el ayuno previo a la cirugía.',
    tagline_en: 'Get ready for pre-surgery fasting.',
    tagline_ca: 'Prepara’t per al dejuni previ a la cirurgia.',
    why: 'Seguir bien las pautas de ayuno reduce el riesgo de complicaciones anestésicas y evita retrasos o suspensiones de la cirugía.',
    why_en: 'Following fasting guidelines properly reduces the risk of anaesthetic complications and avoids surgery delays or cancellations.',
    why_ca: 'Seguir bé les pautes de dejuni redueix el risc de complicacions anestèsiques i evita retards o suspensions de la cirurgia.',
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
  // Medallas de arranque: guían el uso inicial del programa (navegar, ficha, plan, tests).
  { id: 'explora', emoji: '🧭', name: 'A bordo', name_en: 'On board', name_ca: 'A bord', desc: 'Explora Hoy, Prepárate, Progreso y Aprende.', desc_en: 'Explore Today, Get ready, Progress and Learn.', desc_ca: 'Explora Avui, Prepara’t, Progrés i Aprèn.',
    check: (s) => { const v = s.visited || {}; return !!(v.hoy && v.recursos && v.progreso && v.aprende); } },
  { id: 'mi-ficha', emoji: '💊', name: 'Mi ficha lista', name_en: 'My details ready', name_ca: 'La meva fitxa llesta', desc: 'Rellena tu medicación y alergias.', desc_en: 'Fill in your medication and allergies.', desc_ca: 'Omple la teva medicació i al·lèrgies.',
    check: (s) => { const m = s.medList || {}; return !!((m.meds && m.meds.length > 0) || (m.allergies && String(m.allergies).trim().length > 0)); } },
  { id: 'conoce-plan', emoji: '📋', name: 'Conoce tu plan', name_en: 'Know your plan', name_ca: 'Coneix el teu pla', desc: 'Abre una guía de Prepárate.', desc_en: 'Open a Get-ready guide.', desc_ca: 'Obre una guia de Prepara’t.',
    check: (s) => { const v = s.visited || {}; return ['ayuno-guide', 'ejercicio-guide', 'respiratorio-guide', 'bienestar-guide', 'nutricion-guide'].some((k) => v[k]); } },
  { id: 'punto-partida', emoji: '🩺', name: 'Punto de partida', name_en: 'Starting point', name_ca: 'Punt de partida', desc: 'Haz un test inicial (física, nutrición o fragilidad).', desc_en: 'Do an initial test (fitness, nutrition or frailty).', desc_ca: 'Fes un test inicial (física, nutrició o fragilitat).',
    check: (s) => { const a = s.assessments || {}; return ['dasi', 'must', 'frail', 'edmonton'].some((k) => a[k] && a[k].length > 0); } },
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
  { id: 'memoria-hierro', emoji: '🎴', name: 'Memoria de hierro', name_en: 'Iron memory', name_ca: 'Memòria de ferro', desc: 'Gana 5 partidas del juego de memoria.', desc_en: 'Win 5 rounds of the memory game.', desc_ca: 'Guanya 5 partides del joc de memòria.',
    check: (s) => (s.games && s.games.memory && s.games.memory.wins >= 5) },
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
  'PreHabilítame es una herramienta educativa y de acompañamiento. No sustituye la valoración ni las indicaciones de tu equipo médico y anestésico. Ante cualquier duda, dolor o síntoma nuevo, consulta con tu profesional de salud. Sigue siempre las instrucciones concretas de tu centro (ayuno, medicación, ejercicio permitido).';
export const DISCLAIMER_EN =
  'PreHabilítame is an educational and support tool. It does not replace the assessment or instructions of your medical and anesthetic team. If you have any doubt, pain or new symptom, consult your healthcare professional. Always follow the specific instructions from your hospital (fasting, medication, permitted exercise).';
export const DISCLAIMER_CA =
  'PreHabilítame és una eina educativa i d’acompanyament. No substitueix la valoració ni les indicacions del teu equip mèdic i anestèsic. Davant de qualsevol dubte, dolor o símptoma nou, consulta amb el teu professional de salut. Segueix sempre les instruccions concretes del teu centre (dejuni, medicació, exercici permès).';

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

// Versión del catálogo de recursos por defecto. Al incrementarla, la migración
// (syncDefaultResources en data.js) añade a las bibliotecas ya existentes los
// recursos por defecto que falten por id, una sola vez.
export const RESOURCES_VERSION = 3;

// IDs de recursos por defecto retirados: syncDefaultResources los elimina de las
// bibliotecas ya sembradas al subir RESOURCES_VERSION.
export const DEPRECATED_RESOURCE_IDS = ['res-mindfulness'];

export const DEFAULT_RESOURCES = [
  { id: 'res-bienestar', pillar: 'mental', type: 'guide', guideId: 'bienestar',
    title: 'Bienestar mental: infórmate, empodérate y entrena tu mente',
    title_en: 'Mental wellbeing: learn, empower yourself and train your mind',
    title_ca: 'Benestar mental: informa’t, empodera’t i entrena la teva ment',
    desc: 'Vídeos breves y prácticas de calma para llegar más preparado, con salida segura y ayuda a un toque.',
    desc_en: 'Short videos and calm practices to arrive better prepared, with a safe exit and help one tap away.',
    desc_ca: 'Vídeos breus i pràctiques de calma per arribar més preparat, amb sortida segura i ajuda a un toc.' },
  { id: 'res-nutricion', pillar: 'nutricion', type: 'guide', guideId: 'nutricion',
    title: 'Nutrición antes de la cirugía',
    title_en: 'Nutrition before surgery',
    title_ca: 'Nutrició abans de la cirurgia',
    desc: 'Cómo llegar bien nutrido: proteína, hidratación y tu test de riesgo nutricional (MUST).',
    desc_en: 'Arriving well nourished: protein, hydration and your nutrition-risk test (MUST).',
    desc_ca: 'Arribar ben nodrit: proteïna, hidratació i el teu test de risc nutricional (MUST).' },
  { id: 'res-ejercicio', pillar: 'fisico', type: 'guide', guideId: 'ejercicio',
    title: 'Ejercicio antes de la cirugía: tu plan de prehabilitación física',
    title_en: 'Exercise before surgery: your physical prehabilitation plan',
    title_ca: 'Exercici abans de la cirurgia: el teu pla de prehabilitació física',
    desc: 'Guía práctica de ejercicio prequirúrgico: opción en casa y en gimnasio, con vídeos.',
    desc_en: 'Practical pre-surgery exercise guide: at-home and gym options, with videos.',
    desc_ca: 'Guia pràctica d’exercici prequirúrgic: opció a casa i al gimnàs, amb vídeos.' },
  { id: 'res-respiratorio', pillar: 'respiratorio', type: 'guide', guideId: 'respiratorio',
    title: 'Entrenamiento respiratorio antes de la cirugía',
    title_en: 'Breathing training before surgery',
    title_ca: 'Entrenament respiratori abans de la cirurgia',
    desc: 'Ejercicios respiratorios sencillos para preparar tus pulmones: diafragmática, costal, tos eficaz e inspirómetro.',
    desc_en: 'Simple breathing exercises to prepare your lungs: diaphragmatic, costal, effective cough and spirometer.',
    desc_ca: 'Exercicis respiratoris senzills per preparar els pulmons: diafragmàtica, costal, tos eficaç i inspiròmetre.' },
  { id: 'res-ayuno', pillar: 'ayuno', type: 'guide', guideId: 'ayuno',
    title: 'Ayuno antes de la cirugía: guía según tu situación',
    title_en: 'Fasting before surgery: a guide for your situation',
    title_ca: 'Dejuni abans de la cirurgia: guia segons la teva situació',
    desc: 'Guía personalizada de ayuno preoperatorio según tu perfil (sano, diabetes, GLP‑1, riesgo incrementado).',
    desc_en: 'Personalised preoperative fasting guide based on your profile (healthy, diabetes, GLP‑1, increased risk).',
    desc_ca: 'Guia personalitzada de dejuni preoperatori segons el teu perfil (sa, diabetis, GLP‑1, risc incrementat).' },
];

// Guía interactiva de ayuno preoperatorio. Contenido educativo; no sustituye las
// indicaciones concretas del hospital/equipo de anestesia. Los bloques se abren y
// se destacan según las casillas que marque el paciente (state.fasting).
export const FASTING_GUIDE = {
  intro: {
    title: 'Ayuno antes de la cirugía: guía según tu situación',
    title_en: 'Fasting before surgery: a guide for your situation',
    title_ca: 'Dejuni abans de la cirurgia: guia segons la teva situació',
    body: `<p>El ayuno antes de una anestesia es importante porque, mientras estás dormido o sedado, el contenido del estómago podría pasar a los pulmones y causar complicaciones graves como una neumonía. Llegar con el estómago vacío hace que tu operación sea mucho más segura.</p>
<p>El objetivo de tu equipo de anestesia es que te operes en las condiciones más seguras y controladas posibles. El día de la cirugía, tu anestesista revisará contigo a qué hora fue tu última comida o bebida y confirmará si el ayuno es seguro.</p>
<p>Marca abajo tu situación y resaltaremos el apartado que más te interesa. Puedes abrir también el resto de apartados si quieres leerlos.</p>
<h4>¿Qué es un "líquido claro"?</h4>
<p>Son líquidos transparentes, sin pulpa ni grasa, a través de los cuales casi se puede ver. Por ejemplo:</p>
<ul><li>Agua y refrescos incoloros (tipo Sprite®, 7‑Up®, tónica, gaseosa sin limón).</li>
<li>Zumo de manzana o de uva sin pulpa.</li>
<li>Café o té solos (sin leche, crema ni sucedáneos).</li>
<li>Bebidas isotónicas claras (evita las de color rojo, azul o morado).</li></ul>
<h4>¿Qué NO es un líquido claro?</h4>
<p>Todo lo que sea espeso, con grasa o con "cuerpo": leche y lácteos, bebidas vegetales, batidos y smoothies, zumos espesos o con pulpa (como el de naranja), café o té con leche o crema, chocolate, gelatinas, bebidas proteicas y fórmulas de nutrición enteral.</p>`,
    body_en: `<p>Fasting before anaesthesia matters because, while you are asleep or sedated, the contents of your stomach could pass into your lungs and cause serious complications such as pneumonia. Arriving with an empty stomach makes your operation much safer.</p>
<p>Your anaesthesia team's goal is for you to have surgery in the safest, most controlled conditions possible. On the day of surgery, your anaesthetist will check with you when you last ate or drank and confirm whether your fast is safe.</p>
<p>Tick your situation below and we will highlight the section most relevant to you. You can also open the other sections if you want to read them.</p>
<h4>What is a "clear liquid"?</h4>
<p>They are transparent liquids, with no pulp or fat, that you can almost see through. For example:</p>
<ul><li>Water and colourless soft drinks (such as Sprite®, 7‑Up®, tonic, clear soda).</li>
<li>Apple or grape juice without pulp.</li>
<li>Black coffee or tea (no milk, cream or creamers).</li>
<li>Clear sports drinks (avoid red, blue or purple ones).</li></ul>
<h4>What is NOT a clear liquid?</h4>
<p>Anything thick, fatty or with "body": milk and dairy, plant-based drinks, milkshakes and smoothies, thick or pulpy juices (like orange juice), coffee or tea with milk or cream, chocolate, jelly, protein drinks and enteral nutrition formulas.</p>`,
    body_ca: `<p>El dejuni abans d'una anestèsia és important perquè, mentre estàs adormit o sedat, el contingut de l'estómac podria passar als pulmons i causar complicacions greus com una pneumònia. Arribar amb l'estómac buit fa que la teva operació sigui molt més segura.</p>
<p>L'objectiu del teu equip d'anestèsia és que t'operis en les condicions més segures i controlades possibles. El dia de la cirurgia, el teu anestesista revisarà amb tu a quina hora va ser el teu darrer àpat o beguda i confirmarà si el dejuni és segur.</p>
<p>Marca a sota la teva situació i destacarem l'apartat que més t'interessa. També pots obrir la resta d'apartats si vols llegir-los.</p>
<h4>Què és un "líquid clar"?</h4>
<p>Són líquids transparents, sense polpa ni greix, a través dels quals gairebé es pot veure. Per exemple:</p>
<ul><li>Aigua i refrescos incolors (tipus Sprite®, 7‑Up®, tònica, gasosa sense llimona).</li>
<li>Suc de poma o de raïm sense polpa.</li>
<li>Cafè o te sols (sense llet, crema ni succedanis).</li>
<li>Begudes isotòniques clares (evita les de color vermell, blau o morat).</li></ul>
<h4>Què NO és un líquid clar?</h4>
<p>Tot el que sigui espès, amb greix o amb "cos": llet i lactis, begudes vegetals, batuts i smoothies, sucs espessos o amb polpa (com el de taronja), cafè o te amb llet o crema, xocolata, gelatines, begudes proteiques i fórmules de nutrició enteral.</p>`,
  },
  blocks: [
    {
      id: 'sano', match: 'none',
      title: 'Si no tienes enfermedades digestivas ni diabetes',
      title_en: "If you don't have digestive conditions or diabetes",
      title_ca: 'Si no tens malalties digestives ni diabetis',
      body: `<p>Si no tienes diabetes ni problemas digestivos especiales, como norma general:</p>
<ul><li><strong>Líquidos claros:</strong> permitidos hasta 2 horas antes de la anestesia. Entre las 4 y las 2 horas previas, toma solo una cantidad moderada.</li>
<li><strong>Comida ligera</strong> (tostadas, fruta, cereales): déjala con suficiente antelación (habitualmente unas 6 horas antes).</li>
<li><strong>Comida copiosa, grasa o con mucha proteína</strong> (carne, fritos): déjala antes todavía (habitualmente unas 8 horas antes).</li></ul>
<p>Además, puedes tomar una <strong>bebida rica en carbohidratos</strong> hasta 2 horas antes (una bebida comercial tipo Nutricia PreOp® o una mezcla de maltodextrina en agua). Puede ayudarte a disminuir el hambre, reducir la ansiedad y mantener la energía protegiendo tu musculatura.</p>
<p>Los horarios y cantidades exactos pueden variar: sigue siempre las indicaciones concretas de tu hospital.</p>
<h4>Vídeo explicativo para pacientes sin diabetes ni medicación tipo GLP‑1</h4>
<p>A continuación encontrarás un vídeo donde te explicamos, paso a paso, cómo debes ayunar si no tienes diabetes ni tomas medicación que ralentice el vaciamiento del estómago. Te ayudará a repasar los horarios y a resolver las dudas más frecuentes.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209214235" title="Vídeo: ayuno antes de la cirugía" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_en: `<p>If you don't have diabetes or special digestive problems, as a general rule:</p>
<ul><li><strong>Clear liquids:</strong> allowed up to 2 hours before anaesthesia. Between 4 and 2 hours beforehand, have only a moderate amount.</li>
<li><strong>Light meals</strong> (toast, fruit, cereal): stop well in advance (usually about 6 hours before).</li>
<li><strong>Large, fatty or high-protein meals</strong> (meat, fried food): stop even earlier (usually about 8 hours before).</li></ul>
<p>You may also have a <strong>carbohydrate-rich drink</strong> up to 2 hours before (a commercial drink such as Nutricia PreOp® or a maltodextrin-in-water mix). It can help reduce hunger and anxiety and keep your energy up while protecting your muscles.</p>
<p>Exact times and amounts may vary: always follow your hospital's specific instructions.</p>
<h4>Explainer video for patients without diabetes or GLP‑1 medication</h4>
<p>Below you'll find a video explaining, step by step, how to fast if you don't have diabetes and don't take medication that slows stomach emptying. It will help you review the timings and answer the most common questions.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209214236" title="Video: fasting before surgery" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_ca: `<p>Si no tens diabetis ni problemes digestius especials, com a norma general:</p>
<ul><li><strong>Líquids clars:</strong> permesos fins a 2 hores abans de l'anestèsia. Entre les 4 i les 2 hores prèvies, pren només una quantitat moderada.</li>
<li><strong>Menjar lleuger</strong> (torrades, fruita, cereals): deixa'l amb prou antelació (habitualment unes 6 hores abans).</li>
<li><strong>Menjar copiós, gras o amb molta proteïna</strong> (carn, fregits): deixa'l encara abans (habitualment unes 8 hores abans).</li></ul>
<p>A més, pots prendre una <strong>beguda rica en carbohidrats</strong> fins a 2 hores abans (una beguda comercial tipus Nutricia PreOp® o una barreja de maltodextrina en aigua). Pot ajudar-te a disminuir la gana, reduir l'ansietat i mantenir l'energia protegint la teva musculatura.</p>
<p>Els horaris i quantitats exactes poden variar: segueix sempre les indicacions concretes del teu hospital.</p>
<h4>Vídeo explicatiu per a pacients sense diabetis ni medicació tipus GLP‑1</h4>
<p>A continuació trobaràs un vídeo on t'expliquem, pas a pas, com has de dejunar si no tens diabetis ni prens medicació que alenteixi el buidatge de l'estómac. T'ajudarà a repassar els horaris i a resoldre els dubtes més freqüents.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209214237" title="Vídeo: dejuni abans de la cirurgia" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
    },
    {
      id: 'diabetes', match: 'diabetes',
      title: 'Si tienes diabetes',
      title_en: 'If you have diabetes',
      title_ca: 'Si tens diabetis',
      body: `<p>Si tienes diabetes, el ayuno se adapta para <strong>evitar hipoglucemias</strong> (bajadas de azúcar), <strong>evitar descompensaciones</strong> del azúcar en sangre y mantener un aporte de carbohidratos controlado, según las indicaciones de tu equipo.</p>
<p><strong>Tiempos de ayuno:</strong> para los sólidos son similares a los de una persona sin diabetes (comida ligera y, con más antelación, comida copiosa), y los líquidos claros suelen permitirse hasta unas 2 horas antes, siempre según lo que te indique tu equipo médico.</p>
<h4>Tu medicación para la diabetes</h4>
<ul><li><strong>Insulina lenta o intermedia:</strong> lo habitual es ajustar (reducir) la dosis —por ejemplo, en torno al 80% de la dosis habitual la noche previa o la mañana de la cirugía—, según lo que indiquen endocrinología y anestesia.</li>
<li><strong>Insulina rápida:</strong> por lo general no se administra durante el ayuno, porque no estás tomando carbohidratos; solo se usa para corregir glucemias muy altas si tu médico lo ha indicado.</li>
<li><strong>Antidiabéticos orales (pastillas):</strong> no todos se manejan igual. El servicio de anestesia y/o endocrinología te dirá exactamente qué hacer con cada uno.</li></ul>
<h4>Si controlas tu glucosa en casa</h4>
<ul><li>Si tu glucosa está <strong>baja</strong>, el equipo puede recomendarte tomar una pequeña cantidad de zumo claro y repetir la medición a los pocos minutos.</li>
<li>Si tu glucosa está <strong>muy alta</strong>, es posible que debas corregirla con la dosis de insulina rápida que te haya indicado tu médico.</li></ul>
<h4>Bebida de carbohidratos: valoración individual</h4>
<p>En personas con diabetes, la bebida rica en carbohidratos <strong>no se recomienda de forma automática</strong>, porque puede elevar la glucemia. Solo se valora en <strong>casos seleccionados</strong> (por ejemplo, diabetes bien controlada) y <strong>siempre con indicación de tu equipo quirúrgico y de anestesia</strong>. La decisión depende del tipo de cirugía, de tu control metabólico y del protocolo de tu centro. No la tomes por tu cuenta: pregunta a tu equipo si en tu caso está indicada.</p>
<p><strong>Importante:</strong> ante cualquier duda, consulta siempre con tu equipo médico antes de cambiar dosis por tu cuenta.</p>`,
      body_en: `<p>If you have diabetes, fasting is adapted to <strong>avoid hypoglycaemia</strong> (low blood sugar), <strong>avoid decompensation</strong> of blood sugar, and keep carbohydrate intake controlled, according to your team's instructions.</p>
<p><strong>Fasting times:</strong> for solids they are similar to someone without diabetes (light meal, and heavy meal earlier still), and clear liquids are usually allowed up to about 2 hours before, always as your medical team advises.</p>
<h4>Your diabetes medication</h4>
<ul><li><strong>Long or intermediate-acting insulin:</strong> the dose is usually adjusted (reduced) — for example, to around 80% of the usual dose the night before or the morning of surgery — as endocrinology and anaesthesia advise.</li>
<li><strong>Rapid-acting insulin:</strong> it is generally not given during fasting, because you are not taking carbohydrates; it is only used to correct very high blood sugar if your doctor has instructed it.</li>
<li><strong>Oral antidiabetics (tablets):</strong> they are not all handled the same way. The anaesthesia and/or endocrinology team will tell you exactly what to do with each one.</li></ul>
<h4>If you check your glucose at home</h4>
<ul><li>If your glucose is <strong>low</strong>, the team may advise you to have a small amount of clear juice and repeat the reading a few minutes later.</li>
<li>If your glucose is <strong>very high</strong>, you may need to correct it with the dose of rapid-acting insulin your doctor has indicated.</li></ul>
<h4>Carbohydrate drink: individual assessment</h4>
<p>In people with diabetes, the carbohydrate-rich drink is <strong>not recommended automatically</strong>, because it can raise blood sugar. It is only considered in <strong>selected cases</strong> (for example, well-controlled diabetes) and <strong>always on the advice of your surgical and anaesthesia team</strong>. The decision depends on the type of surgery, your metabolic control and your centre's protocol. Do not take it on your own: ask your team whether it is indicated in your case.</p>
<p><strong>Important:</strong> if in doubt, always check with your medical team before changing any dose on your own.</p>`,
      body_ca: `<p>Si tens diabetis, el dejuni s'adapta per <strong>evitar hipoglucèmies</strong> (baixades de sucre), <strong>evitar descompensacions</strong> del sucre a la sang i mantenir un aport de carbohidrats controlat, segons les indicacions del teu equip.</p>
<p><strong>Temps de dejuni:</strong> per als sòlids són similars als d'una persona sense diabetis (menjar lleuger i, amb més antelació, menjar copiós), i els líquids clars solen permetre's fins a unes 2 hores abans, sempre segons el que t'indiqui el teu equip mèdic.</p>
<h4>La teva medicació per a la diabetis</h4>
<ul><li><strong>Insulina lenta o intermèdia:</strong> el més habitual és ajustar (reduir) la dosi —per exemple, al voltant del 80% de la dosi habitual la nit prèvia o el matí de la cirurgia—, segons el que indiquin endocrinologia i anestèsia.</li>
<li><strong>Insulina ràpida:</strong> en general no s'administra durant el dejuni, perquè no estàs prenent carbohidrats; només s'utilitza per corregir glucèmies molt altes si el teu metge ho ha indicat.</li>
<li><strong>Antidiabètics orals (pastilles):</strong> no tots es gestionen igual. El servei d'anestèsia i/o endocrinologia et dirà exactament què fer amb cadascun.</li></ul>
<h4>Si controles la teva glucosa a casa</h4>
<ul><li>Si la teva glucosa està <strong>baixa</strong>, l'equip pot recomanar-te prendre una petita quantitat de suc clar i repetir la mesura al cap de pocs minuts.</li>
<li>Si la teva glucosa està <strong>molt alta</strong>, és possible que l'hagis de corregir amb la dosi d'insulina ràpida que t'hagi indicat el teu metge.</li></ul>
<h4>Beguda de carbohidrats: valoració individual</h4>
<p>En persones amb diabetis, la beguda rica en carbohidrats <strong>no es recomana de manera automàtica</strong>, perquè pot elevar la glucèmia. Només es valora en <strong>casos seleccionats</strong> (per exemple, diabetis ben controlada) i <strong>sempre amb indicació del teu equip quirúrgic i d'anestèsia</strong>. La decisió depèn del tipus de cirurgia, del teu control metabòlic i del protocol del teu centre. No la prenguis pel teu compte: pregunta al teu equip si en el teu cas està indicada.</p>
<p><strong>Important:</strong> davant de qualsevol dubte, consulta sempre amb el teu equip mèdic abans de canviar dosis pel teu compte.</p>`,
    },
    {
      id: 'glp1', match: 'glp1',
      title: 'Si tomas medicación tipo GLP‑1 para la diabetes o para perder peso (Ozempic®, Trulicity®…)',
      title_en: 'If you take GLP‑1 medication for diabetes or weight loss (Ozempic®, Trulicity®…)',
      title_ca: 'Si prens medicació tipus GLP‑1 per a la diabetis o per perdre pes (Ozempic®, Trulicity®…)',
      body: `<p>Los medicamentos tipo <strong>GLP‑1 semanal</strong> (como Ozempic®, Trulicity®, Bydureon BCise®, Mounjaro®, Wegovy®, Rybelsus®, Zepbound®) <strong>ralentizan el vaciamiento del estómago</strong>, por lo que puede tardar más en quedar vacío.</p>
<ul><li><strong>Alimentos sólidos:</strong> el ayuno debe ser más largo que en una persona estándar. En nuestro centro se recomienda estar <strong>24 horas sin sólidos</strong> antes de la cirugía.</li>
<li><strong>Líquidos claros:</strong> siguen permitidos hasta aproximadamente 2 horas antes, con un límite de volumen razonable entre las 4 y las 2 horas previas.</li></ul>
<p>Necesitar un ayuno más largo <strong>no significa que estés peor</strong>: simplemente, esta medicación obliga a extremar las precauciones para que el estómago esté realmente vacío y la anestesia sea más segura.</p>
<h4>Bebida de carbohidratos (opcional)</h4>
<p>Si tu equipo lo autoriza, puedes tomar una <strong>bebida rica en carbohidratos que sea un líquido claro</strong> (tipo Nutricia PreOp® o una mezcla de maltodextrina bien disuelta en agua) hasta 2 horas antes, para reducir el hambre y la ansiedad y evitar la pérdida de músculo (catabolismo) durante el ayuno prolongado de sólidos.</p>
<p>Si además tienes <strong>diabetes</strong>, sigue también las recomendaciones del apartado de diabetes (ajuste de insulina y medicación), sumando el ayuno prolongado de sólidos por el GLP‑1.</p>
<p>La decisión de suspender o no el GLP‑1 y los tiempos exactos de ayuno deben tomarse <strong>junto a tu equipo médico</strong>.</p>`,
      body_en: `<p><strong>Weekly GLP‑1</strong> medications (such as Ozempic®, Trulicity®, Bydureon BCise®, Mounjaro®, Wegovy®, Rybelsus®, Zepbound®) <strong>slow down stomach emptying</strong>, so your stomach may take longer to empty.</p>
<ul><li><strong>Solid food:</strong> the fast must be longer than for a standard patient. In our centre we recommend <strong>24 hours with no solids</strong> before surgery.</li>
<li><strong>Clear liquids:</strong> still allowed up to about 2 hours before, with a reasonable volume limit between 4 and 2 hours beforehand.</li></ul>
<p>Needing a longer fast <strong>does not mean you are worse off</strong>: this medication simply means taking extra precautions so the stomach is truly empty and anaesthesia is safer.</p>
<h4>Carbohydrate drink (optional)</h4>
<p>If your team authorises it, you may have a <strong>carbohydrate-rich drink that is a clear liquid</strong> (such as Nutricia PreOp® or a well-dissolved maltodextrin-in-water mix) up to 2 hours before, to reduce hunger and anxiety and prevent muscle loss (catabolism) during the prolonged solid fast.</p>
<p>If you also have <strong>diabetes</strong>, follow the diabetes section too (insulin and medication adjustments), on top of the prolonged solid fast for GLP‑1.</p>
<p>The decision on whether to pause GLP‑1 and the exact fasting times must be made <strong>together with your medical team</strong>.</p>`,
      body_ca: `<p>Els medicaments tipus <strong>GLP‑1 setmanal</strong> (com Ozempic®, Trulicity®, Bydureon BCise®, Mounjaro®, Wegovy®, Rybelsus®, Zepbound®) <strong>alenteixen el buidatge de l'estómac</strong>, de manera que pot trigar més a quedar buit.</p>
<ul><li><strong>Aliments sòlids:</strong> el dejuni ha de ser més llarg que en una persona estàndard. Al nostre centre es recomana estar <strong>24 hores sense sòlids</strong> abans de la cirurgia.</li>
<li><strong>Líquids clars:</strong> continuen permesos fins a aproximadament 2 hores abans, amb un límit de volum raonable entre les 4 i les 2 hores prèvies.</li></ul>
<p>Necessitar un dejuni més llarg <strong>no vol dir que estiguis pitjor</strong>: simplement, aquesta medicació obliga a extremar les precaucions perquè l'estómac estigui realment buit i l'anestèsia sigui més segura.</p>
<h4>Beguda de carbohidrats (opcional)</h4>
<p>Si el teu equip ho autoritza, pots prendre una <strong>beguda rica en carbohidrats que sigui un líquid clar</strong> (tipus Nutricia PreOp® o una barreja de maltodextrina ben dissolta en aigua) fins a 2 hores abans, per reduir la gana i l'ansietat i evitar la pèrdua de múscul (catabolisme) durant el dejuni prolongat de sòlids.</p>
<p>Si a més tens <strong>diabetis</strong>, segueix també les recomanacions de l'apartat de diabetis (ajust d'insulina i medicació), sumant el dejuni prolongat de sòlids pel GLP‑1.</p>
<p>La decisió de suspendre o no el GLP‑1 i els temps exactes de dejuni s'han de prendre <strong>juntament amb el teu equip mèdic</strong>.</p>`,
    },
    {
      id: 'riesgo', match: 'risk',
      title: 'Si tienes embarazo avanzado, reflujo gastroesofágico o una cirugía gástrica previa',
      title_en: 'If you have advanced pregnancy, acid reflux or previous stomach surgery',
      title_ca: 'Si tens embaràs avançat, reflux gastroesofàgic o una cirurgia gàstrica prèvia',
      body: `<p>Algunas situaciones se consideran de <strong>riesgo incrementado</strong> para el ayuno:</p>
<ul><li>Embarazo de más de 20 semanas.</li>
<li>Reflujo gastroesofágico significativo.</li>
<li>Cirugía gástrica previa (bariátrica, por úlcera, por tumores, etc.).</li></ul>
<p>En estos casos el tránsito digestivo suele ser más lento y el riesgo de que el contenido del estómago pase a los pulmones es mayor. Por eso:</p>
<ul><li><strong>Cualquier comida o bebida que no sea un líquido claro:</strong> debe suspenderse con más antelación (habitualmente unas 8 horas antes de la cirugía, si así está indicado).</li>
<li><strong>Líquidos claros:</strong> se permiten hasta unas 2 horas antes de la anestesia, siguiendo las recomendaciones del hospital.</li></ul>
<p>En muchos casos puedes tomar una <strong>bebida rica en carbohidratos</strong> (tipo Nutricia PreOp® o una mezcla de maltodextrina en agua) hasta 2 horas antes, para disminuir el hambre y la ansiedad y proteger tus músculos, siempre que lo haya autorizado tu equipo médico.</p>
<p>Sigue exactamente las instrucciones de tu <strong>anestesista</strong> y de tu <strong>obstetra o cirujano</strong> en estas situaciones.</p>`,
      body_en: `<p>Some situations are considered <strong>increased risk</strong> for fasting:</p>
<ul><li>Pregnancy beyond 20 weeks.</li>
<li>Significant acid reflux (gastro-oesophageal reflux).</li>
<li>Previous stomach surgery (bariatric, ulcer, tumour, etc.).</li></ul>
<p>In these cases digestion tends to be slower and the risk of stomach contents passing into the lungs is higher. Therefore:</p>
<ul><li><strong>Any food or drink that is not a clear liquid:</strong> must be stopped further in advance (usually about 8 hours before surgery, if so indicated).</li>
<li><strong>Clear liquids:</strong> allowed up to about 2 hours before anaesthesia, following your hospital's recommendations.</li></ul>
<p>In many cases you can have a <strong>carbohydrate-rich drink</strong> (such as Nutricia PreOp® or a maltodextrin-in-water mix) up to 2 hours before, to reduce hunger and anxiety and protect your muscles, as long as your medical team has authorised it.</p>
<p>Follow exactly the instructions of your <strong>anaesthetist</strong> and your <strong>obstetrician or surgeon</strong> in these situations.</p>`,
      body_ca: `<p>Algunes situacions es consideren de <strong>risc incrementat</strong> per al dejuni:</p>
<ul><li>Embaràs de més de 20 setmanes.</li>
<li>Reflux gastroesofàgic significatiu.</li>
<li>Cirurgia gàstrica prèvia (bariàtrica, per úlcera, per tumors, etc.).</li></ul>
<p>En aquests casos el trànsit digestiu sol ser més lent i el risc que el contingut de l'estómac passi als pulmons és més gran. Per això:</p>
<ul><li><strong>Qualsevol menjar o beguda que no sigui un líquid clar:</strong> s'ha de suspendre amb més antelació (habitualment unes 8 hores abans de la cirurgia, si així està indicat).</li>
<li><strong>Líquids clars:</strong> es permeten fins a unes 2 hores abans de l'anestèsia, seguint les recomanacions de l'hospital.</li></ul>
<p>En molts casos pots prendre una <strong>beguda rica en carbohidrats</strong> (tipus Nutricia PreOp® o una barreja de maltodextrina en aigua) fins a 2 hores abans, per disminuir la gana i l'ansietat i protegir els teus músculs, sempre que ho hagi autoritzat el teu equip mèdic.</p>
<p>Segueix exactament les instruccions del teu <strong>anestesista</strong> i del teu <strong>obstetra o cirurgià</strong> en aquestes situacions.</p>`,
    },
  ],
  final: {
    title: 'Tu medicación y el equilibrio del ayuno',
    title_en: 'Your medication and the balance of fasting',
    title_ca: "La teva medicació i l'equilibri del dejuni",
    body: `<p><strong>Tu medicación habitual:</strong> por lo general se toma con un pequeño sorbo de agua, salvo que tu médico te haya indicado otra cosa.</p>
<p><strong>Ayunar "de más" tampoco es bueno.</strong> Pasar demasiadas horas sin comer ni beber puede causar:</p>
<ul><li>Cansancio, sensación de debilidad y mareos.</li>
<li>Deshidratación.</li>
<li>Más ansiedad antes de la cirugía.</li>
<li>Una recuperación más lenta después de la operación.</li></ul>
<p>Y si te equivocas o tienes dudas sobre si has ayunado correctamente, tranquilidad: el equipo de anestesia revisará tu situación el día de la intervención y decidirá si es seguro continuar, te explicará los riesgos o reprogramará la cirugía si fuera necesario.</p>
<p><strong>Recuerda:</strong> ante cualquier duda, no intentes compensar por tu cuenta comiendo o dejando de comer más. Llama al hospital o consulta con tu anestesista para recibir instrucciones personalizadas.</p>`,
    body_en: `<p><strong>Your usual medication:</strong> generally taken with a small sip of water, unless your doctor has told you otherwise.</p>
<p><strong>Over-fasting is not good either.</strong> Going too many hours without eating or drinking can cause:</p>
<ul><li>Tiredness, weakness and dizziness.</li>
<li>Dehydration.</li>
<li>More anxiety before surgery.</li>
<li>A slower recovery after the operation.</li></ul>
<p>And if you make a mistake or are unsure whether you have fasted correctly, don't worry: the anaesthesia team will review your situation on the day of the procedure and decide whether it is safe to continue, explain the risks, or reschedule surgery if necessary.</p>
<p><strong>Remember:</strong> if in doubt, do not try to compensate on your own by eating or not eating more. Call the hospital or ask your anaesthetist for personalised instructions.</p>`,
    body_ca: `<p><strong>La teva medicació habitual:</strong> en general es pren amb un petit glop d'aigua, tret que el teu metge t'hagi indicat una altra cosa.</p>
<p><strong>Dejunar "de més" tampoc és bo.</strong> Passar massa hores sense menjar ni beure pot causar:</p>
<ul><li>Cansament, sensació de debilitat i marejos.</li>
<li>Deshidratació.</li>
<li>Més ansietat abans de la cirurgia.</li>
<li>Una recuperació més lenta després de l'operació.</li></ul>
<p>I si t'equivoques o tens dubtes sobre si has dejunat correctament, tranquil·litat: l'equip d'anestèsia revisarà la teva situació el dia de la intervenció i decidirà si és segur continuar, t'explicarà els riscos o reprogramarà la cirurgia si fos necessari.</p>
<p><strong>Recorda:</strong> davant de qualsevol dubte, no intentis compensar pel teu compte menjant o deixant de menjar més. Truca a l'hospital o consulta amb el teu anestesista per rebre instruccions personalitzades.</p>`,
  },
};

// Guía interactiva de ejercicio (prehabilitación física). Contenido educativo;
// no sustituye la valoración de tu equipo médico. Reutiliza el estilo de acordeón
// de las guías (.fasting-block/.fasting-body). Cada ejercicio incluye vídeo de
// técnica (Vimeo) + explicación paso a paso, en ES/EN/CA.
export const EXERCISE_GUIDE = {
  intro: {
    title: 'Ejercicio antes de la cirugía: tu plan de prehabilitación física',
    title_en: 'Exercise before surgery: your physical prehabilitation plan',
    title_ca: 'Exercici abans de la cirurgia: el teu pla de prehabilitació física',
    body: `<p>La <strong>prehabilitación física</strong> consiste en preparar activamente tu cuerpo en las semanas previas a la cirugía para llegar con más fuerza, mejor capacidad cardiorrespiratoria y más reserva funcional. En pocas palabras: cuanto mejor llegues, mejor sueles recuperarte.</p>
<p>La evidencia disponible sugiere que el ejercicio antes de la cirugía <strong>puede reducir complicaciones y acelerar la recuperación</strong>, sobre todo cuando se combina con una buena nutrición y apoyo psicológico. La calidad de los estudios es variable, por lo que el plan debe <strong>individualizarse</strong> a tu situación.</p>
<h4>Los tres bloques de tu entrenamiento</h4>
<p>Un buen plan combina tres tipos de trabajo que se complementan:</p>
<ul><li><strong>Resistencia aeróbica:</strong> caminar es la base. Mejora tu corazón y tus pulmones. <em>(Al menos 3 días por semana.)</em></li>
<li><strong>Fuerza:</strong> con tu propio peso o resistencia ligera (bandas, botellas o mancuernas pequeñas). Preserva la masa muscular y tu funcionalidad. <em>(2-3 días por semana, en días no consecutivos.)</em></li>
<li><strong>Flexibilidad:</strong> estiramientos suaves para mantener la movilidad y reducir la rigidez, sin buscar dolor ni rangos máximos. <em>(A diario o al final de cada sesión.)</em></li></ul>
<p>El orden que mejor funciona en cada sesión es: <strong>calentamiento → bloque aeróbico → bloque de fuerza → vuelta a la calma con estiramientos</strong>.</p>
<p>Puedes hacer los tres bloques en <strong>la misma sesión</strong> (ese es el orden de arriba). El aeróbico puede ser casi diario; la fuerza necesita días de recuperación, así que los días sin fuerza basta con caminar y estirar.</p>
<h4>Principios</h4>
<ul><li><strong>Empieza pronto</strong> y sé constante: idealmente <strong>4-6 semanas antes</strong> de la cirugía, aunque cualquier tiempo suma. La regularidad importa más que la intensidad.</li>
<li><strong>Progresivo y seguro</strong>: sube poco a poco, cuidando la técnica, con descansos si hace falta.</li>
<li><strong>Individualiza:</strong> adapta el plan a tu edad, tus enfermedades, tu dolor y tu forma física de partida. Si eres frágil o muy sedentario, incluso rutinas muy cortas ayudan si son constantes.</li>
<li>El objetivo no es "ponerte en forma" en semanas, sino llegar con <strong>mejor tolerancia al esfuerzo</strong> y menos pérdida funcional.</li>
<li>La constancia gana a la perfección: hacer algo casi cada día ya es útil.</li></ul>
<h4>Antes de empezar</h4>
<p>Consulta con tu equipo médico si tienes enfermedad del corazón o del pulmón, mareos, dolor en el pecho, tensión mal controlada u otras dudas. Pueden ajustar el plan a tu caso.</p>
<h4>Para y consulta si aparece…</h4>
<ul><li>Dolor u opresión en el pecho.</li>
<li>Mareo, sensación de desmayo o palpitaciones.</li>
<li>Falta de aire desproporcionada para el esfuerzo.</li>
<li>Dolor musculoesquelético relevante.</li></ul>`,
    body_en: `<p><strong>Physical prehabilitation</strong> means actively preparing your body in the weeks before surgery so you arrive stronger, with better cardiorespiratory fitness and more functional reserve. In short: the better you arrive, the better you tend to recover.</p>
<p>Available evidence suggests that exercise before surgery <strong>can reduce complications and speed up recovery</strong>, especially when combined with good nutrition and psychological support. Study quality varies, so the plan should be <strong>individualised</strong> to your situation.</p>
<h4>The three building blocks of your training</h4>
<p>A good plan combines three complementary types of work:</p>
<ul><li><strong>Aerobic endurance:</strong> walking is the foundation. It improves your heart and lungs. <em>(At least 3 days a week.)</em></li>
<li><strong>Strength:</strong> using your own body weight or light resistance (bands, bottles or small dumbbells). It preserves muscle mass and function. <em>(2-3 days a week, on non-consecutive days.)</em></li>
<li><strong>Flexibility:</strong> gentle stretching to keep mobility and reduce stiffness, never pushing into pain or maximum ranges. <em>(Daily or at the end of each session.)</em></li></ul>
<p>The sequence that works best in each session is: <strong>warm-up → aerobic block → strength block → cool-down with stretches</strong>.</p>
<p>You can do the three blocks in <strong>the same session</strong> (that's the order above). Aerobic work can be almost daily; strength needs recovery days, so on non-strength days just walking and stretching is enough.</p>
<h4>Principles</h4>
<ul><li><strong>Start early</strong> and be consistent: ideally <strong>4-6 weeks before</strong> surgery, though any amount of time helps. Regularity matters more than intensity.</li>
<li><strong>Progressive and safe</strong>: build up gradually, with good technique, resting when needed.</li>
<li><strong>Individualise:</strong> adapt the plan to your age, conditions, pain and starting fitness. If you are frail or very sedentary, even very short routines help when done consistently.</li>
<li>The goal is not to "get fit" in a few weeks, but to arrive with <strong>better exercise tolerance</strong> and less loss of function.</li>
<li>Consistency beats perfection: doing something almost every day is already useful.</li></ul>
<h4>Before you start</h4>
<p>Check with your medical team if you have heart or lung disease, dizziness, chest pain, poorly controlled blood pressure or other concerns. They can tailor the plan to you.</p>
<h4>Stop and seek advice if you have…</h4>
<ul><li>Chest pain or tightness.</li>
<li>Dizziness, faintness or palpitations.</li>
<li>Breathlessness out of proportion to the effort.</li>
<li>Significant musculoskeletal pain.</li></ul>`,
    body_ca: `<p>La <strong>prehabilitació física</strong> consisteix a preparar activament el teu cos en les setmanes prèvies a la cirurgia per arribar amb més força, millor capacitat cardiorespiratòria i més reserva funcional. En poques paraules: com millor hi arribis, millor sols recuperar-te.</p>
<p>L'evidència disponible suggereix que l'exercici abans de la cirurgia <strong>pot reduir complicacions i accelerar la recuperació</strong>, sobretot quan es combina amb una bona nutrició i suport psicològic. La qualitat dels estudis és variable, per la qual cosa el pla s'ha d'<strong>individualitzar</strong> a la teva situació.</p>
<h4>Els tres blocs del teu entrenament</h4>
<p>Un bon pla combina tres tipus de treball que es complementen:</p>
<ul><li><strong>Resistència aeròbica:</strong> caminar és la base. Millora el cor i els pulmons. <em>(Almenys 3 dies per setmana.)</em></li>
<li><strong>Força:</strong> amb el teu propi pes o resistència lleugera (bandes, ampolles o manuelles petites). Preserva la massa muscular i la funcionalitat. <em>(2-3 dies per setmana, en dies no consecutius.)</em></li>
<li><strong>Flexibilitat:</strong> estiraments suaus per mantenir la mobilitat i reduir la rigidesa, sense buscar dolor ni rangs màxims. <em>(A diari o al final de cada sessió.)</em></li></ul>
<p>L'ordre que millor funciona en cada sessió és: <strong>escalfament → bloc aeròbic → bloc de força → tornada a la calma amb estiraments</strong>.</p>
<p>Pots fer els tres blocs en <strong>la mateixa sessió</strong> (aquest és l'ordre de dalt). L'aeròbic pot ser gairebé diari; la força necessita dies de recuperació, així que els dies sense força n'hi ha prou amb caminar i estirar.</p>
<h4>Principis</h4>
<ul><li><strong>Comença aviat</strong> i sigues constant: idealment <strong>4-6 setmanes abans</strong> de la cirurgia, encara que qualsevol temps suma. La regularitat importa més que la intensitat.</li>
<li><strong>Progressiu i segur</strong>: puja a poc a poc, cuidant la tècnica, amb descansos si cal.</li>
<li><strong>Individualitza:</strong> adapta el pla a la teva edat, malalties, dolor i forma física de partida. Si ets fràgil o molt sedentari, fins i tot rutines molt curtes ajuden si són constants.</li>
<li>L'objectiu no és "posar-te en forma" en setmanes, sinó arribar amb <strong>millor tolerància a l'esforç</strong> i menys pèrdua funcional.</li>
<li>La constància guanya a la perfecció: fer alguna cosa gairebé cada dia ja és útil.</li></ul>
<h4>Abans de començar</h4>
<p>Consulta amb el teu equip mèdic si tens malaltia del cor o del pulmó, marejos, dolor al pit, tensió mal controlada o altres dubtes. Poden ajustar el pla al teu cas.</p>
<h4>Atura't i consulta si apareix…</h4>
<ul><li>Dolor o opressió al pit.</li>
<li>Mareig, sensació de desmai o palpitacions.</li>
<li>Falta d'aire desproporcionada per a l'esforç.</li>
<li>Dolor musculoesquelètic rellevant.</li></ul>`,
  },
  blocks: [
    {
      id: 'elegir', open: true,
      title: '¿En casa o en el gimnasio? Cómo elegir',
      title_en: 'At home or at the gym? How to choose',
      title_ca: 'A casa o al gimnàs? Com triar',
      body: `<p>Las dos opciones son válidas y puedes combinarlas. Lo importante es que sea <strong>sostenible</strong>: la mejor rutina es la que vas a cumplir.</p>
<p><strong>En casa</strong> ganas comodidad y ahorro: no hay desplazamientos ni horarios, y basta con caminar, una silla, una banda y tu propio peso. Es la opción más fácil de mantener; su límite es que hay menos variedad y cuesta más subir la carga de forma progresiva.</p>
<p><strong>En el gimnasio</strong> tienes más máquinas, más carga y más control del movimiento, además de posible supervisión profesional que ayuda a la motivación. A cambio exige más tiempo, desplazamiento y coste.</p>
<p>Para prehabilitación <strong>ninguna es "mejor" en abstracto</strong>: depende de tu estado físico, tu dolor, tu tiempo y tu experiencia previa. Si eres frágil o sedentario, la casa suele bastar; si ya entrenas o buscas más progresión, el gimnasio puede ayudar.</p>
<table class="med-table"><thead><tr><th>Tu situación</th><th>Mejor opción</th></tr></thead><tbody>
<tr><td>Poco tiempo o movilidad limitada</td><td>En casa</td></tr>
<tr><td>Fragilidad o baja tolerancia al esfuerzo</td><td>En casa (plan mínimo viable)</td></tr>
<tr><td>Buena capacidad y acceso a un centro</td><td>Gimnasio</td></tr>
<tr><td>Prefieres supervisión y variedad</td><td>Gimnasio</td></tr>
</tbody></table>`,
      body_en: `<p>Both options are valid and you can combine them. What matters is that it is <strong>sustainable</strong>: the best routine is the one you will actually keep.</p>
<p><strong>At home</strong> you gain comfort and savings: no travel or fixed schedules, and walking, a chair, a band and your own body weight are enough. It's the easiest to sustain; the trade-off is less variety and it's harder to increase the load gradually.</p>
<p><strong>At the gym</strong> you have more machines, more load and more control of the movement, plus possible professional supervision that helps motivation. In return it takes more time, travel and cost.</p>
<p>For prehabilitation <strong>neither is "better" in the abstract</strong>: it depends on your fitness, your pain, your time and your previous experience. If you are frail or sedentary, home is usually enough; if you already train or want more progression, the gym can help.</p>
<table class="med-table"><thead><tr><th>Your situation</th><th>Best option</th></tr></thead><tbody>
<tr><td>Little time or limited mobility</td><td>At home</td></tr>
<tr><td>Frailty or low exercise tolerance</td><td>At home (minimum viable plan)</td></tr>
<tr><td>Good capacity and access to a gym</td><td>Gym</td></tr>
<tr><td>You prefer supervision and variety</td><td>Gym</td></tr>
</tbody></table>`,
      body_ca: `<p>Les dues opcions són vàlides i les pots combinar. L'important és que sigui <strong>sostenible</strong>: la millor rutina és la que compliràs.</p>
<p><strong>A casa</strong> hi guanyes comoditat i estalvi: no hi ha desplaçaments ni horaris, i n'hi ha prou amb caminar, una cadira, una banda i el teu propi pes. És l'opció més fàcil de mantenir; el límit és que hi ha menys varietat i costa més pujar la càrrega de manera progressiva.</p>
<p><strong>Al gimnàs</strong> tens més màquines, més càrrega i més control del moviment, a més de possible supervisió professional que ajuda la motivació. A canvi, exigeix més temps, desplaçament i cost.</p>
<p>Per a prehabilitació <strong>cap no és "millor" en abstracte</strong>: depèn del teu estat físic, el teu dolor, el teu temps i la teva experiència prèvia. Si ets fràgil o sedentari, la casa sol bastar; si ja entrenes o busques més progressió, el gimnàs pot ajudar.</p>
<table class="med-table"><thead><tr><th>La teva situació</th><th>Millor opció</th></tr></thead><tbody>
<tr><td>Poc temps o mobilitat limitada</td><td>A casa</td></tr>
<tr><td>Fragilitat o baixa tolerància a l'esforç</td><td>A casa (pla mínim viable)</td></tr>
<tr><td>Bona capacitat i accés a un centre</td><td>Gimnàs</td></tr>
<tr><td>Prefereixes supervisió i varietat</td><td>Gimnàs</td></tr>
</tbody></table>`,
    },
    {
      id: 'casa', open: true,
      title: '🏠 Opción en casa',
      title_en: '🏠 At-home option',
      title_ca: '🏠 Opció a casa',
      body: `<p>Pensada para hacer en casa, con poco material: una <strong>silla estable</strong>, una <strong>botella de agua</strong>, una <strong>pared</strong> y, si puedes, una <strong>banda elástica</strong>.</p>
<h4>Tu semana</h4>
<ul><li><strong>Aeróbico (caminar):</strong> al menos 3 días por semana; si puedes, casi a diario.</li>
<li><strong>Fuerza:</strong> 2-3 días por semana, en días no consecutivos (deja recuperación entre ellos).</li>
<li><strong>Flexibilidad:</strong> al final de cada sesión o a diario.</li>
<li><strong>Duración:</strong> 30-45 min por sesión.</li>
<li><strong>Intensidad:</strong> moderada ("me cuesta, pero puedo mantenerlo").</li></ul>
<p>Puedes combinarlo todo en la misma sesión. Un ejemplo de semana:</p>
<table class="med-table"><thead><tr><th>Día</th><th>Qué hacer</th></tr></thead><tbody>
<tr><td>Lun · Mié · Vie</td><td>Caminar + fuerza + estiramientos</td></tr>
<tr><td>Mar · Jue · Sáb</td><td>Caminar + estiramientos</td></tr>
<tr><td>Dom</td><td>Descanso o paseo suave</td></tr>
</tbody></table>
<h4>Ejemplo de sesión</h4>
<ul><li><strong>Calentamiento (5 min):</strong> caminar suave por casa y mover hombros, tobillos y cuello.</li>
<li><strong>Aeróbico (15-20 min):</strong> caminar a ritmo ligero-moderado. Si partes de sedentarismo, empieza con 5-10 min y progresa poco a poco hasta unos 30 min (ver "Aeróbico: caminar" en Ejercicios paso a paso).</li>
<li><strong>Fuerza (10-15 min):</strong> sentadilla a la silla, elevación de talones, flexiones en pared y remo con banda o botellas (2-3 series de 8-12 repeticiones). Tienes el vídeo de cada ejercicio en el apartado "Ejercicios paso a paso".</li>
<li><strong>Flexibilidad (5 min):</strong> estiramientos suaves de gemelos, isquiotibiales, pecho, hombros, cuello y tronco; mantén cada uno 20-30 s, sin rebotes ni dolor. Tienes la técnica en "Ejercicios paso a paso".</li>
<li><strong>Respiración (3-5 min):</strong> termina con unas respiraciones lentas. Tienes los ejercicios completos en la guía «Entrenamiento respiratorio».</li></ul>
<h4>Progresión</h4>
<ul><li><strong>Semana 1:</strong> prioriza constancia y técnica.</li>
<li><strong>Semana 2:</strong> añade 5 min de caminata o 1 serie más en dos ejercicios.</li>
<li><strong>Semana 3 en adelante:</strong> sube un poco el ritmo o la resistencia, sin perder calidad del movimiento.</li></ul>`,
      body_en: `<p>Designed for home, with little equipment: a <strong>stable chair</strong>, a <strong>water bottle</strong>, a <strong>wall</strong> and, if possible, a <strong>resistance band</strong>.</p>
<h4>Your week</h4>
<ul><li><strong>Aerobic (walking):</strong> at least 3 days a week; almost daily if you can.</li>
<li><strong>Strength:</strong> 2-3 days a week, on non-consecutive days (leave recovery in between).</li>
<li><strong>Flexibility:</strong> at the end of each session or daily.</li>
<li><strong>Duration:</strong> 30-45 min per session.</li>
<li><strong>Intensity:</strong> moderate ("it's hard, but I can keep going").</li></ul>
<p>You can combine everything in the same session. An example week:</p>
<table class="med-table"><thead><tr><th>Day</th><th>What to do</th></tr></thead><tbody>
<tr><td>Mon · Wed · Fri</td><td>Walk + strength + stretches</td></tr>
<tr><td>Tue · Thu · Sat</td><td>Walk + stretches</td></tr>
<tr><td>Sun</td><td>Rest or gentle walk</td></tr>
</tbody></table>
<h4>Sample session</h4>
<ul><li><strong>Warm-up (5 min):</strong> walk gently around the house and move shoulders, ankles and neck.</li>
<li><strong>Aerobic (15-20 min):</strong> walk at a light-to-moderate pace. If very deconditioned, start with 5-10 min and build up gradually to about 30 min (see "Aerobic: walking" in Step-by-step exercises).</li>
<li><strong>Strength (10-15 min):</strong> sit-to-stand, calf raises, wall push-ups and rows with a band or bottles (2-3 sets of 8-12 reps). You'll find a video for each in the "Step-by-step exercises" section.</li>
<li><strong>Flexibility (5 min):</strong> gentle stretches for calves, hamstrings, chest, shoulders, neck and trunk; hold each for 20-30 s, no bouncing, no pain. You'll find the technique in "Step-by-step exercises".</li>
<li><strong>Breathing (3-5 min):</strong> finish with a few slow breaths. You'll find the full exercises in the "Breathing training" guide.</li></ul>
<h4>Progression</h4>
<ul><li><strong>Week 1:</strong> prioritise consistency and technique.</li>
<li><strong>Week 2:</strong> add 5 min of walking or 1 extra set on two exercises.</li>
<li><strong>Week 3 onwards:</strong> raise the pace or resistance a little, without losing movement quality.</li></ul>`,
      body_ca: `<p>Pensada per fer a casa, amb poc material: una <strong>cadira estable</strong>, una <strong>ampolla d'aigua</strong>, una <strong>paret</strong> i, si pots, una <strong>banda elàstica</strong>.</p>
<h4>La teva setmana</h4>
<ul><li><strong>Aeròbic (caminar):</strong> almenys 3 dies per setmana; si pots, gairebé a diari.</li>
<li><strong>Força:</strong> 2-3 dies per setmana, en dies no consecutius (deixa recuperació entremig).</li>
<li><strong>Flexibilitat:</strong> al final de cada sessió o a diari.</li>
<li><strong>Durada:</strong> 30-45 min per sessió.</li>
<li><strong>Intensitat:</strong> moderada ("em costa, però ho puc mantenir").</li></ul>
<p>Pots combinar-ho tot en la mateixa sessió. Un exemple de setmana:</p>
<table class="med-table"><thead><tr><th>Dia</th><th>Què fer</th></tr></thead><tbody>
<tr><td>Dl · Dc · Dv</td><td>Caminar + força + estiraments</td></tr>
<tr><td>Dt · Dj · Ds</td><td>Caminar + estiraments</td></tr>
<tr><td>Dg</td><td>Descans o passeig suau</td></tr>
</tbody></table>
<h4>Exemple de sessió</h4>
<ul><li><strong>Escalfament (5 min):</strong> camina suau per casa i mou espatlles, turmells i coll.</li>
<li><strong>Aeròbic (15-20 min):</strong> camina a ritme lleuger-moderat. Si parteixes del sedentarisme, comença amb 5-10 min i progressa a poc a poc fins a uns 30 min (vegeu "Aeròbic: caminar" a Exercicis pas a pas).</li>
<li><strong>Força (10-15 min):</strong> aixecar-se de la cadira, elevació de talons, flexions a la paret i rem amb banda o ampolles (2-3 sèries de 8-12 repeticions). Tens el vídeo de cada exercici a l'apartat "Exercicis pas a pas".</li>
<li><strong>Flexibilitat (5 min):</strong> estiraments suaus de bessons, isquiotibials, pit, espatlles, coll i tronc; mantén cadascun 20-30 s, sense rebots ni dolor. Tens la tècnica a "Exercicis pas a pas".</li>
<li><strong>Respiració (3-5 min):</strong> acaba amb unes respiracions lentes. Tens els exercicis complets a la guia «Entrenament respiratori».</li></ul>
<h4>Progressió</h4>
<ul><li><strong>Setmana 1:</strong> prioritza constància i tècnica.</li>
<li><strong>Setmana 2:</strong> afegeix 5 min de caminada o 1 sèrie més en dos exercicis.</li>
<li><strong>Setmana 3 en endavant:</strong> puja una mica el ritme o la resistència, sense perdre qualitat del moviment.</li></ul>`,
    },
    {
      id: 'gimnasio', open: false,
      title: '🏋️ Opción en gimnasio',
      title_en: '🏋️ Gym option',
      title_ca: '🏋️ Opció al gimnàs',
      body: `<p>Para quien tiene mejor condición o prefiere supervisión y más material. Permite ajustar mejor la carga y la progresión.</p>
<h4>Tu semana</h4>
<ul><li><strong>Aeróbico:</strong> al menos 3 días por semana.</li>
<li><strong>Fuerza:</strong> 2-3 días por semana, en días no consecutivos.</li>
<li><strong>Flexibilidad:</strong> al final de cada sesión.</li>
<li><strong>Duración:</strong> 45-60 min por sesión.</li>
<li><strong>Intensidad:</strong> moderada, con progresión según tolerancia.</li></ul>
<h4>Ejemplo de sesión</h4>
<ul><li><strong>Calentamiento (8-10 min):</strong> cinta a baja velocidad o bicicleta, y movilidad articular.</li>
<li><strong>Aeróbico (15-20 min):</strong> cinta, bicicleta o elíptica a un ritmo que te permita hablar frases cortas sin jadear ("test del habla").</li>
<li><strong>Fuerza (20-25 min):</strong> prensa o sentadilla asistida, remo sentado y press de pecho (2-3 series de 8-12). Si tienes experiencia y no hay contraindicaciones, <strong>bisagra de cadera</strong> con carga ligera: es el mismo movimiento que el <strong>peso muerto</strong> (o <em>deadlift</em>, su nombre más habitual en el gimnasio) — la bisagra de cadera es el gesto sin carga y el peso muerto, ese mismo gesto añadiendo peso. Añade trabajo de core suave y control postural.</li>
<li><strong>Flexibilidad y vuelta a la calma (5-10 min):</strong> caminar suave, estiramientos de los grupos musculares trabajados (mantén cada uno 20-30 s, sin dolor) y unas respiraciones lentas y tranquilas.</li></ul>`,
      body_en: `<p>For those with better fitness or who prefer supervision and more equipment. It allows better load adjustment and progression.</p>
<h4>Your week</h4>
<ul><li><strong>Aerobic:</strong> at least 3 days a week.</li>
<li><strong>Strength:</strong> 2-3 days a week, on non-consecutive days.</li>
<li><strong>Flexibility:</strong> at the end of each session.</li>
<li><strong>Duration:</strong> 45-60 min per session.</li>
<li><strong>Intensity:</strong> moderate, progressing as tolerated.</li></ul>
<h4>Sample session</h4>
<ul><li><strong>Warm-up (8-10 min):</strong> treadmill at low speed or bike, plus joint mobility.</li>
<li><strong>Aerobic (15-20 min):</strong> treadmill, bike or elliptical at a pace that lets you speak short sentences without gasping (the "talk test").</li>
<li><strong>Strength (20-25 min):</strong> leg press or assisted squat, seated row and chest press (2-3 sets of 8-12). If experienced and with no contraindications, a light-load <strong>hip hinge</strong>: it's the same movement as the <strong>deadlift</strong> (the more common gym name) — the hip hinge is the pattern without load and the deadlift is that same pattern with added weight. Add gentle core work and postural control.</li>
<li><strong>Flexibility and cool-down (5-10 min):</strong> gentle walking, stretches for the muscle groups you worked (hold each for 20-30 s, no pain) and a few slow, calm breaths.</li></ul>`,
      body_ca: `<p>Per a qui té millor condició o prefereix supervisió i més material. Permet ajustar millor la càrrega i la progressió.</p>
<h4>La teva setmana</h4>
<ul><li><strong>Aeròbic:</strong> almenys 3 dies per setmana.</li>
<li><strong>Força:</strong> 2-3 dies per setmana, en dies no consecutius.</li>
<li><strong>Flexibilitat:</strong> al final de cada sessió.</li>
<li><strong>Durada:</strong> 45-60 min per sessió.</li>
<li><strong>Intensitat:</strong> moderada, amb progressió segons tolerància.</li></ul>
<h4>Exemple de sessió</h4>
<ul><li><strong>Escalfament (8-10 min):</strong> cinta a baixa velocitat o bicicleta, i mobilitat articular.</li>
<li><strong>Aeròbic (15-20 min):</strong> cinta, bicicleta o el·líptica a un ritme que et permeti dir frases curtes sense esbufegar (el "test de la parla").</li>
<li><strong>Força (20-25 min):</strong> premsa o sentadilla assistida, rem assegut i press de pit (2-3 sèries de 8-12). Si tens experiència i no hi ha contraindicacions, <strong>frontissa de maluc</strong> amb càrrega lleugera: és el mateix moviment que el <strong>pes mort</strong> (o <em>deadlift</em>, el nom més habitual al gimnàs) — la frontissa de maluc és el gest sense càrrega i el pes mort, aquest mateix gest afegint-hi pes. Afegeix treball de core suau i control postural.</li>
<li><strong>Flexibilitat i tornada a la calma (5-10 min):</strong> caminar suau, estiraments dels grups musculars treballats (mantén cadascun 20-30 s, sense dolor) i unes respiracions lentes i tranquil·les.</li></ul>`,
    },
    {
      id: 'ejercicios', open: false,
      title: '▶️ Ejercicios paso a paso (con vídeo)',
      title_en: '▶️ Step-by-step exercises (with video)',
      title_ca: '▶️ Exercicis pas a pas (amb vídeo)',
      body: `<p>Cómo hacer cada parte del entrenamiento. Ve a tu ritmo, cuida la postura y detente si algo duele. Los ejercicios de fuerza y flexibilidad incluyen un vídeo con la técnica.</p>
<h4>Aeróbico: caminar</h4>
<p>Caminar es la base del programa: mejora el corazón, los pulmones y tu resistencia. Es la opción más segura y accesible (también sirve la bicicleta estática o la cinta si ya las usas).</p>
<p><strong>Cuánto:</strong> al menos 3 días por semana, progresando poco a poco. Si partes de sedentarismo, empieza con 5-10 min y aumenta hasta unos 30 min al día (o lo que toleres bien). Si te cuesta, divídelo en bloques cortos (por ejemplo 10 min por la mañana, 10 al mediodía y 10 por la tarde).</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Empieza con 5 min suaves para calentar.</li>
<li>Camina a ritmo ligero-moderado, notando que respiras algo más rápido.</li>
<li>Termina con 3-5 min de marcha lenta para recuperar.</li></ol>
<p><strong>Intensidad — la "prueba del habla":</strong> vas bien si puedes decir frases completas pero notas algo más de esfuerzo que en reposo. Si te quedas sin aire, baja el ritmo; si no notas ningún cambio, súbelo un poco.</p>
<p><strong>Consejos:</strong> usa calzado cómodo, evita caminar justo después de comer, hidrátate si hace calor y, si no puedes salir, camina por casa o por el pasillo. En personas frágiles o con dolor, es mejor hacer sesiones cortas y constantes que demasiado de golpe.</p>
<h4>Fuerza y equilibrio</h4>
<p>Haz este bloque 2-3 días por semana, en días no consecutivos. Cada ejercicio incluye un vídeo con la técnica.</p>
<h4>1. Sentadilla a la silla</h4>
<p><strong>Para qué sirve:</strong> fortalece muslos y glúteos; es el gesto de levantarte del sofá, del inodoro o de la cama, clave para tu autonomía tras la cirugía.</p>
<p><strong>Nivel 1 · Levantarse de la silla</strong></p>
<ol><li>Siéntate al borde de una silla estable, pies al ancho de las caderas y algo atrasados.</li>
<li>Inclina el tronco adelante ("la nariz sobre los pies").</li>
<li>Empuja con los talones y ponte de pie, sin impulso brusco.</li>
<li>Baja despacio (3-4 s) hasta rozar la silla y repite.</li></ol>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254653" title="Levantarse de la silla" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<p><strong>Nivel 2 · Sentadilla con silla</strong> (cuando el nivel 1 te resulte fácil)</p>
<ol><li>De pie delante de la silla, pies al ancho de las caderas.</li>
<li>Lleva las caderas atrás y baja flexionando las rodillas, como si fueras a sentarte.</li>
<li>Roza el asiento sin dejarte caer y sube empujando con los talones.</li></ol>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254666" title="Sentadilla con silla" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<p><strong>Cuida la técnica:</strong> rodillas alineadas con los pies (que no se metan hacia dentro), espalda neutra y talones apoyados. Usa las manos en los muslos o reposabrazos solo si lo necesitas.</p>
<p><strong>Series:</strong> 2-3 series de 8-10 repeticiones, con ~1 min de descanso.</p>
<h4>2. Elevación de talones</h4>
<p><strong>Para qué sirve:</strong> fortalece las pantorrillas, mejora el equilibrio y favorece el retorno de la sangre de las piernas.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>De pie, con las manos apoyadas en una silla o pared.</li>
<li>Sube lentamente sobre las puntas de los pies todo lo que puedas.</li>
<li>Mantén 1 s arriba y baja despacio y controlado.</li></ol>
<p><strong>Cuida la técnica:</strong> no rebotes, mantén el cuerpo erguido y el peso repartido en ambos pies.</p>
<p><strong>Series:</strong> 2-3 series de 10-15 repeticiones.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254652" title="Elevación de talones" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>3. Flexiones en pared</h4>
<p><strong>Para qué sirve:</strong> fortalece pecho, hombros y brazos de forma suave, sin cargar las articulaciones.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Frente a la pared, apoya las manos a la altura del pecho, algo más anchas que los hombros.</li>
<li>Da un paso atrás para inclinarte, manteniendo el cuerpo recto.</li>
<li>Flexiona los codos acercando el pecho a la pared.</li>
<li>Empuja para volver. Cuanto más atrás coloques los pies, más difícil.</li></ol>
<p><strong>Cuida la técnica:</strong> cuerpo en línea (no saques la cadera), codos a unos 45°, cuello relajado.</p>
<p><strong>Series:</strong> 2-3 series de 8-12 repeticiones.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254676" title="Flexiones en pared" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>4. Remo con banda elástica en el suelo</h4>
<p><strong>Para qué sirve:</strong> fortalece la espalda y mejora la postura, contrarrestando la tendencia a encorvarse.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Sentado en el suelo con las piernas estiradas, pasa la banda por las plantas de los pies y sujeta un extremo en cada mano.</li>
<li>Espalda recta y hombros bajos.</li>
<li>Tira de la banda llevando los codos hacia atrás, pegados al cuerpo, juntando los omóplatos.</li>
<li>Vuelve despacio, controlando la banda.</li></ol>
<p><strong>Cuida la técnica:</strong> no encorves la espalda; el movimiento nace de juntar las escápulas, no de tirar solo con las manos; hombros lejos de las orejas.</p>
<p><strong>Series:</strong> 2-3 series de 8-12 repeticiones.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254665" title="Remo con banda en el suelo" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>5. Apertura de hombros con banda (band pull-apart)</h4>
<p><strong>Para qué sirve:</strong> fortalece la espalda alta (deltoides posterior, romboides y trapecio medio) y mejora la postura de los hombros. El motor del movimiento es la <strong>retracción escapular</strong> (juntar los omóplatos), no la fuerza de las manos.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>De pie, pies al ancho de la cadera, rodillas con una flexión mínima y abdomen firme.</li>
<li>Sujeta la banda con las palmas hacia abajo (o mirándose entre sí) a la anchura de los hombros.</li>
<li>Extiende los brazos frente a ti a la altura del pecho, con los hombros bajos y lejos de las orejas.</li>
<li>Junta los omóplatos hacia atrás y abajo mientras abres los brazos hacia los lados, en cruz.</li>
<li>Abre hasta que la banda roce tu pecho, sin que las manos suban por encima de la línea de los hombros.</li>
<li>Regresa al frente de forma lenta y controlada, frenando la banda.</li></ol>
<p><strong>Cuida la técnica:</strong> no subas los brazos por encima de la horizontal (protege el cuello); el trabajo sale de la espalda, no de las manos.</p>
<p><strong>Series:</strong> 2-3 series de 10-15 repeticiones.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254651" title="Apertura de hombros con banda" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>6. Puente de glúteos</h4>
<p><strong>Para qué sirve:</strong> fortalece glúteos, zona lumbar y core tumbado; ayuda al gesto de girarte y levantarte de la cama tras la cirugía.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Túmbate boca arriba, rodillas flexionadas y pies apoyados al ancho de las caderas; brazos a los lados.</li>
<li>Aprieta los glúteos y eleva la cadera hasta alinear rodillas, caderas y hombros.</li>
<li>Mantén 1-2 s arriba sin arquear en exceso la zona lumbar.</li>
<li>Baja despacio.</li></ol>
<p><strong>Cuida la técnica:</strong> empuja con los talones; el trabajo es del glúteo y el abdomen (no de la lumbar); no subas más de la cuenta.</p>
<p><strong>Series:</strong> 2-3 series de 10-15 repeticiones.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254662" title="Puente de glúteos" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>7. Equilibrio sobre una pierna</h4>
<p><strong>Para qué sirve:</strong> mejora el equilibrio y reduce el riesgo de caídas, algo clave antes y después de la cirugía.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Colócate junto a una encimera, silla o pared, con un apoyo firme al alcance de la mano.</li>
<li>Levanta un pie del suelo y mantén el equilibrio sobre la otra pierna 10-20 s.</li>
<li>Cambia de pierna. Para progresar, reduce poco a poco el apoyo de la mano.</li></ol>
<p><strong>Cuida la técnica:</strong> mira a un punto fijo, ten SIEMPRE un apoyo cerca y hazlo acompañado si te da inseguridad.</p>
<p><strong>Series:</strong> 2-3 repeticiones por pierna.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254650" title="Equilibrio sobre una pierna" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>Flexibilidad</h4>
<p>Haz los estiramientos al final de la sesión, con el músculo caliente. Mantén cada uno 20-30 s con un movimiento lento y controlado, respirando tranquilo, sin rebotes y sin llegar al dolor.</p>
<h4>8. Estiramiento de gemelos con apoyo en la pared</h4>
<p><strong>Para qué sirve:</strong> mantiene la flexibilidad del tobillo y la pantorrilla; complementa las elevaciones de talones y el caminar.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>De pie frente a la pared, apoya las manos a la altura del pecho.</li>
<li>Coloca una pierna delante y la otra estirada detrás, con el talón de atrás bien apoyado en el suelo.</li>
<li>Lleva el cuerpo suavemente hacia la pared hasta notar el estiramiento en la pantorrilla de la pierna de atrás.</li>
<li>Mantén 20-30 s y cambia de pierna.</li></ol>
<p><strong>Cuida la técnica:</strong> el talón de atrás siempre apoyado; sin rebotes ni dolor.</p>
<p><strong>Series:</strong> 2-3 por pierna.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209282431" title="Estiramiento de gemelos en la pared" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>9. Estiramiento de isquiotibiales de pie</h4>
<p><strong>Para qué sirve:</strong> mantiene la flexibilidad de la parte posterior del muslo, útil para caminar y agacharte.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>De pie, adelanta una pierna y deja la otra ligeramente flexionada detrás para darte estabilidad.</li>
<li>La pierna de delante queda estirada, con el talón en el suelo y la punta del pie hacia arriba.</li>
<li>Con la espalda recta y los hombros relajados, inclínate hacia delante desde las caderas (no doblando la espalda).</li>
<li>Desliza las manos por el muslo o apóyalas justo por encima de la rodilla hasta notar una tensión moderada detrás del muslo.</li>
<li>Mantén 20-30 s y cambia de pierna.</li></ol>
<p><strong>Cuida la técnica:</strong> dobla desde la cadera con la columna neutra; nunca redondees la espalda.</p>
<p><strong>Series:</strong> 2-3 por pierna.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209285838" title="Estiramiento de isquiotibiales de pie" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>10. Estiramiento de pectoral en la puerta</h4>
<p><strong>Para qué sirve:</strong> abre el pecho y la parte delantera del hombro; compensa la postura encorvada y complementa el remo y la apertura con banda.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Dobla el codo a 90° y apoya el antebrazo en el marco de una puerta o en la pared, con los dedos apuntando hacia arriba.</li>
<li>Inclínate suavemente hacia delante hasta notar el estiramiento en la parte delantera del hombro, el brazo y el pecho.</li>
<li>Mantén 20-30 s y cambia de brazo.</li></ol>
<p><strong>Cuida la técnica:</strong> estiramiento cómodo, nunca doloroso; hombros bajos y cuello relajado.</p>
<p><strong>Series:</strong> 2-3 por brazo.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209286520" title="Estiramiento de pectoral" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>11. Estiramiento cruzado de hombro</h4>
<p><strong>Para qué sirve:</strong> da movilidad a la parte posterior del hombro.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Sentado o de pie, lleva un brazo estirado por delante del pecho.</li>
<li>Sujétalo suavemente con el otro brazo y acércalo al pecho, sin forzar.</li>
<li>Mantén el tronco erguido y los hombros bajos (sin encogerlos).</li>
<li>Mantén 20-30 s y cambia de brazo.</li></ol>
<p><strong>Cuida la técnica:</strong> no eleves los hombros; acerca el brazo solo hasta notar una tensión cómoda.</p>
<p><strong>Series:</strong> 2-3 por brazo.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209284734" title="Estiramiento cruzado de hombro" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>12. Flexión lateral de cuello</h4>
<p><strong>Para qué sirve:</strong> alivia la tensión del cuello y los hombros.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Sentado o de pie, con la postura relajada.</li>
<li>Lleva suavemente una oreja hacia el hombro del mismo lado, sin levantar el hombro contrario.</li>
<li>Mantén unos segundos y vuelve despacio al centro.</li>
<li>Repite hacia el otro lado.</li></ol>
<p><strong>Cuida la técnica:</strong> movimiento suave y controlado, respiración tranquila; no fuerces.</p>
<p><strong>Series:</strong> 2-3 por lado.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209282429" title="Flexión lateral de cuello" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>13. Rotación de tronco sentado</h4>
<p><strong>Para qué sirve:</strong> mejora la movilidad de la columna y la espalda.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Siéntate en una silla con los pies apoyados en el suelo y la pelvis quieta.</li>
<li>Gira suavemente el tronco hacia un lado y luego hacia el otro.</li>
<li>Mantén la espalda erguida y los hombros relajados.</li></ol>
<p><strong>Cuida la técnica:</strong> movimiento lento, pequeño y controlado; la pelvis no gira, solo el tronco.</p>
<p><strong>Series:</strong> 5-10 giros suaves a cada lado.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209282427" title="Rotación de tronco sentado" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_en: `<p>How to do each part of the training. Go at your own pace, mind your posture and stop if anything hurts. The strength and flexibility exercises include a technique video.</p>
<h4>Aerobic: walking</h4>
<p>Walking is the foundation of the programme: it improves your heart, lungs and stamina. It's the safest, most accessible option (a stationary bike or treadmill also work if you already use them).</p>
<p><strong>How much:</strong> at least 3 days a week, building up gradually. If you're starting from a sedentary life, begin with 5-10 min and increase to about 30 min a day (or as much as you tolerate well). If it's hard, split it into short blocks (for example 10 min in the morning, 10 at midday and 10 in the afternoon).</p>
<p><strong>How to do it:</strong></p>
<ol><li>Start with 5 gentle minutes to warm up.</li>
<li>Walk at a light-to-moderate pace, noticing you breathe a little faster.</li>
<li>Finish with 3-5 min of slow walking to recover.</li></ol>
<p><strong>Intensity — the "talk test":</strong> you're on track if you can say full sentences but feel a bit more effort than at rest. If you're gasping, slow down; if you notice no change, pick it up a little.</p>
<p><strong>Tips:</strong> wear comfortable, safe shoes, avoid walking right after eating, stay hydrated in the heat, and if you can't go out, walk around the house or hallway. For frail people or those in pain, short, consistent sessions beat doing too much at once.</p>
<h4>Strength and balance</h4>
<p>Do this block 2-3 days a week, on non-consecutive days. Each exercise includes a technique video.</p>
<h4>1. Chair squat</h4>
<p><strong>What it's for:</strong> strengthens thighs and glutes; it's the movement of getting up from the sofa, the toilet or the bed, key for your independence after surgery.</p>
<p><strong>Level 1 · Sit-to-stand</strong></p>
<ol><li>Sit on the edge of a stable chair, feet hip-width apart and slightly back.</li>
<li>Lean your trunk forward ("nose over toes").</li>
<li>Push through your heels and stand up, without jerking.</li>
<li>Lower slowly (3-4 s) until you touch the chair and repeat.</li></ol>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254653" title="Sit-to-stand" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<p><strong>Level 2 · Squat to chair</strong> (once level 1 feels easy)</p>
<ol><li>Stand in front of the chair, feet hip-width apart.</li>
<li>Send your hips back and bend your knees, as if to sit.</li>
<li>Touch the seat without dropping onto it and stand up pushing through your heels.</li></ol>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254666" title="Squat to chair" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<p><strong>Mind your technique:</strong> knees in line with your feet (don't let them cave in), neutral back and heels down. Use your hands on your thighs or armrests only if needed.</p>
<p><strong>Sets:</strong> 2-3 sets of 8-10 reps, ~1 min rest.</p>
<h4>2. Calf raises</h4>
<p><strong>What it's for:</strong> strengthens calves, improves balance and helps blood return from the legs.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Standing, holding a chair or wall.</li>
<li>Slowly rise onto the balls of your feet as high as you can.</li>
<li>Hold 1 s at the top and lower slowly and controlled.</li></ol>
<p><strong>Mind your technique:</strong> don't bounce, keep your body upright and your weight even on both feet.</p>
<p><strong>Sets:</strong> 2-3 sets of 10-15 reps.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254652" title="Calf raises" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>3. Wall push-ups</h4>
<p><strong>What it's for:</strong> strengthens chest, shoulders and arms gently, without loading the joints.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Facing the wall, place your hands at chest height, a little wider than your shoulders.</li>
<li>Step back to lean, keeping your body straight.</li>
<li>Bend your elbows, bringing your chest towards the wall.</li>
<li>Push back to the start. The further back your feet, the harder it is.</li></ol>
<p><strong>Mind your technique:</strong> body in a straight line (don't stick your hips out), elbows about 45°, neck relaxed.</p>
<p><strong>Sets:</strong> 2-3 sets of 8-12 reps.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254676" title="Wall push-ups" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>4. Floor row with a resistance band</h4>
<p><strong>What it's for:</strong> strengthens your back and improves posture, countering the tendency to hunch.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Sitting on the floor with legs extended, loop the band around the soles of your feet and hold one end in each hand.</li>
<li>Back straight, shoulders down.</li>
<li>Pull the band driving your elbows back, close to your body, squeezing your shoulder blades together.</li>
<li>Return slowly, controlling the band.</li></ol>
<p><strong>Mind your technique:</strong> don't hunch; the movement comes from squeezing the shoulder blades, not just pulling with the hands; shoulders away from the ears.</p>
<p><strong>Sets:</strong> 2-3 sets of 8-12 reps.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254665" title="Floor band row" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>5. Band pull-apart (shoulder opening)</h4>
<p><strong>What it's for:</strong> strengthens the upper back (rear deltoid, rhomboids and mid-trapezius) and improves shoulder posture. The driver is <strong>scapular retraction</strong> (squeezing the shoulder blades), not hand strength.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Stand with feet hip-width apart, knees slightly bent and core firm.</li>
<li>Hold the band with palms down (or facing each other) at shoulder width.</li>
<li>Extend your arms in front of you at chest height, shoulders down and away from your ears.</li>
<li>Squeeze your shoulder blades back and down while opening your arms out to the sides.</li>
<li>Open until the band touches your chest, without your hands rising above shoulder height.</li>
<li>Return to the front slowly and controlled, resisting the band.</li></ol>
<p><strong>Mind your technique:</strong> don't raise your arms above horizontal (protects your neck); the work comes from your back, not your hands.</p>
<p><strong>Sets:</strong> 2-3 sets of 10-15 reps.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254651" title="Band pull-apart" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>6. Glute bridge</h4>
<p><strong>What it's for:</strong> strengthens glutes, lower back and core lying down; helps with turning and getting out of bed after surgery.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Lie on your back, knees bent and feet flat hip-width apart; arms by your sides.</li>
<li>Squeeze your glutes and lift your hips until knees, hips and shoulders are aligned.</li>
<li>Hold 1-2 s at the top without over-arching your lower back.</li>
<li>Lower slowly.</li></ol>
<p><strong>Mind your technique:</strong> push through your heels; the work is from the glutes and abdomen (not the lower back); don't lift too high.</p>
<p><strong>Sets:</strong> 2-3 sets of 10-15 reps.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254662" title="Glute bridge" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>7. Single-leg balance</h4>
<p><strong>What it's for:</strong> improves balance and reduces the risk of falls, which is key before and after surgery.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Stand next to a counter, chair or wall, with a firm support within reach.</li>
<li>Lift one foot off the floor and balance on the other leg for 10-20 s.</li>
<li>Switch legs. To progress, gradually reduce the hand support.</li></ol>
<p><strong>Mind your technique:</strong> look at a fixed point, ALWAYS keep a support nearby, and do it with company if you feel unsteady.</p>
<p><strong>Sets:</strong> 2-3 reps per leg.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254650" title="Single-leg balance" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>Flexibility</h4>
<p>Do the stretches at the end of the session, when the muscle is warm. Hold each for 20-30 s with a slow, controlled movement, breathing calmly, without bouncing and without reaching pain.</p>
<h4>8. Calf stretch against the wall</h4>
<p><strong>What it's for:</strong> keeps ankle and calf flexibility; complements calf raises and walking.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Standing facing the wall, place your hands at chest height.</li>
<li>Put one leg in front and the other extended behind, with the back heel firmly on the floor.</li>
<li>Gently bring your body towards the wall until you feel the stretch in the calf of the back leg.</li>
<li>Hold 20-30 s and switch legs.</li></ol>
<p><strong>Mind your technique:</strong> keep the back heel down; no bouncing, no pain.</p>
<p><strong>Sets:</strong> 2-3 per leg.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209282431" title="Calf stretch against the wall" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>9. Standing hamstring stretch</h4>
<p><strong>What it's for:</strong> keeps the back of the thigh flexible, useful for walking and bending down.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Standing, put one leg forward and keep the other slightly bent behind for stability.</li>
<li>The front leg stays straight, with the heel on the floor and toes pointing up.</li>
<li>With a straight back and relaxed shoulders, lean forward from the hips (not by bending your back).</li>
<li>Slide your hands down the thigh or rest them just above the knee until you feel a moderate tension behind the thigh.</li>
<li>Hold 20-30 s and switch legs.</li></ol>
<p><strong>Mind your technique:</strong> hinge from the hip with a neutral spine; never round your back.</p>
<p><strong>Sets:</strong> 2-3 per leg.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209285838" title="Standing hamstring stretch" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>10. Doorway chest stretch</h4>
<p><strong>What it's for:</strong> opens the chest and front of the shoulder; offsets a hunched posture and complements the row and band pull-apart.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Bend your elbow to 90° and rest your forearm on a doorframe or wall, fingers pointing up.</li>
<li>Lean gently forward until you feel the stretch in the front of the shoulder, the arm and the chest.</li>
<li>Hold 20-30 s and switch arms.</li></ol>
<p><strong>Mind your technique:</strong> a comfortable stretch, never painful; shoulders down and neck relaxed.</p>
<p><strong>Sets:</strong> 2-3 per arm.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209286520" title="Doorway chest stretch" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>11. Cross-body shoulder stretch</h4>
<p><strong>What it's for:</strong> gives mobility to the back of the shoulder.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Sitting or standing, bring one arm straight across your chest.</li>
<li>Hold it gently with the other arm and draw it towards your chest, without forcing.</li>
<li>Keep your trunk upright and shoulders down (don't shrug).</li>
<li>Hold 20-30 s and switch arms.</li></ol>
<p><strong>Mind your technique:</strong> don't raise your shoulders; pull the arm in only until you feel a comfortable tension.</p>
<p><strong>Sets:</strong> 2-3 per arm.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209284734" title="Cross-body shoulder stretch" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>12. Lateral neck stretch</h4>
<p><strong>What it's for:</strong> relieves tension in the neck and shoulders.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Sitting or standing, with a relaxed posture.</li>
<li>Gently bring one ear towards the shoulder on the same side, without raising the opposite shoulder.</li>
<li>Hold a few seconds and return slowly to the centre.</li>
<li>Repeat to the other side.</li></ol>
<p><strong>Mind your technique:</strong> a gentle, controlled movement with calm breathing; don't force it.</p>
<p><strong>Sets:</strong> 2-3 per side.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209282429" title="Lateral neck stretch" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>13. Seated trunk rotation</h4>
<p><strong>What it's for:</strong> improves mobility of the spine and back.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Sit on a chair with your feet on the floor and your pelvis still.</li>
<li>Gently rotate your trunk to one side and then to the other.</li>
<li>Keep your back upright and shoulders relaxed.</li></ol>
<p><strong>Mind your technique:</strong> a slow, small, controlled movement; the pelvis stays still, only the trunk turns.</p>
<p><strong>Sets:</strong> 5-10 gentle turns to each side.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209282427" title="Seated trunk rotation" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_ca: `<p>Com fer cada part de l'entrenament. Ves al teu ritme, cuida la postura i atura't si alguna cosa fa mal. Els exercicis de força i flexibilitat inclouen un vídeo amb la tècnica.</p>
<h4>Aeròbic: caminar</h4>
<p>Caminar és la base del programa: millora el cor, els pulmons i la resistència. És l'opció més segura i accessible (també serveix la bicicleta estàtica o la cinta si ja les fas servir).</p>
<p><strong>Quant:</strong> almenys 3 dies per setmana, progressant a poc a poc. Si parteixes del sedentarisme, comença amb 5-10 min i augmenta fins a uns 30 min al dia (o el que toleris bé). Si et costa, divideix-ho en blocs curts (per exemple 10 min al matí, 10 al migdia i 10 a la tarda).</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Comença amb 5 min suaus per escalfar.</li>
<li>Camina a ritme lleuger-moderat, notant que respires una mica més ràpid.</li>
<li>Acaba amb 3-5 min de marxa lenta per recuperar.</li></ol>
<p><strong>Intensitat — la "prova de la parla":</strong> vas bé si pots dir frases completes però notes una mica més d'esforç que en repòs. Si et quedes sense aire, baixa el ritme; si no notes cap canvi, apuja'l una mica.</p>
<p><strong>Consells:</strong> fes servir calçat còmode, evita caminar just després de menjar, hidrata't si fa calor i, si no pots sortir, camina per casa o pel passadís. En persones fràgils o amb dolor, és millor fer sessions curtes i constants que massa de cop.</p>
<h4>Força i equilibri</h4>
<p>Fes aquest bloc 2-3 dies per setmana, en dies no consecutius. Cada exercici inclou un vídeo amb la tècnica.</p>
<h4>1. Sentadilla a la cadira</h4>
<p><strong>Per a què serveix:</strong> enforteix cuixes i glutis; és el gest d'aixecar-te del sofà, del vàter o del llit, clau per a la teva autonomia després de la cirurgia.</p>
<p><strong>Nivell 1 · Aixecar-se de la cadira</strong></p>
<ol><li>Seu a la vora d'una cadira estable, peus a l'amplada dels malucs i una mica enrere.</li>
<li>Inclina el tronc endavant ("el nas sobre els peus").</li>
<li>Empeny amb els talons i posa't dret, sense impuls brusc.</li>
<li>Baixa a poc a poc (3-4 s) fins a fregar la cadira i repeteix.</li></ol>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254653" title="Aixecar-se de la cadira" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<p><strong>Nivell 2 · Sentadilla amb cadira</strong> (quan el nivell 1 et resulti fàcil)</p>
<ol><li>Dret davant de la cadira, peus a l'amplada dels malucs.</li>
<li>Porta els malucs enrere i baixa flexionant els genolls, com si t'anessis a asseure.</li>
<li>Frega el seient sense deixar-te caure i puja empenyent amb els talons.</li></ol>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254666" title="Sentadilla amb cadira" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<p><strong>Cuida la tècnica:</strong> genolls alineats amb els peus (que no s'entrin cap endins), esquena neutra i talons recolzats. Fes servir les mans a les cuixes o als reposabraços només si ho necessites.</p>
<p><strong>Sèries:</strong> 2-3 sèries de 8-10 repeticions, amb ~1 min de descans.</p>
<h4>2. Elevació de talons</h4>
<p><strong>Per a què serveix:</strong> enforteix els bessons, millora l'equilibri i afavoreix el retorn de la sang de les cames.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Dret, amb les mans recolzades en una cadira o paret.</li>
<li>Puja lentament sobre les puntes dels peus tot el que puguis.</li>
<li>Mantén 1 s a dalt i baixa a poc a poc i controlat.</li></ol>
<p><strong>Cuida la tècnica:</strong> no rebotis, mantén el cos dret i el pes repartit en tots dos peus.</p>
<p><strong>Sèries:</strong> 2-3 sèries de 10-15 repeticions.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254652" title="Elevació de talons" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>3. Flexions a la paret</h4>
<p><strong>Per a què serveix:</strong> enforteix pit, espatlles i braços de manera suau, sense carregar les articulacions.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>De cara a la paret, recolza les mans a l'altura del pit, una mica més amples que les espatlles.</li>
<li>Fes un pas enrere per inclinar-te, mantenint el cos recte.</li>
<li>Flexiona els colzes acostant el pit a la paret.</li>
<li>Empeny per tornar. Com més enrere posis els peus, més difícil.</li></ol>
<p><strong>Cuida la tècnica:</strong> cos en línia (no treguis el maluc), colzes a uns 45°, coll relaxat.</p>
<p><strong>Sèries:</strong> 2-3 sèries de 8-12 repeticions.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254676" title="Flexions a la paret" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>4. Rem amb banda elàstica a terra</h4>
<p><strong>Per a què serveix:</strong> enforteix l'esquena i millora la postura, contrarestant la tendència a encorbar-se.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Assegut a terra amb les cames estirades, passa la banda per les plantes dels peus i subjecta un extrem a cada mà.</li>
<li>Esquena recta i espatlles baixes.</li>
<li>Estira la banda portant els colzes enrere, arran del cos, ajuntant els omòplats.</li>
<li>Torna a poc a poc, controlant la banda.</li></ol>
<p><strong>Cuida la tècnica:</strong> no encorbis l'esquena; el moviment neix d'ajuntar les escàpules, no d'estirar només amb les mans; espatlles lluny de les orelles.</p>
<p><strong>Sèries:</strong> 2-3 sèries de 8-12 repeticions.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254665" title="Rem amb banda a terra" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>5. Apertura d'espatlles amb banda (band pull-apart)</h4>
<p><strong>Per a què serveix:</strong> enforteix l'esquena alta (deltoide posterior, romboides i trapezi mitjà) i millora la postura de les espatlles. El motor del moviment és la <strong>retracció escapular</strong> (ajuntar els omòplats), no la força de les mans.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Dret, peus a l'amplada del maluc, genolls amb una flexió mínima i abdomen ferm.</li>
<li>Subjecta la banda amb els palmells cap avall (o mirant-se entre si) a l'amplada de les espatlles.</li>
<li>Estén els braços davant teu a l'altura del pit, amb les espatlles baixes i lluny de les orelles.</li>
<li>Ajunta els omòplats enrere i avall mentre obres els braços cap als costats, en creu.</li>
<li>Obre fins que la banda fregui el pit, sense que les mans pugin per sobre de la línia de les espatlles.</li>
<li>Torna al davant de manera lenta i controlada, frenant la banda.</li></ol>
<p><strong>Cuida la tècnica:</strong> no pugis els braços per sobre de l'horitzontal (protegeix el coll); el treball surt de l'esquena, no de les mans.</p>
<p><strong>Sèries:</strong> 2-3 sèries de 10-15 repeticions.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254651" title="Apertura d'espatlles amb banda" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>6. Pont de glutis</h4>
<p><strong>Per a què serveix:</strong> enforteix glutis, zona lumbar i core estirat; ajuda al gest de girar-te i aixecar-te del llit després de la cirurgia.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Estira't de panxa enlaire, genolls flexionats i peus recolzats a l'amplada dels malucs; braços als costats.</li>
<li>Estreny els glutis i eleva el maluc fins a alinear genolls, malucs i espatlles.</li>
<li>Mantén 1-2 s a dalt sense arquejar en excés la zona lumbar.</li>
<li>Baixa a poc a poc.</li></ol>
<p><strong>Cuida la tècnica:</strong> empeny amb els talons; el treball és del gluti i l'abdomen (no de la lumbar); no pugis més del compte.</p>
<p><strong>Sèries:</strong> 2-3 sèries de 10-15 repeticions.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254662" title="Pont de glutis" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>7. Equilibri sobre una cama</h4>
<p><strong>Per a què serveix:</strong> millora l'equilibri i redueix el risc de caigudes, cosa clau abans i després de la cirurgia.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Col·loca't al costat d'una encimera, cadira o paret, amb un suport ferm a l'abast de la mà.</li>
<li>Aixeca un peu de terra i mantén l'equilibri sobre l'altra cama 10-20 s.</li>
<li>Canvia de cama. Per progressar, redueix a poc a poc el suport de la mà.</li></ol>
<p><strong>Cuida la tècnica:</strong> mira a un punt fix, tingues SEMPRE un suport a prop i fes-ho acompanyat si et fa inseguretat.</p>
<p><strong>Sèries:</strong> 2-3 repeticions per cama.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209254650" title="Equilibri sobre una cama" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>Flexibilitat</h4>
<p>Fes els estiraments al final de la sessió, amb el múscul calent. Mantén cadascun 20-30 s amb un moviment lent i controlat, respirant tranquil, sense rebots i sense arribar al dolor.</p>
<h4>8. Estirament de bessons amb suport a la paret</h4>
<p><strong>Per a què serveix:</strong> manté la flexibilitat del turmell i el bessó; complementa les elevacions de talons i el caminar.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Dret davant de la paret, recolza les mans a l'altura del pit.</li>
<li>Col·loca una cama davant i l'altra estirada darrere, amb el taló del darrere ben recolzat a terra.</li>
<li>Porta el cos suaument cap a la paret fins a notar l'estirament al bessó de la cama del darrere.</li>
<li>Mantén 20-30 s i canvia de cama.</li></ol>
<p><strong>Cuida la tècnica:</strong> el taló del darrere sempre recolzat; sense rebots ni dolor.</p>
<p><strong>Sèries:</strong> 2-3 per cama.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209282431" title="Estirament de bessons a la paret" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>9. Estirament d'isquiotibials dret</h4>
<p><strong>Per a què serveix:</strong> manté la flexibilitat de la part posterior de la cuixa, útil per caminar i ajupir-te.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Dret, avança una cama i deixa l'altra lleugerament flexionada darrere per donar-te estabilitat.</li>
<li>La cama de davant queda estirada, amb el taló a terra i la punta del peu cap amunt.</li>
<li>Amb l'esquena recta i les espatlles relaxades, inclina't cap endavant des dels malucs (no doblegant l'esquena).</li>
<li>Llisca les mans per la cuixa o recolza-les just per sobre del genoll fins a notar una tensió moderada darrere de la cuixa.</li>
<li>Mantén 20-30 s i canvia de cama.</li></ol>
<p><strong>Cuida la tècnica:</strong> doblega des del maluc amb la columna neutra; no arrodoneixis mai l'esquena.</p>
<p><strong>Sèries:</strong> 2-3 per cama.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209285838" title="Estirament d'isquiotibials dret" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>10. Estirament de pectoral a la porta</h4>
<p><strong>Per a què serveix:</strong> obre el pit i la part davantera de l'espatlla; compensa la postura encorbada i complementa el rem i l'apertura amb banda.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Doblega el colze a 90° i recolza l'avantbraç al marc d'una porta o a la paret, amb els dits apuntant cap amunt.</li>
<li>Inclina't suaument cap endavant fins a notar l'estirament a la part davantera de l'espatlla, el braç i el pit.</li>
<li>Mantén 20-30 s i canvia de braç.</li></ol>
<p><strong>Cuida la tècnica:</strong> estirament còmode, mai dolorós; espatlles baixes i coll relaxat.</p>
<p><strong>Sèries:</strong> 2-3 per braç.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209286520" title="Estirament de pectoral" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>11. Estirament creuat d'espatlla</h4>
<p><strong>Per a què serveix:</strong> dona mobilitat a la part posterior de l'espatlla.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Assegut o dret, porta un braç estirat per davant del pit.</li>
<li>Subjecta'l suaument amb l'altre braç i acosta'l al pit, sense forçar.</li>
<li>Mantén el tronc dret i les espatlles baixes (sense arronsar-les).</li>
<li>Mantén 20-30 s i canvia de braç.</li></ol>
<p><strong>Cuida la tècnica:</strong> no elevis les espatlles; acosta el braç només fins a notar una tensió còmode.</p>
<p><strong>Sèries:</strong> 2-3 per braç.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209284734" title="Estirament creuat d'espatlla" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>12. Flexió lateral de coll</h4>
<p><strong>Per a què serveix:</strong> alleuja la tensió del coll i les espatlles.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Assegut o dret, amb la postura relaxada.</li>
<li>Porta suaument una orella cap a l'espatlla del mateix costat, sense aixecar l'espatlla contrària.</li>
<li>Mantén uns segons i torna a poc a poc al centre.</li>
<li>Repeteix cap a l'altre costat.</li></ol>
<p><strong>Cuida la tècnica:</strong> moviment suau i controlat, respiració tranquil·la; no forcis.</p>
<p><strong>Sèries:</strong> 2-3 per costat.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209282429" title="Flexió lateral de coll" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
<h4>13. Rotació de tronc assegut</h4>
<p><strong>Per a què serveix:</strong> millora la mobilitat de la columna i l'esquena.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Seu en una cadira amb els peus recolzats a terra i la pelvis quieta.</li>
<li>Gira suaument el tronc cap a un costat i després cap a l'altre.</li>
<li>Mantén l'esquena dreta i les espatlles relaxades.</li></ol>
<p><strong>Cuida la tècnica:</strong> moviment lent, petit i controlat; la pelvis no gira, només el tronc.</p>
<p><strong>Sèries:</strong> 5-10 girs suaus a cada costat.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209282427" title="Rotació de tronc assegut" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
    },
    {
      id: 'seguridad', open: false,
      title: 'Seguridad, constancia y motivación',
      title_en: 'Safety, consistency and motivation',
      title_ca: 'Seguretat, constància i motivació',
      body: `<p>Consejos para que el plan funcione:</p>
<ul><li><strong>Únelo a un hábito</strong> (por ejemplo, después de desayunar) para no olvidarlo.</li>
<li><strong>Hidrátate</strong> y usa ropa y calzado cómodos.</li>
<li><strong>Registra</strong> lo que haces; ver tu progreso motiva.</li>
<li>Un mal día no arruina el plan: retómalo al día siguiente.</li></ul>
<p><strong>Recuerda:</strong> empezar pronto, ser constante y no buscar la perfección. Caminar, hacer algo de fuerza y entrenar la respiración ya es una intervención útil. Ante cualquier duda o síntoma, consulta con tu equipo.</p>`,
      body_en: `<p>Tips to make the plan work:</p>
<ul><li><strong>Attach it to a habit</strong> (for example, after breakfast) so you don't forget.</li>
<li><strong>Stay hydrated</strong> and wear comfortable clothes and shoes.</li>
<li><strong>Track</strong> what you do; seeing your progress is motivating.</li>
<li>A bad day doesn't ruin the plan: pick it back up the next day.</li></ul>
<p><strong>Remember:</strong> start early, be consistent and don't chase perfection. Walking, doing some strength work and training your breathing is already a useful intervention. If in doubt or with any symptom, check with your team.</p>`,
      body_ca: `<p>Consells perquè el pla funcioni:</p>
<ul><li><strong>Uneix-lo a un hàbit</strong> (per exemple, després d'esmorzar) per no oblidar-lo.</li>
<li><strong>Hidrata't</strong> i fes servir roba i calçat còmodes.</li>
<li><strong>Registra</strong> el que fas; veure el teu progrés motiva.</li>
<li>Un mal dia no arruïna el pla: reprèn-lo l'endemà.</li></ul>
<p><strong>Recorda:</strong> començar aviat, ser constant i no buscar la perfecció. Caminar, fer una mica de força i entrenar la respiració ja és una intervenció útil. Davant de qualsevol dubte o símptoma, consulta amb el teu equip.</p>`,
    },
  ],
};

// ---------------------------------------------------------------------------
// RESPIRATORY_GUIDE: guía interna de entrenamiento respiratorio (prehabilitación).
// Mismo formato de acordeón que las demás guías (.fasting-block/.fasting-body).
// Contenido educativo; la pauta concreta la indica el equipo médico.
// ---------------------------------------------------------------------------
export const RESPIRATORY_GUIDE = {
  intro: {
    title: 'Entrenamiento respiratorio antes de la cirugía',
    title_en: 'Breathing training before surgery',
    title_ca: 'Entrenament respiratori abans de la cirurgia',
    body: `<p>Los ejercicios respiratorios preparan tus pulmones para la anestesia y la cirugía. No se trata de "entrenar los pulmones" como en el deporte, sino de <strong>mejorar la ventilación, la mecánica respiratoria y tu capacidad de toser</strong> para recuperarte mejor.</p>
<p>Durante y después de una anestesia general es habitual que se cierren pequeñas zonas del pulmón (atelectasia), lo que puede facilitar infecciones como la neumonía. Practicar estos ejercicios antes ayuda a prevenirlo, sobre todo en cirugía abdominal o torácica y en personas con problemas respiratorios.</p>
<h4>Cómo y cuánto</h4>
<ul><li><strong>Postura:</strong> sentado o tumbado con el cabecero elevado.</li>
<li><strong>Pauta:</strong> 5-10 repeticiones de cada ejercicio, 3 veces al día.</li>
<li><strong>Cuándo empezar:</strong> idealmente 2-4 semanas antes; combínalo con caminar a diario.</li>
<li><strong>Evita</strong> hacerlo justo después de comer.</li></ul>
<h4>¿Por dónde empezar?</h4>
<p>Prioriza los <strong>3 esenciales</strong> (los de más evidencia y utilidad directa): <strong>respiración diafragmática</strong>, <strong>tos eficaz</strong> e <strong>inspirómetro incentivador</strong> (si dispones de él). Los demás —respiración costal, expansiones con brazos y espiración controlada— son <strong>complementarios</strong>: añádelos según tu tiempo, tolerancia y las indicaciones de tu equipo. En cirugía abdominal o torácica y en personas con riesgo pulmonar, conviene hacer el conjunto completo.</p>
<p><strong>Para y consulta</strong> si aparece mareo, falta de aire desproporcionada o dolor relevante.</p>`,
    body_en: `<p>Breathing exercises get your lungs ready for anaesthesia and surgery. It's not about "training your lungs" like in sport, but about <strong>improving ventilation, breathing mechanics and your ability to cough</strong> so you recover better.</p>
<p>During and after general anaesthesia it's common for small areas of the lung to close off (atelectasis), which can make infections such as pneumonia more likely. Practising these exercises beforehand helps prevent it, especially in abdominal or chest surgery and in people with breathing problems.</p>
<h4>How and how much</h4>
<ul><li><strong>Position:</strong> sitting or lying down with the head of the bed raised.</li>
<li><strong>Dose:</strong> 5-10 repetitions of each exercise, 3 times a day.</li>
<li><strong>When to start:</strong> ideally 2-4 weeks before; combine it with daily walking.</li>
<li><strong>Avoid</strong> doing it right after eating.</li></ul>
<h4>Where to start?</h4>
<p>Prioritise the <strong>3 essentials</strong> (the ones with the most evidence and direct value): <strong>diaphragmatic breathing</strong>, <strong>effective cough</strong> and the <strong>incentive spirometer</strong> (if you have one). The rest —rib breathing, chest expansion with arms and controlled exhalation— are <strong>complementary</strong>: add them according to your time, tolerance and your team's advice. In abdominal or chest surgery and in people at pulmonary risk, it's best to do the full set.</p>
<p><strong>Stop and check with your team</strong> if you feel dizzy, unusually short of breath or in significant pain.</p>`,
    body_ca: `<p>Els exercicis respiratoris preparen els teus pulmons per a l'anestèsia i la cirurgia. No es tracta d'"entrenar els pulmons" com en l'esport, sinó de <strong>millorar la ventilació, la mecànica respiratòria i la teva capacitat de tossir</strong> per recuperar-te millor.</p>
<p>Durant i després d'una anestèsia general és habitual que es tanquin petites zones del pulmó (atelèctasi), cosa que pot facilitar infeccions com la pneumònia. Practicar aquests exercicis abans ajuda a prevenir-ho, sobretot en cirurgia abdominal o toràcica i en persones amb problemes respiratoris.</p>
<h4>Com i quant</h4>
<ul><li><strong>Postura:</strong> assegut o estirat amb la capçalera elevada.</li>
<li><strong>Pauta:</strong> 5-10 repeticions de cada exercici, 3 vegades al dia.</li>
<li><strong>Quan començar:</strong> idealment 2-4 setmanes abans; combina-ho amb caminar cada dia.</li>
<li><strong>Evita</strong> fer-ho just després de menjar.</li></ul>
<h4>Per on començar?</h4>
<p>Prioritza els <strong>3 essencials</strong> (els de més evidència i utilitat directa): <strong>respiració diafragmàtica</strong>, <strong>tos eficaç</strong> i <strong>inspiròmetre incentivador</strong> (si en disposes). La resta —respiració costal, expansions amb braços i espiració controlada— són <strong>complementaris</strong>: afegeix-los segons el teu temps, tolerància i les indicacions del teu equip. En cirurgia abdominal o toràcica i en persones amb risc pulmonar, convé fer el conjunt complet.</p>
<p><strong>Atura't i consulta</strong> si apareix mareig, falta d'aire desproporcionada o dolor rellevant.</p>`,
  },
  blocks: [
    {
      id: 'diafragmatica', open: true,
      title: '1. Respiración diafragmática · Esencial',
      title_en: '1. Diaphragmatic breathing · Essential',
      title_ca: '1. Respiració diafragmàtica · Essencial',
      body: `<p><strong>Para qué sirve:</strong> es el ejercicio base. Enseña a respirar con el diafragma (respiración "baja"), más eficiente y relajante.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Sentado o tumbado con el cabecero elevado, pon una mano en el pecho y otra en el abdomen.</li>
<li>Inspira por la nariz 2-4 s notando que sube sobre todo el abdomen (la mano del pecho se mueve poco).</li>
<li>Espira por la boca despacio, sin vaciar de golpe, dejando bajar el abdomen.</li>
<li>Repite de forma tranquila, sin forzar.</li></ol>
<p><strong>Cuida la técnica:</strong> si el pecho sube mucho, estás respirando demasiado "alto"; relaja los hombros y lleva el aire al abdomen.</p>
<p><strong>Frecuencia:</strong> 5-10 repeticiones, 3 veces al día.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209676500" title="Respiración diafragmática" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_en: `<p><strong>What it's for:</strong> the foundation exercise. It teaches you to breathe with the diaphragm ("low" breathing), which is more efficient and relaxing.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Sitting or lying with the head of the bed raised, put one hand on your chest and the other on your abdomen.</li>
<li>Breathe in through your nose for 2-4 s, feeling mainly the abdomen rise (the chest hand barely moves).</li>
<li>Breathe out slowly through your mouth, without emptying all at once, letting the abdomen fall.</li>
<li>Repeat calmly, without forcing.</li></ol>
<p><strong>Mind your technique:</strong> if the chest rises a lot, you're breathing too "high"; relax your shoulders and take the air to the abdomen.</p>
<p><strong>Frequency:</strong> 5-10 repetitions, 3 times a day.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209676500" title="Diaphragmatic breathing" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_ca: `<p><strong>Per a què serveix:</strong> és l'exercici base. Ensenya a respirar amb el diafragma (respiració "baixa"), més eficient i relaxant.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Assegut o estirat amb la capçalera elevada, posa una mà al pit i l'altra a l'abdomen.</li>
<li>Inspira pel nas 2-4 s notant que puja sobretot l'abdomen (la mà del pit es mou poc).</li>
<li>Espira per la boca a poc a poc, sense buidar de cop, deixant baixar l'abdomen.</li>
<li>Repeteix de manera tranquil·la, sense forçar.</li></ol>
<p><strong>Cuida la tècnica:</strong> si el pit puja molt, estàs respirant massa "alt"; relaxa les espatlles i porta l'aire a l'abdomen.</p>
<p><strong>Freqüència:</strong> 5-10 repeticions, 3 vegades al dia.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209676500" title="Respiració diafragmàtica" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
    },
    {
      id: 'costal', open: false,
      title: '2. Respiración costal · Complementario',
      title_en: '2. Rib (costal) breathing · Complementary',
      title_ca: '2. Respiració costal · Complementari',
      body: `<p><strong>Para qué sirve:</strong> moviliza mejor la caja torácica y mejora la conciencia respiratoria; útil si respiras de forma superficial.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Coloca las manos sobre las costillas inferiores, a los lados.</li>
<li>Inspira por la nariz notando cómo se abren las costillas hacia los lados.</li>
<li>Espira lentamente por la boca.</li>
<li>Vuelve a la posición inicial sin perder el control.</li></ol>
<p><strong>Cuida la técnica:</strong> busca la apertura lateral de las costillas, no subir los hombros.</p>
<p><strong>Frecuencia:</strong> 5-10 repeticiones, 3 veces al día.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209676439" title="Respiración costal" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_en: `<p><strong>What it's for:</strong> it mobilises the rib cage better and improves breathing awareness; useful if you breathe shallowly.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Place your hands on your lower ribs, at the sides.</li>
<li>Breathe in through your nose, feeling the ribs open outwards.</li>
<li>Breathe out slowly through your mouth.</li>
<li>Return to the starting position without losing control.</li></ol>
<p><strong>Mind your technique:</strong> look for the ribs opening sideways, not the shoulders rising.</p>
<p><strong>Frequency:</strong> 5-10 repetitions, 3 times a day.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209676439" title="Rib (costal) breathing" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_ca: `<p><strong>Per a què serveix:</strong> mobilitza millor la caixa toràcica i millora la consciència respiratòria; útil si respires de manera superficial.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Col·loca les mans sobre les costelles inferiors, als costats.</li>
<li>Inspira pel nas notant com s'obren les costelles cap als costats.</li>
<li>Espira lentament per la boca.</li>
<li>Torna a la posició inicial sense perdre el control.</li></ol>
<p><strong>Cuida la tècnica:</strong> busca l'obertura lateral de les costelles, no apujar les espatlles.</p>
<p><strong>Freqüència:</strong> 5-10 repeticions, 3 vegades al dia.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209676439" title="Respiració costal" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
    },
    {
      id: 'brazos', open: false,
      title: '3. Expansiones costales con brazos · Complementario',
      title_en: '3. Chest expansion with arms · Complementary',
      title_ca: '3. Expansions costals amb braços · Complementari',
      body: `<p><strong>Para qué sirve:</strong> combina respiración y movilidad de hombros y tórax; hace el ejercicio más "guiado" y facilita respirar más profundo.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Inspira por la nariz mientras subes los brazos.</li>
<li>Mantén el aire 2-3 s.</li>
<li>Espira por la boca mientras bajas los brazos suavemente.</li></ol>
<p><strong>Cuida la técnica:</strong> movimiento lento, sin tensión en el cuello.</p>
<p><strong>Frecuencia:</strong> 5-10 repeticiones, 3 veces al día.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209676438" title="Expansión costal con elevación de brazos" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_en: `<p><strong>What it's for:</strong> it combines breathing with shoulder and chest mobility; it makes the exercise more "guided" and helps you breathe deeper.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Breathe in through your nose as you raise your arms.</li>
<li>Hold the air for 2-3 s.</li>
<li>Breathe out through your mouth as you gently lower your arms.</li></ol>
<p><strong>Mind your technique:</strong> a slow movement, with no tension in the neck.</p>
<p><strong>Frequency:</strong> 5-10 repetitions, 3 times a day.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209676438" title="Chest expansion with arms" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_ca: `<p><strong>Per a què serveix:</strong> combina respiració i mobilitat d'espatlles i tòrax; fa l'exercici més "guiat" i facilita respirar més profund.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Inspira pel nas mentre puges els braços.</li>
<li>Mantén l'aire 2-3 s.</li>
<li>Espira per la boca mentre baixes els braços suaument.</li></ol>
<p><strong>Cuida la tècnica:</strong> moviment lent, sense tensió al coll.</p>
<p><strong>Freqüència:</strong> 5-10 repeticions, 3 vegades al dia.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209676438" title="Expansió costal amb elevació de braços" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
    },
    {
      id: 'espiracion', open: false,
      title: '4. Espiración controlada · Complementario',
      title_en: '4. Controlled exhalation · Complementary',
      title_ca: '4. Espiració controlada · Complementari',
      body: `<p><strong>Para qué sirve:</strong> controla el patrón respiratorio y evita la respiración rápida y superficial. También ayuda a calmarte si estás nervioso.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Inspira suave por la nariz.</li>
<li>Espira por la boca de forma lenta y prolongada, como si quisieras empañar un cristal o mantener la llama de una vela sin apagarla.</li>
<li>Mantén los hombros relajados.</li></ol>
<p><strong>Cuida la técnica:</strong> no contengas el aire demasiado tiempo.</p>
<p><strong>Frecuencia:</strong> intégrala dentro de los otros ejercicios, sobre todo entre repeticiones si te fatigas.</p>`,
      body_en: `<p><strong>What it's for:</strong> it controls your breathing pattern and prevents fast, shallow breathing. It also helps calm you down if you're nervous.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Breathe in gently through your nose.</li>
<li>Breathe out through your mouth slowly and steadily, as if fogging a window or keeping a candle flame alive without blowing it out.</li>
<li>Keep your shoulders relaxed.</li></ol>
<p><strong>Mind your technique:</strong> don't hold your breath for too long.</p>
<p><strong>Frequency:</strong> integrate it within the other exercises, especially between repetitions if you tire.</p>`,
      body_ca: `<p><strong>Per a què serveix:</strong> controla el patró respiratori i evita la respiració ràpida i superficial. També ajuda a calmar-te si estàs nerviós.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Inspira suau pel nas.</li>
<li>Espira per la boca de manera lenta i perllongada, com si volguessis entelar un vidre o mantenir la flama d'una espelma sense apagar-la.</li>
<li>Mantén les espatlles relaxades.</li></ol>
<p><strong>Cuida la tècnica:</strong> no continguis l'aire massa temps.</p>
<p><strong>Freqüència:</strong> integra-la dins dels altres exercicis, sobretot entre repeticions si et fatigues.</p>`,
    },
    {
      id: 'tos', open: false,
      title: '5. Tos eficaz · Esencial',
      title_en: '5. Effective cough · Essential',
      title_ca: '5. Tos eficaç · Essencial',
      body: `<p><strong>Para qué sirve:</strong> aprender a toser bien antes de la cirugía mejora su ejecución después y reduce el miedo a toser por el dolor. Es clave para expulsar secreciones.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Inspira profundamente.</li>
<li>Mantén el aire 1-2 s.</li>
<li>Tose de forma breve, firme y controlada.</li>
<li>Si hay dolor o cirugía abdominal, sujeta la zona con las manos o con una almohada.</li></ol>
<p><strong>Cuida la técnica:</strong> es más una habilidad que aprendes que un ejercicio repetitivo.</p>
<p><strong>Frecuencia:</strong> 1-3 maniobras de práctica por sesión.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209312881" title="Maniobra de tos dirigida" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_en: `<p><strong>What it's for:</strong> learning to cough well before surgery improves how you do it afterwards and reduces the fear of coughing because of pain. It's key to clearing secretions.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Breathe in deeply.</li>
<li>Hold the air for 1-2 s.</li>
<li>Cough in a short, firm and controlled way.</li>
<li>If there's pain or abdominal surgery, support the area with your hands or a pillow.</li></ol>
<p><strong>Mind your technique:</strong> it's more a skill you learn than a repetitive exercise.</p>
<p><strong>Frequency:</strong> 1-3 practice manoeuvres per session.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209312881" title="Directed cough manoeuvre" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_ca: `<p><strong>Per a què serveix:</strong> aprendre a tossir bé abans de la cirurgia millora com ho fas després i redueix la por de tossir pel dolor. És clau per expulsar secrecions.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Inspira profundament.</li>
<li>Mantén l'aire 1-2 s.</li>
<li>Tus de manera breu, ferma i controlada.</li>
<li>Si hi ha dolor o cirurgia abdominal, subjecta la zona amb les mans o amb un coixí.</li></ol>
<p><strong>Cuida la tècnica:</strong> és més una habilitat que aprens que un exercici repetitiu.</p>
<p><strong>Freqüència:</strong> 1-3 maniobres de pràctica per sessió.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209312881" title="Maniobra de tos dirigida" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
    },
    {
      id: 'inspirometro', open: false,
      title: '6. Inspirómetro incentivador · Esencial',
      title_en: '6. Incentive spirometer · Essential',
      title_ca: '6. Inspiròmetre incentivador · Essencial',
      body: `<p><strong>Para qué sirve:</strong> si tu centro lo utiliza, ayuda a hacer inspiraciones lentas y profundas y a medir tu progreso; especialmente útil en cirugía abdominal o torácica. La calidad del gesto importa más que la rapidez.</p>
<p><strong>Cómo hacerlo:</strong></p>
<ol><li>Espira primero fuera de la boquilla.</li>
<li>Sella bien los labios alrededor del dispositivo.</li>
<li>Inspira lento y profundo hasta alcanzar la marca objetivo que te hayan indicado.</li>
<li>Mantén unos segundos la inspiración si te lo indican.</li>
<li>Relaja y repite.</li></ol>
<p><strong>Cuida la técnica:</strong> inspira despacio (no de golpe); prioriza llegar a la marca de forma sostenida.</p>
<p><strong>Frecuencia:</strong> 5-10 inspiraciones, 3 veces al día, si dispones de él.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209312882" title="Manejo del incentivador (Triflo/Triball)" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_en: `<p><strong>What it's for:</strong> if your centre uses one, it helps you take slow, deep breaths and track your progress; especially useful in abdominal or chest surgery. The quality of the movement matters more than speed.</p>
<p><strong>How to do it:</strong></p>
<ol><li>Breathe out first, away from the mouthpiece.</li>
<li>Seal your lips firmly around the device.</li>
<li>Breathe in slowly and deeply until you reach the target mark you were given.</li>
<li>Hold the breath for a few seconds if instructed.</li>
<li>Relax and repeat.</li></ol>
<p><strong>Mind your technique:</strong> breathe in slowly (not all at once); focus on reaching the mark in a sustained way.</p>
<p><strong>Frequency:</strong> 5-10 breaths, 3 times a day, if you have one.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209312882" title="Using the incentive spirometer (Triflo/Triball)" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      body_ca: `<p><strong>Per a què serveix:</strong> si el teu centre l'utilitza, ajuda a fer inspiracions lentes i profundes i a mesurar el teu progrés; especialment útil en cirurgia abdominal o toràcica. La qualitat del gest importa més que la rapidesa.</p>
<p><strong>Com fer-ho:</strong></p>
<ol><li>Espira primer fora de la broqueta.</li>
<li>Segella bé els llavis al voltant del dispositiu.</li>
<li>Inspira lent i profund fins a arribar a la marca objectiu que t'hagin indicat.</li>
<li>Mantén uns segons la inspiració si t'ho indiquen.</li>
<li>Relaxa i repeteix.</li></ol>
<p><strong>Cuida la tècnica:</strong> inspira a poc a poc (no de cop); prioritza arribar a la marca de manera sostinguda.</p>
<p><strong>Freqüència:</strong> 5-10 inspiracions, 3 vegades al dia, si en disposes.</p>
<div class="video"><iframe src="https://player.vimeo.com/video/1209312882" title="Maneig de l'incentivador (Triflo/Triball)" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
    },
    {
      id: 'pauta', open: false,
      title: '📋 Tu pauta diaria y seguridad',
      title_en: '📋 Your daily routine and safety',
      title_ca: '📋 La teva pauta diària i seguretat',
      body: `<p>Una pauta práctica, <strong>3 veces al día</strong>, sentado o tumbado con el cabecero elevado:</p>
<ul><li><strong>Respiración diafragmática (esencial):</strong> 5-10 repeticiones.</li>
<li>Respiración costal: 5-10 repeticiones.</li>
<li>Expansiones costales con brazos: 5-10 repeticiones.</li>
<li>Espiración controlada: intercalada entre ejercicios.</li>
<li><strong>Tos eficaz (esencial):</strong> 1-3 maniobras de práctica.</li>
<li><strong>Inspirómetro incentivador (esencial):</strong> 5-10 inspiraciones lentas (si dispones de él).</li></ul>
<p><strong>Seguridad:</strong> evita practicar justo después de comer y <strong>detente si aparece mareo, falta de aire desproporcionada o dolor relevante</strong>. Ante cualquier duda, consulta con tu equipo.</p>`,
      body_en: `<p>A practical routine, <strong>3 times a day</strong>, sitting or lying with the head of the bed raised:</p>
<ul><li><strong>Diaphragmatic breathing (essential):</strong> 5-10 repetitions.</li>
<li>Rib (costal) breathing: 5-10 repetitions.</li>
<li>Chest expansion with arms: 5-10 repetitions.</li>
<li>Controlled exhalation: interspersed between exercises.</li>
<li><strong>Effective cough (essential):</strong> 1-3 practice manoeuvres.</li>
<li><strong>Incentive spirometer (essential):</strong> 5-10 slow breaths (if you have one).</li></ul>
<p><strong>Safety:</strong> avoid practising right after eating and <strong>stop if you feel dizzy, unusually short of breath or in significant pain</strong>. If in doubt, check with your team.</p>`,
      body_ca: `<p>Una pauta pràctica, <strong>3 vegades al dia</strong>, assegut o estirat amb la capçalera elevada:</p>
<ul><li><strong>Respiració diafragmàtica (essencial):</strong> 5-10 repeticions.</li>
<li>Respiració costal: 5-10 repeticions.</li>
<li>Expansions costals amb braços: 5-10 repeticions.</li>
<li>Espiració controlada: intercalada entre exercicis.</li>
<li><strong>Tos eficaç (essencial):</strong> 1-3 maniobres de pràctica.</li>
<li><strong>Inspiròmetre incentivador (essencial):</strong> 5-10 inspiracions lentes (si en disposes).</li></ul>
<p><strong>Seguretat:</strong> evita practicar just després de menjar i <strong>atura't si apareix mareig, falta d'aire desproporcionada o dolor rellevant</strong>. Davant de qualsevol dubte, consulta amb el teu equip.</p>`,
    },
  ],
};

// ---------------------------------------------------------------------------
// MENTAL_GUIDE: módulo interno de Bienestar mental (Fase 1 / MVP).
// Contenido autoadministrado de bajo riesgo. Sin cribado ni calendario todavía
// (Fases 2 y 3). Diseño en .kiro/steering/bienestar-mental.md.
// Los vídeos (V*) y audios (P*) van con placeholder "(Próximamente)" hasta que
// se aporten los IDs de Vimeo / archivos validados.
// ---------------------------------------------------------------------------
export const MENTAL_GUIDE = {
  intro: {
    title: 'Bienestar mental: infórmate, empodérate y entrena tu mente',
    title_en: 'Mental wellbeing: learn, empower yourself and train your mind',
    title_ca: 'Benestar mental: informa’t, empodera’t i entrena la teva ment',
    body: `<p>Así como entrenas el cuerpo antes de una operación, también puedes <strong>entrenar la mente</strong>. Aquí encontrarás vídeos breves y prácticas de calma que, con constancia, ayudan a llegar mejor preparado. No buscamos eliminar los nervios —son normales—, sino que te acompañen sin mandar.</p>
<p><strong>A tu ritmo.</strong> Puedes ver una pieza al día o ir más despacio. Puedes saltarte lo que quieras: no hay deberes ni penalizaciones.</p>
<p><strong>Esta sección no te vigila.</strong> No hacemos seguimiento en tiempo real de cómo estás. Si algún cuestionario sugiere que te vendría bien más apoyo, te lo diremos con claridad y te daremos un resumen para llevar a tu equipo.</p>
<p class="muted small">🔒 Lo que respondas aquí se guarda <strong>solo en este dispositivo</strong>. Si usas un móvil o tablet compartido, tenlo en cuenta.</p>
<p class="muted small">En cualquier momento puedes tocar <strong>«Necesito una pausa»</strong>: paramos todo y te ofrecemos calma y teléfonos de ayuda.</p>`,
    body_en: `<p>Just as you train your body before an operation, you can also <strong>train your mind</strong>. Here you'll find short videos and calm practices that, with consistency, help you arrive better prepared. We're not trying to remove the nerves —they're normal—, but to keep them from taking over.</p>
<p><strong>At your own pace.</strong> Watch one piece a day or go slower. You can skip anything: no homework, no penalties.</p>
<p><strong>This section does not monitor you.</strong> We don't track how you're doing in real time. If a questionnaire suggests you'd benefit from more support, we'll tell you clearly and give you a summary to take to your team.</p>
<p class="muted small">🔒 Anything you answer here is stored <strong>only on this device</strong>. Keep that in mind on a shared phone or tablet.</p>
<p class="muted small">Anytime, tap <strong>"I need a pause"</strong>: we stop everything and offer calm and helplines.</p>`,
    body_ca: `<p>Així com entrenes el cos abans d'una operació, també pots <strong>entrenar la ment</strong>. Aquí trobaràs vídeos breus i pràctiques de calma que, amb constància, ajuden a arribar més preparat. No busquem eliminar els nervis —són normals—, sinó que t'acompanyin sense manar.</p>
<p><strong>Al teu ritme.</strong> Pots veure una peça al dia o anar més a poc a poc. Pots saltar-te el que vulguis: no hi ha deures ni penalitzacions.</p>
<p><strong>Aquesta secció no et vigila.</strong> No fem seguiment en temps real de com estàs. Si algun qüestionari suggereix que et vindria bé més suport, t'ho direm amb claredat i et donarem un resum per portar al teu equip.</p>
<p class="muted small">🔒 El que responguis aquí es desa <strong>només en aquest dispositiu</strong>. Si fas servir un mòbil o tauleta compartits, tingues-ho en compte.</p>
<p class="muted small">En qualsevol moment pots tocar <strong>«Necessito una pausa»</strong>: aturem tot i t'oferim calma i telèfons d'ajuda.</p>`,
  },
  blocks: [
    {
      id: 'programa', open: true,
      title: '🎬 Los vídeos del programa',
      title_en: '🎬 The programme videos',
      title_ca: '🎬 Els vídeos del programa',
      body: `<p>Piezas breves, en orden. Cada una termina bajando la activación. Ve a tu ritmo.</p>
<p><strong>Entender lo que va a pasar</strong></p>
<h4>V1. Bienvenida: entrena tu mente para tu cirugía</h4>
<p>Presenta el programa, normaliza dudas y nervios, e introduce el botón de pausa.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>V2. Tu cirugía, paso a paso</h4>
<p>El recorrido perioperatorio en orden, de la preparación al alta, para reducir la incertidumbre.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>V3. Qué notarás: la anestesia, explicada con calma</h4>
<p>Sensaciones esperables, el papel del anestesista y respuestas a miedos frecuentes.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<p><strong>Herramientas de calma</strong></p>
<h4>V4. Entrena tu calma: la respiración que se lleva al quirófano</h4>
<p>Respiración lenta diafragmática como herramienta principal de autorregulación.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>V4-B. Entrenar la atención: el músculo que vuelve</h4>
<p>Mindfulness breve y guiado: volver con amabilidad al presente cuando la mente se va al futuro.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<p><strong>Prepararte por dentro</strong></p>
<h4>V5. Lo que esperas importa</h4>
<p>Expectativas realistas y concretas sobre la recuperación; objetivos personales alcanzables.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>V6. El dolor, bien explicado (I): tu sistema de alarma</h4>
<p>El dolor como sistema de protección modulable, no como medida exacta de daño.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>V7. El dolor, bien explicado (II): lo que tú puedes hacer</h4>
<p>Estrategias prácticas ante el dolor agudo: respirar, avisar pronto, moverte pautadamente.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>V8. La mente que avisa demasiado</h4>
<p>Reconocer los pensamientos anticipatorios como avisos mentales, no como hechos.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>V9. Lo que importa: tu para qué</h4>
<p>Conecta la preparación con tus valores y tradúcelos en pasos pequeños.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<p><strong>Dormir y el día D</strong></p>
<h4>V10. Dormir mejor antes de operarte</h4>
<p>Medidas básicas de higiene del sueño; enlaza con el audio nocturno.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>V11. Modo Día D: tu guía para hoy</h4>
<p>Para las 24–48 h antes: instrucciones prácticas y herramientas de regulación.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>V12. Los primeros días: volver poco a poco</h4>
<p>Tras la cirugía: ajusta expectativas, recuerda herramientas y repasa señales de alarma.</p>
<p class="muted small">(Vídeo próximamente.)</p>`,
      body_en: `<p>Short pieces, in order. Each one ends by lowering activation. Go at your own pace.</p>
<p><strong>Understanding what will happen</strong></p>
<h4>V1. Welcome: train your mind for your surgery</h4>
<p>Introduces the programme, normalises doubts and nerves, and introduces the pause button.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>V2. Your surgery, step by step</h4>
<p>The perioperative journey in order, from preparation to discharge, to reduce uncertainty.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>V3. What you'll notice: anaesthesia, explained calmly</h4>
<p>Expected sensations, the anaesthetist's role and answers to common fears.</p>
<p class="muted small">(Video coming soon.)</p>
<p><strong>Calm tools</strong></p>
<h4>V4. Train your calm: the breathing you take to theatre</h4>
<p>Slow diaphragmatic breathing as the main self-regulation tool.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>V4-B. Training attention: the muscle that comes back</h4>
<p>Brief, guided mindfulness: gently returning to the present when the mind drifts to the future.</p>
<p class="muted small">(Video coming soon.)</p>
<p><strong>Preparing on the inside</strong></p>
<h4>V5. What you expect matters</h4>
<p>Realistic, concrete recovery expectations; achievable personal goals.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>V6. Pain, well explained (I): your alarm system</h4>
<p>Pain as a modulable protection system, not an exact measure of damage.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>V7. Pain, well explained (II): what you can do</h4>
<p>Practical strategies for acute pain: breathe, speak up early, move as advised.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>V8. The mind that warns too much</h4>
<p>Recognising anticipatory thoughts as mental alerts, not facts.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>V9. What matters: your why</h4>
<p>Connect your preparation with your values and turn them into small steps.</p>
<p class="muted small">(Video coming soon.)</p>
<p><strong>Sleep and D-day</strong></p>
<h4>V10. Sleeping better before your operation</h4>
<p>Basic sleep hygiene; links to the night-time audio.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>V11. D-day mode: your guide for today</h4>
<p>For the 24–48 h before: practical instructions and regulation tools.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>V12. The first days: coming back gradually</h4>
<p>After surgery: adjust expectations, recall tools and review warning signs.</p>
<p class="muted small">(Video coming soon.)</p>`,
      body_ca: `<p>Peces breus, en ordre. Cadascuna acaba baixant l'activació. Ves al teu ritme.</p>
<p><strong>Entendre què passarà</strong></p>
<h4>V1. Benvinguda: entrena la teva ment per a la cirurgia</h4>
<p>Presenta el programa, normalitza dubtes i nervis, i introdueix el botó de pausa.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>V2. La teva cirurgia, pas a pas</h4>
<p>El recorregut perioperatori en ordre, de la preparació a l'alta, per reduir la incertesa.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>V3. Què notaràs: l'anestèsia, explicada amb calma</h4>
<p>Sensacions esperables, el paper de l'anestesista i respostes a pors freqüents.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<p><strong>Eines de calma</strong></p>
<h4>V4. Entrena la teva calma: la respiració que et portes al quiròfan</h4>
<p>Respiració lenta diafragmàtica com a eina principal d'autoregulació.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>V4-B. Entrenar l'atenció: el múscul que torna</h4>
<p>Mindfulness breu i guiat: tornar amb amabilitat al present quan la ment se'n va al futur.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<p><strong>Preparar-te per dins</strong></p>
<h4>V5. El que esperes importa</h4>
<p>Expectatives realistes i concretes sobre la recuperació; objectius personals assolibles.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>V6. El dolor, ben explicat (I): el teu sistema d'alarma</h4>
<p>El dolor com a sistema de protecció modulable, no com a mesura exacta de dany.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>V7. El dolor, ben explicat (II): el que tu pots fer</h4>
<p>Estratègies pràctiques davant el dolor agut: respirar, avisar aviat, moure't pautadament.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>V8. La ment que avisa massa</h4>
<p>Reconèixer els pensaments anticipatoris com a avisos mentals, no com a fets.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>V9. El que importa: el teu per a què</h4>
<p>Connecta la preparació amb els teus valors i tradueix-los en passos petits.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<p><strong>Dormir i el dia D</strong></p>
<h4>V10. Dormir millor abans d'operar-te</h4>
<p>Mesures bàsiques d'higiene del son; enllaça amb l'àudio nocturn.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>V11. Mode Dia D: la teva guia per avui</h4>
<p>Per a les 24–48 h abans: instruccions pràctiques i eines de regulació.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>V12. Els primers dies: tornar a poc a poc</h4>
<p>Després de la cirurgia: ajusta expectatives, recorda eines i repassa senyals d'alarma.</p>
<p class="muted small">(Vídeo pròximament.)</p>`,
    },
    {
      id: 'practica', open: false,
      title: '🎧 Práctica diaria (audios)',
      title_en: '🎧 Daily practice (audio)',
      title_ca: '🎧 Pràctica diària (àudios)',
      body: `<p>Herramientas para usar tantas veces como quieras. La respiración es la base: "cada práctica es un entrenamiento que te llevas al quirófano".</p>
<h4>P1. Respiración guiada diaria</h4>
<p>Práctica breve de respiración lenta diafragmática, con versión corta para momentos de pausa.</p>
<p class="muted small">(Audio próximamente.)</p>
<h4>P2. Volver al presente (grounding 5-4-3-2-1)</h4>
<p>Estabilización para momentos de agobio, orientando los sentidos al presente.</p>
<p class="muted small">(Audio próximamente.)</p>
<h4>P4. Atención abierta</h4>
<p>Práctica con ojos abiertos centrada en sonidos y respiración; para salas de espera y trayectos.</p>
<p class="muted small">(Audio próximamente.)</p>
<h4>P5. Paseo consciente</h4>
<p>Para acompañar tus caminatas de preparación, uniendo cuerpo y atención.</p>
<p class="muted small">(Audio próximamente.)</p>
<h4>P3. Audio nocturno</h4>
<p>Para conciliar el sueño: respiración, relajación del cuerpo e imaginería serena.</p>
<p class="muted small">(Audio próximamente.)</p>`,
      body_en: `<p>Tools to use as often as you like. Breathing is the foundation: "every practice is training you take to theatre".</p>
<h4>P1. Daily guided breathing</h4>
<p>Short slow diaphragmatic breathing practice, with a short version for pause moments.</p>
<p class="muted small">(Audio coming soon.)</p>
<h4>P2. Back to the present (5-4-3-2-1 grounding)</h4>
<p>Stabilisation for overwhelming moments, orienting the senses to the present.</p>
<p class="muted small">(Audio coming soon.)</p>
<h4>P4. Open attention</h4>
<p>Eyes-open practice focused on sounds and breath; for waiting rooms and journeys.</p>
<p class="muted small">(Audio coming soon.)</p>
<h4>P5. Mindful walk</h4>
<p>To go with your preparation walks, joining body and attention.</p>
<p class="muted small">(Audio coming soon.)</p>
<h4>P3. Night-time audio</h4>
<p>To help you fall asleep: breathing, body relaxation and calm imagery.</p>
<p class="muted small">(Audio coming soon.)</p>`,
      body_ca: `<p>Eines per fer servir tantes vegades com vulguis. La respiració és la base: "cada pràctica és un entrenament que et portes al quiròfan".</p>
<h4>P1. Respiració guiada diària</h4>
<p>Pràctica breu de respiració lenta diafragmàtica, amb versió curta per a moments de pausa.</p>
<p class="muted small">(Àudio pròximament.)</p>
<h4>P2. Tornar al present (grounding 5-4-3-2-1)</h4>
<p>Estabilització per a moments d'angoixa, orientant els sentits al present.</p>
<p class="muted small">(Àudio pròximament.)</p>
<h4>P4. Atenció oberta</h4>
<p>Pràctica amb ulls oberts centrada en sons i respiració; per a sales d'espera i trajectes.</p>
<p class="muted small">(Àudio pròximament.)</p>
<h4>P5. Passeig conscient</h4>
<p>Per acompanyar les teves caminades de preparació, unint cos i atenció.</p>
<p class="muted small">(Àudio pròximament.)</p>
<h4>P3. Àudio nocturn</h4>
<p>Per conciliar el son: respiració, relaxació del cos i imatgeria serena.</p>
<p class="muted small">(Àudio pròximament.)</p>`,
    },
    {
      id: 'profundizacion', open: false,
      title: '🧭 Profundización (opcional)',
      title_en: '🧭 Going deeper (optional)',
      title_ca: '🧭 Aprofundiment (opcional)',
      body: `<p>Tres sesiones más largas para quien quiera ir un paso más allá, tras el vídeo V9.</p>
<h4>SP1. Mirar de frente</h4>
<p>Identificar tu principal preocupación sobre la cirugía y revisar cómo intentas manejarla.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>SP2. Soltar la cuerda</h4>
<p>Observar pensamientos y sensaciones sin fusionarte con ellos ni luchar contra ellos.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<h4>SP3. Qué tipo de paciente quieres ser</h4>
<p>Traducir lo que te importa en una acción concreta ligada a tu operación y recuperación.</p>
<p class="muted small">(Vídeo próximamente.)</p>
<p class="muted small">Estas sesiones son opcionales. En una próxima versión se ofrecerán según tu situación.</p>`,
      body_en: `<p>Three longer sessions for those who want to go a step further, after video V9.</p>
<h4>SP1. Facing it</h4>
<p>Identify your main concern about surgery and review how you try to manage it.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>SP2. Dropping the rope</h4>
<p>Observe thoughts and sensations without fusing with them or fighting them.</p>
<p class="muted small">(Video coming soon.)</p>
<h4>SP3. What kind of patient you want to be</h4>
<p>Turn what matters to you into a concrete action tied to your operation and recovery.</p>
<p class="muted small">(Video coming soon.)</p>
<p class="muted small">These sessions are optional. A future version will offer them according to your situation.</p>`,
      body_ca: `<p>Tres sessions més llargues per a qui vulgui anar un pas més enllà, després del vídeo V9.</p>
<h4>SP1. Mirar de cara</h4>
<p>Identificar la teva principal preocupació sobre la cirurgia i revisar com intentes gestionar-la.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>SP2. Deixar anar la corda</h4>
<p>Observar pensaments i sensacions sense fusionar-t'hi ni lluitar-hi.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<h4>SP3. Quin tipus de pacient vols ser</h4>
<p>Traduir el que t'importa en una acció concreta lligada a la teva operació i recuperació.</p>
<p class="muted small">(Vídeo pròximament.)</p>
<p class="muted small">Aquestes sessions són opcionals. Una versió futura les oferirà segons la teva situació.</p>`,
    },
    {
      id: 'ayuda', open: false,
      title: '🆘 Si lo necesitas: ayuda',
      title_en: '🆘 If you need it: help',
      title_ca: '🆘 Si ho necessites: ajuda',
      body: `<p>Esta app es de apoyo, no sustituye la atención de un profesional. Si lo estás pasando mal, pedir ayuda es un acto de valentía y funciona.</p>
<ul><li><strong>024</strong> — Línea de atención a la conducta suicida (gratuita, 24 h, confidencial). <a href="tel:024">Llamar</a></li>
<li><strong>112</strong> — Emergencias. <a href="tel:112">Llamar</a></li>
<li>Si tu proceso está relacionado con un <strong>cáncer</strong>, la <strong>AECC</strong> ofrece atención psicológica gratuita para pacientes y familiares: <strong>900 100 036</strong>. <a href="tel:900100036">Llamar</a></li></ul>
<p>También puedes acudir a tu centro de salud o a urgencias, o contárselo a alguien de confianza que esté cerca.</p>`,
      body_en: `<p>This app is supportive; it does not replace professional care. If you're struggling, asking for help is an act of courage and it works.</p>
<ul><li><strong>024</strong> — Suicidal behaviour helpline (free, 24 h, confidential). <a href="tel:024">Call</a></li>
<li><strong>112</strong> — Emergencies. <a href="tel:112">Call</a></li>
<li>If your process is related to <strong>cancer</strong>, the <strong>AECC</strong> offers free psychological support for patients and families: <strong>900 100 036</strong>. <a href="tel:900100036">Call</a></li></ul>
<p>You can also go to your health centre or A&E, or tell someone you trust who is nearby.</p>`,
      body_ca: `<p>Aquesta app és de suport; no substitueix l'atenció d'un professional. Si ho estàs passant malament, demanar ajuda és un acte de valentia i funciona.</p>
<ul><li><strong>024</strong> — Línia d'atenció a la conducta suïcida (gratuïta, 24 h, confidencial). <a href="tel:024">Trucar</a></li>
<li><strong>112</strong> — Emergències. <a href="tel:112">Trucar</a></li>
<li>Si el teu procés està relacionat amb un <strong>càncer</strong>, l'<strong>AECC</strong> ofereix atenció psicològica gratuïta per a pacients i familiars: <strong>900 100 036</strong>. <a href="tel:900100036">Trucar</a></li></ul>
<p>També pots anar al teu centre de salut o a urgències, o explicar-ho a algú de confiança que tinguis a prop.</p>`,
    },
  ],
};

// Secuencia estructurada de vídeos del programa (Fase 3). `day` = día de programa
// (anclado a startDate); `calendar` = activación relativa a la cirugía (pre/post).
// `priority` = pieza esencial a priorizar si la cirugía está cerca. `vimeo` se
// rellena con el ID cuando el contenido esté validado.
export const MENTAL_PIECES = [
  { id: 'v1', day: 0, priority: true, vimeo: { es: '1210571832' }, title: 'V1. Bienvenida', title_en: 'V1. Welcome', title_ca: 'V1. Benvinguda',
    desc: 'Presenta el programa, normaliza dudas y nervios, e introduce el botón de pausa.', desc_en: 'Introduces the programme, normalises doubts and nerves, and introduces the pause button.', desc_ca: 'Presenta el programa, normalitza dubtes i nervis, i introdueix el botó de pausa.' },
  { id: 'v2', day: 1, priority: true, vimeo: { es: '1211511202' }, title: 'V2. Tu cirugía, paso a paso', title_en: 'V2. Your surgery, step by step', title_ca: 'V2. La teva cirurgia, pas a pas',
    desc: 'El recorrido perioperatorio en orden, de la preparación al alta, para reducir la incertidumbre.', desc_en: 'The perioperative journey in order, from preparation to discharge, to reduce uncertainty.', desc_ca: 'El recorregut perioperatori en ordre, de la preparació a l’alta, per reduir la incertesa.' },
  { id: 'v3', day: 2, priority: true, vimeo: '', title: 'V3. Qué notarás: la anestesia', title_en: 'V3. What you\'ll notice: anaesthesia', title_ca: 'V3. Què notaràs: l’anestèsia',
    desc: 'Sensaciones esperables, el papel del anestesista y respuestas a miedos frecuentes.', desc_en: 'Expected sensations, the anaesthetist\'s role and answers to common fears.', desc_ca: 'Sensacions esperables, el paper de l’anestesista i respostes a pors freqüents.' },
  { id: 'v4', day: 3, priority: true, vimeo: '', title: 'V4. Entrena tu calma (respiración)', title_en: 'V4. Train your calm (breathing)', title_ca: 'V4. Entrena la teva calma (respiració)',
    desc: 'Respiración lenta diafragmática como herramienta principal de autorregulación.', desc_en: 'Slow diaphragmatic breathing as the main self-regulation tool.', desc_ca: 'Respiració lenta diafragmàtica com a eina principal d’autoregulació.' },
  { id: 'v4b', day: 4, vimeo: '', title: 'V4-B. Entrenar la atención', title_en: 'V4-B. Training attention', title_ca: 'V4-B. Entrenar l’atenció',
    desc: 'Mindfulness breve y guiado: volver con amabilidad al presente.', desc_en: 'Brief, guided mindfulness: gently returning to the present.', desc_ca: 'Mindfulness breu i guiat: tornar amb amabilitat al present.' },
  { id: 'v5', day: 5, priority: true, vimeo: '', title: 'V5. Lo que esperas importa', title_en: 'V5. What you expect matters', title_ca: 'V5. El que esperes importa',
    desc: 'Expectativas realistas y concretas sobre la recuperación; objetivos personales alcanzables.', desc_en: 'Realistic, concrete recovery expectations; achievable personal goals.', desc_ca: 'Expectatives realistes i concretes sobre la recuperació; objectius personals assolibles.' },
  { id: 'v6', day: 6, vimeo: '', title: 'V6. El dolor, bien explicado (I)', title_en: 'V6. Pain, well explained (I)', title_ca: 'V6. El dolor, ben explicat (I)',
    desc: 'El dolor como sistema de protección modulable, no como medida exacta de daño.', desc_en: 'Pain as a modulable protection system, not an exact measure of damage.', desc_ca: 'El dolor com a sistema de protecció modulable, no com a mesura exacta de dany.' },
  { id: 'v7', day: 7, vimeo: '', title: 'V7. El dolor, bien explicado (II)', title_en: 'V7. Pain, well explained (II)', title_ca: 'V7. El dolor, ben explicat (II)',
    desc: 'Estrategias prácticas ante el dolor agudo: respirar, avisar pronto, moverte pautadamente.', desc_en: 'Practical strategies for acute pain: breathe, speak up early, move as advised.', desc_ca: 'Estratègies pràctiques davant el dolor agut: respirar, avisar aviat, moure’t pautadament.' },
  { id: 'v8', day: 8, vimeo: '', title: 'V8. La mente que avisa demasiado', title_en: 'V8. The mind that warns too much', title_ca: 'V8. La ment que avisa massa',
    desc: 'Reconocer los pensamientos anticipatorios como avisos mentales, no como hechos.', desc_en: 'Recognising anticipatory thoughts as mental alerts, not facts.', desc_ca: 'Reconèixer els pensaments anticipatoris com a avisos mentals, no com a fets.' },
  { id: 'v9', day: 9, vimeo: '', title: 'V9. Lo que importa: tus valores', title_en: 'V9. What matters: your values', title_ca: 'V9. El que importa: els teus valors',
    desc: 'Conecta la preparación con tus valores y tradúcelos en pasos pequeños.', desc_en: 'Connect your preparation with your values and turn them into small steps.', desc_ca: 'Connecta la preparació amb els teus valors i tradueix-los en passos petits.' },
  { id: 'v10', day: 10, vimeo: '', title: 'V10. Dormir mejor', title_en: 'V10. Sleeping better', title_ca: 'V10. Dormir millor',
    desc: 'Medidas básicas de higiene del sueño; enlaza con el audio nocturno.', desc_en: 'Basic sleep hygiene; links to the night-time audio.', desc_ca: 'Mesures bàsiques d’higiene del son; enllaça amb l’àudio nocturn.' },
  { id: 'v11', calendar: 'pre', vimeo: '', title: 'V11. Modo Día D', title_en: 'V11. D-day mode', title_ca: 'V11. Mode Dia D',
    desc: 'Para las 24–48 h antes: instrucciones prácticas y herramientas de regulación.', desc_en: 'For the 24–48 h before: practical instructions and regulation tools.', desc_ca: 'Per a les 24–48 h abans: instruccions pràctiques i eines de regulació.' },
  { id: 'v12', calendar: 'post', vimeo: '', title: 'V12. Los primeros días', title_en: 'V12. The first days', title_ca: 'V12. Els primers dies',
    desc: 'Tras la cirugía: ajusta expectativas, recuerda herramientas y repasa señales de alarma.', desc_en: 'After surgery: adjust expectations, recall tools and review warning signs.', desc_ca: 'Després de la cirurgia: ajusta expectatives, recorda eines i repassa senyals d’alarma.' },
];

// Pantalla "Necesito una pausa" (§8.4 del diseño). Salida segura siempre accesible.
export const MENTAL_PAUSE = {
  title: 'Necesito una pausa',
  title_en: 'I need a pause',
  title_ca: 'Necessito una pausa',
  body: `<p>Estoy contigo. Paramos todo. Elige lo que te venga bien ahora; no hay prisa, y también puedes solo descansar.</p>
<h4>Respirar 2 minutos</h4>
<p>Siéntate cómodo. Inspira por la nariz contando hasta 4 y nota cómo sube tu abdomen. Espira despacio por la boca contando hasta 6. Repite a tu ritmo, sin forzar.</p>
<h4>Volver al presente (3 minutos)</h4>
<p>Sin prisa, nombra: 5 cosas que ves, 4 que puedes tocar, 3 que oyes, 2 que hueles y 1 que puedes saborear. Estás aquí, ahora.</p>
<h4>Hablar con alguien que pueda ayudarte</h4>
<ul><li><strong>024</strong> — Conducta suicida (gratuita, 24 h, confidencial). <a href="tel:024">Llamar</a></li>
<li><strong>112</strong> — Emergencias. <a href="tel:112">Llamar</a></li>
<li>Si hay un <strong>cáncer</strong> de por medio, la <strong>AECC</strong> ofrece apoyo psicológico gratuito: <strong>900 100 036</strong>. <a href="tel:900100036">Llamar</a></li></ul>
<p>Cuando quieras, retomamos donde lo dejaste. Parar y volver también es entrenar.</p>`,
  body_en: `<p>I'm with you. We stop everything. Choose what feels right now; there's no rush, and you can just rest too.</p>
<h4>Breathe for 2 minutes</h4>
<p>Sit comfortably. Breathe in through your nose counting to 4 and feel your abdomen rise. Breathe out slowly through your mouth counting to 6. Repeat at your own pace, without forcing.</p>
<h4>Back to the present (3 minutes)</h4>
<p>Slowly, name: 5 things you see, 4 you can touch, 3 you hear, 2 you smell and 1 you can taste. You are here, now.</p>
<h4>Talk to someone who can help</h4>
<ul><li><strong>024</strong> — Suicidal behaviour (free, 24 h, confidential). <a href="tel:024">Call</a></li>
<li><strong>112</strong> — Emergencies. <a href="tel:112">Call</a></li>
<li>If <strong>cancer</strong> is involved, the <strong>AECC</strong> offers free psychological support: <strong>900 100 036</strong>. <a href="tel:900100036">Call</a></li></ul>
<p>Whenever you like, we'll pick up where you left off. Stopping and coming back is also training.</p>`,
  body_ca: `<p>Estic amb tu. Aturem tot. Tria el que et vagi bé ara; no hi ha pressa, i també pots només descansar.</p>
<h4>Respirar 2 minuts</h4>
<p>Seu còmode. Inspira pel nas comptant fins a 4 i nota com puja el teu abdomen. Espira a poc a poc per la boca comptant fins a 6. Repeteix al teu ritme, sense forçar.</p>
<h4>Tornar al present (3 minuts)</h4>
<p>Sense pressa, anomena: 5 coses que veus, 4 que pots tocar, 3 que sents, 2 que olores i 1 que pots assaborir. Ets aquí, ara.</p>
<h4>Parlar amb algú que pugui ajudar-te</h4>
<ul><li><strong>024</strong> — Conducta suïcida (gratuïta, 24 h, confidencial). <a href="tel:024">Trucar</a></li>
<li><strong>112</strong> — Emergències. <a href="tel:112">Trucar</a></li>
<li>Si hi ha un <strong>càncer</strong> pel mig, l'<strong>AECC</strong> ofereix suport psicològic gratuït: <strong>900 100 036</strong>. <a href="tel:900100036">Trucar</a></li></ul>
<p>Quan vulguis, reprenem on ho vam deixar. Aturar-se i tornar també és entrenar.</p>`,
};

// Pantalla breve de consentimiento previa al cuestionario de cribado.
export const MENTAL_CONSENT = {
  body: `<p>Antes de empezar, unas líneas para que decidas con tranquilidad:</p>
<ul><li>Este cuestionario es una <strong>herramienta de apoyo</strong>, no un diagnóstico ni una terapia.</li>
<li>Tus respuestas se guardan <strong>solo en este dispositivo</strong>; no las vemos ni hay seguimiento en tiempo real.</li>
<li>Según tus respuestas, la app puede <strong>recomendarte contactar</strong> con tu equipo o mostrarte teléfonos de ayuda.</li>
<li>Puedes parar cuando quieras con «Necesito una pausa».</li></ul>
<p>Son unas pocas preguntas breves. ¿Empezamos?</p>`,
  body_en: `<p>Before we start, a few lines so you can decide calmly:</p>
<ul><li>This questionnaire is a <strong>support tool</strong>, not a diagnosis or therapy.</li>
<li>Your answers are stored <strong>only on this device</strong>; we don't see them and there is no real-time monitoring.</li>
<li>Based on your answers, the app may <strong>recommend contacting</strong> your team or show you helplines.</li>
<li>You can stop anytime with "I need a pause".</li></ul>
<p>It's just a few short questions. Shall we start?</p>`,
  body_ca: `<p>Abans de començar, unes línies perquè decideixis amb tranquil·litat:</p>
<ul><li>Aquest qüestionari és una <strong>eina de suport</strong>, no un diagnòstic ni una teràpia.</li>
<li>Les teves respostes es desen <strong>només en aquest dispositiu</strong>; no les veiem ni hi ha seguiment en temps real.</li>
<li>Segons les teves respostes, l'app pot <strong>recomanar-te contactar</strong> amb el teu equip o mostrar-te telèfons d'ajuda.</li>
<li>Pots aturar-te quan vulguis amb «Necessito una pausa».</li></ul>
<p>Són només unes poques preguntes breus. Comencem?</p>`,
};

// Pantallas de resultado del cribado (triaje). Textos ES exactos del diseño §8;
// EN/CA traducción funcional. Los botones se renderizan según el nivel.
export const TRIAGE_SCREENS = {
  verde: {
    label: 'Sin señales de alerta hoy', label_en: 'No warning signs today', label_ca: 'Sense senyals d’alerta avui',
    body: `<p>Gracias por responder con sinceridad. Ahora mismo tus respuestas no muestran señales de alerta. Sigue cuidándote con las prácticas de calma y el resto del programa. Puedes repetir este cuestionario cuando quieras.</p>`,
    body_en: `<p>Thank you for answering honestly. Right now your answers show no warning signs. Keep looking after yourself with the calm practices and the rest of the programme. You can repeat this questionnaire whenever you like.</p>`,
    body_ca: `<p>Gràcies per respondre amb sinceritat. Ara mateix les teves respostes no mostren senyals d’alerta. Continua cuidant-te amb les pràctiques de calma i la resta del programa. Pots repetir aquest qüestionari quan vulguis.</p>`,
  },
  ambar: {
    label: 'Conviene compartirlo', label_en: 'Worth sharing it', label_ca: 'Convé compartir-ho',
    body: `<p>Gracias por responder con sinceridad. Tus respuestas de hoy muestran que estás pasando unos días exigentes, y queremos que no los pases en soledad. Te recomendamos comentarlo en tu próxima consulta —puedes descargar aquí un resumen de tus respuestas para llevarlo— o pedir cita con tu médico o médica de familia. Mientras tanto, todo el programa sigue contigo, y quizá te venga bien empezar hoy por la práctica de calma.</p>`,
    body_en: `<p>Thank you for answering honestly. Your answers today show you're going through some demanding days, and we don't want you to face them alone. We recommend mentioning it at your next appointment —you can download a summary of your answers here to take with you— or booking with your family doctor. Meanwhile, the whole programme stays with you, and it may help to start today with the calm practice.</p>`,
    body_ca: `<p>Gràcies per respondre amb sinceritat. Les teves respostes d’avui mostren que estàs passant uns dies exigents, i no volem que els passis en soledat. Et recomanem comentar-ho a la teva propera consulta —pots descarregar aquí un resum de les teves respostes per portar-lo— o demanar cita amb el teu metge o metgessa de família. Mentrestant, tot el programa segueix amb tu, i potser et va bé començar avui per la pràctica de calma.</p>`,
  },
  rojo: {
    label: 'Te vendría bien más apoyo', label_en: 'You would benefit from more support', label_ca: 'Et vindria bé més suport',
    body: `<p>Queremos ser honestos contigo: por tus respuestas, creemos que en este momento te merecerías más apoyo del que una aplicación puede darte. Esto no significa que algo vaya mal contigo: significa que estás cargando mucho, y que hay profesionales que pueden ayudarte de verdad. Te pedimos que esta semana contactes con tu centro de salud o con el equipo que lleva tu operación, y les enseñes este resumen que hemos preparado. La app seguirá aquí, con las prácticas de calma siempre disponibles. Dar este paso también es prepararse bien.</p>`,
    body_en: `<p>We want to be honest with you: from your answers, we think that right now you'd deserve more support than an app can give. This doesn't mean something is wrong with you: it means you're carrying a lot, and there are professionals who can truly help. We ask you to contact your health centre or your surgical team this week, and show them this summary we've prepared. The app will stay here, with the calm practices always available. Taking this step is also preparing well.</p>`,
    body_ca: `<p>Volem ser honestos amb tu: per les teves respostes, creiem que en aquest moment et mereixeries més suport del que una aplicació et pot donar. Això no vol dir que alguna cosa vagi malament amb tu: vol dir que estàs carregant molt, i que hi ha professionals que et poden ajudar de veritat. Et demanem que aquesta setmana contactis amb el teu centre de salut o amb l’equip que porta la teva operació, i els ensenyis aquest resum que hem preparat. L’app seguirà aquí, amb les pràctiques de calma sempre disponibles. Fer aquest pas també és preparar-se bé.</p>`,
  },
  crisis: {
    label: 'Habla con alguien ahora', label_en: 'Talk to someone now', label_ca: 'Parla amb algú ara',
    body: `<p>Gracias por tu sinceridad. Lo que has contado es importante y no queremos que lo lleves en soledad ni un día más. Si estás pensando en hacerte daño, por favor, habla ahora con alguien que pueda ayudarte:</p>
<ul><li><strong>024</strong> — Línea de atención a la conducta suicida (gratuita, 24 horas, confidencial). <a href="tel:024">Llamar</a></li>
<li><strong>112</strong> — Emergencias. <a href="tel:112">Llamar</a></li></ul>
<p>También puedes acudir a tu centro de salud o a urgencias, o contárselo a alguien de confianza que esté cerca. Esta aplicación no puede darte la ayuda que mereces en este momento, y por eso te lo decimos con claridad. Pedir ayuda es un acto de valentía, y funciona.</p>`,
    body_en: `<p>Thank you for your honesty. What you've shared matters and we don't want you to carry it alone one more day. If you are thinking of harming yourself, please talk now to someone who can help:</p>
<ul><li><strong>024</strong> — Suicidal behaviour helpline (free, 24 h, confidential). <a href="tel:024">Call</a></li>
<li><strong>112</strong> — Emergencies. <a href="tel:112">Call</a></li></ul>
<p>You can also go to your health centre or A&E, or tell someone you trust who is nearby. This app cannot give you the help you deserve right now, and that's why we're telling you clearly. Asking for help is an act of courage, and it works.</p>`,
    body_ca: `<p>Gràcies per la teva sinceritat. El que has explicat és important i no volem que ho portis en soledat ni un dia més. Si estàs pensant a fer-te mal, si us plau, parla ara amb algú que pugui ajudar-te:</p>
<ul><li><strong>024</strong> — Línia d’atenció a la conducta suïcida (gratuïta, 24 h, confidencial). <a href="tel:024">Trucar</a></li>
<li><strong>112</strong> — Emergències. <a href="tel:112">Trucar</a></li></ul>
<p>També pots anar al teu centre de salut o a urgències, o explicar-ho a algú de confiança que tinguis a prop. Aquesta aplicació no et pot donar l’ajuda que mereixes en aquest moment, i per això t’ho diem amb claredat. Demanar ajuda és un acte de valentia, i funciona.</p>`,
  },
};

// Guía de nutrición (aloja el test MUST: inicial y final).
export const NUTRITION_GUIDE = {
  intro: {
    title: 'Nutrición antes de la cirugía',
    title_en: 'Nutrition before surgery',
    title_ca: 'Nutrició abans de la cirurgia',
    body: `<p>Llegar bien nutrido ayuda a cicatrizar y a recuperarte mejor. Dos ideas clave: <strong>suficiente proteína</strong> cada día y buena <strong>hidratación</strong>.</p>
<h4>Proteína</h4>
<p>Reparte la proteína en todas las comidas (huevos, lácteos, legumbres, pescado, carne, tofu). Si comes poco, prioriza primero la proteína del plato.</p>
<h4>Hidratación</h4>
<p>Bebe agua a lo largo del día, salvo que tu equipo te indique otra cosa.</p>
<h4>Evalúa tu riesgo nutricional</h4>
<p>El test <strong>MUST</strong> estima tu riesgo nutricional en 1 minuto. Te recomendamos hacerlo <strong>al empezar</strong> y <strong>al final del programa</strong> para ver tu evolución, y compartirlo con tu equipo.</p>`,
    body_en: `<p>Arriving well nourished helps you heal and recover better. Two key ideas: <strong>enough protein</strong> every day and good <strong>hydration</strong>.</p>
<h4>Protein</h4>
<p>Spread protein across all meals (eggs, dairy, legumes, fish, meat, tofu). If you eat little, prioritise the protein on your plate first.</p>
<h4>Hydration</h4>
<p>Drink water throughout the day, unless your team advises otherwise.</p>
<h4>Assess your nutritional risk</h4>
<p>The <strong>MUST</strong> test estimates your nutritional risk in 1 minute. We recommend doing it <strong>at the start</strong> and <strong>at the end of the programme</strong> to track your progress, and sharing it with your team.</p>`,
    body_ca: `<p>Arribar ben nodrit ajuda a cicatritzar i a recuperar-te millor. Dues idees clau: <strong>prou proteïna</strong> cada dia i bona <strong>hidratació</strong>.</p>
<h4>Proteïna</h4>
<p>Reparteix la proteïna en tots els àpats (ous, lactis, llegums, peix, carn, tofu). Si menges poc, prioritza primer la proteïna del plat.</p>
<h4>Hidratació</h4>
<p>Beu aigua al llarg del dia, tret que el teu equip t’indiqui una altra cosa.</p>
<h4>Avalua el teu risc nutricional</h4>
<p>El test <strong>MUST</strong> estima el teu risc nutricional en 1 minut. Et recomanem fer-lo <strong>en començar</strong> i <strong>al final del programa</strong> per veure la teva evolució, i compartir-lo amb el teu equip.</p>`,
  },
};

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
