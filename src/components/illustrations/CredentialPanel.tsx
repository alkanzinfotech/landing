import { motion } from 'framer-motion'
import { BadgeCheck, Globe2, ShieldCheck, Wrench } from 'lucide-react'
import { NetworkField } from './NetworkField'

const CREDENTIALS = [
  { icon: Wrench, label: 'OEM-Certified Engineers' },
  { icon: ShieldCheck, label: 'Electrical & Fire Compliant' },
  { icon: Globe2, label: 'Pan-India Deployment' },
  { icon: BadgeCheck, label: 'Genuine Hardware Only' },
]

export function CredentialPanel() {
  return (
    <div className="relative h-full overflow-hidden rounded-[2rem] bg-navy-900 p-8 sm:p-10">
      <div className="absolute inset-0 text-white/[0.14]">
        <NetworkField nodeCount={18} seed={17} />
      </div>
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/10 blur-[80px]" />

      <div className="relative flex h-full flex-col justify-between gap-10">
        <div>
          <span className="eyebrow eyebrow-light">Field Standards</span>
          <p className="mt-4 max-w-xs text-balance text-lg leading-relaxed text-white/70">
            Every deployment runs through the same checklist, whether it&apos;s one huddle room
            or a forty-site rollout.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {CREDENTIALS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-ink-900">
                <c.icon size={17} strokeWidth={1.8} />
              </span>
              <span className="text-sm font-medium leading-snug text-white/85">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
