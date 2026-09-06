---
created: 2026-08-29 06:35:22
tags: [engram, architecture]
engram_id: 3231
type: architecture
---

# F2.5 useLocale + real-data splits

**What**: Split apps/web-dashboard/src/hooks/useLocale.ts (1956→35 lines) into src/i18n/ (metric-catalog.ts 517 + ui-strings.ts 1413) with hook re-exports; split apps/web-dashboard/server/real-data.ts (1682→17 lines barrel) into server/real-data/ (helpers 111, swarm 142, metrics 931, traces 281, usage 126, capabilities 134). Commits 7229da8a + 404329b1.
**Why**: F2.5 acceptance = no file >800 lines. useLocale was ~95% data, real-data was a data pipeline.
**Where**: apps/web-dashboard/src/i18n/, src/hooks/useLocale.ts, server/real-data/, server/real-data.ts
**Learned**: (1) useLocale is imported by ~30 components via '../hooks/useLocale' (no extension) → keep file as thin hook + re-export (export type {Locale}, export type {MetricInfo}, export {LOCALE_NAMES, LOCALE_FLAGS}). (2) real-data is imported WITH '.ts' extension by 3 modules (handlers/metrics, handlers/observability, ws-hub/metrics) → keep real-data.ts as barrel re-exporting from real-data/ dir; file+dir coexist fine on Windows. (3) Both splits delegated to sdd-apply in parallel — no conflicts (different files), each verified independently (tsc 0, vitest 61, build 0, eslint 0, prettier clean, smoke /api/metrics 200). (4) Prettier reflowed 2 pre-existing over-length lines in ui-strings (original was already not prettier-clean). (5) Parallel subagents both ran dashboard build — no interference.

---
*Imported from Engram on 2026-09-06*
