# Moiz Alam — Portfolio Design System

An editorial design system extracted from **Moiz Alam's personal portfolio** ("faafo / editorial version") — the personal site of a Sydney-based Senior Product Manager. The brand is quiet, confident, and *literary*: soft cream backgrounds, a serif display voice, hairline rules instead of heavy chrome, image-forward work, and a single tightly-rationed Denim-blue accent. It reads more like a well-set magazine spread than a typical tech portfolio.

> **v3** — synced to repo `main`: the brand accent is now **Denim `#5E83AE`** (the slate-blue from the brand palette), replacing the earlier teal `#459BB9`. Denim stays *flat* in dark mode. Red/yellow/green are retained only as rare functional colors — categories still distinguish through labels, not hue. (The repo's `styles.css` aliases the accent as `--blue`.) Elevation also gained a second tier: full-bleed **image cards** now use a deeper **`--shadow-image`** hover lift, and the **All Projects** page is an **image grid** (`layout-image`).
>
> **v2** — softer cream/charcoal palette, image-forward Featured Work + carousel, a dedicated All Projects page, subtle elevation, and a colored primary button. The Garamond MA ligature (decided in the design phase) is retained.

> This system exists so any future page, case study, deck, or experiment can be built in Moiz's voice without re-deriving the rules each time.

---

## Source

This system was reverse-engineered from a single source repository:

- **GitHub:** [`moiz994/portfolio-faafo`](https://github.com/moiz994/portfolio-faafo) (branch `main`)
  - `index.html` — the one-page site (hero, work grid, journey, human side, contact)
  - `styles.css` — the full token + component layer (the source of truth for color, type, spacing)
  - `projects/*.html` + `projects/project.css` — case-study detail template
  - `script.js` — theme toggle + scroll-reveal
  - `hero-illustration.png` — the illustrated full-body portrait that anchors the hero
  - `Moiz Alam SPM Resume.pdf` — résumé (linked from nav/CTAs)

> **Explore the source further.** If you have access, read the repo directly — it is small and legible, and reading the real CSS will always beat guessing. This system captures the *intent* behind that code so you can extend it consistently.

The live site title is **"Moiz Alam — Senior Product Manager."** Positioning line: *"From ambiguity, to clarity, to shipped."*

---

## Who this is for

One person, one product: **Moiz Alam's personal brand.** A Senior PM with ~8 years across AI, mobile, SaaS, EdTech, and marketplaces (Arbisoft / edX, Dubizzle Labs, Rolustech). The portfolio has two faces it must hold at once:

1. **The professional** — sharp, outcome-driven, credible at a senior level.
2. **The human** — a guitarist, gamer, father of twins, and long-suffering Manchester United fan.

The design language is what lets those two coexist without the site feeling either corporate or frivolous.

---

## CONTENT FUNDAMENTALS

How the writing *sounds*. Copy is as much a part of this brand as the type.

**Voice — first person, plain-spoken, quietly confident.** Moiz writes as *"I"* and addresses the reader directly only in CTAs (*"Let's build something."*). No corporate "we," no buzzword fog. <br>
Example hero sub: *"8 years turning unclear problems into shipped products… I don't just manage. I build, I orchestrate, and I move fast."*

**Tone — outcome-first, specific, never boastful.** Claims are always anchored to a number or a timeframe: *"$700K+ in year one,"* *"0 to beta in 14 weeks,"* *"adopted by 200+ employees on day one."* The confidence comes from specifics, not adjectives.

**Casing** — Sentence case everywhere in prose and headings (*"Selected Work,"* *"The human side."*). UPPERCASE is reserved for tracked-out eyebrows/labels only (*"SENIOR PRODUCT MANAGER · SYDNEY"*). Section titles are short and often take a definite article: *"The Journey," "The human side."*

**Punctuation & rhythm** — The em dash and the middot (`·`) are signature connectors (*"Moiz Alam · Sydney · Senior Product Manager"*). Sentences are short and declarative, frequently fragmenting for cadence: *"Product is what I do. This is who I am."* Numbers stay numeric and abbreviated (*"14 wks," "8+," "$700K+"*).

**Emphasis** — Key phrases inside body copy are emphasised by turning to **solid ink + medium weight** (rendered from `<em>` but styled *non-italic*). True *italic* is reserved almost exclusively for the serif display lines (*"to clarity,"* *"something."*) where it adds literary lilt.

**Personality** — Self-aware and warm, with PM-flavoured wit: *"vibe-coding things into existence,"* twins described as *"the best 0 to 1 I've ever shipped — twice, at the same time,"* United fandom reframed as roadmap optimism. The humour is dry and earned, never meme-y.

**Emoji** — **None.** Zero emoji anywhere. Arrows and glyphs do the lightweight signalling instead (`↓ ↗ → ·`).

---

## VISUAL FOUNDATIONS

**Overall vibe** — Editorial / print-inspired. Think a confident magazine feature, not a SaaS landing page. Whitespace is the primary design material; hairline rules organise the page; a serif carries the voice.

**Color** — A warm, low-chroma world. Light mode is built on `--bg #F9F5ED` (soft cream paper) with `--fg #2A2A2A` warm-charcoal ink — deliberately *never* pure black/white. A ladder of warm greys (`--off #706B63 → --mid #999390 → --rule #C8C3B8`) handles hierarchy. Dark mode flips to a soft **charcoal** `#2A2A2A` (not true black) with cream `#F9F5ED` text. There is **one focused brand accent — Denim `--accent #5E83AE`** (a soft slate-blue; it stays *flat* in dark mode rather than lifting). It appears as text on a faint `--accent-soft` fill (tags, links), the solid **primary button**, the hero's italic display line, and small hover moments. Category distinctions are made through **labels, not hue** — every category tag is the same Denim. Three functional hues — `--red #C42B20`, `--yellow #9E7200`, `--green #1A6B35` — are kept for *rare* semantic use (status, the odd data point), **never** for category coding. *(The repo's `styles.css` names the accent `--blue`; this system keeps the semantic `--accent` and exposes `--blue` as an alias.)*

**Type** — A two-family system. **EB Garamond** (serif) is the brand voice: all display, section titles, headings, and even the *numerals* in stats/metrics are set in it, weight 400, with negative letter-spacing (`-0.8px` to `-2px`) so large sizes feel tight and intentional. **DM Sans** carries everything functional — body (weight **300**, the signature light body), labels, buttons, nav, tags. Body leading is generous (1.6–1.85). Display lines mix roman and *italic* on alternating lines for rhythm.

**Spacing & layout** — Centered editorial column, `max-width: ~1100px`. Section padding is large and consistent (`96px` vertical desktop). The homepage **Featured Work** is image-forward — four projects in a horizontal **carousel** (`layout-scroll`: full-bleed photo, dark protection gradient, white text, prev/next arrows). A **"View all projects →"** CTA leads to a dedicated **All Projects** page (`projects.html`), which lays everything out as a 12-column **image grid** (`layout-image`: full-bleed photo cards on a `repeat(12, 1fr)` grid, each spanning 4 columns, with the deeper `--shadow-image` hover lift). The kit also ships alternate work layouts: a **bento grid** (featured cards span 7, secondary 5, standard 4), a **stats** layout (big serif numeral + row), and a text-only **vertical list** (`v-list`) as a lighter alternate for the All Projects page. Journey and Human rows use a **`140px 1fr`** label-rail grid. Full-width **1px hairline rules** (`--rule`) separate every section.

**Backgrounds** — Flat cream. **No gradients on surfaces.** The hero is now a clean **illustrated full-body cutout portrait** (`assets/hero-illustration-v2.png`, transparent PNG) that *floats free* on the cream — the earlier pale-blue blob was removed in v2. The one place gradients appear is the **protection gradient** over full-bleed image cards in the work carousel (a bottom-up dark fade for white-text legibility). Case-study heroes use wide full-bleed photography (`aspect-ratio: 21/8`). No repeating patterns, no textures, no noise.

**Imagery** — Two registers: (1) the **illustrated portrait** — a clean, semi-realistic digital illustration, cool/neutral palette (blue shirt, black jeans), no background; and (2) **editorial photography** in case studies — natural, slightly warm, documentary feel, always full-bleed and `object-fit: cover`. Photos sit inside hairline-bordered frames with small (`8px`) radius.

**Cards** — Quiet. Fill `--card` (one step off the background), a **1px `--rule` border**, `14px` radius, `26px` padding. They rest **flat** and lift on hover (`translateY(-4px)` + the soft `--shadow-hover` `0 12px 32px rgba(0,0,0,.07)`). Featured cards carry an **image cover** (rounded top, `object-fit: cover`, scales `1.04` on hover). Full-bleed **image cards** (the work carousel, the All Projects grid) instead take the deeper **`--shadow-image` `0 16px 40px rgba(0,0,0,.18)`** on hover — a heavier lift that reads against photography. Inside: a top row (index number + category tags), a serif heading + light body, and — outside the carousel — a footer separated by a hairline rule with tracked-out pill labels and a `Case study →` link.

**Borders & elevation** — Hairlines do most of the structural work: `1px solid var(--rule)` rules and one-step fill changes organise the page. Elevation is **subtle, not absent** (v2 change from the original shadow-free doctrine), and comes in **two tiers**: quiet content/cream cards use `--shadow-hover` on hover; full-bleed image cards use the deeper `--shadow-image` (and a dark protection gradient, `--overlay`). Radii: `14px` cards, `28px` pill buttons/tags, `~12px` small tag chips, `8px` image frames.

**Buttons** — Pill-shaped (`border-radius: 28px`, `~12px 26px` padding, `0.85rem` weight 500–600). **Primary** = solid **Denim `--accent`** fill with `--accent-ink` (cream) text — the colored brand button. **Secondary / ghost** = transparent with `1px --rule` border + `--off` text, moving toward ink on hover. The nav résumé is a small `--card`-fill pill.

**Tags & chips** — Pill category tags (`wtag`) carry the single accent at low opacity (`--accent-soft` ≈10% fill, `--accent-line` ≈25% border) with `--accent` as the text color; a neutral variant (org chips like "Arbisoft") uses faint ink fill. Timeline company chips work the same way. Footer pills are tracked-out uppercase with no fill.

**Motion** — Restrained and tasteful. Color/theme transitions run `0.35s ease` globally. Scroll-reveal: elements fade up `18px → 0` over `0.55s ease` via IntersectionObserver (`.reveal → .visible`). Hover lifts are tiny (`translateY(-1px to -3px)`). The theme-toggle sun/moon uses a **springy overshoot** easing `cubic-bezier(0.34, 1.56, 0.64, 1)` over ~0.6s. No parallax, no big scroll-jacking, no bounce on content.

**Hover states** — Text links & nav: `--off → --accent` (toward Denim). Cards: border `--rule → --off`, a `-4px` lift + soft shadow, image cover scales `1.04`, and the `Case study →` link shifts to `--accent`. Buttons: primary drops opacity to `~0.88` + tiny lift; secondary/ghost border + text move toward ink. All hover transitions ~`0.2s`.

**Press states** — Minimal; the theme toggle scales to `0.88` on `:active` (a quick squish). Content elements don't have explicit pressed states beyond the hover lift settling.

**Transparency & blur** — Used in exactly one place: the **frosted navbar** (`backdrop-filter: blur(14px)` over `--nav-bg` at 88% opacity). Accent tag fills also use low-alpha rgba. Otherwise surfaces are opaque.

**Fixed elements** — A slim (`60px`) fixed top navbar with the `MA` monogram, anchor links, a pill **Resume ↓** button, and the sun/moon **theme toggle**. A vertical **"Scroll"** label (`writing-mode: vertical-rl`) pinned bottom-right of the hero.

**Dark mode** — A first-class, persisted feature (`localStorage 'theme'`), not an afterthought. It is a true mode flip (soft charcoal paper, bone text), transitioning smoothly because color transitions are global. The Denim accent holds *flat* (`#5E83AE`, no lift); the three functional hues do brighten for dark legibility.

---

## ICONOGRAPHY

Iconography is **deliberately minimal** — this brand mostly avoids icons in favour of type and glyphs.

- **No icon library / icon font.** The site ships exactly **two inline SVG icons**, both hand-set in the markup: a **sun** and a **moon** for the theme toggle. They are line-style, `stroke-width: 2`, `stroke-linecap/linejoin: round`, drawn in a 24×24 viewBox, using `currentColor`. (See `assets/icon-sun.svg`, `assets/icon-moon.svg` — copied from source.) If you need additional icons, match this spec: **2px round-cap line icons** (Lucide / Feather are the closest CDN match — flagged as a substitution since the source only contains the two toggle icons).
- **Glyphs, not icons, do the signalling.** Unicode arrows carry almost all directional/affordance meaning: `↓` (scroll / download), `↗` (external link), `→` (forward / next), and the middot `·` as a separator. These are typed directly into copy and inherit the text color.
- **The logo — the MA ligature.** The primary mark is `MA` set in **EB Garamond, weight 500, letter-spacing −0.14em**, so the M's stem and the A's leg draw tight into a single serif mark (not two loose initials). Monochrome only — ink on paper, or bone on black; never an accent color, never with effects. The **Garamond reference asterisk** (`*`) is the companion symbol for spaces too small or busy for the ligature (favicon alternate, dividers). Full construction, sizing, clear-space, and do/don't rules live in `Logo System.html`.
- **No emoji, ever.** (Restated because it matters to the brand.)
- **No decorative icon cards, no icon-in-circle bullets.** Categories are communicated with text pills, not pictograms.

---

## INDEX — what's in this system

**Root foundations**
- `README.md` — this file (context, content + visual foundations, iconography, index)
- `colors_and_type.css` — all color tokens (light + dark) and the semantic type scale
- `Logo System.html` — the MA ligature logo system (construction, light/dark, sizing, clear space, companion asterisk, do/don't)
- `Logo Directions.html` — the original canvas of explored logo directions (the ligature was chosen)
- `Accent Experiment.html` — the accent study that resolved on Denim `#5E83AE` (tags, buttons, links, cards, stats, dark)
- `SKILL.md` — agent-skill manifest for using this system in Claude Code

**Fonts** — EB Garamond + DM Sans are loaded from Google Fonts via `@import` in `colors_and_type.css` (both are open-source families; no local files bundled).

**Assets** (`assets/`)
- `hero-illustration-v2.png` — current illustrated full-body portrait (transparent; blob removed, floats free on cream)
- `hero-illustration.png` — the original v1 portrait (kept for reference)
- `icon-sun.svg`, `icon-moon.svg` — the two theme-toggle icons
- `favicon-512/180/32/16.png` — MA-ligature favicons; `favicon-dark-512/32.png` — dark-UA variants. Wire with `<link rel="icon">` + `prefers-color-scheme` media (see `ui_kits/portfolio/index.html`).

**Preview cards** (`preview/`) — small specimen cards powering the Design System tab (colors, type, spacing, components, brand).

**UI kit** (`ui_kits/portfolio/`)
- `index.html` — interactive recreation of the full one-page portfolio: image-forward **Featured Work carousel** (prev/next), a dedicated **All Projects** page, the journey timeline, human side, and a case-study detail view.
- JSX components: `Navbar`, `Hero`, `AboutStrip`, `WorkCard` / `WorkGrid` (carousel) / `AllProjects`, `Journey`, `Personal`, `Contact`, `Footer`, `Button`, `Tag`, plus a `CaseStudy` view.

---

## Quick start for a new page

1. Link `colors_and_type.css` (or copy its `:root` block).
2. Set `body { background: var(--bg); color: var(--fg); font-family: var(--font); font-weight: 300; }`.
3. Headings & display → `var(--serif)`, weight 400, negative letter-spacing.
4. Separate sections with full-width `1px solid var(--rule)` hairlines; keep content in a `~1100px` centered column.
5. Subtle elevation only (flat rest → soft hover lift). Pill buttons, Denim primary. Sentence case. No emoji. Numbers stay specific.
6. Wire the theme toggle + `.reveal` observer from `script.js` if you want dark mode + scroll reveal.
