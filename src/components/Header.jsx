import { useState, useEffect, useRef } from 'react'
import { content } from '../content'

export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const isVisibleRef = useRef(true)

  useEffect(() => {
    lastScrollYRef.current = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const lastScrollY = lastScrollYRef.current

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        if (!isVisibleRef.current) {
          isVisibleRef.current = true
          setIsVisible(true)
        }
      } else if (currentScrollY > 100) {
        if (isVisibleRef.current) {
          isVisibleRef.current = false
          setIsVisible(false)
        }
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 py-3 md:py-5 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center px-4 md:px-10 py-3 md:py-4 rounded-full border border-[var(--color-border)] bg-[rgba(251,248,246,0.72)] backdrop-blur-md shadow-[0_10px_30px_rgba(36,34,32,0.05)] transition-shadow duration-300">
          <a 
            href="/" 
            className="text-sm md:text-lg font-light tracking-[0.1em] md:tracking-[0.15em] text-[var(--color-text)] hover:text-[var(--color-text-muted)] transition-colors duration-200 whitespace-nowrap"
          >
            {content.site.brandName}
          </a>
          
          <div className="flex items-center gap-4 md:gap-10">
            <a 
              href={content.site.socials.instagram}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-all duration-200 hover:scale-110 active:scale-95 flex-shrink-0"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[22px] md:h-[22px]">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z" fill="currentColor"></path>
              </svg>
            </a>
            
            <a 
              href="#cta" 
              className="px-2 md:px-5 py-2 md:py-3 border border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-surface)] transition-all duration-300 text-xs md:text-sm italic font-light tracking-wide active:scale-95 flex-shrink-0 whitespace-nowrap rounded-[3.5px]"
            >
              {content.hero.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
