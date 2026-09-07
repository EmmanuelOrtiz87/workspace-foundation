---
created: 2026-09-02 13:08:24
tags: [engram, decision]
engram_id: 3621
type: decision
---

# gv-design-system v2.0.0 oficial (Etapa 3 migración v2 Premium)

**What**: Etapa 3 de docs/design/06-migration-plan-v2-premium.md — packages/gv-design-system adoptó oficialmente tokens v2 Premium. tokens.json re-mapeado (solo valores, nombres --gv-* congelados, + meta.version 2.0.0 y meta.canon → docs/brand/TOKENS-v2.json); src/cli/build-tokens.ts reescrito como CLI valida+regenera (src css/ts + dist css/ts/tailwind/figma/css-modules).
**Why**: El paquete seguía en el alpha #121212/Orbitron pese a BRAND-DECISION-2026-09-01; además npm run build:tokens apuntaba a un archivo inexistente y el viejo scripts/build-tokens.mjs generaba --gv-$schema y un dist/tokens.ts con TS inválido.
**Where**: packages/gv-design-system (src/tokens/*, src/cli/build-tokens.ts, src/cli/sync.ts, src/mcp/server.ts v2.0.0, DESIGN.md, README.md, package.json), assets/gv-design-system.css (header FROZEN), AGENTS.md (sección design-system), docs/brand/BRAND-GUIDELINES-v2.md, docs/design/06-migration-plan-v2-premium.md.
**Learned**: El MCP server lee tokens desde src/tokens/tokens.ts (no dist) vía '../tokens/tokens.js' con tsx — regenerar ese archivo es lo que actualiza list_tokens. gv-analytics ya traía un override :root con los valores v2 esperando esta regeneración (comentario "package regeneration is handled in etapa 3"). tsc del paquete tiene errores preexistentes solo en src/components/* (module.css sin declaraciones). apps/gv-design-system-catalog ya no existe (reemplazado por Design Hub :8095).

---
*Imported from Engram on 2026-09-06*
