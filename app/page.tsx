import { Suspense } from "react";
import dynamic from "next/dynamic";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import CTA from "@/components/CTA";
import LazyClientSections from "@/components/LazyClientSections";

// SSR fetch
async function getPricingSummary() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  const res = await fetch(`${base}/api/pricing`, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  return res.json();
}

export default async function Page() {
  const summary = await getPricingSummary(); // SSR
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <LazyClientSections />
      <CTA />
    </main>
  );
}
