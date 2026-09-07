---
created: 2026-08-29 20:41:47
tags: [engram, architecture]
engram_id: 3320
type: architecture
---

# Migrated smoke tests to node:test

**What**: Migrated `tests/unit/scripts/scripts-smoke.Tests.ps1` and `tests/smoke/stack-smoke.Tests.ps1` to TypeScript `node:test` suites, removed active Pester test files, and added smoke commands and runner suites.
**Why**: Make P1 tests and CI TS-only without changing business logic.
**Where**: `tests/unit/scripts/scripts-smoke.test.ts`, `tests/smoke/stack-smoke.test.ts`, `package.json`, `src/review/test-runner.ts`, `tests/README.md`, `README.md`, `.github/workflows/reusable-test.yml`, `.github/workflows/reusable-lint.yml`, `.github/scripts/setup-branch-protection.ps1`.
**Learned**: The workflow lint command required an explicit workflow directory, so `lint:workflows` now supplies `.github/workflows`; phase integration and smoke jobs need pnpm/node setup before invoking TS tests. Full repository Prettier currently reports 125 pre-existing files, while all changed supported files pass targeted formatting.

---
*Imported from Engram on 2026-09-06*
