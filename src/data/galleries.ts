import type { ComponentType } from "react";

// Import gallery components
import BotanicalWatercolour from "../../content/gallery/BotanicalWatercolour";
import OilPaintings from "../../content/gallery/OilPaintings";
import Miniatures from "../../content/gallery/Miniatures";

export interface Gallery {
  slug: string;
  title: string;
  description: string;
  coverImage?: string; // Cloudinary public ID
  Component: ComponentType;
}

// Register all galleries here — order determines display order everywhere
export const galleries: Gallery[] = [
  {
    slug: "botanical-watercolour",
    title: "Botanical Watercolour",
    description:
      "Detailed botanical studies in watercolour on paper and vellum.",
    Component: BotanicalWatercolour,
  },
  {
    slug: "oil-paintings",
    title: "Oil Paintings",
    description:
      "Still life and botanical compositions in oil, inspired by the Dutch Golden Age masters.",
    coverImage: "gallery/tulip-parakeet",
    Component: OilPaintings,
  },
  {
    slug: "miniatures",
    title: "Miniature Paintings",
    description:
      "Intricate miniature works showcasing precision and delicacy.",
    Component: Miniatures,
  },
];
