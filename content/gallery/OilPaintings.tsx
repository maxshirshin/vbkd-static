import { CloudinaryImage } from "@/components/CloudinaryImage";

const works = [
  {
    title: "Grapefruit Slice",
    medium: "Oil on panel",
    publicId: "gallery/grapefruit-slice",
  },
  {
    title: "Grapefruit",
    medium: "Oil on panel",
    publicId: "gallery/grapefruit",
  },
  { title: "Rosehip", medium: "Oil on panel", publicId: "gallery/rosehip" },
  {
    title: "Tulip Parakeet",
    medium: "Oil on panel",
    publicId: "gallery/tulip-parakeet",
  },
];

export default function OilPaintings() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work) => (
        <div key={work.title}>
          {work.publicId ? (
            <CloudinaryImage
              publicId={work.publicId}
              alt={`${work.title} — ${work.medium}`}
              width={600}
              aspectRatio="3:4"
              resize="auto"
              gravity="auto"
              className="mb-3 w-full"
            />
          ) : (
            <div
              className="aspect-[3/4] mb-3 flex items-center justify-center"
              style={{ backgroundColor: "var(--color-border-light)" }}
            >
              <span
                className="text-sm"
                style={{ color: "var(--color-text-light)" }}
              >
                Image placeholder
              </span>
            </div>
          )}
          <h3
            className="text-base font-normal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {work.title}
          </h3>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            {work.medium}
          </p>
        </div>
      ))}
    </div>
  );
}
