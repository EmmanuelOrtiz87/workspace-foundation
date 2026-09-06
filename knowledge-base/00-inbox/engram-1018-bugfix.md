---
created: 2026-05-22 17:40:39
tags: [engram, bugfix]
engram_id: 1018
type: bugfix
---

# Session start automation fixed - token notifier integrated

**What**: Fixed session start automation to work correctly with token usage notifications.

**Changes made**:
1. Created `scripts/utilities/session-start-optimized.ps1` - script unificado que ejecuta:
   - Tool detection
   - Session autostart pipeline (25 pasos)
   - Token usage tracking initialization
   - Git status check
   - Session status display con formato [PEAK/OFF-PEAK] HH:MM | [SID] xxx | [WS] clean/dirty

2. Fixed `token-usage-notifier.ps1` path resolution:
   - Agregado GENTLE_VANGUARD_BASE_DIR env var check
   - Mejorado repo root detection con busqueda de .git/config/CLAUDE.md
   - Eliminado archivo duplicado en scripts/utilities/.session/

3. Created `scripts/utilities/token-usage-wrapper.ps1` - wrapper para integrar con respuestas

4. Updated `CLAUDE.md` Phase A step 1 para usar el nuevo script optimizado

**Validation**:
- Token notifier: Display Enabled=True, Show After Each=True, Show Accumulated=True
- Scripts created: session-start-optimized.ps1, token-usage-wrapper.ps1
- CLAUDE.md updated with new startup command
- Token file location correcto: .session/token-usage.json

**Usage**: pwsh -NoProfile -ExecutionPolicy Bypass -File scripts/utilities/session-start-optimized.ps1

---
*Imported from Engram on 2026-09-06*
