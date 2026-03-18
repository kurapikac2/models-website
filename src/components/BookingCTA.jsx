import { content } from '../content'

export function BookingCTA() {
  return (
    <section id="cta" className="bg-[var(--color-bg)] px-4 py-20 md:px-12 md:py-28 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-4 md:mb-5">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light italic text-[var(--color-text)]" style={{ fontFamily: "'Lora', serif" }}>
              {content.cta.title}
            </h2>
          </div>
          <p className="text-sm md:text-lg font-light text-[var(--color-text-muted)]">
            {content.cta.subtitlePrefix}{' '}
            <a
              href={`mailto:${content.cta.email}`}
              className="text-[var(--color-text)] underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-[var(--color-text)] transition-colors duration-300"
            >
              {content.cta.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
