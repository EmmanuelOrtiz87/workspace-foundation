# Homologación UX/CX de apps GV — hacia el motion standard v1

Fecha: 2026-09-06 · Base: ADR-0031 + `docs/design/07-motion-ux-standard.md`
Referencia viva: **Academy v4** (`apps/academy-web`). Objetivo: que las 8 apps presenten la misma
experiencia — efectos, transiciones, fondos, movimiento, colores, formatos, bordes — sin perder su
carácter por superficie.

## Estado actual (auditoría 2026-09-06)

| App | Identidad v2 | View-fade | Motion layer | Toasts | Teclado (Ctrl+K etc.) | i18n es/en/pt | Brecha principal |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Academy v4 | ✅ | ✅ | ✅ (referencia) | ✅ | ✅ | ✅ | — (referencia) |
| Prompt Studio | ✅ | parcial | parcial | parcial | ✅ (Ctrl+K) | ✅ | toasts globales, reveal en biblioteca, spotlight en gemas |
| Content CMS | ✅ | ✅ (gv-view-fade) | parcial | ✅ (semantic) | parcial | ✅ | spotlight en cards, lightbox ya tiene (medios), blur-up en medios |
| Dashboard | ✅ | ✅ (viewIn) | parcial | parcial | parcial | ✅ | toasts en acciones admin, copy-code en JSON/exports, stagger |
| gv-analytics | ✅ | ✅ (viewIn) | parcial | parcial | parcial | ✅ | spotlight en panels, back-to-top en reportes largos |
| Archify | ✅ | ✅ | mínima (solo spin) | parcial | parcial | ✅ | la de mayor brecha: todo el vocabulario salvo view-fade |
| Design Hub | ✅ | parcial | parcial | parcial | parcial | ✅ | spotlight en tokens/componentes, copy-code en snippets |
| Command Center | ✅ (shell) | parcial | mínima | parcial | n/a (sin búsqueda) | n/a (panel técnico) | reveal en cards de apps, toasts en start/stop, spin→blur-up en logs |

Claves compartidas ya homologadas transversalmente: tokens v2 Premium, logo oficial 32px, topbar
glass, footer mono, `gv-cc-theme` / `gv-cc-lang`, bind loopback, sin dependencias de animación.

## Plan de adopción (orden sugerido)

1. **Command Center** (puerta de entrada visual del stack): reveal-stagger en cards, toasts en
   start/stop/error, spotlight en cards de apps. Es Node puro: los patrones van como CSS + ~60 líneas JS.
2. **Archify** (mayor brecha): portar `academy-motion.css` como `archify-motion.css` (mismo
   vocabulario, prefijo de app), toasts en generación, lightbox en previews.
3. **Prompt Studio**: unificar toasts (hoy dispersos), spotlight en cards de gemas, blur-up en
   previews, celebración sobria al exportar backup.
4. **Content CMS**: spotlight en cards de historial/medios, blur-up en medios, stagger en calendario.
5. **Dashboard**: toasts en admin/RBAC, copy-code en exports JSON, stagger en metric cards, back-to-top.
6. **gv-analytics**: spotlight en panels, back-to-top en reportes, copy-code en queries MCP.
7. **Design Hub**: spotlight en tokens/componentes, copy-code en snippets, blur-up en assets.

## Reglas de la homologación

- **Portar patrones, no el archivo literal** cuando la app es React: los efectos son CSS-first; el
  JS delegado se adapta al framework (un `useEffect` con pointermove delegado, un componente Toast).
- Los prefijos `--gv-*` siguen reservados al canónico (`rules/NORMATIVA-DESIGN-SYSTEM.md`); los
  efectos usan esos tokens, no valores nuevos.
- Cada app completa el checklist de la sección 7 del estándar y valida con screenshots
  dark/light/mobile antes de dar la app por homologada.
- **Sin regresiones funcionales**: la homologación es capa de experiencia; no toca rutas, APIs ni estado.

## Notas de esta sesión (contexto para la siguiente)

- Dashboard: el "native aggregator" dejó cards superiores en skeleton y Agent Activity en "Bridge
  Offline" — estado preexistente a investigar en la próxima sesión de dashboard (no bloquea la
  homologación).
- Las capturas de demo de Academy quedaron regeneradas desde apps vivas: dashboard (home, tracing
  200 trazas, timeline, admin RBAC), CMS (Content OS) y Prompt Studio, vía
  `apps/academy-web/scripts/capture-v4.mjs` con login por API (`GV_DASHBOARD_TOKEN` de env, cookie
  efímera en el navegador de captura).
