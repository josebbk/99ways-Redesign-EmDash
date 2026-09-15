# 99Ways — Asset Path Reference

Paths below are relative to the `assets/` directory the CLI agent has access to, mirroring the structure documented in the brand repo's own `MANIFEST.md`. Verify these resolve — if the mount point differs from `assets/`, adjust the prefix only, not the paths themselves.

---

## 1. Assets confirmed available (pulled per your note)

| Use | Path | Notes |
|---|---|---|
| Header/footer wordmark (dark theme) | `assets/logo/wordmark/dark/99ways-wordmark-dark-background.svg` | 455.7135 × 129.6533 viewBox. Min render width 180px. |
| Compact mark (dark theme) | `assets/logo/compact/dark/99ways-compact-dark-background.svg` | 146 × 101 viewBox. Min render width 64px. |
| Favicon | `assets/icons/favicon/99ways-favicon.svg` | Has built-in light/dark `prefers-color-scheme` variants — use directly, don't fork per-theme. |
| Apple touch icon | `assets/icons/apple-touch/99ways-apple-touch-icon-180.png` | 180×180, opaque Warm White field — use as-is for `<link rel="apple-touch-icon">`. |

## 2. Available in the repo but not currently used in this spec

Listed for completeness — pull if a later section needs them (e.g. social sharing, dark-mode edge cases):

- `raster/wordmark/` and `raster/compact/` — PNG fallbacks (1024w/2048w, 512/1024 square) if SVG isn't viable in some render context.
- `social/avatar/99ways-avatar-warm-white-1024.png` — square profile avatar, not a homepage element.
- `icons/micro/*` — 16/24/32/48px optical derivatives, for favicon-scale contexts smaller than the compact mark's 64px floor.
- `masters/` — editable source SVGs. **Do not ship these to production** — they're for design edits only.

## 3. Assets NOT in the brand repo — need sourcing before build

These are content images from the current live site (WordPress media library), not part of the new brand assets package. The CLI agent won't find them in `assets/`. Either re-download from the URLs below and place them in a `content/` (or equivalent) directory, or pull them through EmDash's WordPress migration/import path if you're using that for the media library generally.

**Testimonial screenshots (Section 4, filmstrip — 9 images, in display order):**
1. `https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.46.12.webp`
2. `https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-20-at-20.10.05-e1761003445793.webp`
3. `https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.39.31.webp`
4. `https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.40.23.webp`
5. `https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.33.00.webp`
6. `https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.29.51.webp`
7. `https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.37.38.webp`
8. `https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.47.35.webp`
9. `https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.46.37.webp`

**About Us photos (Section 5):**
- Iman Nazari: `https://99ways.io/wp-content/uploads/2026/07/2026-05-26-17.45.07.jpg`
- Moein Heshmati: `https://99ways.io/wp-content/uploads/2026/07/cropped_circle_image-9.webp`

**Academy blog post thumbnails (Section 6):** not captured in the fetched markup (the live homepage doesn't render post-card thumbnails in the accessible content) — pull these from each post's featured image via the EmDash WordPress import rather than hand-sourcing per URL.

**Video (Section 3):** YouTube embed, ID `STouQwJZ4bY` — no local asset needed, embed directly.

## 4. Explicitly removed — do not source

- The frog mascot image (`Gemini_Generated_Image_hd7mpohd7mpohd7m-removebg-preview.webp` and its cropped favicon variant) — dropped per brand decision, do not migrate or re-host it.

## 5. Open items requiring a human decision before final build

- Hero replacement visual (Section 2) — not yet designed.
- "Book Intro Call" destination URL — was a placeholder `#` on the live site.
- Google Maps embed dark-mode treatment (Section 8) — default light embed vs. static styled alternative.
