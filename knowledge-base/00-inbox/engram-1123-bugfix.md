---
created: 2026-05-25 08:40:30
tags: [engram, bugfix]
engram_id: 1123
type: bugfix
---

# E2E test resurrection — single-line to 23 tests

**What**: Rewrote `tests/e2e/release-workflow.e2e.tests.ps1` from a single 2000-char line into proper multi-line format with 23 Pester tests. The original formatting error caused Pester 3.x to detect 0 tests.

**Why**: The file had all content on one line (missing newlines), making Pester unable to find Describe/It blocks.

**Where**: tests/e2e/release-workflow.e2e.tests.ps1

**Learned**: When a Pester test file produces "Tests completed in 0ms" with 0 tests, check if the file has proper line breaks. Use `Measure-Object -Line` to verify. Also, tests that were never executed may contain dead code with wrong assumptions about the system under test — 4 test assertions used `gentle_vanguard` (underscore) but the gate script uses `gentle-vanguard` (hyphen).

---
*Imported from Engram on 2026-09-06*
