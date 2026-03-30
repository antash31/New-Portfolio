'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, delay, ease: 'easeOut' as const },
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Drifting gold glow — repositioned to top-right for asymmetry */}
      <div
        className="hero-glow absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            'radial-gradient(ellipse 65% 55% at 75% 30%, rgba(201,160,53,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Subtle horizontal rule at top — appears after page loads */}
      <motion.div
        {...fadeIn(0.1)}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-brand-gold/30 via-brand-gold/10 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-32 pb-24 md:pt-36 md:pb-28">

        {/* Kicker */}
        <motion.p
          {...fadeIn(0.2)}
          className="font-body text-[11px] uppercase tracking-[0.3em] text-brand-gold/70 mb-10"
        >
          Founder &nbsp;&middot;&nbsp; Builder &nbsp;&middot;&nbsp; AI Systems
        </motion.p>

        {/* Headline — left-aligned, full editorial width */}
        <div className="max-w-5xl">
          <motion.h1
            {...fadeUp(0.35)}
            className="font-heading font-light text-brand-offwhite leading-[1.05] tracking-[0.015em]
                       text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.25rem]"
          >
            I help aspiring entrepreneurs
            <br />
            build AI&#8209;powered life &amp;
            <br />
            business systems —
          </motion.h1>

          <motion.h1
            {...fadeUp(0.5)}
            className="font-heading font-light text-brand-gold leading-[1.05] tracking-[0.015em]
                       text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.25rem]"
            aria-hidden="true"
          >
            so they can execute like
            <br className="hidden sm:block" /> a team of&nbsp;one.
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          {...fadeIn(0.65)}
          className="mt-10 mb-10 w-12 h-px bg-brand-gold/40"
        />

        {/* Sub-line + CTAs — side by side on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <motion.p
            {...fadeUp(0.7)}
            className="font-body font-light text-brand-offwhite/55 text-base md:text-lg tracking-wide leading-relaxed max-w-md"
          >
            Documenting the journey in public.
            <br />
            No fluff. No shortcuts.
          </motion.p>

          <motion.div
            {...fadeUp(0.85)}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 px-8 py-3.5
                         bg-brand-gold text-brand-black font-body text-xs
                         uppercase tracking-[0.18em] transition-all duration-400
                         hover:bg-[#A07C28]"
            >
              Read the Blog
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>

            <Link
              href="/resources"
              className="font-body text-xs uppercase tracking-[0.18em] text-brand-offwhite/50
                         hover:text-brand-gold transition-colors duration-300 group
                         flex items-center gap-2"
            >
              Free resources
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 opacity-60">
                &rarr;
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        className="absolute bottom-10 left-6 md:left-10 flex items-center gap-3"
      >
        <div className="w-px h-8 bg-gradient-to-b from-brand-gold/50 to-transparent" />
        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-brand-midgray/60">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
