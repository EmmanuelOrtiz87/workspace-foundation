---
created: 2026-08-21 11:55:35
tags: [engram, pattern]
engram_id: 2945
type: pattern
---

# Git hooks: push timeout 600s + conventional merge messages

**What**: Pre-push lefthook runs 8 checks (audit-check, container-scan, coverage-gate, lint, npm-audit, orchestrator-auto-fix, perf-baseline, typecheck) taking ~139s total. commitlint enforces conventional commits on ALL commits including merges.
**Why**: Default 120s tool timeout kills pushes mid-hook (ChildProcess.kill); merge commits with default messages ("Merge branch X") get rejected by commitlint.
**Where**: .lefthook.yml pre-push section; commit-msg hooks commitlint + commit-msg-session-track.
**Learned**: Use timeout ≥600000ms for git push. Merge messages must be like "chore: merge main into <branch>". `--no-verify` acceptable ONLY on archive/* branches (legacy config schemas fail validation with "provider is required"), never on main/develop.

---
*Imported from Engram on 2026-09-06*
