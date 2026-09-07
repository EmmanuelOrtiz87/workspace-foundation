---
created: 2026-08-15 01:21:16
tags: [engram, decision]
engram_id: 2835
type: decision
---

# Frentes 1 y 2: close orchestrator + token budget + lazy steps

**What**: Optimized session START (Frente 1) and CLOSE (Frente 2) fronts.
**Why**: 1) token-ingest --watch daemon survived close and kept writing logs; 2) daily budget 5M vs 12.4M real multi-session usage = 249% false positive; 3) `.active-session.json` never cleaned at close; 4) lazy-safe steps (session-cleanup, post-autostart-consistency-check) were disabled.
**Where**: src/session-close-orchestrator.ts (KILL_TARGETS +Token Ingest required:false; new phase 'cleanup-active-session' gated behind !skipDaemonKill using unlinkSync try/catch, renumbered 5.2-5.5), config/token-budget-guard.json (daily 5000000→13000000, last_updated 2026-08-14), src/token-ingest.ts writeObservabilityReport (added token.current_session = most recent session by timeUpdated, kept used_today/budget), src/session-cleanup-start.ts (new -SkipSessionInit flag: skips initSessionData/flushCaches/tracing-close/audit session.end/event session.ended so a lazy startup run never regenerates the session-manager's session), config/session-autostart.config.json (session-cleanup enabled lazy with -Quiet -SkipSessionInit -SkipCacheFlush; post-autostart-consistency-check enabled lazy).
**Learned**: session-cleanup-start.ts `runCleanup` ALWAYS called initSessionData() (new session ID) — enabling it raw at startup would clobber session-current.json created by the phase-0 session-manager step and reset token caches racing with token-ingest. The `session-manager` step's args `--quiet --skip-cache-flush` do NOT match the CLI parser's single-dash PascalCase cases (`-Quiet`, `-SkipCacheFlush`), so it runs FULL cleanup at startup already (removeStaleSessions >8h happens there). process-cleanup.ts (killZombieDashboard) is NOT invoked by the autostart pipeline (only quick-start.ts) — wiring it in would kill the freshly-started dashboard on ports 8080/5173. Lock dedupe in src/core/session-autostart.ts:96-156 is solid: checkLock + isLockOwnerAlive (Win32 CIM CommandLine must be node + 'session-autostart') → 2nd start SKIP, stale lock removed and retaken. token-usage-reader.ts reads token.used_today/budget/projected_pct from the report — current_session is purely additive, no consumer breaks.

---
*Imported from Engram on 2026-09-06*
