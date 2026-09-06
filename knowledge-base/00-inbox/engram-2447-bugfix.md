---
created: 2026-08-01 07:26:50
tags: [engram, bugfix]
engram_id: 2447
type: bugfix
---

# Timeout autostart resuelto: lock robusto + redirección nativa + log timestamped

**What**: Triple causa raíz del timeout del autostart resuelta y verificada end-to-end. El pipeline SÍ corría pero el shell llamador colgaba. Fixes: (1) lock robusto `isLockOwnerAlive()` que valida vía PowerShell Get-CimInstance que el PID del lock sea un proceso node con 'session-autostart' en cmdline (un conhost.exe huérfano de una corrida previa mantenía el lock vivo y skippeaba todo el pipeline con '[LOCK] already running'); (2) redirección nativa vía env var AUTOSTART_LOG_FILE con appendFileSync síncrono (el redirect `> file` de cmd.exe NO funciona con detached:true en Windows — cmd.exe anida consola propia; y createWriteStream bufferiza y pierde líneas con process.exit(0)); (3) log por corrida con timestamp inmune a EBUSY + prune >7 días.
**Why**: Operar el stack nativamente sin bloquear a callers (CI, hooks, shells) en Windows.
**Where**: src/Core/session-autostart.ts (isLockOwnerAlive + redirección AUTOSTART_LOG_FILE), src/session-autostart-detached.ts (spawn detached sin shell, log timestamped). Commits 23e37fa8 + d8ebd7e9.
**Learned**: Verificación final: log autostart-detached-20260801T071548.log con READY=1, 30/30 steps, 66/66 lazy, 0 errores, 0 lock-skips; lanzador retorna ~1.3s. Watchtower 81/82 (único WARN: audit index no generado). Gate de calidad: typecheck + lint ambos exit 0.

---
*Imported from Engram on 2026-09-06*
