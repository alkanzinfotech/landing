import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const scaleX = useScrollProgress()

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold-400 via-gold-500 to-signal-400"
    />
  )
}
