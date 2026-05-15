# Forged Labs — project notes

@AGENTS.md

A running log of brand and design decisions for this project. Keep this current — both Claude chat and the design Claude read it at the start of every new thread.

---

## Company

- **Forged Labs LLC** — software studio
- **Location:** League City, Texas
- **Founded:** 2026
- **Status:** Active, pre-launch
- **Role:** parent / holding entity. Mostly legal-facing — the consumer brands live below it.

## Sibling / child brands

- **AEVYN** — personal app (daily discipline, five pillars: Spirit, Mind, Body, Craft, Life). Owns purple **#8B5CF6**. In development.
- **Heatward** (working name, TBD) — industrial app, post-M7. Will own its own accent color, also TBD. Forged Labs styling must stay distinct from both children.

## Positioning & voice

- "Built for the long game."
- For **two kinds of work** — the patient work of a life, and the careful work of industry. Both built to last.
- **Consistency over hype.** Patient, careful, no quick wins. Slips treated as signal, not collapse.
- No futuristic/loud styles. Studio-tone restraint. Should read as *dignified workshop*, not *startup launch*.

## Landing page

File: `Forged Labs - Color Explorations.html` (canvas) + `landing-page.jsx` / `landing-page.css` (themable component).

### Locked

- All copy in the landing component
- Typography pairing: **Inter** (sans) + **Fraunces** (serif italic accents)
- Page structure: masthead → hero → philosophy → two kinds of work → contact → footer

### Chosen direction

**Obsidian & Sapphire** — dark near-black background, white text, sapphire blue accent.

Palette:
- surface `#0A0B10` / raised `#13151C` / deeper `#06070B`
- text primary `#ECEEF4` / secondary `#9099AA` / muted `#5C6373` / faint `#3A404C`
- accent `#5A86E8` / hover `#4470D2`
- card style: filled
- radius: 12
- atmosphere: none (no grain)

### Brand prominence

Currently at **Level 2 — masthead**: wordmark 22px, weight 600, tracked uppercase, sitting above the hero with a thin rule. Reads as the page's nameplate, not a logo splash. (Level 1 was tiny nav; Level 3 = wordmark replaces hero headline.) Can push to Level 3 if needed.

## Open questions / next

- Heatward final name + accent color
- Logo / wordmark treatment beyond plain type (any mark?)
- Once Obsidian & Sapphire is finalized, test how AEVYN purple sits next to it on a future "products" cross-link

---

## Operating notes (for Claude)

- **Periodic sync reminder:** every few turns, when there's been new substantive activity, remind the user to (a) update `CLAUDE.md` here so it reflects the latest decisions, and (b) re-download it and re-upload to claude.ai Project knowledge so chat-Claude stays current.
- **Update this file proactively** when a decision is made — don't wait to be asked.

---

## Working log

Add new decisions at the bottom, dated, one line each.

- **2026-05-15** — Initial palette exploration, 8 → 4 retained → 4 blue variants added.
- **2026-05-15** — Masthead-level wordmark prominence chosen over tiny nav mark.
- **2026-05-15** — **Obsidian & Sapphire** selected as primary direction.
- **2026-05-15** — Live landing page built at `Forged Labs - Landing.html` (Obsidian & Sapphire, no canvas, no theme picker).
