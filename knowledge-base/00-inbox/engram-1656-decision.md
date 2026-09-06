---
created: 2026-07-14 19:15:29
tags: [engram, decision]
engram_id: 1656
type: decision
---

# Stack analysis and improvements completed

**What**: Comprehensive stack analysis + evolution of Gentle-Vanguard v8.0.1 - created 10 agent files, 7 commands, adaptive profile fixes, opencode.json enhancements, 5 eval quality gate suites (80 tests), and PS1→TS Wave 5 migrations

**Why**: User requested full stack audit and optimization

**Where**: .opencode/agents/*.md (10 files), .opencode/commands/*.md (7 files), config/auto-delegation.json, opencode.json (compaction+references), tests/eval/ (5 test files, 80 tests), vitest.eval.config.ts

**Learned**:
- opencode.json: added compaction.tail_turns=15, keep_recent=5, references paths
- Adaptive profile crash fix: Ensure-StateProperties added to adaptive-common.ps1
- Eval tests MUST run via `npx vitest run --config vitest.eval.config.ts` (not `node --test`)
- Dashboard builds in 7.5s with vite in devDependencies
- TS strict mode catches unused imports (TS6133) and type mismatches (TS2769)
- auto-delegation.json: 2420 lines, 411 skillToAgentProfile entries — cleanup pending but not yet executed
- Prometheus metrics export stale (106+ hrs) — OTel collector likely not running

---
*Imported from Engram on 2026-09-06*
