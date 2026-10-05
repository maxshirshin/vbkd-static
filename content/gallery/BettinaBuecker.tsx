import { CDNImage } from '@/components/ui/CDNImage'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { Heading } from '@/components/ui/Heading'
import { Grid, Col } from '@/components/ui/Layout'
import { Prose } from '@/components/ui/Prose'

export default function BettinaBuecker() {
  return (
    <GalleryLightboxWrapper>
      <Grid contained={false}>
        <Col>
          <GalleryLightboxItem
            localPreview="gallery/bettina-buecker/daucus-carota-preview.webp"
            localFull="gallery/bettina-buecker/daucus-carota-full.webp"
            alt="Botanische Illustration der Wilden Möhre (Daucus carota)"
            title="Daucus carota"
            width={1804}
            height={1528}
          />
          <Prose className="text-sm">
            <p>Daucus carota</p>
          </Prose>
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/bettina-buecker/rosa-rugosa-preview.webp"
            localFull="gallery/bettina-buecker/rosa-rugosa-full.webp"
            alt="Botanische Illustration der Kartoffelrose (Rosa rugosa)"
            title="Rosa rugosa"
            width={2039}
            height={2621}
          />
          <Prose className="text-sm">
            <p>Rosa rugosa</p>
          </Prose>
        </Col>
      </Grid>

      <Grid contained={false} className="mt-16">
        <Col lg={4} md={4} sm={12}>
          <CDNImage
            srcPath="gallery/bettina-buecker/portrait.jpg"
            alt="Porträt von Bettina Bücker"
            className="w-full max-w-[227px] h-auto object-contain"
          />
        </Col>

        <Col lg={8} md={8} sm={12}>
          <Prose className="text-base">
            <Heading>Bettina Bücker (VBKD Premium Mitglied)</Heading>
            <p>
              <strong>Bettina Bücker lebt und arbeitet in Hamburg.</strong>
            </p>
            <p>
              Die Leidenschaft für Botanische Kunst hat sie erst in den letzten Jahren entdeckt.
            </p>
            <p>
              Ganz norddeutsch, mit viel Weite in der Landschaft und viel Liebe zur Natur, bin ich
              in der Nähe von Bremen aufgewachsen.
              <br />
              Nach einem Grafik-Design Studium führte mein Weg mich nach Hamburg. Eine langjährige
              Tätigkeit in Design-Agenturen förderte und vertiefte die Auseinandersetzung mit der
              gestalterischen Arbeit im Detail.
              <br />
              Erst im Jahre 2020 entdeckte ich die Botanische Kunst für mich.
              <br />
              Eine 2 1/2 jährige Ausbildung der 'Society of Botanical Artists‘ SBA, GB, dem
              ‚Distance Learning Diploma Course‘ folgte und wurde erfolgreich mit Auszeichnung und
              ‚Award for Excellence‘ abgeschlossen.
            </p>
            <p>
              Seitdem steht die Arbeit als Botanische Künstlerin im Vordergrund.
              <br />
              Ich arbeite überwiegend mit Farbstift und Graphit auf Papier.
              <br />
              Botanisch-wissenschaftliche Präzision in der Pflanzendarstellung ist mir genauso
              wichtig wie Komposition im Format und Schönheit im Detail.
            </p>
            <p>
              In meinem Studio in Hamburg arbeite ich frei für Ausstellungen aber auch im Auftrag
              für z.B. Naturschutzverbände und für privat.
              <br />
              Teilnahme an div. Ausstellungen im In- und Ausland.
            </p>
            <p>
              Wir, als Botanische Künstler, knüpfen an, an die Tradition der botanisch-
              wissenschaftlichen Arbeiten früherer Jahrhunderte. Es ist wichtig wieder Wahrnehmung
              und Begeisterung für die Schönheit und Vielfalt der Natur zu wecken, in der Hoffnung,
              mit unserer Arbeit einen Beitrag zu deren Erhaltung zu leisten.
            </p>
            <p>
              Instagram:{' '}
              <a
                className="text-primary hover:underline"
                href="https://www.instagram.com/studio_b_hh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                studio_b_hh
              </a>
              <br />
              Homepage:{' '}
              <a
                className="text-primary hover:underline"
                href="https://www.bettinabueckerbotanicalart.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.bettinabueckerbotanicalart.de
              </a>
            </p>
          </Prose>
        </Col>
      </Grid>
    </GalleryLightboxWrapper>
  )
}
