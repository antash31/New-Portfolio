import { cn } from '@/lib/cn'

interface GoldDividerProps {
  /** Width of the divider relative to its container. Defaults to 'full'. */
  width?: 'full' | 'half' | 'quarter' | string
  className?: string
}

const widthMap: Record<string, string> = {
  full:    'w-full',
  half:    'w-1/2',
  quarter: 'w-1/4',
}

export default function GoldDivider({ width = 'full', className }: GoldDividerProps) {
  const widthClass = widthMap[width] ?? undefined
  const widthStyle = widthMap[width] ? undefined : { width }

  return (
    <hr
      aria-hidden="true"
      className={cn(
        'border-none h-px bg-brand-gold opacity-40',
        widthClass,
        className
      )}
      style={widthStyle}
    />
  )
}
