import { lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { FloatingContact } from './components/layout/FloatingContact'
import { PageShell } from './components/layout/PageShell'
import { CustomCursor } from './components/layout/CustomCursor'

import { Home } from './pages/Home'

const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Solutions = lazy(() => import('./pages/Solutions').then((m) => ({ default: m.Solutions })))
const Development = lazy(() => import('./pages/Development').then((m) => ({ default: m.Development })))
const Brands = lazy(() => import('./pages/Brands').then((m) => ({ default: m.Brands })))
const BrandDetail = lazy(() => import('./pages/BrandDetail').then((m) => ({ default: m.BrandDetail })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const ThankYou = lazy(() => import('./pages/ThankYou').then((m) => ({ default: m.ThankYou })))
const Configurator = lazy(() => import('./pages/Configurator').then((m) => ({ default: m.Configurator })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

function RouteFallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-navy-200 border-t-navy-800" />
    </div>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-paper">
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <Header />

      <AnimatePresence mode="wait">
        <PageShell key={location.pathname}>
          <Suspense fallback={<RouteFallback />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/development" element={<Development />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/brands/:slug" element={<BrandDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/configurator" element={<Configurator />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageShell>
      </AnimatePresence>

      <Footer />
      <FloatingContact />
    </div>
  )
}

export default App
