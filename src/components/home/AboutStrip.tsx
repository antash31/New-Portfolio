'use client'

import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

export default function AboutStrip() {
  return (
    <section className="relative py-28 md:py-36 border-t border-brand-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start">
        {/* Pull quote — left */}
        <Reveal>
          <blockquote className="border-l-2 border-brand-gold pl-8 md:pl-10">
            <p className="font-heading font-light text-3xl md:text-4xl leading-[1.25] tracking-wide text-brand-offwhite/90">
              &ldquo;Build the system.
              <br />
              Trust the system.
              <br />
              Let the system compound.&rdquo;
            </p>
          </blockquote>
        </Reveal>

        {/* Bio — right */}
        <Reveal delay={0.15}>
          <div className="flex flex-col gap-6">
            <p className="font-body font-light text-brand-offwhite/70 leading-relaxed tracking-wide">
              I&rsquo;m Antash — a solo founder, AI systems thinker, and relentless
              builder. I design frameworks that let one person operate with the
              leverage of an entire team: automations, AI pipelines, content
              engines, and decision systems.
            </p>
            <p className="font-body font-light text-brand-offwhite/70 leading-relaxed tracking-wide">
              This site is where I share the playbook — publicly, honestly, and
              without the fluff that plagues most &ldquo;build in public&rdquo; content.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body text-sm text-brand-gold
                         tracking-wide group transition-colors duration-300 hover:text-brand-gold/80 mt-2"
            >
              More about me
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
