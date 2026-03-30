import type { Metadata } from 'next'
import Reveal from '@/components/ui/Reveal'
import ResourceCard from '@/components/resources/ResourceCard'

export const metadata: Metadata = {
  title: 'Free Resources',
  description: 'Free tools, frameworks, and guides for solo founders and aspiring entrepreneurs.',
}

const RESOURCES = [
  {
    number: '01',
    title: 'Validate Any Idea in 3 Hours',
    description:
      'A battle-tested prompt stack for stress-testing a business idea before you waste a week on it. AI-powered, ruthlessly honest.',
    tags: ['PDF', 'Free', 'AI Prompts'],
    resourceKey: 'validate-idea',
  },
  {
    number: '02',
    title: 'Physics of Progress',
    description:
      'A momentum framework for solo builders. Why most people stall, how compounding actually works, and the daily system I use to stay in motion.',
    tags: ['PDF', 'Free', 'Framework'],
    resourceKey: 'physics-of-progress',
  },
]

export default function Resources() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ────────────────────────────────────── */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 max-w-5xl mx-auto px-6 md:px-10">
        <Reveal>
          <h1 className="font-heading font-light text-[3rem] sm:text-[4rem] md:text-[5.5rem]
                         leading-[1.0] tracking-[0.02em] text-brand-offwhite">
            Free Resources
          </h1>
          <div className="mt-5 w-20 h-px bg-brand-gold opacity-70" />
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-8 font-body font-light text-lg md:text-xl text-brand-offwhite/60
                        tracking-wide leading-relaxed">
            Things I&rsquo;ve built that you can steal.
          </p>
        </Reveal>
      </section>

      {/* ── RESOURCE CARDS ──────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 pb-28 md:pb-36">
        <div className="flex flex-col gap-6">
          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.resourceKey} delay={i * 0.12}>
              <ResourceCard {...resource} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── BOTTOM ORNAMENT ─────────────────────────── */}
      <section className="pb-28 md:pb-36 border-t border-brand-gold/10">
        <Reveal>
          <div className="flex flex-col items-center gap-4 pt-20">
            {/* Gold dot ornament */}
            <span className="text-brand-gold text-xl tracking-[0.5em] select-none" aria-hidden="true">
              &middot; &middot; &middot;
            </span>
            <p className="font-heading font-light italic text-2xl md:text-3xl text-brand-offwhite/50 tracking-wide">
              More coming soon.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
