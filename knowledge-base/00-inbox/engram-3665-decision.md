---
created: 2026-09-04 02:00:59
tags: [engram, decision]
engram_id: 3665
type: decision
---

# OpsPanel verificado + mock data eliminado de IntelligenceComponents

**What**: Verificado OpsPanel en navegador (809 solicitudes, 59 análisis, cache 0%/1 entrada, tokens 0, p50 1ms/p95 841ms, budget ilimitado — todo datos reales migrados) y eliminado mock data muerto de `IntelligenceComponents.tsx` (RiskScoreCard, DependencyGraphMini, InsightsPanel, RecommendationsList, SummaryStats, IntelligenceDashboard + mockIntelligenceData + interfaces; solo se usaba CodeAnalysisPanel). Confirmado que el backend sí puebla `fileDetails` vía Bitbucket diffstat (atlassian.ts:432-547), así que la gráfica de archivos se activa sola al analizar URLs de PR.

**Why**: Cerrar el plan v3 (UI/UX + quitar mock data) y verificar visualmente el panel de operación.

**Where**: apps/gv-analytics/src/IntelligenceComponents.tsx (reescrito, solo CodeAnalysisPanel con datos reales), src/App.tsx ya lo consume.

**Learned**: Typecheck ✅ build ✅ tras la limpieza; INTEGRACION-INTELLIGENCE.md queda como doc histórico (referencia componentes eliminados). Los 3 reportes en Nexus son modo pedido sin PR → fileDetails vacío es correcto, no un bug.

---
*Imported from Engram on 2026-09-06*
