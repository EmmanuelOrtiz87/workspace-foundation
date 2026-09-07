---
created: 2026-08-29 21:15:40
tags: [engram, pattern]
engram_id: 3332
type: pattern
---

# Documented script lifecycle governance

**What**: Added formal TS-only/CMD-first script lifecycle governance covering inventory, ownership, supported commands, migration reproducibility, archival/protection, deletion/recreation, tests, deprecation, and duplicate prevention.
**Why**: User requested normative documentation without changing functional code or inventing repository state.
**Where**: rules/NORMATIVA-SCRIPT-LIFECYCLE.md; docs/guides/SCRIPT-LIFECYCLE.md; docs/operations/PS1-LEGACY-POLICY.md; README.md; docs/guides/README.md; rules/README.md; apps/academy-web/data/content-workflows.js.
**Learned**: On 2026-08-29 the worktree already contained broad uncommitted migration changes. The documented inventory is explicitly a Git/worktree snapshot; it avoids claiming global PS1 counts or completed migration. Academy content was added as a workflow lesson and its JS syntax passed node --check.

---
*Imported from Engram on 2026-09-06*
