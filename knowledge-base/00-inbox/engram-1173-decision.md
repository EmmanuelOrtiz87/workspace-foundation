---
created: 2026-05-26 20:50:02
tags: [engram, decision]
engram_id: 1173
type: decision
---

# Dashboard homologado con 7 secciones y export

**What**: Dashboard completamente homologado - 7 secciones (Executive, Operations, Development, Cost, Governance, Health, Live) + botones Export PDF/PNG + funciones JavaScript completas

**Why**: El dashboard regenerado perdía las características agregadas manualmente. Era necesario modificar el generador (dashboard-render.ps1) para que las incluya permanentemente.

**Where**:
- scripts/metrics/dashboard-render.ps1 - Plantilla actualizada con Live section, Export bar, y funciones JS
- reports/dashboard.html - Regenerado con 7 secciones y 25.5 KB

**Changes**:
1. Agregado botón "Live" en navegación
2. Agregada barra Export con botones PDF/PNG
3. Agregada sección Live con 6 cards (Tokens, Traffic Light, Routing, Sessions, Peak Hour, Event Log)
4. Fix bug JSON.stringify en chart de autores
5. Agregadas funciones gvExportPdf(), gvExportPng(), updateLiveSection()
6. Footer actualizado a "7 sections"

**Verification**:
- 7 secciones: ✅
- Export buttons: ✅
- Live section: ✅
- Charts funcionales: ✅
- Datos homologados con JSON: ✅

---
*Imported from Engram on 2026-09-06*
