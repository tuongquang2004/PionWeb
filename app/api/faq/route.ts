import { NextResponse } from "next/server";
export const revalidate = 3600;
export async function GET() {
  return NextResponse.json({
    items: [
      { q: "PionLogin có thể giúp tôi quản lý bao nhiêu tài khoản?", a: "Tuỳ gói dịch vụ, từ vài chục đến hàng ngàn profile. Gói PL50 cho phép quản lý 50 profile cùng lúc." },
      { q: "Trình duyệt của PionLogin có an toàn không?", a: "Có! PionLogin giả lập dấu vân tay trình duyệt (User-Agent, Canvas, WebGL,...) để mỗi profile có nhân dạng riêng biệt, tránh bị liên kết." },
    ],
  });
}
