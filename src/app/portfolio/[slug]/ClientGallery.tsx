"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { PortfolioClient } from "../portfolio-data";

export function ClientGallery({ client }: { client: PortfolioClient }) {
  useScrollReveal();

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
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] mb-6 opacity-0 animate-fade-in">
            {client.client}
          </h1>
          <p className="text-xl text-[#8a8178] max-w-2xl font-[family-name:var(--font-open-sans)] opacity-0 animate-fade-in animation-delay-100">
            {client.description}
          </p>
          {client.caseStudy && (
            <div className="mt-6 opacity-0 animate-fade-in animation-delay-200">
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

      {/* Pieces */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal-stagger space-y-20 lg:space-y-28">
            {client.pieces.map((piece) => (
              <article key={piece.image}>
                <div className="rounded-lg overflow-hidden border border-[#e5e0d8] bg-white">
                  <Image
                    src={piece.image}
                    alt={piece.alt}
                    width={piece.width}
                    height={piece.height}
                    className="w-full h-auto"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <div className="mt-6">
                  <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-3">
                    {piece.title}
                  </h2>
                  <p className="text-lg text-[#8a8178] max-w-2xl font-[family-name:var(--font-open-sans)]">
                    {piece.blurb}
                  </p>
                </div>
              </article>
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
