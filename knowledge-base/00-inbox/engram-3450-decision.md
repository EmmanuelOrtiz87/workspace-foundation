---
created: 2026-08-31 03:51:28
tags: [engram, decision]
engram_id: 3450
type: decision
---

# PR 172 clean branch and CI hardening

**What**: Con autorización del usuario elegí squash en rama nueva para resolver el historial inválido del PR #171. Creé `bugfix/171-commitlint-history` desde `origin/main`, consolidé el árbol final, corregí whitespace, pasé hooks/pre-push 12/12 y publiqué PR #172. Después endurecí CI: state file aislable para circuit-breaker, witr opcional con skip explícito y formato de los cinco documentos reportados.
**Why**: Desbloquear commitlint histórico sin debilitar governance ni hacer force-push.
**Where**: PR https://github.com/EmmanuelOrtiz87/gentle-vanguard/pull/172; rama `bugfix/171-commitlint-history`; commit remoto `62922c30`.
**Learned**: El test-runner optimizado ejecuta suites en paralelo; cualquier test que escriba `.runtime` compartido necesita namespace/path aislado. El CI remoto ejecuta `pnpm test -- cloud-connectors` pero el test-runner termina lanzando seis suites, por lo que fallos no relacionados pueden aparecer en ese job.

---
*Imported from Engram on 2026-09-06*
