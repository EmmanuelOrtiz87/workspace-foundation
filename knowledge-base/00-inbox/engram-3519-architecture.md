---
created: 2026-08-31 17:59:09
tags: [engram, architecture]
engram_id: 3519
type: architecture
---

# Dashboard re-skinned a GV — unificación visual 100% completa (7 superficies)

**What**: Dashboard re-skinned a la identidad GV (commit 3fe054da) — la última superficie en unificarse: (1) dark-first por defecto (clase dark aplicada antes de montar React salvo preferencia explícita), persistencia global localStorage 'gv-cc-theme' (misma clave que todas las apps); (2) paleta dark alineada a GV: fondo #0d1117, superficies #1a2035/#2a2d3a, bordes #1e3a5f, primario #00bfff (hover #4dcfff), accent #a855f7, success/warning/error oficiales; (3) atmósfera grid 48px + glows radiales purple/cyan solo en dark; (4) topbar glass + wordmark Orbitron; (5) Tailwind primary realineado a GV + overrides CSS para blue-* residuales. Watchtower 113/113 tras el cambio.
**Why**: El usuario pidió unificación TOTAL: "todas las apps tengan el mismo diseño, formato, estructura, visual, efectos, transiciones, colores, formas, fuentes" — el dashboard era el único light-first teal.
**Where**: apps/web-dashboard/src/main.tsx, App.tsx, components/Dashboard.tsx, styles/index.css, tailwind.config.js
**Learned**: (1) UNIFICACIÓN COMPLETA: las 7 superficies GV (dashboard, analytics, cms, academy, prompts, CC, docs/presentations) comparten identidad dark-first navy/cyan, i18n es default + switcher, tema claro/oscuro con clave global gv-cc-theme. (2) Patrón para re-skin de apps Tailwind: redefinir las vars del tema (manteniendo nombres) + tailwind primary alineado + overrides CSS para utilidades residuales — evita tocar cientos de classNames. (3) Dark-first: aplicar la clase dark antes de montar React evita flash de tema incorrecto. (4) 95/95 tests del dashboard intactos — el re-skin fue CSS-level, cero lógica.

---
*Imported from Engram on 2026-09-06*
