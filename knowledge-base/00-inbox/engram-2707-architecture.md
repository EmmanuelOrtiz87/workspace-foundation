---
created: 2026-08-09 06:39:17
tags: [engram, architecture]
engram_id: 2707
type: architecture
---

# Plan M1-M10 completado + release v3.6.0 + homologación ramas

**What**: Plan M1-M10 del premortem (Chief-of-Staff digital multi-dominio) COMPLETO e integrado; repo pusheado, ramas homologadas, release v3.6.0 publicado.
**Why**: Mandato del usuario de crear/absorber capacidad nativa en el stack; luego "sube todo al repo, homologa main y develop, haz release y pr".
**Where**: src/web-crawler.ts (DDG provider + stripTags + fallback Firecrawl→DDG→Bing), src/web-research-select.ts (M5 snippet + --deep), src/recommend-agent.ts (STATIC_MAP 8 dominios negocio + keywords orden), src/agent-delegator.ts + route-and-delegate.ts (M6 tiering AGENT_TEMPERATURE), src/self-mutation-guard.ts + self-reflection-loop.ts (M7), src/hooks/pre-commit-opencode-validation.ts (fix frontmatter YAML en .opencode/agents/*.md), config/session-autostart.config.json (109 steps/102 enabled/73 lazy, web-research-adhoc nuevo).
**Learned**: 1) El hook opencode-validation abortaba commits porque tryParseJson() se aplicaba a .md de agentes (frontmatter YAML no es JSON) — fix: los .md van directo a validateAgentMdSteps() saltando tryParseJson. 2) El mirror public (gentle-vanguard-public) tiene commits "sync: automated sync from private repo" que generan conflictos modify/delete — NO mergearlo; su sync automático lo actualiza solo. 3) reports/stack-live-observability-latest.json se modifica solo en cada sesión (pipeline en vivo) — descartar con git checkout -- antes de cambiar de rama. 4) main/develop divergieron masivamente (999 vs 754 commits) — homologación con reset --hard + force push, backup tag backup/develop-pre-homologation. 5) ConvertTo-Json de PowerShell reescribe package.json con encoding UTF8 BOM — verificar que solo cambie el campo version.
**Estado final**: main y develop en b32ec042 (idénticas, 0 dif), origin/main y origin/develop sincronizados, tag v3.6.0 (apunta a 1005ab62, commit del bump), release GitHub publicado con notas M1-M10, 0 commits pendientes de push, PRs abiertos solo de dependabot.

---
*Imported from Engram on 2026-09-06*
