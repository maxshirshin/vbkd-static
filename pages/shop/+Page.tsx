export default Page;

import { shopItems } from "@/data/shopItems";

function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-center mb-4">Shop</h1>
        <p
          className="text-center mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-muted)" }}
        >
          Original artworks, limited-edition prints, and botanical art materials
          available for purchase. Click on an item to view details and place an
          order.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopItems.map((item) => (
            <a
              key={item.slug}
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className="aspect-square mb-4 flex items-center justify-center transition-shadow group-hover:shadow-lg"
                style={{ backgroundColor: "var(--color-border-light)" }}
              >
                <span
                  className="text-sm"
                  style={{ color: "var(--color-text-light)" }}
                >
                  Product image placeholder
                </span>
              </div>
              <h2
                className="text-lg mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h2>
              <p
                className="text-sm mb-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item.description}
              </p>
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                {item.price}
              </p>
              {item.availability && (
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--color-text-light)" }}
                >
                  {item.availability}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
