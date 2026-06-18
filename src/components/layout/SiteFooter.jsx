import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

export default function SiteFooter() {
  const { content } = useLanguage()
  const footer = content?.footer || {}
  const footerSections = footer.sections || []

  return (
    <footer className="mt-20 border-t border-zx-border bg-zx-surface backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="/logo-zanvrox.png"
              alt="ZANVROX logo"
              className="h-9 w-9 shrink-0 rounded object-cover"
              loading="lazy"
              decoding="async"
            />
            <p className="font-heading text-lg font-semibold text-zx-text">ZANVROX</p>
          </div>
          <p className="max-w-md text-sm text-zx-text-muted">{footer.companyDescription}</p>
          <p className="text-xs text-zx-text-muted">{footer.headquarters}</p>
          <a href={`mailto:${footer.email || 'support@zanvrox.com'}`} className="text-xs text-zx-text-muted transition hover:text-zx-text">
            {footer.email}
          </a>
        </div>

        {footerSections.length ? (
          <div className="grid gap-5 sm:justify-self-end sm:grid-cols-2">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-2">
                <p className="px-2 text-xs font-semibold uppercase tracking-[0.14em] text-zx-text-muted">{section.title}</p>
                <div className="grid gap-2">
                  {(section.links || []).map((item) => (
                    <Link
                      key={`${section.title}-${item.label}-${item.path}`}
                      to={item.path}
                      className="rounded-lg px-2 py-1 text-sm text-zx-text-muted transition hover:bg-zx-surface-strong hover:text-zx-text"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:justify-self-end">
            {(footer.links || []).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="rounded-lg px-2 py-1 text-sm text-zx-text-muted transition hover:bg-zx-surface-strong hover:text-zx-text"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
