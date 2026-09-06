---
created: 2026-05-24 00:18:43
tags: [engram, architecture]
engram_id: 1090
type: architecture
---

# Output token optimization + behavior prompts compression

**What**: Final round of token/context optimizations. Compressed behavior-prompts.json (186→55 lines, -70%) by removing decorative fields (vibe, emoji, communication_style) and condensing prompt instructions. Added output token guard to CLAUDE.md Response Profile (max 200 tokens non-code, tool output truncation, code blocks limited). Improved pre-compact-hook.ps1 compression ratio from 0.90→0.60 (40% reduction vs 10%). Updated CONTEXT-ENGINEERING.md v1.3.0 with new sections for output optimization, pre-compact hook, and behavior prompts.

**Why**: Decorative fields in behavior-prompts (vibe, emoji, communication_style) added ~40% overhead to subagent prompts without functional value. No output guard meant responses could be verbose. pre-compact-hook was only achieving 10% compression (ratio 0.90) - changed to 0.60 for 40%.

**Where**: config/behavior-prompts.json, CLAUDE.md, scripts/utilities/pre-compact-hook.ps1, rules/CONTEXT-ENGINEERING.md v1.3.0

**Learned**: behavior-prompts.json had significant waste from decorative metadata (~5-7 lines per entry × 7 entries). The pre-compact-hook default ratio of 0.90 was overly conservative - 0.60 provides meaningful compression while preserving critical state.

---
*Imported from Engram on 2026-09-06*
