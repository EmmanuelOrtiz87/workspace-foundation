---
created: 2026-08-29 06:33:48
tags: [engram, architecture]
engram_id: 3230
type: architecture
---

# F2.5 split of real-data.ts into per-domain modules

**What**: Split `apps/web-dashboard/server/real-data.ts` (1682 lines) into 6 per-domain modules under `apps/web-dashboard/server/real-data/` and rewrote the original as a 17-line thin barrel (`export *` × 6). Mechanical refactor, zero behavior changes — function bodies copied verbatim, only imports adjusted.
**Why**: F2.5 refactor task — reduce monolith file size for maintainability.
**Where**: `apps/web-dashboard/server/real-data.ts` (barrel), `apps/web-dashboard/server/real-data/{helpers,swarm,metrics,traces,usage,capabilities}.ts`
**Learned**: (1) The 3 importers (`handlers/metrics.ts`, `handlers/observability.ts`, `ws-hub/metrics.ts`) import WITH `.ts` extension, so the barrel keeps them working untouched. (2) `MODEL_PRICING` and `stateCache` had to be exported from helpers.ts because metrics.ts uses MODEL_PRICING and traces.ts uses readWithCache. (3) `Trace`/`TraceStats` interfaces were NOT exported in the original but had to become `export interface` in traces.ts so the barrel re-exports them (no behavior change — no importer used them). (4) `SwarmWorkerData` type moved to swarm.ts only (metrics.ts doesn't need it). (5) Barrel resolves 46 exports, no name collisions. (6) Pre-existing uncommitted changes in `src/hooks/useLocale.ts` and `src/i18n/` were present before this task — not touched.

---
*Imported from Engram on 2026-09-06*
