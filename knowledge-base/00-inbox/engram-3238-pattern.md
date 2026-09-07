---
created: 2026-08-29 07:19:36
tags: [engram, pattern]
engram_id: 3238
type: pattern
---

# F2.5 split research-trends.ts into per-domain modules

**What**: Split `src/research/research-trends.ts` (1182 lines) into `src/research/research-trends/` per-domain modules; original file is now a 19-line `export *` barrel. Zero behavior changes; importers untouched.
**Why**: F2.5 mechanical refactor task — reduce monolith size, per-domain modules.
**Where**: `src/research/research-trends.ts` (barrel), `src/research/research-trends/{schemas,config,http,sources,report,fetch}.ts`
**Learned**: (1) Deviated from the suggested 5-file grouping by adding `config.ts` (ROOT/CONFIG_PATH/loadConfig/timeframeToMs/timeframeToReddit) to avoid two circular dependency pairs (http↔fetch via ROOT, sources↔fetch via timeframe helpers) — task explicitly allowed "adapt if a cleaner grouping emerges". (2) Dynamic import path `import('../web/web-crawler.js')` in `importWebCrawler` had to become `'../../web/web-crawler.js'` after moving one directory deeper — the only non-import change needed. (3) Cross-module imports force exporting previously-private helpers (httpGet, TrendCache, loadConfig, normalizeTrend, serializeReport, etc.); with `export *` barrels these leak as additive public exports — harmless, but be aware. (4) `TrendReportSchema`/`TrendSchema` are runtime zod values, not types — must be value imports; `z.infer` needs `import { z } from 'zod'`. (5) Only import types actually used in each module — `no-unused-vars` is an eslint error; in fetch.ts `Timeframe`/`ResearchTrendsConfig`/`TrendReport` are only inferred so must NOT be imported. (6) `.js` specifiers resolve to `.ts` under `moduleResolution: bundler` + tsx; `.ts` specifiers fail TS5097.

---
*Imported from Engram on 2026-09-06*
