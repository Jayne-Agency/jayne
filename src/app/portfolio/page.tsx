"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { portfolioClients } from "./portfolio-data";

export default function Portfolio() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in">
            Portfolio
          </h1>
        </div>
      </section>

      {/* Clients */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {portfolioClients.map((client) => {
              const cover = client.pieces[0];
              return (
                <Link
                  key={client.slug}
                  href={`/portfolio/${client.slug}`}
                  className="group block"
                >
                  <div className="rounded-lg overflow-hidden border border-[#e5e0d8] bg-white">
                    <Image
                      src={cover.image}
                      alt={cover.alt}
                      width={cover.width}
                      height={cover.height}
                      className="w-full h-auto aspect-[8/5] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 512px"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug group-hover:text-[#f57214] transition-colors">
                        {client.client}
                      </h2>
                      <p className="text-sm text-[#8a8178] mt-1 font-[family-name:var(--font-open-sans)]">
                        {client.pieces.length}{" "}
                        {client.pieces.length === 1 ? "piece" : "pieces"}
                      </p>
                    </div>
                    <span className="text-[#8a8178] group-hover:text-[#f57214] transition-colors shrink-0 mt-2 font-[family-name:var(--font-open-sans)]">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
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
