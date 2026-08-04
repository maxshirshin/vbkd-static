# AGENTS.md — Svetlana Lanse Website

> This file captures key principles, tech choices, and best practices for any
> human or AI agent working on this codebase.

---

## 1. Project Overview

Personal portfolio, gallery, blog, and shop website for botanical artist
**VBKD e.V.**. The site is a statically pre-rendered React SPA deployed to
Netlify. Blog content is authored in MDX.

---

## 2. Tech Stack

| Layer             | Technology             | Version / Notes                            |
| ----------------- | ---------------------- | ------------------------------------------ |
| Framework         | React                  | 19.x                                       |
| Language          | TypeScript             | ~5.9                                       |
| Build tool        | Vite                   | 7.x                                        |
| SSR / SSG         | Vike (vite-plugin-ssr) | Pre-rendered (SSG) by default              |
| Styling           | Tailwind CSS           | v4 (via `@tailwindcss/vite`)               |
| Component library | shadcn/ui              | Radix UI + Tailwind; copy-paste components |
| Markdown / Blog   | MDX                    | `@mdx-js/rollup` with remark-frontmatter   |
| Image CDN         | GCore                  | URL-based transforms (`f_auto,q_auto`)     |
| Video streaming   | Mux                    | `@mux/mux-player-react` — free tier        |
| Hosting           | Netlify                | Static deploy; built-in form handling      |
| Package manager   | npm                    | lockfile committed                         |

---

## 3. Folder Structure

```
├── AGENTS.md                  ← You are here
├── content/
│   ├── blog/                  ← MDX blog posts (one .mdx file per post)
│   └── gallery/               ← Gallery components (one .tsx file per gallery)
├── pages/                     ← Vike file-system routing
│   ├── +config.ts             ← Global Vike config (prerender, title, etc.)
│   ├── +Head.tsx              ← Default <head> meta tags
│   ├── +Layout.tsx            ← Root layout (imports RootLayout)
│   ├── _error/+Page.tsx       ← 404 / error page
│   ├── index/+Page.tsx        ← Home page (/)
│   ├── about/+Page.tsx        ← About the Artist (/about)
│   ├── gallery/
│   │   ├── +Page.tsx          ← Gallery index (/gallery)
│   │   └── @slug/
│   │       ├── +route.ts      ← Route string: /gallery/@slug
│   │       └── +Page.tsx      ← Sub-gallery page
│   ├── blog/
│   │   ├── +Page.tsx          ← Blog index (/blog)
│   │   └── @slug/
│   │       ├── +route.ts      ← Route string: /blog/@slug
│   │       └── +Page.tsx      ← Individual blog post
│   ├── news/+Page.tsx         ← News (/news)
│   ├── shop/+Page.tsx         ← Shop (/shop)
│   ├── contact/+Page.tsx      ← Contact form (/contact) — Netlify Forms
│   ├── privacy/+Page.tsx      ← Privacy Policy
│   ├── cookies/+Page.tsx      ← Cookie Policy
│   └── terms/+Page.tsx        ← Terms of Use
├── public/                    ← Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── components/            ← Shared React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── NavLink.tsx
│   │   ├── GCoreImage.tsx
│   │   ├── HeroCard.tsx
│   │   ├── HeroSlider.tsx
│   │   └── MuxVideo.tsx
│   ├── data/                  ← Data files (shop items, blog post & gallery registries)
│   │   ├── blogPosts.ts
│   │   ├── galleries.ts
│   │   ├── heroCards.ts
│   │   └── shopItems.ts
│   ├── layouts/
│   │   └── RootLayout.tsx     ← Header + main + Footer wrapper
│   ├── styles/
│   │   └── global.css         ← Tailwind directives + theme variables
│   └── types/
│       └── mdx.d.ts           ← TypeScript declarations for .mdx imports
├──                ← Netlify build + redirect config
├── vite.config.ts             ← Vite plugins: react, tailwind, mdx, vike
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.node.json
```

---

## 4. Routing (Vike)

- **File-system based**: `pages/about/+Page.tsx` → `/about`
- **Parameterised routes**: `pages/gallery/@slug/+route.ts` exports the route string `/gallery/@slug`
- **Rendering mode**: SSG globally (`prerender: true` in `pages/+config.ts`). Can be overridden per-page.
- **Switching to SSR later**: Remove `prerender: true` and deploy a Node.js server or Netlify Function.
- **Navigation**: Use standard `<a href="...">` tags — Vike handles client-side navigation automatically.
- **Active link detection**: Use `usePageContext()` from `vike-react/usePageContext` to get `urlPathname`.

