import { describe, it, expect } from "vitest";
import { normalizeImage } from "./normalize";

describe("normalizeImage", () => {
  it("文字列パスはそのまま返す", () => {
    expect(normalizeImage("/images/restaurant/x.webp")).toBe(
      "/images/restaurant/x.webp",
    );
  });

  it("microCMS画像オブジェクトからurlを取り出す", () => {
    expect(
      normalizeImage({
        url: "https://images.microcms-assets.io/x.png",
        width: 1,
        height: 1,
      }),
    ).toBe("https://images.microcms-assets.io/x.png");
  });

  it("null/undefinedはフォールバックを返す", () => {
    expect(normalizeImage(null, "/fallback.webp")).toBe("/fallback.webp");
    expect(normalizeImage(undefined)).toBe("");
  });
});
