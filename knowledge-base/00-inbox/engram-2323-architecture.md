---
created: 2026-07-31 03:40:04
tags: [engram, architecture]
engram_id: 2323
type: architecture
---

# Sistema model-switch y fix-models no bloqueante

**What**: Creado scripts/utilities/MODEL-ROUTER/model-switch.ts (comandos current|list|switch|capability|help) + fix-models.ts. Ambos NO bloqueantes: leen providers reales de la config global de opencode, validan contra el cache de modelos (~/.cache/opencode/models.json), crean backups, y nunca lanzan excepciones. npm scripts: model:current, model:list, model:switch, model:capability, model:fix, model:help.
**Why**: El usuario quería selección de modelo a demanda (secundaria) sin API keys externas, que nunca bloquee ni genere ruido. El stack debe funcionar siempre con el modelo nativo de opencode.
**Where**: scripts/utilities/MODEL-ROUTER/model-switch.ts, scripts/utilities/MODEL-ROUTER/fix-models.ts, package.json
**Learned**: fix-models.ts replica el patrón injectModelAssignments de gentle-ai (github.com/Gentleman-Programming/gentle-ai): inyecta "model": "provider/model" + "variant": "" en subagentes, validando el ID contra el cache. Ya aplicado: 20/20 subagentes de opencode.json con opencode/deepseek-v4-flash-free.

---
*Imported from Engram on 2026-09-06*
