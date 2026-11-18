import { CDNImage } from '@/components/ui/CDNImage'

const navItems = [
  { label: 'Galerie', href: '/mitglieder' },
  { label: 'Neuigkeiten', href: '/news' },
  { label: 'Workshops', href: '/workshops-and-shows' },
  { label: 'Über uns', href: '/uber-uns' },
  { label: 'Mitgliedschaft', href: '/mitgliedschaft' },
  { label: 'Kontakt', href: '/kontakt' },
]

const heroMosaic = [
  {
    srcPath: 'gallery/kailin-weitkamper/coniferae.jpg',
    alt: 'Coniferae von Dr. Kailin Weitkämper',
    title: 'Coniferae',
    artist: 'Dr. Kailin Weitkämper',
    href: '/kailin-weitkamper',
  },
  {
    srcPath: 'gallery/margitta-baum/cattleya-golden-boy-preview.jpg',
    alt: "Cattleya 'Golden Boy' von Margitta Baum",
    title: "Cattleya 'Golden Boy'",
    artist: 'Margitta Baum',
    href: '/margitta-baum',
  },
  {
    srcPath: 'gallery/katja-katholing-bloss/image-2.jpg',
    alt: 'Anemone von Katja Katholing-Bloss',
    title: 'Anemone',
    artist: 'Katja Katholing-Bloss',
    href: '/katja-katholing-bloss',
  },
  {
    srcPath: 'gallery/ines-kamper/image-2.jpg',
    alt: 'Botanisches Werk von Ines Kamper',
    title: 'Werk',
    artist: 'Ines Kamper',
    href: '/ines-kamper',
  },
]

const memberWorks = [
  {
    srcPath: 'gallery/kailin-weitkamper/insular-woodiness-tenerife.jpg',
    alt: 'Insular Woodiness, Tenerife von Dr. Kailin Weitkämper',
    title: 'Insular Woodiness, Tenerife',
    artist: 'Dr. Kailin Weitkämper',
    note: 'Aquarell & Tinte · Systematische Botanik',
    href: '/kailin-weitkamper',
  },
  {
    srcPath: 'gallery/kailin-weitkamper/compositae.jpg',
    alt: 'Compositae von Dr. Kailin Weitkämper',
    title: 'Compositae',
    artist: 'Dr. Kailin Weitkämper',
    note: 'Aquarell & Tinte · Korbblütler',
    href: '/kailin-weitkamper',
  },
  {
    srcPath: 'gallery/margitta-baum/fruehlingsblumen-preview.jpg',
    alt: 'Komposition Frühlingsblumen von Margitta Baum',
    title: 'Komposition Frühlingsblumen',
    artist: 'Margitta Baum',
    note: 'Aquarell, Graphit & Farbstift',
    href: '/margitta-baum',
  },
  {
    srcPath: 'gallery/katja-katholing-bloss/image-1.jpg',
    alt: 'Too good to go von Katja Katholing-Bloss',
    title: 'Too good to go',
    artist: 'Katja Katholing-Bloss',
    note: 'Botanische Illustration · Hof/Saale',
    href: '/katja-katholing-bloss',
  },
]

