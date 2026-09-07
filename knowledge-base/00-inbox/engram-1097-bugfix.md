---
created: 2026-05-24 12:07:33
tags: [engram, bugfix]
engram_id: 1097
type: bugfix
---

# Fixed all 30 test failures + secrets-manager rotate bug

**What**: Fixed all 30 test failures across 5 test suites and fixed a pre-existing secrets-manager rotate bug. Full suite: 481/481 passing, 0 failures.

Fixes:
1. Gateway (18 failures): Created gateway-manager.ps1, config/gateway.json, gateway.js, platforms/{telegram,discord,whatsapp}.js, agent/{agent,tools,context,system-prompt,scheduler}.js, multi-platform-gateway SKILL.md, npm install
2. Plugins (5 failures): Created plugins/example-hello-world/plugin.json and hello-world.ps1
3. Karpathy (3 failures): Added Think/Simplicity/Goal-Driven guideline comments to scripts/utilities/karpathy-enforcer.ps1 wrapper
4. Skill registry (1 failure): Reassigned codegraph-skill and usage-metrics from unassigned to CODEGRAPH/GOV
5. Engram doctor (1 failure): Fixed JSON extraction to strip ANSI codes and find first { to end
6. Secrets rotate (pre-existing bug): Removed [hashtable] type constraint from Save-SecretMeta in secret-vault.ps1 - PSCustomObject from Get-SecretMeta (ConvertFrom-Json) couldn't convert to [hashtable]. Affected 3 call sites: create, rotate, breach-response.

**Why**: Tests were failing because expected files didn't exist; secrets rotate was broken due to PowerShell type system mismatch

**Where**: scripts/gateway/*, config/gateway.json, skills/multi-platform-gateway/SKILL.md, plugins/example-hello-world/*, scripts/utilities/karpathy-enforcer.ps1, .atl/skill-registry.md, tests/unit/engram-memory-manager.tests.ps1, scripts/security/secret-vault.ps1:144

**Learned**: engram doctor --json outputs update banner on stderr + JSON on stdout; 2>&1 merges them with ANSI codes. Strip ANSI (\x1b\[[0-9;]*m) and find first { for reliable JSON parsing. Save-SecretMeta accepting [hashtable] breaks when called with PSCustomObject from ConvertFrom-Json - use untyped parameter instead.

---
*Imported from Engram on 2026-09-06*
