---
created: 2026-08-21 11:55:19
tags: [engram, pattern]
engram_id: 2944
type: pattern
---

# Repo test convention is node:test not vitest

**What**: All unit tests in tests/unit/ use node:test + node:assert/strict, run via `npx tsx --test <file>` or `npm run test:quick` (test-runner-optimized). Only vitest.eval.config.ts exists for eval tests.
**Why**: Running `npx vitest run tests/unit` reports ~81 false failures ("No test suite found") because vitest cannot collect node:test suites — wasted debugging time before realizing the convention.
**Where**: tests/unit/*.test.ts, package.json scripts (test:quick, container:test, test:config all use --test), src/test-runner-optimized.ts.
**Learned**: New test files must follow node:test style: `import { test } from 'node:test'; import assert from 'node:assert/strict';` with shebang `#!/usr/bin/env node`.

---
*Imported from Engram on 2026-09-06*
