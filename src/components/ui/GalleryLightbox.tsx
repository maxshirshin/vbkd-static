import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { CDNImage } from '@/components/ui/CDNImage'

export function GalleryLightboxItem({
  localPreview,
  localFull,
  alt,
  title,
}: {
  localPreview: string
  localFull?: string
  alt: string
  title?: string
  width?: number
  height?: number
}) {
  const CDN_URL = (import.meta.env.VITE_CDN_URL as string) || ''
  const fullUrl = localFull ? `${CDN_URL}/images/${localFull}` : `${CDN_URL}/images/${localPreview}`

  return (
    <Item
      content={
        <div className="flex items-center justify-center w-full h-full">
          <img src={fullUrl} alt={alt} className="max-w-full max-h-full object-contain" />
        </div>
      }
      original={fullUrl}
      thumbnail={`${CDN_URL}/images/${localPreview}`}
      alt={alt}
      caption={title}
    >
      {({ ref, open }) => (
        <a
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={ref as any}
          onClick={localFull ? open : (e) => e.preventDefault()}
          className={`group block ${localFull ? 'cursor-zoom-in' : 'cursor-default'}`}
        >
          <CDNImage
            srcPath={localPreview}
            alt={alt}
            className="w-full h-auto object-contain transition-shadow group-hover:shadow-lg mb-4"
          />
        </a>
      )}
    </Item>
  )
}

export function GalleryLightboxWrapper({ children }: { children: React.ReactNode }) {
  return <Gallery withCaption>{children}</Gallery>
}
