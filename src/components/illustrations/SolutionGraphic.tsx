import { Camera, Network, ShieldCheck, Wifi } from 'lucide-react'
import { NetworkField } from './NetworkField'

const CONFIG = {
  security: { icon: ShieldCheck, seed: 51, accent: 'text-signal-300' },
  network: { icon: Network, seed: 62, accent: 'text-gold-300' },
} as const

export function SolutionGraphic({ variant }: { variant: 'security' | 'network' }) {
  const { icon: Icon, seed, accent } = CONFIG[variant]
  const SecondaryIcon = variant === 'security' ? Camera : Wifi

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0 text-white/[0.16]">
        <NetworkField nodeCount={16} seed={seed} />
      </div>
      <div className={`absolute h-32 w-32 rounded-full ${accent} opacity-20 blur-3xl`} />
      <div className="relative flex items-center gap-4">
        <span className="grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/[0.06] text-white backdrop-blur">
          <Icon size={28} strokeWidth={1.6} />
        </span>
        <span className={`grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] ${accent}`}>
          <SecondaryIcon size={18} strokeWidth={1.8} />
        </span>
      </div>
    </div>
  )
}
