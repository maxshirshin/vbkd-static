export default Page

import { Tile } from '@/components/ui/Tile'

type GridTile = {
  title: string
  description: string
  images: string[]
  href?: string
  gridClass: string
  animationDelay?: number
}

const welcomeTile: GridTile = {
  title: 'Willkommen bei VBKD',
  description: 'Wir sind eine Gruppe von pflanzenbegeisterten Künstlern und Illustratoren. Wir möchten viele Menschen für die botanische Kunst begeistern und sie ermutigen sich uns anzuschließen. Professionelle und semiprofessionelle Künstler, Anfänger, Förderer und Naturinteressierte genießen die Vorteile einer Mitgliedschaft und unterstützen botanische Kunst in ganz Deutschland.',
  href: '/uber-uns',
  images: ['gallery/maxim-shirshin/image-1.jpg', 'gallery/bettina-buecker/daucus-carota-preview.webp'],
  gridClass: 'index2-tile--welcome',
  animationDelay: 7000,
}

const galerieTile: GridTile = {
  title: 'Galerie',
  description: 'Entdecken Sie die Werke unserer Mitglieder und die Vielfalt botanischer Kunst.',
  href: '/mitglieder',
  images: ['gallery/audrey-reilly/image-1.jpg', 'gallery/sue-henon/image-1.jpg'],
  gridClass: 'index2-tile--galerie',
  animationDelay: 5000,
}

const mitgliedschaftTile: GridTile = {
  title: 'Mitgliedschaft',
  description: 'Informieren Sie sich über die Vorteile einer Mitgliedschaft und wie Sie sich einbinden können.',
  href: '/mitgliedschaft',
  images: ['gallery/margitta-baum/rosen-eddy-mitchell-preview.jpg', 'gallery/bettina-buecker/rosa-rugosa-preview.webp'],
  gridClass: 'index2-tile--mitgliedschaft',
  animationDelay: 9000,
}

const journalTile: GridTile = {
  title: 'Journal',
  description: 'VBKD Journal Nr. 13, August 2026',
  href: '/news',
  images: ['news/journal-13.jpg', 'gallery/sophie-crossart/image-1.jpg'],
  gridClass: 'index2-tile--journal',
  animationDelay: 6000,
}

const newsTile: GridTile = {
  title: 'News',
  description: 'Bleiben Sie über Ausstellungen, Veröffentlichungen und Neuigkeiten des Vereins informiert.',
  href: '/news',
  images: ['gallery/ines-kamper/image-1.jpg', 'gallery/dr-sabine-loos/image-1.jpg'],
  gridClass: 'index2-tile--news',
  animationDelay: 8200,
}

const workshopsTile: GridTile = {
  title: 'Workshops & Shows',
  description: 'Erkunden Sie regionale Workshops und Ausstellungen für Künstler und Interessierte.',
  href: '/workshops-and-shows',
  images: ['gallery/margitta-baum/fruehlingsblumen-preview.jpg', 'gallery/dr-sabine-loos/image-2.jpg'],
  gridClass: 'index2-tile--workshops',
  animationDelay: 10000,
}

const aboutTile: GridTile = {
  title: 'Über uns',
  description: 'Erfahren Sie mehr über den Verein, seine Mitglieder und die gemeinsame Leidenschaft für botanische Kunst.',
  href: '/uber-uns',
  images: ['gallery/sophie-crossart/image-2.jpg', 'gallery/margitta-baum/cattleya-golden-boy-preview.jpg'],
  gridClass: 'index2-tile--about',
  animationDelay: 6200,
}

const contactTile: GridTile = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie den Verein für Fragen, Mitgliedschaften und Kooperationen.',
  href: '/kontakt',
  images: ['gallery/katja-katholing-bloss/image-1.jpg', 'gallery/audrey-reilly/image-2.jpg'],
  gridClass: 'index2-tile--contact',
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
    <>
      <style>{`
        .index2-grid {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          grid-auto-rows: minmax(220px, 1fr);
        }

        .index2-tile {
          height: 100%;
          grid-column: 1 / -1;
          grid-row: auto;
        }

        @media (min-width: 768px) {
          .index2-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .index2-tile--welcome {
            grid-column: 1 / span 2;
            grid-row: 1 / span 2;
          }

          .index2-tile--galerie {
            grid-column: 3 / span 1;
            grid-row: 1 / span 2;
          }

          .index2-tile--mitgliedschaft {
            grid-column: 1 / span 1;
            grid-row: 3 / span 2;
          }

          .index2-tile--journal {
            grid-column: 2 / span 1;
            grid-row: 3 / span 1;
          }

          .index2-tile--news {
            grid-column: 3 / span 1;
            grid-row: 3 / span 1;
          }

          .index2-tile--workshops {
            grid-column: 2 / span 1;
            grid-row: 4 / span 1;
          }

          .index2-tile--about {
            grid-column: 3 / span 1;
            grid-row: 4 / span 1;
          }

          .index2-tile--contact {
            grid-column: 1 / span 2;
            grid-row: 5 / span 1;
          }
        }

        @media (min-width: 1024px) {
          .index2-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .index2-tile--welcome {
            grid-column: 1 / span 2;
            grid-row: 1 / span 2;
          }

          .index2-tile--galerie {
            grid-column: 3 / span 1;
            grid-row: 1 / span 2;
          }

          .index2-tile--mitgliedschaft {
            grid-column: 4 / span 1;
            grid-row: 1 / span 2;
          }

          .index2-tile--journal {
            grid-column: 1 / span 1;
            grid-row: 3 / span 1;
          }

          .index2-tile--news {
            grid-column: 2 / span 1;
            grid-row: 3 / span 1;
          }

          .index2-tile--workshops {
            grid-column: 3 / span 1;
            grid-row: 3 / span 1;
          }

          .index2-tile--about {
            grid-column: 4 / span 1;
            grid-row: 3 / span 1;
          }

          .index2-tile--contact {
            grid-column: 1 / span 2;
            grid-row: 4 / span 1;
          }
        }
      `}</style>

      <div className="w-full mx-auto max-w-[var(--container-max)] px-6 pt-10 pb-4">
        <div className="index2-grid">
          {tilesToRender.map((tile) => (
            <div key={tile.title} className={`index2-tile ${tile.gridClass}`}>
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
    </>
  )
}
