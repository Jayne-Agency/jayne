"use client";

import { useEffect } from "react";

export default function StrategySprint() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl leading-[1.1] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in">
            Drive dependable, repeatable, and scalable revenue in six weeks.
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed opacity-0 animate-fade-in animation-delay-100">
            Our <span className="text-[#f57214]">evidence-based</span> approach to brand building has been proven globally over 17 years with hundreds of businesses ranging from $20K to $2B in revenue.
          </p>
        </div>
      </section>

      {/* Evidence is Everything */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-4xl md:text-6xl text-[#1a1a1a] leading-[1.1] mb-12">
            Evidence is everything.
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
            Most companies think they know their brand. Then they watch their sales team pitch it five different ways, their marketing team chase every trend, and their leadership team argue about messaging in every meeting.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed">
            The problem isn&apos;t effort. It&apos;s alignment. And alignment doesn&apos;t come from opinions—it comes from <span className="text-[#f57214]">evidence.</span>
          </p>
        </div>
      </section>
    </main>
  );
}
