import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { PageHero } from '../components/layout/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider'
import { Magnetic } from '../components/ui/Magnetic'
import { TiltCard } from '../components/ui/TiltCard'
import { SolutionGraphic } from '../components/illustrations/SolutionGraphic'
import { SOLUTIONS } from '../data/content'

export function Solutions() {
  useMeta(
    'Solutions',
    'Audio-visual and security solutions tailored to your space — meeting rooms, auditoriums, training rooms, huddle spaces, CCTV and network infrastructure.',
  )

  return (
    <>
      <PageHero
        crumb="Solutions"
        eyebrow="What We Build"
        title="Our Solutions"
        description="Comprehensive audio-visual and security solutions tailored to your specific needs and environment."
        seed={33}
      />

      <section className="section-pad">
        <div className="container-app">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s) => (
              <StaggerItem key={s.slug}>
                <TiltCard className="group h-full">
                  <div className="h-full overflow-hidden rounded-3xl border border-ink-900/[0.06] bg-white shadow-card transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-card-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {s.graphic ? (
                      <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                        <SolutionGraphic variant={s.graphic} />
                      </div>
                    ) : (
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-navy-800 backdrop-blur">
                      {s.badge}
                    </span>
                    <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-gold-500 text-ink-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700/65">{s.description}</p>
                  </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-center text-white sm:py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Real Transformation"
            title="Room Designs"
            description="Explore the transformation we deliver — drag the handle to compare a room before and after our team redesigns it."
            light
          />
        </div>

        <Reveal className="container-app mt-14">
          <BeforeAfterSlider
            before="/images/solutions/before.webp"
            after="/images/solutions/after.webp"
            className="shadow-card-lg"
          />
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-cream/70 p-10 text-center sm:p-16">
            <span className="eyebrow mx-auto w-fit">Not Sure Where to Start?</span>
            <h2 className="mx-auto mt-4 max-w-lg text-balance text-3xl font-semibold sm:text-4xl">
              Get a free room assessment
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ink-700/65">
              Share your room dimensions and use-case — we&apos;ll recommend the right solution and
              a clear quote.
            </p>
            <Magnetic>
              <Link to="/contact" className="btn-primary mx-auto mt-8 w-fit">
                Request an Assessment
                <ArrowRight size={16} />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  )
}
