---
created: 2026-08-31 19:50:39
tags: [engram, pattern]
engram_id: 3540
type: pattern
---

# Estandarización logo GV en apps

**What**: Estandaricé el logo oficial GV y los iconos del header en Command Center, CMS, Dashboard, Prompt Studio y Analytics.
**Why**: Sustituir marks de texto y el icono de idioma 文A por el asset oficial y SVGs consistentes.
**Where**: assets/gv-design-system.css; apps/command-center/{public/index.html,public/logo.svg,server.ts}; apps/content-cms/{src/App.tsx,public/logo.svg}; apps/web-dashboard/{src/App.tsx,src/styles/index.css,public/logo.svg}; apps/prompt-studio/{src/App.tsx,public/logo.svg}; apps/gv-analytics/{src/App.tsx,src/styles.css,public/logo.svg}.
**Learned**: Command Center es un servidor Node estático y necesitó una ruta explícita /logo.svg con Content-Type image/svg+xml. Su toggle de tema debía intercambiar SVGs mediante hidden porque textContent destruiría los iconos. Se preservaron cambios previos no relacionados del working tree.

---
*Imported from Engram on 2026-09-06*
