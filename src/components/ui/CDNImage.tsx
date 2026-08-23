import { cdnFileUrl } from '@/lib/cdn'

interface CDNImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  srcPath: string // e.g. "gallery/maxim-shirshin/image-1.jpg"
}

export function CDNImage({ srcPath, className, ...props }: CDNImageProps) {
  const url = cdnFileUrl(srcPath)

  return (
    <img
      src={url}
      className={className || 'w-full h-full object-cover'}
      loading="lazy"
      {...props}
    />
  )
}
