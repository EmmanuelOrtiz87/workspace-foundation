---
created: 2026-08-25 13:40:24
tags: [engram, bugfix]
engram_id: 3140
type: bugfix
---

# Watchtower dashboard warning is auth false positive

**What**: Diagnóstico local del warning `dashboard-ws HTTP API (port 8080): Port open but HTTP not responding`; no se modificaron archivos ni procesos.
**Why**: Confirmar si WS/watchdog estaban realmente caídos.
**Where**: src/core/maintenance-watchtower.ts:219-241, apps/web-dashboard/server/websocket-server.ts:975-983, .runtime/dashboard-ports.json y PID/logs.
**Learned**: El servidor real PID 32700 escucha en 0.0.0.0:8080 y `/api/health` responde 200; `/api/metrics` responde 401 por autenticación obligatoria. Watchtower prueba únicamente `/api/metrics` y solo considera `200 OK`, por eso emite WARN aunque el servicio esté sano. PID 13576 es el watchdog vivo y Vite PID 23008 responde en 5173. Cambio mínimo recomendado: hacer que checkDashboardWs pruebe `/api/health` (endpoint público de liveness) en vez de `/api/metrics`, o aceptar 401 como evidencia de servidor HTTP; preferible `/api/health`.

---
*Imported from Engram on 2026-09-06*
