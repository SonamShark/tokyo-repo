# Tokyo Test Fest 2026 – Conference Participation Report

An interactive, slide-style web report for **Sonam Chophel**, Assistant ICT Officer, Digital Service Development Division (DSD), GovTech Agency, Bhutan.

Built with React, Vite, JavaScript, CSS and Lucide icons.

## Run locally

Requires Node.js 18 or later.

```bash
cd /Users/macbookpro/Desktop/presentation
npm install
npm run dev
```

Open http://localhost:5173/

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serves the build locally
```

## Navigation

| Action | Control |
|---|---|
| Next / previous slide | `→` / `←`, PageDown / PageUp, Next / Prev buttons, swipe on touch screens |
| First / last slide | `Home` / `End` |
| Jump to a slide | Progress dots, or the contents drawer |
| Table of contents | `T` or the list button (close with `Esc`) |
| Full screen | `F` or the full-screen button |

Each slide has a deep link, for example `/#8` opens slide 8. Cards with a chevron expand on click.

## Project structure

```
src/
  data/content.js        All text content (edit this to change wording)
  slides/index.jsx       Slide layouts and the slide order
  components/            Icon, Tag, SlideHeader, ExpandCard
  App.jsx                Deck: navigation, TOC, full screen, progress
  styles.css             Theme and responsive styles
```

Content is kept separate from presentation logic. To reword a slide, edit `src/data/content.js`. To reorder slides, edit the `slides` array at the bottom of `src/slides/index.jsx`.

## Images

- `public/images/ttf-logo.png`: the official Tokyo Test Fest logo, taken from tokyotestfest.com.
- `public/images/tokyo-tower.jpg`: cover and closing background (optional). Suggested photo: "Tokyo Tower, Minato City" by David Kernan, CC BY 4.0, https://commons.wikimedia.org/wiki/File:Tokyo_Tower,_Minato_City.jpg. If the file is absent the cover falls back to the plain navy design, and the photo credit stays hidden. If you use a different photo, update `event.photoCredit` in `src/data/content.js`.

## Content labels

Every slide marks what kind of statement it makes:

- **Topic covered**: taken from the official programme (titles and speakers).
- **My reflection**: personal learning from the event, in the first person. These are not claims of work performed.
- **Proposed for exploration**: possible GovTech/DSD actions. Nothing is stated as implemented.

Session descriptions are based on session titles only. Please review `src/data/content.js` before presenting and confirm the reflections match your own experience.

## Deploy

The build uses relative asset paths (`base: './'`), so it works at a domain root or a sub-path.

### Vercel

1. Push the project to a Git repository and import it at vercel.com/new.
2. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
3. Deploy.

Or with the CLI: `npx vercel --prod`.

### GitHub Pages

1. Push the project to a GitHub repository.
2. Build locally: `npm run build`.
3. Publish `dist/` to the `gh-pages` branch, for example: `npx gh-pages -d dist`.
4. In the repository settings, set Pages to serve from the `gh-pages` branch.

Alternatively, use a GitHub Actions workflow that runs `npm ci && npm run build` and deploys `dist/` with `actions/deploy-pages`.

Because navigation uses URL hashes (`#1` to `#10`), no server rewrite rules are needed.