### Pre-rendering dynamic routes

Each parameterised route (`@slug`) needs a `+onBeforePrerenderStart.ts` file
that returns the list of URLs to pre-render at build time.

- **Blog**: `pages/blog/@slug/+onBeforePrerenderStart.ts` reads slugs from the
  `blogPosts` array in `src/data/blogPosts.ts`. Adding a new MDX post and
  registering it in `blogPosts` is sufficient — no other file needs updating.
- **Gallery**: `pages/gallery/@slug/+onBeforePrerenderStart.ts` reads slugs from
  the `galleries` array in `src/data/galleries.ts`. Adding a new gallery means:
  1. Creating a `.tsx` component in `content/gallery/`
  2. Importing and registering it in `src/data/galleries.ts`

  All consumers (gallery index, gallery slug page, home page, prerender) import
  from this single registry.

---

## 5. MDX Blog Posts

### Authoring

Create a new `.mdx` file in `content/blog/` with YAML frontmatter:

```mdx
---
title: 'Post Title'
slug: my-post-slug
date: '2026-03-01'
excerpt: 'A short description for the blog index.'
lang: en # "en" (default) or "ru" for Russian posts
---

# Post Title

Your markdown content here. You can use React components inline.
```

### Registration

After creating the file, import it in `src/data/blogPosts.ts` and add it to the
`blogPosts` array. The blog index and slug-based routing will pick it up
automatically (including pre-rendering — see Section 4).

### Frontmatter export mechanism

The MDX pipeline uses two remark plugins configured in `vite.config.ts`:

1. `remark-frontmatter` — parses the YAML block from the MDX file.
2. `remark-mdx-frontmatter` (with `{ name: 'frontmatter' }`) — exposes the
   parsed YAML as a **named export** called `frontmatter`.

TypeScript types for `.mdx` imports are declared in `src/types/mdx.d.ts`. This
file must be kept in sync if new frontmatter fields are added.

Import pattern:

```ts
import MyPost, { frontmatter } from '../../content/blog/my-post.mdx'
// frontmatter.title, frontmatter.slug, etc.
// MyPost is the React component (default export)
```

### Language handling

- The `lang` frontmatter field sets the `lang` attribute on the `<article>`
  wrapper in the blog post template.
- Default site language is `en` (set in `pages/+config.ts` and `index.html`).
- Russian posts use `lang: "ru"` and display a language badge on the blog index.

---

## 6. GCore Images

Uses the official GCore React SDK (`@cloudinary/react` + `@cloudinary/url-gen`).

Use the `<GCoreImage>` component:

```tsx
import { GCoreImage } from "@/components/GCoreImage";

// Simple responsive image
<GCoreImage
  publicId="gallery/breath-of-fire"
  alt="Breath of Fire — watercolour botanical painting"
  width={800}
/>

// Square crop with AI gravity
<GCoreImage
  publicId="gallery/breath-of-fire"
  alt="Breath of Fire"
  width={400}
  aspectRatio="1:1"
/>

// Portrait crop, face-aware
<GCoreImage
  publicId="portraits/artist"
  alt="Artist portrait"
  width={600}
  aspectRatio="2:3"
  gravity="face"
/>
```

- Cloud name `dukt6jxh1` is configured in `GCoreImage.tsx`.
- Automatic format (`f_auto`) and quality (`q_auto`) are applied.
- The `responsive` plugin delivers images sized to the container width (step size configurable via `responsiveStep` prop).
- Lazy loading and blur placeholder are enabled by default (controllable via `lazy` and `showPlaceholder` props).
- Supported aspect ratios: `1:1`, `4:3`, `3:2`, `5:4`, `16:9`, `3:4`, `2:3`, `4:5`, `9:16`.
- Resize modes: `fill` (default), `fit`, `scale`, `crop`, `auto`.
- Gravity options: `auto` (default, AI-based), `face`, `center`, compass directions.

### Uploading images

A Node.js upload script (`scripts/upload-images.mjs`) handles batch uploads to
GCore. It uses the server-side `cloudinary` package (dev dependency).

1. **Add your API secret** to `.env` at the project root (gitignored):
   ```
   CLOUDINARY_CLOUD_NAME=dukt6jxh1
   CLOUDINARY_API_KEY=465926378327189
   CLOUDINARY_API_SECRET=<your secret here>
   ```
2. **Place images** in the `images/` folder (also gitignored), mirroring the
   folder structure you want as GCore public IDs:
   ```
   images/
     gallery/breath-of-fire.jpg   → public ID "gallery/breath-of-fire"
     portraits/artist.png         → public ID "portraits/artist"
   ```
