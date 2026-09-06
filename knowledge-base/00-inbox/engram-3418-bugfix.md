---
created: 2026-08-31 02:15:28
tags: [engram, bugfix]
engram_id: 3418
type: bugfix
---

# container-scan toolAvailable frágil en CI

**What**: `toolAvailable()` en `src/security/container-scan.ts` dependía de `grype --version` con `stdout.length > 0`. En CI, los binarios recién instalados (syft v1.51.1, grype v0.118.0) devolvían no-cero/stdout vacío desde `--version` (probablemente probe de update check) → los 4 probes tardaron ~10s y todos dieron false → fallback `tool: "none"` con `exitCode: 2`, pese a que syft/grype SÍ estaban en PATH (`grype db update` funcionó en el paso previo).
**Why**: El job Security/Container Scan (SBOM) fallaba con exit 2 aunque el JSON mostraba 0 vulns.
**Where**: src/security/container-scan.ts — toolAvailable() reescrito: PATH lookup primero (determinista, sin spawn) + fallback --version aceptando stdout O stderr. Import `delimiter` añadido. Fallback mejorado con diagnóstico de toolchain en rawOutput.
**Learned**: Verificar disponibilidad de herramientas por PATH lookup (existsSync en dirs de PATH) es más robusto que ejecutar `--version`. También se añadió paso "Generate SBOM" en reusable-security-scan.yml (generate-sbom.ts → sbom.json) para que CI escanee el SBOM curado (803 componentes, sin node_modules) igual que el delivery gate local.

---
*Imported from Engram on 2026-09-06*
