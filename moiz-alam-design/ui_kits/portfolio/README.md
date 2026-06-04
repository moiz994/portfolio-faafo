# Portfolio UI Kit

An interactive, high-fidelity recreation of **Moiz Alam's one-page portfolio** and its case-study detail view, rebuilt from the source repo [`moiz994/portfolio-faafo`](https://github.com/moiz994/portfolio-faafo).

Open `index.html` to use it. It's a self-contained React (Babel-in-browser) prototype.

## What's interactive
- **Theme toggle** — sun/moon in the nav, springy overshoot animation, persists to `localStorage`.
- **Work cards → case study** — click any card in *Selected Work* to open its detail page; "Next Project" cycles through all eight; the logo / "← All Projects" returns home.
- **Scroll reveal** — journey & human-side rows fade up as they enter the viewport.

## Files
| File | Contents |
|---|---|
| `index.html` | Entry point — loads React, Babel, tokens, and all component scripts |
| `kit.css` | Component styles (adapted from source `styles.css` + `project.css`); tokens come from `../../colors_and_type.css` |
| `components.jsx` | `Navbar`, `Footer`, `ThemeToggle`, `Button`, `Tag`, `useReveal` |
| `sections.jsx` | `Hero`, `AboutStrip`, `WorkCard`, `WorkGrid`, `Journey`, `Personal`, `Contact` |
| `casestudy.jsx` | `CaseStudy` detail view |
| `app.jsx` | Project / journey / personal data + view routing |

## Notes
- The hero portrait is the real asset (`assets/hero-illustration.png`). Case-study hero & gallery images use Unsplash URLs (placeholders, exactly as the source site does) — swap them for real product screenshots in production.
- Components are deliberately cosmetic recreations: simple, modular, reusable. They reproduce the existing design — they don't reinvent it.
- Each `.jsx` exports its components to `window` so the separate Babel scripts can share scope.
