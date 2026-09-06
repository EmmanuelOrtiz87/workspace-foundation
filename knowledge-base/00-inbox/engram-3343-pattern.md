---
created: 2026-08-29 21:27:35
tags: [engram, pattern]
engram_id: 3343
type: pattern
---

# Security manual remediation runbook

**What**: Added a Spanish owner-facing runbook for manual security remediation with UI/CLI steps for GitHub PAT and Telegram token rotation, historical secret triage, GitHub security controls, safe publication, alert validation, and guarded archive cleanup.
**Why**: User requested a practical, CMD-first procedure without real secrets, destructive commands without explicit confirmation, or functional code changes.
**Where**: `docs/security/MANUAL-REMEDIATION-RUNBOOK.md`; linked from `docs/security/README.md` and the security row in `docs/README.md`.
**Learned**: GitHub PAT and Telegram token revocation/rotation are provider UI operations; CLI is used for identity/local logout, redacted scans, and read-only alert checks. `.archive/` and `protected/*.ps1.enc` remain non-executable historical artifacts; deletion requires retention/caller review and interactive confirmation.

---
*Imported from Engram on 2026-09-06*
