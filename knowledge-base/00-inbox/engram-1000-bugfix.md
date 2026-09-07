---
created: 2026-05-22 01:57:53
tags: [engram, bugfix]
engram_id: 1000
type: bugfix
---

# consolidate-metrics.ps1 costPer1M $15→$10 final fix

**What**: Found and fixed remaining $15 cost rate in consolidate-metrics.ps1:44. Now ALL 10 scripts across the codebase consistently use $10/1M tokens.

**Why**: Last remaining inconsistency after fixing session-metrics-tracker.ps1.

**Where**: scripts/utilities/consolidate-metrics.ps1:44

**Learned**: When fixing a constant across the codebase, always do a full grep -r AFTER the fix to catch stragglers. The first pass missed this one because it was a different script name (consolidate-metrics vs session-metrics-tracker).

---
*Imported from Engram on 2026-09-06*
