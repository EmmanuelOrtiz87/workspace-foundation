---
created: 2026-08-25 13:42:06
tags: [engram, architecture]
engram_id: 3142
type: architecture
---

# Pending delegation learning loop diagnosis

**What**: Analyzed the pending loop from route-and-delegate through adaptive routing and session autostart without modifying files.
**Why**: Define the minimum design proving a delegation updates routing statistics and changes the next recommendation.
**Where**: src/learning-engine.ts, src/route-and-delegate.ts, src/recommend-agent.ts, src/adaptive-router.ts, apps/web-dashboard/server/database/repositories/SkillRepo.ts, manager.ts, MigrationRunner.ts, config/session-autostart.config.json, related tests.
**Learned**: learning-engine.ts is unrelated error-pattern learning and has no routing feedback API. route-and-delegate currently writes only .session/routing/hits.jsonl; it does not call Nexus recordRoutingHit. SkillRepo has tenant-scoped hit_count only, no success outcome/rate. adaptive-router builds JSON from session/skill files but collectDelegations reads metrics.agents while session-scoring writes metrics.delegations, so the main delegation evidence is missed. recommend-agent reads JSON only, despite adaptive-router dual-writing routing_rules to Nexus. Minimum loop should make Nexus authoritative, add outcome counters/rate, record outcome after delegation, and read Nexus before JSON with JSON fallback; rebuild is not required for the immediate next recommendation. Existing overrides remain a test caveat because they outrank learned entries.

---
*Imported from Engram on 2026-09-06*
