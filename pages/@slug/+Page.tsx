export default Page

import { usePageContext } from 'vike-react/usePageContext'
import { galleries } from '@/data/galleries'
import { Heading } from '@/components/ui/Heading'
import { Grid, Col } from '@/components/ui/Layout'

function Page() {
  const { routeParams } = usePageContext()
  const slug = routeParams?.slug ?? ''
  const gallery = galleries.find((g) => g.slug === slug)

  if (!gallery) {
    return (
      <Grid>
        <Col lg={12} md={12} sm={12} className="text-center">
          <Heading as="h1">Mitglied nicht gefunden</Heading>
          <p className="text-text-muted">
            Dieses Mitglied wurde nicht gefunden.{' '}
            <a href="/mitglieder" className="text-accent hover:text-accent-dark">
              Zurück zur Galerie →
            </a>
          </p>
        </Col>
      </Grid>
    )
  }

  const GalleryContent = gallery.Component

  return (
    <Grid>
      <Col lg={12} md={12} sm={12}>
        <nav className="mb-8 text-sm text-text-muted">
          <a href="/mitglieder" className="hover:text-primary">
            Galerie
          </a>
          <span className="mx-2">/</span>
          <span className="text-text">{gallery.title}</span>
        </nav>

        <Heading as="h1">{gallery.title}</Heading>
        <p className="mb-12 max-w-2xl text-text-muted">{gallery.description}</p>

        <GalleryContent />
      </Col>
    </Grid>
  )
}
