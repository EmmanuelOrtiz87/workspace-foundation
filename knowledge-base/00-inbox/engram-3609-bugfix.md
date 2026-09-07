---
created: 2026-09-02 04:32:05
tags: [engram, bugfix]
engram_id: 3609
type: bugfix
---

# Fixed token-budget-guard schema obsoleto (adaptive mode)

**What**: token-budget-guard.schema.json estaba desactualizado respecto al código real.
**Why**: watchtower health mostraba FAIL en componente 'configs' por schema del token-budget-guard.
**Where**: config/token-budget-guard.schema.json, src/tokens/token-budget-guard.ts.
**Learned**: El código (token-budget-guard.ts línea 114 y 265) soporta `enforcement.mode = 'adaptive'` con la propiedad `adaptiveModes` (soft/warn/strict/emergency), pero el schema `enforcement.mode` solo permitía el enum [soft, hard, disabled] y no definía `adaptiveModes`. Fix: añadido 'adaptive' al enum y el objeto `adaptiveModes`. Watchtower pasó de configs: ISSUES (FAIL 1) → configs: OK (FAIL 0). GOTCHA: los WARN de 'assigned but never used' con prefijo _ NO se eximen con la config por defecto (solo argsIgnorePattern cubre argumentos), hay que eliminar la asignación muerta.

---
*Imported from Engram on 2026-09-06*
