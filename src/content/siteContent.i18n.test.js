import { ERP_LANGUAGE_SET, loadContent } from './index';
import siteContentAr from './siteContent.ar';
import siteContentEn from './siteContent.en';
import siteContentEs from './siteContent.es';
import siteContentFr from './siteContent.fr';
import siteContentPa from './siteContent.pa';
import siteContentTl from './siteContent.tl';
import siteContentZh from './siteContent.zh';

const rawContentByLanguage = {
  ar: siteContentAr,
  en: siteContentEn,
  es: siteContentEs,
  fr: siteContentFr,
  pa: siteContentPa,
  tl: siteContentTl,
  zh: siteContentZh,
};

const requiredPageKeys = [
  'home',
  'product',
  'workforce',
  'workforceRestaurants',
  'workforceBeta',
  'pricing',
  'resources',
  'security',
  'about',
  'contact',
  'legal',
  'notFound',
];

const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const extractNumbers = (value) =>
  String(value || '')
    .match(/\d[\d,]*(?:\.\d+)?/g)
    ?.map((entry) => Number(entry.replace(/,/g, ''))) || [];

const comparisonValueSignature = (value) => {
  if (typeof value === 'boolean') return value;
  const numbers = extractNumbers(value);
  return numbers.length ? numbers : 'translated-text';
};

const collectMissingKeys = (base, localized, path = '', out = []) => {
  if (!isObject(base)) return out;

  Object.keys(base).forEach((key) => {
    const nextPath = path ? `${path}.${key}` : key;
    if (!localized || localized[key] === undefined) {
      out.push(nextPath);
      return;
    }
    if (isObject(base[key])) collectMissingKeys(base[key], localized[key], nextPath, out);
  });

  return out;
};

const countStringLeaves = (value) => {
  if (typeof value === 'string') return value.trim() ? 1 : 0;
  if (Array.isArray(value))
    return value.reduce((total, item) => total + countStringLeaves(item), 0);
  if (isObject(value))
    return Object.values(value).reduce((total, item) => total + countStringLeaves(item), 0);
  return 0;
};

const collectStringLeaves = (value, path = '', out = []) => {
  if (typeof value === 'string') {
    out.push([path, value]);
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectStringLeaves(item, `${path}[${index}]`, out));
    return out;
  }
  if (isObject(value)) {
    Object.entries(value).forEach(([key, item]) =>
      collectStringLeaves(item, path ? `${path}.${key}` : key, out)
    );
  }
  return out;
};

const englishStringReuseRatio = (localized) => {
  const englishLeaves = new Map(
    requiredPageKeys.flatMap((pageKey) =>
      collectStringLeaves(siteContentEn.pages[pageKey], `pages.${pageKey}`)
    )
  );
  const localizedLeaves = requiredPageKeys.flatMap((pageKey) =>
    collectStringLeaves(localized.pages?.[pageKey], `pages.${pageKey}`)
  );
  const comparableLeaves = localizedLeaves.filter(([path]) => englishLeaves.has(path));
  const identicalLeaves = comparableLeaves.filter(
    ([path, value]) => englishLeaves.get(path) === value
  );

  return comparableLeaves.length ? identicalLeaves.length / comparableLeaves.length : 1;
};

const visibleContentRoots = ['labels', 'navItems', 'brand', 'footer', 'seo'];

const ignoredStringLeafPath = (path) =>
  /(?:^|\.)(path|slug|kind|status|type|previewType|imageKey|emailValue|passwordValue|headquarters|consentPrivacyPath)$/.test(
    path
  ) ||
  path === 'brand.name' ||
  path === 'locale' ||
  path === 'localeLabel';

const visibleStringLeaves = (content) =>
  visibleContentRoots
    .flatMap((rootKey) => collectStringLeaves(content[rootKey], rootKey))
    .concat(
      Object.keys(siteContentEn.pages).flatMap((pageKey) =>
        collectStringLeaves(content.pages?.[pageKey], `pages.${pageKey}`)
      )
    )
    .filter(([path]) => !ignoredStringLeafPath(path))
    .map(([path, value]) => [path, value.replace(/\S+@\S+/g, '')]);