3. **Run the upload**:
   ```sh
   npm run upload          # upload new images (skips existing)
   npm run upload:dry      # preview what would be uploaded
   npm run upload -- --overwrite  # re-upload even if already on GCore
   ```

The script is idempotent — re-running it safely skips already-uploaded images
unless `--overwrite` is passed.

---

## 7. Mux Video

Use the `<MuxVideo>` component:

```tsx
import { MuxVideo } from '@/components/MuxVideo'

;<MuxVideo playbackId="YOUR_MUX_PLAYBACK_ID" title="Studio tour video" />
```

- **TODO**: Upload videos to Mux and use real playback IDs.
- The component renders a placeholder during SSR and lazy-loads the Mux web
  component on the client.
- Free tier: 10 videos, 100K delivery minutes/month.

---

## 8. Shop Items

Edit `src/data/shopItems.ts` to add, remove, or update items. Each item has:

```ts
{
  slug: string
  title: string
  description: string
  price: string       // e.g., "£120"
  image?: string      // GCore public ID
  externalUrl: string // Link to external checkout/payment
  availability?: string
}
```

When payment integration is added later, `externalUrl` will point to the
checkout (e.g., Stripe Payment Link or Shopify Buy Button).

---

## 9. GCore Deployment

- **Build command**: `npm run build` (which runs `tsc -b && vike build`)
- **Netlify build command** (in ``): `npm run build && rm -rf dist/server`
- **Publish directory**: `dist/client`
- **Forms**: The contact form uses `data-netlify="true"` — Netlify detects it at
  build time. No serverless function needed.
- **Asset caching**: `/assets/*` gets `Cache-Control: public, max-age=31536000, immutable`.

### Build output: `

Vike always generates **two** output directories:

- **`dist/client/`** — Pre-rendered static HTML, JS bundles, CSS, assets. This
  is what Netlify serves to browsers.
- **`dist/server/`** — A Node.js server entry (`entry.mjs`) and server-side page
  renderers for SSR. **Not used** in our SSG-only setup.

Vike produces `dist/server/` regardless of rendering mode, because it supports
switching individual pages from SSG to SSR without changing the build toolchain.

### Why we remove `dist/server`

Netlify auto-detects frameworks. When it sees `dist/server/` with `.mjs` entry
files alongside `dist/client/`, it may interpret the deploy as SSR and attempt to
wire up serverless functions — routing requests through a non-functional SSR
handler instead of serving the static HTML files. Removing `dist/server` after
the build prevents this.

### Important: use `vike build`, not `vite build`

