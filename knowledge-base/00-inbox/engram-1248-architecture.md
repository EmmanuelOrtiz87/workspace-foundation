---
created: 2026-05-31 20:24:47
tags: [engram, architecture]
engram_id: 1248
type: architecture
---

# Stack Enhancement: ECC-inspired improvements

**What**: Implemented ECC-inspired stack enhancements: Instinct scoring engine (scripts/instinct/scoring-instinct.ps1), GateGuard MCP pre-exec validation (scripts/gateguard/gateguard-mcp.ps1), cost-aware LLM routing with thresholds + retry strategy (config/model-routing.json v1.1.0), context budget audit script (scripts/optimization/context-budget-audit.ps1), research-ops evidence protocol prompt (config/behavior-prompts.json). Extended health check to 10 components (scripts/health-check/health-check.ps1).

**Why**: User requested taking the stack to another level by learning from top open-source repos (ecc, understand-anything, agency-agents, karpathy-skills).

**Where**: scripts/instinct/scoring-instinct.ps1, scripts/gateguard/gateguard-mcp.ps1, scripts/optimization/context-budget-audit.ps1, config/model-routing.json, config/behavior-prompts.json, scripts/health-check/health-check.ps1

**Learned**: The ?? null-coalescing operator requires PowerShell 7+. Scripts with mandatory params should be tested with actual params, not dry-run. PSParser.Tokenize is the correct way to check PowerShell syntax.

---
*Imported from Engram on 2026-09-06*
