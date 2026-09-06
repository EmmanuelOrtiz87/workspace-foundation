---
created: 2026-08-29 17:11:58
tags: [engram, pattern]
engram_id: 3275
type: pattern
---

# Standalone app command audit

**What**: Homologué comandos mínimos ejecutables para Academy, Analytics y Dashboard, y eliminé la importación CSS runtime del CMS hacia Dashboard.
**Why**: Las cuatro apps soportadas deben operar de forma independiente, sin acoplamiento CMS→Dashboard.
**Where**: apps/academy-web/package.json y README.md; apps/gv-analytics/package.json, eslint.config.js, README.md; apps/web-dashboard/package.json y README.md; apps/content-cms/src/styles.css; limpieza de símbolos no usados en Analytics para habilitar lint.
**Learned**: Academy es estática y solo necesita dev/preview vía Python; no requiere build/test/typecheck/lint. CMS ya tenía scripts completos, pero su @import relativo a web-dashboard rompía la independencia aunque el build funcionara mientras existiera el archivo destino.

---
*Imported from Engram on 2026-09-06*
