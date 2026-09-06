---
created: 2026-08-08 06:29:40
tags: [engram, bugfix]
engram_id: 2651
type: bugfix
---

# URGENT FIX: All subagents now use kimi-2-5 matching orchestrator

**What**: URGENT FIX - Changed ALL 20 subagent model configurations from `opencode/deepseek-v4-flash-free` to `kimi-2-5` to match orchestrator model

**Why**: Subagents were not inheriting the model configuration despite [INHERITED_MODEL_CONFIG] block in prompts. Root cause: agent .md files have hardcoded `model:` in YAML frontmatter that overrides prompt configuration.

**Files Changed:**
- .opencode/agents/sdd-explore.md (line 5)
- .opencode/agents/sdd-design.md (line 5)  
- .opencode/agents/sdd-apply.md (line 5)
- .opencode/agents/sdd-verify.md (line 5)
- .opencode/agents/bus-tele-agent.md
- .opencode/agents/doc-agent.md
- .opencode/agents/finance-agent.md
- .opencode/agents/gitflow-agent.md
- .opencode/agents/gov-agent.md
- .opencode/agents/hr-agent.md
- .opencode/agents/knowledge-agent.md
- .opencode/agents/legal-agent.md
- .opencode/agents/maintenance-agent.md
- .opencode/agents/mkt-agent.md
- .opencode/agents/ops-agent.md
- .opencode/agents/premortem-agent.md
- .opencode/agents/sales-agent.md
- .opencode/agents/self-diag-agent.md
- .opencode/agents/session-agent.md
- .opencode/agents/sia-agent.md

**Total**: 20 files changed, 1 unchanged (orchestrator was already correct with `inherit-from-session`)

**Verification**: All agents now use kimi-2-5 matching the orchestrator model

**Solution Applied**: Added `# CRITICAL: Model must match orchestrator (kimi-2-5)` comment and changed model line

**Learned**: Model Inheritance Protocol requires EITHER parsing [INHERITED_MODEL_CONFIG] from prompts OR hardcoding matching model in agent config. Current implementation uses hardcoded model approach.

---
*Imported from Engram on 2026-09-06*
