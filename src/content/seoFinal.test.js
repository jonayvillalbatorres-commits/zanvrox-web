import { ERP_LANGUAGE_SET, loadContent } from './index';
import { getCachedContent } from './index';

const NEW_PAGE_SEO_KEYS = [
  'product',
  'workforce',
  'workforceRestaurants',
  'workforceBeta',
  'pricing',
  'privacy',
  'terms',
  'accountDeletion',
];

describe('SEO metadata', () => {
  test('every reviewed page has a title, description, and path', () => {
    const seo = getCachedContent('en').seo;
    NEW_PAGE_SEO_KEYS.forEach((key) => {
      expect(seo[key]?.title, `${key}.title`).toBeTruthy();
      expect(seo[key]?.description, `${key}.description`).toBeTruthy();
      expect(seo[key]?.path, `${key}.path`).toBeTruthy();
    });
  });

  test('SEO titles are unique across pages', () => {
    const seo = getCachedContent('en').seo;
    const titles = Object.values(seo).map((entry) => entry.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  test('SEO paths are unique and match expected canonical routes', () => {
    const seo = getCachedContent('en').seo;
    const paths = Object.values(seo).map((entry) => entry.path);
    expect(new Set(paths).size).toBe(paths.length);
    expect(seo.product.path).toBe('/erp');
    expect(seo.workforce.path).toBe('/workforce');
    expect(seo.workforceRestaurants.path).toBe('/workforce/restaurants');
    expect(seo.workforceBeta.path).toBe('/workforce/beta');
    expect(seo.accountDeletion.path).toBe('/account-deletion');
  });

  test('Workforce and Restaurants pages do not share identical metadata', () => {
    const seo = getCachedContent('en').seo;
    expect(seo.workforce.title).not.toBe(seo.workforceRestaurants.title);
    expect(seo.workforce.description).not.toBe(seo.workforceRestaurants.description);
  });

  test('no public closed-testing / Play Store opt-in URL exists in any locale', async () => {
    const banned = [/play\.google\.com/i, /closed testing/i, /opt-in/i];

    await Promise.all(
      ERP_LANGUAGE_SET.map(async ({ code }) => {
        const content = await loadContent(code);
        const text = JSON.stringify(content);
        banned.forEach((pattern) => {
          expect(text, `${code} should not contain ${pattern}`).not.toMatch(pattern);
        });
      })
    );
  });
});
