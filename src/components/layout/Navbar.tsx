'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/cn'

const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Resources', href: '/resources' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#111111]/90 backdrop-blur-md border-b border-[rgba(201,160,53,0.2)]'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

          {/* Monogram */}
          <Link
            href="/"
            className="font-heading text-3xl text-brand-gold tracking-widest leading-none hover:opacity-80 transition-opacity duration-300"
            aria-label="Home"
          >
            AS
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'font-body text-xs uppercase tracking-[0.18em] transition-colors duration-300',
                    pathname === href
                      ? 'text-brand-gold'
                      : 'text-brand-offwhite hover:text-brand-gold'
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={cn(
                'block h-px w-6 bg-brand-offwhite transition-all duration-300 origin-center',
                menuOpen && 'rotate-45 translate-y-[7px]'
              )}
            />
            <span
              className={cn(
                'block h-px w-6 bg-brand-offwhite transition-all duration-300',
                menuOpen && 'opacity-0 scale-x-0'
              )}
            />
            <span
              className={cn(
                'block h-px w-6 bg-brand-offwhite transition-all duration-300 origin-center',
                menuOpen && '-rotate-45 -translate-y-[7px]'
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#111111]/97 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-10">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.3, ease: 'easeOut' }}
                >
                  <Link
                    href={href}
                    className={cn(
                      'font-heading text-4xl font-light tracking-widest transition-colors duration-300',
                      pathname === href
                        ? 'text-brand-gold'
                        : 'text-brand-offwhite hover:text-brand-gold'
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Subtle gold accent line */}
            <div className="absolute bottom-16 w-8 h-px bg-brand-gold opacity-50" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
