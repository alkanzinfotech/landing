import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface NetworkFieldProps {
  className?: string
  nodeCount?: number
  seed?: number
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function NetworkField({ className = '', nodeCount = 22, seed = 7 }: NetworkFieldProps) {
  const { nodes, links } = useMemo(() => {
    const rand = mulberry32(seed)
    const pts = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      r: 1.2 + rand() * 1.6,
      delay: rand() * 4,
    }))

    const lks: { a: typeof pts[number]; b: typeof pts[number] }[] = []
    pts.forEach((p, i) => {
      const next = pts[(i + 1) % pts.length]
      const dx = p.x - next.x
      const dy = p.y - next.y
      if (Math.sqrt(dx * dx + dy * dy) < 45) lks.push({ a: p, b: next })
    })

    return { nodes: pts, links: lks }
  }, [nodeCount, seed])

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    >
      {links.map((l, i) => (
        <motion.line
          key={i}
          x1={l.a.x}
          y1={l.a.y}
          x2={l.b.x}
          y2={l.b.y}
          stroke="currentColor"
          strokeWidth="0.12"
          strokeOpacity="0.35"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: i * 0.05, ease: 'easeOut' }}
        />
      ))}
      {nodes.map((n) => (
        <motion.circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.r * 0.35}
          fill="currentColor"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: 3 + (n.id % 4),
            repeat: Infinity,
            delay: n.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </svg>
  )
}
