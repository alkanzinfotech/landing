import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Award, BadgeCheck, TrendingUp } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { PageHero } from '../components/layout/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { IconTile } from '../components/ui/IconTile'
import { brands, categoryLabels, type BrandCategory } from '../data/brands'

const CATEGORIES: (BrandCategory | 'all')[] = [
  'all',
  'conferencing',
  'displays',
  'computing',
  'audio',
  'security',
  'networking',
]

const WHY = [
  {
    icon: BadgeCheck,
    title: 'Premium Partnerships',
    description:
      'Our direct partnerships with top-tier manufacturers ensure you receive genuine products with full warranties and dedicated technical support.',
  },
  {
    icon: Award,
    title: 'Certified Expertise',
    description:
      'Our team holds certifications from leading brands, ensuring proper installation, configuration and optimization of all solutions.',
  },
  {
    icon: TrendingUp,
    title: 'Future-Proof Solutions',
    description:
      'We select brands known for innovation and longevity, protecting your investment with scalable, upgradeable technology.',
  },
]

export function Brands() {
  useMeta(
    'Brands',
    'We partner with industry-leading brands — Yealink, Poly, Jabra, Logitech, Samsung, LG, Sony, Hikvision and more — to deliver genuine AV and security hardware.',
  )

  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('all')

  const filtered = useMemo(
    () => (active === 'all' ? brands : brands.filter((b) => b.category === active)),
    [active],
  )

  return (
    <>
      <PageHero
        crumb="Brands"
        eyebrow="Authorized Partners"
        title="Our Trusted Brands"
        description="We partner with industry-leading brands to deliver the highest quality audio-visual and security solutions for your business."
        seed={44}
      />

      <section className="section-pad">
        <div className="container-app">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  active === c
                    ? 'bg-navy-900 text-white shadow-card'
                    : 'bg-white text-ink-700/70 border border-ink-900/[0.08] hover:border-ink-900/20'
                }`}
              >
                {c === 'all' ? 'All Brands' : categoryLabels[c]}
              </button>
            ))}
          </div>

          <StaggerGroup
            key={active}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {filtered.map((b) => (
              <StaggerItem key={b.slug}>
                <Link
                  to={`/brands/${b.slug}`}
                  className="group relative flex h-36 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-ink-900/[0.06] bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
                >
                  <motion.img
                    src={b.logo}
                    alt={b.name}
                    className="max-h-10 max-w-[70%] object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                  />
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-700/45">
                    {categoryLabels[b.category]}
                  </span>
                  <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-gold-500 text-ink-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-cream/60">
        <div className="container-app">
          <SectionHeading eyebrow="Why It Matters" title="Genuine hardware, real support" />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-3">
            {WHY.map((w) => (
              <StaggerItem key={w.title}>
                <div className="h-full rounded-3xl border border-ink-900/[0.06] bg-white p-7 shadow-card">
                  <IconTile icon={w.icon} tone="navy" />
                  <h3 className="mt-6 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/65">{w.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  )
}
