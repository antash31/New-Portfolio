import { getAllPosts } from '@/lib/mdx'
import { personJsonLd } from '@/lib/jsonld'
import HeroSection from '@/components/home/HeroSection'
import AboutStrip from '@/components/home/AboutStrip'
import PillarsSection from '@/components/home/PillarsSection'
import LatestPosts from '@/components/home/LatestPosts'

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <HeroSection />
      <AboutStrip />
      <PillarsSection />
      <LatestPosts posts={posts} />
    </>
  )
}
