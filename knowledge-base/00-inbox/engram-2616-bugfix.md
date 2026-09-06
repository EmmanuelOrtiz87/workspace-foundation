---
created: 2026-08-07 11:02:32
tags: [engram, bugfix]
engram_id: 2616
type: bugfix
---

# Cierre 24/0/0 reproducible + killers de daemons resueltos (close-en-autostart + boot-window)

**What**: Resuelto el problema de los SKIPs del cierre de sesión y los daemons. Cierre validado 24 PASS / 0 FAIL / 0 SKIP (100/100) de forma reproducible, con los 3 daemons (codegraph, timeout, dashboard WS) vivos y matados correctamente.

**Why**: El usuario exigía un stack perfecto: sin SKIPs que oculten problemas reales, daemons activos, monitoreo honesto, y agnóstico a herramientas.

**Where**: src/session-close-orchestrator.ts, src/codegraph-mcp-server-start.ts, src/core/maintenance-watchtower.ts, config/session-autostart.config.json, .continue/config.json, .mcp.json, package.json

**Learned**:
1. **Causa raíz #1 (killer de daemons)**: el `session-close-orchestrator` era un paso LAZY del autostart con `--reason autostart-close` — corría el protocolo de CIERRE al ARRANQUE y mataba los daemons recién iniciados. Fix: deshabilitado en config + guard `isStartupClose()` que salta kills con reason autostart-close/startup-cleanup.
2. **Causa raíz #2**: la ventana de boot del codegraph dependía de session-current.json (que puede no existir) → getSessionAgeSeconds() devolvía MAX → autoheal restaró codegraph con instancia competidora que mataba el daemon original. Fix: isCodeGraphRecentlyBooted() usa mtime del PID file (90s).
3. **Limitación fundamental**: `codegraph serve --mcp` es stdio-only — necesita stdin abierto. Un daemon standalone requiere un stdin-holder que sobreviva kills de árbol en Windows. NO se pudo hacer persistir el daemon standalone en contexto autostart (muere ~30-100s). La solución funcional agnóstica: codegraph registrado como MCP on-demand en opencode, cursor, continue (.continue/config.json) y claude (.mcp.json) — cada tool lo spawna cuando lo necesita.
4. **Windows**: procesos con Start-Process mueren al terminar la llamada bash; spawn detached Node (detached:true + unref) persiste.
5. Commits: 256eb4e4, 46fa5cb7, 606ebdfa.

---
*Imported from Engram on 2026-09-06*
