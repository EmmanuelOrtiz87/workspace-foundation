---
created: 2026-05-21 04:47:09
tags: [engram, architecture]
engram_id: 978
type: architecture
---

# Startup knowledge gap fix: mem_search in Phase B

**What**: Added mandatory step 10 in CLAUDE.md Phase B — agent MUST run `mem_search "lessons learned"` at session start to load up to 5 recent observations into working state. Also reflected in NORMATIVAS-SESSION.md Phase B step 10. **Why**: The #1 gap in agent autonomy was that every session started fresh — past learnings (bug fixes, decisions, patterns) were ignored because the startup protocol never loaded them. **Where**: CLAUDE.md, rules/NORMATIVAS-SESSION.md **Learned**: Engram already had the data (`mem_search` works), but the startup protocol never called it. The fix was purely procedural — adding a line to the startup checklist. Always check the protocol before assuming the tooling is insufficient.

---
*Imported from Engram on 2026-09-06*
