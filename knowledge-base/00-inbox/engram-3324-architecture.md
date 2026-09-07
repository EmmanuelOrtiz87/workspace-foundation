---
created: 2026-08-29 20:51:55
tags: [engram, architecture]
engram_id: 3324
type: architecture
---

# Final TS-only presentations migration

**What**: Migrated active presentation maintenance helpers to the unified TypeScript CLI and removed active PowerShell launchers.
**Why**: Enforce TS-only/CMD-first runtime and keep historical artifacts non-executable.
**Where**: src/cli/presentations-maintenance.ts, src/tools/setup-branch-protection.ts, package.json, .opencode/skills/presentations-maintenance/scripts, .cursor, .devcontainer, tests/unit/scripts/scripts-smoke.test.ts, docs/operations/PS1-LEGACY-POLICY.md.
**Learned**: The repository's global Prettier check currently reports many pre-existing unrelated files; all files changed for this migration pass targeted Prettier checks. .archive and protected *.ps1.enc remain untouched.

---
*Imported from Engram on 2026-09-06*
