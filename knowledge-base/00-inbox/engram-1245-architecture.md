---
created: 2026-05-31 04:36:34
tags: [engram, architecture]
engram_id: 1245
type: architecture
---

# Dashboard i18n completo + trace layout apilado + commit

**What**: Dashboard v2 completado: i18n EN/ES/PT completo, layout trace apilado (turns full-width, charts side-by-side, mechanisms abajo), auto-log hook vía postToolUse, sin hardcoded values. Commit f8853ced.
**Why**: Reemplazar todos los textos hardcoded por i18n keys, eliminar dead space en sección trace.
**Where**: reports/dashboard-v2/app.js (788→789), i18n.js (133→57), server.js, index.html, styles.css, config/opencode-hooks.json, hooks/post-tool-use-log.ps1
**Learned**: 45/45 tests pasan en 125s. `pnpm test` (no npm). node -c sin errores. commit pasó todos los hooks (trufflehog, commitlint, codegraph-sync).

---
*Imported from Engram on 2026-09-06*
