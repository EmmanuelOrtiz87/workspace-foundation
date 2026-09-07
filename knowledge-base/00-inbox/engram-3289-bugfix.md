---
created: 2026-08-29 17:32:24
tags: [engram, bugfix]
engram_id: 3289
type: bugfix
---

# Obsidian Engram sync audit

**What**: Audité y corregí la integración Obsidian/knowledge-base para usar rutas canónicas y contratos reales de Engram.
**Why**: La sincronización usaba `engram search --json` y comandos `npx engram mem ...` inexistentes; había rutas obsoletas y el manager no persistía realmente.
**Where**: `src/knowledge/*`, `config/knowledge-base-config.json`, `config/session-autostart.config.json`, `knowledge-base/`, `docs/knowledge-base/`, `docs/getting-started/README.md`, `package.json`, `tests/unit/knowledge-query.test.ts`.
**Learned**: Engram 1.20 exporta JSON mediante `engram export <file>` y persiste notas mediante `engram save <title> <content> --type ...`; `--dry-run` debe evitar también crear carpetas o resúmenes. No se borraron notas del vault ni se modificó schema Engram/Nexus.

---
*Imported from Engram on 2026-09-06*
