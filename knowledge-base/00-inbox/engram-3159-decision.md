---
created: 2026-08-25 14:49:41
tags: [engram, decision]
engram_id: 3159
type: decision
---

# Auditoría local-first del trabajo 2026-08-25: mantener todo, sin rollback

**What**: Auditoría independiente del trabajo de la sesión 2026-08-25: verifiqué migración 015 aplicada (db-health: 27 tablas, 15 migraciones), routing learning loop conectado (route-and-delegate → SkillRepo.recordRoutingOutcome, recommend-agent prioriza Nexus con fallback), probe watchtower `/api/health`, provenance filesystem, y re-ejecuté toda la batería: 463 unit + 57 dashboard tests 0 fail, watchtower 96 PASS/1 WARN (rate-limit externo Gemini), typecheck/lint/build/db-health verdes, graphify actualizado (4.644 nodos, hoy 10:48).
**Why**: El usuario perdió créditos a mitad de la sesión previa y pidió validar cumplimiento, misión y alcance local-first del stack antes de aceptar el trabajo.
**Where**: docs/plans/NEXT-SESSION-PLAN-2026-08-25.md, docs/adr/ADR-0017-local-first-operating-model.md, docs/status/CANONICAL-STATUS.md, apps/web-dashboard/server/{auth,rbac,dashboard-source-provenance}.ts, src/ci/{deployment-prerequisites,static-gates}.ts
**Learned**: Veredicto: sin desvíos graves, no rollback. Auth/RBAC dashboard es fail-closed (sin GV_DASHBOARD_TOKEN toda la API 401, login imposible; bypass GV_DASHBOARD_DEV_AUTH=1) — mantenido por gap de seguridad real del audit 2026-08-24, ahora documentado en docs/getting-started/README.md. Gates de deployment son opt-in: modo local exit 0, solo `--promotion` escala a error; mcp-execution-policy.json está vacío (skills:{}), sin impacto local. Cosign/OIDC/LDAP/SSO correctamente NO implementados. Gaps cerrados en esta auditoría: doc de login en getting-started + .test-results/ al .gitignore. Todo el trabajo sigue SIN commitear (HEAD 7784995b, ~150 archivos working tree).

---
*Imported from Engram on 2026-09-06*
