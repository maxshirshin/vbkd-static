# Verein Botanische Kunst Deutschland (VBKD) e.V.

Static website for VBKD built with React, Vite, Vike (SSG), and Tailwind CSS v4.
Served globally via GCore Object Storage and CDN.

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build & SSG**: Vite + [Vike](https://vike.dev/)
- **Styling**: Tailwind CSS v4
- **Hosting / CDN**: GCore Object Storage (S3-compatible) & GCore Edge CDN

## 📦 Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Copy `.env.example` to `.env` and fill in your GCore credentials:
   ```bash
   cp .env.example .env
   ```
   *Note: Ensure `VITE_CDN_URL` is set to the correct CDN URL to ensure images load properly in development (e.g. `http://www.verein-botanischekunst.de` or your `.gcdn.co` edge URL).*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🛠️ Build & Deployment

The process is fully automated via npm scripts and an AWS S3-compatible NodeJS script (`deploy-gcore.mjs`).

1. **Build the static HTML/JS/CSS assets:**
   ```bash
   npm run build
   ```
   *This pre-renders all pages to `dist/client/` using Vike.*

2. **Preview locally (optional):**
   ```bash
   npm run preview
   ```

3. **Deploy to GCore Object Storage:**
   ```bash
   npm run deploy
   ```
   *This script reads your `.env` credentials, computes MIME types and aggressive Cache-Control headers, and pushes both your `dist/client/` output and local `images/` directory straight to the configured GCore Storage Bucket.*

## 🖼️ Image Management

Images for gallery members are stored locally under `images/mitglieder/`.
During deployment (`npm run deploy`), this directory is mirrored to the GCore Object Storage Bucket. 

Inside the React application, images are rendered using the `CDNImage` component, which automatically prefixes asset paths with the `VITE_CDN_URL` configured in your `.env`.

Example:
```tsx
import { CDNImage } from "@/components/CDNImage";

<CDNImage srcPath="mitglieder/audrey-1.jpg" alt="Art piece" />
```

## ⚙️ CDN Routing

The GCore CDN must be configured to appropriately serve static site routes:
1. Allow Origin Pull over **HTTPS**.
2. **Default File / Index Document**: `index.html`
3. **Rewrite Rule**: `^/([^\.]*[^/])/?$` -> `/$1/index.html` (Flag: `break`). This bridges Vike's folder structures with raw Object Storage paths.
