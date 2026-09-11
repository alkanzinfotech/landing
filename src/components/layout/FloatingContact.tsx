import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Phone, X } from 'lucide-react'
import { CONTACT } from '../../data/content'

export function FloatingContact() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 rounded-2xl border border-ink-900/[0.06] bg-white p-2 shadow-card-lg"
          >
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-900 hover:bg-navy-50"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-800 text-white">
                <Phone size={16} />
              </span>
              Call Us
            </a>
            <a
              href={`https://wa.me/${CONTACT.phoneHref.replace('tel:+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-900 hover:bg-navy-50"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-signal-500 text-ink-900">
                <MessageCircle size={16} />
              </span>
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.92 }}
        aria-label="Contact options"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-900 shadow-glow"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X size={22} /> : <MessageCircle size={22} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
