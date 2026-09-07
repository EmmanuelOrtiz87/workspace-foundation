---
created: 2026-05-20 11:27:09
tags: [engram, architecture]
engram_id: 964
type: architecture
---

# Multi-platform gateway with persistent agent

**What**: Built complete multi-platform messaging gateway (Telegram, Discord, WhatsApp) with persistent ReAct agent and cron scheduler for Gentle-Vanguard stack.

**Why**: Enable full GV stack operation from WhatsApp/Telegram without requiring OpenCode/coding tool. User messages → gateway → agent → LLM + tools (exec, read, write, git, search) → response back to platform.

**Where**: scripts/gateway/ (gateway.js, platforms/, agent/, gateway-manager.ps1), config/gateway.json, skills/multi-platform-gateway/

**Architecture**:
- Gateway (gateway.js) → receives messages from platforms → saves to inbox → routes to Agent
- Agent (agent/agent.js) → ReAct loop: calls LLM (OpenAI/Anthropic) with tool definitions → executes tools against real stack → returns response
- Scheduler (agent/scheduler.js) → cron-based tasks (command, git-status, report) → delivery via gateway outbox
- Manager (gateway-manager.ps1) → CLI lifecycle: start/stop/status/send/agent/schedule

**Learned**: whatsapp-web.js > Baileys for reliability. Self-messages need fromMe override. ESM + CJS interop requires default import pattern. Pester 3.4.0 has significant API differences from Pester 5.

---
*Imported from Engram on 2026-09-06*
