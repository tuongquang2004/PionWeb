'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { ArrowDownTrayIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

type MenuItem = { label: string };

function Dropdown({ label, items }: { label: string; items: MenuItem[] }) {
    const [open, setOpen] = useState(false);
  
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className="flex items-center gap-1 px-3 py-2 text-sm/6 font-medium hover:text-[--color-ink]"
        >
          {label}
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
  
        {open && (
          <div className="absolute left-0 top-full mt-0 w-64 overflow-hidden divide-y divide-gray-200 bg-white shadow-lg" role="menu">
            {items.map((it) => (
              <div
                key={it.label}
                className="block px-4 py-3 text-sm/6 hover:bg-gray-50"
                role="menuitem"
              >
                {it.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

export default function Header() {
  const guides: MenuItem[] = [
    { label: 'TÀI LIỆU HƯỚNG DẪN' },
    { label: 'VIDEO HƯỚNG DẪN' },
    { label: 'TÀI LIỆU API' },
  ];
  const resources: MenuItem[] = [
    { label: 'BÀI VIẾT' },
    { label: 'CHỢ SCRIPT' },
    { label: 'ĐỐI TÁC' },
  ];
  const community: MenuItem[] = [
    { label: 'FACEBOOK' },
    { label: 'TELEGRAM' },
    { label: 'YOUTUBE' },
    { label: 'TIKTOK' },
    { label: 'X (TWITTER)' },
    { label: 'THREADS' },
    { label: 'INSTAGRAM' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
  <div className="mx-auto flex items-center justify-between px-4 py-3 max-w-6xl">
    {/* Logo trái */}
    <div className="flex-shrink-0">
      <Image
        src="/pionlogin-logo.webp"
        alt="PionLogin Logo"
        width={150}
        height={32}
        priority
      />
    </div>

    {/* Nav giữa */}
    <nav className="flex-1 flex justify-center">
      <div className="flex items-center gap-2">
        <a href="/" className="px-3 py-2">Trang chủ</a>
        <a href="/#pricing" className="px-3 py-2">Bảng giá</a>
        <Dropdown label="Hướng dẫn" items={guides} />
        <Dropdown label="Tài nguyên" items={resources} />
        <Dropdown label="Cộng đồng" items={community} />
        <a href="/contact" className="px-3 py-2">Liên hệ</a>
      </div>
    </nav>

    {/* Nút phải */}
    <div className="flex-shrink-0">
      <a className="rounded-md bg-gray-400 px-6 py-2 text-sm font-medium text-white hover:bg-gray-200 flex items-center gap-2">
        Tải xuống
        <ArrowDownTrayIcon className="h-5 w-5" />
      </a>
    </div>
  </div>
</header>
  );
}
