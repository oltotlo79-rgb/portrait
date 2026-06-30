import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getCourses, getNews, getInfo } from "./index";
import { seedCourses, seedNews, seedInfo } from "./seed";

const ORIG_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const ORIG_KEY = process.env.MICROCMS_API_KEY;

describe("データ取得フォールバック（microCMS環境変数なし）", () => {
  beforeEach(() => {
    delete process.env.MICROCMS_SERVICE_DOMAIN;
    delete process.env.MICROCMS_API_KEY;
  });

  afterEach(() => {
    if (ORIG_DOMAIN === undefined) delete process.env.MICROCMS_SERVICE_DOMAIN;
    else process.env.MICROCMS_SERVICE_DOMAIN = ORIG_DOMAIN;
    if (ORIG_KEY === undefined) delete process.env.MICROCMS_API_KEY;
    else process.env.MICROCMS_API_KEY = ORIG_KEY;
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
