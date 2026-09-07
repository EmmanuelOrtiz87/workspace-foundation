---
created: 2026-08-24 09:38:53
tags: [engram, pattern]
engram_id: 3002
type: pattern
---

# Drag-select time-window zoom on trace waterfall

**What**: Zoom temporal por drag-select implementado en el waterfall de trazas enfocadas. Nuevo componente TimeRulerZoom: regla con ticks 25/50/75%, arrastre horizontal con Pointer Events + setPointerCapture, overlay de selección azul, commit mínimo de 5ms para evitar zooms accidentales. Al hacer zoom: los spans fuera de la ventana se ocultan (filtro por intersección temporal) y las barras se reescalan reutilizando treeStart/treeDuration de TraceWaterfall (mecanismo existente). Reset automático al cambiar de foco (useEffect sobre focusId).
**Why**: Último item diferido del plan de mejoras de tracing; el usuario pidió crear capacidades nativas sin depender de herramientas externas.
**Where**: apps/web-dashboard/src/components/TracingDashboard.tsx (TimeRulerZoom + integración), apps/web-dashboard/src/hooks/useLocale.ts (+3 keys ×3 idiomas)
**Learned**: TraceWaterfall ya aceptaba treeStart/treeDuration como override de escala — el zoom no requirió modificar el componente del árbol, solo filtrar allTraces y pasar la ventana como escala. Patrón reutilizable para cualquier timeline del dashboard. Validación: i18n gate 389 keys OK, build 3.59s, vitest 52/52 PASS.

---
*Imported from Engram on 2026-09-06*
