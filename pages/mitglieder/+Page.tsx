export default Page

import { Heading } from '@/components/ui/Heading'
import { GalleryCard } from '@/components/ui/GalleryCard'
import { galleries } from '@/data/galleries'
import { Grid, Col } from '@/components/ui/Layout'

function Page() {
  return (
    <Grid>
      <Col lg={12} md={12} sm={12}>
        <Heading as="h1" className="text-center mb-4">
          Galerie
        </Heading>
        <p className="text-center mb-12 max-w-2xl mx-auto text-text-muted">
          Unsere Mitglieder und ihre Kunstwerke.
        </p>

        <Grid contained={false}>
          {galleries.map((gallery) => (
            <Col key={gallery.slug} lg={4} md={6} sm={12}>
              <GalleryCard
                slug={gallery.slug}
                title={gallery.title}
                description={gallery.description}
                coverImage={gallery.coverImage}
              />
            </Col>
          ))}
        </Grid>
      </Col>
    </Grid>
  )
}
