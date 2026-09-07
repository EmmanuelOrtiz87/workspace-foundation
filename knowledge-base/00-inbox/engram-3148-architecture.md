---
created: 2026-08-25 13:44:20
tags: [engram, architecture]
engram_id: 3148
type: architecture
---

# Routing learning loop implementation plan

**What**: Revisé el flujo real: routing_rules ya es tenant-scoped desde migración 012, SkillRepo expone hits y DatabaseManager delega esas APIs; recommend-agent aún solo usa JSON/STATIC_MAP y route-and-delegate solo escribe hits.jsonl.
**Why**: Implementar aprendizaje local verificable sin tocar learning-engine.ts ni lanzar modelos en tests.
**Where**: apps/web-dashboard/server/database/repositories/MigrationRunner.ts, SkillRepo.ts, manager.ts, src/recommend-agent.ts, src/route-and-delegate.ts.
**Learned**: La integración segura debe conservar recommend() síncrono mediante un adaptador Nexus opcional; la recomendación puede consultar reglas tenant-scoped y el outcome debe actualizar hit_count/success_count/success_rate transaccionalmente.

---
*Imported from Engram on 2026-09-06*
