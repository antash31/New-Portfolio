'use client'

import Reveal from '@/components/ui/Reveal'

const PILLARS = [
  {
    number: '01',
    title: 'AI Exploration',
    description:
      'Testing, breaking, and deploying AI tools — then sharing what actually works.',
  },
  {
    number: '02',
    title: 'Founder Mindset',
    description:
      'Mental models, decision frameworks, and the psychology of building alone.',
  },
  {
    number: '03',
    title: 'Build in Public',
    description:
      'Real metrics, real failures, real wins — documented as they happen.',
  },
  {
    number: '04',
    title: 'People & Coaching',
    description:
      'Helping others design their own systems and operate at full capacity.',
  },
]

export default function PillarsSection() {
  return (
    <section className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-heading font-light text-4xl md:text-5xl tracking-wide text-center mb-20">
            What I Write About
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PILLARS.map(({ number, title, description }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <article
                className="group relative p-8 md:p-10 bg-[#1A1A1A] border border-transparent
                           transition-colors duration-500 hover:border-brand-gold/30"
              >
                {/* Number */}
                <span className="block font-body text-xs text-brand-gold/50 tracking-[0.25em] uppercase mb-5">
                  {number}
                </span>

                {/* Title */}
                <h3 className="font-heading font-light text-2xl md:text-[1.75rem] tracking-wide text-brand-offwhite mb-3 leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="font-body font-light text-sm text-brand-midgray leading-relaxed tracking-wide">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
