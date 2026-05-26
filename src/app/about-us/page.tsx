"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutUs() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl leading-[1.1] text-[#1a1a1a] opacity-0 animate-fade-in">
            We&apos;re a tight team of entrepreneurs, designers, UX researchers, strategists and storytellers.
          </h1>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-16 text-center">
            Some companies we&apos;ve helped
          </p>
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 lg:gap-16 items-center justify-items-center">
            <Image src="/pepsico.png" alt="PepsiCo" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/mondelez.png" alt="Mondelēz" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/abbott.png" alt="Abbott" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/allstate.png" alt="Allstate" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/redcross.png" alt="Red Cross" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/pregis.png" alt="Pregis" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/mercer.png" alt="Mercer" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/ff.png" alt="FF" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/wbenc.png" alt="WBENC" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/nmsdc.png" alt="NMSDC" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/nevermined.png" alt="Nevermined" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/nationwide.png" alt="Nationwide Insurance" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-16">
            Meet the team
          </p>

          <div className="space-y-16">
            {/* Brooke */}
            <div className="reveal flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0">
                <Image
                  src="/brooke.png"
                  alt="Brooke Foley"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-[1.1] mb-2">
                  Brooke Foley
                </h2>
                <p className="text-lg md:text-xl text-[#f57214] italic mb-4">
                  Founder and CEO
                </p>
                <div className="space-y-3 text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  <p>
                    Brooke built her approach leading creative and digital transformation at three of the world&apos;s largest ad-tech agencies. She founded Jayne to provide clients with clarity, alignment, and a path to scalable results, whether through a full brand strategy engagement, a research program, or a stint with Brooke as fractional CMO. She works with seasoned leaders who already know that evidence-based brands aren&apos;t a nice-to-have. They&apos;re how serious companies grow.
                  </p>
                </div>
              </div>
            </div>

            {/* Brad */}
            <div className="reveal flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0">
                <Image
                  src="/brad.png"
                  alt="Brad Pierce"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-[1.1] mb-2">
                  Brad Pierce
                </h2>
                <p className="text-lg md:text-xl text-[#f57214] italic mb-4">
                  Chief Strategy Officer
                </p>
                <div className="space-y-3 text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  <p>
                    Serves as lead strategist across engagements spanning early-stage startups to Fortune 50 enterprises; responsible for translating complex organizational, market, and brand challenges into actionable strategy frameworks.
                  </p>
                  <p>
                    13+ years at Jayne leading, facilitating, and evolving the firm&apos;s strategic approach — shaping how the firm thinks about brand strategy, go-to-market positioning, and organizational alignment. Co-developed and built the Clarity University&reg; methodology and core curriculum from the ground up, turning that same strategic lens inward to create proprietary programming now used to guide leaders through brand clarity and growth.
                  </p>
                </div>
              </div>
            </div>

            {/* John */}
            <div className="reveal flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0">
                <Image
                  src="/john.png"
                  alt="John Taylor"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-[1.1] mb-2">
                  John Taylor
                </h2>
                <p className="text-lg md:text-xl text-[#f57214] italic mb-4">
                  Strategic Growth Advisor
                </p>
                <div className="space-y-3 text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  <p>
                    John spent 25 years running procurement and contracts at Fortune 500 companies. He&apos;s negotiated multimillion-dollar deals across IT, data, and services, built supplier risk frameworks, and rewritten the contract templates and playbooks that govern how big healthcare and med-tech companies actually buy things.
                  </p>
                </div>
              </div>
            </div>

            {/* Varonnica */}
            <div className="reveal flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0">
                <Image
                  src="/varonnica.png"
                  alt="Varonnica Kirn"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-[1.1] mb-2">
                  Varonnica Kirn
                </h2>
                <p className="text-lg md:text-xl text-[#f57214] italic mb-4">
                  Senior Brand Strategist
                </p>
                <div className="space-y-3 text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  <p>
                    Varonnica is a Jayne Agency veteran in brand strategy, facilitation and client program management. As a master of the 10 Assets of the Brand Platform methodology she has led the adaptation of the methodology working with Jayne&apos;s platform partners for custom education including NMSDC (501c3), WBENC (501c3), enterprise clients like Eaton, Takeda, International and more overseeing cohorts while also serving Jayne Private Clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Carly */}
            <div className="reveal flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0">
                <Image
                  src="/carly.png"
                  alt="Carly Nanberg"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-[1.1] mb-2">
                  Carly Nanberg
                </h2>
                <p className="text-lg md:text-xl text-[#f57214] italic mb-4">
                  Brand Strategist
                </p>
                <div className="space-y-3 text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  <p>
                    Carly runs communications and PR at Jayne, bringing equal parts wit and strategy to the work. She&apos;s built campaigns and messaging for major nonprofits, global enterprise suppliers, and emerging technology companies, and she&apos;s the person Jayne calls when a strategic idea needs to become something the market actually sees, whether that&apos;s a launch, a media moment, or an internal rollout. User-centered research grounds the work, so what gets said is what audiences are ready to hear.
                  </p>
                </div>
              </div>
            </div>

            {/* Trevor */}
            <div className="reveal flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0">
                <Image
                  src="/trevor.png"
                  alt="Trevor Sidewand"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-[1.1] mb-2">
                  Trevor Sidewand
                </h2>
                <p className="text-lg md:text-xl text-[#f57214] italic mb-4">
                  Entrepreneur in Residence
                </p>
                <div className="space-y-3 text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  <p>
                    Trevor helps Jayne clients build the go-to-market and intelligence systems they need to move faster and make better decisions. He came to Jayne through the 2025 acquisition of RWO, the content marketing and go-to-market agency he founded and ran for four years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-16">
            In their words
          </p>

          {/* Featured Testimonial */}
          <div className="reveal bg-[#faf9f7] rounded-2xl p-8 lg:p-12 mb-8 lg:mb-12 border-l-4 border-[#f57214]">
            <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
            <p className="text-xl lg:text-2xl text-[#1a1a1a] leading-relaxed mt-4 mb-8">
              Jayne has become a true thought-partner to our organization and our public relations team. The team contributes regularly to much more than our brand and marketing objectives. They help us look ahead, think strategically about complex business challenges and map out authentic and integrated ways to elevate our brand and company as a whole. Their strategic approach is coupled with creative messaging that can build or refresh brand stories that are distinctive, memorable and meaningful. We have a high-performance, fast moving environment and they constantly look for ways to drive performance and make sure we never lose sight of the brand stewardship that will enable us to meet our goals.
            </p>
            <p className="text-base text-[#8a8178] font-medium">
              Dache Davidson
            </p>
            <p className="text-sm text-[#9d968c]">
              Chief Marketing Officer, Pregis, LLC
            </p>
          </div>

          <div className="reveal grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-[#faf9f7] rounded-2xl p-8 lg:p-10">
              <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-lg lg:text-xl text-[#1a1a1a] leading-relaxed mt-4 mb-8">
                They continue to craft our messaging and creative in a way that inspires our internal employees, partners and clients. They are an integral and integrated part of Mercer Valve, they are our team.
              </p>
              <p className="text-base text-[#8a8178] font-medium">
                Dick Taylor
              </p>
              <p className="text-sm text-[#9d968c]">
                President and CEO, Mercer Valve, Co.
              </p>
            </div>

            <div className="bg-[#faf9f7] rounded-2xl p-8 lg:p-10">
              <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-lg lg:text-xl text-[#1a1a1a] leading-relaxed mt-4 mb-8">
                The investment delivered real business value and a framework for the future.
              </p>
              <p className="text-base text-[#8a8178] font-medium">
                Frank Thompson
              </p>
              <p className="text-sm text-[#9d968c]">
                Associate Director, Supplier Diversity, Mondēlez
              </p>
            </div>

            <div className="bg-[#faf9f7] rounded-2xl p-8 lg:p-10">
              <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-lg lg:text-xl text-[#1a1a1a] leading-relaxed mt-4 mb-8">
                The research confirmed insights around position, promise and support, helping Be Red Cross Ready make critical adjustments in brand strategy, tagline, content for best practices in marketing communication to help increase engagement. Within the first week of delivering the insights and strategic imperatives, Red Cross saw a dramatic increase in impact at a major event where the solutions and recommendations were tested.
              </p>
              <p className="text-base text-[#8a8178] font-medium">
                Tom Heneghan
              </p>
              <p className="text-sm text-[#9d968c]">
                Program Manager, Community Preparedness Education and Youth Preparedness, Disaster Cycle Services, National Headquarters, American Red Cross
              </p>
            </div>

            <div className="bg-[#faf9f7] rounded-2xl p-8 lg:p-10">
              <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-lg lg:text-xl text-[#1a1a1a] leading-relaxed mt-4 mb-8">
                Brooke is clearly a subject matter expert with a depth of experience working with big brands. She knows what she&apos;s talking about and provides exceptional strategic counsel while encouraging robust collaboration in the process.
              </p>
              <p className="text-base text-[#8a8178] font-medium">
                Meg Cook
              </p>
              <p className="text-sm text-[#9d968c]">
                President, Painters USA, Inc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl leading-[1.2] text-[#1a1a1a] mb-8">
            We help organizations overcome their most pressing challenges while building sustainable long-term growth. Our brand strategy methodology has been developed and refined over 17 years in service of hundreds of businesses.
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
            Learn more about our methodology and how we can help you <span className="text-[#f57214]">↓</span>
          </p>

          <div className="reveal">
            <Link
              href="/work-with-us"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              How We Work
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