The npm `build` script must use `vike build` (Vike's CLI wrapper), **not**
`vite build`. On Netlify's CI environment, `vite build` silently skips the
pre-rendering step, producing JS/CSS assets but no HTML files. `vike build`
properly triggers pre-rendering.

### If switching to SSR later

Remove the `rm -rf dist/server` from ``, configure Netlify's
serverless adapter for Vike, and set `prerender: false` on the pages that need
dynamic rendering.

---

## 10. shadcn/ui

- MCP server configured in `.vscode/mcp.json` for AI-assisted component addition.
- **Not yet initialised** — `npx shadcn@latest init` has not been run. There is
  no `components.json` yet. Run init before adding any components.
- To add a component: `npx shadcn@latest add <component-name>`
- Components are copied into `src/components/ui/` and can be freely customised.
- Theme tokens are defined in `src/styles/global.css` under `@theme { ... }`.

---

## 11. Styling Conventions

- **Tailwind CSS v4** — use utility classes in JSX.
- **CSS variables** for theme colours — defined in `src/styles/global.css` under
  `@theme`. Reference as `var(--color-primary)`, etc.
- **Fonts**: Cormorant Garamond (headings), Inter (body) — loaded from Google
  Fonts in `+Head.tsx`.
- Prefer `style={{ color: 'var(--color-...)' }}` for theme colours that Tailwind
  v4 doesn't have direct utilities for.

---

## 12. Key Principles

1. **Content-first**: The artist's work should be the focal point. Keep UI
   minimal and elegant.
2. **Performance**: Pre-render everything; lazy-load images and video; use
   GCore's automatic format/quality optimisation.
3. **Accessibility**: Semantic HTML, proper alt text on all images, ARIA labels
   on interactive elements.
4. **UK legal compliance**: Privacy Policy, Cookie Policy, and Terms of Use are
   required. Cookie consent banner will be needed before analytics are added.
5. **Bilingual support**: Blog posts may be in English or Russian. The `lang`
   attribute is set per-post.
6. **Copyright protection**: All artwork images are copyrighted. The Terms page
   explicitly states this. Consider right-click protection and watermarks later.

### Temporarily hidden sections

Blog and Shop links are **commented out** in `Header.tsx` and `Footer.tsx`
(search for `TODO: unhide`). The pages and routes still exist — this is a visual
adjustment only. Re-enable when content is ready.

### Home page hero slider

The home page opens with an auto-advancing hero slider (`HeroSlider` component).
Cards are defined in `src/data/heroCards.ts`:

```ts
{
  id: string // unique key
  title: string // large heading
  description: string // supporting text
  link: string // the whole card is a clickable CTA
  backgroundImage: string // GCore public ID
}
```

Animation timing is also configured in `heroCards.ts` via `heroSliderConfig`:

- `intervalMs` — time each card is shown (default 6 000 ms)
- `transitionMs` — crossfade duration (default 800 ms)

The slider pauses on hover and shows dot indicators for manual navigation.
Background images are loaded from GCore as CSS `background-image` via
`HeroCard`, anchored top-left with `background-size: cover`.

### Home page gallery section

The "My Galleries" section on the home page displays links to the first 3
galleries from the `galleries` registry (`galleries.slice(0, 3)`). The button
reads "View All Galleries" and links to `/gallery`.

---

## 13. Development Workflow

| Command              | What it does                                          |
| -------------------- | ----------------------------------------------------- |
| `npm run dev`        | Starts Vite dev server (default `localhost:5173`)     |
| `npm run build`      | Type-check + `vike build` (SSG pre-render all pages)  |
| `npm run preview`    | Preview the production build locally (`vite preview`) |
| `npm run lint`       | Run ESLint                                            |
| `npm run upload`     | Upload new images from `images/` to GCore             |
| `npm run upload:dry` | Preview uploads without actually uploading            |

ESLint is configured with `eslint-plugin-react-hooks` and
`eslint-plugin-react-refresh`.

---

## 14. TypeScript Configuration

- **Solution-style tsconfig**: `tsconfig.json` references `tsconfig.app.json`
  (app code) and `tsconfig.node.json` (Vite config, build scripts).
- **Path alias `@` → `./src`**: Configured in **two** places that must stay in
  sync:
  - `vite.config.ts` → `resolve.alias` (for build resolution)
  - `tsconfig.app.json` → `paths` + `baseUrl` (for type-checking & IDE)
- **Include scope**: `tsconfig.app.json` includes `["src", "pages", "content"]`.
  The `content` directory must be included for MDX type declarations to work.
- **Strict mode**: Enabled, with `noUnusedLocals` and `noUnusedParameters`.

---

## 15. Git & Repository

- **Repository**: `maxshirshin/svetlanalanse.com` on GitHub.
- **Branch naming**: The local branch is `master`; the GitHub default branch is
  `main`. When pushing, use `git push origin master:main` or rename the local
  branch to `main` to avoid confusion.

---

## 16. Current Project State

The site structure is fully built but contains **placeholder content**. Here is
what needs to be replaced with real content before launch:

| Area                     | Status                                                                         |
| ------------------------ | ------------------------------------------------------------------------------ |
| Page shells & routing    | ✅ Complete — all pages, all routes working                                    |
| About page               | ✅ Real content from artist CV (education, exhibitions, awards, etc.)          |
| Layout (Header/Footer)   | ✅ Complete — responsive, mobile menu, nav links                               |
| Blog & Shop nav links    | 🔇 Temporarily hidden from Header and Footer (commented out with TODO markers) |
| Blog MDX pipeline        | ✅ Working — 3 sample posts (not real content)                                 |
| Gallery data             | ✅ Centralised in `src/data/galleries.ts`; components in `content/gallery/`    |
| Shop items               | ⚠️ Placeholder items; `externalUrl` values are all `"#"`                       |
| Images                   | ❌ All placeholder divs — no real images yet                                   |
| GCore cloud name         | ✅ Configured (`dukt6jxh1`)                                                    |
| Mux videos               | ❌ No videos uploaded; using placeholder playback IDs                          |
| Favicon & static assets  | ❌ Only `vite.svg` in `public/` — need real favicon, etc.                      |
| robots.txt / sitemap.xml | ❌ Not created yet                                                             |
| shadcn/ui initialisation | ❌ `npx shadcn@latest init` not run yet                                        |
| Cookie consent banner    | ❌ Not implemented (needed before adding analytics)                            |
| Custom domain            | ❌ Not connected to Netlify yet                                                |
