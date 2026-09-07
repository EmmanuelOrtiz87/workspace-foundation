---
created: 2026-08-29 08:22:46
tags: [engram, architecture]
engram_id: 3239
type: architecture
---

# F2.5 research-trends + token-ingest + humanizer splits

**What**: Committed 3 more F2.5 splits: research-trends (1182→19 barrel, modules schemas 157/config 45/http 116/sources 540/report 238/fetch 128), token-ingest (1119→49 thin entry, modules readers 465/nexus 344/ingest 286/index 3), humanizer (1013→37 barrel, modules data 450/metrics 248/patterns 115/transform 159/analyze 145). Commits bff03f67, 3c6ef0a8, c4aa9408.
**Why**: F2.5 acceptance = no file >800 lines.
**Where**: src/research/research-trends/, src/tokens/token-ingest/, src/humanize/humanizer/
**Learned**: (1) research-trends: extracting ROOT/CONFIG_PATH/loadConfig/timeframe helpers into a config.ts avoids http↔fetch and sources↔fetch circular pairs — clean DAG schemas→config→http→sources/report→fetch. (2) Dynamic import paths must be depth-adjusted when files move deeper (importWebCrawler '../web/web-crawler.js' → '../../web/web-crawler.js'). (3) token-ingest: keep entry at same path so package.json path strings AND process-hygiene daemon matcher (/token-ingest\.ts.*--watch/) keep working. (4) humanizer: PASSIVE_RE in data.ts avoids metrics↔patterns cycle (computeMetrics uses PASSIVE_RE, buildPatterns uses countContractions/countMatches from metrics). (5) Parallel subagent tsc errors are transient (mid-write); final combined tsc is the truth. (6) F2.5 remaining: token-optimization-orchestrator 941, adaptive-router 901, mcp-lsp-server 851, web-crawler 839, knowledge-synthesizer 817.

---
*Imported from Engram on 2026-09-06*
