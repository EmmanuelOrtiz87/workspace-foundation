---
created: 2026-08-29 22:37:06
tags: [engram, bugfix]
engram_id: 3364
type: bugfix
---

# witr secret-safe serialization

**What**: Added recursive witr output sanitization that omits sensitive fields (env, headers, args, queries, tokens, passwords, keys) and redacts secret assignments/auth/query tokens embedded in trace text; public process fields and causal links are sanitized too.
**Why**: `npm run process:trace` exposed raw process environment values including credential variables.
**Where**: src/web/witr-wrapper.ts, tests/unit/witr-wrapper.test.ts, docs/stack-manual-full.md, skills/process-debugging/SKILL.md
**Learned**: Sanitizing only `raw` is insufficient because CLI also serializes top-level command/warnings/causal links; those fields must be sanitized independently while retaining PID/name causal traceability.

---
*Imported from Engram on 2026-09-06*
