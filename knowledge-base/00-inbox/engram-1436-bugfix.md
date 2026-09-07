---
created: 2026-06-18 05:01:38
tags: [engram, bugfix]
engram_id: 1436
type: bugfix
---

# Dashboard alertas fix + verificación completa

**What**: Fixed direction: "below" support in alert evaluation (websocket-server.ts:435) y verificación visual funcional de todos los endpoints del dashboard

**Why**: Las reglas low_sla y low_feedback_score con direction: "below" se evaluaban como >= en vez de <=, causando falsos positivos

**Where**: apps/web-dashboard/server/websocket-server.ts:435

**Learned**: El WebSocket server debe arrancarse con Start-Process -WindowStyle Hidden, no con Start-Job (los jobs mueren al finalizar el la shell de bash tool). Estado actual: port 8080 (PID 6736) + port 5173 (Vite, PID 6756) ambos funcionando. Todas las APIs responden correctamente con datos reales desde .session/context-log/ y .runtime/metrics/. Las 8 alertas se evalúan correctamente incluyendo dirección "below".

---
*Imported from Engram on 2026-09-06*
