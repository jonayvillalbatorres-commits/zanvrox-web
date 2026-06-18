import SeoManager from '../components/seo/SeoManager'
import PageHero from '../components/sections/PageHero'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import StatusPill from '../components/ui/StatusPill'
import { useLanguage } from '../contexts/LanguageContext'
import { organizationSchema, softwareSchema } from '../content/schema'

export default function PlatformPage() {
  const { content } = useLanguage()
  const page = content?.pages?.platform || {}

  return (
    <>
      <SeoManager meta={content?.seo?.platform} schema={[organizationSchema, softwareSchema]} />
      <PageHero title={page.heroTitle} subtitle={page.heroSubtitle} preview={{ type: 'accounting' }} />

      <section className="section-shell pb-16">
        <SectionHeading title={page.heading?.title} subtitle={page.heading?.subtitle} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {(page.sections || []).map((section) => (
            <Card key={section.title}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-heading text-xl font-semibold text-zx-text">{section.title}</h3>
                <StatusPill status={section.status || 'available'}>{section.statusLabel || page.availableLabel}</StatusPill>
              </div>
              <ul className="space-y-3 text-sm text-zx-text-muted">
                {(section.points || []).map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-zx-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}

