---
created: 2026-08-25 14:01:03
tags: [engram, architecture]
engram_id: 3155
type: architecture
---

# Decisión propuesta local-first

**What**: La revisión propone reposicionar Gentle-Vanguard como LOCAL-FIRST: CLI/orquestación, SQLite/Nexus, filesystem `.session`, Engram, CodeGraph, MCP local y dashboard loopback son el núcleo; servidor/SaaS queda como perfil futuro opt-in.
**Why**: Los planes F3 describen Postgres/Redis/Kubernetes/OIDC y multi-instancia como rutas de escala, mientras el estado real verificado es una operación local con deployment gates externos aún bloqueados por inputs del operador.
**Where**: docs/plans/STACK-EVOLUTION-PLAN-2026.md, docs/status/CANONICAL-STATUS.md, docs/stack-manual-full.md, apps/web-dashboard/server/auth.ts, apps/web-dashboard/server/rbac.ts, docs/security/DASHBOARD-ADMIN-STATUS.md, config/deployment-prerequisites.json.
**Learned**: Auth/RBAC local ya existe (sesión opaca persistida, CSRF, rate limit, bootstrap admin, roles viewer/operator/admin); `docs/api/README.md` aún afirma que local no requiere autenticación y debe corregirse. `config/deployment-prerequisites.json` expresa promoción K8s, CNI/NetworkPolicy, sandbox MCP y digests como requisitos de perfil externo, no de uso local.

---
*Imported from Engram on 2026-09-06*
