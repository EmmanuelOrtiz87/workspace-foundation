---
created: 2026-08-26 22:28:23
tags: [engram, pattern]
engram_id: 3178
type: pattern
---

# Retema PPTX a paleta brand violeta/cyan

**What**: Retema de 15 PPTX de Gentle-Vanguard a paleta brand (A78BFA/22D3EE sobre 0A0E17/121212/1F2937). M01-M12 ya estaban convertidos (0 hits de paleta dorado/navy; no se reescribieron). Los 3 de 12-education-materials usaban dorado C6973A + cian 00BFFF + navy 142131/0D1117 + blanco + muted A7B3C2; se remapearon a nivel zip (regex solo en atributos srgbClr val, case-insensitive, con/sin #) con equivalencias de rol: 00BFFF→22D3EE, 142131/0D1117→0A0E17, A7B3C2→9CA3AF, FFFFFF→E5E7EB, 0E2841/15394B/1B2D3E/1C3A4B→1F2937, C6973A→A78BFA. Total 482 reemplazos (174+150+158).
**Why**: Re-tematizado al brand system oficial (gradiente violeta→cyan).
**Where**: C:\Workspace_local\GENTLE_VANGUARD_MASTER\07-academy-lessons\slides\, ...\12-education-materials\slides\; backup en 99-archive\pptx-pre-brand-2026-08-26 (15 archivos).
**Learned**: El remap zip-level de srgbClr es más robusto que python-pptx para colores (cubre theme1.xml, layouts, masters y notes sin re-serializar). Verificación: reabrir con python-pptx + grep residual de paleta vieja + diff de texto contra backup (text-identical=True en los 15).

---
*Imported from Engram on 2026-09-06*
