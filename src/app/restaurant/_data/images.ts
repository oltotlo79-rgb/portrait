import fs from "node:fs";
import path from "node:path";

const MAP_PATH = path.join(
  process.cwd(),
  "src/app/restaurant/_data/cms-image-map.json",
);

const MICROCMS_HOST = "https://images.microcms-assets.io/";

/** prebuild スクリプトが出力した url→ローカルパス対応表を読む。無ければ空。 */
export function loadImageMap(): Record<string, string> {
  try {
    return JSON.parse(fs.readFileSync(MAP_PATH, "utf-8")) as Record<
      string,
      string
    >;
  } catch {
    return {};
  }
}

/**
 * 画像URLを「訪問者に配信して良いパス」へ変換する。
 * - 対応表にあれば Cloudflare 配信のローカルパス
 * - microCMS CDN の直URLは絶対に返さない（転送量対策）→ fallback
 * - それ以外（シードのローカルパス等）はそのまま
 */
export function toLocalImage(
  url: string,
  map: Record<string, string>,
  fallback: string,
): string {
  if (!url) return fallback;
  if (map[url]) return map[url];
  if (url.startsWith(MICROCMS_HOST)) return fallback;
  return url;
}
