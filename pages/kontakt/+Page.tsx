export default Page

import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'
import { Button } from '@/components/ui/Button'
import { Grid, Col } from '@/components/ui/Layout'

function Page() {
  return (
    <Grid>
      <Col lg={12} md={12} sm={12} className="text-center">
        <Heading as="h1">Kontakt</Heading>
      </Col>

      <Col lg={5} md={12} sm={12}>
        <Prose>
          <p>
            E-Mail:{' '}
            <a
              href="mailto:info@verein-botanischekunst.de"
              className="text-accent hover:text-accent-dark"
            >
              info@verein-botanischekunst.de
            </a>
          </p>
          <p>
            Geschäftsadresse:
            <br />
            Verein Botanische Kunst e.V.
            <br />
            Zu Hd. Audrey Reilly
            <br />
            Im Hagen 11
            <br />
            30900 Wedemark
          </p>
          <p>
            <a
              href="https://www.instagram.com/vbk_deutschland/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark"
            >
              Instagram
            </a>
          </p>
        </Prose>
      </Col>

      <Col lg={7} md={12} sm={12}>
        {/* Form has no backend yet; action left blank pending integration */}
        <form action="https://forms.formward.eu/f/330c9662-a332-48fe-b4b1-b0cec2def1cc" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-border bg-surface rounded focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-Mail*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-border bg-surface rounded focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Nachricht*
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-border bg-surface rounded focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <input type="text" name="_gotcha" style={{display:"none"}} tabIndex={-1} />

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="gdpr"
              name="gdpr"
              required
              className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            <label htmlFor="gdpr" className="text-sm text-text-muted cursor-pointer">
              Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme
              gespeichert und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung
              jederzeit widerrufen kann.*
            </label>
          </div>

          <p className="text-xs text-text-muted">* Kennzeichnet erforderliche Felder</p>

          <Button type="submit" className="w-full">
            Senden
          </Button>
        </form>
      </Col>
    </Grid>
  )
}
