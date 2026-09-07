---
created: 2026-08-17 05:29:21
tags: [engram, architecture]
engram_id: 2868
type: architecture
---

# SLSA provenance signing nativo (DSSE + Ed25519)

**What**: Implementado firma DSSE (Dead Simple Signing Envelope) de statements in-toto v1 con Ed25519 nativo de Node para SLSA provenance — eleva el stack de Build L1 a L2/L3 sin cosign/slsa-verifier (no disponibles en el entorno).
**Why**: El roadmap pedía supply-chain attestation SLSA L3; cosign/slsa-verifier no están disponibles en Windows sin Docker, así que se creó la capacidad nativa en TS (patrón del stack).
**Where**: src/slsa-signer.ts (signStatement, verifyEnvelope, generateKeyPair, keyId), provenance/public-key.pem (commiteada), .runtime/provenance/private-key.pem (gitignored), provenance/gentle-vanguard-provenance.signed.json, tests/unit/slsa-signer.test.ts (10 tests), src/rdd/rdd-core.ts (generateReleaseProvenance firma automáticamente), docs/adr/ADR-0015-slsa-provenance-signing-native-dsse-ed25519.md, package.json (provenance:sign/verify-sig/genkey).
**Learned**: La regla .gitignore `**/*.pem` ignora también la clave pública — se añadió excepción `!provenance/public-key.pem`. El keyid es SHA-256 del SPKI DER. Commits: cea96f90 (signer), b800d0f9 (refresh), 4d0750e0 (RDD integration).

---
*Imported from Engram on 2026-09-06*
