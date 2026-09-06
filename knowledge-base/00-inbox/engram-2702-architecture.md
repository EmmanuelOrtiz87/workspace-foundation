---
created: 2026-08-09 05:56:12
tags: [engram, architecture]
engram_id: 2702
type: architecture
---

# M5 deep mode: scrape + BM25 sobre contenido completo

**What**: Modo --deep en web-research-select.ts (M5): scrapea los top-N candidatos (--deep-limit, default 3) y grada BM25 sobre el markdown completo de la página (cap 20K chars). deepScore REEMPLAZA el snippet score (BM25 sobre contenido real gana a snippets cortos para queries largas/multi-intención). Cada candidato incluye deepScore y scrapeError si el scrape falla. Output incluye mode: 'snippet' | 'deep'.

**Why**: El grading sobre título+descripción es débil para queries largas; la adquisición selectiva real requiere gradear sobre contenido completo.

**Where**: src/web-research-select.ts (modo --deep), package.json (script web:select)

**Learned**: Verificado con DDG: "customer retention best practices" --deep --deep-limit 2 → Infobip y Salesforce con deepScore 1 (contenido completo scrapeado vía Jina Reader), Qualtrics/Forbes/HubSpot con scores 0.86/0.74. El deep mode es el que da adquisición selectiva real. Comando: npm run web:select -- --query "..." --deep --deep-limit 3

---
*Imported from Engram on 2026-09-06*
