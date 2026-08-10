import { Link } from 'react-router';
import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import { organizationSchema, websiteSchema, workforceSoftwareSchema } from '../content/schema';
import { useLanguage } from '../contexts/LanguageContext';

export default function WorkforcePage() {
  const { content } = useLanguage();
  const page = content?.pages?.workforce || {};

  return (
    <>
      <SeoManager
        meta={content?.seo?.workforce}
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

      {page.existingCustomer ? (
        <section className="section-shell">
          <div className="zx-glass-strip flex flex-wrap items-center justify-between gap-4 px-5 py-5">
            <div>
              <p className="font-heading text-base font-semibold text-zx-text">
                {page.existingCustomer.title}
              </p>
              <p className="mt-1 text-sm text-zx-text-muted">{page.existingCustomer.body}</p>
            </div>
            {page.existingCustomer.cta ? (
              <Link to={page.existingCustomer.cta.path} className="zx-button zx-button-secondary">
                {page.existingCustomer.cta.label}
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}

      <section id="features" className="section-shell">
        <SectionHeading
          eyebrow={page.sections?.eyebrow}
          title={page.sections?.title}
          subtitle={page.sections?.subtitle}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {(page.sections?.items || []).map((item) => (
            <Card key={item.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zx-accent">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-zx-text">{item.title}</h3>
              <p className="mt-2 text-sm text-zx-text-muted">{item.body}</p>
              <ul className="mt-4 space-y-2 text-sm text-zx-text-muted">
                {(item.bullets || []).map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zx-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="zx-card">
          <SectionHeading title={page.industries?.title} subtitle={page.industries?.subtitle} />
          <div className="mt-6 flex flex-wrap gap-2">
            {(page.industries?.items || []).map((item) => (
              <span key={item} className="zx-badge">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16">
        <div className="zx-cta-panel rounded-3xl border border-zx-border p-8 shadow-panel">
          <h2 className="font-heading text-2xl font-semibold text-zx-text">{page.cta?.title}</h2>
          <p className="mt-3 max-w-2xl text-sm text-zx-text-muted">{page.cta?.subtitle}</p>
          {page.cta?.accessNote ? (
            <p className="mt-2 max-w-2xl text-xs text-zx-text-muted">{page.cta.accessNote}</p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={page.cta?.primary?.path || '/pricing'}
              className="zx-button zx-button-primary"
            >
              {page.cta?.primary?.label}
            </Link>
            <Link
              to={page.cta?.secondary?.path || '/workforce/restaurants'}
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
