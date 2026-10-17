export default Page

import { Tile } from '@/components/ui/Tile'
import type { ReactNode } from 'react'

type GridTile = {
  title: string
  description: ReactNode
  images: string[]
  href?: string
  tileClassName: string
  animationDelay?: number
  textBackgroundColor: string
}

// const welcomeTile: GridTile = {
//   title: 'Willkommen bei VBKD',
//   description:
//     'Wir sind eine Gruppe von pflanzenbegeisterten Künstlern und Illustratoren. Wir möchten viele Menschen für die botanische Kunst begeistern und sie ermutigen sich uns anzuschließen. Professionelle und semiprofessionelle Künstler, Anfänger, Förderer und Naturinteressierte genießen die Vorteile einer Mitgliedschaft und unterstützen botanische Kunst in ganz Deutschland.',
//   href: '/uber-uns',
//   images: [
//     'tile-backgrounds/gallery/audrey-reilly/image-1.jpg',
//     'tile-backgrounds/gallery/bettina-buecker/daucus-carota-preview.webp',
//     'tile-backgrounds/archive/White-and-pink-orchid.jpeg',
//     'tile-backgrounds/archive/IMG_7931.jpeg',
//     'tile-backgrounds/archive/YPettersSummer.jpeg',
//   ],
//   tileClassName: 'col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2',
//   animationDelay: 10000,
// }

const welcomeTile: GridTile = {
  title: 'Was ist botanische Kunst?',
  description: (
    <>
      <p>
        Botanische Kunst ist der Schnittpunkt von Wissenschaft und Kunst. Sie ist die sorgfältige
        und kunstvolle Darstellung von Pflanzen, Pilzen und Flechten auf der Grundlage direkter
        Beobachtung und eines gründlichen Verständnisses ihrer Struktur...
      </p>
      <p className="text-right italic">Weiterlesen&nbsp;→</p>
    </>
  ),
  href: '/was-ist-botanische-kunst',
  images: [
    'tile-backgrounds/gallery/audrey-reilly/image-1.jpg',
    'tile-backgrounds/gallery/bettina-buecker/daucus-carota-preview.webp',
    'tile-backgrounds/archive/White-and-pink-orchid.jpeg',
    'tile-backgrounds/archive/IMG_7931.jpeg',
    'tile-backgrounds/archive/YPettersSummer.jpeg',
  ],
  tileClassName: 'col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2',
  animationDelay: 30000,
  textBackgroundColor: '145 65% 12%',
}

const galerieTile: GridTile = {
  title: 'Galerie',
  description: 'Entdecken Sie die Werke unserer Mitglieder und die Vielfalt botanischer Kunst.',
  href: '/mitglieder',
  images: [
    'tile-backgrounds/gallery/maxim-shirshin/image-1.jpg',
    'tile-backgrounds/gallery/audrey-reilly/image-3.jpg',
    'tile-backgrounds/gallery/sophie-crossart/image-3.jpg',
    'tile-backgrounds/gallery/dr-sabine-loos/image-3.jpg',
    'tile-backgrounds/gallery/ines-kamper/image-2.jpg',
    'tile-backgrounds/gallery/katja-katholing-bloss/image-2.jpg',
    'gallery/maxim-shirshin/tannenzapfen-aus-schwarzwald.png',
    'tile-backgrounds/gallery/sue-henon/image-2.jpg',
    'tile-backgrounds/archive/IMG_7966.jpeg',
    'tile-backgrounds/archive/YPettersTeasel.jpeg',
    'tile-backgrounds/archive/IMG_20240123_115800_711.jpeg',
  ],
  tileClassName: 'col-span-1 md:col-start-3 md:row-span-2 lg:col-start-3 lg:row-span-2',
  animationDelay: 3000,
  textBackgroundColor: '184 80% 12%',
}

const mitgliedschaftTile: GridTile = {
  title: 'Mitgliedschaft',
  description:
    'Informieren Sie sich über die Vorteile einer Mitgliedschaft und wie Sie sich einbinden können.',
  href: '/mitgliedschaft',
  images: [
    'tile-backgrounds/gallery/maxim-shirshin/image-3.jpg',
    'tile-backgrounds/gallery/ines-kamper/image-3.jpg',
    'tile-backgrounds/archive/IMG_20240123_122015_490.jpeg',
    'tile-backgrounds/archive/Picea-abies.jpeg',
  ],
  tileClassName:
    'col-span-1 md:row-start-3 md:row-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-2',
  animationDelay: 32000,
  textBackgroundColor: '24 55% 13%',
}

