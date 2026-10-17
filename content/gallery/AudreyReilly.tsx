import { Prose } from '@/components/ui/Prose'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { Grid, Col } from '@/components/ui/Layout'
import { Quote } from '@/components/ui/Quote'

export default function AudreyReilly() {
  return (
    <GalleryLightboxWrapper>
      <Grid contained={false}>
        <Col>
          <GalleryLightboxItem
            localPreview="gallery/audrey-reilly/image-1.jpg"
            localFull={'gallery/audrey-reilly/image-1-full.jpg'}
            alt=""
            title="Asiatische Apfelbirne (Pyrus pyrifolia)"
            width={1414}
            height={2000}
          />

          <Prose className="text-sm md:text-sm">
            <p>Asiatische Apfelbirne (Pyrus pyrifolia)</p>
          </Prose>
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/audrey-reilly/image-2.jpg"
            localFull={'gallery/audrey-reilly/image-2-full.jpg'}
            alt=""
            title="Beef tomato (Solanum lycopersicum)"
            width={2000}
            height={1475}
          />

          <Prose className="text-sm md:text-sm">
            <p>Beef tomato (Solanum lycopersicum)</p>
          </Prose>
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/audrey-reilly/image-3.jpg"
            localFull={'gallery/audrey-reilly/image-3-full.jpg'}
            alt=""
            title="Kohlrabi (Brassica oleracea) | Audrey Reilly"
            width={2000}
            height={1424}
          />
          <Prose className="text-sm md:text-sm">
            <p>Kohlrabi (Brassica oleracea)</p>
          </Prose>
        </Col>
      </Grid>

      <Grid contained={false} className="mt-16">
        <Col lg={8} md={12} sm={12}>
          <Prose className="text-sm md:text-sm">
            <p>
              <Quote>
                Ich bin in der Seenlandschaft der irischen Midlands aufgewachsen und fühlte mich
                schon früh zur Natur und Tierwelt hingezogen. Nach meinem Kunststudium an der
                Nordwestküste Irlands arbeitete ich einige Jahre in Dublin, bevor ich nach
                Deutschland zog. 2006 schloss ich mich der Künstlergruppe Atelier Block 16 an, die
                ihre Ateliers in einem umgebauten Fabrikgebäude in Hannovers Nordstadt eingerichtet
                hatte. Damals war meine Arbeit vorwiegend figurativ und expressionistisch geprägt.
              </Quote>
            </p>
            <p>
              <Quote>
                Mit meinem Umzug aufs Land im Jahr 2011 rückte die Natur zunehmend in den
                Mittelpunkt meiner Malerei. Dabei wurde mir bewusst, wie sehr die Botanische Kunst
                in Deutschland in Vergessenheit geraten war – so sehr, dass ich sie zunächst gar
                nicht als eigenständige zeitgenössische Kunstform wahrgenommen hatte. Erst die
                Begegnung mit einer botanischen Künstlerin in Irland im Jahr 2018 weckte mein
                Interesse. Die Botanische Kunst vereint vieles, was mir am Herzen liegt: Kunst,
                Geschichte, Natur, wissenschaftliche Neugier, Biodiversität und Umweltbewusstsein.
                Diese Verbindung macht sie für mich zu einer besonders bereichernden und
                inspirierenden künstlerischen Praxis.
              </Quote>
            </p>
            <p>
              <Quote>
                2021 wurde ich in einen anspruchsvollen, dreijährigen Online-Diplomkurs aufgenommen,
                den ich im März 2024 mit Auszeichnung abschloss. 2022 gründete ich gemeinsam mit
                anderen Begeisterten der Botanischen Kunst den Verein für Botanische Kunst
                Deutschland e.V., um diese wertvolle Kunstform zu fördern.
              </Quote>
            </p>
          </Prose>
          <Prose className="text-sm md:text-sm">
            <p>
              <a href="/workshops-in-niedersachsen/">
                <strong>Workshops von Audrey Reilly</strong>
              </a>
            </p>
          </Prose>
          <Prose className="text-sm md:text-sm">
            Webseite:{' '}
            <a
              className="text-primary hover:underline"
              target="_blank"
              href="https://audreyreillyart.com/"
            >
              audreyreillyart.com
            </a>
            <br />
            Instagram:{' '}
            <a
              className="text-primary hover:underline"
              target="_blank"
              href="https://instagram.com/audrey.reilly"
            >
              @audrey.reilly
            </a>
          </Prose>
        </Col>

        <Col lg={4} md={12} sm={12}>
          <GalleryLightboxItem
            localPreview="gallery/audrey-reilly/image-4.jpg"
            localFull={undefined}
            alt=""
            title=""
            width={768}
            height={727}
          />
        </Col>
      </Grid>
    </GalleryLightboxWrapper>
  )
}
