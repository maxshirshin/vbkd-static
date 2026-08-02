import type { ComponentType } from "react";

// Import gallery components
import MaximShirshin from "../../content/gallery/MaximShirshin";
import SueHenon from "../../content/gallery/SueHenon";
import AudreyReilly from "../../content/gallery/AudreyReilly";

export interface Gallery {
  slug: string;
  title: string;
  description: string;
  coverImage?: string; // Cloudinary public ID
  Component: ComponentType;
}

// Register all members here
export const galleries: Gallery[] = [
  {
    slug: "maxim-shirshin",
    title: "Maxim Shirshin",
    description: "Softwareentwickler und Künstler. Arbeitet mit Aquarellfarben und Farbstiften.",
    coverImage: "mitglieder/maxim-1.jpg",
    Component: MaximShirshin,
  },
  {
    slug: "sue-henon",
    title: "Sue Hénon",
    description: "Botanische Malerei und Illustration. Farbstifte, Graphit, Aquarelle, Öl.",
    coverImage: "mitglieder/sue-1.png",
    Component: SueHenon,
  },
  {
    slug: "audrey-reilly",
    title: "Audrey Reilly",
    description: "Vorstandsvorsitzende des VBKD. Natur und Botanische Kunst.",
    coverImage: "mitglieder/audrey-1.jpg",
    Component: AudreyReilly,
  },
];
