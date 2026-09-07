---
created: 2026-07-03 12:49:36
tags: [engram, architecture]
engram_id: 1468
type: architecture
---

# Knowledge Base Analysis - MongoDB vs Obsidian

**What**: Análisis comparativo para implementar base de conocimiento dedicada en Gentle-Vanguard, reemplazando el almacenamiento disperso actual (.md + Engram).

**Why**: Engram es para memoria sessionada (no knowledge base), archivos .md dispersos sin estructura, y el stack ya tiene infraestructura de embeddings (TF-IDF + sentence-transformers) pero no una KB dedicada.

**Where**: Stack actual: Engram (SQLite ~10MB), ~100+ .md en docs-archive, .atl/skill-embeddings.json (TF-IDF), Document Analysis Skill con sentence-transformers.

**Learned**:
- Stack ya tiene ChromaDB referenciado en ai-agent-design-skill (vector store)
- MongoDB referenciado en 48 lugares del proyecto pero solo como skill de soporte, no como storage interno
- ML router ya usa embeddings TF-IDF para skill routing
- No existe sistema de búsqueda semántica sobre el conocimiento acumulado

**Recomendación**: Obsidian (vault local) sobre MongoDB por: 1) Ya trabajan con markdown, 2) Plugins de IA disponibles, 3) Vault portable como folder, 4) Sin overhead operacional vs MongoDB que requiere servidor

---
*Imported from Engram on 2026-09-06*
