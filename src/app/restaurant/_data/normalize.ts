import type { MicroCMSImage } from "./types";

export function normalizeImage(
  input: string | MicroCMSImage | null | undefined,
  fallback = "",
): string {
  if (!input) return fallback;
  if (typeof input === "string") return input;
  return input.url ?? fallback;
}
