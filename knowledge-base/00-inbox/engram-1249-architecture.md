---
created: 2026-05-31 20:24:49
tags: [engram, architecture]
engram_id: 1249
type: architecture
---

# Agent Profiles: Vibe/Personality upgrade

**What**: Added vibe, personalityFile, and automatic_triggers to all 19 agent profiles in config/auto-delegation.json. Created 8 per-agent personality prompt files in config/agent-prompts/ (BA.md, DEV.md, QA.md, SAD.md, OPS.md, GOV.md, DOC.md, SESSION.md). Added default-fail-qa behavior prompt and agent_prompt_files routing section in config/behavior-prompts.json.

**Why**: agency-agents repo showed that personality prompts change agent behavior more reliably than parameter tweaks. Each agent now has a character, mission, critical rules, and automatic triggers.

**Where**: config/auto-delegation.json, config/behavior-prompts.json, config/agent-prompts/{BA,DEV,QA,SAD,OPS,GOV,DOC,SESSION}.md

**Learned**: agency-agents uses YAML frontmatter for agent definitions. GV uses JSON. The vibe line alone biases agent behavior correctly without requiring config changes.

---
*Imported from Engram on 2026-09-06*
