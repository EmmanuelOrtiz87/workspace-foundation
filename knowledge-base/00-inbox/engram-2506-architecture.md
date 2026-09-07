---
created: 2026-08-04 14:04:28
tags: [engram, architecture]
engram_id: 2506
type: architecture
---

# Guaranteed token telemetry in Nexus

**What**: Completed guaranteed token telemetry: every message processed is registered in Nexus with token calculation.
**Why**: User required that all messages received/processed be registered with token calculation in Nexus, with 90-day maintenance and 30-day automatic summaries.
**Where**:
- `src/token-usage-auto.ts` — fixed broken PS1 refs (token-usage-notifier.ps1, session-context-log.ps1) → now uses TS equivalents. Persists tokens + turns + summaries + toolCalls to session-context-log.
- `src/token-usage-notifier.ts` — now invokes `src/token-metrics-store.ts` via npx tsx.
- `src/core/session-context-log.ts` — extended SessionTurn interface with inputSummary/outputSummary/toolCalls.
- `src/hooks/post-tool-use-log.ts` — invokes token-usage-auto.ts via npx tsx (per-message trigger).
- `config/opencode-hooks.json` — preToolUse/postToolUse hooks point to TS (was broken .ps1).
- `src/token-monthly-summary.ts` — NEW: 30-day summary → docs/sessions/metrics/monthly/token-summary-YYYY-MM.md + .json. Supports --month/--json/--quiet.
- `config/session-autostart.config.json` — added lazy step `token-monthly-summary` (103 steps).
- `package.json` — added `token:monthly`, `token:monthly:json`.
**Learned**: `db-prune` step already handles 90-day token_usage maintenance. The per-message hook was silently broken (pointed to missing .ps1). Fixed 3 TS6133 errors by persisting InputSummary/OutputSummary/ToolCalls into the session turn. End-to-end flow verified: token-usage-auto writes to .session/context-log/<session>/.state.json.

---
*Imported from Engram on 2026-09-06*
