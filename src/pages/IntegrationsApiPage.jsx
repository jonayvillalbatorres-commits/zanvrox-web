import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';
import { organizationSchema, softwareSchema } from '../content/schema';

export default function IntegrationsApiPage() {
  const { content } = useLanguage();
  const page = content?.pages?.integrations || {};

  return (
    <>
      <SeoManager meta={content?.seo?.integrations} schema={[organizationSchema, softwareSchema]} />
      <PageHero
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        preview={{ type: 'purchases' }}
      />

      <section className="section-shell">
        <SectionHeading title={page.posture?.title} subtitle={page.posture?.subtitle} />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {(page.posture?.items || []).map((item) => (
            <Card key={item}>
              <p className="text-sm text-zx-text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <SectionHeading title={page.publication?.title} subtitle={page.publication?.subtitle} />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {(page.publication?.items || []).map((item) => (
            <Card key={item}>
              <p className="text-sm text-zx-text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
