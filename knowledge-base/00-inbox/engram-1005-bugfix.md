---
created: 2026-05-22 03:31:57
tags: [engram, bugfix]
engram_id: 1005
type: bugfix
---

# Fix metrics live-feed health check y presentacion route

**What**: Fixed dashboard live-refresh infrastructure
**Why**: daemon-health.json reportaba liveFeedAlive:false, dashboard no tenia charts ricos, presentacion no tenia live-refresh, no habia ruta /presentacion en el server
**Where**: scripts/metrics/live-feed.ps1 — agregada Write-Health() function que actualiza daemon-health.json cada ciclo; scripts/metrics/metrics-server.ps1 — agregada ruta /presentacion que sirve gentile-vanguard-presentation.html; gentile-vanguard-presentation.html — agregado polling JS cada 15s a /api/live
**Learned**: El watchdog no escribe health — el live-feed debe escribir su propio health. metrics-server necesita ruta explicita para servir archivos custom. Los datos son inherentemente estáticos entre sesiones de trabajo — el polling es correcto pero no hay variación sin actividad nueva.

---
*Imported from Engram on 2026-09-06*
