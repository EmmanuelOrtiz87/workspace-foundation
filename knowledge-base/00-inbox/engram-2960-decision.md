---
created: 2026-08-22 13:35:58
tags: [engram, decision]
engram_id: 2960
type: decision
---

# Release v3.8.2 SEA dual-repo y patrón tag-move

**What**: Release v3.8.2 publicada end-to-end: SEA exe (87.5MB) construido y publicado en repo privado, asset descargado y re-publicado en repo público (gentle-vanguard-public releases/tag/v3.8.2), README showcase rediseñado (instalador Opción A, badges, mermaid).
**Why**: build-sea.ts tenía paths hardcoded de postject que no existen en CI — resuelto con resolución dinámica vía `npm root -g` + postject como devDependency (b38d487e). Segundo fallo: tsconfig rootDir "." hace que tsc espeje la estructura del repo (dist/src/cli/...) pero build-sea.ts hacía .replace('src/','') buscando en dist/cli/ — fix probando ambos layouts + fallback .mjs (d64d3e08).
**Where**: src/build-sea.ts, README-PUBLIC.md, README.md privado con sección "Release & Distribution" (786b078d).
**Learned**: Para re-disparar release.yml tras fallo NO relacionado: borrar tag remoto (`git push origin :refs/tags/vX.Y.Z`), recrear en el commit deseado y pushearla — el workflow corre de nuevo. El pre-push hook container-scan falla si grype DB tiene exactamente 5 días (edad máxima) → `grype db update` antes de pushear. eslint rechaza comentarios de bloque con tokens de código dentro.

---
*Imported from Engram on 2026-09-06*
