---
created: 2026-08-06 05:36:20
tags: [engram, bugfix]
engram_id: 2570
type: bugfix
---

# Dashboard WS autostart race condition (concurrent pipeline launches)

**What**: Diagnosed recurring "WS process started but health check inconclusive" failures in .runtime/dashboard-ws.log for the dashboard WS server (src/dashboard-ws-autostart.ts). Root cause: the session-autostart detached pipeline's lazy `dashboard-ws-start` step launches dashboard-ws-autostart concurrently with manual invocation, causing PID/port file races and spawn collisions. When launched once in a clean state, the launcher succeeds: [OK] WS healthy on port 8080, resolves real server PID via getProcessIdByPort.
**Why**: User asked to start the Dashboard WS + Vite dev server; WS kept failing to stay bound.
**Where**: src/dashboard-ws-autostart.ts, src/dashboard-common.ts, .runtime/dashboard-ws.log, .runtime/dashboard-ports.json
**Learned**: (1) dashboard-ws-autostart.ts is a ONE-SHOT launcher (health-checks for 20s then exits) — it has no restart loop despite "watchdog" naming; true restart loop is in src/dashboard-ws-service.ts. (2) `npm run dev` in apps/web-dashboard runs `concurrently "vite" "tsx server/websocket-server.ts"` — a second WS server instance fails harmlessly with EADDRINUSE if port 8080 is already owned. (3) Reliable verify: Test-NetConnection + Invoke-WebRequest http://localhost:8080/api/health and http://localhost:5173/ (title "Gentle Vanguard Dashboard"). (4) dashboard-stop.ts kills watchdog first (dead PID tolerated), then WS server from dashboard-ws.pid (real resolved PID).

---
*Imported from Engram on 2026-09-06*
