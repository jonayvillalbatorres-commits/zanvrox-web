import { getCachedContent } from './index';

const findTier = (tiers, slug) => tiers.find((tier) => tier.slug === slug);

describe('pricing amounts', () => {
  const pricing = getCachedContent('en').pages.pricing;
  const erpTiers = pricing.erp.tiers;
  const workforceTiers = pricing.workforce.tiers;

  test('ERP Finance is CAD 179/month', () => {
    expect(findTier(erpTiers, 'finance').monthly.amount).toBe(179);
  });

  test('ERP Business is CAD 349/month', () => {
    expect(findTier(erpTiers, 'business').monthly.amount).toBe(349);
  });

  test('ERP Operations is CAD 649/month', () => {
    expect(findTier(erpTiers, 'operations').monthly.amount).toBe(649);
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
  });

  test('Workforce Starter is CAD 29/month per location', () => {
    expect(findTier(workforceTiers, 'workforce-starter').monthly.amount).toBe(29);
  });

  test('Workforce Team is CAD 49/month per location', () => {
    expect(findTier(workforceTiers, 'workforce-team').monthly.amount).toBe(49);
  });

  test('Workforce Business is CAD 79/month per location', () => {
    expect(findTier(workforceTiers, 'workforce-business').monthly.amount).toBe(79);
  });

  test('Workforce annual pricing equals 10 months of the monthly rate (two months free)', () => {
    workforceTiers
      .filter((tier) => tier.monthly.kind === 'fixed')
      .forEach((tier) => {
        expect(tier.annual.amount).toBe(tier.monthly.amount);
        const annualTotalNumbers = tier.annual.note
          .match(/\d[\d,]*/g)
          .map((n) => Number(n.replace(/,/g, '')));
        expect(annualTotalNumbers).toContain(tier.monthly.amount * 10);
      });
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

  test('Ontario Restaurant Beta states 14-day beta and 6 months free after launch', () => {
    const beta = getCachedContent('en').pages.workforceBeta;
    expect(beta.badges).toContain('14-day beta');
    expect(beta.badges).toContain('6 months free after launch');
    expect(beta.badges).toContain('No purchase commitment');
  });
});
