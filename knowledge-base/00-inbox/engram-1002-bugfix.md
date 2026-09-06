---
created: 2026-05-22 02:05:14
tags: [engram, bugfix]
engram_id: 1002
type: bugfix
---

# Cost rate consistency verified across all 10 scripts

**What**: Final verification confirmed all scripts use $10/1M tokens: collector, dashboard-render, session-metrics-tracker, consolidate-metrics, generate-dashboard, token-efficiency-estimator, generate-session-artifacts, generate-pr-artifacts, token-telemetry-report, token-telemetry.

**Where**: All scripts referencing ratePer1M/costPer1M/CostPer1MTokens across the entire scripts/ tree.

**Learned**: When fixing a constant, always grep ALL occurrences with multiple patterns (costPer1M, ratePer1M, CostPer1MTokens). The original fix missed consolidate-metrics.ps1 because it used the name "costPer1M" but was in a different file than session-metrics-tracker.ps1.

---
*Imported from Engram on 2026-09-06*
