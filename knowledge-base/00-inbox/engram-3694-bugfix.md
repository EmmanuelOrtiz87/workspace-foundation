---
created: 2026-09-06 03:25:08
tags: [engram, bugfix]
engram_id: 3694
type: bugfix
---

# Import gemas Google funcionando: 3 bugs de parsing + RPC HcT8bb de detalle completo

**What**: Import de gemas Google funcionando de verdad (v4.5.1). 3 bugs de parsing resueltos: (1) parser length-prefixed del batchexecute roto → reemplazado por extracción regex JSON-aware de payloads "wrb.fr","<rpcid>","<json>"; (2) RPC de lista CNgdBe trae prompt truncado a ~100 chars → descubierto y validado RPC de detalle HcT8bb con payload ["<gem_id>"] que devuelve instrucciones COMPLETAS (la librería de referencia Gemini-API lo define como GET_BOT pero nunca lo usa); (3) semántica invertida: payload [4] devuelve custom, [2] devuelve system (al revés de la doc de la librería) → clasificación estable por forma de id (hex=custom, kebab=sistema).

**Why**: usuario no lograba importar sus gemas pese a login exitoso — la sesión era válida pero el parsing devolvía 0 gemas silenciosamente.

**Where**: src/ops/gemini-browser-import.ts (parser + HcT8bb + hasFlag), apps/prompt-studio (4.5.1), docs/reference/PROMPT-STUDIO-GEMS.md §5f (commit a41aa9c0).

**Learned**: (1) El formato length-prefixed de batchexecute de Google cambió/rompió el parser regex (\d+)\n — usar extracción JSON-aware por rpcid en su lugar. (2) HcT8bb ["<gem_id>"] = detalle completo del bot (prompt íntegro) — descubrimiento propio no documentado en la librería de referencia. (3) La respuesta puede venir con orden/semántica de payloads invertida vs doc — clasificar por forma del id, no por orden. (4) getArg genérico rompe con flags booleanos al final de argv (indexOf=-1 → argv[0] truthy... o undefined en el último) — usar includes() para presencia. (5) page.evaluate de tsx falla con "__name is not defined": definir window.__name=(f)=>f en el contexto. (6) Depurar con dumps del raw real (.runtime/gemini-import-debug.txt) antes de reescribir parsers.

---
*Imported from Engram on 2026-09-06*
