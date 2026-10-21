# CLAUDE.md

Personal website for Alex Kramer, a senior backend/cloud engineer (Python, AWS).
Purpose: a fast, simple portfolio site to support a job search targeting AI startups
(backend / platform / MLOps roles). It should look clean and load instantly. It does not need to be flashy.

## Goals
- Home / about page: short bio, current role, focus areas
- Projects: portfolio projects with a short write-up, stack, and repo link each
- Resume: page + downloadable PDF
- Contact: email + GitHub + LinkedIn links (no contact form, no backend)
- Optional later: blog / short technical notes in Markdown

## Non-goals
- No CMS, database, auth, or server-side code
- No analytics or tracking scripts unless explicitly requested
- No heavy JS frameworks for simple pages

## Stack
- Site: Astro, fully static output (no SSR, no Cloudflare adapter), Tailwind CSS
- Content: Markdown/MDX via Astro content collections
- Hosting: Cloudflare Pages, connected to the GitHub repo
  - Build command: `npm run build` · Output directory: `dist`
  - Push to `main` → production deploy; every PR/branch → preview URL
- Domain: none yet; the site runs on its `*.pages.dev` URL. A custom domain will be
  added later via Cloudflare. Don't hardcode a domain anywhere: read the site URL from
  the `site` setting in `astro.config.mjs` so canonical links, Open Graph URLs, and the
  sitemap update in one place.
- Headers and redirects: `public/_headers` and `public/_redirects` (Cloudflare Pages format)

## Repo layout
```
src/
  pages/        # routes
  components/   # reusable UI
  layouts/      # page shells
  content/      # projects/ and posts/ as Markdown
  content.config.ts  # content collection schemas
public/         # static assets, resume PDF, favicon, _headers, _redirects
```

## Commands
- `npm install` — install deps
- `npm run dev` — local dev server
- `npm test` - run unit tests
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built site locally
- `npm run lint` / `npm run format` — ESLint + Prettier
- `npm run check` — `astro check` for type and content-schema errors
- Deploys happen automatically through Cloudflare Pages on push. Do not run
  `wrangler pages deploy` or change Cloudflare settings unless asked.

## Conventions
- TypeScript in strict mode for any scripts/components
- Mobile-first, responsive layouts; test at 375px and 1280px widths
- Accessibility: semantic HTML, alt text on every image, visible focus states, AA color contrast
- Performance: no client-side JS by default (Astro islands only when needed); use `astro:assets` for images
- Support light and dark mode via `prefers-color-scheme`
- Keep components small; prefer composition over configuration
- Every page gets a unique `<title>`, meta description, and Open Graph tags
- Generate `sitemap.xml` (via `@astrojs/sitemap`) and `robots.txt`

## Content rules
- Never invent facts about Alex: employers, dates, metrics, project details, or quotes.
  If content is missing, leave a clearly marked `TODO:` placeholder and tell me.
- Write in first person, plain and direct; no buzzword padding.
- Project write-ups follow: problem → what I built → stack → what I learned.

## Guardrails
- Never commit secrets, API tokens, or `.env` files
- Never force-push to `main` or rewrite shared history
- Don't delete content files without asking