#!/usr/bin/env node

/**
 * Upload images to Cloudinary.
 *
 * Place images in the `images/` folder at the project root, mirroring the
 * folder structure you want as Cloudinary public IDs:
 *
 *   images/gallery/breath-of-fire.jpg   → public ID "gallery/breath-of-fire"
 *   images/portraits/artist.png         → public ID "portraits/artist"
 *
 * Usage:
 *   node scripts/upload-images.mjs              # upload new images
 *   node scripts/upload-images.mjs --dry-run    # preview what would be uploaded
 *   node scripts/upload-images.mjs --overwrite  # re-upload even if already exists
 *
 * Requires a `.env` file at the project root with:
 *   CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 */

import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import { readdir, stat } from "node:fs/promises";
import { resolve, relative, extname, join } from "node:path";

// ── Config ──────────────────────────────────────────────────────────────────

const IMAGES_DIR = resolve("images");
const SUPPORTED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".avif",
  ".svg",
  ".bmp",
  ".tiff",
  ".tif",
]);

const DRY_RUN = process.argv.includes("--dry-run");
const OVERWRITE = process.argv.includes("--overwrite");

// ── Cloudinary setup ────────────────────────────────────────────────────────

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error(
    "❌  Missing Cloudinary credentials. Ensure .env contains:\n" +
      "   CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET",
  );
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Recursively collect all image file paths under `dir`. */
async function collectImages(dir) {
  let files = [];
  let entries;

  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error(
        `❌  Images directory not found: ${dir}\n` +
          `   Create it and add images to upload.`,
      );
      process.exit(1);
    }
    throw err;
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await collectImages(fullPath));
    } else if (SUPPORTED_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

/** Derive the Cloudinary public ID from a file path relative to IMAGES_DIR. */
function toPublicId(filePath) {
  const rel = relative(IMAGES_DIR, filePath);
  // Remove extension; normalise path separators to forward slashes
  const withoutExt = rel.replace(/\.[^.]+$/, "");
  return withoutExt.split("\\").join("/");
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const files = await collectImages(IMAGES_DIR);

  if (files.length === 0) {
    console.log("ℹ️  No images found in", IMAGES_DIR);
    return;
  }

  console.log(`Found ${files.length} image(s) in ${IMAGES_DIR}\n`);

  let uploaded = 0;
  let failed = 0;

  for (const filePath of files) {
    const publicId = toPublicId(filePath);

    if (DRY_RUN) {
      console.log(`  [dry-run] ${filePath} → ${publicId}`);
      uploaded++;
      continue;
    }

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        overwrite: OVERWRITE,
        unique_filename: false,
        resource_type: "image",
      });

      console.log(`  ✅ Uploaded: ${publicId} (${result.bytes} bytes, v${result.version})`);
      uploaded++;
    } catch (err) {
      console.error(`  ❌ Failed: ${publicId} — ${err.message}`);
      failed++;
    }
  }

  console.log(
    `\nDone! ${uploaded} uploaded, ${failed} failed.`,
  );
}

main();
