import { Link } from 'react-router-dom'
import SeoManager from '../components/seo/SeoManager'
import PageHero from '../components/sections/PageHero'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import { organizationSchema, softwareSchema, websiteSchema } from '../content/schema'
import { useLanguage } from '../contexts/LanguageContext'

export default function AboutPage() {
  const { content } = useLanguage()
  const page = content?.pages?.about || {}

  return (
    <>
      <SeoManager meta={content?.seo?.about} schema={[organizationSchema, websiteSchema, softwareSchema]} />
      <PageHero
        kicker={page.heroKicker}
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        primaryCta={page.heroPrimaryCta}
        secondaryCta={page.heroSecondaryCta}
        preview={{
          title: page.heroPreview?.title,
          type: page.heroPreview?.type || 'reports',
          caption: page.heroPreview?.caption,
          callouts: page.heroPreview?.callouts || [],
        }}
      />

      <section className="section-shell">
        <SectionHeading title={page.principles?.title} subtitle={page.principles?.subtitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {(page.principles?.items || []).map((item) => (
            <Card key={item.title}>
              <h3 className="font-heading text-lg font-semibold text-zx-text">{item.title}</h3>
              <p className="mt-3 text-sm text-zx-text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          {(page.operatingModel || []).map((item) => (
            <Card key={item.title}>
              <h3 className="font-heading text-xl font-semibold text-zx-text">{item.title}</h3>
              <p className="mt-3 text-sm text-zx-text-muted">{item.subtitle}</p>
              <ul className="mt-5 space-y-3 text-sm text-zx-text-muted">
                {(item.items || []).map((entry) => (
                  <li key={entry} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-zx-accent" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <div className="zx-card">
          <SectionHeading title={page.cta?.title} subtitle={page.cta?.subtitle} />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={page.cta?.primary?.path || '/product'} className="zx-button zx-button-primary">
              {page.cta?.primary?.label}
            </Link>
            <Link to={page.cta?.secondary?.path || '/contact'} className="zx-button zx-button-secondary">
              {page.cta?.secondary?.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
