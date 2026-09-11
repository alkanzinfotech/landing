import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { NetworkField } from '../components/illustrations/NetworkField'
import { Reveal } from '../components/ui/Reveal'
import { SplitReveal } from '../components/ui/SplitReveal'
import { Magnetic } from '../components/ui/Magnetic'
import { CONTACT } from '../data/content'

export function ThankYou() {
  useMeta('Thank You', 'Your message has been received — AlKanz Infotech will be in touch shortly.')

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-900 pt-24 text-white">
      <div className="absolute inset-0 text-white/[0.14]">
        <NetworkField nodeCount={24} seed={77} />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[8rem] font-bold leading-none text-white/[0.04] sm:text-[13rem]"
      >
        THANKS
      </span>

      <div className="container-app relative text-center">
        <Reveal>
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-signal-500 text-ink-900">
            <CheckCircle2 size={28} />
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-gold-400/80">Message Received</p>
        </Reveal>
        <h1 className="mx-auto mt-4 max-w-lg text-balance text-4xl font-semibold text-white sm:text-5xl">
          <SplitReveal text="Thanks — we're on it" delay={0.2} />
        </h1>
        <Reveal delay={0.7}>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            Your enquiry has been sent straight to our engineering team. We reply to every
            message within 24 hours — sooner if it's urgent.
          </p>
        </Reveal>
        <Reveal delay={0.8}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link to="/" className="btn-gold">
                Back to Home
                <ArrowRight size={16} />
              </Link>
            </Magnetic>
            <Magnetic>
              <a href={CONTACT.phoneHref} className="btn-ghost-light">
                <Phone size={15} />
                {CONTACT.phone}
              </a>
            </Magnetic>
          </div>
        </Reveal>
        <Reveal delay={0.9}>
          <div className="mx-auto mt-12 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50">
            <Link to="/solutions" className="link-underline hover:text-white">Browse Solutions</Link>
            <Link to="/brands" className="link-underline hover:text-white">Our Brands</Link>
            <Link to="/configurator" className="link-underline hover:text-white">Room Configurator</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
