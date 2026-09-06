---
created: 2026-09-05 21:02:24
tags: [engram, bugfix]
engram_id: 3687
type: bugfix
---

# Import Gems Google — fix server viejo + HeadersOverflowError Node

**What**: Bug raíz del import de gemas de Google en prompt-studio — server viejo corriendo en :5177 + HeadersOverflowError de Node fetch (undici) contra gemini.google.com

**Why**: El usuario reportó "ruta desconocida: POST /api/gems/import-gemini" y "api key inválida". Ambos eran síntomas de un servidor API v4.0 viejo aún escuchando en :5177 (sin ruta import-gemini, respondía 200 sin keyValid → frontend nuevo lo interpretaba como rechazo de key).

**Where**: apps/prompt-studio/server/server.ts (helper httpsFetch con node:https + maxHeaderSize 256KB para el import), apps/prompt-studio/src/App.tsx (api() ahora lanza Error en respuestas 4xx/5xx). Docs: docs/reference/PROMPT-STUDIO-GEMS.md (sección troubleshooting, commit 68d9b792 en develop, pusheado).

**Learned**:
- La respuesta de `gemini.google.com/app` trae headers >16KB que rompen el `fetch` nativo de Node 24 (undici) con `HeadersOverflowError: UND_ERR_HEADERS_OVERFLOW`. PowerShell/curl/chrome lo toleran; Node no. Solución: usar `node:https` con `maxHeaderSize: 256 * 1024` (helper httpsFetch).
- Diagnóstico de "ruta desconocida": el server API que escucha en :5177 puede ser una versión vieja de sesión previa (los Start-Process de smoke tests dejan procesos heredados que mantienen el puerto). Reiniciar: matar PID del puerto 5177 + relanzar server/server.ts.
- El api() del frontend NO debe devolver la data en 4xx/5xx silenciosamente — lanzar Error con data.error para que los catch muestren el motivo real.
- El flujo de import quora: httpsFetch → init /app (200, ~837KB) → extraer SNlM0e access token (regex "SNlM0e":\s*"(.*?)") → batchexecute LIST_BOTS (CNgdBe) → parse frames length-prefixed → insert local origin='imported'. Logging por etapa en .runtime/prompt-studio/import-gemini.log.
- Con cookie fake el error es "No se pudo obtener el access token (SNlM0e). Cookie inválida o expirada." — Google rota __Secure-1PSID frecuentemente (Device Bound Session Credentials en Chrome).

---
*Imported from Engram on 2026-09-06*
