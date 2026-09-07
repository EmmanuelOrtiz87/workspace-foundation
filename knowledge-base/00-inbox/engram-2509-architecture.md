---
created: 2026-08-04 14:45:44
tags: [engram, architecture]
engram_id: 2509
type: architecture
---

# Token telemetry complete + monthly summary

**What**: Completed guaranteed token telemetry. Every message received/processed registers in Nexus with token calculation. Created `src/token-monthly-summary.ts` for 30-day summaries persisted to docs/sessions/metrics/monthly/.
**Why**: User required guaranteed token telemetry and 90-day maintenance; normative requires zero .ps1 (all TS).
**Where**: src/token-usage-auto.ts (now uses src/token-usage-notifier.ts + src/core/session-context-log.ts instead of broken ps1), src/token-usage-notifier.ts (uses src/token-metrics-store.ts), src/hooks/post-tool-use-log.ts (uses src/token-usage-auto.ts), config/opencode-hooks.json (preToolUse→pre-tool-call-validate.ts, postToolUse→post-tool-use-log.ts), src/core/session-context-log.ts (SessionTurn extended with inputSummary/outputSummary/toolCalls), src/token-monthly-summary.ts, config/session-autostart.config.json (step token-monthly-summary, 103→104 steps), package.json (token:monthly, token:monthly:json).
**Learned**: db-prune step already handles 90-day token_usage cleanup. token-monthly-summary uses better-sqlite3 readonly. End-to-end flow verified: token-usage-auto writes to .session/context-log/<session>/.state.json.

---
*Imported from Engram on 2026-09-06*
