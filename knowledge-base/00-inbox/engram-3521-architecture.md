---
created: 2026-08-31 18:17:47
tags: [engram, architecture]
engram_id: 3521
type: architecture
---

# Academy visual alignment across GV apps

**What**: Harmonized GV app visuals to Academy's canonical pill buttons, purple-to-cyan gradient, glass cards, sticky blurred headers, and 0.28s view fade.
**Why**: Academy was user-validated as the reference look and other apps had drifted.
**Where**: assets/gv-design-system.css; apps/content-cms/src/{App.tsx,contentos.tsx}; apps/prompt-studio/src/{App.tsx,styles.css}; apps/web-dashboard/src/{App.tsx,styles/index.css}; apps/command-center/public/index.html; apps/gv-analytics/src/{App.tsx,styles.css}.
**Learned**: Academy glass tokens are rgba(26,32,53,0.6) and rgba(168,85,247,0.18) in dark mode. Dashboard/CMS tests remain green; Command Center has no build script, so its inline HTML was validated by HTTP/source checks instead.

---
*Imported from Engram on 2026-09-06*
