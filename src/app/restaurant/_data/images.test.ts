import { describe, it, expect } from "vitest";
import { toLocalImage, localizeHtml } from "./images";

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

describe("localizeHtml", () => {
  const MAP = {
    "https://images.microcms-assets.io/assets/x/y/in-body.webp":
      "/images/restaurant/cms/y-in-body.webp",
  };

  it("本文中の対応表にあるCDN画像をローカルパスに置換", () => {
    const html =
      '<p>あ</p><img src="https://images.microcms-assets.io/assets/x/y/in-body.webp">';
    expect(localizeHtml(html, MAP, "/fallback.webp")).toBe(
      '<p>あ</p><img src="/images/restaurant/cms/y-in-body.webp">',
    );
  });

  it("本文中の対応表に無いCDN画像はfallbackに置換（CDN直URLを残さない）", () => {
    const html =
      '<img src="https://images.microcms-assets.io/assets/x/z/missing.webp">';
    expect(localizeHtml(html, MAP, "/fallback.webp")).toBe(
      '<img src="/fallback.webp">',
    );
  });

  it("CDN画像を含まない本文はそのまま", () => {
    const html = "<p>ただのテキスト</p>";
    expect(localizeHtml(html, MAP, "/fallback.webp")).toBe(html);
  });
});
