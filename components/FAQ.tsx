
type QA = { q: string; a: string };

const ITEMS: QA[] = [
  {
    q: "PionLogin có thể giúp tôi quản lý bao nhiêu tài khoản?",
    a: "Tuỳ gói dịch vụ, từ vài chục đến hàng ngàn profile. Gói PL50 cho phép quản lý 50 profile cùng lúc.",
  },
  {
    q: "Trình duyệt của PionLogin có an toàn không?",
    a: "Có! PionLogin giả lập dấu vân tay trình duyệt (User-Agent, Canvas, WebGL,...) để mỗi profile có nhân dạng riêng biệt, tránh bị liên kết.",
  },
];


export default function FAQ() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Câu hỏi thường gặp</h2>
      <div className="mt-8 mx-auto max-w-4xl space-y-4">
        {ITEMS.map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <summary className="cursor-pointer list-none font-medium leading-6">
              <div className="flex items-center justify-between">
                <span>{q}</span>
                <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-sm">
                  <span className="block group-open:hidden">+</span>
                  <span className="hidden group-open:block">−</span>
                </span>
              </div>
            </summary>
            <p className="mt-3 text-slate-600">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
