import type { ComponentType } from 'react'

// Import gallery components
import MaximShirshin from '../../content/gallery/MaximShirshin'
import SueHenon from '../../content/gallery/SueHenon'
import AudreyReilly from '../../content/gallery/AudreyReilly'
import DrSabineLoos from '../../content/gallery/DrSabineLoos'
import KatjaKatholingBloss from '../../content/gallery/KatjaKatholingBloss'
import SophieCrossart from '../../content/gallery/SophieCrossart'
import InesKamper from '../../content/gallery/InesKamper'

export interface Gallery {
  slug: string
  title: string
  description: string
  coverImage?: string // Cloudinary public ID
  Component: ComponentType
}

// Register all members here
export const galleries: Gallery[] = [
  {
    slug: 'maxim-shirshin',
    title: 'Maxim Shirshin',
    description: 'Softwareentwickler und Künstler. Arbeitet mit Aquarellfarben und Farbstiften.',
    coverImage: 'gallery/maxim-shirshin/image-1.jpg',
    Component: MaximShirshin,
  },
  {
    slug: 'sue-henon',
    title: 'Sue Hénon',
    description: 'Botanische Malerei und Illustration. Farbstifte, Graphit, Aquarelle, Öl.',
    coverImage: 'gallery/sue-henon/image-1.jpg',
    Component: SueHenon,
  },
  {
    slug: 'audrey-reilly',
    title: 'Audrey Reilly',
    description: 'Vorstandsvorsitzende des VBKD. Natur und Botanische Kunst.',
    coverImage: 'gallery/audrey-reilly/image-1.jpg',
    Component: AudreyReilly,
  },
  {
    slug: 'dr-sabine-loos',
    title: 'Dr. Sabine Loos',
    Component: DrSabineLoos,
    coverImage: 'gallery/dr-sabine-loos/image-1.jpg',
    description: 'Botanische Kunst von Dr. Sabine Loos',
  },
  {
    slug: 'katja-katholing-bloss',
    title: 'Katja Katholing-Bloss',
    Component: KatjaKatholingBloss,
    coverImage: 'gallery/katja-katholing-bloss/image-1.jpg',
    description: 'Botanische Kunst von Katja Katholing-Bloss',
  },
  {
    slug: 'sophie-crossart',
    title: 'Sophie Crossart',
    Component: SophieCrossart,
    coverImage: 'gallery/sophie-crossart/image-1.jpg',
    description: 'Botanische Kunst von Sophie Crossart',
  },
  {
    slug: 'ines-kamper',
    title: 'Ines Kamper',
    Component: InesKamper,
    coverImage: 'gallery/ines-kamper/image-1.jpg',
    description: 'Botanische Kunst von Ines Kamper',
  },
]
