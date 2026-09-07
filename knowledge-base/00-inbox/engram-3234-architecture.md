---
created: 2026-08-29 07:07:45
tags: [engram, architecture]
engram_id: 3234
type: architecture
---

# F2.5 split session-close-orchestrator into modules

**What**: Split `src/session/session-close-orchestrator.ts` (1240 lines) into a per-domain module directory `src/session/session-close/` with a thin 33-line entry. Modules: helpers.ts (constants/PhaseResult/LOG/log/ok/warn/file helpers/runScript/runCmd/getAllFiles/getChangedFiles), process.ts (KillTarget/KILL_TARGETS/isProcessRunning/isStartupClose/waitForProcess/killProcessByCommandLine), phases.ts (phasePreClose/phasePreValidate/phasePersist/phaseBackup/phaseAudit/phaseCleanup/phaseVerify), index.ts (CloseReport/runCloseOrchestrator/main). Entry re-exports runCloseOrchestrator + CloseReport and keeps the `main().catch(...)` top-level invocation verbatim. Zero behavior changes; function bodies copied verbatim, only imports adjusted (relative depth +1: `../../core/...`).

**Why**: F2.5 refactor task — reduce the 1240-line monolith; the file is invoked by path string from src/core/session-orchestrator.ts:122 and src/cli/stack.ts:160, so the entry path must be preserved.

**Where**: src/session/session-close/{helpers,process,phases,index}.ts, src/session/session-close-orchestrator.ts (rewritten, 33 lines).

**Learned**: (1) The task's line map was inaccurate — the file also contained phasePersist, phaseCleanup, KILL_TARGETS, and main() (CLI entry) which the invocation block calls; all were mapped into the modules. (2) `.gitignore:84` has `session/` which matches `src/session/` at any depth → prettier IGNORES all files under src/session/ (prettier v3 uses .gitignore by default) and git will NOT track new files there without `git add -f`. The original file is tracked only because it predates the rule. (3) Original file was CRLF but .gitattributes declares eol=lf for *.ts; siblings are LF — new files use LF. (4) src/resilience/response-cache/ and src/security/secret-scanner/ are untracked dirs being actively worked on concurrently (transient tsc errors appeared then disappeared).

---
*Imported from Engram on 2026-09-06*
