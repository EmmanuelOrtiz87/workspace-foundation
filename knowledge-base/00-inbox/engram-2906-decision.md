---
created: 2026-08-20 17:07:00
tags: [engram, decision]
engram_id: 2906
type: decision
---

# DeepSeek Harness and token cost assessment

**What**: Evaluated deepseek-ai/deepseek-harness via native web crawler and documented a no-vendor decision with patterns to absorb: plugin-owned seams, capability discovery, bounded delegation receipts, and compatibility gates.
**Why**: User requested validation for optimization/context/token reduction and understanding of rapid free-model quota consumption.
**Where**: docs/research/deepseek-harness-assessment.md; token-ingest trace/Nexus metrics.
**Learned**: Harness is a rapidly changing Cordis/TypeScript developer preview, not a drop-in optimization. Today's measured usage: orchestrator 408,645 input + 31,570 output + 24,821,538 cache reads; subagents 768,485 input + 53,780 output + 7,047,405 cache reads; cache reads account for 33,317,712 tokens of reuse and ~$0.98 reported cost. Historical top sessions repeatedly processed millions of input and tens/hundreds of millions of cache reads. Main waste is repeated long context/loops, not autostart itself. Current optimizations active: session reuse, compression (97%), 5M daily budget, token ingestion, and compact delegation are present; dashboard/codegraph were restored and watchtower is 95/95 PASS.

---
*Imported from Engram on 2026-09-06*
