import Link from "next/link";

export default function WorkWithUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center bg-[#f5f3ef] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
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
              Let&apos;s build<br />something <span className="italic text-[#ff6b00]">great.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-2xl leading-relaxed mb-10">
              Ready to get clarity on your strategy? Let&apos;s talk about how we can help your business reach its most important goals.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 group"
            >
              Book a Call
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-white">
            Have questions?
          </h2>
          <p className="text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-10">
            Reach out to us directly at{" "}
            <a href="mailto:hello@jayneagency.com" className="text-[#ff6b00] hover:text-[#ff8c3a] transition-colors">
              hello@jayneagency.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
