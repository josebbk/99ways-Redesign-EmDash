# 99Ways — Design System Specification

Source of truth: `reference/logo-specification.md`, `reference/palette.md`, `README.md` in the brand assets repo. This file translates those into implementation tokens. Anything marked **(derived)** is a reasonable default filling a gap the brand docs don't cover — not a hard brand rule — and can be adjusted without breaking brand compliance.

Theme: **dark only** for this homepage. No light-mode toggle is in scope.

---

## 1. Color tokens

Use CSS custom properties. Do not introduce additional colors outside this set.

```css
:root {
  /* Base */
  --color-bg: #292B2A;          /* Graphite — page background */
  --color-text: #F4F3EF;        /* Warm White — primary text */
  --color-text-muted: #B5B8B1;  /* Inverse Muted — secondary text, meta, captions */

  /* Accent */
  --color-accent: #A6BAFF;      /* Inverse Inquiry Blue — links, interactive, focus states */
  --color-action: #6BD98D;      /* Inverse Green — the ONE primary CTA color. Do not use for anything else. */

  /* Structural (derived) */
  --color-border: rgba(181, 184, 177, 0.24); /* Inverse Muted at low opacity — hairline dividers, card borders */
  --color-border-strong: rgba(181, 184, 177, 0.4);
}
```

**Rules:**
- `--color-action` (green) appears on exactly one element type per screen at a time: the primary CTA button. Never on nav links, never as a decorative accent, never twice in the same viewport competing for attention.
- `--color-accent` (blue) is for anything interactive/informational: links, hover states, focus rings, the logo pupils, icon accents.
- No new background shade was specified for "elevated" surfaces (cards, etc). **(derived)** — use `--color-bg` flat everywhere and separate content with `--color-border` hairlines, not background-color shifts. This keeps the page strictly within the approved 4-color logo palette instead of inventing a 5th neutral.
- Never use Performance Green `#147D40` / `#6BD98D` to recolor the logo itself (brand rule, non-negotiable per `README.md`).

---

## 2. Typography

**(derived)** — the brand spec only locks IBM Plex Mono Semibold 600 for the logo's outlined lettering. Confirmed pairing for site-wide use:

- **Headings, nav, labels, buttons, meta/captions:** IBM Plex Mono (Semibold 600 for headings/buttons, Medium 500 for nav/labels/meta)
- **Body copy (bios, excerpts, paragraphs):** IBM Plex Sans (Regular 400, Medium 500 for emphasis)

```css
:root {
  --font-mono: "IBM Plex Mono", monospace;
  --font-sans: "IBM Plex Sans", sans-serif;
}
```

### Scale

| Token | Font | Weight | Desktop | Mobile | Line-height | Use |
|---|---|---|---|---|---|---|
| `--text-display` | mono | 600 | 3.5rem / 56px | 2.25rem / 36px | 1.1 | Hero H1 |
| `--text-h2` | mono | 600 | 2rem / 32px | 1.5rem / 24px | 1.2 | Section titles |
| `--text-h3` | mono | 600 | 1.25rem / 20px | 1.125rem / 18px | 1.3 | Card/founder names |
| `--text-body` | sans | 400 | 1rem / 16px | 1rem / 16px | 1.6 | Paragraphs, bios, excerpts |
| `--text-label` | mono | 500 | 0.875rem / 14px | 0.875rem / 14px | 1.4, letter-spacing 0.02em | Nav, buttons, tags, meta |
| `--text-small` | sans | 400 | 0.8125rem / 13px | 0.8125rem / 13px | 1.5 | Legal/footer fine print |

---

## 3. Spacing

**(derived)** — 4px base scale.

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;
}
```

- Section vertical padding: `--space-24` desktop / `--space-12` mobile.
- Container max-width: `1200px`, horizontal padding `--space-16` desktop / `--space-6` mobile.
- Card internal padding: `--space-6`.

---

## 4. Logo usage rules (binding — from `README.md` / `reference/logo-specification.md`)

- **Header/footer lockup:** full wordmark, dark-background treatment (`logo/wordmark/dark/99ways-wordmark-dark-background.svg`). Minimum visible width **180px**.
- **Compact contexts** (mobile nav collapsed state, favicon-adjacent placements): `logo/compact/dark/99ways-compact-dark-background.svg`. Minimum visible width **64px**. Below 64px, do not scale this master — use the dedicated micro files in `icons/micro/` sized for that exact target.
- **Clear space:** minimum 25% of the logo's rendered cap-height on all sides, unobstructed. Build this into header/footer padding directly — don't eyeball it.
- **Never:** retype the wordmark as live text, alter letter spacing, move the two pupils independently, recolor the mark with green, stretch/distort proportions, isolate a single "9," or place it on a busy/low-contrast field without a neutral holding area.
- **Favicon:** `icons/favicon/99ways-favicon.svg` (has built-in light/dark media-query variants — use as-is).

---

## 5. Components (baseline styling)

**Button — primary (CTA)**
- Background `--color-action`, text `--color-bg`, font `--text-label` weight 600, padding `12px 28px`, no border-radius beyond 2–4px (keep it precise/geometric, not pill-shaped).
- Hover: background darkens ~10%, no color change (stay within palette — don't introduce a hover-specific tint).

**Button — secondary/ghost**
- Transparent background, 1px `--color-border-strong` border, text `--color-text`, same padding/type as primary.
- Hover: border becomes `--color-accent`.

**Link (inline/nav)**
- `--color-text` default, `--color-accent` on hover/active, no underline at rest, underline on hover.

**Card (testimonial filmstrip / blog grid)**
- Background `--color-bg`, 1px `--color-border`, padding `--space-6`, no drop shadows (flat, minimal — shadows read as WordPress-default, avoid).

**Divider**
- 1px, `--color-border`, full-width or between grid columns as needed.

---

## 6. Motion

- Keep interactions minimal: opacity/transform transitions only (150–200ms ease), no bounce/spring easing.
- The logo's pupil motion (per `logo-specification.md`) is documented as a *future* interaction, not part of this v1.0 static release — do not implement pupil animation on this pass unless separately commissioned.
