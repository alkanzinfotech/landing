import { motion } from 'framer-motion'
import { Signal, Video, Wifi } from 'lucide-react'

const bars = [8, 16, 10, 22, 14, 26, 12, 18, 9, 24, 15, 20]

export function HeroPanel() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-gold-400/20 via-signal-400/10 to-transparent blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 0.78, 0.32, 1] }}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-900/80 p-2 shadow-card-lg backdrop-blur"
        style={{ perspective: 1200 }}
      >
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-white/70">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-400" />
            </span>
            Live · Room A
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="/images/index/boardroom.jpg"
            alt="Conference room deployed by AlKanz Infotech"
            className="h-[280px] w-full object-cover sm:h-[340px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/0 to-navy-900/10" />

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute left-4 top-4 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-ink-900 shadow-card backdrop-blur"
          >
            <Video size={16} strokeWidth={1.8} className="text-navy-700" />
            <span className="font-mono text-[0.65rem] font-medium">4K AI Framing</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-ink-900 shadow-card backdrop-blur"
          >
            <Wifi size={16} strokeWidth={1.8} className="text-signal-600" />
            <span className="font-mono text-[0.65rem] font-medium">Signal 98%</span>
          </motion.div>
        </div>

        <div className="flex items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-end gap-[3px]">
            {bars.map((h, i) => (
              <motion.span
                key={i}
                className="w-[3px] rounded-full bg-gradient-to-t from-gold-500 to-signal-400"
                style={{ height: h }}
                animate={{ scaleY: [0.5, 1, 0.6, 1, 0.5] }}
                transition={{
                  duration: 1.4 + (i % 4) * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.06,
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-white/60">
            <Signal size={14} strokeWidth={1.8} />
            <span className="font-mono text-[0.65rem]">DSP Tuned</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -bottom-8 -left-6 hidden w-52 rounded-2xl border border-ink-900/[0.06] bg-white p-4 shadow-card-lg sm:block animate-float"
      >
        <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-700/50">Rooms Delivered</p>
        <p className="font-display text-2xl font-semibold text-ink-900">5 <span className="text-gold-500">live</span></p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.6 }}
        className="absolute -right-4 -top-6 hidden rounded-2xl border border-ink-900/[0.06] bg-white px-4 py-3 shadow-card-lg sm:block animate-float-delay"
      >
        <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-700/50">OEM Partners</p>
        <p className="font-display text-2xl font-semibold text-ink-900">18<span className="text-signal-500">+</span></p>
      </motion.div>
    </div>
  )
}
