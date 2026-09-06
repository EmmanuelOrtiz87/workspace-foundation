---
created: 2026-08-28 19:14:41
tags: [engram, bugfix]
engram_id: 3220
type: bugfix
---

# Fix modelos: opencode.json a big-pickle + config stale en memoria requiere restart

**What**: Todos los agentes en opencode.json apuntaban a opencode-go/gpt-5.6-luna (sin creditos, error "weekly usage limit reached"). Se reasignaron los 21 agentes a opencode/big-pickle (commit cb56ee5b). config/agents.json, config/model-router.json y config/model-fallback.json ya tenian big-pickle como primary.
**Why**: El usuario reporto que sdd-explore fallaba con quota. La causa raiz: (1) opencode.json tenia gpt-5.6-luna en los 21 agentes; (2) el proceso opencode carga el config al inicio SIN hot-reload (AGENTS.md: "Cambios requieren nueva sesion en cada herramienta").
**Where**: opencode.json (21 agentes), config/agents.json (sdd-explore/design/apply/verify → big-pickle), config/model-router.json (agentBindings BA/SAD/DEV/QA → big-pickle), config/model-fallback.json (primary big-pickle → mimo-v2.5-free → local).
**Learned**: check-model-config.ts confirma el estado: "Project config orchestrator: opencode/big-pickle" pero "Active model: opencode-go/gpt-5.6-luna (from undefined)" = config stale en memoria. Se requiere REINICIAR la sesion de opencode para que el task tool use big-pickle. El agent-delegator (src/agent-delegator.ts) lee config/agents.json fresco y funciona con big-pickle (verificado, path heuristico 0ms). Los agentes nativos src/agents/*.ts son heuristicos (no llaman LLM).

---
*Imported from Engram on 2026-09-06*
