---
created: 2026-07-11 02:41:29
tags: [engram, bugfix]
engram_id: 1564
type: bugfix
---

# Fixed all broken PS1 refs and runtime errors from Phase 1 cleanup

**What**: Fixed all broken PS1 references and runtime errors from Phase 1 cleanup across 17 files
**Why**: Phase 1 deleted ~372 PS1 scripts but left broken references throughout the codebase causing runtime errors in session-autostart pipeline
**Where**: scripts/utilities/session/session-cleanup-start.ps1, scripts/utilities/profile/PROFILE-ADAPTIVE/adaptive-common.ps1, scripts/utilities/token-usage-notifier.ps1, scripts/security/privacy-gateway.ps1, scripts/security/scan-skill-hook.ps1, scripts/validation/verify-optimization-stack.ps1, scripts/utilities/session/session-start-optimized.ps1, scripts/hooks/orchestrate-auto-fix.ps1, scripts/utilities/telemetry/TELEMETRY-METRICS/token-budget-guard.ps1, scripts/utilities/memory/ENGRAM-RAG/engram-rag-reindex.ps1, scripts/diagnostics/validate-gitflow.ps1, scripts/gentle-vanguard/bootstrap.ps1, scripts/gentle-vanguard/bootstrap-machine.ps1, scripts/setup-complete.ps1, scripts/utilities/profile/PROFILE-ADAPTIVE/adaptive-codex-windsurf-profile.ps1, scripts/utilities/pre-process-input.ps1, config/session-autostart.config.json, src/mcp-gateway.ts
**Learned**: 1) PowerShell `-and` in `if (Test-Path $x -and $y)` must be wrapped in parens: `(Test-Path $x) -and $y`. 2) Functions with mandatory params need defaults when callers forget to pass them. 3) Splatting with `@args` can cause ValidateSet mismatches - use direct invocation instead. 4) Single quotes in JSON args cause PowerShell shell parsing issues - use hyphens instead. 5) `npx` on Windows needs `shell: true` in Node.js spawn calls. 6) `gv.ps1` is a dead orchestrator shell with 63 broken refs - needs major cleanup or deprecation.

---
*Imported from Engram on 2026-09-06*
