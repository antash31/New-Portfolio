import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { personJsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'About',
  description:
    "The story behind the work — who I am, what I'm building, and why I'm building it in public.",
}

const VALUES = [
  {
    number: '01',
    name: 'Love',
    description: 'Everything built from a place of care lasts longer.',
  },
  {
    number: '02',
    name: 'Freedom',
    description: "Designing a life that doesn't need an escape.",
  },
  {
    number: '03',
    name: 'Growth',
    description: 'Compounding in skill, character, and impact — slowly, then all at once.',
  },
  {
    number: '04',
    name: 'Contribution',
    description: 'The scorecard that actually matters: what did I give?',
  },
  {
    number: '05',
    name: 'Thrill',
    description: "Staying close to the edges where boredom can't survive.",
  },
  {
    number: '06',
    name: 'Authenticity',
    description: 'Saying the real thing, even when the polished version would perform better.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 max-w-5xl mx-auto px-6 md:px-10">
        <Reveal>
          <h1 className="font-heading font-light text-[3rem] sm:text-[4rem] md:text-[5.5rem] leading-[1.0] tracking-[0.02em] text-brand-offwhite">
            The Story So Far.
          </h1>
          {/* Decorative gold underline */}
          <div className="mt-5 w-20 h-px bg-brand-gold opacity-70" />
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-8 font-body font-light text-lg md:text-xl text-brand-offwhite/60 tracking-wide leading-relaxed max-w-xl">
            Solo founder. Systems thinker. Permanent work in progress.
          </p>
        </Reveal>
      </section>

      {/* ── STORY SECTION ─────────────────────────────── */}
      <section className="pb-28 md:pb-36 max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex gap-10 md:gap-16">
          {/* Gold vertical rule */}
          <div className="hidden md:block flex-shrink-0 w-px bg-brand-gold/25 self-stretch" />

          {/* Prose column */}
          <div className="flex flex-col gap-8 max-w-2xl">
            <Reveal>
              <p className="font-body font-light text-brand-offwhite/70 leading-[1.9] tracking-wide text-[0.95rem] md:text-base">
                [Placeholder — replace with your own words.] I didn&rsquo;t set out to become a solo founder. I set out to solve a problem that bothered me: why do smart, capable people spend most of their working hours on things that don&rsquo;t matter? I&rsquo;d watched it happen in rooms full of talented people — energy scattered, leverage low, the best thinking buried under meetings and busywork.
              </p>
            </Reveal>

            <Reveal>
              <p className="font-body font-light text-brand-offwhite/70 leading-[1.9] tracking-wide text-[0.95rem] md:text-base">
                [Placeholder.] So I started building systems. First for myself — automations, decision frameworks, content engines, AI pipelines. Then for others. The feedback was immediate: people kept asking how I was doing so much, so fast, with so little overhead. The answer was never about working harder. It was about designing the right machine and trusting it to run.
              </p>
            </Reveal>

            {/* Pull quote 1 */}
            <Reveal delay={0.1}>
              <blockquote className="my-6 pl-6 md:pl-10 border-l border-brand-gold/40">
                <p className="font-heading font-light italic text-2xl md:text-3xl text-brand-offwhite/90 leading-[1.3] tracking-wide">
                  &ldquo;The goal was never to work less. It was to make every hour count for something real.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal>
              <p className="font-body font-light text-brand-offwhite/70 leading-[1.9] tracking-wide text-[0.95rem] md:text-base">
                [Placeholder.] This site is the documentation of that process — the tools, the thinking, the failures, the compounding wins. I&rsquo;m building in public because I believe the honest record of a real attempt is more useful than any polished retrospective. If one thing here saves you six months of trial and error, it&rsquo;s worth the vulnerability of publishing the mess in real time.
              </p>
            </Reveal>

            <Reveal>
              <p className="font-body font-light text-brand-offwhite/70 leading-[1.9] tracking-wide text-[0.95rem] md:text-base">
                [Placeholder.] Right now I&rsquo;m deep in the intersection of AI and solo operations — testing what&rsquo;s real, discarding what&rsquo;s hype, and writing up everything that actually moves the needle. The mandate is simple: execute like a team of one. The work is figuring out exactly what that looks like, week by week.
              </p>
            </Reveal>

            {/* Pull quote 2 */}
            <Reveal delay={0.1}>
              <blockquote className="my-6 pl-6 md:pl-10 border-l border-brand-gold/40">
                <p className="font-heading font-light italic text-2xl md:text-3xl text-brand-offwhite/90 leading-[1.3] tracking-wide">
                  &ldquo;Build the system. Trust the system. Let the system compound.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal>
              <p className="font-body font-light text-brand-offwhite/70 leading-[1.9] tracking-wide text-[0.95rem] md:text-base">
                [Placeholder.] If any of this resonates — the ambition, the honesty, the obsession with leverage — stick around. Subscribe to the blog, follow along on LinkedIn, or just read the archives. The journey is ongoing and the door is open.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ────────────────────────────── */}
      <section className="py-28 md:py-36 border-t border-brand-gold/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-heading font-light text-4xl md:text-5xl tracking-wide text-brand-offwhite mb-20">
              What I&rsquo;m Building Towards
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {VALUES.map(({ number, name, description }, i) => (
              <Reveal key={name} delay={i * 0.08}>
                <div className="flex flex-col gap-3">
                  <span className="font-body text-xs text-brand-gold/60 tracking-[0.25em] uppercase">
                    {number}
                  </span>
                  <h3 className="font-heading font-light text-3xl tracking-wide text-brand-offwhite leading-none">
                    {name}
                  </h3>
                  <p className="font-body font-light text-sm text-brand-midgray leading-relaxed tracking-wide">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────── */}
      <section className="py-28 md:py-36 border-t border-brand-gold/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col items-start gap-6">
          <Reveal>
            <h2 className="font-heading font-light text-3xl md:text-4xl tracking-wide text-brand-offwhite">
              Let&rsquo;s stay connected.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <a
              href="https://linkedin.com/in/antashshrivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-2 px-8 py-3
                         border border-brand-gold text-brand-gold font-body text-sm
                         uppercase tracking-[0.15em] transition-all duration-500
                         hover:bg-brand-gold hover:text-brand-black"
            >
              Follow the journey on LinkedIn
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href="/blog"
              className="font-body text-sm text-brand-midgray tracking-wide
                         hover:text-brand-gold transition-colors duration-300
                         border-b border-transparent hover:border-brand-gold/40"
            >
              Or read what I&rsquo;m learning
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
