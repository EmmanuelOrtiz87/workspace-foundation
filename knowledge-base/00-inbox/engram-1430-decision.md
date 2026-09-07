---
created: 2026-06-17 22:35:01
tags: [engram, decision]
engram_id: 1430
type: decision
---

# Build pipeline rule: .exe generation requires user confirmation

**What**: Rule for auto-generating Gentle-Vanguard.exe installer
**Why**: NSIS build requires heavy toolchain and takes 1-2 min; most changes don't affect the binary
**Where**: build/create-installer.ps1, scripts/utilities/ops/DEPLOYMENT/release-automation.ps1
**Rule**: When changes warrant a new .exe (release tag v*, changes in build/ or protected/ or scripts packaged in installer), ask the user for confirmation before running create-installer.ps1. Never auto-build on every push. Show notification + prompt: "New .exe recommended due to [reason]. Build now? [y/N]"

---
*Imported from Engram on 2026-09-06*
