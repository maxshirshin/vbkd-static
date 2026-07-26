export default Page;

import { usePageContext } from "vike-react/usePageContext";
import { galleries } from "@/data/galleries";

function Page() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug ?? "";
  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) {
    return (
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h1 className="mb-4">Gallery Not Found</h1>
          <p style={{ color: "var(--color-text-muted)" }}>
            This gallery does not exist.{" "}
            <a href="/gallery" style={{ color: "var(--color-accent)" }}>
              Browse all galleries →
            </a>
          </p>
        </div>
      </section>
    );
  }

  const GalleryContent = gallery.Component;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <nav
          className="mb-8 text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          <a href="/gallery">Gallery</a>
          <span className="mx-2">/</span>
          <span style={{ color: "var(--color-text)" }}>{gallery.title}</span>
        </nav>

        <h1 className="mb-2">{gallery.title}</h1>
        <p
          className="mb-12 max-w-2xl"
          style={{ color: "var(--color-text-muted)" }}
        >
          {gallery.description}
        </p>

        <GalleryContent />
      </div>
    </section>
  );
}
