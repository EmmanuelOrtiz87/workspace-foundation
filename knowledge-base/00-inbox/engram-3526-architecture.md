---
created: 2026-08-31 18:35:30
tags: [engram, architecture]
engram_id: 3526
type: architecture
---

# Armonización estructural completa: header/footer/secciones GV en las 6 apps

**What**: Armonización ESTRUCTURAL final (commit 09e16e69) — las 4 apps restantes ahora comparten la composición de la pareja dorada (analytics+academy): (1) CC: header.gv-topbar completo (brand mark+wordmark Orbitron+name "Command Center" + system-state con contador de apps + controles), stats de apps running/stopped, section-title+sub, footer.gv-footer real reemplazando el .meta; (2) dashboard: system-state alineado, headings internos 26px/800, footer.gv-footer agregado (nav agrupada conservada — no se convirtió a rail lateral para no tocar routing); (3) CMS: composición topbar verificada (brand→tabs→system-state→controles), headings alineados, footer con tagline+versión+año; (4) prompt-studio: system-state + headings + footer estándar. Canónico: .gv-section-sub agregada, .gv-footer mejorado con borde glass.
**Why**: El usuario: "analytics y academy están muy pero muy iguales y eso me gusta! esto mismo debemos conseguir con el resto (command center, dashboard, cms y prompt studio)".
**Where**: apps/command-center/public/index.html, apps/web-dashboard/src, apps/content-cms/src, apps/prompt-studio/src, assets/gv-design-system.css
**Learned**: (1) La "sensación de identidad" = composición estructural (header brand+estado+controles / ritmo de secciones title+sub / footer con brand+tagline+versión) + los patrones firma (pill gradiente, glass, view-fade) — ambos niveles necesarios. (2) Footer estándar GV: brand en color brand + tagline de la app + versión del stack + año, centrado, borde superior glass. (3) Estructura de header GV: brand (mark+wordmark+name) → nav/tabs → system-state → controles (presets/refresh/i18n/tema). (4) 95/95 + 40/40 + builds 0 + HTTP 200 x4.

---
*Imported from Engram on 2026-09-06*
