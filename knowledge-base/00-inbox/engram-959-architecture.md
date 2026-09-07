---
created: 2026-05-19 13:31:55
tags: [engram, architecture]
engram_id: 959
type: architecture
---

# Build and deploy pipeline for Gentle-Vanguard

**What**: Documented the end-to-end build and deploy pipeline for Gentle-Vanguard.exe
**Why**: Every time we needed to generate the .exe, we didn't know which script to use or where NSIS was installed
**Where**: build/README.md (updated), build/create-installer.ps1 (canonical builder), scripts/utilities/DEPLOYMENT/sync-to-public.ps1 (public sync)
**Learned**:
- NSIS v3.12 is installed at `C:\Program Files (x86)\NSIS\Bin\makensis.exe`
- The canonical build script is `build/create-installer.ps1` (NOT sfx-build.ps1 which is deprecated)
- Output goes to `dist/Gentle-Vanguard.exe` (~2.75 MB, NSIS installer, AES-256)
- Full flow: commit → PR → merge → build .exe → sync-to-public.ps1
- PS2EXE module is needed for the launcher compilation step (auto-installed if missing)
- sync-to-public.ps1 auto-commits and pushes to gentle-vanguard-public repo
- Banner encoding fix: PowerShell on Windows needs `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8` before Unicode output AND files must have UTF-8 BOM

---
*Imported from Engram on 2026-09-06*
