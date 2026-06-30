import { RestaurantNav } from "../_components/Nav";
import { RestaurantFooter } from "../_components/Footer";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { getInfo } from "../_data";
import { ReservationForm } from "./ReservationForm";

export default async function ReservationPage() {
  const info = await getInfo();

  return (
    <>
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-[#0F0F0F] text-[#EFE9DD]">
        <RestaurantNav />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(181, 145, 84, 0.2) 0%, rgba(15,15,15,1) 70%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <SectionLabel number="五" className="text-[#B59154]">
              Reservation
            </SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-[clamp(2.5rem,6vw,5rem)] tracking-[0.1em]">
              ご予約
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#0F0F0F] px-6 py-24 text-[#EFE9DD] sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.4fr]">
          <aside className="font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#EFE9DD]/75">
            <p>
              ご予約は二か月前より承ります。お時間は18:00／20:30の二部制、約2時間30分です。
            </p>
            <dl className="mt-12 space-y-6 text-xs">
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#B59154]">電話</dt>
                <dd className="mt-2 text-[#EFE9DD]">03-XXXX-XXXX（16:00以降）</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#B59154]">メール</dt>
                <dd className="mt-2 text-[#EFE9DD]">kuromoji@example.jp</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#B59154]">アレルギー</dt>
                <dd className="mt-2 text-[#EFE9DD]">
                  当日変更を避けるため、事前にお知らせください。
                </dd>
              </div>
            </dl>
          </aside>

          <ReservationForm />
        </div>
      </main>

      <RestaurantFooter info={info} />
    </>
  );
}
