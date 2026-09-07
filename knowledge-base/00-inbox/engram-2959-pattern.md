---
created: 2026-08-22 13:33:08
tags: [engram, pattern]
engram_id: 2959
type: pattern
---

# Gotchas lint/format del stack (eslint, prettier, markdownlint-cli2)

**What**: Serie de gotchas de lint/format resueltos para poner Push Checks verde: (1) eslint tokeniza comentarios de bloque con código dentro — usar comentarios de línea ASCII; (2) prettier check falla por artefactos autogenerados — extender .prettierignore (pnpm-lock.yaml, sbom.json, assets/tokens.*, installer-manifest.json, docs/sessions/, fixtures rotas); (3) markdownlint-cli2 NO lee .markdownlintignore (feature del CLI viejo) — usar .markdownlint-cli2.jsonc con ignorePatterns; (4) fences anidados rotos en MD tragaban secciones enteras como código (rules/DEVELOPMENT-STANDARDS.md, skills).
**Why**: Push Checks agrupa lint/format/markdown como jobs bloqueantes.
**Where**: .prettierignore, .markdownlint-cli2.jsonc, ~220 archivos reformateados (commit a7c47f18), workflow-lint.ts integró js-yaml load estricto que detecta YAML que GitHub rechazaría (fb8b9d61).
**Learned**: reusable-lint.yml ya excluía dirs absorbidos vía globs negados (!skills/**/*.md) — el lint de CI nunca los escanea. Antes de masificar --write, verificar qué incluye realmente el job de CI. README-PUBLIC.md es la fuente que sync-to-public.ts copia como README.md al repo público — editar esa, no README.md directamente.

---
*Imported from Engram on 2026-09-06*
