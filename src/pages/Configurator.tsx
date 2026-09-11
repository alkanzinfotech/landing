import { useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Check, CheckCircle2, Loader2, RotateCcw, Sparkles } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { PageHero } from '../components/layout/PageHero'
import { CONFIG_LABELS, CONFIG_STEPS } from '../data/configurator'
import { EMAILJS } from '../data/content'
import { Link } from 'react-router-dom'
import { Magnetic } from '../components/ui/Magnetic'

type Answers = Record<string, string>
type ContactInfo = { name: string; phone: string; email: string; company: string }
type Phase = 'intro' | 'steps' | 'result'
type SendState = 'idle' | 'sending' | 'error'

export function Configurator() {
  useMeta(
    'Room Configurator',
    'Customize your meeting room in a few clicks and get a tailored quote from AlKanz Infotech.',
  )

  const [phase, setPhase] = useState<Phase>('intro')
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [contact, setContact] = useState<ContactInfo | null>(null)
  const [sendState, setSendState] = useState<SendState>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const totalSteps = CONFIG_STEPS.length + 1
  const isFormStep = stepIndex === CONFIG_STEPS.length
  const currentStep = CONFIG_STEPS[stepIndex]
  const progressPct = ((stepIndex + 1) / totalSteps) * 100

  const canAdvance = isFormStep || Boolean(answers[currentStep?.key])

  const start = () => {
    setPhase('steps')
    setStepIndex(0)
    setAnswers({})
  }

  const restart = () => {
    setPhase('intro')
    setStepIndex(0)
    setAnswers({})
    setContact(null)
    setSendState('idle')
  }

  const goBack = () => {
    if (stepIndex === 0) {
      setPhase('intro')
    } else {
      setStepIndex((i) => i - 1)
    }
  }

  const goNext = () => {
    if (!canAdvance) return
    setStepIndex((i) => i + 1)
  }

  const buildSummary = (c: ContactInfo) => {
    const lines = ['Room Configurator submission:']
    CONFIG_STEPS.forEach((step) => {
      const opt = step.options.find((o) => o.value === answers[step.key])
      lines.push(`${CONFIG_LABELS[step.key]}: ${opt ? opt.label : '—'}`)
    })
    lines.push(`Name: ${c.name}`, `Phone: ${c.phone}`, `Email: ${c.email}`, `Company/City: ${c.company}`)
    return lines.join('\n')
  }

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const info: ContactInfo = {
      name: String(data.get('name') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      company: String(data.get('city') ?? '').trim(),
    }
    if (!info.name || !info.phone || !info.email) return

    setSendState('sending')
    const messageField = form.querySelector<HTMLInputElement>('input[name="message"]')
    if (messageField) messageField.value = buildSummary(info)

    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form, {
        publicKey: EMAILJS.publicKey,
      })
      setContact(info)
      setPhase('result')
      setSendState('idle')
    } catch {
      setSendState('error')
    }
  }

  return (
    <>
      <PageHero
        crumb="Room Configurator"
        eyebrow="Interactive Tool"
        title="Room Configurator"
        description="Customize your meeting room in a few clicks and get a tailored quote."
        seed={66}
      />

      <section className="section-pad">
        <div className="container-app mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            {phase === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="rounded-[2rem] border border-ink-900/[0.06] bg-white p-10 text-center shadow-card-lg sm:p-16"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-ink-900 shadow-glow">
                  <Sparkles size={28} />
                </span>
                <h2 className="mt-6 text-3xl font-semibold">Build Your Room, Step by Step</h2>
                <p className="mx-auto mt-4 max-w-md text-ink-700/65">
                  Answer a few quick questions about your space, platform and brand preferences —
                  we&apos;ll turn it into a tailored AV configuration and quote.
                </p>
                <Magnetic>
                  <button onClick={start} className="btn-gold mx-auto mt-8">
                    Let&apos;s Start
                  </button>
                </Magnetic>
              </motion.div>
            )}

            {phase === 'steps' && !isFormStep && currentStep && (
              <motion.div
                key={`step-${stepIndex}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="rounded-[2rem] border border-ink-900/[0.06] bg-white p-8 shadow-card-lg sm:p-12"
              >
                <ProgressBar current={stepIndex + 1} total={totalSteps} pct={progressPct} />
                <h2 className="mt-6 text-2xl font-semibold text-balance">{currentStep.title}</h2>

                <div
                  className={`mt-8 grid gap-4 ${
                    currentStep.type === 'image'
                      ? 'sm:grid-cols-2'
                      : currentStep.type === 'icon'
                        ? 'sm:grid-cols-2'
                        : 'grid-cols-2 sm:grid-cols-3'
                  }`}
                >
                  {currentStep.options.map((opt) => {
                    const selected = answers[currentStep.key] === opt.value
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setAnswers((a) => ({ ...a, [currentStep.key]: opt.value }))}
                        className={`group relative flex flex-col items-center gap-3 rounded-2xl border-2 p-5 text-center transition-all duration-200 ${
                          selected
                            ? 'border-gold-500 bg-gold-50/60 shadow-glow'
                            : 'border-ink-900/[0.08] hover:border-ink-900/20'
                        }`}
                      >
                        {selected && (
                          <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-gold-500 text-ink-900">
                            <Check size={14} />
                          </span>
                        )}

                        {opt.img && currentStep.type === 'image' && (
                          <div className="aspect-video w-full overflow-hidden rounded-xl">
                            <img src={opt.img} alt={opt.label} className="h-full w-full object-cover" />
                          </div>
                        )}
                        {opt.img && currentStep.type === 'logo' && (
                          <div className="grid h-14 w-full place-items-center">
                            <img src={opt.img} alt={opt.label} className="max-h-9 max-w-[80%] object-contain" />
                          </div>
                        )}
                        {opt.icon && (
                          <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-white">
                            <opt.icon size={20} strokeWidth={1.8} />
                          </div>
                        )}

                        <span className="text-sm font-semibold text-ink-900">{opt.label}</span>
                        {opt.sub && <span className="text-xs text-ink-700/50">{opt.sub}</span>}
                      </button>
                    )
                  })}
                </div>

                <StepNav onBack={goBack} onNext={goNext} disabled={!canAdvance} nextLabel="Next" />
              </motion.div>
            )}

            {phase === 'steps' && isFormStep && (
              <motion.div
                key="form-step"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="rounded-[2rem] border border-ink-900/[0.06] bg-white p-8 shadow-card-lg sm:p-12"
              >
                <ProgressBar current={stepIndex + 1} total={totalSteps} pct={progressPct} />
                <h2 className="mt-6 text-2xl font-semibold text-balance">
                  Almost there — tell us where to send your quote
                </h2>

                <form ref={formRef} onSubmit={onSubmitForm} className="mt-8 grid gap-5 sm:grid-cols-2">
                  <input type="hidden" name="message" value="" />
                  <ConfigField label="Name" name="name" required />
                  <ConfigField label="Phone" name="phone" type="tel" required />
                  <ConfigField label="Email" name="email" type="email" required />
                  <ConfigField label="Company / City" name="city" />

                  {sendState === 'error' && (
                    <p className="sm:col-span-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                      Something went wrong sending your details. Please try again or call us directly.
                    </p>
                  )}

                  <div className="sm:col-span-2 mt-2 flex items-center justify-between gap-4">
                    <button type="button" onClick={goBack} className="btn-ghost">
                      Back
                    </button>
                    <button type="submit" disabled={sendState === 'sending'} className="btn-gold disabled:opacity-60">
                      {sendState === 'sending' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        'View My Configuration'
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {phase === 'result' && contact && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-[2rem] border border-ink-900/[0.06] bg-white p-8 text-center shadow-card-lg sm:p-12"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-signal-500 text-ink-900">
                  <CheckCircle2 size={28} />
                </span>
                <span className="mt-5 inline-block eyebrow">Configuration Received</span>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Here&apos;s your room, built your way</h2>
                <p className="mx-auto mt-3 max-w-md text-ink-700/65">
                  Our team will reach out to {contact.name.split(' ')[0]} within 24 hours with a
                  tailored quote based on the selections below.
                </p>

                <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
                  {CONFIG_STEPS.map((step) => {
                    const opt = step.options.find((o) => o.value === answers[step.key])
                    return (
                      <div key={step.key} className="flex items-center gap-3 rounded-xl border border-ink-900/[0.06] bg-paper p-4">
                        {opt?.img ? (
                          <img src={opt.img} alt={opt.label} className="h-8 w-8 object-contain" />
                        ) : opt?.icon ? (
                          <div className="grid h-8 w-8 place-items-center rounded-lg bg-navy-900 text-white">
                            <opt.icon size={14} />
                          </div>
                        ) : null}
                        <div>
                          <p className="text-xs uppercase tracking-wide text-ink-700/45">{CONFIG_LABELS[step.key]}</p>
                          <p className="text-sm font-semibold">{opt?.label ?? '—'}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                  <Link to="/contact" className="btn-primary">
                    Talk to Our Team
                  </Link>
                  <button onClick={restart} className="btn-ghost">
                    <RotateCcw size={15} /> Start Over
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

function ProgressBar({ current, total, pct }: { current: number; total: number; pct: number }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs text-ink-700/50">
      <span>{String(current).padStart(2, '0')}</span>
      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-900/[0.06]">
        <motion.span
          className="block h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </span>
      <span>{String(total).padStart(2, '0')}</span>
    </div>
  )
}

function StepNav({
  onBack,
  onNext,
  disabled,
  nextLabel,
}: {
  onBack: () => void
  onNext: () => void
  disabled: boolean
  nextLabel: string
}) {
  return (
    <div className="mt-9 flex items-center justify-between gap-4">
      <button type="button" onClick={onBack} className="btn-ghost">
        Back
      </button>
      <button type="button" onClick={onNext} disabled={disabled} className="btn-gold disabled:opacity-40">
        {nextLabel}
      </button>
    </div>
  )
}

function ConfigField({
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
