---
created: 2026-07-31 04:36:24
tags: [engram, bugfix]
engram_id: 2331
type: bugfix
---

# CONFIRMADO empíricamente: delegación subagentes OK tras reinicio

**What**: Confirmación empírica final del fix de delegación. Tras reiniciar opencode (sesión nueva 2026-07-31T04:34), se probó task() con los 10 subagentes .md: ops-agent, gov-agent, sdd-explore, doc-agent, session-agent, premortem-agent, sdd-design, sdd-apply, sdd-verify — TODOS respondieron operativos ejecutando opencode/deepseek-v4-flash-free. El fallo "Model not found" está resuelto de raíz.
**Why**: Cerrar el pendiente #2327 de validación empírica post-reinicio. Los .md con front-matter model: corregido (opencode/deepseek-v4-flash-free) ya cargan y funcionan.
**Where**: .opencode/agents/*.md (10 archivos), opencode.json (21 agentes con model nativo, orchestrator hereda de sesión), config/model-router.json v2.2.0 (30 bindings, failover chain opencode→ollama→dify→lm-studio2), config/model-fallback.json v2.0.0, ~/.config/opencode/opencode.json (root model opencode/deepseek-v4-flash-free).
**Learned**: 1) El cache ~/.cache/opencode/models.json NO lista deepseek-v4-flash-free como objeto con id "opencode/..." — el provider 'opencode' solo tiene entrada de catálogo; el ID de suscripción se resuelve por nombre. 2) La config global root model coincide con los .md — coherencia total. 3) Los 6 skills de gentle-ai (branch-pr, chained-pr, cognitive-doc-design, comment-writer, issue-creation, work-unit-commits) están operativos con front-matter correcto. 4) Working tree limpio (solo archivos generados de sesión: manifest, tokens, knowledge-base).

---
*Imported from Engram on 2026-09-06*
