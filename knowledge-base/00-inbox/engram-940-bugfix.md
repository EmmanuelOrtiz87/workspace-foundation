---
created: 2026-05-18 12:29:56
tags: [engram, bugfix]
engram_id: 940
type: bugfix
---

# Deuda técnica cerrada — NSIS fix, DRY refactor, installer rebuild

**What**: Cerró deuda técnica completa: NSIS detection fix (Bin/ subdir), DRY refactor de 5 adaptive profiles en módulo compartido (adaptive-common.ps1), antigravity en session-autostart, NSIS PATH persistente en autostart, installer rebuild v2.18.0, sync público final.

**Why**: NSIS estaba instalado en C:\Program Files (x86)\NSIS\Bin\makensis.exe pero el script solo buscaba en NSIS\makensis.exe. Refactor DRY eliminó 606 líneas duplicadas.

**Where**: build/create-installer.ps1, scripts/utilities/adaptive-common.ps1 (new), 5 adaptive profiles refactorizados, scripts/utilities/session-autostart.cmd, dist/Gentle-Vanguard.exe

**Learned**: NSIS instala makensis.exe en Bin/ subdir. El instalador de NSIS no agrega Bin/ al PATH automáticamente. Solución: agregar búsqueda en Bin/ en create-installer.ps1 + agregar NSIS al PATH en session-autostart.cmd Phase 0.25.

---
*Imported from Engram on 2026-09-06*
