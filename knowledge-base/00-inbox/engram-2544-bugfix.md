---
created: 2026-08-05 00:09:13
tags: [engram, bugfix]
engram_id: 2544
type: bugfix
---

# Error "Budget has been exceeded" = budget del proxy LiteLLM, no del stack

**What**: El error `AI_APICallError: Budget has been exceeded! Team=fd6847ee-a4cc-429f-bb05-8a365169cca5 Current cost: 50.03, Max budget: 50.0` que bloquea ejecuciones NO es del stack Gentle-Vanguard ni de opencode ni del proveedor final. Es del **proxy LiteLLM** (`littellmott-nuevo`) que impone un `max_budget` de $50 por team.
**Why**: El provider `littellmott-nuevo` está configurado en el opencode.json global (`~/.config/opencode/opencode.json`) apuntando a un proxy LiteLLM detrás de AWS API Gateway: baseURL `https://vxhfmjrvbh.execute-api.us-east-1.amazonaws.com/prod/ott-llm/v1`, x-api-key `sk-prod-xtJOLo0rWTzZ14eoAND_nctkIvb6G5LjOsLgsQY8-eM`. Modelos: qwen3-coder-30b, minimax-m2-5, claude-haiku-4-5, kimi-2-5, deepseek-v3-2. El log de opencode (`~/.local/share/opencode/log/opencode.log`) muestra providerID=littellmott-nuevo modelID=kimi-2-5.
**Where**: `~/.config/opencode/opencode.json` (provider littellmott-nuevo); `~/.local/share/opencode/auth.json` (key sk-RlRA8jdEV3_pgs5bd1AK4g); log en `~/.local/share/opencode/log/opencode.log`.
**Learned**: El budget de $50 vive en el servidor LiteLLM (base de datos de teams), NO en el repo ni en opencode. Nuestro stack (config/token-budget-guard.json) mide TOKENS (daily 60000) y es soft/non-blocking — nunca genera este error. Para solventar: subir/resetear max_budget del team en el admin de LiteLLM (requiere master key), crear team nuevo, o cambiar a provider local (lm-studio2 192.168.1.2:1234, ollama) / Dify. El error anterior (2-ago) tenía budget $250 sin Team=; el actual (5-ago) es $50 con Team=fd6847ee.

---
*Imported from Engram on 2026-09-06*
