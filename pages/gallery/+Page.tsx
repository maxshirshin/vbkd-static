export default Page;

import { CloudinaryImage } from "@/components/CloudinaryImage";
import { galleries } from "@/data/galleries";

function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-center mb-4">Gallery</h1>
        <p
          className="text-center mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-muted)" }}
        >
          Explore collections of Svetlana's work across different media and
          styles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery) => (
            <a
              key={gallery.slug}
              href={`/gallery/${gallery.slug}`}
              className="group block"
            >
              {gallery.coverImage ? (
                <CloudinaryImage
                  publicId={gallery.coverImage}
                  alt={`${gallery.title} — cover`}
                  width={600}
                  aspectRatio="4:3"
                  resize="auto"
                  gravity="auto"
                  className="w-full h-full object-cover transition-shadow group-hover:shadow-lg"
                />
              ) : (
                <div
                  className="aspect-[4/3] mb-4 flex items-center justify-center transition-shadow group-hover:shadow-lg"
                  style={{ backgroundColor: "var(--color-border-light)" }}
                >
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    Cover image placeholder
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
