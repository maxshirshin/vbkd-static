export default Page

import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'
import { CDNImage } from '@/components/ui/CDNImage'
import { Grid, Col } from '@/components/ui/Layout'
import { Tile } from '@/components/ui/Tile'

const tileColumns = {
  4: 'md:col-span-4',
  8: 'md:col-span-8',
} as const

type HomeTile = {
  title: string
  description: string
  images: string[]
  href?: string
  lg: number
  rowSpan?: boolean
  animationDelay?: number
}

const welcomeTile: HomeTile = {
  title: 'Willkommen bei VBKD',
  description:
    'Wir sind eine Gruppe von pflanzenbegeisterten Künstlern und Illustratoren, die botanische Kunst in Deutschland fördern und begeistern.',
  images: ['gallery/maxim-shirshin/image-1.jpg', 'gallery/bettina-buecker/daucus-carota-preview.webp'],
  lg: 8,
  rowSpan: true,
  animationDelay: 7000,
}

const journalTile: HomeTile = {
  title: 'Journal',
  description: 'VBKD Journal Nr. 13, August 2026',
  href: '/news',
  images: ['news/journal-13.jpg'],
  lg: 4,
  animationDelay: 5000,
}

const menuTiles: HomeTile[] = [
  {
    title: 'Galerie',
    description: 'Entdecken Sie die Werke unserer Mitglieder und die Vielfalt botanischer Kunst.',
    href: '/mitglieder',
    images: ['gallery/audrey-reilly/image-1.jpg', 'gallery/sue-henon/image-1.jpg'],
    lg: 4,
    animationDelay: 4000,
  },
  {
    title: 'News',
    description: 'Bleiben Sie über Ausstellungen, Veröffentlichungen und Neuigkeiten des Vereins informiert.',
    href: '/news',
    images: ['gallery/ines-kamper/image-1.jpg', 'gallery/dr-sabine-loos/image-1.jpg'],
    lg: 4,
    animationDelay: 8500,
  },
  {
    title: 'Workshops & Shows',
    description: 'Erkunden Sie regionale Workshops und Ausstellungen für Künstler und Interessierte.',
    href: '/workshops-and-shows',
    images: ['gallery/margitta-baum/fruehlingsblumen-preview.jpg', 'gallery/dr-sabine-loos/image-2.jpg'],
    lg: 4,
    animationDelay: 10000,
  },
  {
    title: 'Über uns',
    description: 'Erfahren Sie mehr über den Verein, seine Mitglieder und die gemeinsame Leidenschaft für botanische Kunst.',
    href: '/uber-uns',
    images: ['gallery/sophie-crossart/image-1.jpg', 'gallery/margitta-baum/cattleya-golden-boy-preview.jpg'],
    lg: 4,
    rowSpan: true,
    animationDelay: 6000,
  },
  {
    title: 'Mitgliedschaft',
    description: 'Informieren Sie sich über die Vorteile einer Mitgliedschaft und wie Sie sich einbinden können.',
    href: '/mitgliedschaft',
    images: ['gallery/margitta-baum/rosen-eddy-mitchell-preview.jpg', 'gallery/bettina-buecker/rosa-rugosa-preview.webp'],
    lg: 4,
    animationDelay: 9000,
  },
  {
    title: 'Kontakt',
    description: 'Kontaktieren Sie den Verein für Fragen, Mitgliedschaften und Kooperationen.',
    href: '/kontakt',
    images: ['gallery/katja-katholing-bloss/image-1.jpg', 'gallery/audrey-reilly/image-2.jpg'],
    lg: 8,
    animationDelay: 6500,
  },
]

const tilesToRender: HomeTile[] = [welcomeTile, journalTile, ...menuTiles]

function Page() {
  return (
    <>
      <Grid>
        <Col lg={8} md={12} sm={12} className="pt-10">
          <CDNImage
            srcPath="home-intro.png"
            alt="Verein Botanische Kunst Deutschland e.V."
            className="w-full max-w-md h-auto object-contain mb-8"
          />
          <Prose>
            <Heading as="h2">Willkommen beim Verein für Botanische Kunst Deutschland!</Heading>
            <p>Wir sind eine Gruppe von pflanzenbegeisterten Künstlern und Illustratoren.</p>
            <p>
              Wir möchten viele Menschen für die botanische Kunst begeistern und sie ermutigen sich
              uns anzuschließen.
            </p>
            <p>
              Professionelle und semiprofessionelle Künstler, Anfänger, Förderer und
              Naturinteressierte genießen die Vorteile einer Mitgliedschaft und unterstützen
              botanische Kunst in ganz Deutschland.
            </p>

            <hr className="my-8 border-border" />

            <p className="font-bold">Welcome to the German Society for Botanical Art!</p>
            <p>We are a group of plant-loving artists and illustrators.</p>
            <p>We want to arouse interest in botanical art and encourage people to join us.</p>
            <p>
              Professional and semi-professional artists, beginners, patrons and nature enthusiasts
              can enjoy the benefits of membership and support botanical art throughout Germany.
            </p>
          </Prose>
        </Col>

        <Col lg={4} md={12} sm={12}>
          <a href="/news" className="group block max-w-xs mx-auto text-center">
            <CDNImage
              srcPath="news/journal-13.jpg"
              alt="VBKD Journal Nr. 13, August 2026"
              className="w-full h-auto object-contain mb-4 transition-shadow group-hover:shadow-lg"
            />
            <p className="text-sm text-text-muted group-hover:text-primary transition-colors">
              VBKD Journal Nr. 13, August 2026
            </p>
          </a>
        </Col>
      </Grid>
    </>
  )
}
