import { useEffect } from 'react'
import Lenis from 'lenis'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FeaturedBrands } from './components/FeaturedBrands'
import { Gallery } from './components/Gallery'
import { BookingCTA } from './components/BookingCTA'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    let rafId = 0
    let running = true

    function raf(time) {
      if (!running) return
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Header />
      <Hero />
      <FeaturedBrands />
      <Gallery />
      <BookingCTA />
      <Footer />
    </div>
  )
}

export default App