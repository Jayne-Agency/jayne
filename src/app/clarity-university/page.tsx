"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ClarityUniversity() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl leading-[1.1] text-[#1a1a1a] mb-6 opacity-0 animate-fade-in">
            MBA-level brand strategy education + hands on guidance for solopreneurs, small business, and early stage startups.
          </h1>
        </div>
      </section>

      {/* 10 Assets Graphic */}
      <section className="py-8 lg:py-12 px-2 md:px-6">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/10assets.png"
            alt="The 10 brand assets"
            width={1024}
            height={700}
            className="w-full h-auto reveal"
          />
        </div>
      </section>
    </main>
  );
}
