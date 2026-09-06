---
created: 2026-08-31 19:25:17
tags: [engram, architecture]
engram_id: 3536
type: architecture
---

# Dashboard header al patrón GV — verificado con screenshots visuales (último outlier)

**What**: Header del dashboard migrado al patrón GV (commit 6a68b966) — el último outlier visual eliminado. Antes: logo de texto "GENTLE VANGUARD / STACK OPERATIONS" + nav agrupada uppercase (OPERATE/BUILD & GOVERN) + sin grid/glows visibles + body vacío en headless. Después: mark "Gv" con gradiente + wordmark "GentleVanguard" (Orbitron, blanco+gradiente) + label "Dashboard" + tabs con iconos estilo analytics (activo con borde cyan) + pill Local stack + grid 48px y glows visibles + footer. Verificado con SCREENSHOTS reales de Chrome headless leídos visualmente: dashboard-after.png muestra el header idéntico a analytics + contenido renderizando (métricas runtime, process hygiene).
**Why**: El usuario siguió viendo diferencias vs academy/analytics pese a los checks de valores CSS — el problema real era la COMPOSICIÓN del header del dashboard (logo texto vs mark+wordmark, nav agrupada vs tabs).
**Where**: apps/web-dashboard/src/App.tsx, styles/index.css
**Learned**: (1) LECCIÓN CLAVE: los checks de valores CSS no detectan diferencias de COMPOSICIÓN — el scraping visual con screenshots de Chrome headless (--screenshot, no --dump-dom que devolvía 0 bytes) y leer las imágenes permitió ver lo que el usuario veía. (2) Screenshots: academy/analytics/cms/cc capturan bien; las apps vite pueden colgar con virtual-time-budget — usar --timeout y una app por invocación. (3) El body vacío del dashboard en headless era carga de datos WS, no un bug — el header/atmósfera eran el issue real. (4) Los screenshots quedaron en .runtime/ui-shots/ como evidencia.

---
*Imported from Engram on 2026-09-06*
