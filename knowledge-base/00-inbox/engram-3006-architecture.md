---
created: 2026-08-24 10:42:44
tags: [engram, architecture]
engram_id: 3006
type: architecture
---

# Vite watchdog with WS-equivalent auto-recovery contract

**What**: Vite (UI del dashboard, puerto 5173) ahora tiene watchdog auto-restart con el MISMO contrato documentado que el WS server: intervalo 5s, umbral de 2 fallos consecutivos, máximo 10 restarts, budget reset tras 5min estables, guard single-instance vía PID file, adopción de Vite ya sirviendo. Nuevo script src/dashboard-vite-watchdog.ts; paso lazy dashboard-ui-start del pipeline actualizado a `--watch`.
**Why**: El WS tenía watchdog con auto-recovery (10 intentos) pero la UI no — si Vite moría quedaba caído hasta lanzamiento manual.
**Where**: src/dashboard-vite-watchdog.ts (nuevo), config/session-autostart.config.json (paso dashboard-ui-start → --watch)
**Learned**: Test end-to-end verificado: kill de Vite → 2 health checks fallidos → restart automático en ~8s con PID nuevo y HTTP 200. El watchdog espea helpers de dashboard-common (getFreePort, getProcessIdByPort, isProcessAlive) pero usa log propio (.runtime/dashboard-vite.log) porque logToFile de dashboard-common está hardcodeado a dashboard-ws.log. Health check de Vite: GET / con status <500 (no exige 200 exacto). Spawn: node vite.js directo (no CLI wrapper), detached+windowsHide+stdio ignore — PID spawneado ES el proceso Vite.

---
*Imported from Engram on 2026-09-06*
