import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import PricingCard from '../components/pricing/PricingCard';
import PricingComparison from '../components/pricing/PricingComparison';
import PricingFAQ from '../components/pricing/PricingFAQ';
import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import {
  createFaqSchema,
  organizationSchema,
  softwareSchema,
  websiteSchema,
  workforceSoftwareSchema,
} from '../content/schema';
import { useLanguage } from '../contexts/LanguageContext';
import { BILLING_PERIODS, CONTACT_PROMOS, createContactDemoLink } from '../utils/contactDemo';

function BillingToggle({ billingToggle, billingPeriod, onChange }) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-zx-border bg-zx-surface-strong/80 p-2">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onChange(BILLING_PERIODS.monthly)}
          className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
            billingPeriod === BILLING_PERIODS.monthly
              ? 'bg-zx-accent text-zx-bg shadow-[0_12px_24px_rgba(23,151,234,0.28)]'
              : 'bg-zx-surface text-zx-text-muted hover:text-zx-text'
          }`}
        >
          {billingToggle?.monthly}
        </button>
        <button
          type="button"
          onClick={() => onChange(BILLING_PERIODS.annual)}
          className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
            billingPeriod === BILLING_PERIODS.annual
              ? 'bg-zx-accent text-zx-bg shadow-[0_12px_24px_rgba(23,151,234,0.28)]'
              : 'bg-zx-surface text-zx-text-muted hover:text-zx-text'
          }`}
        >
          <span>{billingToggle?.annual}</span>
          {billingToggle?.annualBadge ? (
            <span
              className={`ml-2 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] ${
                billingPeriod === BILLING_PERIODS.annual
                  ? 'bg-zx-bg/15 text-zx-bg'
                  : 'bg-zx-accent/10 text-zx-accent'
              }`}
            >
              {billingToggle.annualBadge}
            </span>
          ) : null}
        </button>
      </div>
      {billingToggle?.helper ? (
        <p className="px-2 pt-3 text-xs text-zx-text-muted">{billingToggle.helper}</p>
      ) : null}
    </div>
  );
}

