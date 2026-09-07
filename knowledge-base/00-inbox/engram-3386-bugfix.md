---
created: 2026-08-30 01:41:08
tags: [engram, bugfix]
engram_id: 3386
type: bugfix
---

# Fixed integration validator CLI guard

**What**: Replaced the unconditional integration-validator CLI execution with the standard pathToFileURL(process.argv[1]) guard, removed nonexistent hardcoded example skill fixtures, and made CLI skill paths explicit arguments. Updated complete-security-verification.ts to use the same guard and added an import regression test.
**Why**: Importing integration-validator from complete-security-verification executed validation against missing fixtures and produced errors.
**Where**: src/security/integration-validator.ts, scripts/utilities/security/complete-security-verification.ts, tests/unit/integration-validator-import.test.ts
**Learned**: Import-only subprocess verification is clean; focused secret scan is clean. Full repository format and secret scans still report pre-existing unrelated findings.

---
*Imported from Engram on 2026-09-06*
