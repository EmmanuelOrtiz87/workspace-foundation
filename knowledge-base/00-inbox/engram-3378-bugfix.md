---
created: 2026-08-29 23:15:07
tags: [engram, bugfix]
engram_id: 3378
type: bugfix
---

# BOM still present after claimed fix

**What**: Re-verified the staged runtime/knowledge block after the user reported removing the BOM.
**Why**: Required to safely resume the blocked commit.
**Where**: scripts/utilities/CONFIG/session-autostart.config.json.
**Learned**: The UTF-8 BOM is still present in both working-tree parsing and the staged content; Node JSON.parse fails with `Unexpected token '﻿'`. `git diff --cached --check` itself passes, but pre-commit json-lint/opencode-validation will still fail. No additional changes, commits, gates, push, or PR were made.

---
*Imported from Engram on 2026-09-06*
