---
created: 2026-05-21 04:47:15
tags: [engram, architecture]
engram_id: 981
type: architecture
---

# Auto-contribution protocol created

**What**: Created rules/AUTO-CONTRIBUTION.md defining the protocol for agent self-modification. Specifies what changes are permitted without approval (new skills, bug fixes, docs, AGENTS.md) vs forbidden (CLAUDE.md, orchestrator.json, DEVELOPMENT-STANDARDS.md, .gitignore). Includes before/after workflows with validation steps and Engram save template. **Why**: The agent needs clear boundaries for autonomous self-improvement. Without a protocol, it either never self-modifies (missed improvement opportunities) or modifies too aggressively (instability). **Where**: rules/AUTO-CONTRIBUTION.md **Learned**: The protocol deliberately makes self-modification "permitted but guarded" — not automatic. Every self-mod must run validate-configs.ps1 and save to Engram. This creates a safety net while enabling autonomy.

---
*Imported from Engram on 2026-09-06*
