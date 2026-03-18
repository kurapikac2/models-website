import { content } from '../content'

export function FeaturedBrands() {
  const brands = content.featuredBrands.brands

  return (
    <section className="py-12 md:py-20 px-4 md:px-12 bg-[var(--color-bg)] border-t border-[var(--color-border)] animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h6 className="text-[var(--color-text)] text-sm md:text-base font-light whitespace-nowrap tracking-wide italic" style={{ fontFamily: "'Lora', serif" }}>{content.featuredBrands.heading}</h6>
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10"></div>

              <div className="flex gap-8 md:gap-12 lg:gap-16 animate-scroll">
                {brands.map((brand, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 h-12 md:h-16 w-28 md:w-40 flex items-center justify-center group cursor-pointer transition-all duration-300"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      loading="lazy"
                      className="h-full w-full object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                ))}

                {brands.map((brand, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 h-12 md:h-16 w-28 md:w-40 flex items-center justify-center group cursor-pointer transition-all duration-300"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      loading="lazy"
                      className="h-full w-full object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
