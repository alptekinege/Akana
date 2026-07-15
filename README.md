# Kern

A **monochrome, text-first** design system. Ink-on-paper, icon + text driven,
**no accent color**, **no decorative images**. Fonts are bundled locally, so it
runs fully offline — just open a file in a browser.

> Hierarchy comes from typography, spacing, and 1px borders — not from color
> or imagery.

## What's inside

- **3 bundled font families** (woff2, offline): Space Grotesk (display),
  Inter (UI), JetBrains Mono (labels/meta). Latin + Latin-ext, so Turkish and
  other extended characters render.
- **A monochrome token set** — single ink ramp, neutral surfaces, light + dark.
- **An inline SVG icon set** (no image files) — `assets/icons.js`.
- **5 standalone components**, one per file in `components/`, each runnable alone.

## Structure

```
Kern/
  DESIGN.md          # formal token spec (machine-readable, linted)
  AGENTS.md          # how other agents consume / extend this system
  README.md          # this file
  index.html         # gallery / showcase (theme toggle)
  about.html         # the system's parts, explained
  assets/
    fonts/           # bundled .woff2 (offline)
    fonts.css        # @font-face (local)
    tokens.css       # colors, type scale, spacing, radii, motion
    components.css   # shared component styles
    icons.js         # inline SVG icon set + kern.icon() / kern.mount()
  components/         # ONE simple component per file, standalone + runnable
    button.html
    card.html
    input.html
    badge.html
    nav.html
  scripts/
    download_fonts.py  # re-bundle fonts if needed
    check_icons.js     # verify every used icon exists
```

## Quick start

No build step, no server. Open `index.html` (or any file under `components/`)
directly in a browser. Toggle light/dark from the gallery header.

## Theming

Light is the default. Dark follows `prefers-color-scheme` and can be forced with
`<html data-theme="dark">` or `data-theme="light"`.

## For agents (adding a component)

See `AGENTS.md`. The rule in brief:

> Write a few simple HTML and JavaScript components **one by one**, each in its
> **own file** under `components/`. Keep each file self-contained and runnable,
> linking the shared `assets/` and using the tokens in `tokens.css` — never
> hardcoding values.

## Verified

- `DESIGN.md` passes Google's `@google/design.md` lint.
- `icons.js` passes `node --check`; every icon used is defined.
- Gallery renders with zero console / JS errors.
