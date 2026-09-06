---
created: 2026-05-31 20:24:51
tags: [engram, architecture]
engram_id: 1250
type: architecture
---

# CodeGraph: Semantic search + enrichment wrappers

**What**: Created semantic search wrapper (scripts/codegraph/codegraph-semantic-search.ps1) with dual-tier FTS5 + fuzzy synonym matching using 9 domain synonym maps (auth/error/config/db/api/test/ui/cache/net) with relevance scoring 0-1. Created enrichment wrapper (scripts/codegraph/codegraph-enrich.ps1) with layer detection (API/Service/Data/UI/Utility), complexity tags, file metadata, and caller count. Updated skills/codegraph-skill/SKILL.md with Semantic Search section. Added CODEGRAPH keywords to auto-delegation.json.

**Why**: understand-anything repo showed that code exploration needs semantic search + visual enrichment. CodeGraph only had FTS5 keyword search.

**Where**: scripts/codegraph/codegraph-semantic-search.ps1, scripts/codegraph/codegraph-enrich.ps1, skills/codegraph-skill/SKILL.md, config/auto-delegation.json

**Learned**: PowerShell's PSParser.Tokenize is the best way to validate .ps1 syntax. CodeGraph FTS5 search is fast but can't do synonym expansion or fuzzy matching.

---
*Imported from Engram on 2026-09-06*
