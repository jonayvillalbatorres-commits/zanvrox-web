import { useMemo } from 'react';
import { Link } from 'react-router';
import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import ProductVideo from '../components/sections/ProductVideo';
import Card from '../components/ui/Card';
import ProductPreview from '../components/ui/ProductPreview';
import SectionHeading from '../components/ui/SectionHeading';
import StatusBadge from '../components/ui/StatusBadge';
import {
  createFaqSchema,
  organizationSchema,
  softwareSchema,
  websiteSchema,
} from '../content/schema';
import { useLanguage } from '../contexts/LanguageContext';
import taxDashboardImage from '../assets/screens/tax-dashboard.png';
import { isGuidedDemoLoginUrl, resolvePublicAppLink } from '../utils/publicApp';

const IMAGE_BY_KEY = {
  taxDashboard: taxDashboardImage,
};

export default function HomePage() {
  const { content } = useLanguage();
  const page = content?.pages?.home || {};
  const homeFaqSchema = useMemo(() => createFaqSchema(page?.faq?.items), [page?.faq?.items]);
  const heroSecondaryHref = resolvePublicAppLink(page.heroSecondaryCta?.path);
  const heroSecondaryIsExternal = /^https?:\/\//i.test(heroSecondaryHref);
  const demoWorkspaceHref = resolvePublicAppLink(page.demoEnvironment?.cta?.path);
  const demoWorkspaceIsExternal = /^https?:\/\//i.test(demoWorkspaceHref);
  const showLegacySharedCredentials = !isGuidedDemoLoginUrl(demoWorkspaceHref);

  return (
    <>
      <SeoManager
        meta={content?.seo?.home}
        schema={[organizationSchema, websiteSchema, softwareSchema, homeFaqSchema]}
      />

      <PageHero
        kicker={page.heroKicker}
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        primaryCta={page.heroPrimaryCta}
        secondaryCta={
          heroSecondaryIsExternal
            ? { ...page.heroSecondaryCta, path: heroSecondaryHref }
            : page.heroSecondaryCta
        }
        preview={{
          title: page.heroPreview?.title,
          imageSrc: taxDashboardImage,
          imageAlt: 'Tax dashboard inside ZANVROX ERP',
          caption: page.heroPreview?.caption,
          callouts: page.heroPreview?.callouts || [],
        }}
      />

      <ProductVideo video={page.video} />

      <section className="section-shell">
        <div className="zx-glass-strip grid gap-3 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {(page.trustSignals || []).map((signal) => (
            <div
              key={signal}
              className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3"
            >
              <p className="text-sm text-zx-text-muted">{signal}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="zx-glass-strip grid gap-3 px-5 py-5 sm:grid-cols-2 lg:grid-cols-3">
          {(page.statusBadges || []).map((item) => (
            <div
              key={item.text}
              className="rounded-xl border border-zx-border bg-zx-surface-strong px-3 py-3"
            >
              <StatusBadge status={item.status} text={item.text} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow={page.evaluationPath?.eyebrow}
          title={page.evaluationPath?.title}
          subtitle={page.evaluationPath?.subtitle}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {(page.evaluationPath?.cards || []).map((card) => (
            <Card key={card.title}>
              <h3 className="font-heading text-lg font-semibold text-zx-text">{card.title}</h3>
              <p className="mt-3 text-sm text-zx-text-muted">{card.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow={page.screenshots?.eyebrow}
          title={page.screenshots?.title}
          subtitle={page.screenshots?.subtitle}
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {(page.screenshots?.items || []).map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <ProductPreview
                type={item.previewType || 'reports'}
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
        <SectionHeading
          eyebrow={page.howItWorks?.eyebrow}
          title={page.howItWorks?.title}
          subtitle={page.howItWorks?.subtitle}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {(page.howItWorks?.steps || []).map((step) => (
            <Card key={step.title}>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zx-border bg-zx-surface-strong text-sm font-semibold text-zx-accent">
                {step.icon}
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-zx-text">{step.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zx-text-muted">
                {(step.bullets || []).map((bullet) => (
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
          <SectionHeading
            eyebrow={page.compliance?.eyebrow}
            title={page.compliance?.title}
            subtitle={page.compliance?.subtitle}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-3">
              {(page.compliance?.bullets || []).map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text-muted"
                >
                  {bullet}
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-4">
              <p className="text-xs uppercase tracking-[0.14em] text-zx-accent">
                {page.compliance?.coverageLabel}
              </p>
              <p className="mt-2 text-sm font-semibold text-zx-text">{page.compliance?.coverage}</p>
              <p className="mt-2 text-sm text-zx-text-muted">{page.compliance?.note}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zx-text-muted">
                {(page.compliance?.provinces || []).map((province) => (
                  <span key={province} className="rounded-full border border-zx-border px-2 py-1">
                    {province}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow={page.included?.eyebrow}
          title={page.included?.title}
          subtitle={page.included?.subtitle}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {(page.included?.items || []).map((item) => (
            <Card key={item}>
              <p className="text-sm text-zx-text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="zx-card">
            <p className="zx-badge">{page.executiveSnapshot?.badge}</p>
            <h2 className="mt-4 font-heading text-2xl font-semibold text-zx-text">
              {page.executiveSnapshot?.title}
            </h2>
            <p className="mt-3 text-sm text-zx-text-muted">{page.executiveSnapshot?.subtitle}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {(page.executiveSnapshot?.metrics || []).map((metric) => (
                <div key={metric.label} className="zx-metric-card">
                  <p className="text-2xl font-semibold text-zx-text">{metric.value}</p>
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.16em] text-zx-accent">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-xs text-zx-text-muted">{metric.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="zx-card">
            <SectionHeading
              eyebrow={page.technical?.eyebrow}
              title={page.technical?.title}
              subtitle={page.technical?.subtitle}
            />
            <div className="mt-6 grid gap-3">
              {(page.technical?.items || []).map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading title={page.supportModel?.title} subtitle={page.supportModel?.subtitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {(page.supportModel?.tiers || []).map((tier) => (
            <Card key={tier.name}>
              <h3 className="font-heading text-lg font-semibold text-zx-text">{tier.name}</h3>
              <p className="mt-3 text-sm text-zx-text-muted">{tier.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="zx-card" id="demo-environment">
          <SectionHeading
            title={page.demoEnvironment?.title}
            subtitle={page.demoEnvironment?.subtitle}
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="h-full">
              <div className="grid gap-4">
                {showLegacySharedCredentials ? (
                  <>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-zx-text-muted">
                        {page.demoEnvironment?.emailLabel}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-zx-text">
                        {page.demoEnvironment?.emailValue}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-zx-text-muted">
                        {page.demoEnvironment?.passwordLabel}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-zx-text">
                        {page.demoEnvironment?.passwordValue}
                      </p>
                    </div>
                  </>
                ) : null}
                <p className="text-sm text-zx-text-muted">{page.demoEnvironment?.note}</p>
              </div>
            </Card>
            <div className="grid gap-3">
              {(page.evaluationPath?.cards || []).slice(0, 3).map((card) => (
                <div
                  key={`${page.demoEnvironment?.title}-${card.title}`}
                  className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text-muted"
                >
                  {card.body}
                </div>
              ))}
              {page.demoEnvironment?.cta ? (
                <div className="pt-1">
                  {demoWorkspaceIsExternal ? (
                    <a href={demoWorkspaceHref} className="zx-button zx-button-secondary">
                      {page.demoEnvironment.cta.label}
                    </a>
                  ) : (
                    <Link to={demoWorkspaceHref} className="zx-button zx-button-secondary">
                      {page.demoEnvironment.cta.label}
                    </Link>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow={page.positioning?.eyebrow}
          title={page.positioning?.title}
          subtitle={page.positioning?.subtitle}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {(page.positioning?.cards || []).map((item) => (
            <Card key={item.role}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zx-accent">
                {item.role}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-zx-text">
                {item.headline}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-zx-text-muted">
                {(item.points || []).map((point) => (
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

      <section className="section-shell">
        <SectionHeading eyebrow={page.faq?.eyebrow} title={page.faq?.title} />
        <div className="mt-8 space-y-4">
          {(page.faq?.items || []).map((item) => (
            <Card key={item.question}>
              <h3 className="font-heading text-lg font-semibold text-zx-text">{item.question}</h3>
              <p className="mt-2 text-sm text-zx-text-muted">{item.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <div className="zx-cta-panel rounded-3xl border border-zx-border p-8 shadow-panel">
          <h2 className="font-heading text-2xl font-semibold text-zx-text">{page.cta?.title}</h2>
          <p className="mt-2 max-w-2xl text-zx-text-muted">{page.cta?.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={page.cta?.primary?.path || '/erp'} className="zx-button zx-button-primary">
              {page.cta?.primary?.label}
            </Link>
            <Link
              to={page.cta?.secondary?.path || '/pricing'}
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
