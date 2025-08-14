'use client';

import { useEffect, useState } from "react";
type QA = { q: string; a: string };
export default function FAQ() {
  const [items, setItems] = useState<QA[]>([]);
  useEffect(() => { fetch("/api/faq", { cache: "no-store" }).then(r => r.json()).then(d => setItems(d.items)); }, []);
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Câu hỏi thường gặp</h2>
      <div className="space-y-4">
        {items.map(({ q, a }) => (
          <details key={q} className="p-4 border rounded-xl">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-slate-600">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
