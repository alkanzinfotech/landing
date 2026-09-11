import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SplitReveal } from '../ui/SplitReveal'
import { NetworkField } from '../illustrations/NetworkField'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  crumb: string
  seed?: number
}

export function PageHero({ eyebrow, title, description, crumb, seed = 12 }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-navy-900 pb-24 pt-36 sm:pb-28 sm:pt-44"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}
    >
      <div className="absolute inset-0 text-white/[0.12]">
        <NetworkField nodeCount={20} seed={seed} />
      </div>
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-[100px]" />

      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-2 select-none text-right font-display text-[6rem] font-bold leading-none text-white/[0.04] sm:text-[9rem]"
        style={{ transform: 'rotate(4deg)' }}
      >
        {crumb}
      </span>

      <div className="container-app relative max-w-3xl">
        <Reveal>
          <div className="mb-5 flex items-center gap-1.5 font-mono text-xs text-white/40">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{crumb}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <span className="eyebrow eyebrow-light">{eyebrow}</span>
        </Reveal>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
          {typeof title === 'string' ? <SplitReveal text={title} delay={0.12} /> : title}
        </h1>
        {description && (
          <Reveal delay={0.4}>
            <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-white/60">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
