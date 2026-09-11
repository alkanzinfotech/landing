import { motion } from 'framer-motion'

export function ConnectorLine({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 lg:block ${className}`}>
      <div className="h-full w-full bg-gradient-to-r from-transparent via-ink-900/10 to-transparent" />
      <motion.div
        className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold-500 shadow-glow"
        animate={{ left: ['0%', '100%'] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
