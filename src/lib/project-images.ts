import "server-only";

import { existsSync } from "node:fs";
import path from "node:path";

const MAX_GALLERY_IMAGES = 5;

export function getProjectGalleryImages(slug: string): string[] {
  // Only allow simple slug names to prevent invalid filesystem paths.
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return [];
  }

  const projectDirectory = path.join(process.cwd(), "public", "images", slug);

  const images: string[] = [];

  for (let number = 1; number <= MAX_GALLERY_IMAGES; number += 1) {
    const filename = `${number}.webp`;
    const filePath = path.join(projectDirectory, filename);

    if (existsSync(filePath)) {
      images.push(`/images/${slug}/${filename}`);
    }
  }

  return images;
}
