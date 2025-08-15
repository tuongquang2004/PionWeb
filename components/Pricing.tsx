
import { Check, ChevronRight } from "lucide-react";

type Feature = { title: string; sub?: string };
type Tier = {
  name: string;
  priceMain: string;
  pricePeriod: string;
  tagline?: string;
  features: Feature[];
  cta: string;
};

const TIERS: Tier[] = [
  {
    name: "FREE",
    priceMain: "0",
    pricePeriod: "/Năm",
    tagline: "Trải nghiệm sự khác biệt",
    features: [
      { title: "100 hồ sơ", sub: "100 hồ sơ" },
      { title: "Lưu trữ dữ liệu đám mây", sub: "Lưu trữ dữ liệu đám mây" },
      { title: "Đồng bộ hóa thao tác", sub: "Đồng bộ hóa thao tác" },
      { title: "Tự động hóa kéo thả", sub: "Tự động hóa kéo thả" },
    ],
    cta: "Nâng cấp",
  },
  {
    name: "PLUnlimit",
    priceMain: "999,000",
    pricePeriod: "/Tháng",
    tagline: "Dành cho quý khách hàng doanh nghiệp",
    features: [
      { title: "Không giới hạn hồ sơ", sub: "Không giới hạn hồ sơ" },
      { title: "Lưu trữ đám mây", sub: "Lưu trữ đám mây" },
      { title: "Đồng bộ hóa thao tác", sub: "Đồng bộ hóa thao tác" },
      { title: "Tự động hóa kéo thả", sub: "Tự động hóa kéo thả" },
    ],
    cta: "Nâng cấp",
  },
];

export const dynamic = "error";

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-5xl md:text-6xl font-semibold text-center">Bảng giá</h2>
      <p className="mt-4 text-lg text-slate-600 text-center">Trải nghiệm 100 profile miễn phí</p>

      <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {TIERS.map((t) => (
          <article
            key={t.name}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow p-8"
          >
            <h3 className="text-base font-semibold tracking-wide">{t.name}</h3>

            <div className="mt-3 flex items-end gap-2">
              <div className="text-6xl font-bold leading-none">{t.priceMain}</div>
              <div className="pb-2 text-slate-500">{t.pricePeriod}</div>
            </div>

            {t.tagline ? (
              <p className="mt-4 font-semibold">{t.tagline}</p>
            ) : null}

            <ul className="mt-6 space-y-5">
              {t.features.map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1 ring-slate-300">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <div>
                    <div className="font-medium">{f.title}</div>
                    {f.sub ? (
                      <div className="text-sm text-slate-500">{f.sub}</div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            <button
              className="mt-8 w-full rounded-xl border border-slate-300 py-3.5 text-sm font-medium hover:bg-slate-50 active:translate-y-px transition"
              type="button"
            >
              <span className="inline-flex items-center gap-1.5">
                {t.cta} <ChevronRight className="h-4 w-4" />
              </span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
