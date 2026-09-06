---
created: 2026-08-01 16:08:21
tags: [engram, decision]
engram_id: 2459
type: decision
---

# Engram alignment: official plugin + HTTP API, no custom scripts

**What**: Corregida la integración engram del stack para alinearse con el patrón oficial de gentle-ai. Se eliminó `src/engram-session-register.ts` (script custom), NO se agregó step al pipeline, y el close-orchestrator ahora usa la HTTP API oficial.
**Why**: El stack estaba creando integración custom (script de registro + CLI inexistente `engram mem session-summary`) cuando gentle-ai usa el patrón oficial: plugin `engram setup opencode` + herramientas MCP nativas ("Engram works automatically. You don't need to do anything.").
**Where**: src/session-close-orchestrator.ts (fase 2.1), config/engram-policy.json, docs/reference/GENTLE-AI-ALIGNMENT-PROPOSAL.md (sección "Alignment Decision: Engram Session Lifecycle")
**Learned**: (1) `mem_session_summary` es herramienta MCP, NO comando CLI — verificado en engram v1.20.0 `--help`. (2) `engram setup opencode` instala el plugin oficial que hace session tracking automático (session.created → POST /sessions, chat.message → POST /prompts). (3) El endpoint HTTP oficial para persistir summary es `POST /sessions/{id}/end` con body `{summary}` — idempotente (devuelve 200 incluso si la sesión no existe). (4) El proyecto canónico engram es `gentle-vanguard` (detectado por git remote), no `workspace_gentle_vanguard`.

---
*Imported from Engram on 2026-09-06*
