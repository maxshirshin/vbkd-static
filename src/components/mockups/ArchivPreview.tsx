import { useState } from 'react'
import { CDNImage } from '@/components/ui/CDNImage'

const navLinks = [
  { label: 'Startseite', href: '/' },
  { label: 'Über uns', href: '/uber-uns' },
  { label: 'Galerie', href: '/mitglieder' },
  { label: 'Neuigkeiten', href: '/news' },
  { label: 'Workshops', href: '/workshops-and-shows' },
  { label: 'Mitgliedschaft', href: '/mitgliedschaft' },
  { label: 'Kontakt', href: '/kontakt' },
  {
    label: 'Mitgliederbereich',
    href: 'https://mitgliederbereich.vereinbotanischekunst.de/',
    external: true,
  },
]

const heroPlates = [
  {
    species: 'Daucus carota',
    commonName: 'Wilde Möhre',
    artist: 'Bettina Bücker',
    image: 'gallery/bettina-buecker/daucus-carota-preview.webp',
    href: '/bettina-buecker',
    alt: 'Botanische Illustration der Wilden Möhre (Daucus carota) von Bettina Bücker',
  },
  {
    species: 'Helleborus orientalis',
    commonName: 'Orientalische Nieswurz',
    artist: 'Dr. Sabine Loos',
    image: 'gallery/dr-sabine-loos/image-1.jpg',
    href: '/dr-sabine-loos',
    alt: 'Orientalische Nieswurz (Helleborus orientalis), Aquarell auf Pergament von Dr. Sabine Loos',
  },
]

const galleryPlates = [
  {
    number: '01',
    species: 'Cimicifuga racemosa',
    artist: 'Bettina Bücker',
    medium: 'Farbstift und Graphit auf Papier',
    image: 'gallery/bettina-buecker/bettina-buecker-cimicifuga-racemosa-preview.jpg',
    href: '/bettina-buecker',
    alt: 'Botanische Illustration von Cimicifuga racemosa von Bettina Bücker',
  },
  {
    number: '02',
    species: 'Tulipa x gesneriana',
    artist: 'Maxim Shirshin',
    medium: 'Aquarell und Farbstift auf Papier',
    image: 'gallery/maxim-shirshin/image-1.jpg',
    href: '/maxim-shirshin',
    alt: 'Rote Papageitulpe, Tulipa x gesneriana, von Maxim Shirshin',
  },
  {
    number: '03',
    species: 'Tannenzapfen aus Schwarzwald',
    artist: 'Maxim Shirshin',
    medium: 'Aquarell und Farbstift auf Papier',
    image: 'gallery/maxim-shirshin/tannenzapfen-aus-schwarzwald.png',
    href: '/maxim-shirshin',
    alt: 'Tannenzapfen aus Schwarzwald von Maxim Shirshin',
  },
  {
    number: '04',
    species: 'Olea europaea',
    artist: 'Maxim Shirshin',
    medium: 'Aquarell und Farbstift auf Papier',
    image: 'gallery/maxim-shirshin/image-3.jpg',
    href: '/maxim-shirshin',
    alt: 'Sieben Oliven aus Malta, Olea europaea, von Maxim Shirshin',
  },
  {
    number: '05',
    species: 'Werk 1',
    artist: 'Ines Kamper',
    medium: 'Aquarell auf Papier',
    image: 'gallery/ines-kamper/image-1.jpg',
    href: '/ines-kamper',
    alt: 'Botanisches Werk 1 von Ines Kamper',
  },
  {
    number: '06',
    species: 'Werk 3',
    artist: 'Ines Kamper',
    medium: 'Aquarell auf Papier',
    image: 'gallery/ines-kamper/image-3.jpg',
    href: '/ines-kamper',
    alt: 'Botanisches Werk 3 von Ines Kamper',
  },
]

