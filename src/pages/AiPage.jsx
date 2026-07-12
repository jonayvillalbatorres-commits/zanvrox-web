import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';
import { organizationSchema, softwareSchema } from '../content/schema';

export default function AiPage() {
  const { content } = useLanguage();
  const page = content?.pages?.ai || {};

  return (
    <>
      <SeoManager meta={content?.seo?.ai} schema={[organizationSchema, softwareSchema]} />
      <PageHero title={page.heroTitle} subtitle={page.heroSubtitle} preview={{ type: 'ai' }} />

      <section className="section-shell">
        <SectionHeading title={page.scope?.title} subtitle={page.scope?.subtitle} />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {(page.scope?.items || []).map((item) => (
            <Card key={item}>
              <p className="text-sm text-zx-text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <Card>
          <p className="text-sm text-zx-text-muted">{page.note}</p>
        </Card>
      </section>
    </>
  );
}
