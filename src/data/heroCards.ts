export interface HeroCardData {
  /** Unique identifier for the card. */
  id: string;
  /** Large heading displayed on the card. */
  title: string;
  /** Supporting text below the title. */
  description: string;
  /** URL the entire card links to. */
  link: string;
  /** Cloudinary public ID for the background image. */
  backgroundImage: string;
  /**
   * How the background image attaches to the container.
   * - `"top-left"` — anchored to the top-left corner (default).
   * - `"center"` — centred; left/right edges may be cropped.
   */
  backgroundPosition?: "top-left" | "center";
}

export interface HeroSliderConfig {
  /** Time in milliseconds each card is shown before advancing (default: 6000). */
  intervalMs: number;
  /** Duration of the crossfade transition in milliseconds (default: 800). */
  transitionMs: number;
}

export const heroSliderConfig: HeroSliderConfig = {
  intervalMs: 4000,
  transitionMs: 800,
};

/**
 * Register hero cards here — order determines display order in the slider.
 * Each card needs a Cloudinary image uploaded under the given public ID.
 */
export const heroCards: HeroCardData[] = [
  {
    id: "botanical-watercolour",
    title: "Botanical Watercolour",
    description:
      "Detailed botanical studies in watercolour on paper and vellum",
    link: "/gallery/botanical-watercolour",
    backgroundImage: "gallery/rosehip",
  },
  {
    id: "oil-paintings",
    title: "Oil Paintings",
    description:
      "Still life and botanical compositions inspired by Dutch Golden Age masters",
    link: "/gallery/oil-paintings",
    backgroundImage: "gallery/tulip-parakeet",
    backgroundPosition: "center",
  },
  {
    id: "miniatures",
    title: "Miniature Paintings",
    description: "Intricate miniature works showcasing precision and delicacy",
    link: "/gallery/miniatures",
    backgroundImage: "gallery/grapefruit",
  },
];
