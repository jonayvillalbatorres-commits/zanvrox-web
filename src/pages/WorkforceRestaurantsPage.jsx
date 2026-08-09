import { Link } from 'react-router';
import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import { organizationSchema, websiteSchema, workforceSoftwareSchema } from '../content/schema';
import { useLanguage } from '../contexts/LanguageContext';

export default function WorkforceRestaurantsPage() {
  const { content } = useLanguage();
  const page = content?.pages?.workforceRestaurants || {};

  return (
    <>
      <SeoManager
        meta={content?.seo?.workforceRestaurants}
        schema={[organizationSchema, websiteSchema, workforceSoftwareSchema]}
      />
      <PageHero
        kicker={page.heroKicker}
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        primaryCta={page.heroPrimaryCta}
        secondaryCta={page.heroSecondaryCta}
        preview={{
          title: page.heroPreview?.title,
          type: page.heroPreview?.type || 'workforce',
          caption: page.heroPreview?.caption,
          callouts: page.heroPreview?.callouts || [],
        }}
      />

      <section className="section-shell">
        <SectionHeading
          eyebrow={page.timeline?.eyebrow}
          title={page.timeline?.title}
          subtitle={page.timeline?.subtitle}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {(page.timeline?.stages || []).map((stage) => (
            <Card key={stage.name}>
              <h3 className="font-heading text-lg font-semibold text-zx-text">{stage.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zx-text-muted">
                {(stage.items || []).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zx-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {page.crossSell ? (
        <section className="section-shell">
          <div className="zx-glass-strip flex flex-wrap items-center justify-between gap-4 px-5 py-5">
            <div>
              <p className="font-heading text-base font-semibold text-zx-text">
                {page.crossSell.title}
              </p>
              <p className="mt-1 text-sm text-zx-text-muted">{page.crossSell.body}</p>
            </div>
            {page.crossSell.cta ? (
              <Link to={page.crossSell.cta.path} className="zx-button zx-button-secondary">
                {page.crossSell.cta.label}
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="section-shell pb-16">
        <div className="zx-cta-panel rounded-3xl border border-zx-border p-8 shadow-panel">
          <h2 className="font-heading text-2xl font-semibold text-zx-text">{page.cta?.title}</h2>
          <p className="mt-3 max-w-2xl text-sm text-zx-text-muted">{page.cta?.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={page.cta?.primary?.path || '/pricing'}
              className="zx-button zx-button-primary"
            >
              {page.cta?.primary?.label}
            </Link>
            <Link
              to={page.cta?.secondary?.path || '/workforce/beta'}
              className="zx-button zx-button-secondary"
            >
              {page.cta?.secondary?.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
