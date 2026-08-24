# AGENTS.md — VBKD Website

> This file captures key principles, tech choices, and best practices for any
> human or AI agent working on this codebase.

---

## 1. Project Overview

Website for the **Verein Botanische Kunst Deutschland (VBKD) e.V.** — a German
non-profit association for botanical art and artists. The site content is
mostly in German (with some English translations inline) and presents the
association's mission, member galleries, news, and membership information.
It is a statically pre-rendered React SPA deployed to GCore Object
Storage / Edge CDN (not Netlify).

---

## 2. Tech Stack

| Layer              | Technology              | Version / Notes                                   |
| ------------------- | ------------------------ | --------------------------------------------------- |
| Framework          | React                   | 19.x                                                |
| Language           | TypeScript              | ~5.9                                                |
| Build tool         | Vite                    | 7.x                                                 |
| SSR / SSG          | Vike                    | Pre-rendered (SSG) by default                       |
| Styling            | Tailwind CSS            | v4 (via `@tailwindcss/vite`)                        |
| MDX pages          | MDX                     | `@mdx-js/rollup` with remark-frontmatter (static legal/info pages only, no blog) |
| Gallery lightbox   | react-photoswipe-gallery / photoswipe | Full-size image viewer for member galleries |
| Image hosting      | GCore Object Storage    | S3-compatible; images served via CDN URL, no on-the-fly transforms |
| Hosting            | GCore Object Storage + Edge CDN | Static deploy via custom S3-compatible upload script |
| Deploy tooling     | `@aws-sdk/client-s3`    | Used in `scripts/deploy-gcore.mjs` to push `dist/client/` and `images/` to GCore |
| Package manager    | npm                     | lockfile committed                                  |

There is **no Netlify, no Mux video, no shop, and no blog** in this project —
those belonged to an earlier, unrelated template and do not apply here.

---

## 3. Folder Structure

