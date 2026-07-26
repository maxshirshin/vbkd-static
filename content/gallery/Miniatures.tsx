// import { CloudinaryImage } from "@/components/CloudinaryImage";

const works = [
  { title: "Miniature Study I", medium: "Watercolour on vellum" },
  { title: "Miniature Study II", medium: "Watercolour on vellum" },
];

export default function Miniatures() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work) => (
        <div key={work.title}>
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
