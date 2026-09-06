---
created: 2026-08-14 06:01:07
tags: [engram, bugfix]
engram_id: 2832
type: bugfix
---

# Fix delegación rota: agentes apuntaban a kimi-2-5 (modelo inexistente)

**What**: Toda delegación de subagentes fallaba con "Model not found: kimi-2-5/". Causa raíz: 21 archivos `.opencode/agents/*.md` tenían `model: kimi-2-5` en frontmatter + `config/model-fallback.json` tenía `primary: kimi-2-5` para los 13 agentes + `config/model-health.json` y `config/correction-rules.json` tenían `fallbackModel: kimi-2-5`. El modelo kimi-2-5 NO existe en este entorno.
**Why**: El usuario pidió operar con todas las herramientas; la delegación de subagentes (task tool) es el mecanismo central del stack y estaba 100% rota.
**Where**: .opencode/agents/*.md (21 archivos), config/model-fallback.json, config/model-health.json, config/correction-rules.json
**Learned**: El task tool de opencode lee el frontmatter de .opencode/agents/*.md Y config/model-fallback.json para resolver el modelo del subagente. El modelo disponible real es `opencode/deepseek-v4-flash-free`. Verificar con `Select-String -Path config/*.json -Pattern 'kimi-2-5'` antes de asumir que la delegación funciona. Pendiente: config/model-health-registry.json fallbackStrategies aún lista kimi-2-5 primero en cost-optimized/performance.

---
*Imported from Engram on 2026-09-06*
