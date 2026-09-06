---
created: 2026-08-24 14:23:51
tags: [engram, architecture]
engram_id: 3018
type: architecture
---

# Dashboard server observability and resilient operation

**What**: Dashboard hardening adicional completado: reconexión WebSocket robusta y telemetría real del propio servidor. `useSharedState` ya tenía backoff; se validó la ruta y se instrumentó servidor. `/api/health.components.dashboard` ahora expone requests HTTP, errores, errorRate, latencia promedio/máxima, distribución de status, total/pico de conexiones WS. Se reinició WS y verificó métricas reales: 5 requests, 0 errores, avg 178.2ms, max 884ms, 4 conexiones/pico 4, Vite HTTP 200.
**Why**: Cerrar estabilidad y observabilidad interna sin declarar activos MCP host-managed sin handshake real.
**Where**: apps/web-dashboard/server/websocket-server.ts, previamente apps/web-dashboard/src/hooks/useSharedState.ts, rules/NORMATIVA-MCP-LIFECYCLE.md
**Learned**: Recharts emite warnings de width/height 0 solo en JSDOM; 52/52 tests pasan. `/api/health` ahora es fuente de métricas operativas del dashboard, útil para una futura tarjeta de observabilidad. CORS efectivo comprobado antes: localhost:5173.
**Validation**: typecheck/lint raíz PASS; dashboard i18n/build/lint/52 tests PASS; config 24/24 PASS; mcp:test PASS; mcp:fetch:test PASS; plugin status 1 válido/0 inválidos; commit 51be91d6.

---
*Imported from Engram on 2026-09-06*
