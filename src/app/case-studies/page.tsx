import Link from "next/link";

export default function CaseStudies() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              Case Studies
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[0.95] text-white mb-8">
              $800MM+ in<br /><span className="italic text-[#ff6b00]">client outcomes.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              Not promises. Proof. Here&apos;s what happens when clarity meets execution.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#0a0a0a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-1">$800MM+</p>
              <p className="text-white/50 text-sm">Measurable Outcomes</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-1">83%</p>
              <p className="text-white/50 text-sm">Avg. Campaign Engagement</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-1">100+</p>
              <p className="text-white/50 text-sm">Brands Transformed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-1">15+</p>
              <p className="text-white/50 text-sm">Years Delivering Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 1: PepsiCo */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">PepsiCo</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.05] mb-6">
                $800MM in diverse supplier spend
              </h2>
              <p className="text-xl text-[#666666] mb-8 leading-relaxed">
                PepsiCo needed to transform their supplier diversity program from a compliance checkbox into a competitive advantage. They had ambitious goals but lacked the brand strategy to rally internal stakeholders and external partners.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#666666]"><strong className="text-[#1a1a1a]">Challenge:</strong> Align disparate stakeholders around a unified vision for supplier diversity</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#666666]"><strong className="text-[#1a1a1a]">Solution:</strong> Brand positioning and messaging strategy that reframed the narrative</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#666666]"><strong className="text-[#1a1a1a]">Result:</strong> $800MM in diverse supplier spend achieved</span>
                </div>
              </div>
              <Link
                href="/case-studies/pepsico"
                className="inline-flex items-center text-[#ff6b00] font-semibold hover:translate-x-2 transition-transform"
              >
                Read full case study
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-[#1a1a1a] rounded-3xl p-12 lg:p-16 text-center">
              <p className="text-7xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] text-[#ff6b00] leading-none mb-4">
                $800MM
              </p>
              <p className="text-white/60 text-lg uppercase tracking-wider">
                Diverse Supplier Spend
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Hornitos */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[#1a1a1a] rounded-3xl p-12 lg:p-16 text-center">
              <p className="text-7xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] text-[#ff6b00] leading-none mb-4">
                83%
              </p>
              <p className="text-white/60 text-lg uppercase tracking-wider">
                Open Rate
              </p>
              <p className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] text-white mt-8 mb-2">
                79%
              </p>
              <p className="text-white/60 text-lg uppercase tracking-wider">
                Event Attendance
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">Hornitos Tequila</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.05] mb-6">
                83% open rate. 79% attendance.
              </h2>
              <p className="text-xl text-[#666666] mb-8 leading-relaxed">
                Hornitos needed to break through the noise and connect with bartenders—the gatekeepers who decide which tequila makes it onto the shelf. Generic industry messaging wasn&apos;t cutting it.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#666666]"><strong className="text-[#1a1a1a]">Challenge:</strong> Cut through saturated bartender communications</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#666666]"><strong className="text-[#1a1a1a]">Solution:</strong> Messaging strategy that spoke to bartenders as craftspeople, not salespeople</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#666666]"><strong className="text-[#1a1a1a]">Result:</strong> 83% open rate and 79% event attendance—industry-breaking numbers</span>
                </div>
              </div>
              <Link
                href="/case-studies/hornitos"
                className="inline-flex items-center text-[#ff6b00] font-semibold hover:translate-x-2 transition-transform"
              >
                Read full case study
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-6">
              Industries We&apos;ve Transformed
            </h2>
            <p className="text-xl text-[#666666]">
              The methodology works. The industry doesn&apos;t matter.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">Food & Beverage</p>
              <p className="text-[#666666]">PepsiCo, Hornitos, Mondelez</p>
            </div>
            <div className="p-6">
              <p className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">Healthcare</p>
              <p className="text-[#666666]">Abbott, Regional Systems</p>
            </div>
            <div className="p-6">
              <p className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">Insurance</p>
              <p className="text-[#666666]">Allstate, National Carriers</p>
            </div>
            <div className="p-6">
              <p className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">Non-Profit</p>
              <p className="text-[#666666]">Red Cross, Foundations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] text-white leading-tight mb-12">
            &ldquo;Jayne helped us see what was right in front of us. The clarity they brought transformed not just our brand, but how we think about our entire business.&rdquo;
          </p>
          <p className="text-[#ff6b00] font-bold uppercase tracking-wider text-sm">
            CMO, Fortune 100 Company
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#ff6b00] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white leading-[1.05] mb-8">
            Ready to be our next case study?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12">
            Let&apos;s talk about what&apos;s possible for your business.
          </p>
          <Link
            href="/work-with-us"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#1a1a1a] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
          >
            See How We Can Help
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
