import { SectionLabel } from "@/components/shared/SectionLabel";
import type { NewsItem } from "../_data/types";

function formatDate(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export function RestaurantNews({ news }: { news: NewsItem[] }) {
  if (news.length === 0) return null;

  return (
    <section
      id="news"
      className="bg-[#0F0F0F] px-6 py-24 text-[#EFE9DD] sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        <SectionLabel number="六" className="text-[#B59154]">
          お知らせ
        </SectionLabel>
        <h2 className="mt-4 font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.1em] sm:text-4xl">
          黒文字より
        </h2>

        <ul className="mt-12 divide-y divide-[#EFE9DD]/12 border-t border-[#EFE9DD]/12">
          {news.map((item) => (
            <li key={item.id} className="py-8">
              <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#B59154]">
                <time>{formatDate(item.publishedAt)}</time>
                <span className="border border-[#B59154]/40 px-2 py-1">
                  {item.category}
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-shippori-mincho)] text-xl tracking-[0.08em]">
                {item.title}
              </h3>
              <div
                className="mt-3 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#EFE9DD]/75 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
