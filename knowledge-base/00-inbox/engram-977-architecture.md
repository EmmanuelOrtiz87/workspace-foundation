---
created: 2026-05-21 04:21:20
tags: [engram, architecture]
engram_id: 977
type: architecture
---

# Plugin system + feedback loop + gateway production

**What**: Implemented 3 Hermes-inspired features: (1) Plugin system with dynamic loader scanning plugins/*/tool.js at gateway startup, merging into toolDefinitions automatically, with async ESM-compatible dynamic import(). (2) Feedback loop with JSONL store, submit_feedback tool (rating 1-5), feedback_stats tool, and RPC endpoints POST /feedback + GET /feedback/stats. (3) Gateway production test: Telegram connected as @FoundationStack_Bot with real token.\n**Why**: Hermes architecture had plugin runtime loading and feedback-rating loops we hadn't absorbed yet. Gateway had never been tested with real Telegram token.\n**Where**: plugins/system-info/ (demo plugin), scripts/gateway/agent/plugin-loader.js (async scanner), scripts/gateway/agent/tools.js (dynamic buildToolDefs + plugin executor routing), scripts/gateway/agent/system-prompt.js (dynamic tool list from toolDefinitions), scripts/gateway/feedback/feedback-store.js, scripts/rpc/rpc-server.js (+2 feedback endpoints)\n**Learned**: (1) Plugin loader must use async import() not require() in ESM projects. (2) Plugins need their own package.json with type:module to avoid MODULE_TYPELESS_PACKAGE_JSON warnings. (3) Gateway starts successfully with real Telegram token — no crashes. (4) The system-info plugin pattern works: any file added to plugins/<name>/tool.js with export definition + execute() is auto-discovered.

---
*Imported from Engram on 2026-09-06*
