---
created: 2026-09-02 16:22:25
tags: [engram, bugfix]
engram_id: 3631
type: bugfix
---

# Presentations actualizadas + token budget 10M

**What**: Actualicé las presentations (`docs/presentations/*.html`) a los datos reales del stack y ajusté el token budget diario.

**Why**: El plan original pedía verificar presentations y cifras; contenían badges "95/95 Health" y referencias a "95 checks / 21 componentes" obsoletos.

**Where**: `docs/presentations/` — 21 archivos HTML (badges "95/95 Health" → "113/113 Health"), glossary.html ("95 checks en 13 componentes" → "113 checks en 26 componentes"), health.html ("21 componentes monitoreados" → "26 componentes monitoreados"). `config/token-budget-guard.json` (daily 8M → 10M).

**Learned**:
- Número canónico del watchtower: **113 checks / 26 componentes** (112 PASS + 1 WARN real, el WARN es `minimax-m2-5` proveedor de modelo).
- Presupuesto diario de tokens ajustado a 10M (uso real ~82%, costo $0 por modelos free tier).
- Las presentations usan badges visuales "X/X Health" repetidos en muchos archivos — reemplazo masivo con PowerShell `-replace` es eficiente.
- El stack quedó completo: Academy actualizada (v4.0.0, 23 skills, 113 checks), presentations corregidas, token budget con margen, skills sincronizadas cross-tool, watchtower sano (112/1/0/113).

---
*Imported from Engram on 2026-09-06*
