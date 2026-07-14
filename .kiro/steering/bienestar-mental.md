# Bienestar mental — requisitos de contenido

> **Estado: BORRADOR / INFORMACIÓN PRELIMINAR. No implementar todavía.**
> Estas directrices definen qué contenidos son admisibles en el apartado de
> Bienestar mental de PreHabilítame. Deben tenerse en cuenta cuando se construya
> la sección; de momento son solo de referencia.

## Contexto y premisa

- El apartado de Bienestar mental es **autoadministrado por el paciente**, **sin
  respaldo psicológico continuo**.
- La app **solo puede derivar** (referir) cuando detecta necesidad; **no** hace
  seguimiento ni monitorización.
- Que no exista respaldo psicológico continuo **cambia radicalmente** qué
  contenidos son admisibles.

## Reglas de oro

1. **Solo contenidos de bajo riesgo iatrogénico.**
   - **Fuera:** ejercicios de exposición intensa; aceptación profunda del malestar
     sin acompañamiento; trabajo con trauma; contenido que pida al usuario
     "quedarse con" emociones muy dolorosas sin salida guiada.
   - **Dentro:** información; entrenamiento de habilidades fisiológicas
     (respiración, relajación); psicoeducación amable; defusión ligera; valores;
     sueño; autocompasión suave.

2. **Toda pieza tiene salida segura.** Cada vídeo/audio termina **regulando a la
   baja** (nunca se deja al usuario activado). El botón **"Necesito una pausa"** es
   permanente.

3. **La app nunca promete vigilancia.** Los cribados generan **recomendaciones y
   derivación documentada**, no monitorización en tiempo real. Esto se dice
   explícitamente en el consentimiento y en las pantallas de resultado.

4. **Derivar = accionable.** Como no hay psicólogo detrás, "derivar" significa:
   - (a) mensaje claro al usuario;
   - (b) informe descargable/enviable con sus puntuaciones para llevar a su médico
     de familia o a la consulta de preanestesia;
   - (c) teléfonos útiles (su centro; **024** línea de atención a la conducta
     suicida; **112** emergencias);
   - (d) registro del evento si la app está integrada con el circuito asistencial.

5. **Tono adulto, cálido, sobrio.** Sin infantilizar, sin dramatizar, sin promesas.
   - Sí: "te ayudará a llegar mejor preparado".
   - No: "eliminará tu ansiedad".

6. **Accesibilidad.** Nivel de lectura ≤ 6.º de primaria; **audio-primero**;
   subtítulos siempre; frases cortas; una idea por escena.


---

# Modelo terapéutico: qué terapias y por qué

> Procedente de un diseño del modelo (referencia interna: "Claude Fable").
> Sigue siendo **BORRADOR de referencia; no implementar todavía.**

Modelo **integrador en 4 capas**, ordenadas de **mayor a menor solidez de
evidencia** en el contexto preoperatorio.

## Las 4 capas

- **Capa 1 — Información procedimental y sensorial.** Explica detalladamente qué
  pasará y qué notará el paciente. Origen: preparación psicológica clásica;
  **evidencia más sólida y antigua** (reduce ansiedad, dolor y estancia
  hospitalaria). Es el **núcleo obligatorio** y se aplica **primero**.
- **Capa 2 — Entrenamiento de regulación fisiológica.** Respiración lenta
  diafragmática, relajación y grounding. Origen: CBT y medicina conductual.
  Evidencia consistente como componente. Es la **práctica diaria / "gimnasio"**
  del programa.
- **Capa 3 — Optimización de expectativas.** Genera expectativas realistas y
  personales de recuperación. Modelo de expectativas (validado por el ECA
  **PSY-HEART** en cirugía cardíaca); ECA de calidad con efectos a los 6 meses.
  Se organiza como **módulo específico + hilo transversal**.
- **Capa 4 — Flexibilidad psicológica ligera.** Defusión, valores, acción
  comprometida y autocompasión. Origen: ACT y CFT. Evidencia sólida en dolor
  crónico y emergente en perioperatorio. Funciona como **marco narrativo**
  ("entrenar la mente") y **módulos de ampliación**.

## Componentes adicionales

- **Educación en neurociencia del dolor (PNE) microdosificada.** Mejora la
  catastrofización y las actitudes; efecto sobre el dolor pequeño. Se entrega en
  **dos píldoras** y **requiere validación explícita primero**.
