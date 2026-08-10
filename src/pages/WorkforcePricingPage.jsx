import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import BillingToggle from '../components/pricing/BillingToggle';
import PricingCard from '../components/pricing/PricingCard';
import PricingComparison from '../components/pricing/PricingComparison';
import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import {
  createFaqSchema,
  organizationSchema,
  websiteSchema,
  workforceSoftwareSchema,
} from '../content/schema';
import { useLanguage } from '../contexts/LanguageContext';
import { BILLING_PERIODS } from '../utils/contactDemo';

export default function WorkforcePricingPage() {
  const { content, language } = useLanguage();
  const page = content?.pages?.pricing || {};
  const workforce = page.workforce || {};
  const existingCustomer = content?.pages?.workforce?.existingCustomer;
  const [billingPeriod, setBillingPeriod] = useState(BILLING_PERIODS.monthly);
  const faqSchema = useMemo(() => createFaqSchema(workforce?.faq?.items), [workforce?.faq?.items]);

  return (
    <>
      <SeoManager
        meta={content?.seo?.workforcePricing}
        schema={[organizationSchema, websiteSchema, workforceSoftwareSchema, faqSchema]}
      />
      <PageHero
        title={workforce.title}
        subtitle={workforce.subtitle}
        preview={{ type: 'workforce' }}
      />

      {workforce.betaBanner ? (
        <section className="section-shell">
          <div className="zx-glass-strip flex flex-wrap items-center justify-between gap-4 px-5 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zx-accent">
                {workforce.betaBanner.eyebrow}
              </p>
              <p className="mt-1 font-heading text-base font-semibold text-zx-text">
                {workforce.betaBanner.title}
              </p>
              <p className="mt-1 text-sm text-zx-text-muted">{workforce.betaBanner.body}</p>
            </div>
            {workforce.betaBanner.cta ? (
              <Link to={workforce.betaBanner.cta.path} className="zx-button zx-button-primary">
                {workforce.betaBanner.cta.label}
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-end">
          <BillingToggle
            billingToggle={workforce.billingToggle}
            billingPeriod={billingPeriod}
            onChange={setBillingPeriod}
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
              billingPeriod={billingPeriod}
            />
          ))}
        </div>
      </section>

      <PricingComparison pricing={workforce} billingPeriod={billingPeriod} />

      {existingCustomer ? (
        <section className="section-shell">
          <div className="zx-glass-strip flex flex-wrap items-center justify-between gap-4 px-5 py-5">
            <div>
              <p className="font-heading text-base font-semibold text-zx-text">
                {existingCustomer.title}
              </p>
              <p className="mt-1 text-sm text-zx-text-muted">{existingCustomer.body}</p>
            </div>
            {existingCustomer.cta ? (
              <Link to={existingCustomer.cta.path} className="zx-button zx-button-secondary">
                {existingCustomer.cta.label}
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}

      {workforce.faq ? (
        <section className="section-shell pb-16">
          <SectionHeading title={workforce.faq.title} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {(workforce.faq.items || []).map((item) => (
              <Card key={item.question}>
                <h3 className="font-heading text-lg font-semibold text-zx-text">{item.question}</h3>
                <p className="mt-2 text-sm text-zx-text-muted">{item.answer}</p>
              </Card>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
