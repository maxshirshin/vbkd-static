import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import vike from 'vike/plugin'
import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'
import mime from 'mime-types'

// Serves the images/ staging folder at /images/* in dev, so CDNImage can
// preview assets before they're uploaded to GCore.
function serveLocalImages(): Plugin {
  const imagesDir = fileURLToPath(new URL('./images', import.meta.url))

  return {
    name: 'serve-local-images',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/images/')) return next()

        const relativePath = decodeURIComponent(req.url.slice('/images/'.length).split('?')[0])
        const filePath = path.join(imagesDir, relativePath)
        if (!filePath.startsWith(imagesDir)) return next()

        fs.stat(filePath, (err, stats) => {
          if (err || !stats.isFile()) return next()
          res.setHeader('Content-Type', mime.lookup(filePath) || 'application/octet-stream')
          fs.createReadStream(filePath).pipe(res)
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'frontmatter' }]],
    }),
    react(),
    tailwindcss(),
    vike(),
    serveLocalImages(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
