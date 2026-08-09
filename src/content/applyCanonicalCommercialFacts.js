import {
  COMMERCIAL_POLICIES,
  ERP_PLANS,
  GUIDED_IMPLEMENTATION,
  PAYROLL_ADD_ON,
  WORKFORCE_PLANS,
} from '../../../packages/commercial-config/index.js';

const workforceKey = (slug) =>
  String(slug || '')
    .replace(/^workforce-/, '')
    .replace(/-/g, '');

const withWorkforceFacts = (tier) => {
  const plan = WORKFORCE_PLANS[workforceKey(tier?.slug)];
  if (!plan || plan.pricingKind !== 'fixed') return tier;
  return {
    ...tier,
    commercialSlug: plan.slug,
    employeeLimit: plan.employeeLimit,
    isPopular: plan.popular || undefined,
    monthly: { ...tier.monthly, kind: 'fixed', amount: plan.monthlyCad },
    annual: {
      ...tier.annual,
      kind: 'fixed',
      amount: plan.monthlyCad,
      totalAmount: plan.annualCad,
      freeMonths: COMMERCIAL_POLICIES.workforce.annualFreeMonths,
    },
  };
};

const withErpFacts = (tier) => {
  const plan = ERP_PLANS[String(tier?.slug || '')];
  if (!plan || plan.pricingKind !== 'fixed') return tier;
  return {
    ...tier,
    commercialSlug: plan.slug,
    isPopular: plan.popular || undefined,
    monthly: { ...tier.monthly, kind: 'fixed', amount: plan.monthlyCad },
    annual: {
      ...tier.annual,
      kind: 'fixed',
      amount: plan.monthlyCad,
      totalAmount: plan.annualCad,
      freeMonths: COMMERCIAL_POLICIES.erp.annualFreeMonths,
    },
    workforceRule: plan.workforceRule,
    workforceDiscountPercent: plan.workforceDiscountPercent,
  };
};

export const applyCanonicalCommercialFacts = (content) => {
  const pricing = content?.pages?.pricing;
  if (!pricing) return content;

  const supportTiers = content.pages?.home?.supportModel?.tiers || [];
  const normalizedSupportTiers = supportTiers.map((tier) =>
    tier?.name === 'Finance Core' ? { ...tier, name: ERP_PLANS.finance.name } : tier
  );
  if (!normalizedSupportTiers.some((tier) => tier?.name === ERP_PLANS.business.name)) {
    const financeIndex = normalizedSupportTiers.findIndex(
      (tier) => tier?.name === ERP_PLANS.finance.name
    );
    normalizedSupportTiers.splice(financeIndex + 1, 0, {
      name: ERP_PLANS.business.name,
      body: 'Priority email support, 24h response, and 50% off eligible Workforce standalone.',
    });
  }

  return {
    ...content,
    pages: {
      ...content.pages,
      home: content.pages?.home
        ? {
            ...content.pages.home,
            supportModel: {
              ...content.pages.home.supportModel,
              tiers: normalizedSupportTiers,
            },
          }
        : content.pages?.home,
      pricing: {
        ...pricing,
        workforce: {
          ...pricing.workforce,
          annualFreeMonths: COMMERCIAL_POLICIES.workforce.annualFreeMonths,
          locationBasis: COMMERCIAL_POLICIES.workforce.locationBasis,
          tiers: (pricing.workforce?.tiers || []).map(withWorkforceFacts),
        },
        erp: {
          ...pricing.erp,
          annualFreeMonths: COMMERCIAL_POLICIES.erp.annualFreeMonths,
          tiers: (pricing.erp?.tiers || []).map(withErpFacts),
        },
        payrollAddon: {
          ...pricing.payrollAddon,
          monthlyBaseCad: PAYROLL_ADD_ON.monthlyBaseCad,
          monthlyPerEmployeeCad: PAYROLL_ADD_ON.monthlyPerEmployeeCad,
          includedWithWorkforce: PAYROLL_ADD_ON.includedWithWorkforce,
        },
        onboardingPackage: {
          ...pricing.onboardingPackage,
          minimumCad: GUIDED_IMPLEMENTATION.minimumCad,
          maximumCad: GUIDED_IMPLEMENTATION.maximumCad,
          billingKind: GUIDED_IMPLEMENTATION.billingKind,
          optional: GUIDED_IMPLEMENTATION.optional,
        },
      },
    },
  };
};
