---
created: 2026-08-23 19:31:07
tags: [engram, bugfix]
engram_id: 2975
type: bugfix
---

# Dashboard WS watchdog persistente restaurado (--watch)

**What**: Restaurado el watchdog persistente del dashboard WS perdido en la migración PS1→TS. `src/dashboard-ws-autostart.ts` ahora soporta modo `--watch`: loop cada 5s con health check HTTP /api/health, reinicio tras 2 fallos consecutivos (máx 10 restarts, budget se resetea tras 5 min estable), guard anti-duplicados vía PID file (segunda instancia sale con [SKIP]), handlers SIGTERM/SIGINT con limpieza de PID. Refactor: spawn extraído a `launchServer()` reutilizable.
**Why**: El launcher one-shot escribía su PID en dashboard-ws-watchdog.pid y terminaba — cuando el servidor WS moría nadie lo levantaba y tracing/marketplace/content-ops mostraban errores hasta el próximo autostart (que además se saltaba por lock).
**Where**: src/dashboard-ws-autostart.ts, src/dashboard-start.ts (spawn detached + detectRunningWs adoption), config/session-autostart.config.json (args "--quiet --watch").
**Learned**: (1) getFreePort() devuelve puerto siguiente si nuestro propio server ocupa el preferido → dashboard-start debe adoptar el WS existente vía detectRunningWs([8080,8082,8083]) antes de resolver puertos o Vite proxiea al puerto equivocado. (2) Validación E2E: matar PID del WS → watchdog reinicia solo en ~15s (log "[WATCH] Restarting WS server (attempt 1/10)"). (3) Los pasos lazy del pipeline corren detached → el daemon watch sobrevive al pipeline.

---
*Imported from Engram on 2026-09-06*
