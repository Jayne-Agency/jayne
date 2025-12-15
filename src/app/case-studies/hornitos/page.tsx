import Link from "next/link";
import Image from "next/image";

export default function HornitosCaseStudy() {
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
              Hornitos
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-playfair)] text-white leading-[1.05] mb-8">
            How do you make bartenders fall in love with a tequila?
          </h1>

          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto">
            From overlooked import to must-have mixology essential
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
            Hornitos was a globally renowned mixing tequila.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#666666]/60 leading-[1.3] mb-12 font-[family-name:var(--font-playfair)]">
            But in the U.S., bartenders overlooked it, preferring familiar brands.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-[1.3] font-[family-name:var(--font-playfair)]">
            The question wasn&apos;t <span className="text-[#ff6b00]">&ldquo;how do we advertise?&rdquo;</span>
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-[1.3] font-[family-name:var(--font-playfair)] font-semibold">
            It was &ldquo;how do we create an experience they&apos;ll never forget?&rdquo;
          </p>
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
            We stopped trying to <span className="text-[#ff6b00]">tell</span> bartenders about the tequila.
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] leading-[1.1] text-center mt-8">
            We let them discover its flexible nature for themselves.
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
                Hornitos was a globally renowned mixing tequila, but in the U.S., bartenders overlooked it.
              </p>
              <p className="text-lg text-[#666666] leading-relaxed mt-6">
                They preferred familiar brands. Traditional advertising wasn&apos;t breaking through.
              </p>
            </div>
            <div className="p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00]">02</span>
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#666666] font-bold">The Approach</h2>
              </div>
              <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed font-[family-name:var(--font-playfair)]">
                Create a consumer (and bartender) event around mixology.
              </p>
              <p className="text-lg text-[#666666] leading-relaxed mt-6">
                Make the tequila and its flexible nature unforgettable through hands-on experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Grid */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-[2px] bg-[#ff6b00]"></div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#666666] font-bold">
              The Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 lg:p-12 rounded-2xl">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#ff6b00] font-bold mb-4">
                Nimble Process
              </h3>
              <p className="text-xl md:text-2xl text-[#1a1a1a] font-[family-name:var(--font-playfair)] leading-relaxed">
                Training NYC Bartenders live as a means to force education and mixology usage.
              </p>
            </div>

            <div className="bg-white p-10 lg:p-12 rounded-2xl">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#ff6b00] font-bold mb-4">
                Innovative Solutions
              </h3>
              <p className="text-xl md:text-2xl text-[#1a1a1a] font-[family-name:var(--font-playfair)] leading-relaxed">
                Branded mixology handbook developed to further engage bartenders and consumers post event.
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] text-white leading-none">
                  83%
                </div>
                <p className="text-xl md:text-2xl text-white/50 mt-4 uppercase tracking-wider">
                  Open rate
                </p>
              </div>
              <div className="hidden md:block w-[1px] h-32 bg-white/20"></div>
              <div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] text-white leading-none">
                  79%
                </div>
                <p className="text-xl md:text-2xl text-white/50 mt-4 uppercase tracking-wider">
                  Attendance
                </p>
              </div>
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
                  Bartender advocacy
                </h3>
                <p className="text-lg text-[#666666] leading-relaxed">
                  NYC&apos;s top bartenders became brand ambassadors, recommending Hornitos to customers and peers.
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
                  Cultural moment
                </h3>
                <p className="text-lg text-[#666666] leading-relaxed">
                  Partnership with Bon Jovi&apos;s 25th anniversary and Showtime created massive cultural relevance.
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
                  Lasting engagement
                </h3>
                <p className="text-lg text-[#666666] leading-relaxed">
                  The &ldquo;Mischievous Cocktails&rdquo; handbook extended the experience beyond the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Partnership - Full Width Image */}
      <section className="bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/bonjovi1.png"
            alt="Bon Jovi partnership event"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* The Kicker - Full Screen */}
      <section className="min-h-[60vh] flex items-center justify-center bg-[#ff6b00] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white leading-[1.1]">
            Experience beats advertising.
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white/60 leading-[1.1] mt-4">
            Every time.
          </p>
        </div>
      </section>

      {/* CTA - Clean & Powerful */}
      <section className="py-32 lg:py-40 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white leading-[1.1] mb-8">
            Ready to create experiences that stick?
          </h2>
          <p className="text-xl text-white/40 mb-12 max-w-xl mx-auto">
            Let&apos;s talk about turning your audience into advocates.
          </p>
          <Link
            href="/work-with-us"
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
