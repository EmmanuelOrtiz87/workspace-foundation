---
created: 2026-08-07 21:06:11
tags: [engram, pattern]
engram_id: 2631
type: pattern
---

# i18n ES/PT for health and memoryknowledge presentations

**What**: Translated `es:` and `pt:` i18n dictionaries in 2 presentation content files to real Spanish/Portuguese (previously English placeholders).
**Why**: Stack presentations needed localized content dictionaries.
**Where**: docs/presentations/assets/js/content-parts/i18n-content-health.js (63 keys), i18n-content-memoryknowledge.js (36 keys)
**Learned**: Files are untracked in git (new, `??`). They follow a custom format (double quotes, 2-space key indent, no trailing commas) that does NOT match repo prettier config (singleQuote:true, trailingComma:all) — prettier check fails pre-existing; do not prettier --write. Structure is `window.__GV_CONTENT_<page> = { en: {...}, es: {...}, pt: {...} };`. Keys are `c_<page>_N`. Kept technical terms (Health, Watchtower, Nexus DB, SQLite, WAL, CodeGraph, Graphify, Engram, ML, RAG, SHA256, JSONL, i18n, LLM, AST, embeddings, backlog, SLO, quality scoring, event sourcing, distributed tracing) untranslated; translated natural text. Preserved HTML entities (&lt;), literal \n sequences, and → character.

---
*Imported from Engram on 2026-09-06*
