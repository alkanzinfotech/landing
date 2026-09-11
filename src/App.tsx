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
import { About } from './pages/About'
import { Solutions } from './pages/Solutions'
import { Brands } from './pages/Brands'
import { BrandDetail } from './pages/BrandDetail'
import { Contact } from './pages/Contact'
import { Configurator } from './pages/Configurator'
import { NotFound } from './pages/NotFound'

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
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/:slug" element={<BrandDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageShell>
      </AnimatePresence>

      <Footer />
      <FloatingContact />
    </div>
  )
}

export default App