const newsTile: GridTile = {
  title: 'News',
  description:
    'Bleiben Sie über Ausstellungen, Veröffentlichungen und Neuigkeiten des Vereins informiert.',
  href: '/news',
  images: [
    'tile-backgrounds/gallery/ines-kamper/image-1.jpg',
    'tile-backgrounds/gallery/dr-sabine-loos/image-1.jpg',
    'tile-backgrounds/archive/GOSSIP_Maria-Euthum.jpeg',
    'tile-backgrounds/archive/IMG_20240123_120011.jpeg',
  ],
  tileClassName: 'col-span-1 md:col-start-2 md:row-start-3 lg:col-start-1 lg:row-start-3',
  animationDelay: 29000,
  textBackgroundColor: '240 45% 14%',
}

const workshopsTile: GridTile = {
  title: 'Workshops & Shows',
  description: 'Erkunden Sie regionale Workshops und Ausstellungen für Künstler und Interessierte.',
  href: '/workshops-and-shows',
  images: [
    'tile-backgrounds/gallery/margitta-baum/fruehlingsblumen-preview.jpg',
    'tile-backgrounds/gallery/dr-sabine-loos/image-2.jpg',
    'tile-backgrounds/archive/YPettersBluebell.jpeg',
    'tile-backgrounds/archive/20230722_163356.jpeg',
    'tile-backgrounds/archive/Hyazinthen.jpeg',
  ],
  tileClassName: 'col-span-1 md:col-start-3 md:row-start-3 lg:col-start-2 lg:row-start-3',
  animationDelay: 30000,
  textBackgroundColor: '60 50% 12%',
}

const aboutTile: GridTile = {
  title: 'Über uns',
  description:
    'Erfahren Sie mehr über den Verein, seine Mitglieder und die gemeinsame Leidenschaft für botanische Kunst.',
  href: '/uber-uns',
  images: [
    'tile-backgrounds/gallery/sophie-crossart/image-2.jpg',
    'tile-backgrounds/gallery/margitta-baum/cattleya-golden-boy-preview.jpg',
    'tile-backgrounds/archive/20230722_174047.jpeg',
    'tile-backgrounds/archive/20230722_164041.jpeg',
  ],
  tileClassName: 'col-span-1 md:col-start-2 md:row-start-4 lg:col-start-3 lg:row-start-3',
  animationDelay: 33000,
  textBackgroundColor: '128 0% 10%',
}

const contactTile: GridTile = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie den Verein für Fragen, Mitgliedschaften und Kooperationen.',
  href: '/kontakt',
  images: [
    'tile-backgrounds/gallery/katja-katholing-bloss/image-1.jpg',
    'tile-backgrounds/gallery/audrey-reilly/image-2.jpg',
    'tile-backgrounds/archive/IMG-20211015-WA0000.jpeg',
    'tile-backgrounds/archive/Kastanienzweige-im-Fruehjahr.jpeg',
  ],
  tileClassName: 'col-span-1 md:row-start-4 lg:row-start-3',
  animationDelay: 32000,
  textBackgroundColor: '90 80% 13%',
}

const tilesToRender: GridTile[] = [
  welcomeTile,
  galerieTile,
  mitgliedschaftTile,
  newsTile,
  workshopsTile,
  aboutTile,
  contactTile,
]

function Page() {
  return (
    <div className="w-full mx-auto max-w-[var(--container-max)] px-6 pt-10 pb-4">
      <div className="grid grid-cols-1 gap-[10px] md:grid-cols-3 md:auto-rows-[minmax(220px,1fr)] lg:grid-cols-4">
        {tilesToRender.map((tile) => (
          <div key={tile.title} className={tile.tileClassName}>
            <Tile
              title={tile.title}
              description={tile.description}
              href={tile.href}
              images={tile.images}
              animationDelay={tile.animationDelay ?? 6000}
              textBackgroundColor={tile.textBackgroundColor}
              className="h-full min-h-[220px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
