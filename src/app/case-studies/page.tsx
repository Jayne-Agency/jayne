import Link from "next/link";

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
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero Section - Dramatic & Minimal */}
      <section className="min-h-screen flex items-center justify-center bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ff6b00] rounded-full blur-[180px] opacity-20 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff6b00] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 text-center px-6 pt-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#ff6b00] font-bold mb-8 opacity-80">
            Case Studies
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-[family-name:var(--font-playfair)] leading-[0.85] text-white mb-8">
            Proof.
          </h1>
          <p className="text-xl md:text-2xl text-white/40 max-w-xl mx-auto">
            Not promises. Results.
          </p>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#ff6b00] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Full Bleed */}
      <section className="bg-white font-[family-name:var(--font-open-sans)]">
        {caseStudies.map((study) => (
          <Link
            key={study.id}
            href={`/case-studies/${study.id}`}
            className="group block"
          >
            <div className="min-h-screen flex flex-col lg:flex-row">
              {/* Left: Content */}
              <div className="flex-1 flex items-center justify-center p-8 lg:p-16 xl:p-24 bg-[#f5f3ef]">
                <div className="max-w-xl">
                  <div className="inline-block px-4 py-2 bg-[#1a1a1a] rounded-full mb-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-white font-bold">
                      {study.client}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.05] mb-8 group-hover:text-[#ff6b00] transition-colors duration-500">
                    {study.hook}
                  </h2>

                  <p className="text-xl text-[#666666] mb-10">
                    {study.teaser}
                  </p>

                  <div className="inline-flex items-center gap-4 text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors">
                    <span className="text-lg font-bold uppercase tracking-wider">Read the story</span>
                    <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-[#ff6b00] group-hover:border-[#ff6b00] transition-all">
                      <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Result - Bold Impact */}
              <div className="flex-1 flex items-center justify-center p-8 lg:p-16 bg-[#1a1a1a] group-hover:bg-[#ff6b00] transition-colors duration-500">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-[family-name:var(--font-playfair)] text-[#ff6b00] group-hover:text-white transition-colors duration-500 leading-none">
                    {study.result}
                  </div>
                  <p className="text-lg md:text-xl text-white/50 group-hover:text-white/80 transition-colors duration-500 mt-4 uppercase tracking-wider">
                    {study.resultLabel}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* More Coming Soon - Teaser */}
      <section className="py-32 lg:py-40 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#666666] mb-6">
            More stories loading
          </p>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a]/30">
            Healthcare. Technology. Retail. Non-Profit.
          </h2>
        </div>
      </section>

      {/* Pull Quote - Ultra Dramatic */}
      <section className="py-32 lg:py-48 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[20rem] md:text-[30rem] font-[family-name:var(--font-playfair)] text-white/[0.02] select-none">
            &ldquo;
          </span>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-2xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-white leading-tight mb-12">
            Jayne helped us see what was right in front of us. The clarity they brought transformed not just our brand, but how we think about our entire business.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#ff6b00]"></div>
            <p className="text-[#ff6b00] font-bold uppercase tracking-wider text-sm">
              CMO, Fortune 100 Company
            </p>
            <div className="w-12 h-[1px] bg-[#ff6b00]"></div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Bold */}
      <section className="py-32 lg:py-40 bg-[#ff6b00] font-[family-name:var(--font-open-sans)] relative overflow-hidden">

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-white leading-[1.05] mb-8">
            Your story next?
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-xl mx-auto mb-12">
            Let&apos;s talk about what&apos;s possible.
          </p>
          <Link
            href="/work-with-us"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#1a1a1a] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
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
