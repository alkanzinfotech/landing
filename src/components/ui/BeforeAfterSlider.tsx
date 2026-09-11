import { useCallback, useRef, useState } from 'react'

interface BeforeAfterSliderProps {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}: BeforeAfterSliderProps) {
  const [percent, setPercent] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPercent(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }

  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-[2rem] ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <img
        src={after}
        alt={afterLabel}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 h-full w-full"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeLabel}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-ink-900/70 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-white backdrop-blur">
        {beforeLabel}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-gold-500/90 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink-900 backdrop-blur">
        {afterLabel}
      </span>

      <div
        className="absolute inset-y-0 z-10 flex w-0 items-center justify-center"
        style={{ left: `${percent}%` }}
      >
        <div className="h-full w-[2px] bg-white/80" />
        <div className="absolute grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-white shadow-card-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#07152E" strokeWidth="2" strokeLinecap="round">
            <path d="M8 6L2 12L8 18" />
            <path d="M16 6L22 12L16 18" />
          </svg>
        </div>
      </div>
    </div>
  )
}
