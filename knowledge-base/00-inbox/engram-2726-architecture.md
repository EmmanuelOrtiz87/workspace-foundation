---
created: 2026-08-10 03:46:37
tags: [engram, architecture]
engram_id: 2726
type: architecture
---

# Roadmap de optimización 100% — SBOM nativo + ADR-002 + milestone v9.0

**What**: Cerrado el roadmap de optimización del stack (STACK-OPTIMIZATION-ROADMAP.md) 100%. Implementaciones: (1) SBOM integrado nativamente — scripts npm `sbom:generate` y `sbom:validate`, modo `--validate` añadido a src/generate-sbom.ts (verifica estructura CycloneDX + cobertura de dependencias del package.json), SBOM CycloneDX 1.7 con 464 componentes trackeado en sbom/gentle-vanguard-sbom.json como artifact de compliance (NORMATIVAS-SBOM exige MUST almacenar SBOM como artifact de release); (2) ADR-002-mcp-workspace-external.md creada (MCP workspace no git-tracked — completa la serie de ADRs 001/003-006; era la única faltante del roadmap); (3) Confirmado que SBOM ya estaba integrado en CI (job sbom-generation en ci.yml genera y sube artifact).

**Why**: Mandato del usuario de avanzar el plan con todas las herramientas y crear lo necesario nativo si falta capacidad — el roadmap de optimización tenía 2 entregables pendientes (SBOM cableado al ecosistema npm + ADR-002).

**Where**: package.json (sbom:generate/sbom:validate), src/generate-sbom.ts (modo --validate), sbom/gentle-vanguard-sbom.json (464 componentes), docs/architecture/decisions/ADR-002-mcp-workspace-external.md, docs/product/ROADMAP.md (milestone v9.0).

**Learned**: El generador SBOM usaba `pnpm sbom` nativo (ya existía) pero NO tenía script npm ni validación — se añadió el cableado completo. La normativa NORMATIVAS-SBOM exige trackear el SBOM como artifact de release (por eso sbom/ va versionado, 648 KB). Commits: 9ac156ed (SBOM + ADR-002), 785e5f57 (milestone v9.0). Verificación final: tests 2/2, watchtower 89/89, typecheck/lint 0 errores. Con esto: 8/8 módulos experimentales activados (gates 6/6), roadmap de optimización 100%, serie de ADRs completa.

---
*Imported from Engram on 2026-09-06*
