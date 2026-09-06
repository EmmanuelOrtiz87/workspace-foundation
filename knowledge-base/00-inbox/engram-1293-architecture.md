---
created: 2026-06-02 16:08:32
tags: [engram, architecture]
engram_id: 1293
type: architecture
---

# Auto-delegación ML — TF-IDF n-gram skill router

**What**: Implemented TF-IDF n-gram based ML router for auto-delegation. Scripts: skill-embedder.ps1 (builds vector index from skill registry, 13KB), ml-router.ps1 (cosine similarity + Jaccard matching, 11KB), ml-router-test.ps1 (CLI test, 4KB). Vector index at .atl/skill-embeddings.json: 387 skills, 1,070 vocabulary terms. Routing tiers: tier1_direct (≥80%), tier2_confirm (≥60%), tier3_clarify (<60% → BA exploration).
**Why**: Keyword-based routing in config/auto-delegation.json was brittle. ML router provides fuzzy semantic matching for any query.
**Where**: scripts/utilities/AUTO-DELEGATION/skill-embedder.ps1, ml-router.ps1, ml-router-test.ps1. Config: config/auto-delegation.json (routingBindings tiers).
**Learned**: No external ML APIs needed — TF-IDF with char n-grams + cosine similarity works well for skill matching. ~400ms response time for 387 skills. Weak when skill descriptions lack relevant keywords (e.g., "authentication" not in index).

---
*Imported from Engram on 2026-09-06*
