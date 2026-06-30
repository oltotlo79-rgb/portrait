import { describe, it, expect, beforeEach } from "vitest";
import { getCourses, getNews, getInfo } from "./index";
import { seedCourses, seedNews, seedInfo } from "./seed";

describe("データ取得フォールバック（microCMS環境変数なし）", () => {
  beforeEach(() => {
    delete process.env.MICROCMS_SERVICE_DOMAIN;
    delete process.env.MICROCMS_API_KEY;
  });

  it("envが無ければ courses はシードを返す", async () => {
    expect(await getCourses()).toEqual(seedCourses);
  });

  it("envが無ければ news はシードを返す", async () => {
    expect(await getNews()).toEqual(seedNews);
  });

  it("envが無ければ info はシードを返す", async () => {
    expect(await getInfo()).toEqual(seedInfo);
  });
});
