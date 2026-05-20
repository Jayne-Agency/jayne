"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Facilitation() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6 opacity-0 animate-fade-in">
            Brand Strategy · Facilitation
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            Change is inevitable. And it&apos;s already coming straight at you.
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed opacity-0 animate-fade-in animation-delay-200 font-[family-name:var(--font-open-sans)] mb-10">
            How do you lead strategically — toward dependable, scalable, repeatable revenue — instead of freezing in place? We help brand leaders name the problem. Then we build the path through it.
          </p>
          <div className="opacity-0 animate-fade-in animation-delay-300">
            <a
              href="https://form.typeform.com/to/Bsx0IpzP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Talk to a strategist
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* The Complication */}
      <section className="pt-20 lg:pt-28 pb-12 lg:pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6">
            The complication
          </p>
          <h2 className="reveal text-3xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-12">
            Whatever you decided last quarter, the next decision is already here.
          </h2>

          <div className="space-y-10 lg:space-y-12">
            <div className="reveal">
              <p className="text-xl md:text-2xl text-[#1a1a1a] leading-snug mb-2">
                Boards want impact.
              </p>
              <p className="text-lg md:text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">
                The next meeting will not be patient with vague answers.
              </p>
            </div>
            <div className="reveal">
              <p className="text-xl md:text-2xl text-[#1a1a1a] leading-snug mb-2">
                Leadership wants performance.
              </p>
              <p className="text-lg md:text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">
                The number isn&apos;t moving and nobody can quite say why.
              </p>
            </div>
            <div className="reveal">
              <p className="text-xl md:text-2xl text-[#1a1a1a] leading-snug mb-2">
                Your vision, mission, values, position, and promise feel — soft.
              </p>
              <p className="text-lg md:text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">
                They were written for a company that doesn&apos;t exist anymore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Reframe */}
      <section className="pt-20 lg:pt-28 pb-12 lg:pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6">
            The reframe
          </p>
          <h2 className="reveal text-4xl md:text-6xl text-[#1a1a1a] leading-[1.1] mb-10">
            You can&apos;t control the change. You can control the <span className="text-[#f57214]">controllables</span>.
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)] mb-6">
            Untangle the uncertainty by rooting into what&apos;s actually yours to decide. Build a strong sense of alignment — inside the room and outside the building — through committed brand strategy and expert transformation facilitation.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
            This isn&apos;t a workshop where everyone shares feelings and leaves with vague inspiration. It&apos;s a rigorous, structured process that pressure-tests every fundamental of your brand against the change that&apos;s already happening.
          </p>
        </div>
      </section>

      {/* The 10 Brand Assets */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal max-w-sm mx-auto md:max-w-none">
              <Image
                src="/JA Website Illustrations 10 Assets NEW.png"
                alt="The 10 brand assets"
                width={800}
                height={1200}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6">
                The controllables
              </p>
              <h2 className="reveal text-3xl md:text-4xl text-[#1a1a1a] leading-[1.1] mb-6">
                Ten brand assets. Every lever you can pull.
              </h2>
              <p className="reveal text-lg md:text-xl text-[#8a8178] leading-relaxed mb-6 font-[family-name:var(--font-open-sans)]">
                Goals, objectives, barriers, strategies, audience, insight, position, promise, support, and tone &amp; personality. These ten assets hold the levers and the limits on your finances, your marketing, your culture, your market share, and your innovation.
              </p>
              <p className="reveal text-lg md:text-xl text-[#8a8178] leading-relaxed mb-8 font-[family-name:var(--font-open-sans)]">
                When change hits, we facilitate your leadership through all ten — diagnosing what&apos;s broken, pressure-testing what&apos;s working, and rebuilding what no longer fits.
              </p>
              <Link
                href="/work-with-us#the-path"
                className="reveal inline-flex items-center gap-2 text-base text-[#f57214] hover:text-[#1a1a1a] transition-colors font-[family-name:var(--font-open-sans)] font-semibold"
              >
                See all ten assets in detail
                <span className="inline-block">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Packages — Intro */}
      <section className="pt-20 lg:pt-28 pb-8 lg:pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6">
            Three packages
          </p>
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-6">
            In-depth, expert facilitation through change and uncertainty.
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
            Diagnose. Refresh. Roll out. Pick the depth that matches what&apos;s actually in motion at your organization.
          </p>
        </div>
      </section>

      {/* Three Packages — Cards */}
      <section className="py-12 lg:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1: Untangle Uncertainty */}
            <div className="reveal bg-[#faf9f7] rounded-2xl p-8 flex flex-col">
              <p className="text-sm text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Tier 1 · Diagnose
              </p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] leading-tight mb-4">
                Untangle Uncertainty
              </h3>
              <p className="text-base text-[#8a8178] font-[family-name:var(--font-open-sans)] leading-relaxed mb-8">
                Name the problem clearly enough that your leadership can act on it. The fastest path to clarity when you suspect something is off but can&apos;t yet articulate what.
              </p>
              <ul className="space-y-4 text-[#8a8178] font-[family-name:var(--font-open-sans)] flex-1 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">1-Day Intake Session</strong> screening for the 10 brand assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Culture Check:</strong> company-wide custom survey</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">4–6 Stakeholder Interviews</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Critical Insights &amp; Strategic Imperatives</strong> read-out</span>
                </li>
              </ul>
              <a
                href="https://form.typeform.com/to/Bsx0IpzP"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base bg-[#1a1a1a] text-white rounded-lg transition-all duration-300 w-full"
              >
                Talk to a strategist
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Package 2: Control the Controllables — Most Popular */}
            <div className="reveal bg-[#faf9f7] rounded-2xl p-8 flex flex-col border-2 border-[#f57214] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f57214] text-white text-sm font-semibold px-4 py-1 rounded-full font-[family-name:var(--font-open-sans)]">
                MOST POPULAR
              </div>
              <p className="text-sm text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Tier 2 · Diagnose + Refresh
              </p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] leading-tight mb-4">
                Control the Controllables
              </h3>
              <p className="text-base text-[#8a8178] font-[family-name:var(--font-open-sans)] leading-relaxed mb-8">
                Diagnose the problem, then pressure-test and rebuild your brand platform alongside the leaders who have to live with the result.
              </p>
              <ul className="space-y-4 text-[#8a8178] font-[family-name:var(--font-open-sans)] flex-1 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">1 Full-Day Intake Session</strong> screening for the 10 brand assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Culture Check:</strong> company-wide custom survey</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">6–8 Stakeholder Interviews</strong> across 2 audiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Critical Insights &amp; Strategic Imperatives</strong> read-out</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Define the Controllables:</strong> pressure-test brand platform based on findings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Update Brand Platform:</strong> collaborative workshop with C-Suite and senior leadership</span>
                </li>
              </ul>
              <a
                href="https://form.typeform.com/to/Bsx0IpzP"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base bg-[#f57214] text-white rounded-lg transition-all duration-300 w-full"
              >
                Talk to a strategist
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Package 3: Brand Transformation Company Wide */}
            <div className="reveal bg-[#faf9f7] rounded-2xl p-8 flex flex-col">
              <p className="text-sm text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Tier 3 · Diagnose + Refresh + Roll Out
              </p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] leading-tight mb-4">
                Brand Transformation Company Wide
              </h3>
              <p className="text-base text-[#8a8178] font-[family-name:var(--font-open-sans)] leading-relaxed mb-8">
                A full transformation: diagnose, rebuild, and roll out across every audience that holds your brand accountable — board, employees, volunteers, agencies.
              </p>
              <ul className="space-y-4 text-[#8a8178] font-[family-name:var(--font-open-sans)] flex-1 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">2-Day Intake Session</strong> with breakthrough solutions, screening for the 10 brand assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Culture Check:</strong> company-wide custom survey</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">9–12 Stakeholder Interviews</strong> across 3 audiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Critical Insights &amp; Strategic Imperatives</strong> read-out</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Define the Controllables:</strong> pressure-test brand platform based on findings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Manage Change:</strong> update brand platform with C-Suite and senior leadership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Integrate &amp; Align:</strong> incorporate feedback across leadership and staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1.5 shrink-0">●</span>
                  <span><strong className="text-[#1a1a1a]">Manage Transformation:</strong> roll out to board, C-Suite, employee base, volunteers, and agencies</span>
                </li>
              </ul>
              <a
                href="https://form.typeform.com/to/Bsx0IpzP"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base bg-[#1a1a1a] text-white rounded-lg transition-all duration-300 w-full"
              >
                Talk to a strategist
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Pricing note */}
          <p className="reveal text-center text-sm text-[#8a8178] mt-12 font-[family-name:var(--font-open-sans)] max-w-2xl mx-auto">
            Engagements are scoped and quoted to the size, complexity, and timeline of the change you&apos;re facing. A 20-minute call gets you a real number.
          </p>
        </div>
      </section>

      {/* What's Inside Each Step */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6">
            What&apos;s inside
          </p>
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-6">
            Every component, explained.
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-12 font-[family-name:var(--font-open-sans)]">
            No proprietary fog. Here&apos;s exactly what happens at each stage.
          </p>

          <div className="space-y-6">
            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-base md:text-lg text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Intake Session
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                A facilitated, structured working session with your key stakeholders. We screen your current state against the 10 brand assets to surface where you&apos;re aligned, where you&apos;re assuming, and where the truth has shifted. One day for diagnostic-level engagements. Two days when transformation depth requires it.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-base md:text-lg text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Culture Check
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                A custom-built, company-wide survey designed to your situation — not pulled from a template library. It tells you what your organization actually believes, where senior narrative diverges from frontline reality, and which brand assets your culture is quietly contradicting.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-base md:text-lg text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Stakeholder Interviews
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                Confidential, one-on-one conversations with the people whose buy-in determines whether anything sticks. Scope scales with package depth: 4–6 interviews for diagnostic engagements, 6–8 across two audiences for refresh, 9–12 across three audiences for full transformation. Patterns get triangulated; individual identities stay protected.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-base md:text-lg text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Critical Insights &amp; Strategic Imperatives Read-Out
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                We synthesize everything — intake, culture data, interviews — into a clear-eyed read of where you actually are and what has to change. Delivered as a working session, not a static deck dropped in your inbox. You leave knowing the problem in language you can take to the board on Monday.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-base md:text-lg text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Define the Controllables · Pressure Test
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                We take your existing brand platform — every asset, every claim — and stress-test it against the findings. What still holds? What was always wishful thinking? What needs to be rebuilt from the ground? You don&apos;t get hand-waving recommendations. You get a marked-up platform with defensible rationale on every line.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-base md:text-lg text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Update Brand Platform · C-Suite Workshop
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                A collaborative working session with the C-suite and senior leadership where the platform actually gets rebuilt — together, in the room, with the people who own the outcome. Debates happen here, not in follow-up emails. Everyone leaves on the same page because everyone helped write it.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-base md:text-lg text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Manage Change · Integrate &amp; Align
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                Bridging leadership&apos;s rebuilt platform to the rest of the staff. We surface where alignment is real, where it&apos;s performative, and where dissent is signaling something the leadership team needs to hear before it becomes a retention or execution problem.
              </p>
            </div>

            <div className="reveal border-t border-b border-[#e5e0d8] pt-6 pb-6">
              <h3 className="text-base md:text-lg text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-3">
                Manage Transformation · Roll-Out
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                The hardest part of change is the part most consultants leave behind. We facilitate the roll-out across every audience that holds your brand accountable: board, C-suite, employee base, volunteers, and agencies. Each gets a version of the message calibrated to what they need to hear, do, and decide next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6">
            Who this is for
          </p>
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-12">
            Leaders on the brink of something — who can&apos;t yet name what.
          </h2>

          <div className="space-y-10 lg:space-y-12">
            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#f57214] font-semibold font-[family-name:var(--font-open-sans)] mb-2">
                The board just turned up the heat.
              </p>
              <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                Performance is being scrutinized in ways it wasn&apos;t a year ago, and the answers your team is giving aren&apos;t landing.
              </p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#f57214] font-semibold font-[family-name:var(--font-open-sans)] mb-2">
                The platform you built no longer fits the company you&apos;ve become.
              </p>
              <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                Acquisition, succession, market shift, category collapse — the underlying business changed, and your brand fundamentals didn&apos;t.
              </p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#f57214] font-semibold font-[family-name:var(--font-open-sans)] mb-2">
                You&apos;re inside a transformation you didn&apos;t choose.
              </p>
              <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                A new CEO, a new strategy, a new ownership structure — and the brand has to catch up to a reality that&apos;s already arrived.
              </p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#f57214] font-semibold font-[family-name:var(--font-open-sans)] mb-2">
                Growth has stalled and tactics aren&apos;t the answer.
              </p>
              <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                You&apos;ve already hired the marketing team, refreshed the logo, run the campaign. The needle didn&apos;t move because the diagnosis was wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal bg-[#faf9f7] rounded-2xl p-10 lg:p-16">
            <p className="text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-8">
              The track record
            </p>
            <p className="text-2xl md:text-4xl text-[#1a1a1a] leading-[1.15] mb-8">
              Proven globally over 17 years with hundreds of businesses ranging from $20K to $2B in revenue — through every kind of change a brand can face.
            </p>
            <p className="text-lg md:text-xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
              Startups, Fortune 50 enterprises, 501(c)(3)s, family-owned businesses, founder-led companies in succession, mature brands in category transition. The methodology adapts. The rigor doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            What they say
          </p>
          <div className="reveal grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-[#faf9f7] rounded-2xl p-6 lg:p-8">
              <span className="text-5xl lg:text-6xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-base lg:text-lg text-[#1a1a1a] leading-relaxed mt-3 mb-6">
                The sessions really brought clarity to our brand positioning relative to the competition.
              </p>
              <p className="text-sm text-[#8a8178] font-medium">Meg Cook</p>
              <p className="text-xs text-[#9d968c]">President, Painters USA, Inc.</p>
            </div>

            <div className="bg-[#faf9f7] rounded-2xl p-6 lg:p-8">
              <span className="text-5xl lg:text-6xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-base lg:text-lg text-[#1a1a1a] leading-relaxed mt-3 mb-6">
                Jayne&apos;s brand strategy workshops are relevant to any business owner looking to crystallize and differentiate their offerings to drive topline and bottom line growth.
              </p>
              <p className="text-sm text-[#8a8178] font-medium">Emilia DiMenco</p>
              <p className="text-xs text-[#9d968c]">President &amp; CEO, WBDC</p>
            </div>

            <div className="bg-[#faf9f7] rounded-2xl p-6 lg:p-8">
              <span className="text-5xl lg:text-6xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-base lg:text-lg text-[#1a1a1a] leading-relaxed mt-3 mb-6">
                Gaining an outside perspective on our mission, position and purpose was invaluable. What we do is very complex, but Jayne helped us clarify and articulate our message, honing in on the &ldquo;where&rdquo; and &ldquo;how&rdquo; of how we drive growth for clients.
              </p>
              <p className="text-sm text-[#8a8178] font-medium">Brittany Kunkel</p>
              <p className="text-xs text-[#9d968c]">Opportunity Strategist, NewEdge</p>
            </div>

            <div className="bg-[#faf9f7] rounded-2xl p-6 lg:p-8">
              <span className="text-5xl lg:text-6xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-base lg:text-lg text-[#1a1a1a] leading-relaxed mt-3 mb-6">
                No matter where you are in the business cycle, Jayne Agency&apos;s brand strategy workshop helps attendees ground themselves in their true, real sweet spot with tangible, actionable take-aways on how to strategically go to market.
              </p>
              <p className="text-sm text-[#8a8178] font-medium">Margo Posey</p>
              <p className="text-xs text-[#9d968c]">President &amp; CEO, Dallas/Fort Worth MSDC</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6">
            Common questions
          </p>
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-12">
            Before you book the call.
          </h2>

          <div className="space-y-8">
            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-3">
                How is this different from your Strategy Sprint?
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                The <Link href="/work-with-us" className="text-[#f57214] underline hover:text-[#1a1a1a] transition-colors">Strategy Sprint</Link> builds a brand platform from scratch in 4–6 weeks. Facilitation is for organizations that already have a platform — and need to diagnose, rebuild, or roll it through a change the business is already living. Different starting points; same 10 assets at the core.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-3">
                Why isn&apos;t there pricing on this page?
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                Because the honest answer depends on scope — number of stakeholders, audiences, geographies, and how much of the rollout you want us to facilitate versus your internal team. We&apos;ll give you a real number on a 20-minute call, not a misleading one on a webpage.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-3">
                How long does an engagement run?
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                Untangle Uncertainty typically wraps in weeks. Control the Controllables runs longer because of the platform rebuild. Brand Transformation Company Wide is a multi-month commitment because the roll-out itself is the work. We&apos;ll scope a realistic timeline against your board calendar and decision deadlines.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-6">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-3">
                Who needs to be in the room?
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                The people whose decisions the platform has to survive. CEO and C-suite for refresh and transformation work; for diagnostic-only engagements, the senior leader sponsoring the work plus the cross-functional stakeholders whose buy-in determines what happens next.
              </p>
            </div>

            <div className="reveal border-t border-b border-[#e5e0d8] pt-6 pb-6">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-3">
                What if we don&apos;t know which package fits?
              </h3>
              <p className="text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                Most clients don&apos;t — that&apos;s a signal of the problem, not a failure to prepare. The first call is diagnostic in itself: we&apos;ll help you name what&apos;s actually in motion and recommend the right depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-24 lg:pt-32 pb-24 lg:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-4xl md:text-6xl text-[#1a1a1a] leading-[1.1] mb-6">
            Ready to name your problem and build a path through it?
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-12 font-[family-name:var(--font-open-sans)]">
            No pitch. No pressure. A working conversation with our team of strategists about what&apos;s actually happening — and what it would take to lead through it.
          </p>
          <div className="reveal flex flex-wrap gap-4 items-center">
            <a
              href="https://form.typeform.com/to/Bsx0IpzP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="mailto:admin@jayneagency.com?subject=Facilitation%20Inquiry"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg border border-[#1a1a1a] text-[#1a1a1a] rounded-lg transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
            >
              Email admin@jayneagency.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
