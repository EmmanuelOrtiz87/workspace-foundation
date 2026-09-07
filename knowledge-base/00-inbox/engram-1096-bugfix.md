---
created: 2026-05-24 09:57:09
tags: [engram, bugfix]
engram_id: 1096
type: bugfix
---

# Security hardening: encryption-manager + privacy-sanitizer fixes

**What**: Three security hardening fixes completed:
1. Added `switch ($Action)` dispatch to `encryption-manager.ps1` so it actually executes the requested action
2. Fixed `Generate-EncryptionKey` .NET overload: changed `GetBytes($key)` → `GetBytes(32)` to avoid PowerShell resolving to wrong overload
3. Added `Test-Path` guard in `Generate-EncryptionKey` so `generate-key` is idempotent (doesn't overwrite existing keys)
4. Fixed `$BLOCKED_PATTERNS.envVars` quoting in `privacy-sanitizer.ps1`: changed double quotes to single quotes to prevent PowerShell variable expansion turning patterns into empty strings

**Why**: encryption-manager had no main execution path (functions defined but never called); GetBytes used wrong overload causing silent failures; generate-key always overwrote existing keys; privacy-sanitizer envVar patterns were being expanded by PowerShell at definition time causing global text corruption

**Where**: scripts/security/encryption-manager.ps1 (lines 50-60, 179-215), scripts/security/privacy-sanitizer.ps1 (lines 42-49)

**Learned**: All `$BLOCKED_PATTERNS` env var references must use single quotes. Use `GetBytes(int count)` overload that returns `byte[]` instead of instance method with pre-allocated array. Pester 3.4.0 (used here) doesn't support `-Output Detailed`, use `-Passthru` instead. 109 security tests now pass; 451/481 full suite (30 pre-existing unrelated failures in gateway/karpathy/plugin).

---
*Imported from Engram on 2026-09-06*
