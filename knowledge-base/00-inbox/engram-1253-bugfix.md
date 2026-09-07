---
created: 2026-05-31 20:37:25
tags: [engram, bugfix]
engram_id: 1253
type: bugfix
---

# CodeGraph parser fix - ANSI multi-line output

**What**: Rewrote parsers in codegraph-enrich.ps1 and codegraph-semantic-search.ps1 with state-machine (state 0→1→2) to handle ANSI-formatted multi-line output from codegraph query. Old parsers split lines by whitespace, failing on ANSI color codes wrapping each token.

**Why**: Both scripts produced empty/garbled results because codegraph query outputs lines like [36mKind[0m [37mSymbol[0m [2m(score%)[0m followed by [2m  file.ts:line[0m.

**Where**: scripts/codegraph/codegraph-enrich.ps1, scripts/codegraph/codegraph-semantic-search.ps1

**Learned**: Strip-ANSI via $text -replace '\x1b\[[0-9;]*[a-zA-Z]', '' before parsing. State machine: state 0 (waiting for symbol line ^(\w+)\s+(\S+)\s+\(\d+%\)$), state 1 (got symbol, waiting for ^(.+\.\w+):(\d+)$), state 2 (emit result). enrichment adds Get-Layer, Get-ComplexityTag, Get-CallersCount metadata.

---
*Imported from Engram on 2026-09-06*