const exhibitionCards = [
  {
    srcPath: 'baw-2025/artwork-2.jpg',
    alt: 'Kunstwerk eines VBKD-Mitglieds für Botanical Art Worldwide 2025',
    tag: 'Ausstellung 2025',
    title: 'Botanical Art Worldwide 2025',
    text: '„Die Vielfalt der Nutzpflanzen“ – gezeigt vom 18. Mai bis 20. Juli 2025 im Forum Botanische Kunst in Thüngersheim.',
    href: '/baw-2025',
    linkLabel: 'Zur Ausstellung',
  },
  {
    srcPath: 'baw-2025/artwork-3.jpg',
    alt: 'Kunstwerk von VBKD-Mitgliedern im Rahmen internationaler Ausstellungen',
    tag: 'Dresden & Seligenstadt',
    title: 'Orchideen & Klostergarten',
    text: 'Internationale Ausstellung „Orchids, Orchids, Orchids…“ in Dresden sowie die Jahresausstellung 2024 in Seligenstadt.',
    href: '/orchids-orchids-orchids',
    linkLabel: 'Orchids-Ausstellung',
  },
  {
    srcPath: 'news/botanische-wunder-2023.jpg',
    alt: 'VBKD Online Ausstellung 2023 Botanische Wunder',
    tag: 'Rückblick 2023',
    title: 'Botanische Wunder & Gründung',
    text: 'Die Online-Ausstellung 2023 sowie die Gründungs-Ausstellung in Rudolstadt neben historischen Pflanzenporträts.',
    href: '/ausstellung-marz-2023',
    linkLabel: 'Gründungs-Ausstellung',
  },
  {
    srcPath: 'news/newsletter-mai-2024.jpg',
    alt: 'VBKD Newsletter und Journal',
    tag: 'Publikationen',
    title: 'VBKD Journal & Neuigkeiten',
    text: 'Vierteljährliches Journal (bis Ausgabe Nr. 13, August 2026) mit Beiträgen zu Botanik, Pigmenten, Technik und Ausstellungen.',
    href: '/news',
    linkLabel: 'Alle Neuigkeiten',
  },
]

const workshopRegions = [
  { label: 'Hessen', href: '/workshops-in-hessen' },
  { label: 'Bayern', href: '/workshops-in-bayern' },
  { label: 'Niedersachsen', href: '/workshops-in-niedersachsen' },
  { label: 'Thüringen', href: '/workshops-in-thueringen' },
  { label: 'Onlineunterricht (Aquarellmalerei)', href: '/botanische-aquarellmalerei' },
]

const membershipTypes = [
  {
    name: 'Fördermitglieder',
    detail: 'Associate Members – unterstützen den Verein, ohne selbst botanisch zu malen.',
  },
  {
    name: 'Vollmitglieder',
    detail: 'Full Members – aktive botanische Künstlerinnen und Künstler im Verein.',
  },
  {
    name: 'Premium-Mitglieder',
    detail: 'Featured Members – vom Beirat geprüfte Arbeiten in der Online-Galerie.',
  },
  {
    name: 'Ehrenmitglieder',
    detail: 'Honorary Members – geehrt für besondere Verdienste um Botanik und Kunst.',
  },
]

const membershipBenefits = [
  'Journal – vierteljährlich mit Artikeln zu Botanik, Praxis und Pigmenten',
  'Botanical Art Talks – Online-Vorträge auf Deutsch und Englisch',
  'Workshops – geleitet von Mitgliedern und internationalen Künstlern',
  'Ausstellungen – gemeinsame Präsentationen online und vor Ort',
  'Austausch – Vernetzung im internen Mitgliederbereich',
]

const paletteSwatches = [
  {
    name: 'Warmes Leinen',
    hex: '#F7F6F2',
    role: 'Seitenhintergrund',
    textColor: '#1C2B24',
    bordered: true,
  },
  {
    name: 'Reines Weiß',
    hex: '#FFFFFF',
    role: 'Karten & Bildrahmen',
    textColor: '#1C2B24',
    bordered: true,
  },
  {
    name: 'Eukalyptus-Ton',
    hex: '#E9EFEA',
    role: 'Sekundärfläche',
    textColor: '#1C2B24',
    bordered: true,
  },
  {
    name: 'Botanisches Grün',
    hex: '#295641',
    role: 'Primäraktion (8,2:1)',
    textColor: '#FFFFFF',
    bordered: false,
  },
  {
    name: 'Tiefes Tannengrün',
    hex: '#1C2B24',
    role: 'Typografie & Footer',
    textColor: '#FFFFFF',
    bordered: false,
  },
  {
    name: 'Warmer Ton-Umbra',
    hex: '#7E5134',
    role: 'Akzent-Tag (6,3:1)',
    textColor: '#FFFFFF',
    bordered: false,
  },
]

