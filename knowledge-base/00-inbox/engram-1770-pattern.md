---
created: 2026-07-19 02:02:18
tags: [engram, pattern]
engram_id: 1770
type: pattern
---

# Split oversized shipping-and-launch skill into lean SKILL.md + 5 reference files

**What**: Split `.opencode/skills/shipping-and-launch/SKILL.md` from 322 lines/2651 tokens to 111 lines/997 tokens by extracting detailed checklists, code examples, and templates into 5 reference files under `references/`.

**Why**: The SKILL.md exceeded the 150-line/1000-token budget for skill files. Reference extraction preserves all content while keeping the main skill lean.

**Where**: `.opencode/skills/shipping-and-launch/SKILL.md` → 5 files in `.opencode/skills/shipping-and-launch/references/`

**Files created**:
- `references/pre-launch-checklist.md` — 6 checklist sections (code quality, security, performance, accessibility, infrastructure, docs)
- `references/feature-flag-strategy.md` — code example, lifecycle, 4 rules
- `references/staged-rollout.md` — rollout sequence, decision thresholds table, rollback conditions
- `references/monitoring-and-observability.md` — metric tree, client/server error reporting code, post-launch verification
- `references/rollback-plan-template.md` — full markdown template with trigger conditions, steps, DB considerations, time estimates

---
*Imported from Engram on 2026-09-06*
