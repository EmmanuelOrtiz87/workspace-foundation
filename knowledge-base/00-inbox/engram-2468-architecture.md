---
created: 2026-08-02 05:50:15
tags: [engram, architecture]
engram_id: 2468
type: architecture
---

# Model provider healer — auto-detect LLM provider errors

**What**: Created model-provider-healer system that auto-detects LLM provider errors in opencode logs and auto-switches the active model to the native fallback. New files: `src/model-provider-healer.ts` (CLI: --scan/--status/--clear/--quiet), `config/model-health.json` (6 error signatures, fallbackModel=opencode/deepseek-v4-flash-free, cooldown 60min). Added rule `ModelProviderUnsupported` to `config/correction-rules.json` + wiring in `src/correction-rules-engine.ts`, lazy pipeline step `model-provider-heal` (phase 90) in `config/session-autostart.config.json`, and check `model-provider-health` in `src/Core/maintenance-watchtower.ts`.

**Why**: The `litellm.UnsupportedParamsError: Bedrock doesn't support tool calling without tools= param` error (model kimi-2-5 via provider littellmott-nuevo proxy → AWS Bedrock) recurred across sessions because no mechanism parsed LLM provider errors from logs. Root cause: opencode uses tool calling by default, Bedrock doesn't accept it without `tools=` param, and the litellm proxy lacked `modify_params: True`.

**Where**: src/model-provider-healer.ts, config/model-health.json, config/correction-rules.json, src/correction-rules-engine.ts, config/session-autostart.config.json, src/Core/maintenance-watchtower.ts

**Learned**: (1) Log scanning must filter to `level=ERROR` lines only — otherwise the agent's own commands (e.g. `Select-String -Pattern "Model not found"`) appear in the log as false positives. Extract modelID=/providerID= from the ERROR line itself, not the whole tail. (2) Using `require('fs')` inside an ESM module throws a silent TypeError that makes tailLogFile return '' → 0 detections; import statSync/openSync/readSync/closeSync at top instead. (3) opencode injects stale internal models (e.g. openrouter/moonshot/kimi-k2.6) into subagents without explicit model field; fix-models.ts documents writing explicit valid model. (4) config/model-router.json + model-fallback.json already pointed to native; the gap was detection, not config.

---
*Imported from Engram on 2026-09-06*
