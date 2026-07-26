import { useMemo } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import {
  fill,
  scale,
  fit,
  crop,
  auto as autoResize,
} from "@cloudinary/url-gen/actions/resize";
import {
  autoGravity,
  compass,
  focusOn,
} from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";
import {
  AdvancedImage,
  responsive,
  lazyload,
  placeholder,
} from "@cloudinary/react";
import type { Plugins } from "@cloudinary/html";

// ─── Cloudinary instance (singleton) ────────────────────────────────────────
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dukt6jxh1";
const cld = new Cloudinary({ cloud: { cloudName: cloudName } });

// ─── Public types ───────────────────────────────────────────────────────────

/** Standard aspect ratios supported as convenient string presets. */
export type AspectRatio =
  | "1:1"
  | "4:3"
  | "3:2"
  | "5:4"
  | "16:9"
  | "3:4"
  | "2:3"
  | "4:5"
  | "9:16";

/** How the image should be resized to fit the requested dimensions. */
export type ResizeMode =
  /** Crop to exact dimensions, keeping the most interesting area (default). */
  | "fill"
  /** Scale down to fit within the dimensions — no cropping. */
  | "fit"
  /** Scale to exact width/height (may distort). */
  | "scale"
  /** Crop from a fixed gravity point. */
  | "crop"
  /** Cloudinary AI auto-crop. */
  | "auto";

/** How to pick the focal area when cropping. */
export type Gravity =
  | "auto"
  | "face"
  | "center"
  | "north"
  | "south"
  | "east"
  | "west"
  | "north_east"
  | "north_west"
  | "south_east"
  | "south_west";

interface CloudinaryImageProps {
  /** Cloudinary public ID (e.g., "gallery/breath-of-fire"). */
  publicId: string;
  /** Alt text for accessibility. */
  alt: string;
  /** Desired display width in CSS pixels. Also used as the base for responsive breakpoints. */
  width?: number;
  /** Desired display height in CSS pixels. */
  height?: number;
  /** Aspect ratio preset — applied via Cloudinary crop transform. */
  aspectRatio?: AspectRatio;
  /** Resize mode (default: "fill"). */
  resize?: ResizeMode;
  /** Gravity / focal-point strategy (default: "auto" — Cloudinary AI). */
  gravity?: Gravity;
  /** Additional CSS classes. */
  className?: string;
  /**
   * Enable the responsive plugin: Cloudinary will deliver an image
   * whose width matches the container. The value sets the step size in
   * pixels (default 100). Pass `false` to disable.
   */
  responsiveStep?: number | false;
  /** Show a low-quality placeholder while the image loads (default: true). */
  showPlaceholder?: boolean;
  /** Placeholder style (default: "blur"). */
  placeholderMode?: "blur" | "pixelate" | "vectorize" | "predominant-color";
  /** Whether to lazy-load the image when it enters the viewport (default: true). */
  lazy?: boolean;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Map user-friendly gravity strings to url-gen qualifier objects. */
function resolveGravity(g: Gravity) {
  if (g === "auto") return autoGravity();
  if (g === "face") return focusOn(face());
  return compass(g);
}

/** Build a Cloudinary resize action from props. */
function buildResize(
  mode: ResizeMode,
  w: number | undefined,
  h: number | undefined,
  ar: AspectRatio | undefined,
  g: Gravity,
) {
  // Choose the resize action constructor
  const actionFn =
    mode === "fit"
      ? fit
      : mode === "scale"
        ? scale
        : mode === "crop"
          ? crop
          : mode === "auto"
            ? autoResize
            : fill; // default

  const action = actionFn();

  if (w) action.width(w);
  if (h) action.height(h);

  // Aspect ratio — only relevant for cropping modes
  if (ar && mode !== "scale" && mode !== "fit") {
    action.aspectRatio(ar.replace(":", ":"));
  }

  // Gravity — only for fill / crop / auto
  if (mode === "fill" || mode === "crop" || mode === "auto") {
    (action as ReturnType<typeof fill>).gravity(resolveGravity(g));
  }

  return action;
}

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * Renders an optimised image from Cloudinary using the official React SDK.
 *
 * Features:
 * - Automatic format (AVIF/WebP) and quality optimisation
 * - Responsive delivery via the `responsive` plugin (adjusts src to container width)
 * - Lazy loading & low-quality placeholder out of the box
 * - Convenient aspect-ratio presets for standard crops
 *
 * @example
 * ```tsx
 * // Simple responsive image
 * <CloudinaryImage
 *   publicId="gallery/breath-of-fire"
 *   alt="Breath of Fire — watercolour botanical painting"
 *   width={800}
 * />
 *
 * // Square crop with AI gravity
 * <CloudinaryImage
 *   publicId="gallery/breath-of-fire"
 *   alt="Breath of Fire"
 *   width={400}
 *   aspectRatio="1:1"
 * />
 *
 * // Portrait 2:3, face-aware crop
 * <CloudinaryImage
 *   publicId="portraits/artist"
 *   alt="Artist portrait"
 *   width={600}
 *   aspectRatio="2:3"
 *   gravity="face"
 * />
 * ```
 */
export function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  aspectRatio,
  resize = "fill",
  gravity = "auto",
  className = "",
  responsiveStep = 100,
  showPlaceholder = true,
  placeholderMode = "blur",
  lazy = true,
}: CloudinaryImageProps) {
  // Build the url-gen image with transforms (memoised to avoid re-creating on every render)
  const cldImage = useMemo(() => {
    const img = cld.image(publicId).format("auto").quality("auto");
    if (width || height || aspectRatio) {
      img.resize(buildResize(resize, width, height, aspectRatio, gravity));
    }
    return img;
  }, [publicId, width, height, aspectRatio, resize, gravity]);

  // Assemble plugins in order: responsive → lazy → placeholder
  const plugins = useMemo(() => {
    const p: Plugins = [];
    if (responsiveStep !== false) {
      p.push(responsive({ steps: responsiveStep }));
    }
    if (lazy) {
      p.push(lazyload());
    }
    if (showPlaceholder) {
      p.push(placeholder({ mode: placeholderMode }));
    }
    return p;
  }, [responsiveStep, lazy, showPlaceholder, placeholderMode]);

  return (
    <AdvancedImage
      cldImg={cldImage}
      plugins={plugins}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
