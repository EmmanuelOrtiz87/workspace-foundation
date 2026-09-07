---
created: 2026-08-10 04:19:35
tags: [engram, bugfix]
engram_id: 2727
type: bugfix
---

# Fix 2 bugs del workflow Release: PowerShell en bash + corepack

**What**: Corregidos 2 bugs del workflow Release que fallaban en las últimas 4 releases (v3.4.0-v3.7.0). Bug 1: job 'Auto-Update Manifest' en release.yml usaba sintaxis PowerShell ($manifest = @{...}) pero corría con shell bash por defecto en ubuntu-latest → '$manifest' se expandía vacío → '=: command not found' (exit 127) → no se generaba update-manifest.json. Bug 2: job 'Build Binario (.exe SEA)' en reusable-release.yml usaba 'pnpm install' sin 'corepack enable' → en windows-latest pnpm no está preinstalado → 'The term pnpm is not recognized' (exit 1) → la release quedaba sin el asset .exe. Fixes: añadir 'shell: pwsh' al step del manifest y añadir paso 'Enable corepack (pnpm)' antes del install.

**Why**: El usuario pidió avanzar todo lo pendiente con todas las herramientas; el pipeline de release era el único frente roto del stack — fallaba silenciosamente en 4 releases sin que nadie lo detectara.

**Where**: .github/workflows/release.yml (shell: pwsh), .github/workflows/reusable-release.yml (corepack enable). Commits dff8b0ea y c00cbb11. CI validó: CI/CD success, Security Scan success.

**Learned**: (1) Los workflows GitHub Actions con reusable workflows que fallan en startup (startup_failure) pueden ser fallos de infraestructura sin log — push.yml falla así en TODOS los pushes recientes aunque los 5 reusables existen (pendiente de investigar, probablemente limitación de GitHub con reusable workflow_call). (2) El asset .exe se puede subir manualmente a la release: gh release upload v3.7.0 build/gentle-vanguard-3.7.0.exe (91.8 MB subido). (3) El binario SEA responde 'Gentle-Vanguard v3.3.3' a -Version (versión hardcodeada del launcher, no la del package.json — comportamiento conocido).

---
*Imported from Engram on 2026-09-06*
