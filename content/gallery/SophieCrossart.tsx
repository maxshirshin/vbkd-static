import { Prose } from '@/components/ui/Prose'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { Grid, Col } from '@/components/ui/Layout'

export default function SophieCrossart() {
  return (
    <GalleryLightboxWrapper>
      <Grid contained={false}>
        <Col>
          <GalleryLightboxItem
            localPreview="gallery/sophie-crossart/image-1.jpg"
            localFull={'gallery/sophie-crossart/image-1-full.jpg'}
            alt=""
            title=""
            width={708}
            height={1000}
          />
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/sophie-crossart/image-2.jpg"
            localFull={'gallery/sophie-crossart/image-2-full.jpg'}
            alt=""
            title=""
            width={850}
            height={1280}
          />
        </Col>

        <Col>
          <GalleryLightboxItem
            localPreview="gallery/sophie-crossart/image-3.jpg"
            localFull={'gallery/sophie-crossart/image-3-full.jpg'}
            alt=""
            title=""
            width={900}
            height={1273}
          />
        </Col>
      </Grid>

      <Grid contained={false} className="mt-16">
        <Col lg={12} md={12} sm={12}>
          <Prose className="text-sm md:text-sm">
            <p>
              <strong>
                Sophie ist eine botanische Künstlerin und Illustratorin, die mit Aquarellfarben
                auf Papier und
              </strong>
              <br />
              <strong>Pergament malt.</strong>
            </p>
            <p>
              In unserem modernen digitalen Zeitalter ist das Malen der Natur ihre Art, ein Gefühl
              von Authentizität, Verbundenheit und Gewissheit im Leben zu bewahren. Im Mittelpunkt
              ihrer Arbeit steht ihre Faszination für komplizierte natürliche Details. Sie
              beobachtet und isoliert diese sorgfältig in ihre Bilder, um die Erfüllung
              einzufangen, die wir erfahren, wenn wir auf etwas scheinbar Unbedeutendes stoßen,
              das sich aber als liebevoll schön herausstellt.
            </p>
            <p>
              Indem sie die flüchtigen Qualitäten, die sie in der Natur findet, auf Kunstwerke
              überträgt, möchtet Sophie sie zu eine bleibende Erfahrung und Quelle der
              Vertrautheit und Inspiration machen. Indem sie ihre botanischen Motive gelegentlich
              mit Gegenständen aus der Naturgeschichte kombiniert, erforscht sie die Beziehung der
              Menschheit zu den größeren Themen Wandel und Zeit. Ihre eigene Interpretation von
              „Memento Mori“ plädiert für die Erfahrung der Schönheit des Lebens statt der Angst
              für Verlust. Momentan arbeitet Sie an eine Serie der die grandiose Strukturen des
              Weltraum verbindet mit die Einzigartigkeit der irdische Natur — der Natur als Teil
              des Alls.
            </p>
            <p>
              Sophie studierte Kunstgeschichte in den Niederlanden und Deutschland und promovierte
              in München. Ihre Werke sind geprägt von ihrem akademischen Forschung nach der
              historischen Abbildung des Alltags und der Natur. Sophie lebt in Heidelberg,
              Deutschland, und arbeitet sowohl an kommerziellen als auch privaten Aufträgen und
              Zusammenarbeiten. Ihre Werke werden weltweit gesammelt.
            </p>
            <p>
              Homepage:{' '}
              <a
                className="text-primary hover:underline"
                target="_blank"
                href="https://www.sophiecrossart.com"
              >
                www.sophiecrossart.com
              </a>
              <br />
              Instagram:{' '}
              <a
                className="text-primary hover:underline"
                target="_blank"
                href="https://www.instagram.com/sophiecrossart"
              >
                www.instagram.com/sophiecrossart
              </a>
              <br />
              E-mail: <a href="mailto:contact@sophiecrossart.com">contact@sophiecrossart.com</a>
            </p>
          </Prose>
        </Col>
      </Grid>
    </GalleryLightboxWrapper>
  )
}
