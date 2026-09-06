---
created: 2026-08-31 03:02:57
tags: [engram, bugfix]
engram_id: 3430
type: bugfix
---

# Profiles generator uses repository Prettier config

**What**: Updated `src/orchestration/profiles-build.ts` to resolve and apply the repository Prettier config when generating Markdown profiles.
**Why**: `npm run profiles:check` reported drift after CLI formatting because the generator used Prettier defaults instead of `.prettierrc`.
**Where**: `src/orchestration/profiles-build.ts`
**Learned**: Passing `filepath` to `prettier.format` does not load config automatically; call `prettier.resolveConfig(filepath)` and merge the result before formatting.

---
*Imported from Engram on 2026-09-06*
