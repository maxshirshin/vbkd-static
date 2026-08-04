export default Page

import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'

// Copied directly from the structure extracted via scraper
const articles = [
  {
    title: 'VBKD Journal Nr. 12, Mai 2026',
    content:
      'Mit der 12. Ausgabe des Journals des Vereins für Botanische Kunst Deutschland (Mai 2026) erhalten die Mitglieder einen Rückblick auf die internationale Ausstellung »Orchids, Orchids, Orchids...« im Rahmen der 24. World Orchid Conference in Dresden. Die Bilder der Preisgewinner in den unterschiedlichen Kategorien werden auch gezeigt.\n\nWichtige interne Mitteilungen sind die Neuerungen nach der Mitgliederversammlung im Mai und erste Informationen zur Erlangung einer Premium-Mitgliedschaft. Neben diesen bietet das Journal Informationen zu den Themen Botanik, Praxis und Farbpigmenten:\n\nEs porträtiert die Zitterpappel als Baum des Jahres 2026 und klärt die botanische Definition von echten Beeren. Vorgestellt werden der Hermanshof in Weinheim und der Huerto del Cura im spanischen Elche. Zwei hilfreiche Webseiten zur Analyse von Farbpigmenten und die Historie des Indigos zeigen Aspekte unserer Pigmente auf. Die Leser bekommen eine Übersicht zu aktuellen Ausstellungen, Tipps zum Schützen von Papierrändern, hilfreichen Büchern und die Ankündigung eines Online-Talks von Svetlana Lanse über Aquarelltechniken. Dr. Stefanie Faust stellt sich als Mitglied des Vereins vor.',
  },
  {
    title: 'Orchids, Orchids, Orchids...',
    content:
      'Der Verein Botanische Kunst Deutschland lädt Sie herzlich zur kommende Ausstellung „Orchideen, Orchideen, Orchideen…“ in der Messe Dresden ein.',
  },
  {
    title: 'Journal Nr. 11 des VBKD',
    content:
      'Die elfte Ausgabe des Journals des Vereins für Botanische Kunst Deutschland (Februar 2026) bereitet die Mitglieder umfassend auf die bevorstehende internationale Ausstellung »Orchids, Orchids, Orchids...« im Rahmen der 24. World Orchid Conference in Dresden vor, inklusive detaillierter Pläne zu Vorführungen, Vorträgen und Preisverleihungen. Neben diesen bietet das Journal reichhaltige Informationen zu den Themen Botanik, Praxis und Kunsthistorie:\n\nEs porträtiert den Feldrittersporn als Blume des Jahres 2026, klärt den botanischen Unterschied zwischen Dornen und Stacheln und beleuchtet Alexander von Humboldts Beitrag zur botanischen Illustration. Die Leser bekommen eine Übersicht zu aktuellen Zeichen-Workshops der Mitglieder, Tipps zum Tuschezeichnen auf Folie sowie die Ankündigung eines Online-Talks von Daria Beizerov über reduzierte Aquarellpaletten. Abgerundet wird das Journal durch persönliche Künstlerporträts und ein Interview mit der Malerin Elfi Ekhoff und die Vorstellung der Geigerin und neuen Künstlerin Daria Beizerov.',
  },
  {
    title: '»Ein Klostergarten« VBKD Ausstellung 2024 in Seligenstadt',
    content:
      'Die VBKD Jahresausstellung 2024 wird am 28. August 2024 in Seligenstadt, Deutschland, eröffnet. Mitglieder von VBKD präsentieren ihre Kunstwerke, die dem Thema »Ein Klostergarten« gewidmet sind und Pflanzen zeigen, die man in den Klostergärten früherer Zeiten finden konnte.',
  },
  {
    title: 'VBKD Newsletter Mai 2024',
    content:
      'Der neue VBKD Newsletter ist da! Dieser Newsletter, der allen Vereinsmitgliedern zur Verfügung steht, enthält aktuelle Informationen über die Projekte der Gesellschaft sowie nützliche Infos über botanische Kunst, Buchvorstellungen, Artikel über Künstler und Maltechniken sowie Tipps und Tricks. Werde Mitglied und erhalte alle zukünftigen Ausgaben des Newsletters in dein E-Mail-Postfach!',
  },
  {
    title: 'ART & Vielfalt Impressionen aus der Tier- und Pflanzenwelt',
    content:
      'Die Ausstellung widmet sich den realistischen und naturgetreuen künstlerischen Darstellungen von ausgestorbenen und rezenten Wild- und Zootieren sowie Pflanzen. Gezeigt werden Kunstwerke in verschiedenen Techniken wie Malerei, Grafik, Handzeichnung, Plastik und Skulptur.\n\nMuseum für Naturkunde Magdeburg vom 30. Juni bis 20. Oktober 2024\nÖffnungszeiten: Dienstag bis Freitag 10.00–17.00 Uhr und Samstag/Sonntag 10.00–18.00 Uhr',
  },
  {
    title: 'VBKD Online Ausstellung 2023 »Botanische Wunder«',
    content:
      'Die Ausstellung widmet sich den Botanischen Wundern. Unsere Welt bietet uns einige der schönsten Pflanzenarten, die man sich vorstellen kann. Jede Phase der Entwicklung einer Pflanze zeigt uns etwas Neues und Interessantes. Jede Jahreszeit bietet uns einen anderen Blick auf unsere Pflanzenwelt und jede ist so faszinierend, wie die vorherige. Unsere Künstler haben dieses Thema mit verschiedenen Techniken interpretiert und wir freuen uns, ihre Werke in dieser Ausstellung zu präsentieren.',
  },
]

function Page() {
  return (
    <Section>
      <Container size="md">
        <Heading as="h1" className="text-center mb-12">
          Neuigkeiten / Journal
        </Heading>

        <div className="space-y-16">
          {articles.map((article, i) => (
            <article key={i} className="border-b border-border pb-12 last:border-b-0">
              <Heading as="h2" className="mb-4 text-primary">
                {article.title}
              </Heading>
              <Prose>
                {article.content.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </Prose>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
