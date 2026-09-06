---
created: 2026-05-30 15:09:36
tags: [engram, architecture]
engram_id: 1238
type: architecture
---

# Auto-sync README-PUBLIC.md + override protocol

**What**: Normalización completa repos privado/público: sync-to-public.ps1 ahora copia README-PUBLIC.md → public README.md y presentation.html. sync-public.yml triggers en develop+main + paths. Override Protocol implementado en CLAUDE.md/AGENTS.md/NORMATIVAS-ENFORCEMENT.md (si instrucción contradice normativa, preguntar confirmación).

**Why**: Los repos divergían — public main tenía sync incompleto (solo format-check.yml) mientras private main tenía README fix. No había automatización para README público ni para cambios en main.

**Where**: scripts/utilities/DEPLOYMENT/sync-to-public.ps1, .github/workflows/sync-public.yml, CLAUDE.md, docs/AGENTS.md, rules/NORMATIVAS-ENFORCEMENT.md

**Learned**: gh workflow run permite trigger manual de workflows. El sync workflow se puede verificar con git fetch public main y git diff.

---
*Imported from Engram on 2026-09-06*
