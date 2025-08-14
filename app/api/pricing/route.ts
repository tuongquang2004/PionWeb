import { NextResponse } from "next/server";
export const revalidate = 3600; // ISR 1h
export async function GET() {
  return NextResponse.json({
    tiers: [
      { name: "FREE", price: "0/Năm", features: ["100 hồ sơ", "Lưu trữ dữ liệu đám mây"], cta: "Nâng cấp >" },
      { name: "PLUnlimit", price: "999,000/Tháng", features: ["Không giới hạn hồ sơ", "Lưu trữ đám mây"], cta: "Nâng cấp >" },
    ],
  });
}
