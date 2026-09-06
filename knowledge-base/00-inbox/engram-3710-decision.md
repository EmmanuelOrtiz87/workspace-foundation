---
created: 2026-09-06 17:26:49
tags: [engram, decision]
engram_id: 3710
type: decision
---

# CMS v3.9.0 next-level pass

**What**: Auditoría completa + upgrade v3.9.0 de apps/content-cms (GV Content OS) al estándar de las otras apps del stack (archify/prompt-studio/analytics). Commits fb697cba (apps) + ADR-0030 con addendum (stack).
**Why**: Pedido del usuario: llevar CMS a otro nivel, visual + funcional + perf, como productos de grandes empresas.
**Where**: apps/content-cms/{src/contentos.tsx,src/i18n.tsx,src/App.tsx,server/server.ts,server/generator.ts,server/video-pipeline.ts}, docs/adr/ADR-0030
**Learned**: (1) useT era estado local por componente → el cambio de idioma NO propagaba a las tabs; se arregló con I18nProvider (contexto) + locale pt nuevo. (2) El trabajo F1-F5 de la madrugada (settings IA, skills, video pipeline, conectores, scheduler) estaba SIN commitear (untracked en repo apps). (3) /api/connect no tenía UI — se creó tab Publicar. (4) provider 'stack' en settings cae a TemplateGenerator (no invoca muse-spark) — pendiente real bridge. (5) toISOString().slice(0,10) corre el día en UTC+X → localDayKey(). (6) readFileSync en server bloqueaba event loop con MP4s → createReadStream. (7) apps/content-cms corre API :3787 + vite dev :5175 vía start.sh; tests 51 verdes.

---
*Imported from Engram on 2026-09-06*
