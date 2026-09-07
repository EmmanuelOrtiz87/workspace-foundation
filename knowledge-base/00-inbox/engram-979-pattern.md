---
created: 2026-05-21 04:47:11
tags: [engram, pattern]
engram_id: 979
type: pattern
---

# Deprecation strategy: move to deprecated/ not delete

**What**: Gateway, RPC, plugins, and multi-platform-gateway skill were deprecated by moving their files to deprecated/ directory with move-to-deprecated.ps1 script. **Why**: Delete breaks git history and loses working code. Move to deprecated/ preserves everything for future reference without polluting active paths. **Where**: deprecated/ directory, move-to-deprecated.ps1 script **Learned**: The move-to-deprecated.ps1 script uses Move-Item + git rm (not git mv), which means the deprecated/ copies are untracked. Future versions should use git mv to preserve blame. Also: must clean up cross-references (configs, autostart, skills, NORMATIVAS) after deprecation — not doing so creates dangling references that break things.

---
*Imported from Engram on 2026-09-06*