const disallowedEnglishBusinessTerms = [
  'accounting',
  'annual',
  'auditability',
  'billing',
  'business',
  'calls',
  'commercial',
  'compliance',
  'contact',
  'control',
  'custom',
  'demo',
  'email',
  'enterprise',
  'evaluation',
  'features',
  'finance core',
  'financial',
  'fit',
  'governance',
  'guided',
  'implementation',
  'inventory',
  'invoicing',
  'monthly',
  'onboarding',
  'operations',
  'optional',
  'overview',
  'payroll',
  'pricing',
  'privacy',
  'product',
  'production',
  'public',
  'reporting',
  'request',
  'resources',
  'review',
  'rollout',
  'sales',
  'scope',
  'security',
  'self',
  'setup',
  'stack',
  'support',
  'terms',
  'tools',
  'users',
  'warehouse',
  'walkthrough',
  'workflow',
  'workspace',
];

const englishTermHits = (content) => {
  const patterns = disallowedEnglishBusinessTerms.map((term) => [
    term,
    new RegExp(`\\b${term.replace(/\s+/g, '\\s+')}\\b`, 'i'),
  ]);

  return visibleStringLeaves(content).flatMap(([path, value]) =>
    patterns.filter(([, pattern]) => pattern.test(value)).map(([term]) => `${path}: ${term}`)
  );
};

const pricingGroupContract = (group) => ({
  tierSlugs: group.tiers.map((tier) => tier.slug),
  tiers: group.tiers.map((tier) => ({
    slug: tier.slug,
    monthlyKind: tier.monthly?.kind,
    monthlyAmount: tier.monthly?.amount ?? null,
    annualKind: tier.annual?.kind,
    annualAmount: tier.annual?.amount ?? null,
    annualNoteNumbers: extractNumbers(tier.annual?.note),
    includedCount: tier.included?.length,
  })),
  comparisonValueMatrix: group.comparison.rows.map((row) =>
    row.values.map(comparisonValueSignature)
  ),
});

const pricingContract = (content) => {
  const pricing = content.pages.pricing;

  return {
    workforce: pricingGroupContract(pricing.workforce),
    erp: pricingGroupContract(pricing.erp),
    payrollPriceNumbers: extractNumbers(pricing.payrollAddon.priceLabel),
    payrollAnnualPriceNumbers: extractNumbers(pricing.payrollAddon.annualPriceLabel),
    onboardingPriceNumbers: extractNumbers(pricing.onboardingPackage.priceLabel),
  };
};

describe('siteContent i18n pricing', () => {
  test('keeps every visible language aligned with English pricing amounts and commercial structure', async () => {
    const englishContract = pricingContract(siteContentEn);

    await Promise.all(
      ERP_LANGUAGE_SET.map(async ({ code }) => {
        const content = await loadContent(code);

        expect(pricingContract(content)).toEqual(englishContract);
      })
    );
  });
});

describe('siteContent i18n coverage', () => {
  test('keeps visible languages populated with the same main page sections as English', () => {
    ERP_LANGUAGE_SET.forEach(({ code }) => {
      const localized = rawContentByLanguage[code];

      expect(localized).toBeDefined();
      expect(Object.keys(localized).sort()).toEqual(Object.keys(siteContentEn).sort());
      expect(localized.navItems).toHaveLength(siteContentEn.navItems.length);
      expect(countStringLeaves(localized)).toBeGreaterThan(100);
      if (code !== 'en') {
        expect(englishStringReuseRatio(localized)).toBeLessThan(0.5);
      }

      const missing = requiredPageKeys.flatMap((pageKey) =>
        collectMissingKeys(
          siteContentEn.pages[pageKey],
          localized.pages?.[pageKey],
          `pages.${pageKey}`
        )
      );

      expect(missing).toEqual([]);
    });
  });

  test('keeps Punjabi and Filipino visible copy free of English business terminology', () => {
    const translatedCodes = ['pa', 'tl'];

    translatedCodes.forEach((code) => {
      expect(englishTermHits(rawContentByLanguage[code])).toEqual([]);
    });
  });
});
