import { Prose } from '@/components/ui/Prose'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { Grid, Col } from '@/components/ui/Layout'

export default function InesKamper() {
  return (
    <GalleryLightboxWrapper>
      <Grid contained={false}>
        <Col>
          <GalleryLightboxItem
            localPreview="gallery/ines-kamper/image-1.jpg"
            localFull={'gallery/ines-kamper/image-1-full.jpg'}
            alt=""
            title=""
            width={1500}
            height={2000}
          />
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/ines-kamper/image-2.jpg"
            localFull={'gallery/ines-kamper/image-2-full.jpg'}
            alt=""
            title=""
            width={1382}
            height={2000}
          />
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/ines-kamper/image-3.jpg"
            localFull={'gallery/ines-kamper/image-3-full.jpg'}
            alt=""
            title=""
            width={2000}
            height={1324}
          />
        </Col>
      </Grid>

      <Grid contained={false} className="mt-16">
        <Col lg={8} md={12} sm={12}>
          <Prose className="text-sm md:text-sm">
            <p>
              <strong>
                Ines Kamper ist eine Malerin und Illustratorin aus Norddeutschland. Sie
              </strong>
              <br />
              <strong>lebt mit ihrer Familie in der Nähe von Hamburg.</strong>
            </p>
            <p>
              In ihrer Kindheit ist sie viel in der Natur herumgestromert und interessierte sich
              schon früh für Blumen, Käfer und andere Insekten. In der Grundschule ist ihr
              künstlerisches Talent zum ersten mal aufgefallen. Eines ihrer Bilder gewann einen
              landesweiten Wettbewerb. Ihr Interesse erlosch aber abrupt als sie einer
              Begabtenklasse für Kunst zugeteilt wurde,
              <br />
              die von einer herrischen und kaltherzigen Lehrerin geleitet wurde.
            </p>
            <p>
              <br />
              Nach ihrer Ausbildung und ihrem Studium zum Ingenieur für Keramik, verbrachte sie
              einige Zeit im Ausland, in Großbritannien. Zurück in Norddeutschland arbeitete sie
              dann in der Werbung. Auf ihren vielen Reisen rund um die Welt, entdeckte sie ihre
              Liebe zur Natur und zur Kunst wieder. Sie nahm Zeichenunterricht und an Workshops für
              Botanical
              <br />
              Illustration teil, unter anderem bei Jessica Sheperd in London und Elaine Searle in
              Italien. Nach 2 jähriger Ausbildung (Distance Diploma Course) bei der Society of
              Botanical Artists (SBA) erhielt Ines Kamper ihr Diplom für Botanical Illustration.
            </p>
            <p>
              Instagram:{' '}
              <a
                className="text-primary hover:underline"
                target="_blank"
                href="https://www.instagram.com/ines_kamper2020"
              >
                @ines_kamper2020
              </a>
            </p>
            <p>
              E-Mail: <a href="mailto:ines_witt@yahoo.de">ines_witt@yahoo.de</a>
            </p>
          </Prose>
        </Col>

        <Col lg={4} md={12} sm={12}>
          <GalleryLightboxItem
            localPreview="gallery/ines-kamper/image-4.jpg"
            localFull={undefined}
            alt=""
            title=""
            width={446}
            height={446}
          />
        </Col>
      </Grid>
    </GalleryLightboxWrapper>
  )
}
