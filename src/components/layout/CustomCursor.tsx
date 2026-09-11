import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })
  const ringX = useSpring(x, { stiffness: 200, damping: 30, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 200, damping: 30, mass: 0.6 })

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFine)
    if (!isFine) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
      const el = e.target as HTMLElement
      setHovering(Boolean(el.closest('a, button, [data-cursor-hover]')))
    }
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden lg:block" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s' }}>
      <motion.div
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-gold-500"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-gold-500/50"
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </div>
  )
}
