# Carlos Wosiak — Personal Website

Personal portfolio, prerendered to static HTML with SvelteKit and deployed on Vercel.

**Stack:** SvelteKit 2 · Svelte 5 · Vite 8 · mini.css · adapter-static

## Requirements

Node **22.12+** (`.nvmrc` pins the version used locally — `nvm use`).

## Scripts

```bash
npm install      # install dependencies
npm run dev      # dev server on http://localhost:5173
npm run build    # prerender the site into ./public
npm run preview  # serve the production build
npm run check    # svelte-check
```

## Layout

```
src/
  app.html               page shell: meta, Open Graph, JSON-LD
  app.css                global tokens, mini.css import, landmark resets
  lib/actions/reveal.js  the scroll-reveal action used by every section
  lib/assets/            images, hashed and fingerprinted by Vite
  data/                  content: jobs, projects, education, certificates
  components/            one component per section
  routes/                +layout (prerender) and the single page
```

Content lives in `src/data` — adding a job or a project means editing one array,
not touching markup.
