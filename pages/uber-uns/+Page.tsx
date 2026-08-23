export default Page

import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'
import { Grid, Col } from '@/components/ui/Layout'

function Page() {
  return (
    <Grid>
      <Col lg={12} md={12} sm={12}>
        <Heading as="h1" className="text-center">
          Über uns
        </Heading>
        <Prose>
          <p>
            Der gemeinnützige Verein für Botanische Kunst Deutschland (VBKD) wurde im September 2022
            von Botanischen Künstlern aus Deutschland gegründet.
          </p>
          <p>
            Wir sind alle Liebhaber der Botanischen Kunst, die uns an unterschiedlichen Punkten
            unseres Lebens verzaubert hat. Unser Ziel ist es, in der Tradition Georg Ehrets, Sibylla
            Merians und Ernst Häckels die Botanische Kunst in Deutschland wieder aufleben zu lassen,
            sie zu fördern und ihre moderne Entwicklung zu begleiten.
          </p>
          <p>
            Wir förderen das Bewusstsein und das Verständnis für Botanische Kunst im Verein durch
            Veranstaltungen und Ausstellungen. Wir schaffen für unsere Mitglieder Möglichkeiten, ihre
            Kunstwerke einem breiten Publikum zu präsentieren. Weiterhin wollen wir die Techniken und
            Fähigkeiten unserer Mitglieder durch Workshops und Austausch verbessern.
          </p>
        </Prose>
      </Col>
    </Grid>
  )
}
