import Link from "next/link";

export default function PepsiCoCaseStudy() {
  return (
    <>
      {/* Hero - Cinematic & Immersive */}
      <section className="min-h-screen flex items-center justify-center bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-15 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ff6b00] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

        {/* Back button - floating */}
        <Link
          href="/case-studies"
          className="absolute top-28 left-6 lg:left-12 inline-flex items-center gap-3 text-white/50 hover:text-[#ff6b00] transition-colors z-20 group"
        >
          <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-[#ff6b00] group-hover:border-[#ff6b00] transition-all">
            <svg className="w-4 h-4 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-sm font-medium uppercase tracking-wider hidden sm:inline">All Stories</span>
        </Link>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-block px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-white/80 font-bold">
              PepsiCo
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-playfair)] text-white leading-[1.05] mb-8">
            What if your supply chain could change the world?
          </h1>

          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto">
            From compliance checkbox to competitive advantage
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#ff6b00] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* The Story - Dramatic Typography */}
      <section className="py-32 lg:py-48 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#666666] leading-[1.3] mb-12 font-[family-name:var(--font-playfair)]">
            PepsiCo had a supplier diversity program.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#666666]/60 leading-[1.3] mb-12 font-[family-name:var(--font-playfair)]">
            A checkbox. A report filed once a year.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-[1.3] font-[family-name:var(--font-playfair)]">
            But <span className="text-[#ff6b00]">$250 million</span> in spending power isn&apos;t a checkbox—
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-[1.3] font-[family-name:var(--font-playfair)] font-semibold">
            it&apos;s a lever.
          </p>
        </div>
      </section>

      {/* The Question - Full Bleed */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xl md:text-2xl text-[#666666] leading-relaxed mb-6">
                The question wasn&apos;t
              </p>
              <p className="text-2xl md:text-3xl text-[#666666]/60 leading-relaxed line-through decoration-[#ff6b00]/30">
                &ldquo;how do we track diverse suppliers?&rdquo;
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-[#666666] leading-relaxed mb-6">
                It was
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] leading-[1.2] font-[family-name:var(--font-playfair)]">
                &ldquo;how do we build an engine that creates opportunity at scale?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Insight - Ultra Bold */}
      <section className="py-32 lg:py-48 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[18rem] md:text-[28rem] font-[family-name:var(--font-playfair)] text-white/[0.02] select-none">
            &ldquo;
          </span>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-2xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-white leading-[1.2] text-center">
            We stopped thinking about supplier diversity as <span className="text-[#ff6b00]">compliance</span> and started treating it like what it actually is:
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] leading-[1.1] text-center mt-8">
            a competitive advantage hiding in plain sight.
          </p>
        </div>
      </section>

      {/* The Approach - Clean Columns */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#e5e3df] rounded-3xl overflow-hidden">
            <div className="p-12 lg:p-16 bg-[#f5f3ef] border-b lg:border-b-0 lg:border-r border-[#e5e3df]">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00]">01</span>
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#666666] font-bold">The Problem</h2>
              </div>
              <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed font-[family-name:var(--font-playfair)]">
                Moving from a Supplier Diversity program to an enterprise platform.
              </p>
              <p className="text-lg text-[#666666] leading-relaxed mt-6">
                The old way was transactional. Check the box. File the report. Move on.
              </p>
            </div>
            <div className="p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00]">02</span>
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#666666] font-bold">The Approach</h2>
              </div>
              <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed font-[family-name:var(--font-playfair)]">
                Call all advocates to help create opportunity and awareness.
              </p>
              <p className="text-lg text-[#666666] leading-relaxed mt-6">
                Use an approved style guide to condense timing. Appeal to PepsiCo&apos;s culture of performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Result - Massive Impact */}
      <section className="py-32 lg:py-48 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-8">
              The Result
            </p>
            <div className="text-8xl md:text-9xl lg:text-[14rem] font-[family-name:var(--font-playfair)] text-white leading-none">
              $800MM
            </div>
            <p className="text-xl md:text-2xl text-white/50 mt-6 uppercase tracking-wider">
              in forecasted diverse supplier spend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-10 lg:p-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#ff6b00]/50 transition-colors">
              <div className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-3">335</div>
              <p className="text-white/60 uppercase tracking-wider text-sm">diverse suppliers activated</p>
            </div>
            <div className="text-center p-10 lg:p-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#ff6b00]/50 transition-colors">
              <div className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-3">23</div>
              <p className="text-white/60 uppercase tracking-wider text-sm">categories transformed</p>
            </div>
            <div className="text-center p-10 lg:p-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#ff6b00]/50 transition-colors">
              <div className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-3">35+</div>
              <p className="text-white/60 uppercase tracking-wider text-sm">years of relationships deepened</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact - Editorial */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-[2px] bg-[#ff6b00]"></div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#666666] font-bold">
              What Changed
            </h2>
          </div>

          <div className="space-y-12">
            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 -mx-8 rounded-2xl hover:bg-[#f5f3ef] transition-colors">
              <div className="md:col-span-1">
                <div className="w-12 h-12 rounded-full bg-[#ff6b00] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors">
                  Highly valued pipeline
                </h3>
                <p className="text-lg text-[#666666] leading-relaxed">
                  A steady flow of qualified diverse suppliers ready to meet PepsiCo&apos;s needs.
                </p>
              </div>
            </div>

            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 -mx-8 rounded-2xl hover:bg-[#f5f3ef] transition-colors">
              <div className="md:col-span-1">
                <div className="w-12 h-12 rounded-full bg-[#ff6b00] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors">
                  Disruptive innovation
                </h3>
                <p className="text-lg text-[#666666] leading-relaxed">
                  Fresh perspectives from diverse suppliers driving new ideas across the organization.
                </p>
              </div>
            </div>

            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 -mx-8 rounded-2xl hover:bg-[#f5f3ef] transition-colors">
              <div className="md:col-span-1">
                <div className="w-12 h-12 rounded-full bg-[#ff6b00] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors">
                  Supply chain efficiency
                </h3>
                <p className="text-lg text-[#666666] leading-relaxed">
                  Streamlined processes that benefit the entire ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Kicker - Full Screen */}
      <section className="min-h-[60vh] flex items-center justify-center bg-[#ff6b00] font-[family-name:var(--font-open-sans)] relative overflow-hidden">

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white leading-[1.1]">
            Impact beyond the supply chain.
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white/60 leading-[1.1] mt-4">
            That&apos;s the part that matters.
          </p>
        </div>
      </section>

      {/* CTA - Clean & Powerful */}
      <section className="py-32 lg:py-40 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white leading-[1.1] mb-8">
            Ready to find your lever?
          </h2>
          <p className="text-xl text-white/40 mb-12 max-w-xl mx-auto">
            Let&apos;s talk about what&apos;s hiding in plain sight in your business.
          </p>
          <Link
            href="/work-with-us/strategy-partnership"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
          >
            Work With Us
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
