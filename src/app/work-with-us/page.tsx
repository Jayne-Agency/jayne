import Link from "next/link";

export default function WorkWithUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-[#f5f3ef] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>
        {/* Large decorative element */}
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-32">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              Work With Us
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] leading-[0.95] text-[#1a1a1a] mb-8">
              Choose your path<br />to <span className="italic text-[#ff6b00]">clarity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-2xl leading-relaxed">
              Whether you&apos;re a Fortune 500 or just getting started, we have a solution designed for where you are right now.
            </p>
          </div>
        </div>
      </section>

      {/* Three Offerings Section */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Strategy Partnership */}
            <Link href="/work-with-us/strategy-partnership" className="group">
              <div className="h-full p-10 bg-[#1a1a1a] rounded-2xl hover:bg-[#ff6b00] transition-all duration-300">
                <div className="mb-8">
                  <span className="text-5xl font-[family-name:var(--font-playfair)] text-[#ff6b00] group-hover:text-white transition-colors">
                    01
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-4">
                  Strategy Partnership
                </h3>
                <p className="text-white/70 group-hover:text-white/90 mb-6 leading-relaxed">
                  For established enterprises navigating complex markets and competing priorities. Deep partnership with guaranteed outcomes.
                </p>
                <div className="flex items-center text-[#ff6b00] group-hover:text-white font-semibold">
                  Learn more
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Strategy Sprint */}
            <Link href="/work-with-us/strategy-sprint" className="group">
              <div className="h-full p-10 bg-[#1a1a1a] rounded-2xl hover:bg-[#ff6b00] transition-all duration-300">
                <div className="mb-8">
                  <span className="text-5xl font-[family-name:var(--font-playfair)] text-[#ff6b00] group-hover:text-white transition-colors">
                    02
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-4">
                  Strategy Sprint
                </h3>
                <p className="text-white/70 group-hover:text-white/90 mb-6 leading-relaxed">
                  For businesses between $1M-$20M ready to unlock their next level of growth. Focused, fast, and designed to solve your most critical challenge.
                </p>
                <div className="flex items-center text-[#ff6b00] group-hover:text-white font-semibold">
                  Learn more
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Clarity University */}
            <Link href="/work-with-us/clarity-university" className="group">
              <div className="h-full p-10 bg-[#1a1a1a] rounded-2xl hover:bg-[#ff6b00] transition-all duration-300">
                <div className="mb-8">
                  <span className="text-5xl font-[family-name:var(--font-playfair)] text-[#ff6b00] group-hover:text-white transition-colors">
                    03
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-4">
                  Clarity University
                </h3>
                <p className="text-white/70 group-hover:text-white/90 mb-6 leading-relaxed">
                  For solopreneurs, small businesses, and startups wanting to build their own strategy. Learn our methodology at your pace, on your budget.
                </p>
                <div className="flex items-center text-[#ff6b00] group-hover:text-white font-semibold">
                  Learn more
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-[#1a1a1a]">
            Not sure which path fits?
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto mb-10">
            Let&apos;s figure it out together. Book a free discovery call and we&apos;ll help you find the right solution for your business.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 group"
          >
            Book a Discovery Call
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
