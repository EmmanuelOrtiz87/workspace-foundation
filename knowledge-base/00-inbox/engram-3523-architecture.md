---
created: 2026-08-31 18:19:18
tags: [engram, architecture]
engram_id: 3523
type: architecture
---

# Todas las apps armonizadas al look academy (pill gradiente, glass, view-fade)

**What**: Armonización final de todas las apps al look ACADEMY (commit 394dd6cc) — el usuario validó academy como "perfecta" y las demás no eran idénticas. Patrones firma de academy portados al canónico assets/gv-design-system.css y aplicados en todas las apps: (1) botones PILL (999px, weight 700, 15.5px, padding 13px 26px) con PRIMARIO EN GRADIENTE purple→cyan (var(--gv-gradient)) en vez de cian sólido, ghost transparente con borde rgba(primary,0.5); (2) panels GLASS (backdrop-blur 10px + glass-border + radius 18px + transition all 0.18s); (3) transición de vista .gv-view-fade (viewIn 0.28s) aplicada en CMS, prompt-studio, dashboard (contenedor de rutas), CC (refresh) y analytics; (4) section titles 26px/800; (5) topbar sticky blur 14px + glass-border. Tokens nuevos en el canónico: --gv-glass, --gv-glass-border, --gv-gradient, RGB vars.
**Why**: El usuario: "la visual son muy parecidas pero seguimos sin lograr lo mismo que se hizo en academy que quedo perfecto" — los detalles eran: gradiente vs sólido, glass vs sólido, transiciones ausentes.
**Where**: assets/gv-design-system.css, apps/web-dashboard/src, apps/content-cms/src, apps/prompt-studio/src, apps/gv-analytics/src, apps/command-center/public
**Learned**: (1) La diferencia entre "parecido" y "idéntico" vive en los DETALLES: gradiente vs sólido, glass vs opaco, transiciones presentes vs ausentes — un inventario de patrones de la app validada (academy) es el camino. (2) Academy es ahora LA REFERENCIA visual del stack (su style.css de 1206 líneas); el canónico fue actualizado a SU look. (3) Verificación de consistencia: los valores de gradiente/glass/viewIn deben ser IDÉNTICOS en canónico y estilos locales. (4) 95/95 dashboard + 40/40 CMS + builds 0 + HTTP 200 en los 4 puertos tras el cambio.

---
*Imported from Engram on 2026-09-06*
