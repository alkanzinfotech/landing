import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { PageHero } from '../components/layout/PageHero'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { Magnetic } from '../components/ui/Magnetic'
import { brands, categoryLabels, getBrandBySlug } from '../data/brands'
import { CONTACT } from '../data/content'

export function BrandDetail() {
  const { slug } = useParams<{ slug: string }>()
  const brand = getBrandBySlug(slug ?? '')
  const isYealink = brand?.slug === 'yealink'

  useMeta(
    isYealink ? 'Yealink Distributor Mumbai | MeetingBar A40 & MVC S40' : brand ? brand.name : 'Brand not found',
    isYealink
      ? 'Yealink video conferencing, MeetingBar A40, MVC S40, SmartVision 40, IP phones and Teams Rooms solutions in Mumbai from AlKanz Infotech.'
      : brand?.description ?? 'Browse our authorized brand partners.',
  )

  if (!brand) return <Navigate to="/brands" replace />

  const related = brands.filter((b) => b.category === brand.category && b.slug !== brand.slug).slice(0, 3)

  return (
    <>
      <PageHero
        crumb={brand.name}
        eyebrow={brand.featured ? 'Featured Partner' : 'Authorized Partner'}
        title={
          <span className="flex flex-wrap items-center gap-4">
            {brand.name}
            {brand.featured && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-ink-900">
                <Sparkles size={12} /> Lead Partner
              </span>
            )}
          </span>
        }
        description={brand.tagline}
        seed={brand.slug.length * 7}
      />

      <section className="section-pad">
        <div className="container-app grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal direction="right">
            {brand.heroImage ? (
              <div className="overflow-hidden rounded-[2rem] shadow-card-lg">
                <img src={brand.heroImage} alt={`${brand.name} product line-up`} className="h-56 w-full object-cover sm:h-64" />
                <div className="flex items-center justify-center bg-white p-6">
                  <img src={brand.logo} alt={brand.name} className="max-h-10 max-w-[60%] object-contain" />
                </div>
              </div>
            ) : (
              <div className="rounded-[2rem] border border-ink-900/[0.06] bg-white p-10 shadow-card">
                <img src={brand.logo} alt={brand.name} className="mx-auto max-h-16 max-w-full object-contain" />
              </div>
            )}
            <span className="mt-6 inline-block eyebrow">{categoryLabels[brand.category]}</span>
            <p className="mt-4 text-base leading-relaxed text-ink-700/70">{brand.description}</p>
            <Magnetic>
              <Link to="/contact" className="btn-primary mt-8 w-fit">
                Get a {brand.name} Quote
                <ArrowRight size={16} />
              </Link>
            </Magnetic>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-[2rem] bg-navy-900 p-8 sm:p-10">
              <h3 className="text-lg font-semibold text-white">What we deliver with {brand.name}</h3>
              <StaggerGroup className="mt-6 flex flex-col gap-4">
                {brand.highlights.map((h) => (
                  <StaggerItem key={h}>
                    <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] p-4">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-signal-400" />
                      <span className="text-sm leading-relaxed text-white/75">{h}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </section>

      {isYealink && <YealinkMumbaiContent />}

      {related.length > 0 && (
        <section className="section-pad bg-cream/60">
          <div className="container-app">
            <span className="eyebrow">Related Brands</span>
            <h3 className="mt-3 text-2xl font-semibold">Also in {categoryLabels[brand.category]}</h3>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/brands/${r.slug}`}
                  className="group flex h-32 items-center justify-center rounded-2xl border border-ink-900/[0.06] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
                >
                  <img
                    src={r.logo}
                    alt={r.name}
                    className="max-h-9 max-w-[75%] object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad">
        <div className="container-app">
          <div className="rounded-[2.5rem] bg-navy-900 px-8 py-14 text-center text-white sm:px-16">
            <h2 className="mx-auto max-w-lg text-balance text-3xl font-semibold text-white sm:text-4xl">
              Need {brand.name} products urgently?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/60">
              Contact us directly for immediate assistance — our team can share specs and quotes
              for specific {brand.name} products the same day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <Link to="/contact" className="btn-gold">
                  Contact Our Sales Team
                  <ArrowRight size={16} />
                </Link>
              </Magnetic>
              <Magnetic>
                <a href={CONTACT.phoneHref} className="btn-ghost-light">
                  {CONTACT.phone}
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function YealinkMumbaiContent() {
  const solutions = [
    {
      title: 'Yealink MeetingBar A40',
      copy: 'An all-in-one video bar for premium small and medium meeting rooms, with dual 48MP cameras, intelligent framing and native Microsoft Teams and Zoom Rooms support.',
    },
    {
      title: 'Yealink MVC S40 & SmartVision 40',
      copy: 'The MVC S40 Microsoft Teams Rooms system combines the SmartVision 40 intelligent camera, MCore Pro mini-PC and MTouch console for small-to-medium rooms. “Yealink SV40” searches typically refer to SmartVision 40.',
    },
    {
      title: 'Yealink Voice & Room Devices',
      copy: 'We help businesses select and deploy Yealink IP phones, DECT wireless phones, conference phones, room panels, touch controllers and device-management solutions.',
    },
  ]

  return (
    <section className="section-pad bg-cream/60">
      <div className="container-app">
        <div className="max-w-3xl">
          <span className="eyebrow">Yealink in Mumbai</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Yealink video conferencing solutions for Mumbai businesses
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-700/70">
            Looking for a Yealink distributor in Mumbai or a Yealink partner in Mumbai? AlKanz Infotech helps teams plan, supply, install and support Yealink video conferencing and unified communications systems for boardrooms, huddle rooms and hybrid workplaces.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.title} className="rounded-3xl border border-ink-900/[0.06] bg-white p-7 shadow-card">
              <h3 className="text-lg font-semibold">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/65">{solution.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-ink-900/[0.06] bg-white p-7 sm:p-8">
          <h3 className="text-xl font-semibold">Yealink Mumbai FAQs</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">Can you help with Yealink MeetingBar A40 deployments in Mumbai?</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/65">Yes. We can recommend the right room design, install the MeetingBar A40, configure Teams or Zoom Rooms, and support handover for your IT team.</p>
            </div>
            <div>
              <h4 className="font-semibold">What is Yealink SV40?</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/65">The product is called Yealink SmartVision 40. It is the intelligent all-in-one camera used in the Yealink MVC S40 Microsoft Teams Rooms solution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
