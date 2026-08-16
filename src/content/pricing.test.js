import { getCachedContent } from './index';
import {
  ERP_PLANS,
  GUIDED_IMPLEMENTATION,
  PAYROLL_ADD_ON,
  WORKFORCE_PLANS,
} from '../commercial-config/index.js';

const findTier = (tiers, slug) => tiers.find((tier) => tier.slug === slug);

describe('pricing amounts', () => {
  const pricing = getCachedContent('en').pages.pricing;
  const erpTiers = pricing.erp.tiers;
  const workforceTiers = pricing.workforce.tiers;

  test('ERP Finance is CAD 179/month', () => {
    expect(findTier(erpTiers, 'finance').monthly.amount).toBe(ERP_PLANS.finance.monthlyCad);
    expect(findTier(erpTiers, 'finance').annual.totalAmount).toBe(ERP_PLANS.finance.annualCad);
  });

  test('ERP Business is CAD 349/month', () => {
    expect(findTier(erpTiers, 'business').monthly.amount).toBe(ERP_PLANS.business.monthlyCad);
    expect(findTier(erpTiers, 'business').annual.totalAmount).toBe(ERP_PLANS.business.annualCad);
  });

  test('ERP Operations is CAD 649/month', () => {
    expect(findTier(erpTiers, 'operations').monthly.amount).toBe(ERP_PLANS.operations.monthlyCad);
    expect(findTier(erpTiers, 'operations').annual.totalAmount).toBe(
      ERP_PLANS.operations.annualCad
    );
  });

  test('ERP Operations shows a Workforce included badge', () => {
    const operations = findTier(erpTiers, 'operations');
    expect(operations.monthly.badge).toBe('Workforce included');
    expect(operations.included).toContain('ZANVROX Workforce included');
  });

  test('ERP Business shows a 50% off Workforce badge', () => {
    const business = findTier(erpTiers, 'business');
    expect(business.monthly.badge).toBe('50% off Workforce');
    expect(business.included).toContain('50% off ZANVROX Workforce (standalone plan)');
  });

  test('ERP Enterprise stays a custom-priced plan, not a fourth standard tier', () => {
    const enterprise = findTier(erpTiers, 'enterprise');
    expect(enterprise.monthly.kind).toBe('custom');
    expect(enterprise.ctaLabel).toBe('Contact us');
  });

  test('Payroll add-on is CAD 59/month + CAD 6/employee/month', () => {
    expect(pricing.payrollAddon.priceLabel).toBe('CAD 59 / month + CAD 6 / employee / month');
    expect(pricing.payrollAddon.monthlyBaseCad).toBe(PAYROLL_ADD_ON.monthlyBaseCad);
    expect(pricing.payrollAddon.monthlyPerEmployeeCad).toBe(PAYROLL_ADD_ON.monthlyPerEmployeeCad);
    expect(pricing.onboardingPackage.minimumCad).toBe(GUIDED_IMPLEMENTATION.minimumCad);
    expect(pricing.onboardingPackage.maximumCad).toBe(GUIDED_IMPLEMENTATION.maximumCad);
  });

  test('Workforce Starter is CAD 29/month per location', () => {
    expect(findTier(workforceTiers, 'workforce-starter').monthly.amount).toBe(
      WORKFORCE_PLANS.starter.monthlyCad
    );
    expect(findTier(workforceTiers, 'workforce-starter').employeeLimit).toBe(
      WORKFORCE_PLANS.starter.employeeLimit
    );
  });

  test('Workforce Team is CAD 49/month per location', () => {
    expect(findTier(workforceTiers, 'workforce-team').monthly.amount).toBe(
      WORKFORCE_PLANS.team.monthlyCad
    );
  });

  test('Workforce Business is CAD 79/month per location', () => {
    expect(findTier(workforceTiers, 'workforce-business').monthly.amount).toBe(
      WORKFORCE_PLANS.business.monthlyCad
    );
  });

  test('Workforce annual pricing equals 10 months of the monthly rate (two months free)', () => {
    workforceTiers
      .filter((tier) => tier.monthly.kind === 'fixed')
      .forEach((tier) => {
        expect(tier.annual.amount).toBe(tier.monthly.amount);
        expect(tier.annual.totalAmount).toBe(tier.monthly.amount * 10);
        expect(tier.annual.badge).toBe('2 months free');
      });
  });

  test('Workforce pricing group is flagged to show the annual total, not a monthly-rate headline', () => {
    expect(pricing.workforce.annualDisplayMode).toBe('total');
    expect(pricing.workforce.priceSuffixAnnual).toContain('year');
  });

  test('ERP pricing group does not use the annual-total display (unchanged approved behavior)', () => {
    expect(pricing.erp.annualDisplayMode).toBeUndefined();
  });

  test('ERP annual pricing equals 11 months of the monthly rate (one month free)', () => {
    erpTiers
      .filter((tier) => tier.monthly.kind === 'fixed')
      .forEach((tier) => {
        const annualTotalNumbers = tier.annual.note
          .match(/\d[\d,]*/g)
          .map((n) => Number(n.replace(/,/g, '')));
        expect(annualTotalNumbers).toContain(tier.monthly.amount * 11);
      });
  });

  test('ERP annual billing toggle stays at one month free (not two)', () => {
    expect(pricing.erp.billingToggle.annualBadge).toBe('1 month free');
  });

  test('Workforce annual billing toggle stays at two months free', () => {
    expect(pricing.workforce.billingToggle.annualBadge).toBe('2 months free');
  });

  test('Workforce and ERP annual helper texts are distinct (no shared global helper)', () => {
    expect(pricing.workforce.billingToggle.helper).not.toBe(pricing.erp.billingToggle.helper);
  });

  test('bundle copy does not overstate the Finance/Business Workforce relationship', () => {
    const bundleText = JSON.stringify(pricing.bundleOffers);
    expect(bundleText).not.toMatch(/finance[^.]*25%\s*off/i);
    expect(bundleText).not.toMatch(/unlimited workforce/i);
    expect(bundleText).toMatch(/50% off/i);
    expect(bundleText).toMatch(/included for the employees and locations/i);
  });
});
