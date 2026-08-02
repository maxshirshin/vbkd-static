export default Page;

import { CDNImage } from "@/components/CDNImage";
import { galleries } from "@/data/galleries";

function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-center mb-4">Galerie</h1>
        <p
          className="text-center mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-muted)" }}
        >
          Unsere Mitglieder und ihre Kunstwerke.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery) => (
            <a
              key={gallery.slug}
              href={`/gallery/${gallery.slug}`}
              className="group block"
            >
              {gallery.coverImage ? (
                <CDNImage
                  srcPath={gallery.coverImage}
                  alt={`${gallery.title} — cover`}
                  className="w-full aspect-square object-cover transition-shadow group-hover:shadow-lg mb-4"
                />
              ) : (
                <div
                  className="aspect-square mb-4 flex items-center justify-center transition-shadow group-hover:shadow-lg"
                  style={{ backgroundColor: "var(--color-border-light)" }}
                >
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    Bild fehlt
                  </span>
                </div>
              )}
              <h2
                className="text-xl mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {gallery.title}
              </h2>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                {gallery.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
