import { GalleryLightboxItem, GalleryLightboxWrapper } from '@/components/ui/GalleryLightbox'
import { Col, Grid } from '@/components/ui/Layout'
import { Prose } from '@/components/ui/Prose'

export default function KailinWeitkamper() {
  return (
    <GalleryLightboxWrapper>
      <Grid contained={false}>
        <Col>
          <GalleryLightboxItem
            localPreview="gallery/kailin-weitkamper/insular-woodiness-tenerife.jpg"
            localFull="gallery/kailin-weitkamper/insular-woodiness-tenerife-full.jpg"
            alt="Insular Woodiness, Tenerife"
            title="Insular Woodiness, Tenerife"
            width={4968}
            height={7026}
          />

          <Prose className="text-sm md:text-sm">
            <p>Insular Woodiness, Tenerife</p>
          </Prose>
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/kailin-weitkamper/compositae.jpg"
            localFull="gallery/kailin-weitkamper/compositae-full.jpg"
            alt="Compositae"
            title="Compositae"
            width={9921}
            height={14031}
          />

          <Prose className="text-sm md:text-sm">
            <p>Compositae</p>
          </Prose>
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/kailin-weitkamper/coniferae.jpg"
            localFull="gallery/kailin-weitkamper/coniferae-full.jpg"
            alt="Coniferae"
            title="Coniferae"
            width={6314}
            height={4464}
          />

          <Prose className="text-sm md:text-sm">
            <p>Coniferae</p>
          </Prose>
        </Col>
      </Grid>

      <Grid contained={false} className="mt-16">
        <Col lg={8} md={12} sm={12}>
          <Prose className="text-sm md:text-sm">
            <p>
              Dr. Kailin Weitkämper wurde in West Yorkshire in Nordengland geboren und besitzt die
              britische und deutsche Staatsbürgerschaft. Sie lebt in Herrsching, Bayern.
            </p>
            <p>
              Ursprünglich aus Großbritannien, erwarb sie von 2015 bis 2018 an der Universität
              Oxford, Merton College, einen Bachelorabschluss in Biologie. 2019 zog sie nach
              Deutschland, wo sie von 2019 bis 2021 einen Master in Evolution, Ecology, and
              Systematics und von 2021 bis 2026 eine Promotion in Systematischer Botanik an der
              Ludwig-Maximilians-Universität München absolvierte.
            </p>
            <p>
              Im Rahmen ihres Bachelorstudiums nahm sie 2017 an einer botanischen Exkursion nach
              Teneriffa teil. Dort öffnete ihr ein leidenschaftlicher Dozent die Augen für die
              wunderschöne Vielfalt der Pflanzenformen. Seitdem beschäftigt sie sich parallel zu
              ihrer wissenschaftlichen Arbeit mit botanischer Kunst und arbeitet vornehmlich mit
              Aquarell und Tinte.
            </p>
            <p>
              2023 wurde sie mit ihrem Aquarell „Coniferae“ als nominierte und ausgestellte
              Künstlerin der Young Botanical Artist Competition der Shirley Sherwood Collection in
              Kew, London, ausgewählt. Dort lernte sie Carolina M. Correia kennen. Gemeinsam zeigten
              sie im Sommer 2025 im Botanischen Garten München-Nymphenburg die Ausstellung
              „Divergenz und Konvergenz: ein illustrierter Führer durch die Evolution der Pflanzen“.
            </p>
            <p>
              Ihr wissenschaftlicher Hintergrund liegt in der evolutionären Biologie sowie in der
              Phylogenie und Systematik der Pflanzen. Deshalb ist es ihr besonders wichtig, dass
              ihre botanische Kunst auf Prinzipien der Pflanzenevolution gründet. Sie zeigt etwa
              Phänomene wie konvergente Evolution oder die Vielfalt der Formen innerhalb einer
              taxonomischen Gruppe, beispielsweise einer Gattung oder Familie.
            </p>
            <p>
              Im VBKD engagiert sie sich im Beirat und nahm an Vereinsausstellungen teil, darunter
              „Ein Klostergarten“ im Kloster Seligenstadt sowie „Orchids Orchids Orchids“ im Rahmen
              der World Orchid Conference 2026 in Dresden.
            </p>
            <p>
              Website:{' '}
              <a className="text-primary hover:underline" href="https://www.kailin.de/">
                www.kailin.de
              </a>
            </p>
            <p>
              Instagram:{' '}
              <a
                className="text-primary hover:underline"
                href="https://www.instagram.com/kailin_sun_botanical_artist/"
              >
                @kailin_sun_botanical_artist
              </a>
            </p>
          </Prose>
        </Col>
      </Grid>
    </GalleryLightboxWrapper>
  )
}
