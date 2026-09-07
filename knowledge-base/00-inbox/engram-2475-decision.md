---
created: 2026-08-03 03:30:10
tags: [engram, decision]
engram_id: 2475
type: decision
---

# Released v3.5.0 - PR #149 merged, CI fully green

**What**: Released v3.5.0 — merged PR #149 (release/v3.5.0 → main), tagged v3.5.0, GitHub Release auto-published as Latest, public repo synced.
**Why**: Leveling main with develop for v3.5.0; CI had to be fully green first.
**Where**: merge commit 603f602b (squash), tag v3.5.0, public main at 87c524c.
**Learned**: 8 commits fixed CI. 1) lowercase src/ subdirs (src/Core→src/core, src/MCP→src/mcp, src/Skills→src/skills, src/Security→src/security) — git index had uppercase, local disk+imports lowercase; TS2307 only on Linux CI. 2) planting→planning rename. 3) test paths lowercase. 4) community-skill-review: fetch-depth 0, anchored regex ^skills/.+?/SKILL\.md$, null-safe frontmatter. 5) gitleaks allowlist public/skills/ + skills/hunt-*, offensive-osint, academic-paper, vmware-vcenter (false positives: placeholder curl auth, secret_scan.py regex detection patterns, citation_key YAML). 6) secretlint node-version 20→22 (pnpm 11.15.1 needs Node>=22.13 for node:sqlite). 7) trivy upload-sarif continue-on-error (code scanning not enabled in repo). 8) generate-sbom.ts switched from cyclonedx-npm (npm-ls incompatible with pnpm) to pnpm sbom --sbom-format cyclonedx, capture stdout, shell:true on win32 for pnpm.CMD. Also: routing-critical-flows test needs OPENCODE_SERVER_USERNAME set (CI lacks it → confidence 85 not 100); engram-session-persistence needs mkdir .session/context-log in CI. github-script + toJSON() for error strings with single quotes.

---
*Imported from Engram on 2026-09-06*
