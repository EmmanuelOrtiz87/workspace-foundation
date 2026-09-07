---
created: 2026-06-01 01:22:16
tags: [engram, architecture]
engram_id: 1265
type: architecture
---

# Stack estandarizado - source frontmatter + skills huérfanas

**What**: Estandarización completa del stack GV. source: GV-native agregado a 136 skills nativas. rust-backend-skill + usage-metrics-skill registrados en auto-delegation.json (skillToAgentProfile + keywordMappings). Stack ahora 100% consistente: 172 skills con source: metadata, 0 skills sin entry en auto-delegation, 0 broken links, 0 duplicate triggers.
**Why**: Sin metadata consistente no se puede analizar el stack programáticamente ni distinguir skills nativas de importadas. Skills huérfanas no son ruteables por el auto-delegation router.
**Where**: skills/ (172 skills), config/auto-delegation.json (keywordMappings.GOV + keywordMappings.DEV)
**Learned**: La regex (?s)^---\s*\n.*?\n--- captura frontmatter YAML entre separadores. La metadata source: es clave para trazabilidad y auditoría automática.

---
*Imported from Engram on 2026-09-06*
