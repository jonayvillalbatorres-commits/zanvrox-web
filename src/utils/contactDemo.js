export const BILLING_PERIODS = {
  monthly: 'monthly',
  annual: 'annual',
};

export const CONTACT_PROMOS = {
  workforceAnnual: 'workforce-annual-2-months-free',
  erpAnnual: 'erp-annual-1-month-free',
};

const KNOWN_PROMOS = new Set(Object.values(CONTACT_PROMOS));

const KNOWN_PLANS = new Set([
  'finance',
  'business',
  'operations',
  'enterprise',
  'workforce-starter',
  'workforce-team',
  'workforce-business',
  'workforce-multi-location',
]);

export const normalizePlan = (value) => {
  const normalized = String(value || '')
    .trim()
    .toLowerCase();
  return KNOWN_PLANS.has(normalized) ? normalized : '';
};

export const normalizeBilling = (value) => {
  return value === BILLING_PERIODS.annual ? BILLING_PERIODS.annual : BILLING_PERIODS.monthly;
};

export const normalizePromo = (value, billing) => {
  if (KNOWN_PROMOS.has(value) && billing === BILLING_PERIODS.annual) {
    return value;
  }
  return '';
};

export const getContactDemoContext = (search) => {
  const params = search instanceof URLSearchParams ? search : new URLSearchParams(search);
  const billing = normalizeBilling(params.get('billing'));
  const plan = normalizePlan(params.get('plan'));
  const payrollInterest = params.get('payroll') === '1';
  const promo = normalizePromo(params.get('promo'), billing);
  const language = String(params.get('lang') || '')
    .trim()
    .toLowerCase();
  const source = String(params.get('source') || '')
    .trim()
    .toLowerCase();

  return {
    billing,
    plan,
    payrollInterest,
    promo,
    language,
    source,
    hasSelection: Boolean(plan || payrollInterest || promo || source),
  };
};

export const createContactDemoLink = ({
  plan = '',
  billing = BILLING_PERIODS.monthly,
  payrollInterest = false,
  promo = '',
  language = '',
  source = 'pricing',
  hash = 'demo-form',
} = {}) => {
  const normalizedBilling = normalizeBilling(billing);
  const normalizedPlan = normalizePlan(plan);
  const normalizedPromo = normalizePromo(promo, normalizedBilling);
  const params = new URLSearchParams();

  if (source) params.set('source', source);
  if (normalizedPlan) params.set('plan', normalizedPlan);
  if (normalizedBilling === BILLING_PERIODS.annual) params.set('billing', BILLING_PERIODS.annual);
  if (payrollInterest) params.set('payroll', '1');
  if (normalizedPromo) params.set('promo', normalizedPromo);
  if (language) params.set('lang', language);

  return {
    pathname: '/contact',
    search: params.toString() ? `?${params.toString()}` : '',
    hash: hash ? `#${hash}` : '',
  };
};
