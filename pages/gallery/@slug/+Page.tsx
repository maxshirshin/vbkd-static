export default Page;

import { usePageContext } from "vike-react/usePageContext";
import { galleries } from "@/data/galleries";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

function Page() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug ?? "";
  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) {
    return (
      <Section>
        <Container className="text-center">
          <Heading as="h1">Mitglied nicht gefunden</Heading>
          <p className="text-text-muted">
            Dieses Mitglied wurde nicht gefunden.{" "}
            <a href="/gallery" className="text-accent hover:text-accent-dark">
              Zurück zur Galerie →
            </a>
          </p>
        </Container>
      </Section>
    );
  }

  const GalleryContent = gallery.Component;

  return (
    <Section>
      <Container>
        <nav className="mb-8 text-sm text-text-muted">
          <a href="/gallery" className="hover:text-primary">Galerie</a>
          <span className="mx-2">/</span>
          <span className="text-text">{gallery.title}</span>
        </nav>

        <Heading as="h1">{gallery.title}</Heading>
        <p className="mb-12 max-w-2xl text-text-muted">
          {gallery.description}
        </p>

        <GalleryContent />
      </Container>
    </Section>
  );
}
