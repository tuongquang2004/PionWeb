'use client';
import { useEffect, useState } from "react";
type Tier = { name: string; price: string; features: string[]; cta: string; };

export default function Pricing() {
  const [tiers, setTiers] = useState<Tier[]>([]);
  useEffect(() => { fetch("/api/pricing", { cache: "no-store" }).then(r => r.json()).then(d => setTiers(d.tiers)); }, []);
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-5xl md:text-5xl font-semibold mb-8 text-center">Bảng giá</h2>
      <p className="mt-7 text-lg text-slate-600 text-center mb-5">Trải nghiệm 100 profile miễn phí</p>
      <div className="grid md:grid-cols-2 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="p-6 border rounded-xl">
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold">{t.name}</h3>
              <div className="text-3xl">{t.price === "0" ? "Miễn phí" : t.price}</div>
            </div>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              {t.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <button className="mt-6 w-full py-3 rounded bg-[--color-brand] text-black">{t.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
