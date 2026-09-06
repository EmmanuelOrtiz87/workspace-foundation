---
created: 2026-05-23 21:26:04
tags: [engram, architecture]
engram_id: 1089
type: architecture
---

# Context optimization: system prompt compression + caching + compaction

**What**: Optimized token/context consumption across the codebase. Compressed CLAUDE.md (220→59 lines, -73%) and AGENTS.md (311→68 lines, -78%) by removing duplication and moving content to focused files. Added explicit compaction params (sliding-window 10 turns, threshold 8000, pruneToolResults) to opencode.json. Disabled per-turn token notification (changed to every 5 turns). Added SHA256-based caching to pre-process-input.ps1 to avoid re-scanning 132 SKILL.md files + 1.8K-line auto-delegation.json on every invocation. Created docs/QUICK-COMMANDS.md for command reference. Updated context-efficiency.json with "optimized" profile and inputGuard. Updated CONTEXT-ENGINEERING.md v1.1.0 with new sections: compaction policy, pre-process caching, sliding window, token notification reduction.

**Why**: User reported excessive token consumption and cumulative conversation growth without any truncation mechanism. Analysis showed: no compaction params, system prompts 2x+ over limits, 132 skills scanned on every invocation, token notification after every response adding overhead, conversation history being append-only.

**Where**: CLAUDE.md, docs/AGENTS.md, docs/QUICK-COMMANDS.md (new), opencode.json, config/context-efficiency.json, rules/CONTEXT-ENGINEERING.md, rules/NORMATIVAS-SESSION.md, scripts/utilities/pre-process-input.ps1, .session/token-display-config.json

**Learned**: The compaction config was defined but without parameters (no thresholds, no strategy, no maxTurns) making it ineffective. The pre-process-input.ps1 was doing full file-system scans on every invocation - a simple hash-based cache eliminates this. Token notification config was already present but underutilized (just needed showAfterEachResponse: false + turnInterval).

---
*Imported from Engram on 2026-09-06*
