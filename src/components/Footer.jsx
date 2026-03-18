import { content } from '../content'

export function Footer() {
  return (
    <footer className="backdrop-blur-md bg-[var(--color-surface)] border-t border-[var(--color-border)] animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-base md:text-lg font-medium text-[var(--color-text)] mb-3 md:mb-4">{content.footer.aboutTitle}</h3>
            <p className="text-xs md:text-sm text-[var(--color-text-muted)]">{content.footer.aboutBody}</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xs md:text-sm font-medium text-[var(--color-text)] mb-3 md:mb-4 uppercase tracking-[0.2em]">{content.footer.quickLinksTitle}</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {content.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs md:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors hover:translate-x-1 inline-block">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-xs md:text-sm font-medium text-[var(--color-text)] mb-3 md:mb-4 uppercase tracking-[0.2em]">{content.footer.followTitle}</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {content.footer.followLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors hover:translate-x-1 inline-block">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--color-border)] pt-6 md:pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-center text-[var(--color-text-soft)] text-xs md:text-sm">
            {content.site.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  )
}
