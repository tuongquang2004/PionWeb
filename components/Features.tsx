
import Image from "next/image";

type Feature = { img: string; text: string; alt: string };

const FEATURES: Feature[] = [
  {
    img: "/analytics-1.webp",
    text:
      "Giả lập hầu hết toàn bộ các thông số trình duyệt, bảo mật tài khoản tuyệt đối",
    alt: "Bảo mật",
  },
  {
    img: "/analytics-2.webp",
    text:
      "Kho kịch bản phong phú cho nhiều nền tảng phổ biến, dễ dàng triển khai tự động hóa theo nhu cầu.",
    alt: "Kịch bản phong phú",
  },
  {
    img: "/analytics-3.webp",
    text:
      "Hỗ trợ khách hàng nhiệt tình, chuyên nghiệp, nhanh chóng giải đáp các thắc mắc.",
    alt: "Hỗ trợ 24/7",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold bg-violet-100 text-violet-700">
            <span>●</span> Dễ dàng hơn - An toàn hơn <span>●</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-5xl md:text-6xl font-semibold text-center">
          Tại sao bạn nên chọn PionLogin?
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-10 text-center max-w-5xl mx-auto">
          {FEATURES.map((f, i) => (
            <div key={i} className="px-2">
              <Image
                src={f.img}
                alt={f.alt}
                width={150}
                height={150}
                className="mx-auto"
                priority={i === 0}
              />
              <p className="mt-4 text-slate-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
