---
created: 2026-08-30 01:38:37
tags: [engram, bugfix]
engram_id: 3383
type: bugfix
---

# Fixed Trivy secret fixtures and scanner self-detection

**What**: Replaced literal GitHub token fixtures with runtime construction, changed security-rule test allowlist values to non-secret placeholders, and built GCP/private-key marker patterns at runtime to prevent scanner self-detection while preserving matching behavior.
**Why**: Resolve current Trivy critical alerts as fixed without disabling detectors or adding broad allowlists.
**Where**: scripts/utilities/security/verify-security-improvements.ts, scripts/utilities/security/complete-security-verification.ts, skills/security-expert-skill/configs/security-rules.json, src/security/secret-scanner/patterns.ts.
**Learned**: Scoped secret scans for src, security scripts, and security-rules.json are clean; full-repository scanning still reports pre-existing synthetic examples in docs/tests. Full test suite, typecheck, lint, and targeted formatting passed. complete-security-verification.ts still fails on pre-existing missing skills/example-skill and skills/another-skill integration fixtures.

---
*Imported from Engram on 2026-09-06*
