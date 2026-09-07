---
created: 2026-05-18 02:05:42
tags: [engram, decision]
engram_id: 929
type: decision
---

# READMEs mejorados + optimizador-prompts integrado

**What**: Mejorados READMEs de repos privado y público (humanizados con humanizador-skill, visuales con presentaciones-visuales-skill). Integrado optimizador-prompts-skill en auto-delegación (DOC agent). Corregida versión desfasada v2.15.0→v2.16.0 en footer README privado.\n**Why**: User requested mejorar redacción y aspecto visual de ambos READMEs, integrar skill faltante, y verificar versiones.\n**Where**: README.md (privado + público), config/auto-delegation.json, .atl/skill-registry.md\n**Learned**: El skill registry mostraba optimizador-prompts como (unassigned) porque faltaba mapeo en skillToAgentProfile. Los 4 skills externos (humanizador, presentaciones-visuales, verificador-datos, optimizador-prompts) ahora están todos mapeados y funcionales.

---
*Imported from Engram on 2026-09-06*
