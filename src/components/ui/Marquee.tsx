import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  reverse?: boolean
  className?: string
}

export function Marquee({ children, reverse = false, className = '' }: MarqueeProps) {
  return (
    <div className={`group relative flex items-center gap-12 overflow-hidden ${className}`}>
      <div
        className="flex shrink-0 animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {children}
      </div>
    </div>
  )
}
