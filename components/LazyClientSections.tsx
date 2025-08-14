'use client';

import dynamic from 'next/dynamic';

const Pricing = dynamic(() => import('@/components/Pricing'), {
  ssr: false,
  loading: () => <div className="max-w-6xl mx-auto px-4 py-16">Đang tải bảng giá…</div>
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false,
  loading: () => <div className="max-w-6xl mx-auto px-4 py-16">Đang tải đánh giá…</div>
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  ssr: false,
  loading: () => <div className="max-w-6xl mx-auto px-4 py-16">Đang tải FAQ…</div>
});

export default function LazyClientSections() {
  return (
    <>
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
}
