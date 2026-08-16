interface CDNImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  srcPath: string // e.g. "gallery/maxim-shirshin/image-1.jpg"
}

const CDN_URL = import.meta.env.VITE_CDN_URL || ''

export function CDNImage({ srcPath, className, ...props }: CDNImageProps) {
  // Construct full URL. Assumes images are hosted under /images/
  // You might adjust this if your GCore bucket root is different
  const url = `${CDN_URL}/images/${srcPath}`

  return (
    <img
      src={url}
      className={className || 'w-full h-full object-cover'}
      loading="lazy"
      {...props}
    />
  )
}
