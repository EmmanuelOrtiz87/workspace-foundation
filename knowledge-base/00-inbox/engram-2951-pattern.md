---
created: 2026-08-21 18:36:25
tags: [engram, pattern]
engram_id: 2951
type: pattern
---

# Gotcha: globs sin quoting + shell:true explota solo en Linux CI

**What**: Recurring stack-wide gotcha confirmed: child_process spawn with shell:true + unquoted glob patterns behaves differently per OS
**Why**: bash (Linux CI) expands unquoted globs BEFORE the target binary parses argv; cmd.exe (Windows dev) does not. Result: commands that work locally fail only on CI with confusing errors (EACCES spawning random source files). This caused the Coverage Report failure (doc-agent.ts spawned as command with hundreds of src/*.ts as args).
**Where**: Pattern found in src/coverage-runner.ts (fixed); auditor src/check-shell-quoting.ts exists but does NOT yet detect glob patterns in shell:true commands.
**Learned**: TODO next session: extend check-shell-quoting.ts with a rule flagging '*'/'**' patterns in arguments of commands spawned with shell:true (would have caught this bug). Also applies to any future code passing include/exclude/test-glob patterns through shells.

---
*Imported from Engram on 2026-09-06*
