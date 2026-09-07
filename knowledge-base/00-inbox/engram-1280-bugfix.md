---
created: 2026-06-02 04:10:27
tags: [engram, bugfix]
engram_id: 1280
type: bugfix
---

# Fixed 5 PSParser syntax errors in digest-generator.ps1

**What**: Fixed 5 PowerShell PSParser token errors in digest-generator.ps1 that caused the Pester syntax test to fail (11/12 PASS). Root cause: lines 170-172 used `\"` (backslash-quote) inside double-quoted strings, but PowerShell uses backtick, not backslash, as the escape character. `\"` terminates the string prematurely at the `"`, leaving the parser in a broken state that cascaded to lines 175 and 180.

**Why**: The Pester test `digest-generator.ps1 has valid PowerShell syntax` was failing — PSParser flagged 5 errors: unterminated string, unexpected tokens, missing expression after `-` operator.

**Where**: scripts/utilities/DIGEST/digest-generator.ps1:170-172

**Learned**: In PowerShell, the escape character is backtick (`` ` ``), not backslash (`\`). Inside double-quoted strings, `\"` is backslash + string terminator. To avoid this entirely with strings containing backticks or quotes, use single-quoted strings (`'...'`) which treat everything literally. This is now the only Pester test suite for FEEDBACK/DIGEST scripts — 12/12 PASS.

---
*Imported from Engram on 2026-09-06*
