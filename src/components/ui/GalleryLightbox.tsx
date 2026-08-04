import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { CDNImage } from "@/components/CDNImage"

export function GalleryLightboxItem({ 
    localPreview, 
    localFull, 
    alt, 
    title,
    width = 1200, 
    height = 900 
}: { 
    localPreview: string, 
    localFull?: string,
    alt: string,
    title?: string,
    width?: number,
    height?: number
}) {
  const CDN_URL = (import.meta.env.VITE_CDN_URL as string) || "";
  const fullUrl = localFull ? `${CDN_URL}/images/${localFull}` : `${CDN_URL}/images/${localPreview}`;

  return (
    <Item
      original={fullUrl}
      thumbnail={`${CDN_URL}/images/${localPreview}`}
      width={width}
      height={height}
      alt={alt}
      caption={title}
    >
      {({ ref, open }) => (
        <a 
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
    return (
        <Gallery withCaption>
            {children}
        </Gallery>
    )
}
