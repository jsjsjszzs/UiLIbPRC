# PRC Design System

A from-scratch design system built from a short brief only — no codebase, Figma file, or brand assets were attached to this project. Nothing here is copied from an existing PRC product; it is an original flat, rounded, gray-surfaced system built to the brief below, ready to be corrected against real brand material.

**Source of this system:** written brief only — "PRC Test DS", instructing a flat design system with heavy corner radius, gray fill surfaces, and stroke-free buttons/inputs. No Figma link, GitHub repo, or codebase path was provided.

## What PRC is

Unknown beyond the name — no product, audience, or copy examples were supplied. Treat "PRC" as a placeholder brand name until real material arrives.

## Design direction chosen

- **Flat**: no borders/strokes anywhere except the one unavoidable divider inside list rows; no shadows on static surfaces (cards, inputs, badges, tags). The single exception is the Dialog and Toast, which float above content and need a shadow to read as elevated.
- **Heavy corner radius**: 12/20/28/36px steps plus a pill radius, used aggressively — buttons, switches, checkboxes and tags are fully pill/rounded-square shaped.
- **Gray surfaces**: a warm 11-step neutral gray scale carries almost all surface contrast (app background → card → sunken → raised), so depth reads from fill-stacking, not borders or shadow.
- **One accent color** ("Ember", a warm orange) carries brand, primary actions, and focus states.

## Content fundamentals

No product copy was supplied, so no tone/voice rules could be derived. Placeholder copy in the UI kit ("Accounts", "New account", "Past due") is plain, functional B2B-SaaS English, sentence case, no emoji, no exclamation points — a safe generic default, **not** a documented brand voice. Flag real copy examples so this section can be written for real.

## Visual foundations

- **Color**: warm gray neutral scale (`--gray-50`…`--gray-900`) for nearly everything; one accent scale (`--accent-50`…`--accent-700`, "Ember" orange `#ff5a36`) for brand/primary actions and focus rings; flat semantic colors for success/danger/warning used only as small dots, badges, or tinted backgrounds — never as large fills.
- **Type**: Manrope (600–800) for display/headings, Inter (400–600) for body/UI text — loaded via Google Fonts CDN (`tokens/fonts.css`). Fallback stack is generic sans-serif.
- **Spacing**: 4px base unit, steps at 4/8/12/16/20/24/32/40/48/64/80/96px.
- **Backgrounds**: solid flat gray fills only. No photography, illustration, gradients, patterns, or textures anywhere in this system — nothing of that kind was provided, so none was invented.
- **Animation**: minimal and functional only — 120/180/260ms fades, scales and color transitions on `cubic-bezier(.2,.8,.2,1)`. No bounce, no decorative motion.
- **Hover state**: `brightness(0.92)` filter on filled surfaces (buttons, icon buttons) — never a border or outline appears on hover.
- **Press state**: scale down to 0.96 (buttons) / 0.92 (icon buttons) — no color shift beyond the existing hover darkening.
- **Borders**: none. Every component that would traditionally use a 1px stroke (inputs, buttons, cards, tags) uses a flat fill instead. The single hairline in the system is the row divider inside a Card's list variant (`--divider`), used only to separate list rows, never as a component's own edge.
- **Shadows**: `--shadow-overlay` / `--shadow-overlay-sm` exist only for Dialog and Toast/Tooltip — anything that floats above the page. Static, in-flow surfaces (Card, Input, Badge, Tag) carry zero shadow.
- **Focus**: a 2px solid dark ring (`--focus-ring`, offset 2px) — never a colored glow.
- **Layout**: no fixed/sticky chrome rules defined yet (no real screens to derive them from); the Console UI kit uses a simple static sidebar + scrolling content pane as a generic placeholder.
- **Transparency/blur**: none used — the Dialog scrim is a flat 45%-black overlay, not a blur.
- **Corner radii**: `--radius-sm` 12px, `--radius-md` 20px, `--radius-lg` 28px, `--radius-xl` 36px, `--radius-pill` 999px. Inputs/cards use md/lg; buttons/switches/tags/checkboxes use pill or sm.
- **Cards**: flat gray fill (`--surface-card`), `--radius-lg`, no border, no shadow. A `raised` variant swaps to white (`--surface-raised`) for stacking on top of a gray section — still no border or shadow.

## Iconography

No icon source (font, sprite sheet, or SVG set) was provided. The UI kit and component cards use a handful of plain Unicode glyphs (×, ⋯, +) as functional placeholders only — **this is a stand-in, not a system**. Recommended next step: adopt a CDN icon set matching the flat/rounded aesthetic (e.g. Lucide or Phosphor, regular weight) once real product screens or a codebase are available to confirm the actual set in use.

## Assets

No logo was supplied. Wherever a mark would appear (thumbnail, Console sidebar), the brand name "PRC" is rendered as plain type in Manrope — do not treat this as a real logo. `assets/` is currently empty; drop in a real logo/wordmark file and it will be wired into `thumbnail.html` and the UI kit on request.

## Components

All components are original, in the absence of a source inventory defining one — a standard flat/rounded set sized to a typical B2B console product.

**Forms** (`components/forms/`): Button, IconButton, Input, Select, Checkbox, Radio, Switch
**Feedback** (`components/feedback/`): Badge, Tag, Toast, Tooltip
**Surfaces** (`components/surfaces/`): Card, Dialog
**Navigation** (`components/navigation/`): Tabs

### Intentional additions
None beyond the standard set — no source constrained or expanded the inventory.

## UI kits

`ui_kits/console/` — a generic B2B "accounts" console screen (sidebar nav, stat cards, filterable account list, new-account dialog) demonstrating every component together. This is an original layout, not a recreation of any real PRC product (none was provided).

## Index

- `styles.css` — root stylesheet, `@import`s only
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css` (shadow/motion), `fonts.css` (Google Fonts import)
- `components/forms|feedback|surfaces|navigation/` — one `.jsx` + `.d.ts` + `.prompt.md` per component, one `*.card.html` per directory
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, "no strokes" principle)
- `ui_kits/console/index.html` — demo console screen
- `assets/` — empty; no source imagery/logo was provided
- `thumbnail.html` — project tile
- `SKILL.md` — Claude Code–compatible skill wrapper for this system