```
├── AGENTS.md                  ← You are here
├── content/
│   └── gallery/                ← One .tsx component per member gallery (hand-authored/generated)
├── pages/                      ← Vike file-system routing (URLs mirror the old verein-botanischekunst.de site)
│   ├── +config.ts              ← Global Vike config (prerender, title, description, lang: 'de')
│   ├── +Head.tsx                ← Default <head> meta tags
│   ├── +Layout.tsx              ← Root layout (imports RootLayout)
│   ├── _error/+Page.tsx         ← 404 / error page
│   ├── index/+Page.tsx           ← Home page (/)
│   ├── uber-uns/+Page.tsx        ← Über uns (/uber-uns)
│   ├── mitglieder/+Page.tsx      ← Gallery index (/mitglieder) — lists all members as GalleryCards
│   ├── @slug/                    ← Individual member gallery pages at root (e.g. /maxim-shirshin)
│   │   ├── +route.ts              ← Route string: /@slug (lowest precedence — literal pages always win)
│   │   ├── +Page.tsx              ← Renders the matching member's gallery Component
│   │   └── +onBeforePrerenderStart.ts ← Provides slugs to prerender, from `galleries` registry
│   ├── news/+Page.mdx             ← News (/news) — card grid, content edited directly in MDX
│   ├── mitgliedschaft/+Page.mdx   ← Membership info (/mitgliedschaft), German + English
│   ├── kontakt/+Page.tsx          ← Contact page (/kontakt) — form `action=""` left blank, no backend yet
│   ├── impressum/+Page.mdx        ← Legal notice (/impressum)
│   ├── datenschutz/+Page.mdx      ← Privacy policy (/datenschutz)
│   ├── workshops-and-shows/+Page.mdx    ← Workshops index (/workshops-and-shows)
│   ├── workshops-in-hessen/+Page.mdx    ← Regional workshop pages (also -bayern, -niedersachsen, -thueringen)
│   ├── botanische-aquarellmalerei/+Page.mdx ← Online workshop page
│   ├── ausstellung-marz-2023/+Page.mdx  ← Founding exhibition (Gründungs-Ausstellung)
│   ├── vbkd-ausstellung-2024-in-seligenstadt/+Page.mdx ← "Ein Klostergarten" 2024 exhibition
│   ├── botanische-zeichnungen-von-bettina-bucker/+Page.mdx ← Guest exhibition
│   ├── baw-2025/+Page.mdx               ← Botanical Art Worldwide 2025
│   ├── orchids-orchids-orchids/+Page.mdx ← WOC 2026 Dresden exhibition
│   └── orchideen-ausstellung/+Page.mdx  ← Exhibitor CV list (links to CDN-hosted PDFs)
├── public/                     ← Static assets (favicon, robots.txt, Satzung-VBKD.pdf, etc.)
├── images/                     ← Local image staging folder, gitignored; source for GCore uploads
├── scripts/                    ← One-off/maintenance Node scripts (see Section 9)
├── src/
│   ├── components/
│   │   ├── Header.tsx           ← Site nav (Startseite, Galerie, News, Workshops & Shows, Über uns, Mitgliedschaft, Kontakt)
│   │   ├── Footer.tsx
│   │   ├── NavLink.tsx
│   │   └── ui/                  ← Small design-system components
│   │       ├── Button.tsx
│   │       ├── ButtonLink.tsx
│   │       ├── CDNImage.tsx      ← Renders `${VITE_CDN_URL}/images/{srcPath}`
│   │       ├── Content.tsx        ← Page-width container (`size`: default/sm/md)
│   │       ├── GalleryCard.tsx    ← Card used on the gallery index
│   │       ├── GalleryLightbox.tsx← PhotoSwipe wrapper + item (`GalleryLightboxWrapper`/`GalleryLightboxItem`)
│   │       ├── Heading.tsx
│   │       ├── Layout.tsx         ← `Grid`/`Col` helpers for multi-column gallery layouts
│   │       └── Prose.tsx
│   ├── data/
│   │   └── galleries.ts         ← Single registry of all member galleries (slug, title, description, coverImage, Component)
│   ├── layouts/
│   │   └── RootLayout.tsx       ← Header + main + Footer wrapper
│   ├── styles/
│   │   └── global.css           ← Tailwind directives + theme variables
│   └── types/
│       └── mdx.d.ts             ← TypeScript declarations for .mdx imports
├── vite.config.ts               ← Vite plugins: react, tailwind, mdx, vike
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── package.json
```

There is no `src/data/blogPosts.ts`, `shopItems.ts`, or `heroCards.ts` — those
data files do not exist in this project.

---

## 4. Routing (Vike)

- **File-system based**: `pages/uber-uns/+Page.tsx` → `/uber-uns`
- **Parameterised routes**: `pages/@slug/+route.ts` exports the route string `/@slug`
- **Rendering mode**: SSG globally (`prerender: true` in `pages/+config.ts`). Site language is set to `lang: 'de'`.
- **Switching to SSR later**: Remove `prerender: true` and deploy a Node.js server (no adapter is currently configured).
- **Navigation**: Use standard `<a href="...">` tags — Vike handles client-side navigation automatically.
- **Active link detection**: Use `usePageContext()` from `vike-react/usePageContext` to get `urlPathname` / `routeParams`.
- **URLs mirror the old WordPress site** (`verein-botanischekunst.de`) wherever a page was migrated, e.g. `/uber-uns`, `/kontakt`, `/mitglieder`, `/maxim-shirshin`. This was a deliberate migration decision — don't rename these back to English/generic paths.

### Root-level member gallery routing

