---
created: 2026-08-24 14:47:32
tags: [engram, bugfix]
engram_id: 3020
type: bugfix
---

# Unified WebSocket resilience across dashboard hooks

**What**: Unificada la resiliencia de todos los hooks WebSocket del dashboard. `useSharedWs` ahora usa backoff exponencial 1s→30s, jitter, reset al conectar, guard de refCount/cierre intencional y validación de socket vigente; evita reconexiones duplicadas y timers tras desmontar el último consumidor.
**Why**: Era el último hook con reconexión fija cada 3s, inconsistente con `useSharedState`, generando riesgo de tormentas de conexión.
**Where**: apps/web-dashboard/src/hooks/useSharedWs.ts
**Learned**: El hook compartido tiene estado de módulo y refCount; el cierre intencional debe marcarse antes de quitar handlers/cerrar socket para que onclose no reprograme el timer. La suite existente no tiene test aislado para este hook; build, lint y tests de dashboard validan compilación e integración. Métricas runtime tras reinicio: 444 requests, 0 errores, latencia media 6.4ms, pico WS 4.
**Validation**: typecheck/lint raíz PASS; dashboard i18n/build/lint/52 tests PASS; config 24/24 PASS; MCP PASS; plugin 1 válido/0 inválidos; commit 5c34aaf4.

---
*Imported from Engram on 2026-09-06*
