import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { CDNImage } from '@/components/ui/CDNImage'
import { cdnFileUrl } from '@/lib/cdn'

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
  const fullUrl = cdnFileUrl(localFull ? localFull : localPreview)

  return (
    <Item
      content={
        <div className="flex items-center justify-center w-full h-full">
          <img src={fullUrl} alt={alt} className="max-w-full max-h-full object-contain" />
        </div>
      }
      original={fullUrl}
      thumbnail={cdnFileUrl(localPreview)}
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
