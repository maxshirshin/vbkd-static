#!/usr/bin/env node

/**
 * Upload static site files to GCore Object Storage.
 *
 * GCore Object Storage offers an S3-compatible API.
 * This script uploads the contents of `dist/client` to your GCore bucket.
 *
 * Requires a `.env` file at the project root with:
 *   GCORE_S3_ENDPOINT (e.g., https://s-ed1.cloud.gcore.lu)
 *   GCORE_S3_REGION (e.g., ed1)
 *   GCORE_S3_BUCKET
 *   GCORE_S3_ACCESS_KEY
 *   GCORE_S3_SECRET_KEY
 */

import "dotenv/config";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { readdir, readFile } from "node:fs/promises";
import { resolve, relative, join } from "node:path";
import mime from "mime-types";

// ── Config ──────────────────────────────────────────────────────────────────

const DIST_DIR = resolve("dist/client");
const IMAGES_DIR = resolve("images"); // We will also upload images separately

const { 
  GCORE_S3_ENDPOINT, 
  GCORE_S3_REGION, 
  GCORE_S3_BUCKET, 
  GCORE_S3_ACCESS_KEY, 
  GCORE_S3_SECRET_KEY 
} = process.env;

if (!GCORE_S3_ENDPOINT || !GCORE_S3_BUCKET || !GCORE_S3_ACCESS_KEY || !GCORE_S3_SECRET_KEY) {
  console.error(
    "❌  Missing GCore credentials. Ensure .env contains:\n" +
      "   GCORE_S3_ENDPOINT, GCORE_S3_REGION, GCORE_S3_BUCKET, GCORE_S3_ACCESS_KEY, GCORE_S3_SECRET_KEY"
  );
  process.exit(1);
}

// Instantiate S3 client pointing to GCore
const s3 = new S3Client({
  endpoint: GCORE_S3_ENDPOINT,
  region: GCORE_S3_REGION || "us-east-1", // Fallback region, often required by S3 clients even if ignored by S3-compatible storage
  credentials: {
    accessKeyId: GCORE_S3_ACCESS_KEY,
    secretAccessKey: GCORE_S3_SECRET_KEY,
  },
});

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Recursively collect all files under `dir`. */
async function collectFiles(dir) {
  let files = [];
  let entries;

  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`⚠️  Directory not found: ${dir}`);
      return [];
    }
    throw err;
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await collectFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

// ── Main ────────────────────────────────────────────────────────────────────

async function uploadDirectory(dir, prefix = "") {
  const files = await collectFiles(dir);

  if (files.length === 0) return;
  console.log(`Uploading ${files.length} files from ${dir} to prefix '/${prefix}'...\n`);

  let uploaded = 0;
  let failed = 0;

  for (const filePath of files) {
    const relPath = relative(dir, filePath).split("\\").join("/");
    const objectKey = prefix ? `${prefix}${relPath}` : relPath;
    
    // Determine content type (default to octet-stream)
    const contentType = mime.lookup(filePath) || "application/octet-stream";
    const body = await readFile(filePath);

    try {
      await s3.send(
        new PutObjectCommand({
          Bucket: GCORE_S3_BUCKET,
          Key: objectKey,
          Body: body,
          ContentType: contentType,
          // Cache control for static assets handles versioning effectively
          CacheControl: objectKey.includes("assets/") ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate",
        })
      );

      console.log(`  ✅ Uploaded: ${objectKey}`);
      uploaded++;
    } catch (err) {
      console.error(`  ❌ Failed: ${objectKey} — ${err.message}`);
      failed++;
    }
  }

  return { uploaded, failed };
}

async function main() {
  console.log("🚀 Starting deployment to GCore Object Storage...\n");
  
  // 1. Upload built static site
  const distResult = await uploadDirectory(DIST_DIR, "");
  
  // 2. Upload images (to an /images path)
  const imagesResult = await uploadDirectory(IMAGES_DIR, "images/");

  console.log(
    `\n🎉 Done! Total uploaded: ${(distResult?.uploaded || 0) + (imagesResult?.uploaded || 0)}, Failed: ${(distResult?.failed || 0) + (imagesResult?.failed || 0)}.`
  );
}

main();
