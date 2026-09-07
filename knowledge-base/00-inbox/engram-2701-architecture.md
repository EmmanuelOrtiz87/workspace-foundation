---
created: 2026-08-09 05:56:05
tags: [engram, architecture]
engram_id: 2701
type: architecture
---

# Proveedor DDG HTML search nativo (fallback chain Firecrawl→DDG→Bing)

**What**: Nuevo proveedor nativo de búsqueda: DuckDuckGo HTML (html.duckduckgo.com/html/) como PRIMER fallback de search en web-crawler.ts, con Bing RSS como segundo fallback. Método ddgSearch() parsea bloques result__a (títulos) y result__snippet (descripciones); decoder de redirects DDG (hrefs //duckduckgo.com/l/?uddg=<encoded> → decodeURIComponent); helper stripTags() nuevo; provider tag 'ddg-html'. Config: ddgSearchUrl añadido al schema zod + config/web-crawler.json. HealthResult.provider ahora 'jina-reader+ddg+bing'. Test nuevo: "fallback search parses DuckDuckGo HTML results (redirect decode)" con mock server local → 14/14 tests PASS.

**Why**: Bing RSS devolvía BASURA para queries de negocio ("customer retention best practices" → foros de city-data.com sobre routers/Starlink). El cuello de botella de adquisición web era el proveedor, no el grading BM25.

**Where**: src/web-crawler.ts (ddgSearch + stripTags + search() chain + HealthResult), config/web-crawler.json, tests/unit/web-crawler.test.ts

**Learned**: Verificación end-to-end: con DDG la misma query pasó de basura a 5/5 relevantes avg 0.84 (Infobip, Salesforce, Qualtrics, Forbes, HubSpot). Cadena queda: Firecrawl (API key) → DDG HTML (cero-config, mejor calidad) → Bing RSS (segundo fallback). DDG HTML endpoint requiere User-Agent de navegador (requestPlain ya lo manda) y el parse depende de la estructura class="result__a" que es estable.

---
*Imported from Engram on 2026-09-06*
