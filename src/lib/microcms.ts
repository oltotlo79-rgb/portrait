import { createClient } from "microcms-js-sdk";

/** 環境変数が両方そろっていれば true */
export function hasMicroCMS(): boolean {
  return Boolean(
    process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY,
  );
}

/** microCMS クライアント。hasMicroCMS() が true のときだけ呼ぶこと。 */
export function getClient() {
  return createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
    apiKey: process.env.MICROCMS_API_KEY as string,
  });
}
