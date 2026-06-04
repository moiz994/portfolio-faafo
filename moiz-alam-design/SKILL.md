---
name: moiz-alam-design
description: Use this skill to generate well-branded interfaces and assets for Moiz Alam's personal portfolio brand (editorial PM portfolio), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here
- `README.md` — full brand context: content fundamentals (voice/tone/copy rules), visual foundations, iconography, and an index of every file.
- `colors_and_type.css` — all color tokens (light + dark mode) and the semantic type scale. Link or copy the `:root` blocks. Fonts (EB Garamond + DM Sans) load from Google Fonts via `@import` here.
- `assets/` — the illustrated hero portrait (`hero-illustration.png`) and the two theme-toggle icons (`icon-sun.svg`, `icon-moon.svg`).
- `preview/` — small specimen cards for every foundation & component.
- `ui_kits/portfolio/` — an interactive React recreation of the full portfolio (home + case-study views). Lift `kit.css` and the `.jsx` components for high-fidelity reuse.

## The five rules to never break
1. **Soft cream, never pure black/white.** `--bg #F9F5ED`, `--fg #2A2A2A` warm charcoal (dark mode flips to charcoal `#2A2A2A` / cream `#F9F5ED`).
2. **Serif voice, sans body.** EB Garamond (400, negative letter-spacing) for all display/headings/numerals; DM Sans **300** for body.
3. **Hairlines + two-tier elevation.** 1px `--rule` lines separate sections & define cards; cards rest flat and lift on hover. Quiet/cream cards use `--shadow-hover`; full-bleed image cards (work covers, All Projects grid) use the deeper `--shadow-image` + a dark protection gradient.
4. **One Denim accent.** `--accent #5E83AE` (stays flat in dark) is the only brand accent — tags, links, hover, and the solid primary button. Category meaning comes from labels, not hue. Red/yellow/green exist only as rare functional colors. (Repo `styles.css` aliases this as `--blue`.)
5. **Sentence case, specific numbers, no emoji.** Confidence comes from `$700K+` and `14 wks`, not adjectives. Unicode glyphs (`↓ ↗ → ·`) do the signalling.
