---
created: 2026-08-06 12:52:21
tags: [engram, bugfix]
engram_id: 2590
type: bugfix
---

# Fix: Mutation testing file type errors

**What**: Fixed TypeScript errors in `src/engram-judgment-mutation-test.ts`:

1. Line 205: Changed `};` to `});` - syntax error in stderr listener
2. Lines 39-45: Simplified `timestamp_shift` mutation to accept only content parameter instead of (content, timestamp)
   - Original: `apply: (content: string, timestamp: string)`
   - Fixed: `apply: (content: string)` uses `Date.now()` instead of passed timestamp

**Why**: `tsc --noEmit` was failing with TS1005 and TS2554 errors

**Where**: `src/engram-judgment-mutation-test.ts`

**Learned**: TypeScript strict mode caught missing argument in mutation.apply call and syntax error in event listener

---
*Imported from Engram on 2026-09-06*