Member galleries live at root URLs (e.g. `/maxim-shirshin`) via a parameterised
Route String `/@slug` in `pages/@slug/+route.ts`. Per [Vike's routing
precedence](https://vike.dev/routing-precedence), plain Filesystem Routing
pages (like `pages/kontakt/`) always take priority over a parameterised Route
String, so this can never collide with any other literal top-level page.

`pages/@slug/+onBeforePrerenderStart.ts` reads slugs from the `galleries`
array in `src/data/galleries.ts` and returns `/{slug}` for each. Adding a new
member gallery means:

1. Creating a `.tsx` component in `content/gallery/` (see Section 6 for the pattern).
2. Importing and registering it (slug, title, description, coverImage) in `src/data/galleries.ts`.

All consumers (gallery index at `/mitglieder`, the `@slug` page, prerender
list) import from this single registry.

---

## 5. MDX Pages

MDX is used only for a handful of **static content pages** — there is no blog.
Existing MDX pages: `pages/mitgliedschaft/+Page.mdx`, `pages/impressum/+Page.mdx`,
`pages/datenschutz/+Page.mdx`. Each imports `Content`, `Heading`, and `Prose`
from `src/components/ui` directly inside the `.mdx` file and mixes JSX with
Markdown content.

The MDX pipeline uses two remark plugins configured in `vite.config.ts`:

1. `remark-frontmatter` — parses an optional YAML frontmatter block.
2. `remark-mdx-frontmatter` (with `{ name: 'frontmatter' }`) — exposes parsed
   YAML as a named export called `frontmatter`.

TypeScript types for `.mdx` imports are declared in `src/types/mdx.d.ts`
(currently modeled after a blog-style frontmatter shape with `title`, `slug`,
`date`, `excerpt`, `lang` — update this if MDX pages start using different
frontmatter fields).

---

## 6. Member Galleries

Each member gallery is a hand-authored/generated `.tsx` file in
`content/gallery/` (e.g. `MaximShirshin.tsx`). The typical pattern:

```tsx
import { Prose } from '@/components/ui/Prose'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { Grid, Col } from '@/components/ui/Layout'

export default function MaximShirshin() {
  return (
    <Grid>
      <Col lg={12} md={12} sm={12}>
        <GalleryLightboxWrapper>
          <Grid contained={false}>
            <Col>
              <GalleryLightboxItem
                localPreview="gallery/maxim-shirshin/image-1.jpg"
                localFull="gallery/maxim-shirshin/image-1-full.jpg"
                alt=""
                title="Rote Papageitulpe, Tulipa x gesneriana"
                width={1080}
                height={1350}
              />
              <Prose className="text-center text-sm">
                <p>Rote Papageitulpe, Tulipa x gesneriana</p>
              </Prose>
            </Col>
            {/* ...more <Col> items */}
          </Grid>
        </GalleryLightboxWrapper>
      </Col>
    </Grid>
  )
}
```

- `localPreview` / `localFull` are image paths relative to the CDN's
  `/images/` root (matching files under the local `images/` staging folder).
- `GalleryLightboxItem` renders the preview via `CDNImage` and opens a
  PhotoSwipe lightbox with the full-resolution image when `localFull` is set;
  if omitted, the image is not clickable.
- `Grid`/`Col` (in `src/components/ui/Layout.tsx`) provide simple responsive
  column spans (`sm`/`md`/`lg` props map to Tailwind `col-span-*` classes).

Several one-off scripts in `scripts/` were used to scrape the previous VBKD
site and generate these gallery components — see Section 9.

---

## 7. Images & GCore Object Storage

Unlike a Cloudinary-style SDK, images here are served as **plain static
files** from GCore Object Storage/CDN — there is no URL-based transform API in
use (no `f_auto`, `q_auto`, resizing, gravity, etc.).

- `src/components/ui/CDNImage.tsx` builds URLs as
  `${VITE_CDN_URL}/images/{srcPath}` and renders a plain `<img>` with
  `loading="lazy"`.
- `VITE_CDN_URL` (set in `.env`) must point at the CDN/origin serving the
  bucket contents, e.g. `https://www.verein-botanischekunst.de` or a
  `.gcdn.co` edge URL.
- The local `images/` folder mirrors the `gallery/<slug>/...`
  paths referenced by gallery components and is uploaded verbatim.

### Deployment (`npm run deploy`)

`scripts/deploy-gcore.mjs` uses `@aws-sdk/client-s3` against GCore's
S3-compatible Object Storage API to upload both `dist/client/` (the built
site) and the local `images/` directory, computing MIME types
(`mime-types`) and setting aggressive `Cache-Control` headers. Before
uploading each file, it checks the remote object's `ETag` (MD5 of a plain
`PutObject`) against the local file's MD5 and skips the upload if they
match, so re-running `npm run deploy` only pushes changed files. Pass
`--force` (`node scripts/deploy-gcore.mjs --force`) to re-upload everything
regardless. Requires a
`.env` with:

