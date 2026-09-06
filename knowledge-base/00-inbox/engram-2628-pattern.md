---
created: 2026-08-07 21:05:59
tags: [engram, pattern]
engram_id: 2628
type: pattern
---

# i18n ES/PT traducción presentaciones agentspipeline + quickstart

**What**: Traducidos los bloques `es:` y `pt:` (de placeholders EN a ES neutral / PT-BR) en 2 diccionarios i18n de presentaciones: `docs/presentations/assets/js/content-parts/i18n-content-agentspipeline.js` (64 claves) y `i18n-content-quickstart.js` (40 claves). Bloque `en:` intacto.
**Why**: Los placeholders ES/PT estaban en inglés; tarea de traducción al español y portugués.
**Where**: docs/presentations/assets/js/content-parts/i18n-content-agentspipeline.js, i18n-content-quickstart.js
**Learned**: (1) El estilo de la carpeta content-parts NO cumple prettier (sin trailing commas) — los 11 archivos hermanos también fallan; no reformatear. (2) La verificación JSON obligatoria usa los regex `es: ({[\s\S]*?}),\s*pt:` y `pt: ({[\s\S]*?})\s*\};` — extraer `en:` requiere shim `global.window={}; require(...)`. (3) Términos a mantener: Orchestrator, Agent, Router, Confidence, Session, Pipeline, Lifecycle, Skill Router, SDD, BA/SAD/DEV/QA, CI/CD, Dashboard, WS/WebSocket, Nexus, SQLite, GitFlow, Premortem, Self-Diag, SIA, Watchtower, Knowledge, i18n, LLM, RAG.

---
*Imported from Engram on 2026-09-06*
