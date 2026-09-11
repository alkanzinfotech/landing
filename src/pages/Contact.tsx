import { useRef, useState, type FormEvent } from 'react'
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { PageHero } from '../components/layout/PageHero'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { IconTile } from '../components/ui/IconTile'
import { CONTACT } from '../data/content'
import { sendContactForm } from '../lib/emailjs'

const INFO_CARDS = [
  { icon: Phone, title: 'Call Us', value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, title: 'Email Us', value: CONTACT.email, href: CONTACT.emailHref },
  { icon: MapPin, title: 'Visit Us', value: CONTACT.addressShort },
  { icon: Clock, title: 'Working Hours', value: CONTACT.hours },
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  useMeta(
    'Contact',
    'Get in touch with AlKanz Infotech to discuss your audio-visual and security requirements.',
  )

  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await sendContactForm(formRef.current)
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Let's Talk"
        title="Contact Us"
        description="Get in touch with our team to discuss your audio-visual and security needs."
        seed={55}
      />

      <section className="section-pad">
        <div className="container-app">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INFO_CARDS.map((c) => (
              <StaggerItem key={c.title}>
                <div className="group h-full rounded-3xl border border-ink-900/[0.06] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
                  <IconTile icon={c.icon} tone="navy" size="sm" />
                  <h4 className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink-700/50">
                    {c.title}
                  </h4>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-base font-medium text-navy-800 hover:text-gold-600">
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-medium">{c.value}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal direction="right">
              <div className="h-full rounded-[2rem] border border-ink-900/[0.06] bg-white p-8 shadow-card sm:p-10">
                <span className="eyebrow">Send a Message</span>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Get In Touch</h2>
                <p className="mt-2 text-sm text-ink-700/60">
                  Share your requirements and we&apos;ll schedule a free site visit.
                </p>

                <form ref={formRef} onSubmit={onSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="City" name="city" />
                  </div>
                  <label className="flex flex-col gap-2 text-sm font-medium text-ink-900">
                    Message
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      className="rounded-xl border border-ink-900/10 bg-paper px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-gold-500"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-gold mt-2 justify-center disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={15} />
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <p className="flex items-center gap-2 rounded-xl bg-signal-50 px-4 py-3 text-sm font-medium text-signal-700">
                      <CheckCircle2 size={16} /> Thanks — we'll be in touch within 24 hours.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                      Something went wrong. Please call us directly at {CONTACT.phone}.
                    </p>
                  )}
                </form>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink-900/[0.06] bg-white shadow-card">
                <div className="relative aspect-[4/3] w-full">
                  <iframe
                    title="AlKanz InfoTech Location"
                    src={CONTACT.mapEmbed}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-semibold">Visit Our Office</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700/65">
                    <strong className="text-ink-900">Address:</strong>
                    <br />
                    {CONTACT.addressFull}
                  </p>
                  <p className="mt-3 text-sm text-ink-700/65">
                    <strong className="text-ink-900">Phone:</strong> {CONTACT.phone}
                  </p>
                  <p className="mt-1 text-sm text-ink-700/65">
                    <strong className="text-ink-900">Email:</strong> {CONTACT.email}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-ink-900">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-xl border border-ink-900/10 bg-paper px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-gold-500"
      />
    </label>
  )
}
