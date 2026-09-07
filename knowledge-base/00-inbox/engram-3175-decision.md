---
created: 2026-08-26 17:35:34
tags: [engram, decision]
engram_id: 3175
type: decision
---

# Academy v3: i18n tri-lingual, demos reales, track automatizaciones, Prompt Studio en CMS

**What**: Academy v3 + Prompt Studio (db69e902): (1) FIX demos — las capturas previas de 7.8KB eran pantallas vacías; re-capturadas 5 REALES autenticadas vía navegador MCP con initScript que redirige /api/* directo al 8080 (bypass proxy Vite colgado) + espera 6-12s + screenshot→CDN URL→curl; (2) i18n ES/EN/PT estilo dashboard: data/i18n.js 85 claves ×3, selector persistente, tracks traducidos, nota de idioma en lecciones; (3) track Automatizaciones (8 lecciones de procesos automáticos del stack); (4) Prompt Studio en el CMS del dashboard: /prompts, builder completo, 4 tests, 61/61 suite, build OK, verificado en vivo; (5) demo cards con captions tri-linguales incluyendo el generador como demo.
**Why**: Feedback del usuario: imágenes demo no se veían, querer el generador dentro del CMS, ecos de procesos automatizados sin documentar, y traducción multi-idioma como la del dashboard.
**Where**: apps/academy-web/{data/i18n.js,assets/demo/*.png,app.js,index.html,style.css,data/content-automatizaciones.js,data/tracks.js}, apps/web-dashboard/src/{App.tsx,components/PromptStudio*.tsx}
**Learned**: naturalWidth>0 NO valida contenido de screenshot; chrome headless dispara antes de hidratar SPAs. navigate_page con initScript = herramienta clave para dashboards con proxies colgados. @testing-library/user-event no está en el dashboard (usar fireEvent). WS dashboard: zombies de puerto requieren stop + kill PID del owner + start; /api/health puede colgar con el server vivo. Working tree compartido con sesión paralela activa (86 M al cierre).

---
*Imported from Engram on 2026-09-06*
