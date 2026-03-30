import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import Reveal from '@/components/ui/Reveal'
import PostList from '@/components/blog/PostList'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Essays on AI systems, solo founding, and building in public.',
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────── */}
      <section className="pt-40 pb-10 md:pt-48 md:pb-14 max-w-4xl mx-auto px-6 md:px-10">
        <Reveal>
          <h1 className="font-heading font-light text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] leading-[1.0] tracking-[0.02em] text-brand-offwhite">
            Writing.
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 font-body font-light text-base md:text-lg text-brand-offwhite/50 tracking-wide leading-relaxed max-w-lg">
            Thinking out loud so you don&rsquo;t have to figure it out alone.
          </p>
        </Reveal>

        {/* Decorative rule */}
        <Reveal delay={0.25}>
          <div className="mt-10 w-16 h-px bg-brand-gold opacity-50" />
        </Reveal>
      </section>

      {/* ── Posts ──────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 pb-28 md:pb-36">
        <PostList posts={posts} />
      </section>
    </div>
  )
}
