---
created: 2026-08-06 22:57:25
tags: [engram, architecture]
engram_id: 2608
type: architecture
---

# Safety-mode structural compression (lossless input, lossy output)

**What**: Implemented mode-aware structural compression in src/structural-compression.ts. compressStructural now takes mode:'input'|'output'. Input/prompt path is lossless-only by default (tabular compaction preserves all rows as CSV+schema); output path allows lossy strategies (SmartCrusher row-drop, LogCompressor, TextCrusher). compressPrompt uses mode:'input', compressOutput uses mode:'output'. Config v1.1.0 with input/output toggles.

**Why**: User raised critical safety concern: lossy compression on the INPUT/prompt path (dropping JSON rows or prose segments) degrades the model's ability to reason, affecting delegation prompts and answer quality. Output compression is safe (model already reasoned).

**Where**: src/structural-compression.ts, src/prompt-compression.ts, src/output-compression.ts, src/llm-call-wrapper.ts, config/structural-compression.json

**Learned**: The risk is asymmetric: output compression = low risk (model already reasoned), input compression = HIGH risk (drops data the model needs). Lossless strategies (tabular compaction to CSV+schema) give ~44% savings without data loss; lossy SmartCrusher gives ~70% but drops rows. Default: input lossless-only, output lossy. Commits: 61987601 (initial engine), 1c874663 (safety mode).

---
*Imported from Engram on 2026-09-06*
