"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { PortfolioClient } from "../portfolio-data";

export function ClientGallery({ client }: { client: PortfolioClient }) {
  useScrollReveal();

  const context = [
    { label: "Problem", text: client.problem },
    { label: "Approach", text: client.approach },
    { label: "Nimble Process", text: client.process },
    { label: "Innovative Solutions", text: client.solutions },
  ];

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#8a8178] hover:text-[#f57214] transition-colors mb-8 font-[family-name:var(--font-open-sans)]"
          >
            <span className="transition-transform duration-300 hover:-translate-x-1">←</span>
            All Portfolio
          </Link>
          <p className="text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6 opacity-0 animate-fade-in">
            {client.client}
          </p>
          <h1 className="text-4xl md:text-6xl leading-[1.1] text-[#1a1a1a] opacity-0 animate-fade-in animation-delay-100">
            {client.headline}
          </h1>
          {client.caseStudy && (
            <div className="mt-8 opacity-0 animate-fade-in animation-delay-200">
              <Link
                href={client.caseStudy}
                className="group inline-flex items-center gap-2 text-[#1a1a1a] hover:text-[#f57214] transition-colors font-[family-name:var(--font-open-sans)] font-semibold"
              >
                Read the case study
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Context */}
      <section className="pb-16 lg:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {context.map((item) => (
              <div key={item.label} className="border-t border-[#e5e0d8] pt-6">
                <p className="text-sm md:text-base text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                  {item.label}
                </p>
                <p className="text-lg text-[#1a1a1a] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Work */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal-stagger space-y-10 lg:space-y-14">
            {client.pieces.map((piece) => (
              <div
                key={piece.image}
                className="rounded-lg overflow-hidden border border-[#e5e0d8] bg-white"
              >
                <Image
                  src={piece.image}
                  alt={piece.alt}
                  width={piece.width}
                  height={piece.height}
                  className="w-full h-auto"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Want work like this?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about what clarity looks like for your brand.
          </p>
          <div className="reveal">
            <a
              href="https://form.typeform.com/to/Bsx0IpzP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
