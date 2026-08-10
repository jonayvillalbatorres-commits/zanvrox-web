// Local canonical copy of the commercial facts (plan slugs, CAD prices,
// employee limits, annual policies, ERP/Workforce bundle meaning) used by
// this standalone public site.
//
// zanvrox-web deploys independently of the ERP and cannot import
// `packages/commercial-config` from outside its own root, so this file is
// the web's own source of truth for the values below.
//
// The ERP's canonical copy lives at `packages/commercial-config/index.js`.
// The two MUST stay identical. While both live in the same monorepo, drift
// is caught automatically by `tests/unit/commercialConfigSync.test.js` at
// the repo root, which deep-compares this file against the ERP's copy and
// fails CI if they diverge. If this file is ever edited, update the ERP
// copy (or vice versa) in the same change.
const fixedPlan = ({ slug, name, monthlyCad, annualCad, employeeLimit = null, popular = false }) =>
  Object.freeze({
    slug,
    name,
    pricingKind: 'fixed',
    currency: 'CAD',
    monthlyCad,
    annualCad,
    employeeLimit,
    popular,
  });

export const WORKFORCE_PLANS = Object.freeze({
  starter: fixedPlan({
    slug: 'starter',
    name: 'Starter',
    monthlyCad: 29,
    annualCad: 290,
    employeeLimit: 10,
  }),
  team: fixedPlan({
    slug: 'team',
    name: 'Team',
    monthlyCad: 49,
    annualCad: 490,
    employeeLimit: 25,
    popular: true,
  }),
  business: fixedPlan({
    slug: 'business',
    name: 'Business',
    monthlyCad: 79,
    annualCad: 790,
    employeeLimit: 50,
  }),
  multiLocation: Object.freeze({
    slug: 'multi-location',
    name: 'Multi-location',
    pricingKind: 'custom',
    currency: 'CAD',
    locationBasis: 'per_location',
  }),
});

export const ERP_PLANS = Object.freeze({
  finance: Object.freeze({
    ...fixedPlan({ slug: 'finance', name: 'Finance', monthlyCad: 179, annualCad: 1969 }),
    workforceRule: 'standalone_standard_price',
    workforceDiscountPercent: 0,
  }),
  business: Object.freeze({
    ...fixedPlan({
      slug: 'business',
      name: 'Business',
      monthlyCad: 349,
      annualCad: 3839,
      popular: true,
    }),
    workforceRule: 'eligible_plan_discount',
    workforceDiscountPercent: 50,
  }),
  operations: Object.freeze({
    ...fixedPlan({ slug: 'operations', name: 'Operations', monthlyCad: 649, annualCad: 7139 }),
    workforceRule: 'included_for_covered_scope',
    workforceDiscountPercent: null,
  }),
  enterprise: Object.freeze({
    slug: 'enterprise',
    name: 'Enterprise',
    pricingKind: 'custom',
    currency: 'CAD',
    workforceRule: 'custom',
  }),
});

export const COMMERCIAL_POLICIES = Object.freeze({
  workforce: Object.freeze({ annualFreeMonths: 2, locationBasis: 'per_location' }),
  erp: Object.freeze({ annualFreeMonths: 1 }),
});

export const PAYROLL_ADD_ON = Object.freeze({
  currency: 'CAD',
  monthlyBaseCad: 59,
  monthlyPerEmployeeCad: 6,
  includedWithWorkforce: false,
});
export const GUIDED_IMPLEMENTATION = Object.freeze({
  currency: 'CAD',
  minimumCad: 3500,
  maximumCad: 7500,
  billingKind: 'one_time',
  optional: true,
});
export const ERP_PLAN_ORDER = Object.freeze(['finance', 'business', 'operations', 'enterprise']);
export const WORKFORCE_PLAN_ORDER = Object.freeze([
  'starter',
  'team',
  'business',
  'multi-location',
]);
export const DEMO_UPGRADE_BILLING_ROLES = Object.freeze(['owner', 'admin', 'accounting']);

export const getErpPlan = (slug) => ERP_PLANS[String(slug || '').trim()] || null;
export const getWorkforcePlan = (slug) =>
  WORKFORCE_PLANS[
    String(slug || '')
      .replace(/^workforce-/, '')
      .trim()
  ] || null;
export const canRequestDemoUpgrade = (role) =>
  DEMO_UPGRADE_BILLING_ROLES.includes(
    String(role || '')
      .trim()
      .toLowerCase()
  );
