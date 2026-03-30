'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'
import GoldDivider from '@/components/ui/GoldDivider'
import type { BlogPost } from '@/lib/mdx'

const FILTER_TAGS = ['All', 'AI', 'Mindset', 'Build in Public'] as const

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function matchesFilter(post: BlogPost, filter: string): boolean {
  if (filter === 'All') return true
  return post.frontmatter.tags.some(
    (t) => t.toLowerCase() === filter.toLowerCase()
  )
}

export default function PostList({ posts }: { posts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const filtered = posts.filter((p) => matchesFilter(p, activeFilter))

  return (
    <>
      {/* ── Filter bar ────────────────────────────── */}
      <div className="flex items-center gap-3 flex-wrap mb-14">
        {FILTER_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={cn(
              'font-body text-[11px] uppercase tracking-[0.18em] px-4 py-2 border transition-all duration-300',
              activeFilter === tag
                ? 'border-brand-gold text-brand-gold'
                : 'border-brand-offwhite/10 text-brand-midgray hover:border-brand-offwhite/25 hover:text-brand-offwhite/70'
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Post list ─────────────────────────────── */}
      <div className="flex flex-col">
        <AnimatePresence mode="popLayout">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="py-9 flex flex-col gap-3">
                  {/* Date */}
                  <time
                    dateTime={post.frontmatter.date}
                    className="font-body text-[11px] uppercase tracking-[0.15em] text-brand-midgray"
                  >
                    {formatDate(post.frontmatter.date)}
                  </time>

                  {/* Title */}
                  <h2 className="font-heading font-light text-[1.65rem] md:text-[2rem] tracking-wide text-brand-offwhite group-hover:text-brand-gold transition-colors duration-300 leading-[1.15]">
                    {post.frontmatter.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-body font-light text-sm text-brand-offwhite/50 leading-relaxed tracking-wide line-clamp-2 max-w-2xl">
                    {post.frontmatter.excerpt}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center gap-3 flex-wrap font-body text-[10px] uppercase tracking-[0.18em] text-brand-midgray/70 mt-1">
                    <span>{post.readingTime}</span>
                    {post.frontmatter.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-3">
                        <span className="text-brand-gold/30">&middot;</span>
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </article>
              </Link>

              {i < filtered.length - 1 && <GoldDivider className="opacity-15" />}
            </motion.div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="font-body font-light text-sm text-brand-midgray/60 tracking-wide py-16 text-center">
            No posts match this filter yet.
          </p>
        )}
      </div>
    </>
  )
}
