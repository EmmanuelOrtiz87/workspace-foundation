---
created: 2026-08-31 12:42:21
tags: [engram, architecture]
engram_id: 3470
type: architecture
---

# Apps Control Panel: lifecycle on-demand de apps construidas

**What**: Apps Control Panel implementado y en producción — activación on-demand idempotente de las 4 apps construidas (dashboard, analytics, cms, academy) desde el dashboard. API: apps-control-api.ts (GET /api/apps, POST /api/apps/:id/start|stop, 409 self-managed para dashboard). UI: AppsControlPanel.tsx en ruta /apps con power buttons + apertura en pestaña individual. Desacople: Dashboard WS removido de KILL_TARGETS en session-close (persiste entre sesiones). El resto del stack (codegraph, token-ingest, timeout-monitor, skill-server) NO se tocó.
**Why**: El usuario quería panel de control central: click valida y activa sin re-ejecutar procesos vivos (patrón DEDUPE-LOCK), power button por app, y desligar el inicio/pago de apps del cierre de sesión. Modelo: apps on-demand, infra de sesión sigue en autostart/close.
**Where**: apps/web-dashboard/server/apps-control-api.ts, apps/web-dashboard/src/components/AppsControlPanel.tsx, apps/web-dashboard/server/websocket-server.ts, src/session/session-close/process.ts, src/session/session-close/phases.ts
**Learned**: (1) Los launchers reales escriben pidfiles dashboard-ws.pid/dashboard-vite.pid — el API debe apuntar a esos, no a nombres app-dashboard-*.pid que nadie escribe; para def.self el server es alive por definición (pid=process.pid + port probe). (2) Puertos: analytics API 4754/UI 5174, CMS 5175, academy 4173, dashboard UI 5173. (3) Spawn compliant: node --import tsx directo, vite.js directo, windowsHide+detached+stdio ignore, pidfile obligatorio. (4) Smoke test: .runtime/smoke-apps-control.mjs (11/11). (5) El branding del panel sigue el estándar de facto del dashboard (Tailwind gray/dark + semánticos, 0 usos de primary-* en componentes).

---
*Imported from Engram on 2026-09-06*
