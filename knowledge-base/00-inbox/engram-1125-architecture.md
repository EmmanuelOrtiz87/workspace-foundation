---
created: 2026-05-25 08:40:38
tags: [engram, architecture]
engram_id: 1125
type: architecture
---

# SHA pinning GitHub Actions for supply-chain security

**What**: Pinned all GitHub Actions across 16 workflow files from semver tags (@v4, @v6) to commit SHAs. Created reusable `scripts/security/pin-actions.ps1` that supports pin/unpin modes with a hardcoded SHA mapping.

**Why**: Supply-chain security — semver tags are mutable (a tag can be force-pushed to point to malicious code), while commit SHAs are immutable. Dependabot keeps SHAs updated automatically (configured with weekly schedule, minor/patch grouping).

**Where**: All 16 .github/workflows/*.yml files, scripts/security/pin-actions.ps1

**Learned**: `actions/checkout@v4` resolves to SHA `34e114876b0b11c390a56381ad16ebd13914f8d5`. Use `Invoke-RestMethod "https://api.github.com/repos/actions/{name}/git/refs/tags/{tag}"` to resolve tags to SHAs programmatically. Some tags are annotated (returning tag object SHA), not lightweight — verified these resolve correctly.

---
*Imported from Engram on 2026-09-06*
