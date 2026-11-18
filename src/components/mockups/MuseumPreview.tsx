import { CDNImage } from '@/components/ui/CDNImage'

const navLinks = [
  { label: 'Über uns', href: '/uber-uns' },
  { label: 'Galerie', href: '/mitglieder' },
  { label: 'Neuigkeiten', href: '/news' },
  { label: 'Workshops', href: '/workshops-and-shows' },
  { label: 'Mitgliedschaft', href: '/mitgliedschaft' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Mitgliederbereich', href: 'https://mitgliederbereich.vereinbotanischekunst.de/' },
]

const heroTriptych = [
  {
    srcPath: 'gallery/bettina-buecker/rosa-rugosa-preview.webp',
    alt: 'Kartoffelrose (Rosa rugosa) von Bettina Bücker',
    title: 'Kartoffelrose',
    scientific: 'Rosa rugosa',
    artist: 'Bettina Bücker',
    href: '/bettina-buecker',
    width: 2039,
    height: 2621,
  },
  {
    srcPath: 'gallery/margitta-baum/cattleya-golden-boy-preview.jpg',
    alt: 'Cattleya-Hybride ‚Golden Boy‘ von Margitta Baum',
    title: 'Cattleya-Hybride ‚Golden Boy‘',
    scientific: 'Cattleya',
    artist: 'Margitta Baum',
    href: '/margitta-baum',
    width: 2008,
    height: 2600,
  },
  {
    srcPath: 'gallery/kailin-weitkamper/insular-woodiness-tenerife.jpg',
    alt: 'Insular Woodiness, Tenerife von Dr. Kailin Weitkämper',
    title: 'Insular Woodiness, Tenerife',
    scientific: 'Aquarell & Tinte',
    artist: 'Dr. Kailin Weitkämper',
    href: '/kailin-weitkamper',
    width: 4968,
    height: 7026,
  },
]

const memberWorks = [
  {
    srcPath: 'gallery/sue-henon/image-2.jpg',
    alt: 'Sonnenhut Gelb I (Echinacea), Buntstift auf Papier von Sue Hénon',
    title: 'Sonnenhut Gelb I',
    scientific: 'Echinacea · Buntstift auf Papier',
    artist: 'Sue Hénon',
    href: '/sue-henon',
    width: 577,
    height: 754,
  },
  {
    srcPath: 'gallery/dr-sabine-loos/image-1.jpg',
    alt: 'Orientalische Nieswurz (Helleborus orientalis), Aquarell auf Pergament von Dr. Sabine Loos',
    title: 'Orientalische Nieswurz',
    scientific: 'Helleborus orientalis · Aquarell auf Pergament',
    artist: 'Dr. Sabine Loos',
    href: '/dr-sabine-loos',
    width: 1370,
    height: 2000,
  },
  {
    srcPath: 'gallery/dr-sabine-loos/image-3.jpg',
    alt: 'Alpen-Mannstreu (Eryngium alpinum) von Dr. Sabine Loos',
    title: 'Alpen-Mannstreu',
    scientific: 'Eryngium alpinum',
    artist: 'Dr. Sabine Loos',
    href: '/dr-sabine-loos',
    width: 1153,
    height: 1537,
  },
  {
    srcPath: 'gallery/sophie-crossart/image-1.jpg',
    alt: 'Botanisches Aquarell auf Papier und Pergament von Sophie Crossart',
    title: 'Botanisches Aquarell',
    scientific: 'Aquarell auf Papier und Pergament',
    artist: 'Sophie Crossart',
    href: '/sophie-crossart',
    width: 708,
    height: 1000,
  },
]

const newsCards = [
  {
    category: 'Vereinsjournal',
    title: 'VBKD Journal Nr. 13, August 2026',
    summary:
      'Ausgabe Nr. 13 bietet Beiträge, persönliche Geschichten, Interviews, praktische Tipps sowie Buch- und Filmtipps rund um die Vielfalt der botanischen Kunst.',
    image: 'news/journal-13.jpg',
    alt: 'VBKD Journal Nr. 13, August 2026',
    href: '/news',
    linkLabel: 'Zu den Neuigkeiten',
  },
  {
    category: 'Jahresausstellung 2024',
    title: '»Ein Klostergarten« in Seligenstadt',
    summary:
      'Mitglieder des VBKD präsentierten vom 28. August bis 6. Oktober 2024 in Seligenstadt historische Klostergartenpflanzen in Aquarell, Buntstift und Graphit.',
    image: 'vbkd-ausstellung-2024-in-seligenstadt/poster.jpg',
    alt: 'Ausstellungsplakat Ein Klostergarten in Seligenstadt 2024',
    href: '/vbkd-ausstellung-2024-in-seligenstadt',
    linkLabel: 'Ausstellung ansehen',
  },
  {
    category: 'Internationale Ausstellung',
    title: 'Botanical Art Worldwide 2025',
    summary:
      'Zeitgleich zum Worldwide Day of Botanical Art am 18. Mai 2025 widmete sich die Ausstellung der Artenvielfalt von Nahrungs- und Nutzpflanzen.',
    image: 'baw-2025/artwork-1.jpg',
    alt: 'Kunstwerk von VBKD-Mitglied für Botanical Art Worldwide 2025',
    href: '/baw-2025',
    linkLabel: 'Mehr zu BAW 2025',
  },
]

const regionalWorkshops = [
  { region: 'Hessen', href: '/workshops-in-hessen', detail: 'Präsenzunterricht in Hessen' },
  { region: 'Bayern', href: '/workshops-in-bayern', detail: 'Präsenzunterricht in Bayern' },
  {
    region: 'Niedersachsen',
    href: '/workshops-in-niedersachsen',
    detail: 'Präsenzunterricht in Niedersachsen',
  },
  {
    region: 'Thüringen',
    href: '/workshops-in-thueringen',
    detail: 'Präsenzunterricht in Thüringen',
  },
  {
    region: 'Onlineunterricht',
    href: '/botanische-aquarellmalerei',
    detail: 'Botanische Aquarellmalerei mit Sophie Crossart',
  },
]

const paletteSwatches = [
  { hex: '#F6F3EC', name: 'Pergament', role: 'Seitenhintergrund' },
  { hex: '#FFFFFF', name: 'Elfenbeinweiß', role: 'Karten & Rahmen' },
  { hex: '#1F3B30', name: 'Tannengrün', role: 'Primärfarbe & Überschriften' },
  { hex: '#3B4F46', name: 'Moosgrau', role: 'Sekundärtext & Metadaten' },
  { hex: '#876A3E', name: 'Ocker', role: 'Akzentlinien & Trenner' },
]

export default function MuseumPreview() {
  return (
    <div className="w-full overflow-x-hidden bg-[#F6F3EC] font-['Inter'] text-[#1F3B30]">
      <header className="border-b border-[#876A3E]/35 bg-[#F6F3EC]">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-6 sm:px-8 lg:px-12">
          <a
            href="/"
            className="flex flex-col items-center gap-3 text-center !text-[#1F3B30] !no-underline sm:flex-row sm:text-left"
          >
            <CDNImage
              srcPath="logo.png"
              alt="VBKD Logo"
              className="h-12 w-12 shrink-0 object-contain"
            />
            <span className="font-['Cormorant_Garamond'] text-xl font-semibold tracking-wide text-[#1F3B30] sm:text-2xl">
              VBKD — Verein Botanische Kunst Deutschland e.V.
            </span>
          </a>

          <nav
            aria-label="Hauptnavigation"
            className="mt-5 flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-2 border-t border-[#876A3E]/25 pt-4 sm:gap-x-4"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center justify-center rounded-sm px-3 py-2 text-base font-medium !text-[#1F3B30] !no-underline transition-colors hover:bg-[#FFFFFF] hover:!text-[#1F3B30]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-[#876A3E]/30 bg-[#F6F3EC]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium tracking-[0.14em] text-[#3B4F46] uppercase">
                Gemeinnütziger Verein · Gegründet im September 2022
              </p>
              <h1 className="mt-4 !font-['Cormorant_Garamond'] !text-4xl !leading-tight !font-semibold !text-[#1F3B30] sm:!text-5xl lg:!text-6xl">
                Verein Botanische Kunst Deutschland e.V.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-[#3B4F46] sm:text-lg">
                Der gemeinnützige Verein Botanische Kunst Deutschland wurde im September 2022 von
                botanischen Künstlerinnen und Künstlern in Deutschland gegründet. In der Tradition
                von Georg Ehret, Sibylla Merian und Ernst Haeckel fördert der VBKD die botanische
                Kunst durch Ausstellungen, Workshops und fachlichen Austausch.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/mitglieder"
                  className="inline-flex min-h-11 items-center justify-center border border-[#1F3B30] bg-[#1F3B30] px-6 py-3 text-base font-medium !text-[#FFFFFF] !no-underline transition-colors hover:bg-[#3B4F46]"
                >
                  Zur Mitglieder-Galerie
                </a>
                <a
                  href="/uber-uns"
                  className="inline-flex min-h-11 items-center justify-center border border-[#1F3B30] bg-[#FFFFFF] px-6 py-3 text-base font-medium !text-[#1F3B30] !no-underline transition-colors hover:bg-[#F6F3EC]"
                >
                  Über den Verein
                </a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {heroTriptych.map((item) => (
                <figure
                  key={item.srcPath}
                  className="flex flex-col border border-[#876A3E]/30 bg-[#FFFFFF] p-4 shadow-xs sm:p-5"
                >
                  <a
                    href={item.href}
                    className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-[#FFFFFF] !text-[#1F3B30] !no-underline"
                  >
                    <CDNImage
                      srcPath={item.srcPath}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="eager"
                      className="h-full max-h-full w-full max-w-full object-contain"
                    />
                  </a>
                  <figcaption className="mt-4 border-t border-[#876A3E]/25 pt-3">
                    <p className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#1F3B30]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-[#3B4F46]">
                      <span className="italic">{item.scientific}</span> · {item.artist}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#876A3E]/30 bg-[#FFFFFF]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-20">
            <div>
              <h2 className="!font-['Cormorant_Garamond'] !text-3xl !leading-tight !font-semibold !text-[#1F3B30] sm:!text-4xl">
                Was ist botanische Kunst?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#3B4F46]">
                Botanische Kunst ist der Schnittpunkt von Wissenschaft und Kunst. Sie ist die
                sorgfältige und kunstvolle Darstellung von Pflanzen, Pilzen und Flechten auf der
                Grundlage direkter Beobachtung und eines gründlichen Verständnisses ihrer Struktur.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#3B4F46]">
                Jedes botanische Kunstwerk muss botanisch korrekt sein und Form, Farbe, Proportionen
                sowie charakteristische Merkmale des Motivs originalgetreu wiedergeben. Wann immer
                möglich arbeiten Künstlerinnen und Künstler mit lebenden Exemplaren über
                verschiedene Wachstumsstadien hinweg.
              </p>
              <div className="mt-7">
                <a
                  href="/was-ist-botanische-kunst"
                  className="inline-flex min-h-11 items-center justify-center border border-[#1F3B30] bg-[#F6F3EC] px-5 py-2.5 text-base font-medium !text-[#1F3B30] !no-underline transition-colors hover:bg-[#1F3B30] hover:!text-[#FFFFFF]"
                >
                  Mehr über botanische Kunst →
                </a>
              </div>
            </div>

            <figure className="border border-[#876A3E]/30 bg-[#F6F3EC] p-4 sm:p-5">
              <div className="overflow-hidden bg-[#FFFFFF]">
                <CDNImage
                  srcPath="ausstellung-marz-2023/banner.jpg"
                  alt="Gründungs-Ausstellung des VBKD in Rudolstadt neben historischen botanischen Illustrationen"
                  className="h-auto max-h-[420px] w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-sm text-[#3B4F46]">
                Gründungs-Ausstellung des VBKD (2023) neben historischen Pflanzenporträts der
                Historischen Bibliothek Rudolstadt.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="w-full bg-[#1F3B30] text-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="flex flex-col gap-5 border-b border-[#FFFFFF]/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="!font-['Cormorant_Garamond'] !text-3xl !leading-tight !font-semibold !text-[#FFFFFF] sm:!text-4xl">
                  Werke unserer Premium- und Gründungsmitglieder
                </h2>
              </div>
              <a
                href="/mitglieder"
                className="inline-flex min-h-11 items-center justify-center border border-[#FFFFFF] bg-transparent px-5 py-2.5 text-base font-medium !text-[#FFFFFF] !no-underline transition-colors hover:bg-[#FFFFFF] hover:!text-[#1F3B30]"
              >
                Alle 10 Galerien entdecken →
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {memberWorks.map((work) => (
                <article
                  key={work.srcPath}
                  className="flex flex-col border border-[#876A3E]/50 bg-[#F6F3EC] p-4 text-[#1F3B30]"
                >
                  <a
                    href={work.href}
                    className="flex aspect-[3/4] w-full items-center justify-center overflow-hidden bg-[#FFFFFF] p-4 !text-[#1F3B30] !no-underline"
                  >
                    <CDNImage
                      srcPath={work.srcPath}
                      alt={work.alt}
                      width={work.width}
                      height={work.height}
                      className="h-full max-h-full w-full max-w-full object-contain"
                    />
                  </a>
                  <div className="mt-4 flex flex-1 flex-col justify-between border-t border-[#876A3E]/30 pt-3">
                    <div>
                      <p className="text-sm font-semibold text-[#3B4F46]">{work.artist}</p>
                      <h3 className="mt-1 !font-['Cormorant_Garamond'] !text-2xl !leading-snug !font-medium !text-[#1F3B30]">
                        {work.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#3B4F46] italic">{work.scientific}</p>
                    </div>
                    <a
                      href={work.href}
                      className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold !text-[#1F3B30] !no-underline hover:opacity-80"
                    >
                      Zur Künstler-Galerie →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#876A3E]/30 bg-[#F6F3EC]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="!font-['Cormorant_Garamond'] !text-3xl !leading-tight !font-semibold !text-[#1F3B30] sm:!text-4xl">
                  Neuigkeiten & Ausstellungen
                </h2>
              </div>
              <a
                href="/news"
                className="inline-flex min-h-11 items-center border border-[#1F3B30] bg-[#FFFFFF] px-5 py-2.5 text-base font-medium !text-[#1F3B30] !no-underline transition-colors hover:bg-[#1F3B30] hover:!text-[#FFFFFF]"
              >
                Alle Neuigkeiten →
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {newsCards.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col border border-[#876A3E]/30 bg-[#FFFFFF] p-5"
                >
                  <a
                    href={card.href}
                    className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[#F6F3EC] p-3 !text-[#1F3B30] !no-underline"
                  >
                    <CDNImage
                      srcPath={card.image}
                      alt={card.alt}
                      className="h-full max-h-full w-full max-w-full object-contain"
                    />
                  </a>
                  <div className="mt-5 flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-[#876A3E] uppercase">
                        {card.category}
                      </p>
                      <h3 className="mt-2 !font-['Cormorant_Garamond'] !text-2xl !leading-snug !font-semibold !text-[#1F3B30]">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-[#3B4F46]">
                        {card.summary}
                      </p>
                    </div>
                    <a
                      href={card.href}
                      className="mt-5 inline-flex min-h-11 items-center border-t border-[#876A3E]/25 pt-3 text-base font-medium !text-[#1F3B30] !no-underline hover:opacity-80"
                    >
                      {card.linkLabel} →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#876A3E]/30 bg-[#FFFFFF]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-20">
            <div className="flex flex-col justify-between border border-[#876A3E]/30 bg-[#F6F3EC] p-6 sm:p-8">
              <div>
                <h2 className="!font-['Cormorant_Garamond'] !text-3xl !leading-tight !font-semibold !text-[#1F3B30] sm:!text-4xl">
                  Workshops vor Ort und online
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#3B4F46]">
                  Unterricht und Kurse in botanischer Kunst von Künstlerinnen und Künstlern im
                  deutschsprachigen Raum — regional nach Bundesländern oder als Onlinekurs.
                </p>

                <ul className="mt-6 divide-y divide-[#876A3E]/25 border-y border-[#876A3E]/25">
                  {regionalWorkshops.map((ws) => (
                    <li key={ws.href}>
                      <a
                        href={ws.href}
                        className="flex min-h-11 flex-col justify-between gap-1 py-3 !text-[#1F3B30] !no-underline transition-colors hover:bg-[#FFFFFF]/70 sm:flex-row sm:items-center sm:px-2"
                      >
                        <span className="text-base font-semibold text-[#1F3B30]">{ws.region}</span>
                        <span className="text-sm text-[#3B4F46]">{ws.detail} →</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <a
                  href="/workshops-and-shows"
                  className="inline-flex min-h-11 items-center justify-center border border-[#1F3B30] bg-[#1F3B30] px-6 py-3 text-base font-medium !text-[#FFFFFF] !no-underline transition-colors hover:bg-[#3B4F46]"
                >
                  Alle Workshops ansehen
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-[#876A3E]/30 bg-[#F6F3EC] p-6 sm:p-8">
              <div>
                <h2 className="!font-['Cormorant_Garamond'] !text-3xl !leading-tight !font-semibold !text-[#1F3B30] sm:!text-4xl">
                  Mitgliedschaft
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#3B4F46]">
                  Der Mitgliedsbeitrag beträgt derzeit 60 € pro Kalenderjahr (im ersten
                  Mitgliedsjahr gestaffelt). Der Verein unterscheidet vier Mitgliedsarten:
                  Fördermitglieder, Vollmitglieder, Premium-Mitglieder und Ehrenmitglieder.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <figure className="border border-[#876A3E]/25 bg-[#FFFFFF] p-3">
                    <CDNImage
                      srcPath="membership/journal.jpg"
                      alt="VBKD Journal für Vereinsmitglieder"
                      className="aspect-[4/3] w-full object-contain"
                    />
                    <figcaption className="mt-2 text-sm font-medium text-[#1F3B30]">
                      Vierteljährliches VBKD Journal
                    </figcaption>
                  </figure>
                  <figure className="border border-[#876A3E]/25 bg-[#FFFFFF] p-3">
                    <CDNImage
                      srcPath="membership/ausstellungen.jpg"
                      alt="Ausstellungen des VBKD vor Ort und online"
                      className="aspect-[4/3] w-full object-contain"
                    />
                    <figcaption className="mt-2 text-sm font-medium text-[#1F3B30]">
                      Ausstellungen online & vor Ort
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/mitgliedschaft"
                  className="inline-flex min-h-11 items-center justify-center border border-[#1F3B30] bg-[#1F3B30] px-6 py-3 text-base font-medium !text-[#FFFFFF] !no-underline transition-colors hover:bg-[#3B4F46]"
                >
                  Mitgliedschaft & Vorteile
                </a>
                <a
                  href="mailto:mitgliedschaft@verein-botanischekunst.de"
                  className="inline-flex min-h-11 items-center justify-center border border-[#1F3B30] bg-[#FFFFFF] px-5 py-3 text-base font-medium !text-[#1F3B30] !no-underline transition-colors hover:bg-[#F6F3EC]"
                >
                  Fragen per E-Mail
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F3EC]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="border-b border-[#876A3E]/30 pb-6">
              <h2 className="!font-['Cormorant_Garamond'] !text-3xl !leading-tight !font-semibold !text-[#1F3B30] sm:!text-4xl">
                Designsystem-Vorschau
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="border border-[#876A3E]/30 bg-[#FFFFFF] p-6">
                <h3 className="!font-['Cormorant_Garamond'] !text-2xl !leading-snug !font-semibold !text-[#1F3B30]">
                  Farbpalette (WCAG-AA-geprüft)
                </h3>
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5">
                  {paletteSwatches.map((swatch) => (
                    <div key={swatch.hex}>
                      <div
                        className="h-16 w-full border border-[#1F3B30]/25"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <p className="mt-2 font-mono text-xs font-semibold text-[#1F3B30]">
                        {swatch.hex}
                      </p>
                      <p className="text-xs font-medium text-[#1F3B30]">{swatch.name}</p>
                      <p className="text-xs text-[#3B4F46]">{swatch.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#876A3E]/30 bg-[#FFFFFF] p-6">
                <h3 className="!font-['Cormorant_Garamond'] !text-2xl !leading-snug !font-semibold !text-[#1F3B30]">
                  Typografie & Schaltflächen
                </h3>
                <div className="mt-4 space-y-3 border-b border-[#876A3E]/25 pb-5">
                  <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1F3B30]">
                    Cormorant Garamond — Botanische Kunst
                  </p>
                  <p className="text-base text-[#3B4F46]">
                    Inter (16 px Fließtext) — sachliche, gut lesbare Beschreibungen und
                    Navigationselemente.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href="/mitglieder"
                    className="inline-flex min-h-11 items-center justify-center border border-[#1F3B30] bg-[#1F3B30] px-5 py-2.5 text-sm font-medium !text-[#FFFFFF] !no-underline hover:bg-[#3B4F46]"
                  >
                    Primär-Button
                  </a>
                  <a
                    href="/uber-uns"
                    className="inline-flex min-h-11 items-center justify-center border border-[#1F3B30] bg-[#FFFFFF] px-5 py-2.5 text-sm font-medium !text-[#1F3B30] !no-underline hover:bg-[#F6F3EC]"
                  >
                    Sekundär-Button
                  </a>
                  <a
                    href="/news"
                    className="inline-flex min-h-11 items-center px-3 py-2 text-sm font-semibold !text-[#1F3B30] !no-underline hover:opacity-80"
                  >
                    Textlink →
                  </a>
                </div>
              </div>

              <div className="border border-[#876A3E]/30 bg-[#FFFFFF] p-6">
                <h3 className="!font-['Cormorant_Garamond'] !text-2xl !leading-snug !font-semibold !text-[#1F3B30]">
                  Muster: Redaktioneller Textblock
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#3B4F46]">
                  Der Verein Botanische Kunst Deutschland e.V. dokumentiert Pflanzen, Pilze und
                  Flechten nach direkter Naturbeobachtung. Klare Ränder, großzügige Abstände und
                  zurückhaltende Linien ordnen Text und Werkabbildung wie in einem
                  Ausstellungskatalog.
                </p>
              </div>

              <div className="border border-[#876A3E]/30 bg-[#FFFFFF] p-6">
                <h3 className="!font-['Cormorant_Garamond'] !text-2xl !leading-snug !font-semibold !text-[#1F3B30]">
                  Muster: Galerie-Kartenfragment
                </h3>
                <div className="mt-4 flex flex-col gap-4 border border-[#876A3E]/30 bg-[#F6F3EC] p-4 sm:flex-row sm:items-center">
                  <div className="flex h-36 w-full shrink-0 items-center justify-center bg-[#FFFFFF] p-2 sm:w-32">
                    <CDNImage
                      srcPath="gallery/maxim-shirshin/image-1.jpg"
                      alt="Rote Papageitulpe (Tulipa x gesneriana) von Maxim Shirshin"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3B4F46]">Maxim Shirshin</p>
                    <p className="mt-1 font-['Cormorant_Garamond'] text-2xl font-medium text-[#1F3B30]">
                      Rote Papageitulpe
                    </p>
                    <p className="mt-1 text-sm text-[#3B4F46] italic">Tulipa × gesneriana</p>
                    <a
                      href="/maxim-shirshin"
                      className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold !text-[#1F3B30] !no-underline hover:opacity-80"
                    >
                      Galerie öffnen →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#876A3E]/40 bg-[#1F3B30] text-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#FFFFFF]">
                VBKD e.V.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#F6F3EC]">
                Verein Botanische Kunst Deutschland e.V. — Gemeinnütziger Verein zur Förderung der
                botanischen Kunst in Deutschland.
              </p>
            </div>

            <div>
              <h2 className="!font-['Inter'] !text-sm !leading-normal !font-semibold tracking-[0.12em] !text-[#F6F3EC] uppercase">
                Kontakt
              </h2>
              <div className="mt-3 space-y-2 text-sm text-[#F6F3EC]">
                <p>
                  <a
                    href="mailto:info@verein-botanischekunst.de"
                    className="inline-block py-1 !text-[#FFFFFF] !no-underline hover:opacity-80"
                  >
                    info@verein-botanischekunst.de
                  </a>
                </p>
                <p className="leading-relaxed">
                  Verein Botanische Kunst e.V.
                  <br />
                  Zu Hd. Audrey Reilly
                  <br />
                  Im Hagen 11, 30900 Wedemark
                </p>
              </div>
            </div>

            <div>
              <h2 className="!font-['Inter'] !text-sm !leading-normal !font-semibold tracking-[0.12em] !text-[#F6F3EC] uppercase">
                Verein
              </h2>
              <ul className="mt-3 space-y-1 text-base">
                <li>
                  <a
                    href="/uber-uns"
                    className="inline-flex min-h-10 items-center !text-[#FFFFFF] !no-underline hover:opacity-80"
                  >
                    Über uns
                  </a>
                </li>
                <li>
                  <a
                    href="/mitgliedschaft"
                    className="inline-flex min-h-10 items-center !text-[#FFFFFF] !no-underline hover:opacity-80"
                  >
                    Mitgliedschaft
                  </a>
                </li>
                <li>
                  <a
                    href="/Satzung-VBKD.pdf"
                    className="inline-flex min-h-10 items-center !text-[#FFFFFF] !no-underline hover:opacity-80"
                  >
                    Satzung (PDF)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="!font-['Inter'] !text-sm !leading-normal !font-semibold tracking-[0.12em] !text-[#F6F3EC] uppercase">
                Rechtliches
              </h2>
              <ul className="mt-3 space-y-1 text-base">
                <li>
                  <a
                    href="/impressum"
                    className="inline-flex min-h-10 items-center !text-[#FFFFFF] !no-underline hover:opacity-80"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="/datenschutz"
                    className="inline-flex min-h-10 items-center !text-[#FFFFFF] !no-underline hover:opacity-80"
                  >
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a
                    href="/kontakt"
                    className="inline-flex min-h-10 items-center !text-[#FFFFFF] !no-underline hover:opacity-80"
                  >
                    Kontaktseite
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-[#FFFFFF]/20 pt-6 text-sm text-[#F6F3EC]">
            Designvorschau · Nicht zur Indexierung · © Verein Botanische Kunst Deutschland e.V.
          </div>
        </div>
      </footer>
    </div>
  )
}
