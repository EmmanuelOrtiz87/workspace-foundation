---
created: 2026-08-07 12:41:17
tags: [engram, bugfix]
engram_id: 2618
type: bugfix
---

# Tracking de tokens era FALSO (stale mayo) — plugin opencode token-tracker captura tokens reales

**What**: Descubrimiento crítico: los reportes de tokens/costos del stack eran FALSOS (datos stale de MAYO). El stack mostraba "9.158 tokens / 8.46% / $0.09" pero ese número venía de `reports/stack-live-observability-latest.json` con timestamp interno 13/05/2026 (3 meses viejo). La sesión mostraba 0 tokens a pesar de trabajar todo el día. Causa raíz: el hook `post-tool-use-log.ts` usaba el formato `hooks` de opencode que la versión 1.17.18 YA NO SOPORTA (el schema de config no tiene `hooks`, solo `plugin`). El hook nunca corría → token-usage-auto nunca se invocaba → session file quedaba en 0 → metrics-collector propagaba el dato stale.

**Why**: El usuario sospechó correctamente: "solo hemos consumido eso en la sesión? estamos viendo todo real?" — pidió verificar la procedencia real de los números.

**Where**: .opencode/plugins/token-tracker.ts (NUEVO plugin), reports/stack-live-observability-latest.json (eliminado stale), .runtime/metrics/token.json + cost.json (limpiados stale)

**Learned**:
- opencode-ai 1.17.18 usa PLUGINS (`.opencode/plugins/` auto-cargados), NO hooks. El schema https://opencode.ai/config.json no tiene "hooks".
- Los tokens REALES están en `AssistantMessage.tokens = { input, output, reasoning, cache: { read, write } }` + `cost`, disponibles en el evento `message.updated` (properties.info). El Session NO tiene tokens (solo el sessionID en session.idle).
- El plugin token-tracker.ts: hookea `message.updated`, deduplica por messageID (el evento dispara muchas veces durante el streaming), acumula por sesión, y escribe en .session/token-usage.json + actualiza session-current.json + .runtime/token-tracker.log.
- El plugin tarda efecto en la SIGUIENTE sesión de opencode (esta sesión ya estaba corriendo sin él).
- Tipos verificados en https://unpkg.com/@opencode-ai/sdk@latest/dist/gen/types.gen.d.ts (EventSessionIdle, AssistantMessage, Session).
- Commits: 8df1a357 (plugin + delete stale report), 205520e9 (fix ESM __dirname).
- Cuidado: `__dirname` no existe en ESM/Bun plugin — usar `import.meta.dirname`.

---
*Imported from Engram on 2026-09-06*
