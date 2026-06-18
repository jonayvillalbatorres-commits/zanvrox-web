import SeoManager from '../../components/seo/SeoManager'
import PageHero from '../../components/sections/PageHero'
import Card from '../../components/ui/Card'
import { useLanguage } from '../../contexts/LanguageContext'
import { organizationSchema } from '../../content/schema'

export default function PrivacyPage() {
  const { content } = useLanguage()
  const page = content?.pages?.legal?.privacy || {}

  return (
    <>
      <SeoManager meta={content?.seo?.privacy} schema={organizationSchema} />
      <PageHero title={page.title} subtitle={`${page.updatedLabel}: ${page.updated}`} />
      <section className="section-shell pb-16">
        <Card className="space-y-4 text-sm text-zx-text-muted">
          {(page.paragraphs || []).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Card>
      </section>
    </>
  )
}
