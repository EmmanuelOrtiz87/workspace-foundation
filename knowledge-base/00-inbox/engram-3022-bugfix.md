---
created: 2026-08-24 15:49:26
tags: [engram, bugfix]
engram_id: 3022
type: bugfix
---

# Cancelled stale dashboard polling requests

**What**: Pollers HTTP del dashboard ahora cancelan requests obsoletas y abortan al desmontar: useMetrics (métricas e historial), useSessions y useStackTables. Cada request usa AbortController, aborta la anterior y evita tratar AbortError como fallo real.
**Why**: Evitar respuestas antiguas sobrescribiendo datos nuevos, solicitudes solapadas y fugas al navegar entre pantallas.
**Where**: apps/web-dashboard/src/hooks/useMetrics.ts, useSessions.ts, useStackTables.ts
**Learned**: Dashboard tsconfig detectó un error de sintaxis que el typecheck raíz no cubre; ejecutar siempre `npm run build` en apps/web-dashboard. Las pruebas JSDOM siguen mostrando solo warnings Recharts de dimensiones 0. Validación final: typecheck/lint raíz PASS; dashboard i18n/build/lint/52 tests PASS; config 24/24; MCP PASS; plugin 1 válido; runtime dashboard ok, 0 HTTP errors, latencia ~6.16ms, Vite 200.

---
*Imported from Engram on 2026-09-06*
