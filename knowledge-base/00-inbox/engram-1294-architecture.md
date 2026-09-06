---
created: 2026-06-02 16:08:34
tags: [engram, architecture]
engram_id: 1294
type: architecture
---

# Engram RAG — TF-IDF vector retrieval for memories

**What**: Implemented Engram RAG system for semantic retrieval from persistent memory. Scripts: engram-vector-index.ps1 (builds TF-IDF n-gram vector index from Engram observations), engram-rag-query.ps1 (cosine similarity query engine), engram-rag-reindex.ps1 (full rebuild wrapper). Vector index at .session/engram-rag/vector-index.json: 1,289 docs × 7,317 terms.
**Why**: Keyword search in memory was imprecise. TF-IDF enables fuzzy semantic matching of past decisions, bugs, and patterns without external APIs.
**Where**: scripts/utilities/ENGRAM-RAG/engram-vector-index.ps1, engram-rag-query.ps1, engram-rag-reindex.ps1
**Learned**: Pure PowerShell TF-IDF handles ~1,300 docs in seconds. Incremental rebuild support via --Incremental flag. No Python or API dependencies needed.

---
*Imported from Engram on 2026-09-06*
