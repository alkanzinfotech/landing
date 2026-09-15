import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Globe, Smartphone, Terminal } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { PageHero } from '../components/layout/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { IconTile } from '../components/ui/IconTile'
import { TiltCard } from '../components/ui/TiltCard'
import { Magnetic } from '../components/ui/Magnetic'
import { ConnectorLine } from '../components/illustrations/ConnectorLine'
import { DEV_PROCESS, DEV_SERVICES, DEV_WHY_US } from '../data/content'

const serviceIcons = { website: Globe, software: Terminal, app: Smartphone }

export function Development() {
  useMeta(
    'Website, Software & App Development',
    'AlKanz Infotech also designs and builds custom websites, business software and mobile apps — one team, from first prototype to launch and support.',
  )

  return (
    <>
      <PageHero
        crumb="Development"
        eyebrow="Digital Services"
        title="Website, Software & App Development"
        description="Beyond AV and security integration, our development team designs and builds custom websites, business software and mobile apps — built to fit how your business actually works."
        seed={88}
      />

      <section className="section-pad">
        <div className="container-app">
          <SectionHeading
            eyebrow="What We Build"
            title="Three services, one team"
            description="Whether you need a public-facing site, an internal tool, or an app for your customers, we design and build it end-to-end."
          />

          <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
            {DEV_SERVICES.map((s) => {
              const Icon = serviceIcons[s.icon]
              return (
                <StaggerItem key={s.slug}>
                  <TiltCard className="group h-full">
                    <div className="h-full rounded-3xl border border-ink-900/[0.06] bg-white p-7 shadow-card transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-card-lg">
                      <IconTile icon={Icon} tone="navy" />
                      <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-700/65">{s.description}</p>
                      <ul className="mt-5 flex flex-col gap-2.5 border-t border-ink-900/[0.06] pt-5">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-ink-700/75">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-signal-500" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-cream/60">
        <div className="container-app">
          <SectionHeading
            eyebrow="How We Work"
            title="From first call to launch, in five steps"
            description="A clear process with regular check-ins — you always know what's happening and what's next."
          />

          <div className="relative mt-16">
            <ConnectorLine className="!top-8" />
            <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {DEV_PROCESS.map((p) => (
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

      <section className="section-pad bg-navy-900 text-white">
        <div className="container-app">
          <SectionHeading eyebrow="Why Work With Us" title="Development, run the way we run AV" light />

          <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2">
            {DEV_WHY_US.map((w) => (
              <StaggerItem key={w.title}>
                <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-signal-400/20 text-signal-300">
                    <CheckCircle2 size={14} />
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

      <section className="section-pad">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-cream/70 p-10 text-center sm:p-16">
            <span className="eyebrow mx-auto w-fit">Have a Project in Mind?</span>
            <h2 className="mx-auto mt-4 max-w-lg text-balance text-3xl font-semibold sm:text-4xl">
              Let's talk about what you're building
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ink-700/65">
              Tell us about your website, software or app idea — we'll get back within 24 hours
              with next steps.
            </p>
            <Magnetic>
              <Link to="/contact" className="btn-primary mx-auto mt-8 w-fit">
                Start a Project
                <ArrowRight size={16} />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  )
}
