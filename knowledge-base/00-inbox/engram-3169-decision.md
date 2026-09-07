---
created: 2026-08-26 11:49:18
tags: [engram, decision]
engram_id: 3169
type: decision
---

# Academy UX: responsive, modales de archivos, diagramas, demo con capturas, generador de prompts

**What**: Academy UX upgrade completo (a14f30a6): header responsive con burger (<1120px) y búsqueda flexible (0 scroll horizontal a 390/768/1400); referencias de archivos auto-clickeables contra pack offline de 55 archivos (docs+código citado; modal lector; regenerable scripts/build-filepack.mjs); 6 diagramas SVG nativos + stat-pills en 8 lecciones; sección Demo con 5 capturas reales del dashboard vivo + academy como demo; track Prompts (10 lecciones con plantillas reales) y generador interactivo de prompts (7 tipos, build en vivo, copiar); efectos reveal/progress/contadores/view-fade con prefers-reduced-motion.
**Why**: Feedback del usuario: search demasiado larga, archivos citados ilegibles, petición de visuales/dinamismo/sección demo/track de prompts con generador.
**Where**: apps/academy-web/{app.js,style.css,index.html,data/files.js,scripts/build-filepack.mjs,assets/demo/*.png}
**Learned**: chrome headless con --virtual-time-budget se cuelga con páginas WebSocket (dashboard) — usar captura simple; PNGs de UI oscura son pequeños (7.8KB) sin estar vacíos (verificar con análisis de imagen antes de descartar). Los strings JS inyectados por scripts python: escapar \n como \\n o rompe el archivo. El agente de prompts encontró un bug de sintaxis mío (template literal) — los agentes con verificación en navegador real agregan una capa de QA valiosa.

---
*Imported from Engram on 2026-09-06*
