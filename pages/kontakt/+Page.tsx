export default Page

import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'
import { Grid, Col } from '@/components/ui/Layout'

function Page() {
  return (
    <Grid>
      <Col lg={12} md={12} sm={12} className="text-center">
        <Heading as="h1">Kontakt</Heading>
      </Col>

      <Col lg={12} md={12} sm={12}>
        <Prose>
          Sie erreichen uns per E-Mail unter{' '}
          <a
            href="mailto:info@verein-botanischekunst.de"
            className="font-bold text-accent hover:text-accent-dark"
          >
            info@verein-botanischekunst.de
          </a>
          .
        </Prose>
        <Prose>
          Durch das Senden einer E-Mail erklären Sie sich damit einverstanden, dass Ihre
          personenbezogenen Daten zum Zweck der Kontaktaufnahme gespeichert und verarbeitet werden.
          Ihnen ist bekannt, dass Sie Ihre Einwilligung jederzeit widerrufen können.
        </Prose>
      </Col>
      <Col lg={12} md={12} sm={12}>
        <Prose>
          Geschäftsadresse:
          <br />
          Verein Botanische Kunst e.V.
          <br />
          Zu Hd. Audrey Reilly
          <br />
          Im Hagen 11
          <br />
          30900 Wedemark
        </Prose>
        <Prose>
          <a
            href="https://www.instagram.com/vbk_deutschland/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-dark"
          >
            Instagram
          </a>
        </Prose>
      </Col>
    </Grid>
  )
}
