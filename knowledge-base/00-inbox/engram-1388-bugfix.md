---
created: 2026-06-11 03:15:05
tags: [engram, bugfix]
engram_id: 1388
type: bugfix
---

# Runtime files untracked from git

**What**: Runtime files .event-bus/history.json and sessions-history.json were tracked by git — fixed by adding .event-bus/ to .gitignore and git rm --cached

**Why**: These are runtime state files that change every session, should never be versioned

**Where**: .gitignore, .event-bus/

**Learned**: Always check git ls-files after adding ignore patterns; .gitignore only prevents NEW files from being tracked, already-tracked files need git rm --cached

---
*Imported from Engram on 2026-09-06*
