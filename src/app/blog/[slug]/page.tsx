import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { mdxComponents } from '@/components/ui/MDXComponents'
import { articleJsonLd } from '@/lib/jsonld'
import { SITE_URL } from '@/lib/constants'
import Reveal from '@/components/ui/Reveal'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }

  const url = `${SITE_URL}/blog/${params.slug}`

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: 'article',
      url,
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
      ...(post.frontmatter.coverImage && {
        images: [{ url: post.frontmatter.coverImage }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
    },
  }
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd(post.frontmatter, post.slug, post.readingTime)
          ),
        }}
      />
      {/* ── Post header ───────────────────────────── */}
      <header className="pt-36 pb-10 md:pt-44 md:pb-14 max-w-[680px] mx-auto px-6">
        <Reveal>
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.18em] text-brand-midgray/70 hover:text-brand-gold transition-colors duration-300 mb-12 group"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">
              &larr;
            </span>
            All Posts
          </Link>

          {/* Tag + date line */}
          <div className="flex items-center gap-3 flex-wrap font-body text-[11px] uppercase tracking-[0.18em] text-brand-midgray mb-5">
            {post.frontmatter.tags.length > 0 && (
              <>
                <span className="text-brand-gold/70">{post.frontmatter.tags[0]}</span>
                <span className="text-brand-gold/25">/</span>
              </>
            )}
            <time dateTime={post.frontmatter.date}>
              {formatDate(post.frontmatter.date)}
            </time>
          </div>

          {/* Title */}
          <h1 className="font-heading font-light text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] leading-[1.06] tracking-[0.015em] text-brand-offwhite">
            {post.frontmatter.title}
          </h1>

          {/* Reading time */}
          <p className="mt-5 font-body text-[11px] uppercase tracking-[0.18em] text-brand-midgray/60">
            {post.readingTime}
          </p>

          {/* Gold rule */}
          <div className="mt-10 w-12 h-px bg-brand-gold/50" />
        </Reveal>
      </header>

      {/* ── Article body ──────────────────────────── */}
      <article className="max-w-[680px] mx-auto px-6 pb-20 md:pb-28">
        <Reveal>
          <MDXRemote source={post.content} components={mdxComponents} />
        </Reveal>
      </article>

      {/* ── Post footer ───────────────────────────── */}
      <footer className="max-w-[680px] mx-auto px-6 pb-28 md:pb-36">
        <Reveal>
          <div className="h-px bg-brand-gold/15 mb-12" />

          {/* Tags */}
          {post.frontmatter.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap mb-10">
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-[10px] uppercase tracking-[0.2em] text-brand-gold/50
                             border border-brand-gold/15 px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* More posts link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-brand-gold
                       tracking-wide group transition-colors duration-300 hover:text-brand-gold/80"
          >
            More Posts
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </Reveal>
      </footer>
    </div>
  )
}
