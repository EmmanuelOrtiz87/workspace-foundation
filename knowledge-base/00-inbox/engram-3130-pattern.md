---
created: 2026-08-25 13:27:33
tags: [engram, pattern]
engram_id: 3130
type: pattern
---

# Config-loader adoption in remaining safe modules

**What**: Replaced duplicated config JSON loaders with `loadConfigFile` in eight safe modules: compact-state, coverage-runner, findings-ledger, model-provider-healer, resilience-handler, review-lenses, result-gatekeeper, and web/web-crawler.
**Why**: Complete the surgical adoption of the unified config loader while preserving existing defaults, custom tests/ and resilience config paths, and WebCrawler Zod validation.
**Where**: src/compact-state.ts, src/coverage-runner.ts, src/findings-ledger.ts, src/model-provider-healer.ts, src/resilience-handler.ts, src/review-lenses.ts, src/result-gatekeeper.ts, src/web/web-crawler.ts.
**Learned**: coverage-runner uses `tests/coverage-config.json`, so it passes a custom `tests` dir and retains its post-merge exclude behavior; resilience preserves its missing-config warning; WebCrawler keeps env API-key fallback and Zod parsing.

---
*Imported from Engram on 2026-09-06*
