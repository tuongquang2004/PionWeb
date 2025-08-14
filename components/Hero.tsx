'use client';

import { useEffect, useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Marquee from 'react-fast-marquee';

type Word = { text: string; className: string };

function TypewriterRotate({
  words,
  typeSpeed = 40,      // ms/ ký tự khi gõ
  deleteSpeed = 40,    // ms/ ký tự khi xoá
  holdTime = 1600      // ms dừng sau khi gõ xong
}: { words: Word[]; typeSpeed?: number; deleteSpeed?: number; holdTime?: number }) {
  const [w, setW] = useState(0);       // index của từ hiện tại
  const [i, setI] = useState(0);       // số ký tự đang hiển thị
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[w].text;
    let t: ReturnType<typeof setTimeout>;

    if (!del && i <= current.length) {
      t = setTimeout(() => setI(i + 1), typeSpeed);
    } else if (!del && i > current.length) {
      t = setTimeout(() => setDel(true), holdTime);
    } else if (del && i >= 0) {
      t = setTimeout(() => setI(i - 1), deleteSpeed);
    } else if (del && i < 0) {
      setDel(false);
      setW((w + 1) % words.length);
      setI(0);
    }

    return () => clearTimeout(t);
  }, [i, del, w, words, typeSpeed, deleteSpeed, holdTime]);

  const shown = words[w].text.slice(0, Math.max(0, i));
  const cls = words[w].className;

  return (
    <span className="whitespace-nowrap">
      <span className={cls}>{shown}</span>
      {/* con trỏ nháy */}
      <span
        aria-hidden
        className="inline-block w-[3px] h-[0.9em] bg-current ml-1 align-[-0.1em] animate-pulse"
      />
    </span>
  );
}

export function BannerMarquee() {
  return (
    <section className="w-full bg-black text-white py-2">
      <Marquee gradient={false} speed={50}>
        <div className="flex justify-between gap-30 items-center w-full text-base md:text-lg font-semibold py-2">
          <span> QUẢN LÝ TÀI KHOẢN</span>
          <span> ĐỒNG BỘ THAO TÁC</span>
          <span> TỰ ĐỘNG QUY TRÌNH</span>
          <span> TRÌNH DUYỆT TỐT NHẤT</span>
          <span> GIẢI PHÁP TOÀN DIỆN</span>
        </div>
      </Marquee>
    </section>
  );
}

export default function Hero() {
  const words: Word[] = [
    {
      text: 'E-commerce',
      className:
        'text-slate-700 underline decoration-slate-700 decoration-8 underline-offset-[10px]'
    },
    {
      text: 'Social media',
      className:
        'text-slate-700 underline decoration-slate-700 decoration-8 underline-offset-[10px]'
    },
    {
      text: 'Crypto',
      className:
        'text-slate-700 underline decoration-slate-700 decoration-8 underline-offset-[10px]'
    }
  ];

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-16 py-1 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight text-center">
            Trình duyệt ẩn danh <br />
            bảo vệ tài khoản <TypewriterRotate words={words} />
          </h1>

          <p className="mt-5 text-lg text-center text-slate-600">
            Nền tảng quản lý tài khoản an toàn và tự động hóa thao tác dễ dàng cùng kho ứng dụng đa dạng nhất.
          </p>

          <div className="text-3xl mt-10 mb-20 flex gap-3 justify-center items-center">
            <div className="flex text-center items-center gap-2">
              <button
                className="rounded-md bg-gray-400 px-6 py-2 font-medium text-white hover:bg-gray-100 transition flex justify-center items-center gap-3"
              >
                Tải xuống
                <ArrowDownTrayIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative aspect-video rounded-xl shadow overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/N2vi3OlaJ1I?autoplay=1&mute=1&controls=0&loop=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      <div className="-mt-1">
        <BannerMarquee />
      </div>
    </>
  );
}
