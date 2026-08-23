const CDN_URL = import.meta.env.VITE_CDN_URL || ''

// Builds a CDN URL for any downloaded asset (images, PDFs, etc.) stored under images/
export function cdnFileUrl(srcPath: string) {
  // In dev, serve straight from the local images/ folder (see vite.config.ts)
  // so assets can be previewed before they're uploaded to the CDN.
  if (import.meta.env.DEV) {
    return `/images/${srcPath}`
  }
  return `${CDN_URL}/images/${srcPath}`
}
