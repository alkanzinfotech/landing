import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { brands, categoryLabels } from '../../data/brands'
import { CONTACT } from '../../data/content'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { Magnetic } from '../ui/Magnetic'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Configurator', to: '/configurator' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setBrandsOpen(false)
  }, [location.pathname])

  useLockBodyScroll(mobileOpen)

  const grouped = brands.reduce<Record<string, typeof brands>>((acc, b) => {
    acc[b.category] = acc[b.category] ? [...acc[b.category], b] : [b]
    return acc
  }, {})

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-navy-900/90 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl'
          : 'bg-gradient-to-b from-navy-900/70 to-transparent'
      }`}
    >
      <div className="container-app flex h-[76px] items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <img src="/images/logo-mark.png" alt="AlKanz Infotech" className="h-10 w-10 object-contain drop-shadow-[0_2px_10px_rgba(211,166,74,0.25)] transition-transform duration-300 group-hover:scale-110" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.05rem] font-semibold text-white">AlKanz</span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-gold-400/90">Infotech</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.slice(0, 2).map((item) => (
            <HeaderLink key={item.to} to={item.to} label={item.label} />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setBrandsOpen(true)}
            onMouseLeave={() => setBrandsOpen(false)}
          >
            <NavLink
              to="/brands"
              className={({ isActive }) =>
                `flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-gold-400' : 'text-white/80 hover:text-white'
                }`
              }
            >
              Brands
              <ChevronDown size={14} className={`transition-transform ${brandsOpen ? 'rotate-180' : ''}`} />
            </NavLink>

            <AnimatePresence>
              {brandsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-3 gap-1 rounded-2xl border border-white/10 bg-navy-900/95 p-5 shadow-card-lg backdrop-blur-xl">
                    {Object.entries(grouped).map(([category, items]) => (
                      <div key={category} className="flex flex-col gap-1">
                        <span className="mb-1 font-mono text-[0.6rem] uppercase tracking-widest text-gold-400/80">
                          {categoryLabels[category as keyof typeof categoryLabels]}
                        </span>
                        {items.map((b) => (
                          <Link
                            key={b.slug}
                            to={`/brands/${b.slug}`}
                            className="rounded-lg px-2 py-1.5 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {b.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV.slice(2).map((item) => (
            <HeaderLink key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white">
            <Phone size={15} />
            {CONTACT.phone}
          </a>
          <Magnetic>
            <Link to="/contact" className="btn-gold !py-2.5 !px-5 text-[0.85rem]">
              Get a Quote
            </Link>
          </Magnetic>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 0.78, 0.32, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-900 lg:hidden"
          >
            <div className="container-app flex flex-col gap-1 py-6">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-xl px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/brands" className="rounded-xl px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5">
                Brands
              </Link>
              <a href={CONTACT.phoneHref} className="mt-3 flex items-center gap-2 px-3 text-sm text-white/70">
                <Phone size={15} /> {CONTACT.phone}
              </a>
              <Link to="/contact" className="btn-gold mt-3 w-full">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function HeaderLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-gold-400' : 'text-white/80 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )
}
