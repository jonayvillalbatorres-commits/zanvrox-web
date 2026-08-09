import { Link } from 'react-router';
import Card from '../ui/Card';
import { BILLING_PERIODS, CONTACT_PROMOS, createContactDemoLink } from '../../utils/contactDemo';

function CheckIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const LOCALE_BY_LANGUAGE = {
  en: 'en-CA',
  fr: 'fr-CA',
  es: 'es-ES',
  zh: 'zh-CN',
  pa: 'pa-IN',
  ar: 'ar',
  tl: 'tl-PH',
};

const formatPrice = (value, language = 'en') => {
  const locale = LOCALE_BY_LANGUAGE[language] || 'en-CA';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
};

const renderPriceLabel = (entry, pricing, language, amountOverride) => {
  if (entry?.kind === 'custom') {
    return entry?.label || pricing?.customLabel || 'Custom';
  }

  const amount = formatPrice(amountOverride ?? entry?.amount, language);
  const prefix = entry?.kind === 'from' ? `${pricing?.fromLabel || 'From'} ` : '';

  return `${prefix}${amount}`;
};

export default function PricingCard({
  tier,
  pricing,
  language = 'en',
  billingPeriod = BILLING_PERIODS.monthly,
}) {
  const isPopular = Boolean(tier?.isPopular);
  const isAnnual = billingPeriod === BILLING_PERIODS.annual;
  const activePricing = isAnnual ? tier?.annual : tier?.monthly;
  // Workforce shows the annual total (e.g. "CAD 290 / year / location") instead
  // of the monthly rate once billed annually, since "$29/month + billed
  // annually at CAD 290" reads as ambiguous. ERP keeps its existing approved
  // annual display (monthly rate headline + a "billed annually at ..." note)
  // untouched — this only activates when the pricing group opts in.
  const isAnnualTotalDisplay =
    isAnnual && pricing?.annualDisplayMode === 'total' && activePricing?.kind === 'fixed';
  const priceSuffix = isAnnualTotalDisplay
    ? pricing?.priceSuffixAnnual || pricing?.priceSuffixMonthly || '/year'
    : pricing?.priceSuffixMonthly || '/month';
  const includedItems = (tier?.included || [])
    .map((item) => String(item || '').trim())
    .filter(Boolean);
  const ctaPath = createContactDemoLink({
    plan: tier?.slug,
    billing: billingPeriod,
    promo: isAnnual
      ? pricing?.locationBasis === 'per_location'
        ? CONTACT_PROMOS.workforceAnnual
        : CONTACT_PROMOS.erpAnnual
      : '',
    language,
    hash: 'demo-form',
  });
  const workforceSlug = String(tier?.slug || '').replace(/^workforce-/, '');
  const selfServeCheckoutUrl =
    pricing?.locationBasis === 'per_location' &&
    ['starter', 'team', 'business'].includes(workforceSlug)
      ? `https://app.zanvrox.com/settings/billing?plan=${encodeURIComponent(workforceSlug)}&period=${encodeURIComponent(billingPeriod)}`
      : null;

  return (
    <Card
      className={`relative flex h-full flex-col ${
        isPopular
          ? 'border-zx-accent bg-zx-surface-strong shadow-[0_0_0_1px_rgba(49,179,255,0.35),0_24px_60px_rgba(2,8,24,0.65)] lg:scale-[1.02]'
          : ''
      }`}
    >
      <div className="absolute -top-3 left-5 flex flex-wrap gap-2">
        {isPopular ? (
          <span className="zx-badge border-zx-accent bg-zx-accent/10 text-zx-accent">
            {pricing?.popularLabel}
          </span>
        ) : null}
        {activePricing?.badge ? (
          <span className="zx-badge zx-warning-soft text-zx-warning">{activePricing.badge}</span>
        ) : null}
      </div>

      <div className="mt-4">
        <h3 className="font-heading text-2xl font-semibold text-zx-text">{tier?.name}</h3>
        <p className="mt-2 text-sm text-zx-text-muted">{tier?.summary}</p>
      </div>

      <div className="mt-6 rounded-2xl border border-zx-border bg-zx-surface-strong/80 p-4">
        <p className="text-xs uppercase tracking-[0.14em] text-zx-text-muted">
          {isAnnual ? pricing?.billedAnnuallyLabel : pricing?.billedMonthlyLabel}
        </p>
        <p className="mt-2 text-4xl font-semibold text-zx-text">
          {renderPriceLabel(
            activePricing,
            pricing,
            language,
            isAnnualTotalDisplay ? activePricing?.totalAmount : undefined
          )}
          {activePricing?.kind === 'custom' ? null : (
            <span className="ml-2 text-base font-medium text-zx-text-muted">{priceSuffix}</span>
          )}
        </p>
        {activePricing?.note ? (
          <p className="mt-2 text-sm text-zx-text-muted">{activePricing.note}</p>
        ) : null}
        {activePricing?.secondaryNote ? (
          <p className="mt-3 text-xs text-zx-accent">{activePricing.secondaryNote}</p>
        ) : null}
      </div>

      <div className="mt-5 grid gap-3 text-sm text-zx-text-muted sm:grid-cols-2">
        <div className="rounded-xl border border-zx-border bg-zx-surface-strong/70 px-3 py-3">
          <p className="text-xs uppercase tracking-[0.14em] text-zx-text-muted">
            {pricing?.entitiesIncludedLabel}
          </p>
          <p className="mt-2 font-medium text-zx-text">{tier?.entitiesLabel}</p>
        </div>
        <div className="rounded-xl border border-zx-border bg-zx-surface-strong/70 px-3 py-3">
          <p className="text-xs uppercase tracking-[0.14em] text-zx-text-muted">
            {pricing?.usersIncludedLabel}
          </p>
          <p className="mt-2 font-medium text-zx-text">{tier?.usersLabel}</p>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm text-zx-text-muted">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-zx-text-muted">
            {pricing?.includesLabel}
          </p>
          <ul className="mt-2 space-y-2">
            {includedItems.map((item) => (
              <li key={item} className="flex gap-2 text-zx-text">
                <CheckIcon className="mt-0.5 h-4 w-4 text-zx-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-2">
        {selfServeCheckoutUrl ? (
          <a
            href={selfServeCheckoutUrl}
            className={`zx-button w-full justify-center ${isPopular ? 'zx-button-primary' : 'zx-button-secondary'}`}
          >
            {tier?.ctaLabel}
          </a>
        ) : (
          <Link
            to={ctaPath}
            className={`zx-button w-full justify-center ${isPopular ? 'zx-button-primary' : 'zx-button-secondary'}`}
          >
            {tier?.ctaLabel}
          </Link>
        )}
      </div>
    </Card>
  );
}
