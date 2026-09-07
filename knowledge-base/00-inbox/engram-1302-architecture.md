---
created: 2026-06-03 02:48:08
tags: [engram, architecture]
engram_id: 1302
type: architecture
---

# Fine-Tuning System v1.0 — Data Pipeline + Infrastructure

**What**: Created complete fine-tuning infrastructure for domain-specific agents (LoRA). 8 PowerShell scripts + 1 Python stub + 15 Pester tests all passing.

**Why**: v2.29.0+ roadmap item "Agentes con fine-tuning por dominio" — models fine-tuned via LoRA for BA, SAD, DEV, QA agents using session log datasets.

**Where**: scripts/utilities/FINE-TUNING/ (8 scripts), .ft/ (dataset, adapters, benchmarks, registry), .sdd/agentes-fine-tuning/ (9 SDD phases), tests/unit/fine-tuning/ (15 tests), hooks/post-tool-use-log.ps1 (enriched)

**Components**:
- ft-data-collector.ps1 — multi-source extraction (session, engram, skills, routing), 23 records collected
- ft-dataset-builder.ps1 — instruction-tuning JSONL builder, 18 train / 5 val records
- ft-registry.ps1 — CRUD for LoRA adapters, 2 registered (BA, DEV)
- ft-trainer.ps1 — 4 modes: dry-run, local-ollama, api, python-unsloth
- ft-inference.ps1 — inference with TF-IDF fallback
- ft-evaluator.ps1 — TF-IDF baseline benchmark (~700-1200ms latency)
- ft-pipeline.ps1 — end-to-end pipeline orchestrator
- session-enrich.ps1 — enriched session logging integration
- python/train_lora.py — Python LoRA trainer stub with unsloth

**Key decisions**: PowerShell-first data pipeline, TF-IDF fallback always active, adapter registry not git LFS, dry-run as default training mode

---
*Imported from Engram on 2026-09-06*
