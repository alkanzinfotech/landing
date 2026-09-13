import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Camera,
  GraduationCap,
  Hotel,
  Landmark,
  MonitorPlay,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Speaker,
} from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { CONTACT, FEATURES, PROCESS, SECTORS, STATS, WHY_US } from '../data/content'
import { brands } from '../data/brands'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { Stat } from '../components/ui/Stat'
import { IconTile } from '../components/ui/IconTile'
import { Marquee } from '../components/ui/Marquee'
import { Magnetic } from '../components/ui/Magnetic'
import { TiltCard } from '../components/ui/TiltCard'
import { SplitReveal } from '../components/ui/SplitReveal'
import { NetworkField } from '../components/illustrations/NetworkField'
import { HeroPanel } from '../components/illustrations/HeroPanel'
import { ConnectorLine } from '../components/illustrations/ConnectorLine'
import { TickerBand } from '../components/illustrations/TickerBand'

const featureIcons = { camera: Camera, display: MonitorPlay, audio: Speaker, shield: ShieldCheck }
const sectorIcons = {
  corporate: Building2,
  education: GraduationCap,
  healthcare: ShieldCheck,
  public: Landmark,
  retail: ShoppingBag,
  residential: Hotel,
}

export function Home() {
  useMeta(
    'AV, Conferencing & Security Integrators',
    'AlKanz Infotech designs, supplies and installs professional audio-visual, video conferencing and CCTV security systems across India.',
  )

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section
        className="relative overflow-hidden bg-navy-900 pb-32 pt-40 sm:pb-40 sm:pt-48"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 96%, 0 100%)' }}
      >
        <div className="absolute inset-0 text-white/[0.14]">
          <NetworkField nodeCount={30} seed={3} />
        </div>
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-40 h-[420px] w-[420px] rounded-full bg-signal-500/10 blur-[120px]" />

        <span
          aria-hidden
          className="pointer-events-none absolute -left-10 top-6 hidden select-none font-display text-[9rem] font-bold leading-none text-white/[0.03] sm:block sm:text-[13rem]"
          style={{ transform: 'rotate(-6deg)' }}
        >
          SIGNAL
        </span>

        <div className="container-app relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <Reveal>
              <span className="eyebrow eyebrow-light">Conference · Collaboration · Security</span>
            </Reveal>
            <h1 className="mt-5 max-w-xl text-balance text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-[4.1rem]">
              <SplitReveal text="Meeting rooms engineered like a" delay={0.15} />{' '}
              <SplitReveal
                text="signal chain,"
                delay={0.15 + 5 * 0.06}
                wordClassName="bg-gradient-to-r from-gold-300 via-gold-400 to-signal-300 bg-clip-text text-transparent"
              />{' '}
              <SplitReveal text="not a shopping list" delay={0.15 + 7 * 0.06} />
            </h1>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-white/65">
              End-to-end design, supply and installation for huddle spaces, boardrooms,
              auditoriums and training rooms — built by certified engineers, backed pan-India.
            </p>

            <Reveal delay={0.8}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link to="/contact" className="btn-gold">
                    Get a Free Site Visit
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
              <div className="mt-14 grid max-w-md grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
                {STATS.map((s) => (
                  <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} light />
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.3}>
            <HeroPanel />
          </Reveal>
        </div>
      </section>

      <TickerBand />

      {/* ---------------- FEATURES ---------------- */}
      <section className="section-pad">
        <div className="container-app">
          <SectionHeading
            eyebrow="What We Do"
            title="Everything a modern meeting room needs"
            description="From a single huddle room to a fully wired campus, we design, supply and support every layer of the system."
          />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => {
              const Icon = featureIcons[f.icon]
              return (
                <StaggerItem key={f.title}>
                  <TiltCard className="group h-full">
                    <div className="h-full rounded-3xl border border-ink-900/[0.06] bg-white p-7 shadow-card transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-card-lg">
                      <IconTile icon={Icon} tone="navy" />
                      <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-700/65">{f.description}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------------- SECTORS ---------------- */}
      <section className="section-pad bg-cream/60">
        <div className="container-app">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Solutions tailored to your sector"
            description="Every industry meets differently. We adapt hardware, acoustics and workflow to how your teams actually work."
          />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => {
              const Icon = sectorIcons[s.icon]
              return (
                <StaggerItem key={s.name}>
                  <div className="group flex h-full items-start gap-4 rounded-3xl border border-ink-900/[0.06] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <IconTile icon={Icon} tone="gold" size="sm" />
                    <div>
                      <h4 className="text-base font-semibold">{s.name}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-700/65">{s.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="section-pad">
        <div className="container-app">
          <SectionHeading
            eyebrow="How We Work"
            title="End-to-end AV integration, in five steps"
            description="A clear process from first call to ongoing support — no surprises, no guesswork."
          />

          <div className="relative mt-16">
            <ConnectorLine className="!top-8" />
            <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {PROCESS.map((p) => (
                <StaggerItem key={p.num}>
                  <div className="relative flex flex-col items-start">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-navy-900 font-mono text-lg font-semibold text-gold-400 shadow-card-lg">
                      {p.num}
                    </span>
                    <h4 className="mt-5 text-base font-semibold">{p.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-700/65">{p.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="section-pad bg-navy-900 text-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="Built for reliability, not just installs"
            light
          />

          <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w) => (
              <StaggerItem key={w.title}>
                <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-signal-400/20 text-signal-300">
                    <ShieldCheck size={14} />
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-white">{w.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">{w.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------------- BRAND MARQUEE ---------------- */}
      <section className="border-y border-ink-900/[0.06] bg-white py-14">
        <div className="container-app mb-8 flex flex-col items-center gap-2 text-center">
          <span className="eyebrow">Authorized Partners</span>
          <h3 className="text-2xl font-semibold">18+ leading brands, one point of contact</h3>
        </div>
        <Marquee>
          {[...brands, ...brands.slice(0, 6)].map((b, i) => (
            <Link
              key={`${b.slug}-${i}`}
              to={`/brands/${b.slug}`}
              className="flex h-16 w-36 shrink-0 items-center justify-center rounded-xl border border-ink-900/[0.06] bg-white px-4 opacity-60 transition-all hover:opacity-100 hover:shadow-card"
            >
              <img src={b.logo} alt={b.name} className="max-h-8 max-w-full object-contain" loading="lazy" decoding="async" />
            </Link>
          ))}
        </Marquee>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section-pad">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-900 px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 text-white/[0.12]">
              <NetworkField nodeCount={18} seed={99} />
            </div>
            <div className="relative">
              <span className="eyebrow eyebrow-light">Let's Build Your Room</span>
              <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-semibold text-white sm:text-4xl">
                Ready to upgrade your meeting rooms?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-balance text-white/60">
                Book a free site visit and get a tailored recommendation from our engineering team
                within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Magnetic>
                  <Link to="/contact" className="btn-gold">
                    Get a Free Site Visit
                    <ArrowRight size={16} />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a href={CONTACT.phoneHref} className="btn-ghost-light">
                    <Phone size={15} />
                    Call {CONTACT.phone}
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
