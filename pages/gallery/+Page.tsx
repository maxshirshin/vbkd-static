export default Page;

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { GalleryCard } from "@/components/ui/GalleryCard";
import { galleries } from "@/data/galleries";

function Page() {
  return (
    <Section>
      <Container>
        <Heading as="h1" className="text-center mb-4">Galerie</Heading>
        <p className="text-center mb-12 max-w-2xl mx-auto text-text-muted">
          Unsere Mitglieder und ihre Kunstwerke.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery) => (
            <GalleryCard
              key={gallery.slug}
              slug={gallery.slug}
              title={gallery.title}
              description={gallery.description}
              coverImage={gallery.coverImage}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
