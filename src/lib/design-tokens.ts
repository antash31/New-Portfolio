/**
 * Design tokens — single source of truth.
 * Mirrors the CSS custom properties in globals.css so tokens
 * can be consumed in JS/TS (e.g. Framer Motion, canvas, tests).
 */

export const colors = {
  black:     '#111111',
  gold:      '#C9A035',
  goldDim:   '#A07C28',
  offwhite:  '#F7F4EF',
  darkgray:  '#2A2A2A',
  midgray:   '#555555',
  lightgray: '#E8E4DE',
  white:     '#FFFFFF',
} as const

export const fonts = {
  heading: "'Cormorant Garamond', Georgia, serif",
  body:    "'Outfit', system-ui, sans-serif",
} as const

/** Spacing scale in rem — matches CSS --space-* tokens */
export const space = {
  1:  '0.25rem',
  2:  '0.5rem',
  3:  '0.75rem',
  4:  '1rem',
  5:  '1.25rem',
  6:  '1.5rem',
  8:  '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
} as const

/** Type scale in rem — matches CSS --text-* tokens */
export const text = {
  xs:   '0.75rem',
  sm:   '0.875rem',
  base: '1rem',
  lg:   '1.125rem',
  xl:   '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
} as const

export const transitions = {
  default: '0.2s ease',
  smooth:  '0.35s cubic-bezier(0.4, 0, 0.2, 1)',
} as const

export type ColorToken    = keyof typeof colors
export type SpaceToken    = keyof typeof space
export type TextSizeToken = keyof typeof text
