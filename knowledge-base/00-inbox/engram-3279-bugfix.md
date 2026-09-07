---
created: 2026-08-29 17:17:56
tags: [engram, bugfix]
engram_id: 3279
type: bugfix
---

# CodeQL SHA fixed; image-size release unavailable

**What**: Replaced the invalid CodeQL upload-sarif v4 SHA with fddeee1a7ece751b577e409a89057319e3172939, verified as the 40-character SHA for refs/tags/v4.
**Why**: User requested only the two remaining verifiable blockers, without inventing dependency versions.
**Where**: .github/workflows/reusable-security-scan.yml
**Learned**: npm registry metadata reports image-size latest as 2.0.2 and no 2.0.3; GitHub has no v2.0.3 tag, and the referenced security PR commit still declares package version 2.0.2. Therefore no safe pnpm override satisfying >=2.0.3 was applied; pnpm audit remains blocked by two high image-size findings via pptxgenjs. Typecheck, config tests, lint, and targeted Prettier passed.

---
*Imported from Engram on 2026-09-06*
