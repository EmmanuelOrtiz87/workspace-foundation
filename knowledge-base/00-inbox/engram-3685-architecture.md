---
created: 2026-09-05 20:33:23
tags: [engram, architecture]
engram_id: 3685
type: architecture
---

# Prompt Studio v4.1 Gem Space — chat stack+gemini, import Gems Google, key válida

**What**: Prompt Studio v4.1 "Gem Space" — chat embebido con modelo del stack (big-pickle) o Gemini, validación de API key en vivo, import real de gemas de Google por cookie, UX de pantalla Gemas corregida

**Why**: El usuario probó la pantalla de Gemas y reportó: (1) botón "Todas" duplicado y "Pool" == "Todas", (2) no podía hacer click en las predefinidas/verlas/editarlas/usarlas, (3) cargó su API key de Gemini sin feedback, (4) no veía sus gemas de Google. Pidió que el chat use el modelo del stack (big-pickle) o Gemini, todo embebido sin salir de la app.

**Where**: apps/prompt-studio/server/server.ts (backend v4.1), apps/prompt-studio/src/App.tsx + i18n.ts (frontend v4.1, versión 4.1.0). Docs: docs/reference/PROMPT-STUDIO-GEMS.md + PROMPT-LIBRARY-BENCHMARK.md (commit 6d39ff8b en develop, pusheado). App en apps/ (gitignored del repo del stack — git propio).

**Learned**:
- NO existe API oficial pública de CRUD de Gems de Gemini (ai.google.dev/gemini-api/docs/gems = 404). El acceso real es reverse-engineering sobre gemini.google.com: GET /app extrae access token SNlM0e de la cookie __Secure-1PSID; POST /_/BardChatUi/data/batchexecute con f.req RPC LIST_BOTS (CNgdBe); parsing length-prefixed; término de referencia: HanaokaYuzu/Gemini-API (Apache-2.0).
- El modelo del stack (opencode/big-pickle) se invoca con el binario REAL de opencode: `opencode run -m opencode/big-pickle --format json "msg"` (winget Link en C:\Users\emman\AppData\Local\Microsoft\WinGet\Links\opencode.exe, v1.18.21). El `opencode` del PATH (C:\Users\emman\bin\opencode) es un WRAPPER DEMO bash que solo hace echo — usar findOpencodeBin() que busca winget/updater/pnpm store.
- A 2026-09-05 Google RETIRÓ los modelos gemini-2.0-flash, gemini-2.5-flash y gemini-2.5-flash-lite (404). Disponibles verificados: gemini-flash-lite-latest (200), gemini-flash-latest (200), gemini-pro-latest, gemini-3.6-flash (a veces 503 por picos). Cadena de fallback implementada en modelChat.
- La API key de Gemini del usuario es válida (~30 modelos). El endpoint /api/gemini/key ahora valida en vivo y rechaza keys inválidas con 400.
- Chat stack verificado: primera llamada ~14s (cold start del server opencode), siguientes más rápidas. Chat gemini verificado: responde GEMINI_OK con gemini-flash-lite-latest sobre la gema "Revisor de código senior".
- Patrón del post-commit del stack: pnpm reinstala y toca pnpm-lock.yaml (elimina importer apps/ desacopladas) — hay que git restore pnpm-lock.yaml tras cada commit/push.

---
*Imported from Engram on 2026-09-06*
