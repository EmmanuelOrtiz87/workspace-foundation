---
created: 2026-09-03 12:43:30
tags: [engram, bugfix]
engram_id: 3651
type: bugfix
---

# Fixed CLI guards in smallest-route-router and policy-engine

Corregidos los CLI guards en dos archivos:

1. src/orchestration/smallest-route-router.ts - Cambiado de string template a pathToFileURL
2. src/security/policy-engine/policy-engine.ts - Cambiado de string template a pathToFileURL

Resultado: Watchtower ahora muestra 122 PASS (antes 121), 0 FAIL (antes 1). El stack está más estable.

Watchtower health status:
- PASS: 122 (increased from 121)
- WARN: 2
- FAIL: 0 (fixed!)
- Total: 124

---
*Imported from Engram on 2026-09-06*
