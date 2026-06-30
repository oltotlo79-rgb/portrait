import { describe, it, expect } from "vitest";
import { toLocalImage } from "./images";

const MAP = {
  "https://images.microcms-assets.io/assets/x/y/dish.webp":
    "/images/restaurant/cms/y-dish.webp",
};

describe("toLocalImage", () => {
  it("対応表にあればローカルパスを返す", () => {
    expect(
      toLocalImage(
        "https://images.microcms-assets.io/assets/x/y/dish.webp",
        MAP,
        "/fallback.webp",
      ),
    ).toBe("/images/restaurant/cms/y-dish.webp");
  });

  it("対応表に無いmicroCMS直URLは絶対に返さずfallback", () => {
    expect(
      toLocalImage(
        "https://images.microcms-assets.io/assets/x/z/other.webp",
        MAP,
        "/fallback.webp",
      ),
    ).toBe("/fallback.webp");
  });

  it("シードのローカルパスはそのまま", () => {
    expect(
      toLocalImage("/images/restaurant/03-dish-hassun.webp", MAP, "/fallback.webp"),
    ).toBe("/images/restaurant/03-dish-hassun.webp");
  });

  it("空文字はfallback", () => {
    expect(toLocalImage("", MAP, "/fallback.webp")).toBe("/fallback.webp");
  });
});
