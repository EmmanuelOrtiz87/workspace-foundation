---
created: 2026-08-29 21:28:04
tags: [engram, bugfix]
engram_id: 3345
type: bugfix
---

# Watchtower embeddings y Kimi health

**What**: Reconstruí localmente el índice de embeddings con el generador determinista y confirmé el estado del proveedor kimi-2-5 sin llamadas API.
**Why**: Watchtower reportaba skill-embeddings.json stale (~53h) y Kimi unhealthy.
**Where**: `.atl/skill-embeddings.json`, `.atl/ml-embeddings/`, `.runtime/model-health.json`, `config/model-health.json`, `src/skills/skill-embedder.ts`.
**Learned**: El embedder es TF-IDF/char-ngram local, generó 419 skills y 1115 términos sin APIs. Kimi conserva `AuthFailure` (58 detecciones, `Unauthorized`), cooldown ya expirado; el modelo activo es `opencode-go/gpt-5.6-luna`. `smart-model-router health-check kimi-2-5` no prueba red para proveedores API: devuelve el estado cacheado/unknown. La configuración global tiene endpoint remoto y header x-api-key presente, pero no se imprimió su valor; resolver requiere proveedor/credencial válida. No ejecutar `--clear` porque solo borra historial y no repara autenticación.

---
*Imported from Engram on 2026-09-06*
