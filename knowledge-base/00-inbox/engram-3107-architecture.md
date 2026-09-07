---
created: 2026-08-25 03:18:28
tags: [engram, architecture]
engram_id: 3107
type: architecture
---

# Unified token writers to Nexus SQLite authority

**What**: Consolidated token persistence to Nexus SQLite as the single authority. (1) `src/tokens/token-tracker.ts`: removed JSONL writer (`docs/sessions/metrics/token-usage-real.jsonl`), `logTokenUsage` now SQLite-only via `mgr.recordTokenUsage`; readers `getTodayUsage`/`getUsageStats` query Nexus directly with GROUP BY model and provider/model split on first '/'. (2) `src/tokens/token-metrics-store.ts`: new `openNexus()` helper with structural types (NexusStatement/NexusDb); removed `writeDb()` entirely; `recordUsage` INSERTs into token_usage; `queryHistory`/`getWeeklyData`/`getMonthlyData`/dashboard-today rewritten to SQL; `initDb` reports only. Legacy `readDb()` kept ONLY for close-time fallback of historical data. (3) Added public getter `get database()` to DatabaseManager for stack CLIs.
**Why**: Plan P1 item — "Unificar ingesta de tokens: hacer de TokenRepo/token-ingest.ts la única autoridad; retirar fallbacks docs/sessions/metrics/token-usage-real.jsonl y .runtime/metrics.json tras verificar callers". Grep verified zero runtime callers for tracker class (CLI-only) and only `--action close` invocation for metrics-store.
**Where**: src/tokens/token-tracker.ts, src/tokens/token-metrics-store.ts, apps/web-dashboard/server/database/manager.ts
**Learned**: Close fallback chain untouched (nexus → token-ingest file → session file → legacy metrics store read-only). Cross-tool consistency verified: tracker today = 637,097 tokens matches store query row 2026-08-25 exactly. SkillRepo.recordTokenUsage does plain INSERT per call (not upsert); TokenRepo.upsertUsage is upsert per (tenant, session). Root typecheck does NOT cover apps/web-dashboard strictness — always also run dashboard build when touching server code.

---
*Imported from Engram on 2026-09-06*
