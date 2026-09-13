import { Link } from 'react-router-dom'
import { ArrowRight, Award, Compass, FileCheck2, ShieldCheck, Target, Users2 } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { PageHero } from '../components/layout/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { IconTile } from '../components/ui/IconTile'
import { Magnetic } from '../components/ui/Magnetic'
import { TiltCard } from '../components/ui/TiltCard'
import { CredentialPanel } from '../components/illustrations/CredentialPanel'

const OPERATIONS = [
  {
    icon: FileCheck2,
    title: 'Methodology',
    description: 'Consult → Design → PoC → Deploy → Train → Support. Clear documentation & SLAs.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    description: 'Electrical safety, fire norms, structured cabling standards and IT policies.',
  },
  {
    icon: Users2,
    title: 'Partnerships',
    description: 'Tier-1 OEM tie-ups ensure genuine parts, warranties and escalations.',
  },
]

export function About() {
  useMeta(
    'About Us',
    'AlKanz Infotech is an IT & AV integrator delivering reliable meeting-room experiences — design, supply, installation, programming and training.',
  )

  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About AlKanz Infotech"
        title="IT & AV integrators who obsess over reliability"
        description="From design to commissioning, our certified team handles everything: surveys, drawings, supply, installation, programming and training."
        seed={22}
      />

      <section className="section-pad">
        <div className="container-app grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Meeting rooms that just work</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-700/70">
              We are an IT &amp; AV integration company delivering reliable meeting experiences.
              Every engagement starts with understanding how your teams actually collaborate, then
              we design a system around that — not the other way around.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '20+', label: 'Rooms Delivered' },
                { value: '1 yr', label: 'Industry Experience' },
                { value: '10×6', label: 'Support' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-ink-900/[0.06] bg-white p-5 text-center shadow-card">
                  <p className="font-display text-2xl font-semibold text-navy-800">{s.value}</p>
                  <p className="mt-1 text-xs text-ink-700/55">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <CredentialPanel />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-navy-900 text-white">
        <div className="container-app">
          <SectionHeading eyebrow="Our Purpose" title="Mission & Vision" light />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal direction="up">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <IconTile icon={Target} tone="gold" size="lg" />
                <h3 className="mt-6 text-xl font-semibold text-white">Our Mission</h3>
                <p className="mt-3 text-white/60 leading-relaxed">
                  To transform business communication through innovative IT &amp; AV solutions
                  that are reliable, intuitive, and seamlessly integrated into our clients&apos;
                  workflows.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <IconTile icon={Compass} tone="signal" size="lg" />
                <h3 className="mt-6 text-xl font-semibold text-white">Our Vision</h3>
                <p className="mt-3 text-white/60 leading-relaxed">
                  To become the leading provider of integrated meeting experiences, setting new
                  standards for reliability, user experience and customer satisfaction in the IT
                  &amp; AV industry.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-app">
          <SectionHeading eyebrow="How We Operate" title="Process, compliance, partnerships" />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-3">
            {OPERATIONS.map((o) => (
              <StaggerItem key={o.title}>
                <TiltCard className="group h-full">
                  <div className="h-full rounded-3xl border border-ink-900/[0.06] bg-white p-7 shadow-card transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-card-lg">
                    <IconTile icon={o.icon} tone="navy" />
                    <h3 className="mt-6 text-lg font-semibold">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700/65">{o.description}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-cream/60">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-10 text-center shadow-card-lg sm:p-16">
            <IconTile icon={Award} tone="gold" size="lg" className="mx-auto" />
            <h2 className="mx-auto mt-6 max-w-lg text-balance text-3xl font-semibold sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ink-700/65">
              Tell us about your space and requirements — we&apos;ll get back within 24 hours with
              next steps.
            </p>
            <Magnetic>
              <Link to="/contact" className="btn-primary mx-auto mt-8 w-fit">
                Talk to Our Team
                <ArrowRight size={16} />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  )
}
