---
created: 2026-05-22 01:57:07
tags: [engram, bugfix]
engram_id: 998
type: bugfix
---

# Cost rate inconsistency: $15 vs $10 unified to $10

**What**: Fixed costPer1M rate from $15 to $10 in session-metrics-tracker.ps1:50. All other scripts (collector.ps1, dashboard-render.ps1, generate-dashboard.ps1) used $10/1M tokens.

**Why**: Inconsistencia causaba que distintas partes del sistema reportaran costos diferentes para los mismos datos.

**Where**: scripts/utilities/session-metrics-tracker.ps1:50

**Learned**: Siempre verificar consistencia de constantes (costos, rates, timeouts) entre scripts que operan sobre los mismos datos.

---
*Imported from Engram on 2026-09-06*
