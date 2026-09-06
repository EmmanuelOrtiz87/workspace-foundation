---
created: 2026-09-04 01:46:08
tags: [engram, decision]
engram_id: 3662
type: decision
---

# GV Analytics: gráficas recharts en el reporte (estimación + cambios de código)

**What**: Agregado panel `ReportCharts` con recharts v2 (^2.15.4, misma versión que apps/web-dashboard) al `ReportView`: (1) BarChart de estimación por fase (Discovery/Delivery/QA con colores cyan/violeta/verde + tooltip con horas) y (2) BarChart de cambios por archivo (agregadas verde vs eliminadas rojo, top 10 de `codeAnalysis.fileDetails`, con estado vacío cuando no hay análisis de código).

**Why**: Punto pendiente del plan `PLAN-MEJORA-ANALYTICS-v3.md` sección 5 (UI/UX: "Gráficas de recharts"). El usuario quiere visualización clara de métricas del reporte.

**Where**:
- `apps/gv-analytics/package.json` — dependencia `recharts: ^2.15.4` (instalada vía pnpm, resuelve a `apps/gv-analytics/node_modules/recharts`)
- `apps/gv-analytics/src/App.tsx` — imports recharts + componente `ReportCharts` insertado después del `metric-strip` en `ReportView`
- `apps/gv-analytics/src/i18n.tsx` — claves `charts.*` en en/es/pt (title, estimate, discovery, delivery, qa, files, additions, deletions, noFiles, hours)

**Learned**:
- Ningún reporte existente tiene `codeAnalysis.fileDetails` (verificado vía `/api/reports` en navegador: 3 reportes, todos con 0 files) → la tarjeta de archivos muestra correctamente el estado vacío `charts.noFiles`; el BarChart de archivos se activará al analizar URLs de Bitbucket PR que pueblen `fileDetails`.
- Verificado en navegador con playwright: ambas tarjetas renderizan, el SVG del BarChart de estimación muestra ejes y barras; bundle sube de ~219KB a ~590KB (warning de chunk >500KB, solo warning).
- Typecheck ✅ y build ✅ (vite, sin errores).

---
*Imported from Engram on 2026-09-06*
