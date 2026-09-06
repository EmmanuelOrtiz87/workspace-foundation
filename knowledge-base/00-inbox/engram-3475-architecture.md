---
created: 2026-08-31 13:00:42
tags: [engram, architecture]
engram_id: 3475
type: architecture
---

# Command Center standalone: lifecycle de apps fuera del dashboard

**What**: Command Center standalone extraído del dashboard — servidor Node puro (cero deps, cero build) + una sola página HTML autocontenida con tokens GV, en src/ops/command-center/ (server.ts, start.ts, public/index.html). Gestiona las 4 apps construidas INCLUIDO el dashboard (ya no hay self-managed: el CC es proceso separado y puede arrancar/parar el dashboard). Panel embebido eliminado del dashboard (AppsControlPanel, apps-control-api, ruta /apps, claves i18n ui.apps_*).
**Why**: El usuario exigió que el comando central esté completamente aparte del dashboard, agnóstico a las apps, desde donde se inicia todo a demanda — como el comando de operaciones de contenido que quedó fuera de las apps.
**Where**: src/ops/command-center/server.ts, src/ops/command-center/start.ts, src/ops/command-center/public/index.html, tests/unit/command-center.test.ts, tests/smoke/command-center-smoke.mjs
**Learned**: (1) Puerto CC: 8090 default, env CC_PORT, persistido en .runtime/command-center-ports.json; pidfile .runtime/command-center.pid. (2) npm run cc:start (launcher+browser) / cc:server. (3) Bind solo 127.0.0.1, sin auth en loopback (ADR-0017), rechazo Host header ajeno. (4) Status del dashboard server usa fallback pidfiles legacy (dashboard-ws.pid/dashboard-vite.pid) además de los propios app-dashboard-*.pid; alive = probe(port) && (pid===null || isAlive(pid)) — no borrar pidfiles ajenos. (5) Sesiones paralelas commitean al mismo repo y pueden absorber cambios del working tree — re-verificar git log/diff antes de commit. (6) El shell tool de opencode falla con "Unknown: ChildProcess.kill" al lanzar procesos detached — verificar estado después con health/pidfile en vez de confiar en el output del comando.

---
*Imported from Engram on 2026-09-06*
