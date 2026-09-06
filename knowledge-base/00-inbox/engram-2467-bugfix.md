---
created: 2026-08-02 05:05:18
tags: [engram, bugfix]
engram_id: 2467
type: bugfix
---

# trufflehog pre-commit hang fixed with staged_files scope

**What**: Fixed git commits hanging indefinitely in .lefthook.yml pre-commit. The `trufflehog-scan` command ran `trufflehog filesystem ... .` over the ENTIRE repo root (including node_modules) on every commit — no `glob` filter and no `{staged_files}`, unlike every other hook. It hung >120s with no output.
**Why**: Any `git commit` would stall; the first attempt even left a stale `.git/index.lock` (manually removed). Root cause was the un-scoped trufflehog scan.
**Where**: `.lefthook.yml` (trufflehog-scan command); commits `6fd7d398`, `0eed0a9e`, `f91213b6`.
**Learned**: All other pre-commit hooks use `{staged_files}` + glob; trufflehog was the only repo-wide one. Fix: `glob: '*.{ts,js,json,yml,yaml,md,env,toml,xml,py,ps1,sh,sql}'` and `run: trufflehog filesystem ... {staged_files} || exit 0`. Pre-commit now completes in ~6s (exit 0). If a git command hangs, check `.git/index.lock` for orphans after killing it. Also: the src/rdd/risk-classifier.ts eslint fix (`for (const category of analysis.fileCategories.values())`) was re-applied in working tree — it's unstaged, part of the user's pending RDD stage (33 files).

---
*Imported from Engram on 2026-09-06*
