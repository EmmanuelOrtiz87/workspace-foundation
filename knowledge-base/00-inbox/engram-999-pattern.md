---
created: 2026-05-22 01:57:09
tags: [engram, pattern]
engram_id: 999
type: pattern
---

# Dashboard pipeline: collector + render must both be in start AND close

**What**: Las pipelines de metrics deben correr tanto al inicio como al cierre de sesión para mantener datos frescos. Se agregó collector + dashboard-render a End-Session en session-manager.ps1.

**Why**: El dashboard solo se regeneraba en session start (via autostart pipeline). Si el usuario cerraba sesión, los datos del cierre no se reflejaban en el dashboard hasta la próxima sesión.

**Where**: scripts/utilities/session-manager.ps1 (End-Session function)

**Learned**: Always hook data pipelines symmetrically — what runs on start should also run on close.

---
*Imported from Engram on 2026-09-06*
