import fs from "node:fs";
import path from "node:path";

/**
 * Fleet/gallery photos are dropped into /public later by the client. Until a
 * given file exists, pages fall back to a styled placeholder instead of
 * breaking the build on a missing local image.
 */
export function imageExists(publicPath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}
