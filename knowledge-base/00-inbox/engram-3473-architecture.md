---
created: 2026-08-31 12:56:08
tags: [engram, architecture]
engram_id: 3473
type: architecture
---

# Command Center standalone

**What**: Implementado Command Center standalone en src/ops/command-center con servidor Node puro, UI HTML autocontenida, launcher y control idempotente de dashboard/analytics/cms/academy.
**Why**: Extraer el panel de apps del dashboard y centralizar el ciclo de vida a demanda.
**Where**: src/ops/command-center/server.ts, start.ts, public/index.html; dashboard wiring y archivos embebidos eliminados; tests/unit/command-center.test.ts y tests/smoke/command-center-smoke.mjs.
**Learned**: El estado se determina por probe de puerto; un pidfile ajeno/legacy muerto no invalida un puerto vivo y no se elimina. Los procesos se lanzan con node/python directo, detached y windowsHide.

---
*Imported from Engram on 2026-09-06*
