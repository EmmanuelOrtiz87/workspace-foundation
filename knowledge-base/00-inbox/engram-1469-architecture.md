---
created: 2026-07-03 12:50:55
tags: [engram, architecture]
engram_id: 1469
type: architecture
---

# Knowledge Base Analysis - Final Recommendation

**What**: Análisis comparativo completo para implementar base de conocimiento dedicada en Gentle-Vanguard.

**Why**: Engram es para memoria sessionada, archivos .md dispersos sin estructura, y el stack ya tiene infraestructura de embeddings pero no una KB dedicada.

**Where**: Stack actual: Engram (SQLite ~10MB), ~100+ .md en docs-archive, .atl/skill-embeddings.json (TF-IDF), Document Analysis Skill con sentence-transformers, ChromaDB referenciado en ai-agent-design-skill.

**Learned**:
- Stack es 100% local-first (documentado en LOCAL-FIRST-POLICY.md)
- No hay Obsidian, MongoDB, Notion, Logseq integrados actualmente
- MongoDB aparece en 48 lugares pero SOLO como skill de soporte (database-nosql-skill)
- ChromaDB ya referenciado como vector store en el stack
- El proyecto tiene filosofía local-first: "your code never leaves your machine"

**Recomendación final**: Obsidian (vault local) por: 1) Ya trabajan con markdown, 2) Plugins de IA disponibles, 3) Vault portable como folder, 4) Sin overhead operacional vs MongoDB, 5) Alineado con filosofía local-first

---
*Imported from Engram on 2026-09-06*
