import { useEffect, useState, type ReactNode } from 'react'

import { cdnFileUrl } from '@/lib/cdn'

const IMAGE_FADE_DURATION_MS = 2000

export interface TileProps {
  title: string
  description: ReactNode
  images: string[]
  href?: string
  className?: string
  animationDelay?: number
  textBackgroundColor?: string
}

export function Tile({
  title,
  description,
  images,
  href,
  className = '',
  animationDelay = 6000,
  textBackgroundColor = '0 0% 0%',
}: TileProps) {
  const imageSet = images.length > 0 ? images : ['gallery/maxim-shirshin/image-1.jpg']
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const isAnimationEnabled = animationDelay >= 0

  useEffect(() => {
    if (!isAnimationEnabled) {
      setActiveIndex(Math.floor(Math.random() * imageSet.length))
      setIsFadingOut(false)
      return
    }

    const timeoutId = window.setTimeout(() => {
      setActiveIndex(Math.floor(Math.random() * imageSet.length))
    }, 0)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [imageSet.length, isAnimationEnabled])

  useEffect(() => {
    if (
      !isAnimationEnabled ||
      activeIndex === null ||
      isHovered ||
      imageSet.length <= 1 ||
      isFadingOut
    ) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setIsFadingOut(true)
    }, animationDelay)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [activeIndex, animationDelay, imageSet.length, isAnimationEnabled, isFadingOut, isHovered])

  useEffect(() => {
    if (!isAnimationEnabled || activeIndex === null || !isFadingOut) {
      return
    }

    const fadeDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 0
      : IMAGE_FADE_DURATION_MS

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((activeIndex + 1) % imageSet.length)
    }, fadeDuration)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [activeIndex, imageSet.length, isAnimationEnabled, isFadingOut])

  const activeImage = activeIndex === null ? null : imageSet[activeIndex]
  const titleBackgroundColor = `hsl(${textBackgroundColor} / ${isHovered ? 0.7 : 0.45})`
  const descriptionBackgroundColor = `hsl(${textBackgroundColor} / ${isHovered ? 0.75 : 0.55})`

  const handleImageLoad = () => {
    window.requestAnimationFrame(() => {
      setIsFadingOut(false)
    })
  }

  const handleImageError = () => {
    console.error(`Unable to load tile image: ${cdnFileUrl(activeImage ?? '')}`)
    setIsFadingOut(false)
  }

  const tileBody = (
    <div
      className={`group relative block h-full min-h-[280px] w-full overflow-hidden border border-white/10 bg-[#f2eee8] shadow-[0_22px_44px_rgba(14,22,19,0.18)] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {activeImage && (
        <img
          src={cdnFileUrl(activeImage)}
          alt=""
          aria-hidden="true"
          className="tile-image absolute inset-0 h-full w-full object-cover"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            opacity: isFadingOut ? 0 : 1,
            filter: isHovered ? 'brightness(1.2) saturate(0.33)' : 'brightness(1) saturate(1)',
          }}
        />
      )}

      <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/12 to-transparent" />

      <span
        className="absolute left-0 top-6 z-10 inline-flex max-w-[75%] rounded-tr-md rounded-br-md px-3 py-2 backdrop-blur-[2px] transition-all duration-300"
        style={{ backgroundColor: titleBackgroundColor }}
      >
        <span className="font-heading text-xl leading-none text-white sm:text-2xl md:text-[2rem]">
          {title}
        </span>
      </span>

      <span className="absolute inset-x-0 bottom-0 z-10">
        <span
          className="block max-w-[100%] px-3 py-2 text-left backdrop-blur-[2px] transition-all duration-300"
          style={{ backgroundColor: descriptionBackgroundColor }}
        >
          <span className="block text-sm leading-relaxed text-white">{description}</span>
        </span>
      </span>
    </div>
  )

  if (!href) {
    return tileBody
  }

  return (
    <a
      href={href}
      className="block h-full w-full no-underline hover:no-underline focus:outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tileBody}
    </a>
  )
}
