---
created: 2026-08-09 22:11:54
tags: [engram, bugfix]
engram_id: 2721
type: bugfix
---

# Bug delegación opencode: usar subagente general

**What**: Confirmado que los subagentes custom de opencode (sdd-apply, gov-agent, sdd-explore, etc.) fallan TODOS con "Model not found: inherit-from-session/." aunque opencode.json y .opencode/agents/*.md definan model: opencode/deepseek-v4-flash-free. Los fallbacks universales `explore` y `general` (system-model, sin config en opencode.json) SÍ funcionan perfectamente.

**Why**: Bug sistemático del framework opencode en este entorno (documentado ya en memoria #2683 de la migración agnóstica). El orquestador necesita delegar trabajo real.

**Where**: opencode.json (agent section), .opencode/agents/*.md — todos con model opencode/deepseek-v4-flash-free pero el resolver intenta inherit-from-session.

**Learned**: WORKAROUND: usar subagent_type "general" para tareas de implementación (tiene read/write/edit/bash completos) y "explore" para búsquedas. La delegación nativa del stack (src/route-and-delegate.ts) también falla porque usa los mismos agentes con bug. Verificar si una actualización de opencode corrige el resolver antes de reintentar los agentes custom.

---
*Imported from Engram on 2026-09-06*
