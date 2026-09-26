import { Prose } from '@/components/ui/Prose'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { Grid, Col } from '@/components/ui/Layout'
import { Heading } from '@/components/ui/Heading'

export default function MargittaBaum() {
  return (
    <GalleryLightboxWrapper>
      <Grid contained={false}>
        <Col>
          <GalleryLightboxItem
            localPreview="gallery/margitta-baum/cattleya-golden-boy-preview.jpg"
            localFull="gallery/margitta-baum/cattleya-golden-boy-full.jpg"
            alt="Botanische Darstellung einer Cattleya-Orchidee mit violetten und gelben Blüten"
            title="Cattleya-Hybride ‘Golden Boy’"
            width={2008}
            height={2600}
          />
          <Prose className="text-sm">
            <p>Cattleya-Hybride ‘Golden Boy’</p>
          </Prose>
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/margitta-baum/fruehlingsblumen-preview.jpg"
            localFull="gallery/margitta-baum/fruehlingsblumen-full.jpg"
            alt="Komposition verschiedener Frühlingsblumen"
            title="Komposition Frühlingsblumen"
            width={1917}
            height={2600}
          />
          <Prose className="text-sm">
            <p>Komposition Frühlingsblumen</p>
          </Prose>
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/margitta-baum/rosen-eddy-mitchell-preview.jpg"
            localFull="gallery/margitta-baum/rosen-eddy-mitchell-full.jpg"
            alt="Botanische Darstellung dunkelroter Rosen der Sorte Eddy Mitchell"
            title="Rosen ‘Eddy Mitchell’"
            width={2103}
            height={2600}
          />
          <Prose className="text-sm">
            <p>Rosen ‘Eddy Mitchell’</p>
          </Prose>
        </Col>
      </Grid>

      <Grid contained={false} className="mt-16">
        <Col lg={12} md={12} sm={12}>
          <Prose className="text-base">
            <Heading>Margitta Baum (VBKD Premium Mitglied)</Heading>
            <p>geb.11.11.1953 in Dresden, wohnhaft in Dresden</p>
            <p>
              E-mail :{' '}
              <a className="text-primary hover:underline" href="mailto:margittabaum@web.de">
                margittabaum@web.de
              </a>
            </p>
            <p>
              <strong>Berufsausbildung:</strong> Gebrauchswerber / Siebdrucker
            </p>
            <p>
              <strong>Zusätzliche Ausbildungen und Kurse:</strong>
              <ul className="list-disc list-inside space-y-2">
                <li>Spezialschule für künstlerische Textilgestaltung</li>
                <li>Teilabschluss / Schneiderin</li>
                <li>Schnittkonstruktion mit Zertifikat</li>
                <li>Hutmacherkurs mit Zertifikat in der Schweiz</li>
              </ul>
            </p>
            <p>
              <strong>Künstlerische Vita:</strong>
              <ul className="list-disc list-inside space-y-2">
                <li>in früher Jugend Malen und Zeichnen bei Richard Sander / Maler und Bildweber (siehe Wikibedia)</li>
                <li>später, erlernen und ausführen zahlreicher textiler Techniken, wie z.B. Klöppeln, verschiedene Sticktechniken,
              Batik, Textildruck, Filzen</li>
                <li>seit 10 Jahren (etwa ab 2016 ) wieder intensive Beschäftigung mit dem Zeichnen und Malen</li>
                <li>Besuch von zahlreichen Kursen in der VHS Ludwigshafen und bei Armin Liebscher/VBK Mannheim</li>
                <li>es folgten autodidaktische Versuche in der botanischen Illustration, angeregt durch ein Buch von Billy Showell und ein Abo in der Onlineschule dieser wunderbaren Künstlerin zur Vertiefung der Kenntnisse und Fertigkeiten</li>
                <li>Besuch mehrere Wochenend-Workshops bei Katja Katholing-Bloss und Teilnahme an einem Skizzenbuch Projekt</li>
                <li>Online und Direktkurse in der VHS Mannheim bei Sofie Crossart</li>
                <li>2026 erfolgreicher Abschluss des 2 ½ jährigen Distance Learning Diploma Course bei der SBA/England</li>
              </ul>
            </p>
            <p>
              <strong>Techniken:</strong> Aquarell, Graphit, Farbstifte
            </p>
            <p>
              <strong>Themen / Motive</strong> vorrangig Pflanzenportraits, Einzelblüten und
              Blätter, Kompositionen,
            </p>
            <p>
              <strong>Anspruch:</strong> Genauigkeit in Farbe, Größe, Form, präzise Darstellung
              der botanischen Merkmale
            </p>
            <p>
              <strong>Mitgliedschaft:</strong> „Verein Botanische Kunst Deutschland“ seit 2023
            </p>
            <div>
              <p className="mb-3">
                <strong>Ausstellungen:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  2023 eine Arbeit in der Ausstellung „Natur wird Kunst" als Schülerin von Katja
                  Katholing-Bloss, in Hof
                </li>
                <li>
                  zwei Bilder in der Onlineausstellung des „Vereines für Botanische Kunst
                  Deutschland“ im Herbst gleichen Jahres.
                </li>
                <li>
                  2024 Bilder innerhalb der Gemeinschaftsausstellung des „Vereines für Botanische
                  Kunst Deutschland“, mit dem Titel „Ein Klostergarten“, im Kloster Seeligenstadt
                </li>
                <li>2025 ein Werk in die Onlineausstellung „Gefährdete Arten“</li>
                <li>
                  2026 zwei Bilder in der Ausstellung „Orchids Orchids Orchids“ anlässlich der
                  24th World of Orchid Conference in Dresden.
                </li>
              </ul>
            </div>
          </Prose>
        </Col>
      </Grid>
    </GalleryLightboxWrapper>
  )
}
