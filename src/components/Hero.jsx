import { useState } from 'react'
import { content } from '../content'

export function Hero() {
  const [imagePreview, setImagePreview] = useState(null)
  const defaultHeroImage = content.hero.defaultImageUrl
  const introWords = content.hero.introWords
  const nameWords = content.hero.nameWords

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const renderAnimatedWords = (words, startDelay) => {
    let characterIndex = 0

    return words.map((word, wordIndex) => {
      const chars = word.split('').map((char, charIndex) => {
        const delay = startDelay + characterIndex * 0.035
        characterIndex += 1

        return (
          <span
            key={`${word}-${charIndex}`}
            className="hero-char"
            style={{ animationDelay: `${delay}s` }}
          >
            {char}
          </span>
        )
      })

      return (
        <span key={`${word}-${wordIndex}`} className="hero-word">
          {chars}
          {wordIndex < words.length - 1 ? <span className="hero-space">&nbsp;</span> : null}
        </span>
      )
    })
  }

  return (
    <section className="bg-[var(--color-bg)] py-12 md:py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8 md:mb-16">
              <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-[var(--color-text-muted)] mb-4 md:mb-8" style={{ fontFamily: "'Lora', serif" }}>
                {renderAnimatedWords(introWords, 0.08)}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light italic text-[var(--color-text)] leading-[0.95]" style={{ fontFamily: "'Lora', serif" }}>
                {renderAnimatedWords(nameWords, 0.28)}
              </h1>
            </div>

            {/* Measurements Table */}
            <div id="stats" className="mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-3 md:space-y-4">
                {Array.from({ length: Math.ceil(content.hero.stats.length / 2) }).map((_, rowIndex) => {
                  const left = content.hero.stats[rowIndex * 2]
                  const right = content.hero.stats[rowIndex * 2 + 1]

                  return (
                    <div key={rowIndex} className="grid grid-cols-2 gap-4 md:gap-8">
                      <div className="flex justify-between border-b border-[var(--color-border)] pb-2 md:pb-3">
                        <span className="text-xs font-light tracking-widest text-[var(--color-text-soft)] uppercase">{left.label}</span>
                        <span className="text-xs md:text-sm font-light text-[var(--color-text)]">{left.value}</span>
                      </div>
                      {right ? (
                        <div className="flex justify-between border-b border-[var(--color-border)] pb-2 md:pb-3">
                          <span className="text-xs font-light tracking-widest text-[var(--color-text-soft)] uppercase">{right.label}</span>
                          <span className="text-xs md:text-sm font-light text-[var(--color-text)]">{right.value}</span>
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Book Me Button */}
            <a 
              href="#cta" 
              className="px-2 md:px-5 py-2 md:py-4 border border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-surface)] transition-all duration-300 text-xs md:text-sm italic font-light tracking-wide active:scale-95 flex-shrink-0 whitespace-nowrap rounded-[3.5px]"
            >
              {content.hero.ctaLabel}
            </a>
          </div>

          {/* Right Image */}
          <div className="flex items-start justify-center lg:justify-end animate-slide-in-right mt-8 lg:mt-0">
            <label className="w-full max-w-sm md:max-w-md lg:max-w-[42rem] cursor-pointer">
              <div className="relative w-full min-h-[420px] md:min-h-[560px] lg:min-h-[650px] flex items-end justify-center overflow-visible group animate-scale-in">
                <div className="relative w-full h-full flex items-end justify-center translate-y-[-1.25rem] sm:translate-y-[-2.25rem] lg:translate-y-[-3.2rem]">
                  <img
                    src={imagePreview || defaultHeroImage}
                    alt={content.hero.imageAlt}
                    className="w-full h-auto max-h-[760px] object-contain select-none pointer-events-none"
                    loading="eager"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 border border-[var(--color-border)] bg-[rgba(251,248,246,0.82)] backdrop-blur-sm text-[var(--color-text-muted)] text-xs md:text-sm font-light rounded-full">
                    Change photo
                  </span>
                </div>
              </div>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
