---
created: 2026-06-11 03:15:07
tags: [engram, architecture]
engram_id: 1389
type: architecture
---

# Separated manual norms from auto-norm-learner

**What**: Created rules/HAND-WRITTEN-NORMS.md for manually authored norms, separate from auto-norm-learner's LEARNED-NORMS.md

**Why**: auto-norm-learner.ps1 completely overwrites LEARNED-NORMS.md with table format using Set-Content, erasing any manual edits

**Where**: rules/HAND-WRITTEN-NORMS.md, rules/adaptive/LEARNED-NORMS.md, scripts/adaptive/auto-norm-learner.ps1

**Learned**: Auto-generated files should never have manual edits mixed in; always use a separate file for hand-written content

---
*Imported from Engram on 2026-09-06*
