import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from './constants'
import type { PostFrontmatter } from './mdx'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    jobTitle: 'Founder & AI Systems Builder',
    sameAs: [
      'https://linkedin.com/in/antashshrivastava',
      'https://youtube.com/@antashshrivastava',
    ],
  }
}

export function articleJsonLd(
  frontmatter: PostFrontmatter,
  slug: string,
  readingTime: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.date,
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/blog/${slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    ...(frontmatter.coverImage && { image: frontmatter.coverImage }),
    keywords: frontmatter.tags.join(', '),
    wordCount: readingTime,
  }
}
