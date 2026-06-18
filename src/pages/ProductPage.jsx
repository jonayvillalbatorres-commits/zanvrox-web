import { Link } from 'react-router-dom'
import SeoManager from '../components/seo/SeoManager'
import PageHero from '../components/sections/PageHero'
import Card from '../components/ui/Card'
import ProductPreview from '../components/ui/ProductPreview'
import SectionHeading from '../components/ui/SectionHeading'
import { organizationSchema, softwareSchema, websiteSchema } from '../content/schema'
import { useLanguage } from '../contexts/LanguageContext'
import taxDashboardImage from '../assets/screens/tax-dashboard.png'

const IMAGE_BY_KEY = {
  taxDashboard: taxDashboardImage,
}

export default function ProductPage() {
  const { content } = useLanguage()
  const page = content?.pages?.product || {}

  return (
    <>
      <SeoManager meta={content?.seo?.product} schema={[organizationSchema, websiteSchema, softwareSchema]} />
      <PageHero
        kicker={page.heroKicker}
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        primaryCta={page.heroPrimaryCta}
        secondaryCta={page.heroSecondaryCta}
        preview={{
          title: page.heroPreview?.title,
          type: page.heroPreview?.type || 'inventory',
          caption: page.heroPreview?.caption,
          callouts: page.heroPreview?.callouts || [],
        }}
      />

      <section className="section-shell">
        <SectionHeading title={page.pillars?.title} subtitle={page.pillars?.subtitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {(page.pillars?.items || []).map((item) => (
            <Card key={item.title}>
              <h3 className="font-heading text-lg font-semibold text-zx-text">{item.title}</h3>
              <p className="mt-3 text-sm text-zx-text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading title={page.showcase?.title} subtitle={page.showcase?.subtitle} />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {(page.showcase?.items || []).map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <ProductPreview
                type={item.previewType}
                imageSrc={IMAGE_BY_KEY[item.imageKey]}
                imageAlt={item.imageAlt || item.title}
              />
              <h3 className="mt-5 font-heading text-xl font-semibold text-zx-text">{item.title}</h3>
              <p className="mt-2 text-sm text-zx-text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          {(page.stacks || []).map((stack) => (
            <Card key={stack.title}>
              <h3 className="font-heading text-xl font-semibold text-zx-text">{stack.title}</h3>
              <p className="mt-3 text-sm text-zx-text-muted">{stack.subtitle}</p>
              <ul className="mt-5 space-y-3 text-sm text-zx-text-muted">
                {(stack.items || []).map((item) => (
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
        <SectionHeading title={page.onboarding?.title} subtitle={page.onboarding?.subtitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {(page.onboarding?.steps || []).map((step) => (
            <Card key={step.number}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zx-accent">{step.number}</p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-zx-text">{step.title}</h3>
              <p className="mt-2 text-sm text-zx-text-muted">{step.body}</p>
            </Card>
          ))}
        </div>
        {page.onboarding?.note ? <p className="mt-5 text-sm text-zx-text-muted">{page.onboarding.note}</p> : null}
      </section>

      <section className="section-shell pb-16">
        <div className="zx-cta-panel rounded-3xl border border-zx-border p-8 shadow-panel">
          <h2 className="font-heading text-2xl font-semibold text-zx-text">{page.cta?.title}</h2>
          <p className="mt-3 max-w-2xl text-sm text-zx-text-muted">{page.cta?.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={page.cta?.primary?.path || '/pricing'} className="zx-button zx-button-primary">
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
