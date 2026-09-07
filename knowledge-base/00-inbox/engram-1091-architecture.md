---
created: 2026-05-24 00:22:13
tags: [engram, architecture]
engram_id: 1091
type: architecture
---

# Subagent delegation optimization + inter-agent protocol compression

**What**: Compressed inter-agent communication protocol and added subagent delegation optimization. INTER-AGENT-COMMUNICATION.md compressed from 167→54 lines (-68%) by removing verbose JSON schema examples (referenced to orchestrator.json instead), circuit breaker pattern duplication (references circuit-breaker.json), and condensing descriptions. Added CLAUDE.md Core Rule #9: "Subagent delegation: send minimal context in prompt — only task info, not full history" — this prevents the parent agent from duplicating the entire conversation history into the subagent's task prompt. Updated CONTEXT-ENGINEERING.md v1.3.0 with sections 7.9 (Inter-Agent Communication Optimization) and 7.10 (Subagent Task Context Budget).

**Why**: Each task tool invocation creates a subagent with a fresh context. The parent's prompt parameter can include massive amounts of duplicate information. INTER-AGENT-COMMUNICATION.md was loaded when delegating and had verbose JSON schemas that are already defined in config files.

**Where**: rules/INTER-AGENT-COMMUNICATION.md v1.1.0, CLAUDE.md (rule 9), rules/CONTEXT-ENGINEERING.md v1.3.0

**Learned**: The task tool prompt parameter is the main vector for context duplication in subagent delegation. Agents must be explicitly instructed to send minimal context. The handoff-compress.ps1 already had a good default (0.30 compression ratio = 70% reduction) so no change needed there. INTER-AGENT-COMMUNICATION.md was duplicating content from circuit-breaker.json and orchestrator.json.

---
*Imported from Engram on 2026-09-06*
