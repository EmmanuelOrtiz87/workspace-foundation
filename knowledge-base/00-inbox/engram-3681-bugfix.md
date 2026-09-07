---
created: 2026-09-05 06:19:19
tags: [engram, bugfix]
engram_id: 3681
type: bugfix
---

# Archify clean-flow exporter — router con geometría del motor absorbida

**What**: Resuelto el error del motor `[clean-flow/edge-through-node] ... crosses component` al exportar desde el Canvas libre. Implementado en CanvasEditor.tsx: `routeArchitectureConnections` genera 24 candidatas ortogonales por conexión (doglegs de una curva con anclas por lado, carriles exteriores al bbox global arriba/abajo/izq/der, y 8 combinaciones de esquina) y valida cada una contra la geometría EXACTA del motor antes de emitir `fromSide`/`toSide`/`via` en el IR.
**Why**: El usuario reportó el error de layout al renderizar un diagrama del canvas crossing (users→user-4 pasa por api). Fix nativo cliente: replicar la validación del motor.
**Where**: apps/archify/src/components/CanvasEditor.tsx (funciones routeArchitectureConnections, routeCandidateIsValid, routeSegmentIntersectsRect, routeSideContractHolds, routeAnchor); tests/clean-flow.test.ts (regresión + E2E contra el motor real en 4790)
**Learned**: GEOMETRÍA DEL MOTOR MAPEADA (renderers/architecture/render-architecture.mjs + renderers/shared/geometry.mjs): componentes miden 120×60 desde pos top-left (o size[]); `routeClearsComponents` rechaza cualquier segmento que intersecte un rect ajeno expandido 2px; `conn.via` se consume tal cual (puntos ABSOLUTOS); `routeHonorsEndpointSides` semántica: primer segmento SALE perpendicular de fromSide, segmento final ENTRA al target en dirección OPUESTA (ENDPOINT_SIDE_RULES: sourceSign vs targetSign); `cleanFlowProblems` siempre activo pero cleanCrossingProblems/cleanAmbiguous/label-clearance solo en quality_profile showcase; `layout.defaultW/H=120/60`; grid.mjs es placement fijo (no auto-layout). VALIDAR contra /api/validate y /api/render (server 4790).

---
*Imported from Engram on 2026-09-06*
