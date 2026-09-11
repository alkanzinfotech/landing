import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const spring = { stiffness: 200, damping: 20, mass: 0.4 }
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), spring)
  const glowX = useTransform(px, [0, 1], ['0%', '100%'])
  const glowY = useTransform(py, [0, 1], ['0%', '100%'])
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) => `radial-gradient(220px circle at ${gx} ${gy}, rgba(211,166,74,0.16), transparent 70%)`,
  )

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const onMouseLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`relative will-change-transform ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />
      {children}
    </motion.div>
  )
}
