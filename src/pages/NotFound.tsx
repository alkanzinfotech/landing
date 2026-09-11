import { Link } from 'react-router-dom'
import { ArrowRight, RadioTower } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { NetworkField } from '../components/illustrations/NetworkField'
import { Reveal } from '../components/ui/Reveal'
import { SplitReveal } from '../components/ui/SplitReveal'
import { Magnetic } from '../components/ui/Magnetic'

export function NotFound() {
  useMeta('Page Not Found', 'The page you are looking for could not be found.')

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-900 pt-24 text-white">
      <div className="absolute inset-0 text-white/[0.14]">
        <NetworkField nodeCount={24} seed={404} />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[16rem] font-bold leading-none text-white/[0.04] sm:text-[24rem]"
      >
        404
      </span>

      <div className="container-app relative text-center">
        <Reveal>
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gold-500/15 text-gold-400">
            <RadioTower size={28} />
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-gold-400/80">Signal Lost — 404</p>
        </Reveal>
        <h1 className="mx-auto mt-4 max-w-lg text-balance text-4xl font-semibold text-white sm:text-5xl">
          <SplitReveal text="This room isn't wired up yet" delay={0.2} />
        </h1>
        <Reveal delay={0.7}>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            The page you&apos;re looking for has moved or never existed. Let&apos;s get you back to
            a live connection.
          </p>
        </Reveal>
        <Reveal delay={0.8}>
          <Magnetic>
            <Link to="/" className="btn-gold mx-auto mt-8">
              Back to Home
              <ArrowRight size={16} />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}
