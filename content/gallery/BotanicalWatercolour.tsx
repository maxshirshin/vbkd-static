// import { CloudinaryImage } from "@/components/CloudinaryImage";

const works = [
  { title: "Breath of Fire", medium: "Watercolour on paper" },
  { title: "The Secret", medium: "Watercolour on vellum" },
  { title: "You Are in My Heart", medium: "Watercolour on paper" },
  { title: "Physalis", medium: "Watercolour on paper" },
  { title: "Tenderness", medium: "Watercolour on paper" },
  { title: "Pleasure", medium: "Watercolour on paper" },
];

export default function BotanicalWatercolour() {
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
