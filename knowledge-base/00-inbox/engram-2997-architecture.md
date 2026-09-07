---
created: 2026-08-24 05:50:42
tags: [engram, architecture]
engram_id: 2997
type: architecture
---

# Dynamic model inheritance: agents follow orchestrator session model

**What**: Herencia dinámica de modelos implementada: eliminado el campo `model:` del frontmatter de los 21 agentes (.opencode/agents/*.md) → ahora heredan el modelo default de la sesión del orquestador (hoy opencode/big-pickle). Configs alineadas: model-fallback.json y model-router.json con primary=big-pickle y cadena free-tier (mimo-v2.5-free → hy3-free → ollama/qwen2.5); router conserva bloque fallback=mimo para agotamiento de cuota; agents.json bindings → big-pickle.
**Why**: El usuario preguntó por qué los agentes no heredan dinámicamente el modelo del orquestador. Causa raíz: frontmatter estático pisaba la herencia nativa de OpenCode (agente sin campo model usa el default de la sesión). Cuando deepseek-v4-flash-free fue retirado del runtime, todas las delegaciones morían con "Model not found".
**Where**: .opencode/agents/*.md, config/model-fallback.json, config/model-router.json, config/agents.json, rules/*.md, scripts/utilities/MODEL-ROUTER/, tests/gga-comprehensive.test.ts
**Learned**: opencode.json NO declara modelo default top-level → la herencia funciona solo si el frontmatter del agente no pisa el campo. NUNCA hardcodear modelos en frontmatter de agentes: los modelos free del runtime rotan (deepseek-v4-flash-free retirado ~2026-08; vivos: mimo-v2.5-free, hy3-free, muse-spark-1.2-contributor-free). .opencode/agents está en .gitignore pero sus archivos ESTÁN trackeados (git add del directorio falla por untracked, agregar archivos trackeados funciona). Tests: test:config 24/24 PASS, gga-comprehensive 1/1 PASS tras migración.

---
*Imported from Engram on 2026-09-06*
