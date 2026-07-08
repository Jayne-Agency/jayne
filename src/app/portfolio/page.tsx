"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// To add a piece: drop the image in /public/portfolio and add an entry here.
// caseStudy is optional — only set it when a case study page exists for the client.
const portfolioItems = [
  {
    id: "pepsico-calling-all-advocates",
    client: "PepsiCo®",
    title: "Calling All Advocates",
    blurb:
      "Campaign creative for PepsiCo's Supplier Diversity Platform — putting the mission in the brand language employees already knew.",
    image: "/portfolio/pepsico-calling-all-advocates.png",
    alt: "PepsiCo Supplier Diversity Platform campaign creative — Calling All Advocates, featuring Quaker Oats",
    width: 1956,
    height: 1200,
    caseStudy: "/case-studies/pepsico",
  },
  {
    id: "pepsico-supplier-diversity-program",
    client: "PepsiCo®",
    title: "The Supplier Diversity Program",
    blurb:
      "A one-page program story: $800MM in diverse spend, 335 suppliers, 23 categories — the numbers that rallied leadership around the $1B goal.",
    image: "/portfolio/pepsico-supplier-diversity-program.png",
    alt: "PepsiCo Supplier Diversity Program infographic — 800MM forecasted spend, 335 current diverse suppliers, 23 categories of spend",
    width: 1954,
    height: 1198,
    caseStudy: "/case-studies/pepsico",
  },
];

export default function Portfolio() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in">
            The work itself.
          </h1>
          <p className="text-xl text-[#8a8178] mt-6 max-w-2xl font-[family-name:var(--font-open-sans)] opacity-0 animate-fade-in animation-delay-100">
            Strategy is only as good as what it looks like in the wild. A few
            favorites from the portfolio.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal-stagger space-y-20 lg:space-y-28">
            {portfolioItems.map((item) => (
              <article key={item.id}>
                <div className="rounded-lg overflow-hidden border border-[#e5e0d8] bg-white">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <div className="mt-6 flex flex-col md:flex-row md:items-start gap-3 md:gap-8">
                  <div className="flex-1">
                    <p className="text-base md:text-lg text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-2">
                      {item.client}
                    </p>
                    <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-3">
                      {item.title}
                    </h2>
                    <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">
                      {item.blurb}
                    </p>
                    {item.caseStudy && (
                      <Link
                        href={item.caseStudy}
                        className="group inline-flex items-center gap-2 mt-4 text-[#1a1a1a] hover:text-[#f57214] transition-colors font-[family-name:var(--font-open-sans)] font-semibold"
                      >
                        Read the case study
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    )}
                  </div>
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
