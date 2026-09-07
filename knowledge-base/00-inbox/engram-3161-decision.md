---
created: 2026-08-25 16:21:29
tags: [engram, decision]
engram_id: 3161
type: decision
---

# Release 2026-08-25: push main+develop+público, glosario y research docs

**What**: Release completo: 61 commits pusheados a origin main y develop (dc09cbbd), repo público sincronizado (main+develop) con README v3.8.2 verificado, watchtower 97/97 PASS 0 WARN, tree limpio. Fixes en la pasada: generate-sbom.ts maxBuffer 1MB→64MB (mataba el spawn con 765 componentes y bloqueaba pre-push con error engañoso); .gitignore /docs/research/ afinada a /docs/research/auto/ (regla amplia bloqueaba research curado). Docs nuevos: docs/reference/GLOSSARY.md (canónico qué/porqué/cómo/dónde, Academy deriva de él) y docs/research/EXTERNAL-BEST-PRACTICES-2026-08.md (research externo 2026-08 mapeado a implementación).
**Why**: El usuario pidió subir todo a main+develop+público, research externo y completar documentación 5W.
**Where**: src/generate-sbom.ts, .gitignore, docs/reference/GLOSSARY.md, docs/research/EXTERNAL-BEST-PRACTICES-2026-08.md
**Learned**: El stack ya está alineado con best practices públicas (SQLite observability backbone, local code indexing, token steering, skill metadata budgets). Known-limitations honestas: prefix-cache ordering y skill-description A/B testing anotados como candidatos; P2 externo por diseño; multi-repo alpha; plugins experimentales; event-bus subutilizado; FF-016 diferido. Scan de TODOs: 35 matches son strings de detectores (falsos positivos), código vivo limpio.

---
*Imported from Engram on 2026-09-06*
