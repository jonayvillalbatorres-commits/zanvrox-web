import { Link } from 'react-router-dom';
import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';
import { organizationSchema, softwareSchema } from '../content/schema';

export default function SolutionsFoodDistributionPage() {
  const { content } = useLanguage();
  const page = content?.pages?.solutions?.foodDistribution || {};

  return (
    <>
      <SeoManager
        meta={content?.seo?.solutionsFoodDistribution}
        schema={[organizationSchema, softwareSchema]}
      />
      <PageHero
        kicker={content?.pages?.solutions?.kicker}
        title={page.title}
        subtitle={page.subtitle}
        secondaryCta={page.secondaryCta}
        preview={{ type: 'warehouse' }}
      />

      <section className="section-shell">
        <SectionHeading title={page.scopeTitle} subtitle={page.scopeSubtitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {(page.included || []).map((item) => (
            <Card key={item}>
              <p className="text-sm text-zx-text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <Link to="/contact-demo" className="zx-button zx-button-primary">
          {page.cta}
        </Link>
      </section>
    </>
  );
}