```
VITE_CDN_URL=...
GCORE_S3_ENDPOINT=...
GCORE_S3_REGION=...
GCORE_S3_BUCKET=...
GCORE_S3_ACCESS_KEY=...
GCORE_S3_SECRET_KEY=...
```

There is no Netlify config, no `_redirects`/`netlify.toml`, and no
serverless functions in this project.

### Important: use `vike build`, not `vite build`

The npm `build` script (`tsc -b && vike build`) uses Vike's CLI wrapper so
pre-rendering actually runs and produces static HTML in `dist/client/`, plus a
`dist/server/` entry that is not used in this SSG-only setup.

---

## 8. Contact Form

`pages/kontakt/+Page.tsx` renders a form with `action=""` (deliberately left
blank — pending a future form-handling integration) and no `method`/backend
wired up. There is no serverless function or third-party form backend (no
Netlify Forms, no Formspree, `mailto:`, etc.). The page also lists the
association's e-mail, postal address, and Instagram link directly (not just a
form).

---

## 9. Maintenance Scripts

`scripts/` contains a couple of small utilities (run directly with `node
scripts/<name>.mjs`, not wired into `package.json`):

| Script               | Purpose                                                                 |
| --------------------- | ------------------------------------------------------------------------ |
| `deploy-gcore.mjs`    | Uploads `dist/client/` + `images/` to GCore Object Storage (`npm run deploy`) |
| `download-assets.mjs` | Generic downloader: takes a JSON manifest of `{ url, dest }` pairs and saves files under `images/`. Useful for fetching any future image/PDF assets |

The one-off scraping scripts and raw scraped source data used to migrate
content from the previous WordPress-based VBKD site
(`https://www.verein-botanischekunst.de`) have been removed now that the
migration is complete — `content/gallery/*.tsx` and `src/data/galleries.ts`
are the source of truth going forward.

---

## 10. Styling Conventions

- **Tailwind CSS v4** — use utility classes in JSX.
- **CSS variables** for theme colours and container width — defined in
  `src/styles/global.css` under `@theme`. Reference as
  `var(--color-primary)`, `var(--container-max)`, etc.
- Prefer `style={{ color: 'var(--color-...)' }}` for theme colours that
  Tailwind v4 doesn't have direct utilities for.

---

## 11. Key Principles

1. **Content-first, non-profit tone**: This is an association's public site,
   not a commercial product — copy is in German (with English translations on
   some pages, e.g. home and membership), plain and informational.
2. **Member galleries are the core content**: Every gallery is registered in
   `src/data/galleries.ts` and rendered through the shared `Content`/`Grid`/
   `Col`/`GalleryLightbox` primitives for visual consistency.
3. **Static-only**: No backend, no forms API, no CMS. Content changes mean
   editing `.tsx`/`.mdx` files directly and redeploying.
4. **Performance**: Pre-render everything; lazy-load images; keep the image
   pipeline simple (no runtime transforms) since GCore Object Storage serves
   files as-is.
5. **Accessibility**: Semantic HTML, alt text on images, ARIA labels on
   interactive elements (e.g. mobile nav toggle in `Header.tsx`).