export default function PricingPage() {
  const { content, language } = useLanguage();
  const page = content?.pages?.pricing || {};
  const workforce = page.workforce || {};
  const erp = page.erp || {};
  const [workforceBilling, setWorkforceBilling] = useState(BILLING_PERIODS.monthly);
  const [erpBilling, setErpBilling] = useState(BILLING_PERIODS.monthly);
  const erpPromo = erpBilling === BILLING_PERIODS.annual ? CONTACT_PROMOS.annualLaunch : '';
  const pricingFaqSchema = useMemo(() => createFaqSchema(page?.faq?.items), [page?.faq?.items]);

  const primaryCta = createContactDemoLink({
    billing: erpBilling,
    promo: erpPromo,
    language,
    hash: 'demo-form',
  });
  const secondaryCta = createContactDemoLink({
    billing: erpBilling,
    promo: erpPromo,
    language,
    hash: 'technical-brief',
  });
  const payrollCta = createContactDemoLink({
    billing: erpBilling,
    payrollInterest: true,
    promo: erpPromo,
    language,
    hash: 'demo-form',
  });
  const onboardingCta = createContactDemoLink({
    billing: erpBilling,
    promo: erpPromo,
    language,
    source: 'guided-implementation',
    hash: 'technical-brief',
  });

  return (
    <>
      <SeoManager
        meta={content?.seo?.pricing}
        schema={[
          organizationSchema,
          websiteSchema,
          softwareSchema,
          workforceSoftwareSchema,
          pricingFaqSchema,
        ]}
      />
      <PageHero
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        preview={{ type: 'invoices' }}
      />

      {page.upgradePath ? (
        <section className="section-shell">
          <div className="zx-card">
            <SectionHeading
              eyebrow={page.upgradePath.eyebrow}
              title={page.upgradePath.title}
              subtitle={page.upgradePath.subtitle}
            />
            <div className="mt-6 grid gap-3 md:grid-cols-5">
              {(page.upgradePath.steps || []).map((step) => (
                <div
                  key={step.name}
                  className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3"
                >
                  <p className="text-sm font-semibold text-zx-text">{step.name}</p>
                  <p className="mt-1 text-xs text-zx-text-muted">{step.body}</p>
                </div>
              ))}
            </div>
            {page.upgradePath.note ? (
              <p className="mt-5 text-sm text-zx-text-muted">{page.upgradePath.note}</p>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="section-shell" id="workforce-pricing">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title={workforce.title} subtitle={workforce.subtitle} />
          <BillingToggle
            billingToggle={workforce.billingToggle}
            billingPeriod={workforceBilling}
            onChange={setWorkforceBilling}
          />
        </div>

        <div className="mt-6 space-y-2">
          <p className="inline-flex rounded-full border border-zx-accent bg-zx-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-zx-accent">
            {workforce.launchBadge}
          </p>
          <p className="text-sm text-zx-text">{workforce.launchOfferLabel}</p>
          <p className="text-sm text-zx-text-muted">{workforce.launchOfferNote}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {(workforce.tiers || []).map((tier) => (
            <PricingCard
              key={tier.slug || tier.name}
              tier={tier}
              pricing={workforce}
              language={language}
              billingPeriod={workforceBilling}
            />
          ))}
        </div>
      </section>

      <PricingComparison pricing={workforce} billingPeriod={workforceBilling} />

      <section className="section-shell" id="erp-pricing">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title={erp.title} subtitle={erp.subtitle} />
          <BillingToggle
            billingToggle={erp.billingToggle}
            billingPeriod={erpBilling}
            onChange={setErpBilling}
          />
        </div>

        <div className="mt-6 space-y-2">
          <p className="inline-flex rounded-full border border-zx-accent bg-zx-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-zx-accent">
            {erp.launchBadge}
          </p>
          <p className="text-sm text-zx-text">{erp.launchOfferLabel}</p>
          <p className="text-sm text-zx-text-muted">{erp.launchOfferNote}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {(erp.tiers || []).map((tier) => (
            <PricingCard
              key={tier.slug || tier.name}
              tier={tier}
              pricing={erp}
              language={language}
              billingPeriod={erpBilling}
            />
          ))}
        </div>

        <p className="mt-5 text-sm text-zx-text-muted">{page.pricingNote}</p>
      </section>

      {page.bundleOffers ? (
        <section className="section-shell">
          <div className="grid gap-4 md:grid-cols-3">
            {Object.values(page.bundleOffers).map((offer) => (
              <Card key={offer.title}>
                <h3 className="font-heading text-base font-semibold text-zx-text">{offer.title}</h3>
                <p className="mt-2 text-sm text-zx-text-muted">{offer.body}</p>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-shell">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="zx-cta-panel rounded-3xl border border-zx-border p-8 shadow-panel">
            <SectionHeading
              title={page.payrollAddon?.title}
              subtitle={page.payrollAddon?.summary}
            />
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {(page.payrollAddon?.included || []).map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text-muted"
                >
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={payrollCta} className="zx-button zx-button-secondary">
                {page.payrollAddon?.ctaLabel}
              </Link>
            </div>
          </div>

          <Card className="h-full">
            <p className="text-xs uppercase tracking-[0.14em] text-zx-text-muted">
              {erpBilling === BILLING_PERIODS.annual
                ? erp.billedAnnuallyLabel
                : erp.billedMonthlyLabel}
            </p>
            <p className="mt-2 text-3xl font-semibold text-zx-text">
              {erpBilling === BILLING_PERIODS.annual
                ? page.payrollAddon?.annualPriceLabel
                : page.payrollAddon?.priceLabel}
            </p>
            <p className="mt-3 text-sm text-zx-text-muted">
              {erpBilling === BILLING_PERIODS.annual
                ? page.payrollAddon?.annualNote
                : page.payrollAddon?.monthlyNote}
            </p>
          </Card>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Card className="h-full">
            <SectionHeading
              title={page.onboardingPackage?.title}
              subtitle={page.onboardingPackage?.summary}
            />
            <p className="mt-5 text-3xl font-semibold text-zx-text">
              {page.onboardingPackage?.priceLabel}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-zx-text-muted">
              {(page.onboardingPackage?.included || []).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-zx-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {page.onboardingPackage?.note ? (
              <p className="mt-5 text-sm text-zx-text-muted">{page.onboardingPackage.note}</p>
            ) : null}
            <div className="mt-6">
              <Link to={onboardingCta} className="zx-button zx-button-secondary">
                {page.onboardingPackage?.ctaLabel}
              </Link>
            </div>
          </Card>

          <div className="zx-card">
            <SectionHeading
              title={page.supportTiers?.title}
              subtitle={page.supportTiers?.subtitle}
            />
            <div className="mt-6 grid gap-3">
              {(page.supportTiers?.items || []).map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3"
                >
                  <p className="text-sm font-semibold text-zx-text">{item.name}</p>
                  <p className="mt-2 text-sm text-zx-text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingComparison pricing={erp} billingPeriod={erpBilling} />

      <PricingFAQ pricing={page} />

      <section className="section-shell pb-16">
        <div className="flex flex-wrap gap-3">
          <Link to={primaryCta} className="zx-button zx-button-primary">
            {page.ctaPrimary?.label}
          </Link>
          <Link to={secondaryCta} className="zx-button zx-button-secondary">
            {page.ctaSecondary?.label}
          </Link>
        </div>
      </section>
    </>
  );
}
