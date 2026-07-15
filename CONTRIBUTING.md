# Contributing to Kern

Kern is intentionally small: a **zero-build, offline, monochrome** design system.
Keep it that way. This guide covers the two things you'll extend: **components**
and **tokens**.

## Principles (do not break)

1. **Monochrome only.** No accent color, no gradient, no tinted surface. State =
   weight + border, not hue.
2. **Text-first.** Hierarchy from type and spacing. Icons assist, never decorate.
3. **No images.** Icons are inline SVG only.
4. **Offline.** Fonts are bundled woff2. No CDN `<link>` tags, no build step.
5. **Tokens are the single source of truth** — see `tokens.css` and `TOKENS.md`.

## Adding a component

Write it **one by one**, each in its own file under `components/`.

1. Create `components/<name>.html`.
2. In `<head>`, link the shared assets with relative paths:
   ```html
   <link rel="stylesheet" href="../assets/fonts.css">
   <link rel="stylesheet" href="../assets/tokens.css">
   <link rel="stylesheet" href="../assets/components.css">
   ```
   and before `</body>`:
   ```html
   <script src="../assets/icons.js"></script>
   ```
3. Put `class="kern"` on `<body>`.
4. Build with **semantic tokens** (`--bg`, `--surface`, `--text`, `--ink`,
   `--border`, `--space-*`, `--fs-*`). Never hardcode a `--gray-*` primitive or
   a raw color/spacing value in a component.
5. Add icons with `<span class="k-icon" data-icon="name"></span>`. For an
   **icon-only button**, set `aria-label` on the `<button>`; `icons.js` will
   keep the icon exposed to screen readers.
6. Implement real states (hover / focus / disabled / active). The global
   `:focus-visible` ring and `prefers-reduced-motion` handling cover a11y.

Verify: open the file directly in a browser — renders in light + dark, focus
rings visible, no console errors, icons mounted.

## Missing components (priority)

Add these next, in order:

- **P0:** Modal (focus trap), Toggle (`role="switch"`), Table (`aria-sort`)
- **P1:** Tooltip, Tabs, Command Palette (`dialog`+`combobox`+`listbox`), Dropdown
- **P2:** Toast/Alert, Accordion, Progress, Skeleton, Pagination, Empty State

## Extending tokens

- **Add a primitive?** Only if it's a new raw value with no meaning yet
  (e.g. a new gray step). Name it `--gray-NNN`.
- **Add a semantic token?** Reference a primitive via `var(--gray-*)`. Name it
  by intent: `--color-{role}-{variant}`.
- **Add a component token?** Name it `--{component}-{property}-{state}`
  (e.g. `--button-bg`). Reference a semantic token, not a primitive.
- **Dark mode?** Re-bind the semantic layer only — never the primitive ramp.

Do **not** introduce a build pipeline (Style Dictionary / Tokens Studio /
Tailwind). Kern is single-platform web; CSS custom properties are the runtime layer.

## Versioning

- Follow [Semantic Versioning](https://semver.org/).
- Bump the version in `CHANGELOG.md` and create a matching git tag (`vX.Y.Z`).
- Document every user-facing change in `CHANGELOG.md` under `## [Unreleased]`.
