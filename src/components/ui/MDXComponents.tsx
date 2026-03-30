import type { MDXComponents as MDXComponentsType } from 'mdx/types'

export const mdxComponents: MDXComponentsType = {
  h1: ({ children, ...props }) => (
    <h1
      className="font-heading font-light text-4xl md:text-5xl tracking-[0.03em] text-brand-offwhite leading-[1.1] mt-16 mb-6 first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ children, ...props }) => (
    <h2
      className="font-heading font-light text-3xl md:text-4xl tracking-[0.02em] text-brand-offwhite leading-[1.15] mt-14 mb-5 pl-5 border-l-2 border-brand-gold"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }) => (
    <h3
      className="font-heading font-light text-2xl md:text-3xl tracking-wide text-brand-offwhite leading-snug mt-10 mb-4"
      {...props}
    >
      {children}
    </h3>
  ),

  h4: ({ children, ...props }) => (
    <h4
      className="font-heading font-light text-xl md:text-2xl tracking-wide text-brand-offwhite leading-snug mt-8 mb-3"
      {...props}
    >
      {children}
    </h4>
  ),

  p: ({ children, ...props }) => (
    <p
      className="font-body font-light text-[0.95rem] md:text-base text-brand-offwhite/75 leading-[1.9] tracking-wide mb-5"
      {...props}
    >
      {children}
    </p>
  ),

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-8 pl-6 md:pl-8 border-l-2 border-brand-gold/60 [&>p]:font-heading [&>p]:font-light [&>p]:italic [&>p]:text-xl [&>p]:md:text-2xl [&>p]:text-brand-offwhite/90 [&>p]:leading-[1.4] [&>p]:tracking-wide [&>p]:mb-0"
      {...props}
    >
      {children}
    </blockquote>
  ),

  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-brand-gold border-b border-transparent hover:border-brand-gold/50 transition-all duration-300"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  ul: ({ children, ...props }) => (
    <ul
      className="font-body font-light text-[0.95rem] md:text-base text-brand-offwhite/75 leading-[1.9] tracking-wide mb-5 pl-5 space-y-2 list-disc marker:text-brand-gold/50"
      {...props}
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol
      className="font-body font-light text-[0.95rem] md:text-base text-brand-offwhite/75 leading-[1.9] tracking-wide mb-5 pl-5 space-y-2 list-decimal marker:text-brand-gold/50"
      {...props}
    >
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li className="pl-1" {...props}>
      {children}
    </li>
  ),

  strong: ({ children, ...props }) => (
    <strong className="font-medium text-brand-offwhite" {...props}>
      {children}
    </strong>
  ),

  em: ({ children, ...props }) => (
    <em className="italic text-brand-offwhite/85" {...props}>
      {children}
    </em>
  ),

  code: ({ children, className, ...props }) => {
    // Inline code (no language class from rehype-pretty-code)
    if (!className) {
      return (
        <code
          className="bg-[#1A1A1A] text-brand-gold px-1.5 py-0.5 text-[0.85em] font-mono rounded-sm"
          {...props}
        >
          {children}
        </code>
      )
    }
    // Code blocks (pre > code) — styled by rehype-pretty-code, we pass through
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },

  pre: ({ children, ...props }) => (
    <pre
      className="my-8 p-5 bg-[#0D0D0D] border border-brand-gold/10 overflow-x-auto text-sm leading-relaxed font-mono rounded-sm [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit"
      {...props}
    >
      {children}
    </pre>
  ),

  hr: (props) => (
    <hr
      className="my-12 border-none h-px bg-brand-gold/30"
      aria-hidden="true"
      {...props}
    />
  ),

  img: ({ alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-8 w-full rounded-sm"
      alt={alt ?? ''}
      loading="lazy"
      {...props}
    />
  ),
}
