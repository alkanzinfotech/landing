import { Link } from 'react-router-dom'
import { ExternalLink, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { COMPARE_URL, CONTACT } from '../../data/content'
import { NetworkField } from '../illustrations/NetworkField'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy-900 pt-20 text-white">
      <div className="absolute inset-0 text-white/10">
        <NetworkField nodeCount={26} seed={41} />
      </div>

      <div className="container-app relative">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="AlKanz Infotech home">
              <img
                src="/images/logo-mark.webp"
                alt=""
                className="h-16 w-16 shrink-0 object-contain drop-shadow-[0_3px_12px_rgba(22,207,215,0.25)]"
                loading="lazy"
              />
              <span className="font-display text-xl font-semibold tracking-tight">AlKanz Infotech</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Professional conference-room and security deployments — camera bars, displays,
              speakers, microphones, control systems and CCTV, designed and installed end-to-end.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold-400/60 hover:text-gold-400"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { label: 'About Us', to: '/about' },
              { label: 'Brands', to: '/brands' },
              { label: 'Solutions', to: '/solutions' },
              { label: 'Contact', to: '/contact' },
            ]}
          />
          <FooterCol
            title="Solutions"
            links={[
              { label: 'Meeting Rooms', to: '/solutions' },
              { label: 'Auditoriums', to: '/solutions' },
              { label: 'Training Rooms', to: '/solutions' },
              { label: 'CCTV & Access', to: '/solutions' },
              { label: 'Room Configurator', to: '/configurator' },
              { label: 'Compare Products', to: COMPARE_URL, external: true },
            ]}
          />

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Get in Touch
            </h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <a href={CONTACT.phoneHref} className="flex items-start gap-3 hover:text-white">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" />
                {CONTACT.phone}
              </a>
              <a href={CONTACT.emailHref} className="flex items-start gap-3 hover:text-white">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" />
                {CONTACT.email}
              </a>
              <span className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                {CONTACT.addressFull}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-8 text-xs text-white/40 sm:flex-row">
          <span>© {year} AlKanz Infotech. All rights reserved.</span>
          <span>Built with care for meeting rooms that just work.</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; to: string; external?: boolean }[]
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">{title}</h4>
      <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
        {links.map((l) =>
          l.external ? (
            <a
              key={l.label}
              href={l.to}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1.5 link-underline hover:text-white"
            >
              {l.label}
              <ExternalLink size={12} />
            </a>
          ) : (
            <Link key={l.label} to={l.to} className="w-fit link-underline hover:text-white">
              {l.label}
            </Link>
          ),
        )}
      </div>
    </div>
  )
}
