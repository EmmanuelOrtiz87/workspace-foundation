---
created: 2026-08-25 21:51:36
tags: [engram, decision]
engram_id: 3164
type: decision
---

# Lanzamiento: brand system oficial + campaña 6 flyers + P2/P5 cerrados

**What**: Preparación de lanzamiento oficial: (1) identidad extraída de assets del dueño (monograma GV, gradiente #A78BFA→#22D3EE, dark-first) → 14-BRAND-SYSTEM canónico (tokens json/css + logo SVG nativo + reglas); (2) campaña 15-LAUNCH-CAMPAIGN-2026-08: 6 flyers HTML+PNG en formatos nativos por red (16:9, 1:1, 9:16, banner LinkedIn 1584×396) con copies ES listas para publicar; (3) banners del repo alineados a tokens + fix crítico: sync-to-public.ts no copiaba docs/brand → banner del README público roto, corregido; main+develop+público sincronizados (hasta 35a5d5f1); (4) P2 cerrado: Academy-V2 M07-M12 completos (48/48 piezas); P5 cerrado: 7 READMEs MASTER.
**Why**: Lanzamiento oficial del producto por redes sociales; operación como empresa de servicios.
**Where**: GENTLE_VANGUARD_MASTER/{14-BRAND-SYSTEM,15-LAUNCH-CAMPAIGN-2026-08,13-ACADEMY-V2}, gentle-vanguard/{docs/brand/assets,src/sync-to-public.ts}
**Learned**: Export PNG: chrome-devtools MCP no escribe fuera de sus roots → Chrome headless CLI con rutas forward-slash. Commitlint del repo rechaza tipos no convencionales ("brand:" → usar "docs(brand):"). Manifest MASTER regenerado PASS. Pendientes: P3 (flyers V2 PNG), P4 parcial (brand card PDF).

---
*Imported from Engram on 2026-09-06*
