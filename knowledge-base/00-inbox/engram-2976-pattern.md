---
created: 2026-08-23 19:56:55
tags: [engram, pattern]
engram_id: 2976
type: pattern
---

# Motor de migración nativa de skills en marketplace

**What**: Motor de migración nativo en apps/web-dashboard/server/marketplace-api.ts que corrige y normaliza SKILL.md del catálogo (skills/, 175 entries): parser YAML con block scalars (> |) y valores multilínea plegados, validateSkillStructure con vocabulario canónico ampliado (usage-like: When to Use/Workflow/Execution Steps/API Reference; examples-like: Examples/Ejemplos/API Reference), migrateSkillContent() que deriva secciones SOLO del contenido real de cada skill, applyMigration()/applyAllMigrations() con backup ORIGINAL-SKILL.md + MIGRATION.json status APPLIED. Rutas API: POST /api/marketplace/migrations/apply (bulk) y POST /api/marketplace/:id/apply-migration. Frontend Marketplace.tsx espeja las mismas reglas.
**Why**: El validador original marcaba 168/175 skills como inválidas por defectos propios (parser ingenuo + vocabulario rígido), no por datos malos. Objetivo: 175/175 válidas alcanzado.
**Where**: apps/web-dashboard/server/marketplace-api.ts, apps/web-dashboard/server/websocket-server.ts, apps/web-dashboard/src/components/Marketplace.tsx, skills/*/SKILL.md
**Learned**: (1) YAML `description: >` con contenido indentado tipo "Skill: X" requiere excluir solo keys SIN indentación (/^\w[\w-]*:/) al colectar bloques — la regex /^\s*\w/ clasifica contenido como key. (2) Node en Windows falla writeFileSync con "UNKNOWN: unknown error" (sharing violation de AV/indexer) aunque PowerShell escriba bien — resolver con retry + backoff creciente (5 intentos, 250ms*i). (3) tsx -e compila a CJS sin top-level await — usar archivo .mts. (4) Sanitizar SIEMPRE texto derivado de frontmatter (indicadores de bloque, comillas, bullets) antes de inyectarlo en secciones generadas.

---
*Imported from Engram on 2026-09-06*
