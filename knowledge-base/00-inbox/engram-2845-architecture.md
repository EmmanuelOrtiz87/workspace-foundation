---
created: 2026-08-15 03:36:30
tags: [engram, architecture]
engram_id: 2845
type: architecture
---

# FF-019 Fase 2: Shared State avanzado (CopilotKit patrón 3)

**What**: Implementada Fase 2 del backlog FF-019 (Adopción Nativa de Patrones CopilotKit sobre MCP) — Shared State avanzado. SharedStateBridge ahora tiene suscripciones por tarea, broadcast de deltas y persistencia en Nexus.
**Why**: El patrón 3 de CopilotKit (shared state) solo emitía snapshots; faltaban deltas incrementales, suscripciones por tarea y persistencia durable del event-bus.
**Where**: apps/web-dashboard/server/shared-state-bridge.ts (294 líneas), apps/web-dashboard/server/websocket-server.ts (initSharedState + endpoint /api/state/events/persisted + handleRequest async), apps/web-dashboard/src/hooks/useSharedState.ts (consume state_delta/task_delta), docs/plans/COPILOTKIT-ANALYSIS-AND-ADOPTION-PLAN.md (contrato de deltas documentado).
**Learned**: (1) La tabla `events` de Nexus (migración 001) tiene columnas `id/type/payload/created_at` — NO `aggregate_id/event_type` como sugería el backlog; adapté el insert a `type=evt.event, payload=JSON.stringify(evt), created_at=evt.timestamp`. (2) `handleRequest` en websocket-server.ts era síncrono; para el endpoint async de getPersistedEvents tuve que convertirlo a `async function` (createServer acepta handlers async). (3) Los suscriptores por tarea se keyean por el task.id real (generado en agent.dispatched), no por un id conocido de antemano — el callback se invoca SOLO en transiciones de esa tarea. (4) `state_delta` se emite con delta en orden nuevo→viejo para que el cliente haga `[...delta, ...prev]`; `since` = timestamp del último evento ya visto (cursor). (5) Se añadió manejo de `agent.error` y `agent.cancelled` (antes solo dispatched/completed). (6) Persistencia Nexus es best-effort con try/catch — el event-bus file sigue siendo fuente primaria. (7) Verificación: `cd apps/web-dashboard && npm run build` (tsc + vite), `npm run typecheck`, `npm run lint` — todos 0 errores. Smoke test funcional pasó 7/7 (getTask, transiciones, state_delta, task_delta, suscripción por tarea, getPersistedEvents).

---
*Imported from Engram on 2026-09-06*