const newsEntries = [
  {
    category: 'Vereinsjournal · Mai 2026',
    title: 'VBKD Journal Nr. 12, Mai 2026',
    image: 'news/journal-12.png',
    alt: 'Titelseite VBKD Journal Nr. 12, Mai 2026',
    description:
      'Rückblick auf die internationale Ausstellung »Orchids, Orchids, Orchids...« im Rahmen der 24. World Orchid Conference in Dresden sowie Berichte über Preisgewinner, Botanik, Farbpigmente und Mitgliederporträts.',
    href: '/news',
  },
  {
    category: 'Vereinsjournal · Februar 2026',
    title: 'Journal Nr. 11 des VBKD',
    image: 'news/journal-11.png',
    alt: 'Titelseite Journal Nr. 11 des VBKD',
    description:
      'Vorbereitung auf die Ausstellung »Orchids, Orchids, Orchids...« in Dresden, Porträt des Feldrittersporns als Blume des Jahres 2026, Alexander von Humboldts Beitrag zur botanischen Illustration und aktuelle Workshop-Übersichten.',
    href: '/news',
  },
  {
    category: 'Ausstellung · 30. Juni – 20. Oktober 2024',
    title: 'ART & Vielfalt – Impressionen aus der Tier- und Pflanzenwelt',
    image: 'news/art-und-vielfalt.jpg',
    alt: 'Ausstellung ART & Vielfalt im Museum für Naturkunde Magdeburg',
    description:
      'Ausstellung im Museum für Naturkunde Magdeburg mit realistischen und naturgetreuen Darstellungen von Tieren und Pflanzen in Malerei, Grafik, Handzeichnung, Plastik und Skulptur.',
    href: '/news',
  },
]

const workshopRegions = [
  {
    region: 'Hessen',
    format: 'Präsenzunterricht',
    href: '/workshops-in-hessen',
  },
  {
    region: 'Bayern',
    format: 'Präsenzunterricht',
    href: '/workshops-in-bayern',
  },
  {
    region: 'Niedersachsen',
    format: 'Präsenzunterricht',
    href: '/workshops-in-niedersachsen',
  },
  {
    region: 'Thüringen',
    format: 'Präsenzunterricht',
    href: '/workshops-in-thueringen',
  },
  {
    region: 'Onlineunterricht',
    format: 'Onlinekurs',
    href: '/botanische-aquarellmalerei',
  },
]

const membershipBenefits = [
  {
    title: 'Journal',
    image: 'membership/journal.jpg',
    alt: 'VBKD Journal',
    text: 'Vierteljährlich erscheinendes Journal mit Informationen und Neuigkeiten rund um die botanische Kunst.',
  },
  {
    title: 'Botanical Art Talks',
    image: 'membership/talks.jpg',
    alt: 'Botanical Art Talks',
    text: 'Online-Vorträge auf Deutsch und Englisch mit nationalen und internationalen Künstlern und Experten.',
  },
  {
    title: 'Workshops',
    image: 'membership/workshops.jpg',
    alt: 'Workshops für Mitglieder',
    text: 'Workshops unter Leitung von Vereinsmitgliedern und internationalen Künstlern.',
  },
  {
    title: 'Ausstellungen',
    image: 'membership/ausstellungen.jpg',
    alt: 'Ausstellungen des VBKD',
    text: 'Gemeinsame Präsentation von Werken in Online-Ausstellungen und Ausstellungen vor Ort.',
  },
  {
    title: 'Austausch',
    image: 'membership/austausch.jpg',
    alt: 'Austausch im Mitgliederbereich',
    text: 'Vernetzung und fachlicher Austausch mit anderen Mitgliedern im internen Mitgliederbereich.',
  },
]

const membershipTypes = [
  {
    name: 'Fördermitglieder (Associate Members)',
    description: 'Sie lieben botanische Kunst, praktizieren sie aber nicht selbst.',
  },
  {
    name: 'Vollmitglieder (Full Members)',
    description: 'Sie sind aktive Künstler in unserem Verein.',
  },
  {
    name: 'Premium-Mitglieder (Featured Members)',
    description:
      'Ihre Arbeiten werden nach einem Bewerbungsverfahren vom Beirat als hochwertig und botanisch präzise bewertet. Sie präsentieren ihre Werke in der Online-Galerie.',
  },
  {
    name: 'Ehrenmitglieder (Honorary Members)',
    description:
      'Sie werden für besondere Verdienste um die botanische Kunst, die Botanik, die biologische Vielfalt oder den Umweltschutz geehrt.',
  },
]

