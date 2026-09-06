---
created: 2026-08-16 05:12:30
tags: [engram, architecture]
engram_id: 2859
type: architecture
---

# Roadmap 4.2: gv release command with per-gate profiling

**What**: Implemented roadmap 4.2 "Add Profiling for Publish Workflow" as a new `release` command in `src/cli/gv.ts` (the stack has no `publish` command). `npx tsx src/cli/gv.ts release [--skip-tests] [--json]` runs 4 gates with timing: Homologation Gate (`src/check-sdd-gate.ts`), RDD Release Gate (`npx tsx src/rdd/rdd-gates.ts validate release`), Tests Gate (`npm run test:config`, skippable), Secrets Gate (`npm run scan:secrets -- --scan src --json`). Each reports `[PROFILE] <name>: X.XXs [PASS|FAIL|SKIP]`; summary shows total + duration-sorted table; exit 0 if all executed gates pass, 1 otherwise. Pure helpers exported for tests: `runGate`, `makeGateProfile`, `skipGate`, `aggregateStatus`, `computeExitCode`, `sortGatesByDuration`, `buildReleaseReport`, `selectReleaseGates`, `COMMANDS`. Added `release:profile` npm script and `tests/unit/gv-release-profile.test.ts` (8 tests). Added main() guard (`import.meta.url === pathToFileURL(process.argv[1]).href`) to gv.ts so it can be imported by tests without executing the CLI.

**Why**: Roadmap 4.2 asked to instrument the publish workflow; the real release workflow is the RDD Delivery Gates + SDD Homologation gate.

**Where**: src/cli/gv.ts (release profiling section ~line 420, dispatch case ~808, main guard ~826), package.json (release:profile), tests/unit/gv-release-profile.test.ts, docs/guides/STACK-OPTIMIZATION-ROADMAP.md (4.2 marked done).

**Learned**: (1) `GateSpec.cmd`/`args` must be optional (skip gates only have name) — typecheck caught this. (2) The secret scanner self-matches its own pattern definitions in src/secret-scanner.ts (5 matches: GCP + private-key patterns) → Secrets Gate legitimately FAILs when scanning src. (3) RDD release gate FAILs legitimately when no receipt exists in .session/receipts. (4) tsconfig does NOT include tests/ — test files are transpiled by tsx but not typechecked by tsc. (5) gv.ts previously had no main() guard; adding one follows the verified pattern from rdd-gates.ts/check-sdd-gate.ts.

---
*Imported from Engram on 2026-09-06*
