---
created: 2026-09-06 02:54:31
tags: [engram, bugfix]
engram_id: 3693
type: bugfix
---

# Prompt Studio v4.5: login de import arreglado (Google directo + Chrome real + auto-detección)

**What**: Prompt Studio v4.5 — flujo de login del import por navegador arreglado tras feedback real del usuario: formulario de email/contraseña de Google directo (accounts.google.com/ServiceLogin?continue=gemini), Chrome real del sistema (channel:'chrome' con fallback), botón "Reintentar import" siempre habilitado + instrucciones explícitas + auto-detección de sesión cada 15s que dispara el import solo cuando el usuario cierra la ventana logueada. runBrowserImport migrado de spawnSync a spawn async.

**Why**: usuario reportó: la ventana abría la landing de Gemini sin poder loguearse, y "Reintentar import" estaba gris (bug: yo lo dejé disabled en login-launched).

**Where**: src/ops/gemini-browser-import.ts (URL de login + channel chrome), apps/prompt-studio/server/server.ts (runBrowserImport async), src/App.tsx (auto-poll useEffect + UI), docs/reference/PROMPT-STUDIO-GEMS.md §5e (commit bf6a9ac4).

**Learned**: (1) Nunca abrir gemini.google.com para loguear sin sesión — muestra landing de marketing, no el formulario; usar accounts.google.com/ServiceLogin con continue. (2) Google desconfía del Chromium empaquetado de Playwright en login ("Este navegador no es seguro") — channel:'chrome' (Chrome real instalado) es la vía confiable; verificar disponibilidad con launch({channel:'chrome'}). (3) El perfil persistente de Playwright queda LOCKEADO mientras la ventana login está abierta: los checks de sesión durante ese período fallan con 'already running' y deben ignorarse silenciosamente en el poll. (4) Ver siempre el flujo completo desde el punto de vista del usuario antes de dar un feature por terminado.

---
*Imported from Engram on 2026-09-06*
