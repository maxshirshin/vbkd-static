export default Page

import { Tile } from '@/components/ui/Tile'

type GridTile = {
  title: string
  description: string
  images: string[]
  href?: string
  tileClassName: string
  animationDelay?: number
}

const welcomeTile: GridTile = {
  title: 'Willkommen bei VBKD',
  description:
    'Wir sind eine Gruppe von pflanzenbegeisterten Künstlern und Illustratoren. Wir möchten viele Menschen für die botanische Kunst begeistern und sie ermutigen sich uns anzuschließen. Professionelle und semiprofessionelle Künstler, Anfänger, Förderer und Naturinteressierte genießen die Vorteile einer Mitgliedschaft und unterstützen botanische Kunst in ganz Deutschland.',
  href: '/uber-uns',
  images: [
    'tile-backgrounds/gallery/audrey-reilly/image-1.jpg',
    'tile-backgrounds/gallery/bettina-buecker/daucus-carota-preview.webp',
  ],
  tileClassName: 'col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2',
  animationDelay: 10000,
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
    'tile-backgrounds/gallery/maxim-shirshin/image-2.jpg',
    'tile-backgrounds/gallery/sue-henon/image-2.jpg',
  ],
  tileClassName: 'col-span-1 md:col-start-3 md:row-span-2 lg:col-start-3 lg:row-span-2',
  animationDelay: 3000,
}

const mitgliedschaftTile: GridTile = {
  title: 'Mitgliedschaft',
  description:
    'Informieren Sie sich über die Vorteile einer Mitgliedschaft und wie Sie sich einbinden können.',
  href: '/mitgliedschaft',
  images: [
    'tile-backgrounds/gallery/maxim-shirshin/image-3.jpg',
    'tile-backgrounds/gallery/ines-kamper/image-3.jpg',
  ],
  tileClassName:
    'col-span-1 md:row-start-3 md:row-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-2',
  animationDelay: 9000,
}

const journalTile: GridTile = {
  title: 'Journal',
  description: 'VBKD Journal Nr. 13, August 2026',
  href: '/news',
  images: ['tile-backgrounds/news/journal-13.jpg'],
  tileClassName: 'col-span-1 md:col-start-2 md:row-start-3 lg:col-start-1 lg:row-start-3',
  animationDelay: 6000,
}

const newsTile: GridTile = {
  title: 'News',
  description:
    'Bleiben Sie über Ausstellungen, Veröffentlichungen und Neuigkeiten des Vereins informiert.',
  href: '/news',
  images: [
    'tile-backgrounds/gallery/ines-kamper/image-1.jpg',
    'tile-backgrounds/gallery/dr-sabine-loos/image-1.jpg',
  ],
  tileClassName: 'col-span-1 md:col-start-3 md:row-start-3 lg:col-start-2 lg:row-start-3',
  animationDelay: 8200,
}

const workshopsTile: GridTile = {
  title: 'Workshops & Shows',
  description: 'Erkunden Sie regionale Workshops und Ausstellungen für Künstler und Interessierte.',
  href: '/workshops-and-shows',
  images: [
    'tile-backgrounds/gallery/margitta-baum/fruehlingsblumen-preview.jpg',
    'tile-backgrounds/gallery/dr-sabine-loos/image-2.jpg',
  ],
  tileClassName: 'col-span-1 md:col-start-2 md:row-start-4 lg:col-start-3 lg:row-start-3',
  animationDelay: 10000,
}

const aboutTile: GridTile = {
  title: 'Über uns',
  description:
    'Erfahren Sie mehr über den Verein, seine Mitglieder und die gemeinsame Leidenschaft für botanische Kunst.',
  href: '/uber-uns',
  images: [
    'tile-backgrounds/gallery/sophie-crossart/image-2.jpg',
    'tile-backgrounds/gallery/margitta-baum/cattleya-golden-boy-preview.jpg',
  ],
  tileClassName: 'col-span-1 md:col-start-3 md:row-start-4 lg:col-start-4 lg:row-start-3',
  animationDelay: 6200,
}

const contactTile: GridTile = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie den Verein für Fragen, Mitgliedschaften und Kooperationen.',
  href: '/kontakt',
  images: [
    'tile-backgrounds/gallery/katja-katholing-bloss/image-1.jpg',
    'tile-backgrounds/gallery/audrey-reilly/image-2.jpg',
  ],
  tileClassName: 'col-span-1 md:col-span-2 md:row-start-5 lg:col-span-2 lg:row-start-4',
  animationDelay: 6600,
}

const tilesToRender: GridTile[] = [
  welcomeTile,
  galerieTile,
  mitgliedschaftTile,
  journalTile,
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
              className="h-full min-h-[220px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