- **Entrenamiento atencional.** Mindfulness breve, secular y **siempre guiado**
  (adaptado de MBSR/MBCT). Efectos pequeños-moderados sobre la ansiedad en apps;
  evidencia perioperatoria aún escasa. Se implementa en la versión **V4-B** con
  audios **P4/P5**. **Excluye explícitamente** prácticas largas, silenciosas o de
  escaneo corporal (body scan) minucioso.
- **Higiene del sueño y audio nocturno.** Versión simplificada de **CBT-I**.
  Justificación: el insomnio preoperatorio predice el dolor agudo. Módulo corto
  con audio.

## Por qué no se usa ACT "pura"

En un formato **autoadministrado y breve**, la mejor relación eficacia/riesgo la
dan las **capas 1, 2 y 3**. ACT aporta el marco narrativo ideal ("así como
entrenas el cuerpo, entrenas la mente") y ejercicios seguros de defusión y
valores, pero los **ejercicios de aceptación intensa requieren acompañamiento
profesional** → **excluidos de la v1**.


---

# 3. Sistema de cribado y derivación (sin psicólogo detrás)

> **BORRADOR de referencia; no implementar todavía.**
> Sistema automatizado que evalúa y clasifica al paciente de forma autónoma
> durante el proceso perioperatorio. Reglas transparentes, **sin aprendizaje
> automático en v1**.

## 3.1. Batería basal

Evaluación inicial de **4–6 min**, administrada en el **onboarding**,
inmediatamente después del consentimiento. Orden de los instrumentos:

1. **Termómetro del distrés (0–10)** — 1 ítem, puerta de entrada ultrabreve.
   Si **≥ 4**, continúa la batería completa con más atención (nunca decide en
   solitario).
2. **PHQ-4 (PHQ-2 + GAD-2)** — 4 ítems (depresión + ansiedad general).
   - Si **PHQ-2 ≥ 3** → despliega **PHQ-9**.
   - Si **GAD-2 ≥ 3** → despliega **GAD-7**.
3. **PHQ-9 (condicional)** — 9 ítems, gravedad depresiva.
   - **≥ 10** (moderada) → recomendación de derivación.
   - **≥ 15** → derivación firme.
   - **Ítem 9 ≥ 1** → activa **inmediatamente** el protocolo de crisis.
4. **GAD-7 (condicional)** — 7 ítems, gravedad ansiosa.
   - **≥ 10** → derivación recomendada.
   - **≥ 15** → derivación firme.
5. **APAIS completa (validación española)** — 6 ítems (ansiedad quirúrgica +
   necesidad de información).
   - Ansiedad **≥ 10–11** → itinerario reforzado.
   - Subescala de información → personaliza el nivel de detalle informativo.
6. **PCS-6 (catastrofización del dolor, forma breve)** — 6 ítems. Si elevado →
   refuerza automáticamente los módulos de dolor y el seguimiento.
7. **Expectativa de recuperación (0–10)** — 1 ítem. Si **≤ 4** → refuerzo
   específico en el módulo de expectativas.

## Reevaluaciones temporales

- **Diaria (opcional):** micro-medida de ansiedad (0–10), ~10 s.
- **Semanal:** PHQ-4 repetido.
- **Preoperatorio inmediato (48–72 h antes):** APAIS + STAI-6.
- **Postoperatorio (7 y 30 días):** dolor (0–10) + PHQ-4.

## 3.2. Triaje (reglas transparentes, sin ML en v1)

- **VERDE** — sin cortes superados → itinerario completo autoguiado.
- **ÁMBAR** — APAIS-ansiedad ≥ 10–11, o PHQ-9 10–14, o GAD-7 10–14, o trayectoria
  diaria ascendente ≥ 3 días → itinerario completo + mensaje recomendando comentar
  el estado de ánimo en la consulta de preanestesia + **informe descargable** con
  puntuaciones + **recribado anticipado a 5–7 días**.
- **ROJO** — PHQ-9 ≥ 15, o GAD-7 ≥ 15, o empeoramiento fiable en recribado →
  pantalla de **derivación firme** (texto §8.2) + informe descargable +
  recomendación explícita de contactar con su centro de salud esta semana + (si hay
  integración asistencial) notificación documentada al circuito. Los contenidos de
  **estabilización** (respiración, grounding, información básica) **permanecen
  accesibles**; los módulos más exigentes (A2 valores en profundidad, PNE avanzada)
  se **posponen** con mensaje amable, no punitivo.
- **CRISIS** — PHQ-9 ítem 9 ≥ 1, o texto libre con contenido de riesgo → pantalla
  **inmediata** de crisis (texto §8.3) con **024** y **112** en un toque, mensaje
  empático y **sin ningún otro contenido interpuesto**. La app no continúa el
  cribado hasta que el usuario sale de esa pantalla por decisión propia.

## Nunca se bloquea

Siempre accesibles, en cualquier estado de triaje: **respiración, grounding, botón
de pausa, información procedimental básica, recursos de crisis, informe de
puntuaciones**.


---

# 4. Arquitectura y flujo de contenidos

> **BORRADOR de referencia; no implementar todavía.**
> La entrega se adapta al **tiempo disponible** del paciente antes de la cirugía.

## 4.1. Itinerarios según días hasta la cirugía

- **Exprés (< 7 días):** V1, V2, V3, V4 (+ práctica diaria) → V5 → V11. Opcionales
  si hay tiempo: V6 y V10.
- **Estándar (1–4 semanas):** catálogo completo en el orden del mapa, **1 vídeo/día
  + práctica diaria de respiración**. Tras V9 se ofrece la **Sesión de
  Profundización ACT (SP1–SP3)**, opcional y **solo para perfiles Verde o Ámbar**.
- **Extendido (> 4 semanas):** semanas 1–2 igual que el Estándar. Desde la semana 3,
  **mantenimiento semanal** (práctica + repaso breve + micro-medida) con "repesca"
  de vídeos pendientes y SP1–SP3 opcional. **Fase intensiva** al faltar **10 días**.

## 4.2. Mapa de contenidos (itinerario estándar)

| Día | Pieza | Título | Dur. | Desbloqueo |
|-----|-------|--------|------|------------|
| 0 | Onboarding + cribado + **V1** | Bienvenida | 8 min | Inmediato |
| 1 | **V2** | Tu cirugía, paso a paso | 4 min | Tras V1 |
| 1+ | **P1** (audio) | Respiración | 5 min | Normalmente tras V4; se adelanta al día 1 como "versión guiada corta" |
| 2 | **V3** | Qué notarás (sensorial + anestesia) | 4 min | Tras V2; profundidad según APAIS-información |
| 3 | **V4** | Entrena tu calma (tutorial de respiración) | 3 min | Tras V3 |
| 4 | **V4-B** | Entrenar la atención (mindfulness breve) | 3 min | Tras V4 |
| 4+ | **P4 / P5** (audios) | Atención abierta / Paseo consciente | 4 / 6 min | Tras V4-B; alternan con P1 |
| 5 | **V5** | Lo que esperas importa (expectativas) | 3 min | Tras V4-B |
| 6 | **V6** | El dolor, bien explicado I | 3 min | Tras V5 |
| 7 | **V7** + recribado breve (PHQ-4 + ansiedad 0–10) | El dolor, bien explicado II | 3 + 1 min | Tras V6 (automático) |
| 8 | **V8** | La mente que avisa | 4 min | Tras completar recribado |
| 9 | **V9** | Lo que importa (valores) | 3 min | Tras V8 |
| 10 | **V10** + **P3** nocturno | Dormir mejor | 3 + 8 min | Tras V9 |
| 11–13 (opc.) | **SP1–SP3** | Sesión de Profundización ACT | 3 × 10–12 min | Tras V9; **solo Verde/Ámbar** |
| −2 a −1 | **V11** + APAIS/STAI-6 | Modo Día D | 3 min | Automático por calendario |
| +1 a +7 | **V12** | Los primeros días + seguimiento | 4 min | Automático por calendario (postop) |

## Reglas de presentación y consumo

- **Límite:** máximo **una pieza nueva al día** (evita atracones de información).
- **Refuerzo motivacional:** la práctica de respiración se sugiere a diario con
  cuenta atrás y mensajes de progreso ("cada práctica es un entrenamiento que te
  llevas al quirófano").
- **Biblioteca accesible:** todo lo visualizado se guarda y queda disponible para
  reproducir en cualquier momento.
- **Flexibilidad absoluta:** el usuario controla su itinerario y puede saltarse
  cualquier pieza **sin penalización**.


---

# 5. Reglas de producción de vídeos (marco común)

> No aporta contenido clínico nuevo. **Resumen operativo para Kiro:** todos los
> vídeos comparten un mismo marco de presentación; son **breves, claros,
> accesibles, de tono adulto y calmado**, y **siempre terminan bajando la
> activación**. Estructura fija: apertura → idea clave → desarrollo → aterrizaje
> personal → cierre regulador → continuidad. No hacen falta aquí detalles de
> estética, sonido, planos ni prompts de generación.
>
> **Producción:** los vídeos se crean con otra IA y se insertan en la app desde
> **Vimeo** (mismo método que Ejercicio y Entrenamiento respiratorio: `<div
> class="video"><iframe src="https://player.vimeo.com/video/ID" …>`).

# 6. Catálogo de vídeos

- **V1. Bienvenida: entrena tu mente para tu cirugía** — presenta el programa,
  normaliza dudas/nervios, explica que la mente también se entrena e introduce el
  **botón de pausa**.
- **V2. Tu cirugía, paso a paso** — recorrido perioperatorio cronológico (de la
  preparación al alta) para reducir incertidumbre; **adaptar al circuito del
  hospital**.
- **V3. Qué notarás: la anestesia, explicada con calma** — sensaciones esperables,
  papel del anestesista, miedos frecuentes (despertar intraoperatorio,
  desorientación, náuseas/dolor al despertar).
- **V4. Entrena tu calma: la respiración que se lleva al quirófano** — respiración
  lenta diafragmática como herramienta principal, vinculada a práctica diaria.
- **V4-B. Entrenar la atención: el músculo que vuelve** — mindfulness breve y
  secular; volver con amabilidad al presente.
- **V5. Lo que esperas importa** — expectativas realistas y concretas; objetivos
  personales alcanzables.
- **V6. El dolor, bien explicado (I): tu sistema de alarma** — PNE píldora 1; valida
  el dolor y lo explica como sistema de protección modulable, no medida de daño.
- **V7. El dolor, bien explicado (II): lo que tú puedes hacer** — PNE píldora 2;
  estrategias del paciente (respiración, avisar pronto, movilización pautada,
  modulación atencional).
- **V8. La mente que avisa demasiado** — miedo y pensamientos anticipatorios desde
  **defusión ligera**; pensamientos como avisos, no hechos.
- **V9. Lo que importa: tu para qué** — conecta la preparación con **valores**
  personales traducidos en pasos concretos.
- **V10. Dormir mejor antes de operarte** — higiene del sueño básica; enlaza con el
  audio nocturno.
- **V11. Modo Día D: tu guía para hoy** — 24–48 h antes; instrucciones prácticas,
  herramientas de regulación, mensaje de acompañamiento.
- **V12. Los primeros días: volver poco a poco** — postoperatorio; ajusta
  expectativas, recuerda herramientas de dolor/movilización, **señales de alarma a
  personalizar según la cirugía**.

## Sesión de Profundización ACT (tras V9; opcional)

**Solo perfiles VERDE/ÁMBAR; no tras crisis.**

- **SP1. Mirar de frente** — identificar la principal preocupación y revisar qué
  estrategias usa la persona para manejarla.
- **SP2. Soltar la cuerda** — defusión cognitiva; observar pensamientos y
  sensaciones sin fusionarse ni luchar.
- **SP3. Qué tipo de paciente quieres ser** — valores y compromiso conductual → una
  acción concreta ligada a la operación y la recuperación.

# 7. Audios de práctica (herramientas reutilizables)

- **P1. Respiración guiada diaria** — respiración lenta diafragmática; con versión
  corta para momentos de pausa.
- **P2. Grounding 5-4-3-2-1** — estabilización para momentos de agobio; orientación
  sensorial al presente.
- **P3. Audio nocturno** — conciliación del sueño (respiración, relajación corporal,
  imaginería serena).
- **P4. Atención abierta** — ojos abiertos, sonidos y respiración; para salas de
  espera y trayectos.
- **P5. Paseo consciente** — acompaña caminatas de preparación; integra
  prehabilitación física + entrenamiento atencional.


---

# 8. Micro-textos críticos de la app (redacción EXACTA)

> **Redacción exacta a usar tal cual.** No parafrasear al implementar.

## 8.1. Resultado ÁMBAR

"Gracias por responder con sinceridad. Tus respuestas de hoy muestran que estás
pasando unos días exigentes, y queremos que no los pases en soledad. Te
recomendamos comentarlo en tu próxima consulta —puedes descargar aquí un resumen de
tus respuestas para llevarlo— o pedir cita con tu médico o médica de familia.
Mientras tanto, todo el programa sigue contigo, y quizá te venga bien empezar hoy
por la práctica de calma."

**[Botones: Descargar mi resumen · Ver teléfonos útiles · Continuar]**

## 8.2. Resultado ROJO (derivación firme)

"Queremos ser honestos contigo: por tus respuestas, creemos que en este momento te
merecerías más apoyo del que una aplicación puede darte. Esto no significa que algo
vaya mal contigo: significa que estás cargando mucho, y que hay profesionales que
pueden ayudarte de verdad. Te pedimos que esta semana contactes con tu centro de
salud o con el equipo que lleva tu operación, y les enseñes este resumen que hemos
preparado. La app seguirá aquí, con las prácticas de calma siempre disponibles. Dar
este paso también es prepararse bien."

**[Botones: Descargar mi resumen · Teléfonos de mi centro · Prácticas de calma]**

## 8.3. Pantalla de CRISIS (ítem 9 del PHQ-9 ≥ 1 o texto de riesgo)

"Gracias por tu sinceridad. Lo que has contado es importante y no queremos que lo
lleves en soledad ni un día más. Si estás pensando en hacerte daño, por favor, habla
ahora con alguien que pueda ayudarte:

**024** — Línea de atención a la conducta suicida (gratuita, 24 horas,
confidencial) **[LLAMAR]**
**112** — Emergencias **[LLAMAR]**

También puedes acudir a tu centro de salud o a urgencias, o contárselo a alguien de
confianza que esté cerca. Esta aplicación no puede darte la ayuda que mereces en
este momento, y por eso te lo decimos con claridad. Pedir ayuda es un acto de
valentía, y funciona."

**[Sin ningún otro contenido en pantalla.** Al salir, la app ofrece solo prácticas
de calma y teléfonos; el evento queda registrado y, si existe integración
asistencial, se notifica por el circuito documentado.]

## 8.4. Botón "Necesito una pausa" (pantalla)

"Estoy contigo. Paramos todo. ¿Qué te vendría mejor ahora?"

**[Respirar 2 minutos · Volver al presente (3 min) · Ver teléfonos de ayuda · Solo
descansar]**

Al volver: "Cuando quieras, retomamos donde lo dejaste. Parar y volver también es
entrenar."


---

# 9. Checklist de calidad antes de producir

1. **Revisión clínica (doble firma obligatoria).** Nada se produce sin doble firma.
   - **Psicología clínica** valida: guiones V4-B, V6–V9, la Sesión de
     Profundización SP1–SP3 (especialmente el ejercicio corporal acotado de SP2),
     audios P1–P5 y micro-textos.
   - **Anestesiología** valida: V2, V3 y V11.
   - **Cirugía** valida: señales de alarma de V12.
2. **Legibilidad.** Todos los guiones pasados por índice **INFLESZ** (objetivo:
   "bastante fácil"); frases ≤ 20 palabras de media.
3. **Prueba con pacientes reales** (n ≈ 8–10, incluyendo ≥ 70 años y baja
   alfabetización): comprensión (teach-back), tono percibido, ansiedad
   antes/después de cada vídeo (0–10). **Retirar o reescribir cualquier pieza que
   aumente la ansiedad de media.**
4. **Versión catalana con locución nativa** (no doblaje literal: adaptación).
5. **Verificar los puntos de corte** de las escalas contra las validaciones
   españolas publicadas antes de programar el triaje; **documentar el algoritmo
   (versionado)** para el expediente de producto sanitario.
6. **Coherencia visual.** Mismo personaje guía, misma paleta, mismos
   iconos-herramienta (círculo de respiración, escala 0–10, pasos, ventana,
   brújula, garita del vigilante) en todo el programa: los símbolos recurrentes son
   **memoria terapéutica**.

---

## Nota de versión

Documento de diseño **v1.2** (añade entrenamiento atencional V4-B/P4/P5 y Sesión de
Profundización ACT SP1–SP3; reedición del guion original del equipo clínico). Base
para guionización final, producción audiovisual con IA generativa y desarrollo del
módulo. **Requiere validación clínica y verificación de referencias antes de uso con
pacientes.**


---

# 10. Decisiones de implementación (v1) y plan por fases

Decisiones acordadas con el equipo para la construcción:

- **Construcción por fases** (no de una pieza).
- **Reemplaza** el recurso placeholder "Meditaciones guiadas" (`res-mindfulness`,
  retirado vía `DEPRECATED_RESOURCE_IDS`) por el módulo `res-bienestar`
  (guideId `bienestar`, pilar `mental`).
- **Fuera de gamificación:** sin XP, medallas ni rachas. Como mucho, indicadores
  neutros de progreso.
- **Sin integración HIS (Vithas):** la derivación se limita a **informe descargable
  + recomendación de contactar** (sin notificación automática al circuito).
- **Datos solo en el dispositivo:** se avisa explícitamente. (No hay consentimiento
  formal por ahora; a revisar.)
- **Escalas v1:** se **elimina STAI-6**. Núcleo = **APAIS + GAD-7**, más **PHQ**
  según algoritmo y **Termómetro del distrés**. Cortes: **APAIS ≥ 11** (itinerario
  reforzado / ÁMBAR si no hay otros criterios); **Termómetro ≥ 4** (puerta de
  entrada sensible) y **≥ 6** (carga alta / alerta reforzada). Traducidas a ES/EN/CA.
- **Seguridad clínica:** **sin** detección de riesgo en texto libre; la crisis se
  basa en el **ítem 9 del PHQ-9**. Botones de llamada **024** y **112**; y, en caso
  de **cáncer**, contacto de la **AECC** (900 100 036, atención psicológica
  gratuita).
- **Regulatorio:** se procede con activación real (sin flag de borrador); revisión
  posterior cuando la app esté montada. Falta tiempo hasta el primer paciente.
- **Audiovisual:** estructura completa con placeholders "(Próximamente)"; se
  insertan IDs a medida que se aporten contenidos validados. Formato: **V1–V12 y
  SP1–SP3 → Vimeo**; **P1–P5 → mp3 + `<audio>`** (Vimeo como transitorio si conviene).
- **Idiomas:** despliegue pleno **ES/EN/CA** desde el inicio.
- **Recordatorios:** solo **in-app al abrir** (PWA sin backend; no se promete
  seguimiento activo fuera de la app).
- **Temporización:** "un vídeo al día" es **recomendación de presentación**, no
  bloqueo rígido. Lógica de **repesca**: al abrir, se calcula desde la fecha de
  cirugía, se desbloquea lo pendiente y se **prioriza visualmente la pieza del día**,
  sin penalizar.
- **Informe PDF (para fase de cribado):** **sin nombre, DNI ni identificativos
  directos**; usar **código anónimo** (p. ej. `ID de Paciente: PREHAB-8392`) o solo
  resultados clínicos. El paciente se identifica en el cuerpo del correo si quiere.
  Compartir mediante **ShareSheet nativo del SO** (no abrir cliente de correo con
  enlace plano) para que el usuario elija conscientemente cómo/con quién comparte.

## Plan por fases

- **Fase 1 · MVP de contenido (bajo riesgo) — IMPLEMENTADA:** módulo que reemplaza
  el placeholder; intro sobria + aviso de datos + "no vigila"; estructura V1–V12 /
  P1–P5 / SP1–SP3 con placeholders; botón permanente "Necesito una pausa" (§8.4) con
  respiración/grounding/teléfonos 024·112·AECC; fuera de gamificación; ES/EN/CA. Sin
  cribado ni calendario.
- **Fase 2 · Cribado + triaje + derivación:** batería (Termómetro, PHQ-4→PHQ-9/
  GAD-7, APAIS) con cortes acordados; triaje VERDE/ÁMBAR/ROJO/CRISIS; pantallas
  §8.1–8.3; salvaguarda ítem 9 PHQ-9; informe PDF anónimo (PREHAB-XXXX) + ShareSheet;
  recribados.
- **Fase 3 · Orquestación:** itinerario por días a cirugía con repesca, priorización
  de la pieza del día, práctica diaria, biblioteca, piezas por calendario (V11/V12),
  reevaluaciones temporizadas, Sesión ACT tras V9 (solo VERDE/ÁMBAR).
