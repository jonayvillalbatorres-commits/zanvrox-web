import { Link } from 'react-router-dom'
import SeoManager from '../components/seo/SeoManager'
import PageHero from '../components/sections/PageHero'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'
import { organizationSchema, softwareSchema, websiteSchema } from '../content/schema'

export default function SecurityArchitecturePage() {
  const { content } = useLanguage()
  const page = content?.pages?.security || {}

  return (
    <>
      <SeoManager meta={content?.seo?.security} schema={[organizationSchema, websiteSchema, softwareSchema]} />
      <PageHero title={page.heroTitle} subtitle={page.heroSubtitle} preview={{ type: 'reports' }} />

      <section className="section-shell">
        <SectionHeading title={page.overview?.title} subtitle={page.overview?.subtitle} />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="h-full">
            <p className="text-sm text-zx-text-muted">{page.overview?.description}</p>
          </Card>
          <div className="grid gap-3">
            {(page.overview?.bullets || []).map((item) => (
              <div key={item} className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading title={page.matrix?.title} subtitle={page.matrix?.subtitle} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {(page.controls || []).map((control) => (
            <Card key={control.control}>
              <h3 className="font-heading text-xl font-semibold text-zx-text">{control.control}</h3>
              <p className="mt-3 text-sm text-zx-text-muted">{control.support}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 md:grid-cols-2">
          {(page.sections || []).map((section) => (
            <Card key={section.title}>
              <h3 className="font-heading text-xl font-semibold text-zx-text">{section.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-zx-text-muted">
                {(section.items || []).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-zx-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading title={page.subprocessors?.title} subtitle={page.subprocessors?.subtitle} />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {(page.subprocessors?.items || []).map((item) => (
            <Card key={item.name}>
              <h3 className="font-heading text-xl font-semibold text-zx-text">{item.name}</h3>
              <p className="mt-3 text-sm text-zx-text-muted">{item.support}</p>
            </Card>
          ))}
        </div>
        {page.subprocessors?.note ? (
          <div className="mt-6 rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text-muted">
            {page.subprocessors.note}
          </div>
        ) : null}
      </section>

      <section className="section-shell pb-16">
        <SectionHeading title={page.disclosures?.title} subtitle={page.disclosures?.subtitle} />
        <div className="mt-8 space-y-3 rounded-xl border border-zx-border bg-zx-surface-strong p-6 text-sm text-zx-text-muted">
          {(page.disclosures?.items || []).map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        {page.cta ? (
          <div className="zx-card mt-8">
            <SectionHeading title={page.cta?.title} subtitle={page.cta?.subtitle} />
            <div className="mt-6 flex flex-wrap gap-3">
              {page.cta?.primary?.path ? (
                <Link to={page.cta.primary.path} className="zx-button zx-button-primary">
                  {page.cta.primary.label}
                </Link>
              ) : null}
              {page.cta?.secondary?.path ? (
                <Link to={page.cta.secondary.path} className="zx-button zx-button-secondary">
                  {page.cta.secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}
