---
created: 2026-09-03 03:01:26
tags: [engram, decision]
engram_id: 3638
type: decision
---

# Evolución stack: fix modelo delegación + análisis gentle-ai y governance-toolkit

**What**: Sesión evolución stack: alineé opencode.json + model-router + model-fallback al modelo real con crédito (opencode/muse-spark-1.3-contributor-free) y delegué con general (system-model) para analizar gentle-ai v2.5.0 y agent-governance-toolkit v5.0.0 vs GV v4.0.0
**Why**: Delegación automática pedía gpt-5.6-luna / big-pickle sin crédito y cancelaba tasks; el usuario pidió delegar con modelo actual del orquestador
**Where**: opencode.json (21 agentes), config/model-router.json (30 bindings), config/model-fallback.json (chains), clones en %TEMP%/opencode/gentle-ai y agent-governance-toolkit
**Learned**: gentle-ai no es agente sino configurador ecosistema Go (routing orgánico, registry skills index-first, RDD informacional, doctor+backups+bench aislado); AGT complementa (PDP Rust fail-closed 8 puntos, identidad Ed25519, MCP gateway, 992 conformance tests) donde GV está flojo (policy-as-code, identidad, sandbox, SLO por agente); GV sólido en scanner 80 patrones, hash-chain, watchtower código 26 checks vs docs 96/22 drift, skills sprawl 202 vs 92

---
*Imported from Engram on 2026-09-06*
