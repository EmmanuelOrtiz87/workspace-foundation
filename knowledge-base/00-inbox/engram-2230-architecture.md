---
created: 2026-07-29 04:10:16
tags: [engram, architecture]
engram_id: 2230
type: architecture
---

# Presentation book system completed

**What**: Sistema completo de presentaciones tipo BOOK para Gentle-Vanguard — 10 páginas HTML interconectadas con diseño Bootstrap 5 dark, cubriendo CADA aspecto del stack.

**Architecture**: docs/presentations/ como sistema multi-página:
- index.html (408L) — Hub principal con hero, stats, 6 capas, 12 cards executive, feature matrix 40+, book index con 10 capítulos, tools ecosystem
- architecture.html (114L) — 6 capas detalladas, 10 DAOs, pipeline 34+65, performance
- autonomy.html (280L) — Auto-Apply Safe, Circuit Breaker, Auto-Escalation, AB Testing, Session Scoring, Norms Learner, Watchtower
- dashboard.html (272L) — WS/HTTP, 7 secciones, i18n en/es/pt-BR, 8 alertas, health API
- quickstart.html (301L) — Setup, comandos, troubleshooting, referencia
- memory-knowledge.html (428L) — Engram (2219 obs), CodeGraph (1410 nodes), Graphify, Nexus DB (10 DAOs), ML Embeddings
- security-governance.html (275L) — Security Orchestrator, Audit, 52 Normatives, Guardrails, Compliance 82/82
- agents-pipeline.html (296L) — 13 agentes, routing rules, 99 pipeline steps, delegación, 118 skills
- operations-cloud.html (259L) — CI/CD, Cloud Connectors, Tracing, State Persistence, Event Sourcing, Saga
- patterns-conventions.html (284L) — Karpathy, SDD, patrones arquitectura, governance, contracts

**Why**: El stack necesitaba documentación tipo book para capacitaciones, inducciones, onboarding y exposiciones. Material profesional para todo público (devs, gerentes, público general).

**Where**: docs/presentations/ (10 archivos, ~3,000 líneas total), apps/web-dashboard/src/types/dashboard.ts (OperationalMetrics interface agregada), apps/web-dashboard/server/real-data.ts (ahora type-safe)

**Learned**: Se eliminó gentle-vanguard-presentation-v8.html (91KB, 2298 líneas) y README.md de presentations. El sistema nuevo es más modular, mantenible y completo.

---
*Imported from Engram on 2026-09-06*
