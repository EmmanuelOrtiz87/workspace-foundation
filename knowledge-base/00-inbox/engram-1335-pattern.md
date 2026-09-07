---
created: 2026-06-05 03:50:31
tags: [engram, pattern]
engram_id: 1335
type: pattern
---

# CI/CD Expansion — Docker + workflows + integration tests

**What**: Created CI/CD Expansion feature with Dockerfiles, docker-compose test services, GitHub workflows, and integration tests\n**Why**: Required for building, testing, and security-scanning the dashboard server and web-dashboard in CI\n**Where**: Dockerfile (root), apps/web-dashboard/Dockerfile, apps/web-dashboard/nginx.conf, docker-compose.test.yml, .github/workflows/docker-validate.yml, .github/workflows/integration-tests.yml, tests/integration/api-health.test.ts\n**Learned**: Root Dockerfile uses stage 1 for MCP build, stage 2 runs both vite dev server and websocket server via concurrently on ports 3000/8080. Dashboard Dockerfile uses nginx:alpine to serve Vite build output. docker-compose.test.yml extended with 5 new services all on gv-test-network. Integration tests cover API health, CORS, WebSocket connectivity with ws package. Workflows use docker/build-push-action with GHA cache and Trivy for scanning.

---
*Imported from Engram on 2026-09-06*
