---
created: 2026-08-07 18:01:13
tags: [engram, pattern]
engram_id: 2624
type: pattern
---

# Modernized health.html and operations-cloud.html to shared GV design system

**What**: Reconstructed 2 presentations (docs/presentations/health.html y operations-cloud.html) con el nuevo design system compartido de Gentle-Vanguard (gv.css + gv.js), usando index.html como patrón vivo.
**Why**: Tarea de modernización: las páginas tenían CSS inline duplicado (los ~300 líneas de :root/nav-blur/section-card/etc.) y datos desactualizados (v8.0.1, 82/82, 19 tests, 263 TS, 1410 nodes, 12 tables).
**Where**: docs/presentations/health.html, docs/presentations/operations-cloud.html (ambos reescritos completos con write).
**Learned**:
- Patrón estándar: <link gv.css> DESPUÉS de los CDN bootstrap; <style> MÍNIMO solo con clases propias no incluidas en gv.css (health: .metric-ring/.table-health; ops: .badge-ops/.badge-sec/.table-ops/.cb-closed/.cb-half/.cb-open/.prog-p). gv.css YA incluye section-card, hero, glow, nav-blur, fade-in, stat-n, badge-gv/badge-p/a/ok/wn/er, feature-table, btn-gv, scroll-progress, aurora, svg-diagram, border-soft, radius-lg, shadow-glow, hero-badge.
- <body class="grain"> + <div class="scroll-progress"> + <div class="aurora"> justo tras abrir body.
- gv.js (assets/js/gv.js) reemplaza el IntersectionObserver inline (fade-in reveal, scroll-progress, navbar.scrolled). Añadir tras bootstrap.bundle.min.js.
- Navbar unificado: brand "GV" con <i class="bi bi-robot">, ul con ms-auto, links Home/Arch/Autonomy/Dashboard/Quickstart/Memory/Security/Agents/Cloud/Patterns/Health/Diagrams + dropdown i18n.
- Datos v3.5.0: 112/112 PASS en 18 componentes (dashboard-ws, codegraph, timeout-daemon, ml-embeddings, engram, mcp, session, hooks, configs, tool-configs, security, cloud-connectors, tracing, state-persistence, gentle-vanguard-db, model-provider, audit-pipeline, governance), 328 TS Files, 97 Test Files, 170 Skills, 65 Normatives, Nexus 11 repos/7 migrations/21 tables, CodeGraph 10,663 nodes/21,746 edges/677 files/28MB, Engram 2078 obs, Pipeline 101 enabled/70 lazy, Phase 1=31.
- Sección Diagramas al final: health → diagrams/stack-dashboard.svg + architecture-layers.svg; ops → diagrams/data-architecture.svg, con class="svg-diagram img-fluid w-100 border-soft radius-lg shadow-glow".
- Verificación: python html.parser para tags balanceados (NONE errors/unclosed); Select-String para gv.css/gv.js/v3.5.0/112; patrones viejos ausentes (v8.0.1, 263 TS, 82/82, 19/19, 118 Skills, 52 Norm, 2219, 1410 nodes, 23MB, 12 tables). El ✦ en hero-badge se guarda bien como UTF-8 (el "?" en consola PowerShell es solo encoding del terminal).

---
*Imported from Engram on 2026-09-06*
