---
created: 2026-08-31 19:52:16
tags: [engram, architecture]
engram_id: 3542
type: architecture
---

# Logo oficial GV en las 5 apps + iconos SVG consistentes en el CC

**What**: Logo oficial GV estandarizado en todas las apps (commit 707109aa): (1) apps/academy-web/assets/logo.svg (monograma GV con gradiente purple→cyan + glow filter) es EL logo oficial — copiado a public/logo.svg en command-center, content-cms, web-dashboard, prompt-studio, gv-analytics; (2) todos los headers usan <img class="gv-brand-logo"> (32px, clase canónica nueva) en vez de marks de texto "GV"; (3) CC: botones de icono reemplazados por SVGs inline de lucide (Languages, Power, Square, Sun/Moon, RefreshCw) a 16px — eliminados los glifos de texto "文A"/⏻/⏹/☀/↻ con tamaños inconsistentes; (4) CC agregó endpoint /logo.svg.
**Why**: El usuario notó que el CC no usaba el logo de academy y que el icono de idioma era muy grande — los marks de texto y glifos generaban inconsistencia visual entre apps.
**Where**: apps/*/public/logo.svg (5 apps), assets/gv-design-system.css (.gv-brand-logo), apps/command-center/public/index.html
**Learned**: (1) El brand mark oficial es un ASSET SVG (logo.svg), no texto estilizado — los marks de texto por-app divergen siempre. (2) Distribución del logo: copia a public/ por app (vite y estáticos lo sirven igual); el CC además lo expone por endpoint. (3) Iconos en apps vanilla: SVGs inline de lucide con tamaño fijo 16px — los glifos de texto (⏻☀文A) tienen métricas impredecibles. (4) Pendiente menor: el screenshot del dashboard mostró el loader de auth en headless (verificar el header en browser real).

---
*Imported from Engram on 2026-09-06*
