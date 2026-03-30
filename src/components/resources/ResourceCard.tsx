'use client'

import { useState } from 'react'

interface ResourceCardProps {
  number: string
  title: string
  description: string
  tags: string[]
  resourceKey: string
}

export default function ResourceCard({
  number,
  title,
  description,
  tags,
  resourceKey,
}: ResourceCardProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <article className="border-t border-brand-gold/30 bg-[#1A1A1A] p-8 md:p-12">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

        {/* ── Left: identity ────────────────────────── */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Faded large number */}
          <span
            className="font-heading font-light leading-none select-none"
            style={{
              fontSize: 'clamp(4rem, 10vw, 6rem)',
              color: 'rgba(201, 160, 53, 0.12)',
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            {number}
          </span>

          <div className="flex flex-col gap-3 -mt-2">
            <h2 className="font-heading font-light text-3xl md:text-4xl tracking-wide text-brand-offwhite leading-snug">
              {title}
            </h2>
            <p className="font-body font-light text-sm text-brand-midgray leading-relaxed tracking-wide max-w-sm">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] uppercase tracking-[0.2em] text-brand-gold/70
                           border border-brand-gold/25 px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: email capture ───────────────────── */}
        <div className="w-full md:w-72 flex-shrink-0 flex flex-col justify-center">
          {submitted ? (
            <div className="flex flex-col gap-3 py-4">
              <div className="w-6 h-px bg-brand-gold" />
              <p className="font-heading font-light text-2xl text-brand-offwhite tracking-wide leading-snug">
                On its way.
              </p>
              <p className="font-body font-light text-sm text-brand-midgray tracking-wide leading-relaxed">
                Check your inbox — and your spam folder if you don&rsquo;t see it within a minute.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-midgray">
                Send it to me
              </p>

              {/* Email input */}
              <div className="relative">
                <input
                  id={`email-${resourceKey}`}
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent font-body font-light text-sm text-brand-offwhite
                             placeholder:text-brand-midgray/50 outline-none pb-3 pr-2
                             border-b transition-colors duration-300"
                  style={{
                    borderBottomColor: focused
                      ? 'rgba(201, 160, 53, 0.8)'
                      : 'rgba(201, 160, 53, 0.2)',
                  }}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-brand-gold text-brand-black font-body text-xs uppercase
                           tracking-[0.18em] py-3.5 transition-colors duration-300
                           hover:bg-[#A07C28] active:bg-[#8a6920]"
              >
                Send it to me
              </button>

              <p className="font-body text-[10px] text-brand-midgray/50 tracking-wide leading-relaxed">
                No spam. One email, the resource, done.
              </p>
            </form>
          )}
        </div>
      </div>
    </article>
  )
}
