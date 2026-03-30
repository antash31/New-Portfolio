'use client'

import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import GoldDivider from '@/components/ui/GoldDivider'
import type { BlogPost } from '@/lib/mdx'

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function LatestPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null

  return (
    <section className="py-28 md:py-36 border-t border-brand-gold/10">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-heading font-light text-4xl md:text-5xl tracking-wide mb-16">
            From the Blog
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="py-8 flex flex-col gap-3">
                  {/* Meta */}
                  <div className="flex items-center gap-3 font-body text-xs text-brand-midgray tracking-wide">
                    <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
                    <span className="text-brand-gold/40">&middot;</span>
                    <span>{post.readingTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-light text-2xl md:text-3xl tracking-wide
                                 text-brand-offwhite group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                    {post.frontmatter.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-body font-light text-sm text-brand-midgray leading-relaxed tracking-wide line-clamp-2">
                    {post.frontmatter.excerpt}
                  </p>
                </article>
              </Link>

              {/* Divider between posts */}
              {i < posts.length - 1 && (
                <GoldDivider className="opacity-20" />
              )}
            </Reveal>
          ))}
        </div>

        {/* View all */}
        <Reveal delay={0.3}>
          <div className="mt-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-body text-sm text-brand-gold
                         tracking-wide group transition-colors duration-300 hover:text-brand-gold/80"
            >
              View all posts
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
