import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 0.78, 0.32, 1] }}
    >
      {children}
    </motion.main>
  )
}