export default function GemeinschaftPreview() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] font-['Inter',sans-serif] text-[#26302B]">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-[#1C2B24] focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:!text-[#FFFFFF] focus:!no-underline"
      >
        Zum Inhalt springen
      </a>

      {/* Compact single-row top bar */}
      <header className="sticky top-0 z-40 border-b border-[#1C2B24]/15 bg-[#FFFFFF]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-3 md:px-8 lg:flex-nowrap">
          <a
            href="/"
            className="inline-flex min-h-11 items-center gap-3 !text-[#1C2B24] !no-underline hover:!text-[#295641]"
          >
            <CDNImage srcPath="logo.png" alt="VBKD Logo" className="h-11 w-11 object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="font-['Cormorant_Garamond',serif] text-2xl font-semibold tracking-[0.12em] text-[#1C2B24]">
                VBKD
              </span>
              <span className="hidden text-[11px] font-medium text-[#4E5B54] xl:block">
                Verein Botanische Kunst Deutschland e.V.
              </span>
            </span>
          </a>

          <nav
            aria-label="Hauptnavigation"
            className="order-3 flex w-full flex-wrap items-center gap-1 border-t border-[#1C2B24]/10 pt-2 lg:order-2 lg:w-auto lg:flex-nowrap lg:border-t-0 lg:pt-0"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded px-3 py-2 text-base font-medium whitespace-nowrap !text-[#1C2B24] !no-underline transition-colors hover:bg-[#E9EFEA] hover:!text-[#295641]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://mitgliederbereich.vereinbotanischekunst.de/"
              className="inline-flex min-h-11 items-center rounded px-3 py-2 text-sm font-semibold whitespace-nowrap !text-[#295641] !no-underline transition-colors hover:bg-[#E9EFEA] hover:!text-[#1C2B24] sm:hidden"
            >
              Mitgliederbereich
            </a>
          </nav>

          <div className="order-2 flex items-center gap-2 lg:order-3">
            <a
              href="https://mitgliederbereich.vereinbotanischekunst.de/"
              className="hidden min-h-11 items-center rounded px-3 py-2 text-sm font-medium whitespace-nowrap !text-[#295641] !no-underline transition-colors hover:bg-[#E9EFEA] hover:!text-[#1C2B24] sm:inline-flex"
            >
              Mitgliederbereich
            </a>
            <a
              href="/mitgliedschaft"
              className="inline-flex min-h-11 items-center justify-center rounded bg-[#295641] px-5 py-2.5 text-base font-medium whitespace-nowrap !text-[#FFFFFF] !no-underline transition-colors hover:bg-[#1C2B24] hover:!text-[#FFFFFF]"
            >
              Mitglied werden
            </a>
          </div>
        </div>
      </header>

      <main id="inhalt">
        {/* Hero: Asymmetrical gallery-first grid + 4-artwork static visual mosaic */}
        <section className="border-b border-[#1C2B24]/15 bg-[#F7F6F2]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-16">
            <div>
              <p className="inline-flex items-center rounded border border-[#7E5134]/35 bg-[#FFFFFF] px-3 py-1 text-xs font-semibold tracking-wide text-[#7E5134]">
                Gemeinnütziger Verein · Gegründet September 2022
              </p>

              <h1 className="mt-5 font-['Cormorant_Garamond',serif] text-4xl leading-[1.08] font-semibold text-[#1C2B24] sm:text-5xl lg:text-[56px]">
                Verein Botanische Kunst Deutschland e.V.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#26302B]">
                Der VBKD fördert die botanische Kunst in Deutschland in der Tradition Georg Ehrets,
                Sibylla Merians und Ernst Häckels – durch Ausstellungen, Workshops, fachlichen
                Austausch und ein vierteljährliches Vereinsjournal.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="/mitglieder"
                  className="inline-flex min-h-11 items-center justify-center rounded bg-[#295641] px-6 py-3 text-base font-medium !text-[#FFFFFF] !no-underline transition-colors hover:bg-[#1C2B24] hover:!text-[#FFFFFF]"
                >
                  Zur Galerie
                </a>
                <a
                  href="/mitgliedschaft"
                  className="inline-flex min-h-11 items-center justify-center rounded border border-[#1C2B24]/40 bg-[#FFFFFF] px-6 py-3 text-base font-medium !text-[#1C2B24] !no-underline transition-colors hover:bg-[#E9EFEA] hover:!text-[#1C2B24]"
                >
                  Mitglied werden
                </a>
              </div>

              <dl className="mt-9 grid grid-cols-1 gap-4 border-t border-[#1C2B24]/15 pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium text-[#4E5B54]">Gründung</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#1C2B24]">September 2022</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[#4E5B54]">Mitgliedsbeitrag</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#1C2B24]">
                    60 €/Jahr (1. Jahr gestaffelt)
                  </dd>
                </div>
              </dl>
            </div>

            {/* Static 4-artwork mosaic grid (no auto-animation) */}
            <div className="grid grid-cols-2 gap-4">
              {heroMosaic.map((work) => (
                <figure
                  key={work.srcPath}
                  className="flex h-full flex-col overflow-hidden rounded border border-[#1C2B24]/15 bg-[#FFFFFF]"
                >
                  <a
                    href={work.href}
                    className="block aspect-square w-full shrink-0 overflow-hidden bg-[#FFFFFF] !text-[#1C2B24] !no-underline"
                  >
                    <CDNImage
                      srcPath={work.srcPath}
                      alt={work.alt}
                      loading="eager"
                      className="h-full w-full object-cover"
                    />
                  </a>
                  <figcaption className="flex flex-1 flex-col justify-end border-t border-[#1C2B24]/10 bg-[#FFFFFF] px-3.5 py-3 text-xs leading-snug text-[#4E5B54]">
                    <a
                      href={work.href}
                      className="block font-medium !text-[#1C2B24] !no-underline hover:!text-[#295641]"
                    >
                      <span className="font-semibold text-[#1C2B24]">{work.title}</span>
                      <span className="block text-[#4E5B54]">{work.artist}</span>
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Über uns & Was ist botanische Kunst? */}
        <section className="border-b border-[#1C2B24]/15 bg-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-2">
              <article className="flex flex-col overflow-hidden rounded border border-[#1C2B24]/15 bg-[#F7F6F2]">
                <div className="h-44 overflow-hidden border-b border-[#1C2B24]/10 bg-[#FFFFFF]">
                  <CDNImage
                    srcPath="gallery/sue-henon/image-3.jpg"
                    alt="Lupinen II (Lupinus), Buntstift auf Papier von Sue Hénon"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#1C2B24]">
                      Über uns
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#26302B]">
                      Der gemeinnützige Verein für Botanische Kunst Deutschland (VBKD) wurde im
                      September 2022 von botanischen Künstlern aus Deutschland gegründet. Unser Ziel
                      ist es, in der Tradition Georg Ehrets, Sibylla Merians und Ernst Häckels die
                      botanische Kunst in Deutschland wieder aufleben zu lassen, sie zu fördern und
                      ihre moderne Entwicklung zu begleiten.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#4E5B54]">
                      Durch Veranstaltungen, Ausstellungen und Workshops schaffen wir Möglichkeiten
                      für den fachlichen Austausch und präsentieren Werke einem breiten Publikum.
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="/uber-uns"
                      className="inline-flex min-h-11 items-center rounded border border-[#295641] bg-[#FFFFFF] px-4 py-2 text-sm font-medium !text-[#295641] !no-underline transition-colors hover:bg-[#295641] hover:!text-[#FFFFFF]"
                    >
                      Mehr über den Verein
                    </a>
                  </div>
                </div>
              </article>

              <article className="flex flex-col overflow-hidden rounded border border-[#1C2B24]/15 bg-[#F7F6F2]">
                <div className="h-44 overflow-hidden border-b border-[#1C2B24]/10 bg-[#FFFFFF]">
                  <CDNImage
                    srcPath="gallery/dr-sabine-loos/image-2.jpg"
                    alt="Efeu (Hedera helix) von Dr. Sabine Loos"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#1C2B24]">
                      Was ist botanische Kunst?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#26302B]">
                      Botanische Kunst ist der Schnittpunkt von Wissenschaft und Kunst: die
                      sorgfältige und kunstvolle Darstellung von Pflanzen, Pilzen und Flechten auf
                      Grundlage direkter Beobachtung und eines gründlichen Verständnisses ihrer
                      Struktur.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#4E5B54]">
                      Jedes Werk gibt Form, Farbe, Proportionen und charakteristische Merkmale
                      originalgetreu wieder – meist direkt nach lebenden Exemplaren in verschiedenen
                      Wachstumsstadien.
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="/was-ist-botanische-kunst"
                      className="inline-flex min-h-11 items-center rounded border border-[#295641] bg-[#FFFFFF] px-4 py-2 text-sm font-medium !text-[#295641] !no-underline transition-colors hover:bg-[#295641] hover:!text-[#FFFFFF]"
                    >
                      Weiterlesen
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section: Mitglieder und ihre Werke */}
        <section className="border-b border-[#1C2B24]/15 bg-[#E9EFEA]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold text-[#1C2B24] sm:text-4xl">
                  Premium- und Gründungsmitglieder und ihre Werke
                </h2>
              </div>
              <a
                href="/mitglieder"
                className="inline-flex min-h-11 items-center rounded border border-[#1C2B24]/30 bg-[#FFFFFF] px-4 py-2 text-sm font-medium !text-[#1C2B24] !no-underline transition-colors hover:bg-[#295641] hover:!text-[#FFFFFF]"
              >
                Alle 10 Künstler*innen ansehen
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {memberWorks.map((item) => (
                <article
                  key={item.srcPath}
                  className="flex flex-col overflow-hidden rounded border border-[#1C2B24]/15 bg-[#FFFFFF]"
                >
                  <a
                    href={item.href}
                    className="block aspect-[4/5] border-b border-[#1C2B24]/10 bg-[#FFFFFF] p-4 !no-underline"
                  >
                    <CDNImage
                      srcPath={item.srcPath}
                      alt={item.alt}
                      className="h-full w-full object-contain"
                    />
                  </a>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-['Cormorant_Garamond',serif] text-xl font-semibold text-[#1C2B24]">
                        {item.artist}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#26302B]">{item.title}</p>
                      <p className="mt-1 text-xs text-[#4E5B54]">{item.note}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#1C2B24]/10">
                      <a
                        href={item.href}
                        className="inline-flex items-center text-sm font-semibold !text-[#295641] !no-underline hover:!text-[#1C2B24]"
                      >
                        Zur Künstlerseite →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Ausstellungen & Neuigkeiten */}
        <section className="border-b border-[#1C2B24]/15 bg-[#F7F6F2]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold text-[#1C2B24] sm:text-4xl">
                  Ausstellungen & Neuigkeiten
                </h2>
              </div>
              <a
                href="/news"
                className="inline-flex min-h-11 items-center rounded border border-[#1C2B24]/30 bg-[#FFFFFF] px-4 py-2 text-sm font-medium !text-[#1C2B24] !no-underline transition-colors hover:bg-[#295641] hover:!text-[#FFFFFF]"
              >
                Alle Neuigkeiten
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {exhibitionCards.map((card) => (
                <article
                  key={card.srcPath}
                  className="flex flex-col overflow-hidden rounded border border-[#1C2B24]/15 bg-[#FFFFFF]"
                >
                  <div className="aspect-[4/3] border-b border-[#1C2B24]/10 bg-[#FFFFFF] p-3">
                    <CDNImage
                      srcPath={card.srcPath}
                      alt={card.alt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <span className="inline-block rounded bg-[#7E5134] px-2.5 py-1 text-[11px] font-semibold text-[#FFFFFF]">
                        {card.tag}
                      </span>
                      <h3 className="mt-3 font-['Cormorant_Garamond',serif] text-xl font-semibold text-[#1C2B24]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#4E5B54]">{card.text}</p>
                    </div>
                    <div className="mt-4 border-t border-[#1C2B24]/10 pt-3">
                      <a
                        href={card.href}
                        className="inline-flex items-center text-sm font-semibold !text-[#295641] !no-underline hover:!text-[#1C2B24]"
                      >
                        {card.linkLabel} →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Workshops & Mitgliedschaft */}
        <section className="border-b border-[#1C2B24]/15 bg-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">
            <div className="mb-10 max-w-2xl">
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold text-[#1C2B24] sm:text-4xl">
                Workshops & Mitgliedschaft
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Workshops Card */}
              <article className="flex flex-col overflow-hidden rounded border border-[#1C2B24]/15 bg-[#F7F6F2]">
                <div className="aspect-[16/10] bg-[#E9EFEA]">
                  <CDNImage
                    srcPath="workshops/bayern-1.jpg"
                    alt="Workshop in Bayern für botanische Kunst"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#1C2B24]">
                      Workshops vor Ort & online
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#26302B]">
                      Präsenzunterricht in botanischer Kunst nach Bundesländern sowie
                      Onlineunterricht von Künstlern im deutschsprachigen Raum:
                    </p>
                    <ul className="mt-5 divide-y divide-[#1C2B24]/10 border-y border-[#1C2B24]/10">
                      {workshopRegions.map((region) => (
                        <li key={region.href}>
                          <a
                            href={region.href}
                            className="flex min-h-11 items-center justify-between py-2.5 text-sm font-medium !text-[#1C2B24] !no-underline transition-colors hover:!text-[#295641]"
                          >
                            <span>{region.label}</span>
                            <span aria-hidden="true">→</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href="/workshops-and-shows"
                      className="inline-flex min-h-11 items-center rounded bg-[#295641] px-5 py-2.5 text-sm font-medium !text-[#FFFFFF] !no-underline transition-colors hover:bg-[#1C2B24] hover:!text-[#FFFFFF]"
                    >
                      Alle Workshops ansehen
                    </a>
                  </div>
                </div>
              </article>

              {/* Membership Card */}
              <article className="flex flex-col overflow-hidden rounded border border-[#1C2B24]/15 bg-[#E9EFEA]">
                <div className="aspect-[16/10] bg-[#FFFFFF]">
                  <CDNImage
                    srcPath="membership/austausch.jpg"
                    alt="Austausch und Gemeinschaft im VBKD"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#1C2B24]">
                        Mitgliedschaft im VBKD
                      </h3>
                      <span className="rounded bg-[#295641] px-3 py-1 text-xs font-semibold text-[#FFFFFF]">
                        60 €/Jahr
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#26302B]">
                      Der Mitgliedsbeitrag beträgt derzeit 60 € pro Kalenderjahr (im ersten
                      Mitgliedsjahr gestaffelt). Vier Mitgliedschaftsarten:
                    </p>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {membershipTypes.map((type) => (
                        <div
                          key={type.name}
                          className="rounded border border-[#1C2B24]/15 bg-[#FFFFFF] p-3"
                        >
                          <p className="text-xs font-semibold text-[#1C2B24]">{type.name}</p>
                          <p className="mt-1 text-xs leading-snug text-[#4E5B54]">{type.detail}</p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-5 text-xs font-semibold tracking-wider text-[#7E5134] uppercase">
                      5 Vorteile einer Mitgliedschaft
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-[#26302B]">
                      {membershipBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <span className="font-bold text-[#295641]" aria-hidden="true">
                            ·
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/mitgliedschaft"
                      className="inline-flex min-h-11 items-center rounded bg-[#295641] px-5 py-2.5 text-sm font-medium !text-[#FFFFFF] !no-underline transition-colors hover:bg-[#1C2B24] hover:!text-[#FFFFFF]"
                    >
                      Mitgliedschaft-Infos
                    </a>
                    <a
                      href="/kontakt"
                      className="inline-flex min-h-11 items-center rounded border border-[#1C2B24]/40 bg-[#FFFFFF] px-5 py-2.5 text-sm font-medium !text-[#1C2B24] !no-underline transition-colors hover:bg-[#F7F6F2] hover:!text-[#1C2B24]"
                    >
                      Kontakt aufnehmen
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section: Designsystem-Vorschau */}
        <section className="bg-[#F7F6F2]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">
            <div className="mb-10 max-w-2xl">
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold text-[#1C2B24] sm:text-4xl">
                Designsystem-Vorschau
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4E5B54]">
                Überarbeitete Galerie-Farbpalette aus warmem Leinen, Eukalyptus, tiefem Tannengrün
                und zurückhaltendem Ton-Umbra mit geprüften WCAG-AA-Kontrasten.
              </p>
            </div>

            {/* Color Palette Swatches */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {paletteSwatches.map((swatch) => (
                <div
                  key={swatch.hex}
                  style={{
                    backgroundColor: swatch.hex,
                    color: swatch.textColor,
                  }}
                  className={`flex min-h-32 flex-col justify-between rounded p-4 ${
                    swatch.bordered ? 'border border-[#1C2B24]/20' : ''
                  }`}
                >
                  <span className="text-xs font-semibold">{swatch.hex}</span>
                  <div>
                    <p className="text-sm font-semibold">{swatch.name}</p>
                    <p className="text-[11px] opacity-90">{swatch.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Typography, Buttons & Sample Card/Article Fragment */}
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {/* Typography Scale */}
              <div className="rounded border border-[#1C2B24]/15 bg-[#FFFFFF] p-6">
                <p className="text-xs font-semibold tracking-wider text-[#7E5134] uppercase">
                  Typografie
                </p>
                <div className="mt-4 space-y-3">
                  <p className="font-['Cormorant_Garamond',serif] text-3xl font-semibold text-[#1C2B24]">
                    H1 · Cormorant Garamond
                  </p>
                  <p className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#1C2B24]">
                    H2 · Botanische Überschrift
                  </p>
                  <p className="font-['Cormorant_Garamond',serif] text-xl font-medium text-[#1C2B24]">
                    H3 · Abschnittstitel
                  </p>
                  <p className="text-base text-[#26302B]">
                    Fließtext in Inter (16 px) auf #F7F6F2 / #FFFFFF.
                  </p>
                  <p className="text-sm text-[#4E5B54]">
                    Sekundärtext & Bildunterschriften in #4E5B54.
                  </p>
                </div>
              </div>

              {/* High-Contrast Button States */}
              <div className="rounded border border-[#1C2B24]/15 bg-[#FFFFFF] p-6">
                <p className="text-xs font-semibold tracking-wider text-[#7E5134] uppercase">
                  Interaktion & Kontraste
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/mitglieder"
                    className="inline-flex min-h-11 items-center rounded bg-[#295641] px-4 py-2 text-sm font-medium !text-[#FFFFFF] !no-underline hover:bg-[#1C2B24] hover:!text-[#FFFFFF]"
                  >
                    Primär-Button
                  </a>
                  <a
                    href="/mitgliedschaft"
                    className="inline-flex min-h-11 items-center rounded bg-[#1C2B24] px-4 py-2 text-sm font-medium !text-[#FFFFFF] !no-underline hover:bg-[#295641] hover:!text-[#FFFFFF]"
                  >
                    Dunkler Button
                  </a>
                  <a
                    href="/uber-uns"
                    className="inline-flex min-h-11 items-center rounded border border-[#1C2B24] bg-[#FFFFFF] px-4 py-2 text-sm font-medium !text-[#1C2B24] !no-underline hover:bg-[#E9EFEA] hover:!text-[#1C2B24]"
                  >
                    Sekundär-Outline
                  </a>
                  <span className="inline-flex min-h-9 items-center rounded bg-[#7E5134] px-3 py-1 text-xs font-semibold text-[#FFFFFF]">
                    Kategorie-Tag
                  </span>
                </div>
                <p className="mt-5 text-sm text-[#4E5B54]">
                  Inline-Verlinkung:{' '}
                  <a
                    href="/was-ist-botanische-kunst"
                    className="font-semibold !text-[#295641] underline hover:!text-[#1C2B24]"
                  >
                    Was ist botanische Kunst?
                  </a>
                </p>
              </div>

              {/* Sample Card & Article Fragment */}
              <article className="rounded border border-[#1C2B24]/15 bg-[#E9EFEA] p-6">
                <span className="inline-block rounded bg-[#7E5134] px-2.5 py-1 text-[11px] font-semibold text-[#FFFFFF]">
                  Artikel-Beispiel
                </span>
                <h3 className="mt-3 font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#1C2B24]">
                  Botanische Studien nach der Natur
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#26302B]">
                  In der Arbeit am lebenden Exemplar verbindet sich präzise Beobachtung mit
                  gestalterischer Ruhe auf hellem Papier- und Leinengrund.
                </p>
                <a
                  href="/news"
                  className="mt-4 inline-flex items-center text-sm font-semibold !text-[#295641] !no-underline hover:!text-[#1C2B24]"
                >
                  Journal-Beitrag lesen →
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1C2B24] text-[#F7F6F2]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-['Cormorant_Garamond',serif] text-2xl font-semibold tracking-[0.08em] text-[#FFFFFF]">
                VBKD e.V.
              </p>
              <p className="mt-2 text-sm text-[#D5E0D9]">
                Verein Botanische Kunst Deutschland e.V.
              </p>
              <address className="mt-4 text-xs leading-relaxed text-[#D5E0D9] not-italic">
                Geschäftsadresse: Zu Hd. Audrey Reilly
                <br />
                Im Hagen 11, 30900 Wedemark
                <br />
                E-Mail:{' '}
                <a
                  href="mailto:info@verein-botanischekunst.de"
                  className="!text-[#FFFFFF] underline hover:!text-[#D5E0D9]"
                >
                  info@verein-botanischekunst.de
                </a>
              </address>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider text-[#FFFFFF] uppercase">
                Links
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li>
                  <a
                    href="/uber-uns"
                    className="!text-[#D5E0D9] !no-underline hover:!text-[#FFFFFF]"
                  >
                    Über uns
                  </a>
                </li>
                <li>
                  <a
                    href="/mitgliedschaft"
                    className="!text-[#D5E0D9] !no-underline hover:!text-[#FFFFFF]"
                  >
                    Mitgliedschaft
                  </a>
                </li>
                <li>
                  <a
                    href="/Satzung-VBKD.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-[#D5E0D9] !no-underline hover:!text-[#FFFFFF]"
                  >
                    Satzung (PDF)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider text-[#FFFFFF] uppercase">
                Rechtliches
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li>
                  <a
                    href="/impressum"
                    className="!text-[#D5E0D9] !no-underline hover:!text-[#FFFFFF]"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="/datenschutz"
                    className="!text-[#D5E0D9] !no-underline hover:!text-[#FFFFFF]"
                  >
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-[#FFFFFF]/15 pt-6 text-xs text-[#D5E0D9]">
            © {new Date().getFullYear()} Verein Botanische Kunst Deutschland e.V. · Designvorschau
          </div>
        </div>
      </footer>
    </div>
  )
}
