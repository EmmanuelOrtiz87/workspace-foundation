---
created: 2026-08-07 04:01:22
tags: [engram, bugfix]
engram_id: 2613
type: bugfix
---

# Fix cierre de sesión 0-SKIP: daemons, temp-registry, codegraph persistente

**What**: Corregido el cierre de sesión que reportaba 4 SKIPs persistentes (temp-registry, temp-cleanup, kill-codegraph-mcp, kill-timeout-daemon). Resultado final: 24 PASS / 0 FAIL / 0 SKIP, validation 100/100.

**Why**: El usuario exigía un stack perfecto sin SKIPs que ocultaran problemas reales de funcionalidad.

**Where**: src/session-close-orchestrator.ts, src/codegraph-mcp-server-start.ts, src/core/maintenance-watchtower.ts, .continue/config.json, .mcp.json (nuevo), package.json (+@colbymchenry/codegraph 0.8.0)

**Learned**:
- temp-registry/temp-cleanup reportaban SKIP cuando no había temp files — es un ESTADO LIMPIO que debe ser PASS, no SKIP.
- `codegraph serve --mcp` usa transporte stdio: con `stdio:['ignore']` recibe EOF en stdin y muere al instante. Fix: stdin como pipe abierto + proceso padre que permanece vivo como daemon + child.on('exit') para limpiar + SIGTERM/SIGINT.
- kill steps del close ahora esperan al daemon (waitForProcess, hasta 10s), PASS al matar, FAIL si daemon REQUERIDO no corre (señal real), PASS si opcional no iniciado.
- error-warning-scan tenía falso positivo: el scanner se auto-detectaba sus propias cadenas "TODO:"/"FIXME"/"@ts-ignore". Fix: excluir archivos scanner + regex comment-aware.
- watchtower checkCodeGraph reportaba PASS solo por config MCP en opencode.json aunque el daemon estuviera caído — ahora exige daemon vivo (PID/process/port). Nuevo checkTimeoutDaemon.
- Commits: 256eb4e4 (fix principal) + 46fa5cb7 (codegraph devDep).

---
*Imported from Engram on 2026-09-06*
