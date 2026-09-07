---
created: 2026-08-09 05:05:13
tags: [engram, architecture]
engram_id: 2697
type: architecture
---

# M5 web selectiva: web-research-select.ts + bug firma search()

**What**: M5 web selectiva materializado: src/web-research-select.ts — flujo end-to-end search (Firecrawl→Jina+Bing fallback) → grade BM25 (retrieval-grader CRAG) → filter → persistir a .session/web-research/<slug>.json. Output incluye TODOS los resultados con scores (no solo relevantes) para calibración de threshold.

**Why**: Cierre del premortem backlog M5: el web-crawler buscaba pero no seleccionaba resultados por relevancia; el retrieval-grader existía desconectado.

**Where**: src/web-research-select.ts (NUEVO)

**Learned**: BUG CRÍTICO — la firma del crawler es `search(query: string, limit?: number)`, NO `search({query, limit})`. Pasar objeto → query undefined → Bing devuelve basura ("Object" MDN/Cambridge). Tras el fix: 5/5 relevantes, avg 0.95, verdict relevant (TypeScript oficial, docs, W3Schools, TS 7.0 blog, Wikipedia). Comando: npx tsx src/web-research-select.ts --query "..." --limit 5 --threshold 0.3

---
*Imported from Engram on 2026-09-06*
