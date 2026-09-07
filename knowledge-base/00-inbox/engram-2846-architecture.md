---
created: 2026-08-15 03:51:09
tags: [engram, architecture]
engram_id: 2846
type: architecture
---

# FF-019 Fase 3: HITL avanzado (patrón 4 CopilotKit)

**What**: Implementada Fase 3 del backlog FF-019 "Adopción Nativa de Patrones CopilotKit sobre MCP" — HITL avanzado (patrón 4). Tipos `HitlKind`/`HitlRequest`/`HitlResponse` en `apps/web-dashboard/src/types/agent.ts`; `HitlModal.tsx` refactorizado para renderizar por `kind` (confirmation/selection/form/review) con formularios dinámicos desde `UIFormField` y validación `required`; timeout con cuenta regresiva + auto-resolve `{approved:false, reviewed:false, timedOut:true}`; server `websocket-server.ts` con `Map<requestId, timeout>` (`scheduleHitlTimeout`/`cancelHitlTimeout`) y `buildDemoHitlRequest` (detector por keywords: approve/confirm→confirm, elige/choose/select→selection, formulario/form→form, revisar/review→review, timeoutMs 60000).

**Why**: El plan `docs/plans/COPILOTKIT-ANALYSIS-AND-ADOPTION-PLAN.md` (Fase 3, líneas ~166-170) requería tipos de HITL adicionales, modal con formularios dinámicos y resolución automática por timeout.

**Where**: `apps/web-dashboard/src/types/agent.ts`, `apps/web-dashboard/src/components/HitlModal.tsx`, `apps/web-dashboard/src/components/HitlModal.test.tsx` (nuevo, 9 tests), `apps/web-dashboard/src/hooks/useAgentStream.ts`, `apps/web-dashboard/src/components/AgentChat.tsx`, `apps/web-dashboard/server/websocket-server.ts`, `docs/plans/COPILOTKIT-ANALYSIS-AND-ADOPTION-PLAN.md`.

**Learned**: (1) El contrato `hitl_response` cambió de anidado (`{requestId, response}`) a plano (`...HitlResponse` spread en el mensaje agent) — el server lee `msg as unknown as HitlResponse`. (2) `@typescript-eslint/no-non-null-assertion: "error"` en el dashboard prohíbe `!` — usar narrowing con `const timeoutMs = request.timeoutMs` tras guard. (3) El root `npm run typecheck` NO cubre el dashboard (tsconfig raíz solo incluye `src/**/*.ts` y scripts); el guard real del dashboard es `cd apps/web-dashboard && npm run build` (tsc + vite). (4) `getByLabelText` no funciona en FormView porque el label no envuelve el input — usar `getByRole('textbox')` en tests. (5) Prettier: `pnpm prettier --write` desde la raíz para archivos del dashboard.

---
*Imported from Engram on 2026-09-06*
