---
created: 2026-08-06 21:09:46
tags: [engram, architecture]
engram_id: 2600
type: architecture
---

# gv health command duplication analysis

**What**: BA analysis of a requested `gv health` unified command (full stack health check, table output, exit 0/1, <5s, non-blocking). Found the capability is ALREADY largely covered, but with duplication and an unmet UX contract.

**Why**: User requested `gv health`; needed to determine if it exists/duplicates or adds value.

**Where**:
- `src/cli/gv.ts` (npm `gv` target, line 123 in package.json): `gv health` runs `npm run db:health` (Nexus DB ONLY); `gv check` runs `maintenance-watchtower.ts --action health` (full stack).
- `src/gv.ts` (root, SEPARATE/legacy Unified CLI): `gv health` runs `npm run watchtower:health` (full stack) but swallows exit code (runSync with pipe, cmdHealth always returns success).
- `src/cli/stack.ts`: `stack health` -> `src/core/health-check.ts` (14 checks); `stack watchtower health` -> watchtower.
- `src/core/maintenance-watchtower.ts` (v2.0.0, 1600 lines): 17 component checks, parallelized via Promise.allSettled; outputs `[component] check: status` lines + summary, NOT a table; exits `process.exit(exitCode)` where exitCode counts only CRITICAL FAILs (not all fails).
- `src/core/health-check.ts`: 14 checks, `process.exit(exitCode)` counts any fail.
- Optimized variants exist: `src/core/maintenance-watchtower-optimized.ts` and `src/core/health-check-optimized.ts` (<5s target).

**Learned**: (1) There are TWO `gv` CLIs with DIFFERENT `health` semantics — npm `gv`(cli/gv.ts) does DB-only health; root src/gv.ts does full watchtower health. (2) Watchtower exit code counts only critical fails, not "1 if any FAIL". (3) No table output exists anywhere. (4) Full health engine already exists — do NOT build a new one. Recommended delta: consolidate `gv health` to full watchtower, add --table/--json output, normalize exit to 0/1, reuse existing optimized variants.

---
*Imported from Engram on 2026-09-06*
