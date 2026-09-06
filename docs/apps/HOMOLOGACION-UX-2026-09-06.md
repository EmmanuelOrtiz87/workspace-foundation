# Homologación UX/CX de apps GV — hacia el motion standard v1

Fecha: 2026-09-06 · Base: ADR-0031 + `docs/design/07-motion-ux-standard.md`
Referencia viva: **Academy v4** (`apps/academy-web`). Objetivo: que las 8 apps presenten la misma
experiencia — efectos, transiciones, fondos, movimiento, colores, formatos, bordes — sin perder su
carácter por superficie.

## Estado actual (actualizado 2026-09-06, sesión 2)

| App | Identidad v2 | View-fade | Motion layer | Toasts | Teclado | i18n es/en/pt | Estado homologación |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Academy v4 | ✅ | ✅ | ✅ (referencia) | ✅ | ✅ | ✅ | **✅ HOMOLOGADA** (referencia) |
| Dashboard | ✅ | ✅ | ✅ toasts/reveal vía vistas | ✅ | parcial | ✅ | **✅ HOMOLOGADA** (+ vista Histórico con filtros y drill-down por sesión) |
| Command Center | ✅ | ✅ | ✅ spotlight + reveal + toasts | ✅ (start/stop/preset) | ✅ (Escape logs) | ✅ (es/en) | **✅ HOMOLOGADA** (sesión 2) |
| Archify | ✅ | ✅ (keyframes reparados) | ✅ spotlight + reveal | ✅ (toast premium) | parcial | ✅ | **✅ HOMOLOGADA** (sesión 2: keyframes gv-view-fade faltantes reparados) |
| Prompt Studio | ✅ | parcial | parcial | parcial | ✅ (Ctrl+K) | ✅ | Pendiente: unificar toasts, spotlight en gemas |
| Content CMS | ✅ | ✅ | parcial | ✅ | parcial | ✅ | Pendiente: spotlight en cards, blur-up en medios |
| gv-analytics | ✅ | ✅ | parcial | parcial | parcial | ✅ | Pendiente: spotlight, back-to-top |
| Design Hub | ✅ | parcial | parcial | parcial | parcial | ✅ | Pendiente: spotlight, copy-code |

### Ejecutado en sesión 2 (2026-09-06)

- **Dashboard — vista Histórico nueva** (`/history`): API `GET /api/history/sessions` y
  `/api/history/sessions/:id` (handler `server/handlers/history.ts`) sobre token_usage + traces +
  token_transactions + token_savings. Lista consolidada de TODAS las sesiones (706 reales: zcode,
  minimax, opencode, codex y stack), filtros por rango (7d/30d/90d/todo), fuente, modelo, búsqueda y
  orden; resumen del conjunto filtrado (sesiones, tokens, promedio, tokens ahorrados por cache);
  distribución por fuente; drill-down por sesión con breakdown de modelos, mensajes (token_transactions),
  trazas y ahorro. Heurística de fuente con desambiguación (mini­max vs opencode comparten `ses_*`
  — se resuelve con agent orchestrator/subagent y message_id `minimax:*`/`codex:*`; `session-<fecha>`
  = sesiones del stack). 9 tests (vitest) + tsc + lint + build verdes. Footer v3.8.2 → v3.9.0.
- **Misterio del "aggregator skeleton" resuelto**: era el proceso WS server stale; tras reinicio vía
  Command Center el home queda 100% vivo (WS Connected, Source SQLite, process hygiene, tokens).
  "Bridge Offline" es estado operacional del daemon de bridge (arranca con sesión de bridge), no bug.
- **Command Center**: spotlight-card en las 7 cards, reveal-stagger en primer render, toasts glass
  con barra de acento en start/stop/preset (es/en), reduced-motion guard. Verificado con Playwright.
- **Archify**: reparados los keyframes `gv-view-fade` que se usaban SIN estar definidos (bug real),
  spotlight + reveal en cards de biblioteca, toast premium con barra de acento gradiente, guard
  reduced-motion global. tsc + build verdes.
- **Academy**: captura del dashboard en la demo gallery actualizada a la captura viva (WS Connected).

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
