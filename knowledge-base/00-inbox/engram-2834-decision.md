---
created: 2026-08-15 01:19:22
tags: [engram, decision]
engram_id: 2834
type: decision
---

# Lossless compression for agent delegation (Frentes 3 y 4)

**What**: Added lossless structural compression (mode:'input') to agent delegation paths. New shared helper `compressDelegationLossless()` exported from src/agent-delegator.ts, used in both `runNativeAgent()` (defense in depth, compresses spawned task/context but keeps original request for logs) and `src/route-and-delegate.ts` main() (adds `compression: {taskSaved, contextSaved, taskRatio, contextRatio}` to RouteResult).
**Why**: Delegation passed task/context raw, wasting tokens on JSON-heavy contexts. Compression must be lossless-only (protects model reasoning) per structural-compression safety model.
**Where**: src/agent-delegator.ts (import structural-compression.js, helper + interface DelegationCompression at ~line 44, applied in runNativeAgent ~line 451), src/route-and-delegate.ts (import line 27, compression field in RouteResult line ~57, use in main ~line 108).
**Learned**: Threshold 200 chars, fallback on failure/ratio>=1 (strict improvement: compressedChars < originalChars). compressPrompt is NOT lossless for prose (section extractive trimming), so chose compressStructural directly. Cache CLI `test` has a false-positive: semantic TF-IDF lookup matches "non-existent-input" to test-input-1 at 87% sim (tiny vocab skews cosine) — Tests 3/4 fail, not a real bug. flushCaches in session-cleanup-start.ts (lines 114-137) does NOT touch .session/response-cache/ — verified OK. FF-016 RTK: cacheRead/input ratio today = 5,111,936 / 608,748 ≈ 8.4x (cache serves ~89% of input) — RTK not justified, keep deferred. Typecheck + lint 0 errors.

---
*Imported from Engram on 2026-09-06*
