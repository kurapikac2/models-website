import { content } from '../content'

export function Gallery() {
  const images = content.gallery.images

  return (
    <section id="portfolio" className="bg-[var(--color-bg)] px-4 py-16 md:px-12 md:py-24 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_2.05fr] gap-10 md:gap-16 items-end mb-12 md:mb-16">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <div className="h-px w-16 bg-[var(--color-border)]"></div>
          </div>

          <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] leading-none font-light italic text-[var(--color-text)]" style={{ fontFamily: "'Lora', serif" }}>
              {content.gallery.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-auto">
          <article className="md:col-span-2 md:row-span-2 overflow-hidden rounded-[1.75rem] bg-[var(--color-surface-soft)] animate-fade-in-up shadow-[0_14px_40px_rgba(36,34,32,0.04)]" style={{ animationDelay: '0.15s' }}>
            <div className="aspect-[16/18] overflow-hidden group">
              <img
                src={images[0].url}
                alt={images[0].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.5rem] bg-[var(--color-surface)] border border-[var(--color-border)] animate-fade-in-up shadow-[0_10px_30px_rgba(36,34,32,0.03)]" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[4/5] overflow-hidden group">
              <img
                src={images[1].url}
                alt={images[1].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 flex items-center justify-center animate-fade-in-up shadow-[0_10px_30px_rgba(36,34,32,0.03)]" style={{ animationDelay: '0.25s' }}>
            <div className="text-center max-w-sm">
              <p className="text-2xl md:text-[2rem] leading-tight font-light italic text-[var(--color-text)]" style={{ fontFamily: "'Lora', serif" }}>
                {content.gallery.quote}
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[var(--color-text-soft)]">{content.gallery.quoteSource}</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.5rem] bg-[var(--color-surface-soft)] animate-fade-in-up shadow-[0_10px_30px_rgba(36,34,32,0.03)]" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-[4/5] overflow-hidden group">
              <img
                src={images[3].url}
                alt={images[3].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.5rem] bg-[var(--color-surface-soft)] animate-fade-in-up shadow-[0_10px_30px_rgba(36,34,32,0.03)]" style={{ animationDelay: '0.35s' }}>
            <div className="aspect-[4/5] overflow-hidden group">
              <img
                src={images[4].url}
                alt={images[4].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.5rem] bg-[var(--color-surface-soft)] animate-fade-in-up shadow-[0_10px_30px_rgba(36,34,32,0.03)]" style={{ animationDelay: '0.4s' }}>
            <div className="aspect-[4/5] overflow-hidden group">
              <img
                src={images[5].url}
                alt={images[5].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </article>

          <article className="md:col-span-2 overflow-hidden rounded-[1.75rem] bg-[var(--color-surface)] border border-[var(--color-border)] animate-fade-in-up shadow-[0_14px_40px_rgba(36,34,32,0.04)]" style={{ animationDelay: '0.45s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr] items-stretch">
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between gap-8">
                <div>
                  <span className="block text-[10px] md:text-xs uppercase tracking-[0.35em] text-[var(--color-text-soft)] mb-4">{content.gallery.editorialKicker}</span>
                  <p className="text-lg md:text-2xl leading-snug font-light italic text-[var(--color-text)]" style={{ fontFamily: "'Lora', serif" }}>
                    {content.gallery.editorialBody}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--color-text-soft)]">
                  <span className="inline-block h-px w-10 bg-[var(--color-border)]"></span>
                  {content.gallery.editorialTagline}
                </div>
              </div>

              <div className="overflow-hidden bg-[var(--color-surface-soft)] min-h-[280px] sm:min-h-full">
                <img
                  src={images[2].url}
                  alt={images[2].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
