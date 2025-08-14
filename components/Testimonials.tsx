'use client';
export default function Testimonials() {
  const data = [
    { n: "Nguyễn Văn An", q: "PionLogin đúng đỉnh!" },
    { n: "Phạm Thu Hà", q: "Năng suất x2 x3 nhờ PionLogin." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Lắng nghe khách hàng chia sẻ về PionLogin</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map(t => (
          <div key={t.n} className="p-6 border rounded-xl">
            <p className="italic">“{t.q}”</p>
            <p className="mt-3 font-semibold">— {t.n}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
