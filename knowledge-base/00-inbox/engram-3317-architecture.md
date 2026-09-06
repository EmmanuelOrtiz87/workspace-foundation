---
created: 2026-08-29 19:00:17
tags: [engram, architecture]
engram_id: 3317
type: architecture
---

# Migrated content export and witr installers to TS

**What**: Replaced active PowerShell content export and witr installer paths with native TypeScript implementations; CLI and wrapper now invoke TS directly with Node, and added focused tests.
**Why**: Fulfill P0 TS-only/CMD-first migration while preserving offline ZIP export, download, SHA-256 verification, extraction, timeout, executable staging, and cross-platform behavior.
**Where**: `src/content-operations/export-kit.ts`, `src/content-operations/cli.ts`, `src/web/witr-installer.ts`, `src/web/witr-wrapper.ts`, `src/core/maintenance-watchtower.ts`, focused unit tests, active docs/skill references; deleted active `scripts/content-operations/export-kit.ps1` and `scripts/utilities/maintenance/witr-installer.ps1`.
**Learned**: Node's standard library is sufficient here: a small ZIP writer/parser using `deflateRawSync`/`inflateRawSync` avoids shell or PowerShell dependencies; wrapper uses `runNpxTsxSync` to preserve hidden direct Node process behavior.

---
*Imported from Engram on 2026-09-06*
