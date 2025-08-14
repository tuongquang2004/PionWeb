export default function Solutions() {
    const items = [
      {
        title: "Thương mại điện tử",
        desc: "Tự động quản lý nhiều tài khoản sàn, tương tác, up sản phẩm, đồng bộ đánh giá và dữ liệu đơn hàng trên nhiều nền tảng."
      },
      {
        title: "Affiliate",
        desc: "Tạo hàng loạt tài khoản cho chiến dịch tiếp thị liên kết, đo lường hiệu quả quảng bá theo từng ref."
      },
      {
        title: "Marketing số",
        desc: "Tự động hoá chiến dịch seeding, tăng tương tác trên mạng xã hội, thu thập insight khách hàng bằng AI."
      },
      {
        title: "Quản lý đa tài khoản",
        desc: "Quản lý và chia sẻ tài khoản dạng profile tách biệt, dễ kiểm soát mà không cần tiết lộ cookie hay mật khẩu."
      },
      {
        title: "Quản lý thành viên",
        desc: "Kiểm soát tài nguyên, phân quyền nhân sự cho các dự án cụ thể."
      },
      {
        title: "Traffic automation",
        desc: "Tự động tăng lượt truy cập, phân phối traffic theo mục tiêu, kết hợp AI để mô phỏng hành vi người thật."
      }
    ];
  
    return (
      <section id="solutions" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cột trái */}
          <div className="lg:pr-10">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold">
              ★ QUẢN LÝ TÀI KHOẢN AN TOÀN ★
            </div>
  
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Giải pháp của<br />PionLogin
            </h2>
  
            <p className="mt-4 text-lg text-slate-600">
              Tối ưu hiệu quả, đa dạng mục tiêu quản lý và vận hành.
            </p>
          </div>
  
          {/* Cột phải */}
          <div className="lg:col-span-2  lg:pl-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="p-8 border border-gray-200"
                >
                  <h3 className="text-xl font-semibold">{it.title}</h3>
                  <p className="mt-2 text-slate-600">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  