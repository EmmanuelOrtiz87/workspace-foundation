---
created: 2026-08-29 20:46:05
tags: [engram, architecture]
engram_id: 3322
type: architecture
---

# Migración de PS1 de marketing y Bedrock

**What**: Eliminé los helpers activos social-poster.ps1, deploy-presentations.ps1 y fix-kilocode-bedrock.ps1; amplié social-poster.ts para aceptar flags separados/compatibles y schedule; documenté GitHub Pages como único canal soportado de presentaciones; añadí fix-kilocode-bedrock.ts con dry-run por defecto, --apply obligatorio, confirmación y backups.
**Why**: Continuar la migración estricta a TypeScript sin conservar canales Vercel/Netlify no soportados ni mutaciones peligrosas automáticas.
**Where**: src/tools/social-poster.ts, src/cli/fix-kilocode-bedrock.ts, docs/operations/procedures/PRESENTATIONS-DEPLOYMENT.md, docs/KILOCODE_BEDROCK_FIX_COMPLETE.md, tests/unit/scripts/scripts-smoke.test.ts.
**Learned**: El smoke test antiguo exigía un PS1 aunque el objetivo ya es TS-only; se actualizó para verificar cero PS1 activos. El formateo global del repositorio ya tenía 126 archivos fuera de formato, por lo que solo se validaron los archivos modificados.

---
*Imported from Engram on 2026-09-06*
