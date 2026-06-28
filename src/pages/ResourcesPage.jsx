import { Link } from 'react-router-dom';
import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import { organizationSchema, softwareSchema, websiteSchema } from '../content/schema';
import { useLanguage } from '../contexts/LanguageContext';
import { isGuidedDemoLoginUrl, resolvePublicAppLink } from '../utils/publicApp';

export default function ResourcesPage() {
  const { content } = useLanguage();
  const page = content?.pages?.resources || {};
  const demoCtaHref = resolvePublicAppLink(page.demoEnvironment?.cta?.path);
  const demoCtaIsExternal = /^https?:\/\//i.test(demoCtaHref);
  const showLegacySharedCredentials = !isGuidedDemoLoginUrl(demoCtaHref);

  return (
    <>
      <SeoManager
        meta={content?.seo?.resources}
        schema={[organizationSchema, websiteSchema, softwareSchema]}
      />
      <PageHero
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        preview={{ type: 'expenses' }}
      />

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {(page.sections || []).map((section) => (
            <Card key={section.title}>
              <h3 className="font-heading text-xl font-semibold text-zx-text">{section.title}</h3>
              <p className="mt-3 text-sm text-zx-text-muted">{section.description}</p>
              <Link
                to={section.path || '/product'}
                className="zx-button zx-button-secondary mt-5 w-full justify-center"
              >
                {section.cta}
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell" id="demo-environment">
        <div className="zx-card">
          <SectionHeading
            title={page.demoEnvironment?.title}
            subtitle={page.demoEnvironment?.subtitle}
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-3">
              <div className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text-muted">
                {page.demoEnvironment?.note}
              </div>
              {(page.demoEnvironment?.guidance || []).map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text-muted"
                >
                  {item}
                </div>
              ))}
              {page.demoEnvironment?.cta ? (
                <div className="pt-1">
                  {demoCtaIsExternal ? (
                    <a href={demoCtaHref} className="zx-button zx-button-secondary">
                      {page.demoEnvironment.cta.label}
                    </a>
                  ) : (
                    <Link to={demoCtaHref} className="zx-button zx-button-secondary">
                      {page.demoEnvironment.cta.label}
                    </Link>
                  )}
                </div>
              ) : null}
            </div>
            <Card className="h-full">
              <div className="space-y-5">
                {page.demoEnvironment?.accessTitle ? (
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-zx-accent">
                      {page.demoEnvironment.accessTitle}
                    </p>
                    {page.demoEnvironment?.accessIntro ? (
                      <p className="mt-2 text-sm text-zx-text-muted">
                        {page.demoEnvironment.accessIntro}
                      </p>
                    ) : null}
                  </div>
                ) : null}
                {showLegacySharedCredentials ? (
                  <>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-zx-text-muted">
                        {page.demoEnvironment?.emailLabel}
                      </p>
                      <p className="mt-2 text-base font-semibold text-zx-text">
                        {page.demoEnvironment?.emailValue}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-zx-text-muted">
                        {page.demoEnvironment?.passwordLabel}
                      </p>
                      <p className="mt-2 text-base font-semibold text-zx-text">
                        {page.demoEnvironment?.passwordValue}
                      </p>
                    </div>
                  </>
                ) : null}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading title={page.sitemap?.title} subtitle={page.sitemap?.subtitle} />
        <Card className="mt-8">
          <ul className="grid gap-2 text-sm text-zx-text-muted sm:grid-cols-2">
            {(page.sitemap?.items || []).map((item) => (
              <li
                key={item}
                className="rounded-lg border border-zx-border bg-zx-surface-strong px-3 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="section-shell pb-16">
        <SectionHeading title={page.design?.title} subtitle={page.design?.subtitle} />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card>
            <h3 className="font-heading text-lg font-semibold text-zx-text">
              {page.design?.directionTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zx-text-muted">
              {(page.design?.direction || []).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-heading text-lg font-semibold text-zx-text">
              {page.design?.componentsTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zx-text-muted">
              {(page.design?.components || []).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-heading text-lg font-semibold text-zx-text">
              {page.design?.statesTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zx-text-muted">
              {(page.design?.states || []).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}
