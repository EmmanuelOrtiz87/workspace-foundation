---
created: 2026-08-31 15:11:36
tags: [engram, architecture]
engram_id: 3486
type: architecture
---

# CC widget y presets F4

**What**: Implementado el power widget embebido por app, CORS loopback y presets start-all/stop-all en Command Center.
**Why**: Entregar F4 para controlar cada app desde su UI y ejecutar acciones grupales desde el panel.
**Where**: apps/command-center/server.ts, apps/command-center/public/widget.js, apps/command-center/public/index.html, cinco apps/*/index.html, tests/unit/command-center.test.ts, tests/smoke/command-center-smoke.mjs.
**Learned**: El CC debe reflejar solo Origin loopback; las respuestas OPTIONS requieren Host loopback válido. El comando CLI detached puede desaparecer al finalizar la shell en este entorno, por lo que el dogfood final se dejó corriendo con Start-Process oculto.

---
*Imported from Engram on 2026-09-06*
