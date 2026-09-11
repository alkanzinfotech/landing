import type { LucideIcon } from 'lucide-react'

interface IconTileProps {
  icon: LucideIcon
  tone?: 'navy' | 'gold' | 'signal'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const tones: Record<string, string> = {
  navy: 'from-navy-700 to-navy-900 text-white shadow-[0_10px_30px_-10px_rgba(15,40,86,0.55)]',
  gold: 'from-gold-400 to-gold-600 text-ink-900 shadow-glow',
  signal: 'from-signal-400 to-signal-600 text-ink-900 shadow-signal-glow',
}

const sizes: Record<string, { box: string; icon: number }> = {
  sm: { box: 'h-10 w-10 rounded-xl', icon: 18 },
  md: { box: 'h-12 w-12 rounded-2xl', icon: 22 },
  lg: { box: 'h-14 w-14 rounded-2xl', icon: 26 },
}

export function IconTile({ icon: Icon, tone = 'navy', size = 'md', className = '' }: IconTileProps) {
  const s = sizes[size]
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center bg-gradient-to-br ${tones[tone]} ${s.box} rotate-0 transition-transform duration-500 group-hover:-rotate-6 ${className}`}
    >
      <Icon size={s.icon} strokeWidth={1.8} />
      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white/70" />
    </div>
  )
}
