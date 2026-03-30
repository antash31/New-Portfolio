'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Delay in seconds before animation starts */
  delay?: number
  /** Vertical travel distance in px */
  y?: number
  className?: string
  /** Viewport threshold to trigger (0–1) */
  threshold?: number
}

const variants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  visible: { opacity: 1, y: 0 },
}

export default function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  threshold = 0.15,
}: RevealProps) {
  return (
    <motion.div
      custom={y}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
