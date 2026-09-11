import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-2xl ${className}`}>
      <Reveal direction="up">
        <span className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>{eyebrow}</span>
      </Reveal>
      <Reveal direction="up" delay={0.08}>
        <h2 className={`text-balance text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-[1.12] ${light ? 'text-white' : 'text-ink-900'}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p className={`text-balance text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-ink-700/70'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
