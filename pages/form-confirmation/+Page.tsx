export default Page

import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'
import { Grid, Col } from '@/components/ui/Layout'

function Page() {
  return (
    <Grid>
      <Col lg={12} md={12} sm={12} className="text-center">
        <Heading as="h1">Kontakt</Heading>
        <Prose>
          <p>Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
        </Prose>
      </Col>
    </Grid>
  )
}
