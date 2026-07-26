import { useMemo } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import type { HeroCardData } from "@/data/heroCards";

const cld = new Cloudinary({ cloud: { cloudName: "dukt6jxh1" } });

/**
 * Build a Cloudinary URL suitable for use as a CSS background-image.
 * Returns a wide, auto-format, auto-quality URL with auto gravity.
 */
function buildBgUrl(publicId: string, width: number): string {
  return cld
    .image(publicId)
    .format("auto")
    .quality("auto")
    .resize(fill().width(width).gravity(autoGravity()))
    .toURL();
}

interface HeroCardProps {
  card: HeroCardData;
}

/**
 * A single hero card rendered as a full-width clickable banner.
 *
 * - Background image covers 100% width, anchored top-left (bottom may crop).
 * - Title and description sit in the bottom-left with a semi-transparent overlay.
 */
export function HeroCard({ card }: HeroCardProps) {
  // Pre-generate URLs for a couple of breakpoints; the browser picks via srcset-like
  // approach isn't available for background-image, so we use a large default.
  const bgUrl = useMemo(
    () => buildBgUrl(card.backgroundImage, 1600),
    [card.backgroundImage],
  );

  return (
    <a
      href={card.link}
      className="block relative w-full overflow-hidden"
      style={{ minHeight: "min(65vh, 600px)" }}
      aria-label={card.title}
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition:
            card.backgroundPosition === "center" ? "center" : "top left",
          backgroundRepeat: "no-repeat",
          backgroundColor: "var(--color-primary-dark)",
        }}
      />

      {/* Text overlay — bottom-left, background on each text line */}
      <div className="absolute inset-x-0 bottom-0 px-6 py-8 md:px-12 md:py-10">
        <div className="container">
          <div className="mb-2">
            <h2
              className="text-2xl md:text-4xl leading-snug"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#ffffff",
                display: "inline",
                backgroundColor: "rgba(26, 46, 38, 0.75)",
                padding: "0.15em 0.4em 0.15em 0.5rem",
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
              }}
            >
              {card.title}
            </h2>
          </div>
          <div>
            <p
              className="text-sm md:text-base max-w-xl leading-relaxed"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                display: "inline",
                backgroundColor: "rgba(26, 46, 38, 0.65)",
                padding: "0.15em 0.4em 0.15em 0.5rem",
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
              }}
            >
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
