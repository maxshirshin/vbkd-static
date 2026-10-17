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
            <Heading>Margitta Baum, VBKD Premium Mitglied</Heading>
            <p>geb.11.11.1953 in Dresden, wohnhaft in Dresden</p>
            <p>
              E-mail :{' '}
              <a className="text-primary hover:underline" href="mailto:margittabaum@web.de">
                margittabaum@web.de
              </a>
            </p>
            <p>
              Meine künstlerische Arbeit verbindet eine langjährige Auseinandersetzung mit textilen
              Techniken und Materialien mit meiner heutigen Leidenschaft für die botanische
              Illustration. Nach einer frühen Förderung im Malen und Zeichnen durch den Maler und
              Bildweber Richard Sander sowie Ausbildungen im gestalterischen und textilen Bereich
              widme ich mich seit etwa 2016 wieder intensiv der Malerei und dem Zeichnen.
            </p>
            <p>
              Im Mittelpunkt meiner Arbeit stehen Pflanzenporträts, Einzelblüten und Blätter sowie
              botanisch inspirierte Kompositionen. Mit Aquarell, Graphit und Farbstiften versuche
              ich, die charakteristischen Merkmale meiner Motive möglichst präzise und naturgetreu
              wiederzugeben. Dabei interessieren mich besonders das Zusammenspiel von Farbe, Form
              und Größe sowie die feinen Strukturen und individuellen Besonderheiten jeder Pflanze.
            </p>
            <p>
              Durch autodidaktisches Studium, Kurse und den Austausch mit anderen Künstlerinnen
              vertiefe ich kontinuierlich meine Kenntnisse und entwickle meine künstlerische
              Ausdrucksweise weiter. 2026 schloss ich erfolgreich den zweieinhalbjährigen Distance
              Learning Diploma Course der SBA ab.
            </p>
            <p>
              Seit 2023 bin ich Mitglied im Verein Botanische Kunst Deutschland. Meine Arbeit ist
              geprägt von genauer Beobachtung, der Freude am Detail und dem Wunsch, die Schönheit
              und Einzigartigkeit der Pflanzenwelt sichtbar zu machen.
            </p>
          </Prose>
        </Col>
      </Grid>
    </GalleryLightboxWrapper>
  )
}
