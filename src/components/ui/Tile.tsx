import { useEffect, useState } from 'react'

import { cdnFileUrl } from '@/lib/cdn'

const IMAGE_FADE_DURATION_MS = 2000

export interface TileProps {
  title: string
  description: string
  images: string[]
  href?: string
  className?: string
  animationDelay?: number
}

export function Tile({
  title,
  description,
  images,
  href,
  className = '',
  animationDelay = 6000,
}: TileProps) {
  const imageSet = images.length > 0 ? images : ['gallery/maxim-shirshin/image-1.jpg']
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered || imageSet.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % imageSet.length)
    }, animationDelay)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [animationDelay, imageSet.length, isHovered])

  const tileBody = (
    <div
      className={`group relative block h-full min-h-[280px] w-full overflow-hidden border border-white/10 bg-[#f2eee8] shadow-[0_22px_44px_rgba(14,22,19,0.18)] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageSet.map((image, index) => {
        const isActive = index === activeIndex
        const shouldAnimate = imageSet.length > 1

        return (
          <span
            key={`${image}-${index}`}
            className={`tile-background-layer absolute inset-0 bg-cover bg-center bg-no-repeat ${
              isActive ? 'tile-background-layer--active' : 'tile-background-layer--hidden'
            }`}
            style={{
              backgroundImage: `url(${cdnFileUrl(image)})`,
              transition: shouldAnimate
                ? `opacity ${IMAGE_FADE_DURATION_MS}ms ease-in-out, filter 300ms ease`
                : 'filter 300ms ease',
              opacity: isActive ? 1 : 0,
              filter: isHovered ? 'brightness(1.2) saturate(0.33)' : 'brightness(1) saturate(1)',
            }}
          />
        )
      })}

      <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/12 to-transparent" />

      <span
        className={`absolute left-0 top-6 z-10 inline-flex max-w-[75%] rounded-tr-md rounded-br-md px-3 py-2 backdrop-blur-[2px] transition-all duration-300 ${
          isHovered ? 'bg-black/70' : 'bg-black/45'
        }`}
        style={{ opacity: isHovered ? 1 : 1 }}
      >
        <span className="font-heading text-xl leading-none text-white sm:text-2xl md:text-[2rem]">
          {title}
        </span>
      </span>

      <span className="absolute inset-x-0 bottom-0 z-10">
        <span
          className={`block max-w-[100%] px-3 py-2 text-left backdrop-blur-[2px] transition-all duration-300 ${
            isHovered ? 'bg-black/75' : 'bg-black/55'
          }`}
          style={{ opacity: isHovered ? 1 : 1 }}
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