6. **Legal pages required**: `impressum` (legal notice) and `datenschutz`
   (privacy policy) are required under German law and must stay accurate.

### Known inconsistency to be aware of

`pages/+Head.tsx` currently contains leftover placeholder copy from an
earlier, unrelated template (references "Svetlana Lanse — Botanical Artist").
It falls back to those hardcoded defaults only when a page doesn't set its own
`config.title`/`config.description`, but the defaults themselves are stale and
should be updated to VBKD-appropriate copy.

---

## 12. Development Workflow

| Command              | What it does                                                     |
| --------------------- | -------------------------------------------------------------------- |
| `npm run dev`         | Starts Vite dev server (default `localhost:5173`)                 |
| `npm run build`       | Type-check (`tsc -b`) + `vike build` (SSG pre-render all pages)   |
| `npm run preview`     | Preview the production build locally (`vite preview`)             |
| `npm run lint`        | Run ESLint                                                        |
| `npm run format`      | Run Prettier over `**/*.{ts,tsx,css,json,md,mdx}`                 |
| `npm run deploy`      | Upload `dist/client/` + `images/` to GCore Object Storage          |

ESLint is configured with `eslint-plugin-react-hooks`,
`eslint-plugin-react-refresh`, and `eslint-plugin-prettier`/
`eslint-config-prettier` for Prettier integration.

---

## 13. TypeScript Configuration

- **Solution-style tsconfig**: `tsconfig.json` references `tsconfig.app.json`
  (app code) and `tsconfig.node.json` (Vite config, build scripts).
- **Path alias `@` → `./src`**: Configured in **two** places that must stay in
  sync:
  - `vite.config.ts` → `resolve.alias` (for build resolution)
  - `tsconfig.app.json` → `paths` + `baseUrl` (for type-checking & IDE)
- **Include scope**: `tsconfig.app.json` includes `["src", "pages", "content"]`.
  The `content` directory must be included for gallery/MDX type declarations
  to work.
- **Strict mode**: Enabled, with `noUnusedLocals` and `noUnusedParameters`.

---

## 14. Git & Repository

- **Repository**: `maxshirshin/vbkd-static` on GitHub.
- **Branch**: `master` is both the local and default branch.

---

## 15. Current Project State

Most of the old verein-botanischekunst.de site has been migrated, with URLs
preserved. Deliberately **not** migrated: `/test-resource/` (unlinked WP test
page) and `/vbkd-2023-archived/` / `/online2025/` (excluded per instruction —
the latter's images lived on an external GitHub Pages repo, not the old site
itself).

| Area                       | Status                                                                 |
| --------------------------- | ------------------------------------------------------------------------ |
| Page shells & routing      | ✅ Complete — home, uber-uns, mitglieder (+ per-member), news, mitgliedschaft, kontakt, impressum, datenschutz |
| About / Home / Membership content | ✅ Real VBKD copy (German + English)                            |
| Layout (Header/Footer)     | ✅ Complete — responsive, mobile menu, nav links incl. Workshops & Shows |
| Member galleries           | ✅ 8 members registered in `src/data/galleries.ts`, images via GCore CDN |
| News page                  | ✅ MDX card grid (`pages/news/+Page.mdx`), all known entries migrated  |
| Workshops & Shows          | ✅ Index + 4 regional pages + 1 online workshop, all MDX               |
| Exhibition/history pages   | ✅ Gründungs-Ausstellung, Seligenstadt 2024, Bettina Bücker, BAW 2025, WOC 2026 Orchids + CV list |
| Contact form               | ⚠️ `action=""` left blank intentionally — needs a backend integration  |
| `pages/+Head.tsx`          | ⚠️ Stale placeholder copy from an earlier template — needs updating     |
| GCore Object Storage/CDN   | ✅ Deploy script (`scripts/deploy-gcore.mjs`) configured and working    |
| shadcn/ui, Mux, blog, shop | ❌ Not part of this project                                             |
