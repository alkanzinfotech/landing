import { Zap } from 'lucide-react'
import { Marquee } from '../ui/Marquee'

const ITEMS = [
  'Video Conferencing',
  'CCTV & Security',
  'Boardroom Design',
  'Structured Cabling',
  'Pan-India Install',
  '24×7 Support',
]

export function TickerBand() {
  return (
    <div className="relative -my-px overflow-hidden bg-gold-500 py-4 sm:py-5" style={{ transform: 'skewY(-1.5deg)' }}>
      <div style={{ transform: 'skewY(1.5deg)' }}>
        <Marquee>
          {ITEMS.map((item) => (
            <span
              key={item}
              className="flex shrink-0 items-center gap-4 font-display text-xl font-semibold uppercase tracking-tight text-ink-900 sm:text-2xl"
            >
              {item}
              <Zap size={18} className="fill-ink-900 text-ink-900" />
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
