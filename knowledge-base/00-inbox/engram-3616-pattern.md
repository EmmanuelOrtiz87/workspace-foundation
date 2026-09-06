---
created: 2026-09-02 12:22:05
tags: [engram, pattern]
engram_id: 3616
type: pattern
---

# Dashboard v2 Premium migration (etapa 2)

**What**: Migración v2 Premium + logo oficial del web-dashboard (etapa 2 del plan docs/design/06-migration-plan-v2-premium.md). Una ejecución previa ya había migrado logos (--dash-* v2 en index.css, tailwind gv-*, componentes CostPanel/AgentChat/etc); completé lo faltante.
**Why**: Decisión de marca 2026-09-01 — v2 Premium + monograma v1 con gradiente #a78bfa→#22d3ee.
**Where**: apps/web-dashboard/src/styles/gv-tokens-v2.css (NUEVO, override local v2 oficial de --gv-*), src/styles/index.css (import swap), package.json (prebuild eliminado), src/components/SessionActivityHeatmap.tsx (rampa sky→cyan).
**Learned**: (1) generated-tokens.css se regeneraba por prebuild desde config/design-tokens.json v1 del stack root — eliminado import+archivo+script para que el #00BFFF no vuelva en cada build. (2) El import del paquete gv-design-system traía superficies pre-v2 (#121212/#1f2937/#9ca3af) y un color-scheme:dark unlayered que leak-eaba a light — reemplazado por override local sin tocar el paquete (etapa 3 lo maneja). (3) chrome --headless=new --screenshot captura en el evento load → SPA con lazy routes queda en spinner; usar --virtual-time-budget=12000 (pero GPU process crashea con recharts rAF en la vista home) → para home usaré playwright chromium con networkidle+waitForTimeout, que funciona. (4) WS en 8080 ya corría; start.sh es idempotente y respeta Vite ya arrancado.

---
*Imported from Engram on 2026-09-06*
