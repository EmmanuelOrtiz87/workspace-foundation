---
created: 2026-08-24 23:11:43
tags: [engram, bugfix]
engram_id: 3073
type: bugfix
---

# Fixed incremental skill embedder freshness

**What**: Fixed skill-embedder-incremental full rebuilds to invoke `src/skills/skill-embedder.ts`, align registry/config parsing with the native embedder, validate rebuild exit/output, and write correct freshness metadata including `lastFullRebuild`.
**Why**: Full rebuild previously targeted a nonexistent `src/skill-embedder.ts`, so failures were swallowed and watchtower continued reporting stale embeddings; metadata also diverged from native skill counts.
**Where**: src/skills/skill-embedder-incremental.ts, tests/unit/skills-discovery.test.ts, refreshed .atl/skill-embeddings.json.
**Learned**: The registry columns are Agent|Skill|Triggers and auto-delegation uses `skillToAgentProfile`; the existing native embedder is deterministic local TF-IDF/character n-gram generation and must remain the only embedding path.

---
*Imported from Engram on 2026-09-06*
