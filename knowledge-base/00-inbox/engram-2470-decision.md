---
created: 2026-08-02 06:30:56
tags: [engram, decision]
engram_id: 2470
type: decision
---

# Committed pending RDD + healer + enabled orchestrator web research

**What**: Committed all pending work on develop branch and expanded stack capabilities. Commits: (1) 639fdaab feat(model-healer) — 7 files: src/model-provider-healer.ts + config/model-health.json + ModelProviderUnsupported rule in correction-rules-engine.ts + lazy pipeline step + watchtower check. (2) 2019937c feat(rdd) — 32 files: the user's staged RDD system (risk-classifier, rdd-gates, rdd-4r-review, rdd-core, rdd-kill-switch, norms, tests, skill). (3) 57c9b785 feat(permissions) — opencode.json orchestrator websearch/webfetch deny→ask (20 subagents keep deny), LOCAL-FIRST-POLICY.md updated, fixed skill-nudge-check pipeline path.

**Why**: User asked to advance all pending work and be able to operate with all tools; if capacity is missing, create/absorb knowledge natively. Found 3 gaps: (1) RDD work from prev session was staged but uncommitted, (2) websearch/webfetch denied absolutely for all 21 agents contradicting LOCAL-FIRST policy which allows external search when user requests it, (3) skill-nudge-check pipeline referenced src/skill-nudge.ts but file is at src/skills/skill-nudge.ts.

**Where**: opencode.json, docs/guides/LOCAL-FIRST-POLICY.md, config/session-autostart.config.json, src/model-provider-healer.ts, src/rdd/*

**Learned**: (1) git commit -- <pathspec> allows committing only specific files while leaving the user's staged files intact. (2) Re-serializing config/session-autostart.config.json with node reintroduces unicode escape noise (128-line diffs) — use textual Edit tool instead. (3) .engram/manifest.json and assets/tokens.* are runtime artifacts, never commit them. (4) The pipeline has 101 steps (99 enabled), all scripts now resolve. (5) Watchtower: 84 PASS / 1 WARN (kimi-2-5 unhealthy from healer) / 0 FAIL.

---
*Imported from Engram on 2026-09-06*
