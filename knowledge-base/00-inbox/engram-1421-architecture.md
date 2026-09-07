---
created: 2026-06-16 19:29:19
tags: [engram, architecture]
engram_id: 1421
type: architecture
---

# Final stack cleanup - branch protection + full validation

**What**: Fixed setup-branch-protection.ps1 gh API piping issue (--input - $body → $body | gh api --input -), confirmed rulesets require GitHub Pro for private repos. Verified full validate-stack: ALL PASS. Working tree clean with 6 commits.

**Why**: Complete all pending items to 100%: zero errors, zero warnings, fully verified.

**Where**: .github/scripts/setup-branch-protection.ps1 — $body piping fix

**Learned**: Repository rulesets API (POST /repos/{owner}/{repo}/rulesets) requires GitHub Pro for private repos. The gh CLI --input - flag reads from stdin via pipeline, not as splatted argument. Commits: f726d4df (branch protection), 04e7e068 (correction-capture+token-metrics+engram), a21ab447 (syntax fix), b5d71c09 (Fase 4 fixes), f892ace1 (consolidation), 888626d8 (CLAUDE.md restore).

---
*Imported from Engram on 2026-09-06*
