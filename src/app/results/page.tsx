"use client";

import Link from "next/link";
import { useEffect } from "react";

const caseStudies = [
  {
    id: "pepsico",
    client: "PepsiCo",
    hook: "What if your supply chain could change the world?",
    result: "$800MM",
    resultLabel: "diverse supplier spend",
    teaser: "From compliance checkbox to competitive advantage.",
  },
  {
    id: "hornitos",
    client: "Hornitos",
    hook: "How do you make bartenders fall in love with a tequila?",
    result: "83%",
    resultLabel: "open rate",
    teaser: "From overlooked import to must-have mixology essential.",
  },
  {
    id: "evertec",
    client: "Pregis EverTec",
    hook: "What happens when you discover your product's real value?",
    result: "80%",
    resultLabel: "corrugated boxes displaced",
    teaser: "From eco-friendly promise to durability powerhouse.",
  },
  {
    id: "mercer-valve",
    client: "Mercer Valve Company",
    hook: "How do you protect a 36-year legacy from competitors stealing your story?",
    result: "100%",
    resultLabel: "employee engagement",
    teaser: "From borrowed equity to reclaimed brand authority.",
  },
  {
    id: "wbenc",
    client: "WBENC",
    hook: "What if the real pitch problem isn't how you present—but what you say?",
    result: "800+",
    resultLabel: "WBEs coached",
    teaser: "From generic pitch training to brand clarity breakthrough.",
  },
  {
    id: "nmsdc-eye",
    client: "NMSDC EYE",
    hook: "How do you fast-track entrepreneurs who don't know their own value yet?",
    result: "#1",
    resultLabel: "conference highlight",
    teaser: "From stragglers to standing room only.",
  },
  {
    id: "eaton",
    client: "Eaton Corporation",
    hook: "How do you align 94,000 employees across the globe around one mission?",
    result: "4",
    resultLabel: "awards across 3 shows",
    teaser: "From departmental silos to unified brand alignment.",
  },
  {
    id: "red-cross",
    client: "American Red Cross",
    hook: "Why did no one remember being offered disaster preparedness?",
    result: "98%",
    resultLabel: "brand recognition leveraged",
    teaser: "From invisible program to strategic foundation.",
  },
  {
    id: "sparks-group",
    client: "National Contract Sanitation Provider",
    hook: "How does a company with no marketing materials scale nationally?",
    result: "Multi-Year",
    resultLabel: "growth partnership",
    teaser: "From zero brand presence to scalable growth.",
  },
  {
    id: "not-just-dinner",
    client: "It's Not Just Dinner",
    hook: "How do you build a brand when all you have is urgent need?",
    result: "$20K",
    resultLabel: "donor level achieved",
    teaser: "From $150 donations to $20,000 annual giving.",
  },
  {
    id: "tms",
    client: "TMS",
    hook: "How do you position an impossible innovation for the biggest buyer in the world?",
    result: "500%",
    resultLabel: "sales increase",
    teaser: "From 1 million to 1 billion mailers in 3 years.",
  },
  {
    id: "nationwide",
    client: "Nationwide",
    hook: "How do you turn required compliance reporting into competitive advantage?",
    result: "Multi-Year",
    resultLabel: "strategic partnership",
    teaser: "From data silos to unified brand clarity.",
  },
];

export default function Results() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in">
            Paths to growth and stability we&apos;ve built for our clients.
          </h1>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/results/${study.id}`}
                className="group block"
              >
                <div className="text-3xl md:text-4xl text-[#f57214] leading-none mb-1">
                  {study.result}
                </div>
                <p className="text-base text-[#8a8178] mb-5">
                  {study.resultLabel}
                </p>
                <p className="text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-2">
                  {study.client}
                </p>
                <h2 className="text-xl md:text-2xl text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#f57214] transition-colors">
                  {study.hook}
                </h2>
                <span className="text-[#8a8178] inline-flex items-center gap-2 text-base">
                  Read the story <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Your story next?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about what&apos;s possible.
          </p>
          <div className="reveal">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
