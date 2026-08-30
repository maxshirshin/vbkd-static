export default Page

import { Heading } from '@/components/ui/Heading'
import { Prose } from '@/components/ui/Prose'
import { CDNImage } from '@/components/ui/CDNImage'
import { Grid, Col } from '@/components/ui/Layout'

function Page() {
  return (
    <Grid>
      <Col lg={8} md={12} sm={12} className="pt-10">
        <CDNImage
          srcPath="home-intro.png"
          alt="Verein Botanische Kunst Deutschland e.V."
          className="w-full max-w-md h-auto object-contain mb-8"
        />
        <Prose>
          <Heading as="h2">Willkommen beim Verein für Botanische Kunst Deutschland!</Heading>
          <p>Wir sind eine Gruppe von pflanzenbegeisterten Künstlern und Illustratoren.</p>
          <p>
            Wir möchten viele Menschen für die botanische Kunst begeistern und sie ermutigen sich
            uns anzuschließen.
          </p>
          <p>
            Professionelle und semiprofessionelle Künstler, Anfänger, Förderer und
            Naturinteressierte genießen die Vorteile einer Mitgliedschaft und unterstützen
            botanische Kunst in ganz Deutschland.
          </p>

          <hr className="my-8 border-border" />

          <p className="font-bold">Welcome to the German Society for Botanical Art!</p>
          <p>We are a group of plant-loving artists and illustrators.</p>
          <p>We want to arouse interest in botanical art and encourage people to join us.</p>
          <p>
            Professional and semi-professional artists, beginners, patrons and nature enthusiasts
            can enjoy the benefits of membership and support botanical art throughout Germany.
          </p>
        </Prose>
      </Col>

      <Col lg={4} md={12} sm={12}>
        <a href="/news" className="group block max-w-xs mx-auto text-center">
          <CDNImage
            srcPath="news/journal-13.jpg"
            alt="VBKD Journal Nr. 13, August 2026"
            className="w-full h-auto object-contain mb-4 transition-shadow group-hover:shadow-lg"
          />
          <p className="text-sm text-text-muted group-hover:text-primary transition-colors">
            VBKD Journal Nr. 13, August 2026
          </p>
        </a>
      </Col>
    </Grid>
  )
}
