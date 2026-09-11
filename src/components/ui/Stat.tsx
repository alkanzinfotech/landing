import { useCountUp } from '../../hooks/useCountUp'

interface StatProps {
  value: number
  suffix?: string
  label: string
  light?: boolean
}

export function Stat({ value, suffix = '', label, light = false }: StatProps) {
  const { ref, value: current } = useCountUp(value)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col gap-1">
      <span
        className={`font-display text-3xl sm:text-4xl font-semibold tabular-nums ${
          light ? 'text-white' : 'text-ink-900'
        }`}
      >
        {current}
        <span className="text-gold-500">{suffix}</span>
      </span>
      <span className={`text-xs sm:text-sm font-medium uppercase tracking-wide ${light ? 'text-white/55' : 'text-ink-700/55'}`}>
        {label}
      </span>
    </div>
  )
}
