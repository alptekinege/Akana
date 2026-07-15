# Changelog

All notable changes to Akana are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/), and this project adheres to
[Semantic Versioning](https://semver.org/) — mirrored by git tags (`vX.Y.Z`).

## [Unreleased]

## [0.5.0] - 2026-07-15

### Added
- **Pattern components:** accordion, breadcrumb, pagination, empty-state
  (standalone HTML, monochrome state via weight/border).
- **`patterns.html`** — composed showcase: list, form, empty, help accordion.
- Gallery + About links for all new surfaces.

## [0.4.0] - 2026-07-15

### Changed
- **Rebrand: Kern → Akana** (*ak* + *ana* — berraklık / kaynak; Turkish
  cultural resonance). Product name, docs, API, CSS prefix, localStorage key.
- CSS class prefix `k-*` → `ak-*`; `body.kern` → `body.akana`.
- JS global `kern` → `akana` (`akana.icon` / `akana.mount` / `akana.icons`).
- Theme storage key `kern-theme` → `akana-theme`.
- Agent skill: **akana-design-system**.

### Added
- Name etymology in README + DESIGN.md overview.

## [0.3.0] - 2026-07-15

### Added
- IBM Plex font stack (SIL OFL 1.1) + OFL-IBM-Plex.txt + FONTS.md.
- Components: checkbox, radio, select, textarea, tabs, alert.
- Research: `docs/DESIGN_SYSTEMS_RESEARCH.md`.

### Changed
- Replaced Space Grotesk + Inter + JetBrains Mono with IBM Plex.

## [0.2.0] - 2026-07-15

### Added
- 3-layer tokens, fluid type, FOUC-free theming, a11y focus/motion.
- Components: modal, toggle, table.
- Docs: TOKENS.md, CHANGELOG, CONTRIBUTING.

## [0.1.0] - 2026-07-15

### Added
- Initial system (then named Kern): monochrome, text-first, offline fonts.
- Five components: button, card, input, badge, nav.
