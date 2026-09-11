import { motion } from 'framer-motion'

export function SplitReveal({
  text,
  className = '',
  delay = 0,
  wordClassName = '',
}: {
  text: string
  className?: string
  delay?: number
  wordClassName?: string
}) {
  const words = text.split(' ')

  return (
    <span className={`inline ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className={`inline-block will-change-transform ${wordClassName}`}
            initial={{ y: '110%', rotate: 4 }}
            animate={{ y: '0%', rotate: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.22, 0.78, 0.32, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
