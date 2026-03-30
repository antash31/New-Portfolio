import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#111111',
        'brand-gold': '#C9A035',
        'brand-offwhite': '#F7F4EF',
        'brand-darkgray': '#2A2A2A',
        'brand-midgray': '#555555',
        'brand-lightgray': '#E8E4DE',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
