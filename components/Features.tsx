export default function Features() {
    const items = [
      { t: "99%", d: "Giả lập hầu hết toàn bộ các thông số trình duyệt, bảo mật tài khoản tuyệt đối" },
      { t: "100+", d: "Kho kịch bản phong phú cho nhiều nền tảng phổ biến, dễ dàng triển khai tự động hóa theo nhu cầu." },
      { t: "24/7", d: "Hỗ trợ khách hàng nhiệt tình, chuyên nghiệp, nhanh chóng giải đáp các thắc mắc." },
    ];
    return (
      <section className=" px-4 py-16 bg-gray-100">
        <div className="flex justify-center my-3">
            <div className="inline-flex text-xl bg-blue-50 items-center gap-2 rounded px-3 py-1 font-semibold justify-center">
               Dễ dàng hơn - An toàn hơn 
            </div>
        </div>
        <h2 className="text-6xl md:text-6.5xl font-semibold mb-8 text-center">Tại sao bạn nên chọn PionLogin?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(x => (
            <div key={x.t} className="p-6 rounded-xl border text-center">
              <h3 className="font-semibold mb-2">{x.t}</h3>
              <p className="text-slate-600">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  