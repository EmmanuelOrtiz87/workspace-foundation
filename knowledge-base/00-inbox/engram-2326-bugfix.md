---
created: 2026-07-31 04:17:07
tags: [engram, bugfix]
engram_id: 2326
type: bugfix
---

# Causa raíz delegación subagentes: .opencode/agents/*.md

**What**: Identificada y corregida la causa raíz del fallo "Model not found: z-ai/glm-5" en la delegación de subagentes. Los archivos `.opencode/agents/*.md` definen los subagentes de opencode y su front-matter `model:` tiene PRECEDENCIA sobre `opencode.json`. Los 10 agentes .md apuntaban a modelos openrouter no disponibles en el entorno (z-ai/glm-5, moonshotai/kimi-k2.6, qwen/qwen-plus).
**Why**: opencode no recarga config en caliente; la prueba empírica `task(ops-agent)` seguía fallando tras corregir opencode.json porque la fuente real era el .md. El binario opencode v1.17.18 (175MB) solo contiene el catálogo models.dev (56 hits z-ai/glm-5), NO agentes (0 hits) — descartando built-ins hardcodeados.
**Where**: .opencode/agents/*.md (10 archivos), config/model-router.json (v2.2.0), config/model-fallback.json (v2.0.0), config/token-budget-guard.json, config/provider-costs.json, rules/PER-PHASE-MODEL-ROUTING.md, rules/AI-MODEL-SELECTION.md
**Learned**: 1) En opencode, `.opencode/agents/*.md` > `opencode.json` para modelos. 2) La config no se recarga en caliente — requiere reiniciar opencode. 3) El entorno solo dispone de opencode/deepseek-v4-flash-free; el stack entero dependía de openrouter (28 refs en model-router.json) que no está configurado. 4) Modelos gratis del catálogo: los nombres en el error eran del catálogo embebido del binario. 5) Probar gitflow-agent (funciona, no tiene .md) vs ops-agent (falla, tiene .md) confirma el patrón.

---
*Imported from Engram on 2026-09-06*
