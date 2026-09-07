---
created: 2026-05-30 04:13:36
tags: [engram, architecture]
engram_id: 1219
type: architecture
---

# Health check cross-component

**What**: Created scripts/health-check/health-check.ps1 that verifies all 7 platform components: MCP Server (JS exists, TS compiles, tools/list responds), Team Mode, Session Reference System, Skill Factory (registry size), SDD Pipeline (dry-run), pnpm Security (lockfile, normativa, version), Lefthook Hooks (config exists). Single command validates entire platform. Exit code = number of failures.

**Why**: Provides a single command to verify the entire platform is functional. Prevent deployment of broken components.

**Where**: scripts/health-check/health-check.ps1

**Learned**: "2>&1" as a string argument is not a PowerShell redirect. Use unquoted 2>&1 or $null = & command 2>&1 to capture stderr properly. pnpm tsc --noEmit produces no output on success.

---
*Imported from Engram on 2026-09-06*
