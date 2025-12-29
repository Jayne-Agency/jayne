import Link from "next/link";

export default function WorkWithUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              Three Ways to Work With Us
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[0.95] text-[#1a1a1a] mb-8">
              Pick the path that<br />fits your <span className="italic text-[#ff6b00]">budget.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-2xl leading-relaxed">
              Same proven methodology. Different levels of support. All three will give you the clarity you need to stop blending in and start getting chosen.
            </p>
          </div>
        </div>
      </section>

      {/* Three Options */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Strategy Sprint */}
            <Link href="/work-with-us/strategy-sprint" className="group block">
              <div className="h-full p-8 lg:p-10 bg-[#1a1a1a] rounded-3xl hover:scale-[1.02] transition-all duration-300 flex flex-col">
                <div className="mb-auto">
                  <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">Most Popular</p>
                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-4 group-hover:text-[#ff6b00] transition-colors">
                    Strategy Sprint
                  </h3>
                  <p className="text-white/60 mb-6">
                    Complete brand strategy in 6 weeks. For businesses $1M-$20M ready to stop blending in.
                  </p>
                  <div className="space-y-3 text-white/80 text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Brand positioning & strategy
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Messaging framework
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      90-day implementation roadmap
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      100% satisfaction guarantee
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-white">$25,000</span>
                    <span className="text-white/50">one-time</span>
                  </div>
                  <div className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Strategy Partnership */}
            <Link href="/work-with-us/strategy-partnership" className="group block">
              <div className="h-full p-8 lg:p-10 bg-[#f5f3ef] rounded-3xl border-2 border-[#e5e3df] hover:border-[#ff6b00] hover:scale-[1.02] transition-all duration-300 flex flex-col">
                <div className="mb-auto">
                  <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">For Enterprise</p>
                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors">
                    Strategy Partnership
                  </h3>
                  <p className="text-[#666666] mb-6">
                    Ongoing strategic partner for enterprises. Dedicated team, guaranteed outcomes.
                  </p>
                  <div className="space-y-3 text-[#666666] text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Dedicated strategy team
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Executive advisory access
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Performance guarantees
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Quarterly strategy reviews
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-[#e5e3df]">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-[#1a1a1a]">$15,000</span>
                    <span className="text-[#666666]">/month</span>
                  </div>
                  <div className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Clarity University */}
            <Link href="/work-with-us/clarity-university" className="group block">
              <div className="h-full p-8 lg:p-10 bg-[#f5f3ef] rounded-3xl border-2 border-[#e5e3df] hover:border-[#ff6b00] hover:scale-[1.02] transition-all duration-300 flex flex-col relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-[#ff6b00] text-white text-xs font-bold px-3 py-1 rounded-full">COMING SOON</span>
                </div>
                <div className="mb-auto">
                  <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">DIY Option</p>
                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors">
                    Clarity University
                  </h3>
                  <p className="text-[#666666] mb-6">
                    Learn our methodology yourself. Same frameworks, fraction of the cost.
                  </p>
                  <div className="space-y-3 text-[#666666] text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      12+ hours of video training
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Templates & worksheets
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Private community access
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Monthly group coaching
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-[#e5e3df]">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-[#1a1a1a]">$997</span>
                    <span className="text-[#666666]">one-time</span>
                  </div>
                  <div className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:translate-x-2 transition-transform">
                    Join waitlist
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-16 text-center">
            Quick Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#1a1a1a]">
                  <th className="text-left py-4 pr-4"></th>
                  <th className="text-center py-4 px-4 font-[family-name:var(--font-playfair)] text-xl">Sprint</th>
                  <th className="text-center py-4 px-4 font-[family-name:var(--font-playfair)] text-xl">Partnership</th>
                  <th className="text-center py-4 px-4 font-[family-name:var(--font-playfair)] text-xl">University</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3df]">
                  <td className="py-4 pr-4 font-semibold">Best for</td>
                  <td className="text-center py-4 px-4 text-[#666666]">SMEs ($1-20M)</td>
                  <td className="text-center py-4 px-4 text-[#666666]">Enterprise</td>
                  <td className="text-center py-4 px-4 text-[#666666]">Founders</td>
                </tr>
                <tr className="border-b border-[#e5e3df]">
                  <td className="py-4 pr-4 font-semibold">Investment</td>
                  <td className="text-center py-4 px-4 text-[#666666]">$25K one-time</td>
                  <td className="text-center py-4 px-4 text-[#666666]">$15K/month</td>
                  <td className="text-center py-4 px-4 text-[#666666]">$997 one-time</td>
                </tr>
                <tr className="border-b border-[#e5e3df]">
                  <td className="py-4 pr-4 font-semibold">Timeline</td>
                  <td className="text-center py-4 px-4 text-[#666666]">6 weeks</td>
                  <td className="text-center py-4 px-4 text-[#666666]">12+ months</td>
                  <td className="text-center py-4 px-4 text-[#666666]">Self-paced</td>
                </tr>
                <tr className="border-b border-[#e5e3df]">
                  <td className="py-4 pr-4 font-semibold">Support level</td>
                  <td className="text-center py-4 px-4 text-[#666666]">High-touch project</td>
                  <td className="text-center py-4 px-4 text-[#666666]">Dedicated team</td>
                  <td className="text-center py-4 px-4 text-[#666666]">Community</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-semibold">You do the work?</td>
                  <td className="text-center py-4 px-4 text-[#666666]">No</td>
                  <td className="text-center py-4 px-4 text-[#666666]">No</td>
                  <td className="text-center py-4 px-4 text-[#666666]">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-white">
            Not sure which is right for you?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Book a free 30-minute call. We&apos;ll listen to your situation and tell you honestly which option (if any) makes sense.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
          >
            Book a Free Call
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-6 text-sm text-white/40">
            No pitch. No pressure. Just clarity.
          </p>
        </div>
      </section>
    </>
  );
}