const paletteSwatches = [
  {
    name: 'Archivgrund',
    hex: '#F2ECE0',
    role: 'Folio-Hintergrund',
    textClass: 'text-[#2B231C]',
  },
  {
    name: 'Elfenbein',
    hex: '#FDFBF7',
    role: 'Tafelgrund & Flächen',
    textClass: 'text-[#2B231C]',
  },
  {
    name: 'Sepia-Tinte',
    hex: '#2B231C',
    role: 'Fließtext & Titel',
    textClass: 'text-[#FDFBF7]',
  },
  {
    name: 'Herbarium-Oliv',
    hex: '#3B4C32',
    role: 'Primäraktion & Akzent',
    textClass: 'text-[#FDFBF7]',
  },
  {
    name: 'Umbra-Braun',
    hex: '#614835',
    role: 'Metadaten & Sekundärakzent',
    textClass: 'text-[#FDFBF7]',
  },
]

function SectionHeader({
  title,
  actionHref,
  actionLabel,
}: {
  title: string
  actionHref?: string
  actionLabel?: string
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#C5BAA2] pb-5 sm:flex-row sm:items-end">
      <div>
        <h2 className="archiv-serif text-3xl leading-tight font-medium text-[#2B231C] sm:text-4xl">
          {title}
        </h2>
      </div>
      {actionHref && actionLabel ? (
        <a
          href={actionHref}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 border border-[#614835] bg-[#FDFBF7] px-4 py-2 text-sm font-medium !text-[#2B231C] !no-underline transition-colors hover:bg-[#3B4C32] hover:!text-[#FDFBF7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B4C32]"
        >
          <span>{actionLabel}</span>
          <span aria-hidden="true">→</span>
        </a>
      ) : null}
    </div>
  )
}

export default function ArchivPreview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div
      className="min-h-screen w-full bg-[#F2ECE0] font-['Inter'] text-[#2B231C] selection:bg-[#3B4C32] selection:text-[#FDFBF7] lg:flex"
      style={{ colorScheme: 'light' }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
        .archiv-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
      `}</style>

      {/* Desktop Persistent Left Sidebar */}
      <aside
        aria-label="Vereinsnavigation und Übersicht"
        className="hidden border-r border-[#C5BAA2] bg-[#FAF6EC] lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:shrink-0 lg:flex-col lg:justify-between lg:overflow-y-auto"
      >
        <div>
          <div className="border-b border-[#C5BAA2] px-6 py-6">
            <a
              href="/"
              className="flex items-center gap-3.5 !text-[#2B231C] !no-underline hover:!text-[#3B4C32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B4C32]"
            >
              <CDNImage srcPath="logo.png" alt="VBKD Logo" className="h-14 w-14 object-contain" />
              <div>
                <span className="archiv-serif block text-2xl leading-none font-semibold text-[#2B231C]">
                  VBKD e.V.
                </span>
                <span className="mt-1 block text-xs leading-snug text-[#614835]">
                  Verein Botanische Kunst Deutschland
                </span>
              </div>
            </a>
          </div>

          <nav aria-label="Hauptnavigation" className="px-3 py-5">
            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex min-h-11 items-center justify-between rounded-sm px-3 py-2.5 text-base font-medium !text-[#2B231C] !no-underline transition-colors hover:bg-[#F2ECE0] hover:!text-[#3B4C32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B4C32]"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="text-xs text-[#614835]">
                      {item.external ? '↗' : '→'}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-[#C5BAA2] bg-[#F2ECE0]/60 px-6 py-5">
          <nav aria-label="Rechtliches" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a
              href="/impressum"
              className="py-1 !text-[#2B231C] !no-underline hover:!text-[#3B4C32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B4C32]"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="py-1 !text-[#2B231C] !no-underline hover:!text-[#3B4C32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B4C32]"
            >
              Datenschutz
            </a>
            <a
              href="/Satzung-VBKD.pdf"
              className="py-1 !text-[#2B231C] !no-underline hover:!text-[#3B4C32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B4C32]"
            >
              Satzung (PDF)
            </a>
          </nav>
        </div>
      </aside>

      {/* Mobile Collapsible Top Header */}
      <header className="border-b border-[#C5BAA2] bg-[#FAF6EC] lg:hidden">
        <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <a
            href="/"
            className="flex items-center gap-3 !text-[#2B231C] !no-underline hover:!text-[#3B4C32]"
          >
            <CDNImage srcPath="logo.png" alt="VBKD Logo" className="h-14 w-14 object-contain" />
            <div>
              <span className="archiv-serif block text-2xl leading-none font-semibold text-[#2B231C]">
                VBKD e.V.
              </span>
              <span className="mt-0.5 block text-xs text-[#614835]">
                Verein Botanische Kunst Deutschland
              </span>
            </div>
          </a>
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="archiv-mobile-nav"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex min-h-11 items-center gap-2 border border-[#614835] bg-[#FDFBF7] px-3.5 py-2 text-sm font-semibold text-[#2B231C] hover:bg-[#3B4C32] hover:text-[#FDFBF7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B4C32]"
          >
            <span>{mobileMenuOpen ? 'Schließen' : 'Menü'}</span>
            <span aria-hidden="true">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {mobileMenuOpen ? (
          <div id="archiv-mobile-nav" className="border-t border-[#C5BAA2] bg-[#FAF6EC] px-4 py-4">
            <nav aria-label="Mobile Hauptnavigation">
              <ul className="space-y-1">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex min-h-11 items-center justify-between px-3 py-2.5 text-base font-medium !text-[#2B231C] !no-underline hover:bg-[#F2ECE0] hover:!text-[#3B4C32]"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-xs text-[#614835]">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 flex flex-wrap gap-4 border-t border-[#C5BAA2] pt-3 text-sm">
              <a href="/impressum" className="!text-[#2B231C] !no-underline hover:!text-[#3B4C32]">
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="!text-[#2B231C] !no-underline hover:!text-[#3B4C32]"
              >
                Datenschutz
              </a>
              <a
                href="/Satzung-VBKD.pdf"
                className="!text-[#2B231C] !no-underline hover:!text-[#3B4C32]"
              >
                Satzung (PDF)
              </a>
            </div>
          </div>
        ) : null}
      </header>

      {/* Right Main Folio */}
      <div className="min-w-0 flex-1 bg-[#F2ECE0]">
        <main className="mx-auto max-w-[1140px] px-4 py-8 sm:px-8 lg:px-12 lg:py-12">
          {/* Hero / Folio Top */}
          <section aria-labelledby="folio-title" className="border-b border-[#C5BAA2] pb-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <h1
                  id="folio-title"
                  className="archiv-serif text-4xl leading-[1.05] font-medium text-[#2B231C] sm:text-5xl lg:text-6xl"
                >
                  Verein Botanische Kunst Deutschland e.V.
                </h1>
              </div>
              <div className="border-l-2 border-[#3B4C32] pl-5">
                <p className="text-base leading-relaxed text-[#2B231C]">
                  Der gemeinnützige Verein für Botanische Kunst Deutschland (VBKD) wurde im
                  September 2022 von Botanischen Künstlern aus Deutschland gegründet. Wir fördern
                  botanische Kunst durch Ausstellungen, Workshops, das Vereinsjournal und den
                  fachlichen Austausch.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/mitglieder"
                    className="inline-flex min-h-11 items-center bg-[#3B4C32] px-5 py-2.5 text-sm font-semibold !text-[#FDFBF7] !no-underline transition-colors hover:bg-[#2B231C] hover:!text-[#FDFBF7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B4C32]"
                  >
                    Mitglieder-Galerie öffnen
                  </a>
                  <a
                    href="/mitgliedschaft"
                    className="inline-flex min-h-11 items-center border border-[#614835] bg-[#FDFBF7] px-5 py-2.5 text-sm font-semibold !text-[#2B231C] !no-underline transition-colors hover:bg-[#614835] hover:!text-[#FDFBF7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#614835]"
                  >
                    Mitgliedschaft (60 €/Jahr)
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {heroPlates.map((plate) => (
                <article
                  key={plate.species}
                  className="border border-[#C5BAA2] bg-[#FDFBF7] transition-colors hover:border-[#614835]"
                >
                  <a
                    href={plate.href}
                    className="block !text-[#2B231C] !no-underline hover:!text-[#2B231C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B4C32]"
                  >
                    <div className="border-b border-[#C5BAA2] bg-[#FAF6EC] px-5 py-3">
                      <span className="text-sm font-semibold text-[#2B231C]">{plate.artist}</span>
                    </div>
                    <div className="bg-[#FDFBF7] p-5 sm:p-6">
                      <CDNImage
                        srcPath={plate.image}
                        alt={plate.alt}
                        className="aspect-[4/3] w-full object-contain"
                        loading="eager"
                        fetchPriority="high"
                      />
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-t border-[#C5BAA2] px-5 py-4">
                      <div>
                        <h2 className="archiv-serif text-2xl font-medium text-[#2B231C] italic">
                          {plate.species}
                        </h2>
                        <p className="mt-0.5 text-sm text-[#614835]">{plate.commonName}</p>
                      </div>
                      <span className="text-sm font-medium text-[#3B4C32]">Zur Galerie →</span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Section 01: Der Verein & Was ist botanische Kunst? */}
          <section aria-labelledby="sec-01" className="border-b border-[#C5BAA2] py-14">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border border-[#C5BAA2] bg-[#FDFBF7] p-6">
                  <h2
                    id="sec-01"
                    className="archiv-serif text-2xl font-semibold text-[#2B231C] sm:text-3xl"
                  >
                    Der Verein (VBKD)
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#2B231C]">
                    Der gemeinnützige Verein für Botanische Kunst Deutschland (VBKD) wurde im
                    September 2022 von Botanischen Künstlern aus Deutschland gegründet. Unser Ziel
                    ist es, in der Tradition Georg Ehrets, Sibylla Merians und Ernst Häckels die
                    Botanische Kunst in Deutschland wieder aufleben zu lassen, sie zu fördern und
                    ihre moderne Entwicklung zu begleiten.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#2B231C]">
                    Wir fördern das Bewusstsein und das Verständnis für Botanische Kunst durch
                    Veranstaltungen und Ausstellungen und stärken die Techniken und Fähigkeiten
                    unserer Mitglieder durch Workshops und Austausch.
                  </p>
                  <div className="mt-5">
                    <a
                      href="/uber-uns"
                      className="inline-flex min-h-11 items-center text-sm font-semibold !text-[#3B4C32] !no-underline hover:!text-[#2B231C]"
                    >
                      Seite „Über uns“ lesen →
                    </a>
                  </div>
                </div>

                <div className="border border-[#C5BAA2] bg-[#FDFBF7] p-6">
                  <h2 className="archiv-serif text-2xl font-semibold text-[#2B231C] sm:text-3xl">
                    Was ist botanische Kunst?
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#2B231C]">
                    Botanische Kunst ist der Schnittpunkt von Wissenschaft und Kunst. Sie ist die
                    sorgfältige und kunstvolle Darstellung von Pflanzen, Pilzen und Flechten auf der
                    Grundlage direkter Beobachtung und eines gründlichen Verständnisses ihrer
                    Struktur.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#2B231C]">
                    Jedes botanische Kunstwerk muss botanisch korrekt sein und die Form, Farbe,
                    Proportionen sowie charakteristischen Merkmale des Motivs originalgetreu
                    wiedergeben – meist direkt nach lebenden Exemplaren über verschiedene
                    Wachstumsstadien hinweg.
                  </p>
                  <div className="mt-5">
                    <a
                      href="/was-ist-botanische-kunst"
                      className="inline-flex min-h-11 items-center text-sm font-semibold !text-[#3B4C32] !no-underline hover:!text-[#2B231C]"
                    >
                      Mehr über botanische Kunst →
                    </a>
                  </div>
                </div>
              </div>

              <figure className="border border-[#C5BAA2] bg-[#FDFBF7] p-4">
                <CDNImage
                  srcPath="ausstellung-marz-2023/kupferstiche.jpg"
                  alt="Historische Kupferstiche aus der Sammlung Dr. Michael Gutheil bei der Gründungs-Ausstellung 2023"
                  className="aspect-[4/3] w-full object-contain bg-[#FAF6EC]"
                />
                <figcaption className="mt-3 border-t border-[#C5BAA2] pt-3 text-xs leading-relaxed text-[#614835]">
                  Historische botanische Kupferstiche aus der Sammlung von Dr. Michael Gutheil,
                  gezeigt bei der Gründungs-Ausstellung des VBKD im März 2023 in Rudolstadt.
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Section 02: Premium- und Gründungsmitglieder-Galerie: Ausgewählte Tafeln */}
          <section aria-labelledby="sec-02" className="border-b border-[#C5BAA2] py-14">
            <SectionHeader
              title="Premium- und Gründungsmitglieder-Galerie: Ausgewählte Tafeln"
              actionHref="/mitglieder"
              actionLabel="Alle Mitglieder-Galerien"
            />
            <h3 id="sec-02" className="sr-only">
              Ausgewählte Werke der Premium- und Gründungsmitglieder
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryPlates.map((plate) => (
                <article
                  key={`${plate.number}-${plate.species}`}
                  className="flex flex-col border border-[#C5BAA2] bg-[#FDFBF7]"
                >
                  <div className="border-b border-[#C5BAA2] bg-[#FAF6EC] px-4 py-2.5">
                    <span className="text-sm font-semibold text-[#2B231C]">{plate.artist}</span>
                  </div>
                  <a
                    href={plate.href}
                    className="block flex-1 bg-[#FDFBF7] p-4 !no-underline transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B4C32]"
                  >
                    <CDNImage
                      srcPath={plate.image}
                      alt={plate.alt}
                      className="aspect-[4/5] w-full object-contain"
                    />
                  </a>
                  <dl className="grid grid-cols-[88px_1fr] gap-y-2 border-t border-[#C5BAA2] bg-[#FAF6EC]/50 px-4 py-3.5 text-sm">
                    <dt className="font-medium text-[#614835]">Art</dt>
                    <dd className="archiv-serif text-lg leading-snug font-medium text-[#2B231C]">
                      {plate.species}
                    </dd>
                    <dt className="font-medium text-[#614835]">Medium</dt>
                    <dd className="text-[#2B231C]">{plate.medium}</dd>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          {/* Section 03: Neuigkeiten & Ausstellungen */}
          <section aria-labelledby="sec-03" className="border-b border-[#C5BAA2] py-14">
            <SectionHeader
              title="Neuigkeiten & Ausstellungen"
              actionHref="/news"
              actionLabel="Alle Neuigkeiten"
            />
            <h3 id="sec-03" className="sr-only">
              Aktuelle Meldungen, Journale und Ausstellungen
            </h3>
            <div className="space-y-5">
              {newsEntries.map((entry) => (
                <article
                  key={entry.title}
                  className="grid gap-6 border border-[#C5BAA2] bg-[#FDFBF7] p-5 md:grid-cols-[200px_1fr] md:items-center"
                >
                  <div className="border border-[#C5BAA2] bg-[#FAF6EC] p-2">
                    <CDNImage
                      srcPath={entry.image}
                      alt={entry.alt}
                      className="aspect-[4/3] w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-[#614835] uppercase">
                      {entry.category}
                    </p>
                    <h4 className="archiv-serif mt-1.5 text-2xl font-medium text-[#2B231C] sm:text-3xl">
                      {entry.title}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#2B231C]">
                      {entry.description}
                    </p>
                    <div className="mt-4">
                      <a
                        href={entry.href}
                        className="inline-flex min-h-11 items-center border border-[#3B4C32] bg-[#3B4C32] px-4 py-2 text-sm font-semibold !text-[#FDFBF7] !no-underline transition-colors hover:bg-[#2B231C] hover:!text-[#FDFBF7]"
                      >
                        Beitrag auf /news lesen →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 04: Workshops vor Ort und online */}
          <section aria-labelledby="sec-04" className="border-b border-[#C5BAA2] py-14">
            <SectionHeader
              title="Workshops vor Ort und online"
              actionHref="/workshops-and-shows"
              actionLabel="Zur Workshop-Übersicht"
            />
            <p id="sec-04" className="mb-6 text-base text-[#2B231C]">
              Workshops vor Ort und online von Künstlern im deutschsprachigen Raum – nach
              Bundesländern sowie als Onlineunterricht geordnet.
            </p>
            <div className="overflow-x-auto border border-[#C5BAA2] bg-[#FDFBF7]">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#C5BAA2] bg-[#FAF6EC] text-xs tracking-[0.12em] text-[#614835] uppercase">
                    <th className="px-4 py-3 font-semibold">Region / Bereich</th>
                    <th className="px-4 py-3 font-semibold">Format</th>
                    <th className="px-4 py-3 text-right font-semibold">Seite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C5BAA2]">
                  {workshopRegions.map((row) => (
                    <tr key={row.href} className="hover:bg-[#FAF6EC]/60">
                      <td className="archiv-serif px-4 py-3.5 text-xl font-medium text-[#2B231C]">
                        {row.region}
                      </td>
                      <td className="px-4 py-3.5 text-xs font-medium text-[#614835]">
                        {row.format}
                      </td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap">
                        <a
                          href={row.href}
                          className="inline-flex min-h-10 items-center font-semibold !text-[#3B4C32] !no-underline hover:!text-[#2B231C]"
                        >
                          Öffnen →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 05: Mitgliedschaft & Vorteile */}
          <section aria-labelledby="sec-05" className="border-b border-[#C5BAA2] py-14">
            <SectionHeader
              title="Mitgliedschaft & Vorteile"
              actionHref="/mitgliedschaft"
              actionLabel="Mitglied werden"
            />
            <h3 id="sec-05" className="sr-only">
              Vorteile, Mitgliedsarten und Kontakt
            </h3>

            {/* 5-item image strip */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {membershipBenefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="flex flex-col border border-[#C5BAA2] bg-[#FDFBF7]"
                >
                  <div className="border-b border-[#C5BAA2] bg-[#FAF6EC] p-2">
                    <CDNImage
                      srcPath={benefit.image}
                      alt={benefit.alt}
                      className="aspect-square w-full object-contain"
                    />
                  </div>
                  <div className="flex-1 p-3.5">
                    <h4 className="archiv-serif text-xl font-semibold text-[#2B231C]">
                      {benefit.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#2B231C]">{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="border border-[#C5BAA2] bg-[#FDFBF7] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#C5BAA2] pb-4">
                  <h4 className="archiv-serif text-2xl font-semibold text-[#2B231C]">
                    Vier Mitgliedschaftsarten
                  </h4>
                  <span className="bg-[#3B4C32] px-3 py-1 text-xs font-semibold text-[#FDFBF7]">
                    Beitrag: 60 € / Kalenderjahr
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#614835]">
                  Im ersten Mitgliedsjahr ist der Beitrag gestaffelt. Wohnsitz in Deutschland
                  erforderlich.
                </p>
                <dl className="mt-4 space-y-3">
                  {membershipTypes.map((type) => (
                    <div
                      key={type.name}
                      className="border-l-2 border-[#C5BAA2] pl-3.5 text-sm leading-relaxed"
                    >
                      <dt className="font-semibold text-[#2B231C]">{type.name}</dt>
                      <dd className="text-[#2B231C]">{type.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-col justify-between border border-[#C5BAA2] bg-[#FAF6EC] p-6">
                <div>
                  <p className="text-sm leading-relaxed text-[#2B231C]">
                    Sie erreichen den Verein Botanische Kunst Deutschland e.V. per E-Mail oder über
                    unsere Kontaktseite.
                  </p>
                  <dl className="mt-4 space-y-2 border-t border-[#C5BAA2] pt-4 text-sm">
                    <div>
                      <dt className="text-xs font-semibold text-[#614835] uppercase">
                        Allgemeine Anfragen
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href="mailto:info@verein-botanischekunst.de"
                          className="font-semibold !text-[#3B4C32] !no-underline hover:!text-[#2B231C]"
                        >
                          info@verein-botanischekunst.de
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-[#614835] uppercase">
                        Geschäftsadresse
                      </dt>
                      <dd className="mt-0.5 text-[#2B231C]">
                        Verein Botanische Kunst e.V. · Zu Hd. Audrey Reilly · Im Hagen 11 · 30900
                        Wedemark
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/kontakt"
                    className="inline-flex min-h-11 items-center bg-[#3B4C32] px-4 py-2 text-sm font-semibold !text-[#FDFBF7] !no-underline transition-colors hover:bg-[#2B231C] hover:!text-[#FDFBF7]"
                  >
                    Zur Kontaktseite →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 06: Designsystem-Musterblatt */}
          <section aria-labelledby="sec-06" className="py-14">
            <SectionHeader title="Designsystem-Musterblatt" />
            <h3 id="sec-06" className="sr-only">
              Farbpalette, Typografie, Schaltflächen und Katalog-Elemente
            </h3>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Palette swatches */}
              <div className="border border-[#C5BAA2] bg-[#FDFBF7] p-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-[#614835] uppercase">
                  Farbpalette (WCAG AA geprüft)
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {paletteSwatches.map((swatch) => (
                    <div key={swatch.hex} className="border border-[#C5BAA2]">
                      <div
                        className={`flex h-16 items-end p-2 text-xs font-semibold ${swatch.textClass}`}
                        style={{ backgroundColor: swatch.hex }}
                      >
                        {swatch.hex}
                      </div>
                      <div className="bg-[#FAF6EC] p-2">
                        <p className="text-xs font-semibold text-[#2B231C]">{swatch.name}</p>
                        <p className="text-[11px] text-[#614835]">{swatch.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography specimen */}
              <div className="border border-[#C5BAA2] bg-[#FDFBF7] p-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-[#614835] uppercase">
                  Typografie · Cormorant Garamond &amp; Inter
                </p>
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="text-xs text-[#614835]">Überschrift / Botanische Namen</span>
                    <p className="archiv-serif text-3xl font-medium text-[#2B231C]">
                      Cormorant Garamond · <em>Daucus carota</em>
                    </p>
                  </div>
                  <div className="border-t border-[#C5BAA2] pt-3">
                    <span className="text-xs text-[#614835]">Fließtext &amp; Metadaten</span>
                    <p className="mt-1 text-sm leading-relaxed text-[#2B231C]">
                      Inter (14px–16px) sorgt für hohe Lesbarkeit in Tabellen, Katalogleisten und
                      Navigationselementen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contrast-checked buttons */}
              <div className="border border-[#C5BAA2] bg-[#FDFBF7] p-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-[#614835] uppercase">
                  Schaltflächen &amp; Links
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/mitglieder"
                    className="inline-flex min-h-11 items-center bg-[#3B4C32] px-4 py-2 text-sm font-semibold !text-[#FDFBF7] !no-underline hover:bg-[#2B231C] hover:!text-[#FDFBF7]"
                  >
                    Primär (#3B4C32)
                  </a>
                  <a
                    href="/news"
                    className="inline-flex min-h-11 items-center bg-[#614835] px-4 py-2 text-sm font-semibold !text-[#FDFBF7] !no-underline hover:bg-[#2B231C] hover:!text-[#FDFBF7]"
                  >
                    Sekundär (#614835)
                  </a>
                  <a
                    href="/kontakt"
                    className="inline-flex min-h-11 items-center border border-[#2B231C] bg-[#FDFBF7] px-4 py-2 text-sm font-semibold !text-[#2B231C] !no-underline hover:bg-[#F2ECE0] hover:!text-[#2B231C]"
                  >
                    Umriss (#2B231C)
                  </a>
                </div>
                <p className="mt-4 text-xs text-[#614835]">
                  Alle Links nutzen explizite Kontrastfarben und unterdrücken unkontrollierte
                  Standard-Unterstreichungen durch globale Regeln.
                </p>
              </div>

              {/* Sample card & text block */}
              <div className="border border-[#C5BAA2] bg-[#FDFBF7] p-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-[#614835] uppercase">
                  Beispiel-Katalogeintrag &amp; Textblock
                </p>
                <div className="mt-4 grid gap-4 border border-[#C5BAA2] bg-[#FAF6EC] p-4 sm:grid-cols-[120px_1fr] sm:items-center">
                  <div className="border border-[#C5BAA2] bg-[#FDFBF7] p-2 text-center">
                    <span className="archiv-serif block text-xl text-[#614835]">Beispiel</span>
                    <span className="block text-xs text-[#2B231C]">Katalogkarte</span>
                  </div>
                  <div>
                    <h4 className="archiv-serif text-xl font-semibold text-[#2B231C]">
                      Systematische Beschriftung
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#2B231C]">
                      Klare 1px-Haarlinien (#C5BAA2), unbeschnittene Darstellung auf Elfenbein
                      (#FDFBF7) und eindeutige Quellenangabe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Mobile-Only Bottom Legal Links */}
        <footer className="border-t border-[#C5BAA2] bg-[#FAF6EC] lg:hidden">
          <nav
            aria-label="Rechtliche Hinweise"
            className="mx-auto flex max-w-[1140px] flex-wrap gap-x-6 gap-y-2 px-4 py-4 text-sm sm:px-8"
          >
            <a
              href="/impressum"
              className="font-medium !text-[#2B231C] !no-underline hover:!text-[#3B4C32]"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="font-medium !text-[#2B231C] !no-underline hover:!text-[#3B4C32]"
            >
              Datenschutz
            </a>
            <a
              href="/Satzung-VBKD.pdf"
              className="font-medium !text-[#2B231C] !no-underline hover:!text-[#3B4C32]"
            >
              Satzung (PDF)
            </a>
          </nav>
        </footer>
      </div>
    </div>
  )
}
