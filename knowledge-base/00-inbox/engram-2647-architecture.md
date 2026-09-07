---
created: 2026-08-08 05:53:29
tags: [engram, architecture]
engram_id: 2647
type: architecture
---

# Web-crawler fallback nativo Jina Reader + Bing RSS (89/89 health)

**What**: Implementado fallback nativo dual-provider en web-crawler: sin FIRECRAWL_API_KEY, el stack ahora opera con Jina Reader (scrape, r.jina.ai) + Bing RSS (search, &format=rss). Eliminado el único WARN de salud del stack. Resultado: 89/89 PASS / 0 WARN / 0 FAIL en watchtower:health.

**Why**: El usuario pidió operar con todas las herramientas del stack sin depender de claves externas. Autorizó absorber proveedores gratuitos como nativos.

**Where**: src/web-crawler.ts (fallback + health + cacheKey con providerTag), src/web-crawler-init.ts (log), src/web-crawler-cli.ts, config/web-crawler.json (fallbackEnabled true), tests/unit/web-crawler.test.ts (13/13 PASS), src/core/maintenance-watchtower.ts (check 'provider ready' — pendiente de commit por witr ajeno mezclado). Commit: f14de13b.

**Learned**: (1) Jina Reader (r.jina.ai) BLOQUEA User-Agents de navegador (Chrome → 403) pero acepta curl/8.0.1, Wget, PowerShell, Googlebot. (2) Bing search HTML sirve página de bot-detection a fetch de Node (sin bloques b_algo ni h2); el endpoint RSS (&format=rss) devuelve XML limpio parseable — es el camino robusto. (3) DuckDuckGo html y lite devuelven 202 (bot detection); s.jina.ai (search de Jina) devuelve 401 sin auth. (4) El cache SHA256 puede envenenar resultados: si una ejecución fallida guarda [], el cache lo devuelve para siempre — cacheKey debe incluir providerTag ('fb'/'fc'). (5) PowerShell no puede decodificar base64url de Bing con FromBase64String directo (ruido); en Node Buffer.from(padded,'base64') funciona tras reemplazar -/_ por +/. (6) El watchtower check de web-crawler lee el snapshot .runtime/web-crawler-health.json (generado por web-crawler-init.ts), no el filesystem directo.

---
*Imported from Engram on 2026-09-06*
