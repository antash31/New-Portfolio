import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Resources', href: '/resources' },
]

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/antashshrivastava',
    Icon: LinkedInIcon,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@antashshrivastava',
    Icon: YouTubeIcon,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] border-t border-[rgba(201,160,53,0.15)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Left — identity */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-2xl font-light text-brand-offwhite tracking-wide">
              Antash Shrivastava
            </span>
            <p className="font-body text-sm font-light text-brand-midgray leading-relaxed tracking-wide">
              Executing like a team of one.
            </p>
          </div>

          {/* Center — nav */}
          <div className="flex flex-col gap-4 md:items-center">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-brand-midgray mb-1">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm font-light text-brand-offwhite/70 hover:text-brand-gold tracking-wide transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — social */}
          <div className="flex flex-col gap-4 md:items-end">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-brand-midgray mb-1">
              Connect
            </p>
            <ul className="flex flex-col gap-4">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-brand-offwhite/60 hover:text-brand-gold transition-colors duration-300 group"
                    aria-label={label}
                  >
                    <span className="transition-colors duration-300">
                      <Icon />
                    </span>
                    <span className="font-body text-sm font-light tracking-wide">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 mb-6 h-px bg-[rgba(201,160,53,0.1)]" />

        {/* Copyright */}
        <p className="font-body text-xs font-light text-brand-midgray tracking-wide">
          &copy; {year} Antash Shrivastava. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
