---
created: 2026-08-25 02:52:38
tags: [engram, architecture]
engram_id: 3106
type: architecture
---

# Dashboard Admin UI implemented

**What**: Completed the dashboard Admin UI tranche: new route /admin with AdminPanel component (principals list + memberships + role badges, create principal, per-membership role change, revoke sessions, delete with confirm, 403/409 error surfacing) and CSRF-aware API client (src/lib/api.ts apiFetch auto-injects X-GV-CSRF from gv_dashboard_csrf cookie on mutations). Wired into App.tsx navigation (UserCog icon). 5 component tests; dashboard suite 57/57; build green.
**Why**: Plan gate "UI admin solo tras API + auditoría" was satisfied by RBAC v1 tranche.
**Where**: apps/web-dashboard/src/lib/api.ts NEW; apps/web-dashboard/src/components/AdminPanel.tsx NEW; apps/web-dashboard/src/components/AdminPanel.test.tsx NEW; apps/web-dashboard/src/App.tsx (lazy import + /admin route + nav link); docs/security/DASHBOARD-ADMIN-STATUS.md updated to "RBAC v1 complete".
**Learned**: (1) testing-library getByText throws on multiple matches — use getAllByText for repeated badges. (2) Dashboard build (tsc strict) catches type errors the root typecheck misses — always run both. (3) CSRF cookie is intentionally NOT HttpOnly so JS can echo it in X-GV-CSRF header.

---
*Imported from Engram on 2026-09-06*
