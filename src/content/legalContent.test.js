import { ERP_LANGUAGE_SET, loadContent } from './index';
import { getCachedContent } from './index';

describe('legal content', () => {
  test('Terms mentions ERP and Workforce in English', () => {
    const terms = getCachedContent('en').pages.legal.terms;
    const text = terms.paragraphs.join(' ');
    expect(text).toMatch(/ZANVROX ERP/);
    expect(text).toMatch(/ZANVROX Workforce/);
  });

  test('a Terms entry exists in all 7 locales', async () => {
    await Promise.all(
      ERP_LANGUAGE_SET.map(async ({ code }) => {
        const content = await loadContent(code);
        expect(content.pages.legal.terms).toBeDefined();
        expect(content.pages.legal.terms.paragraphs.length).toBeGreaterThan(0);
      })
    );
  });

  test('an Account Deletion entry exists in all 7 locales, without privacy@zanvrox.com', async () => {
    await Promise.all(
      ERP_LANGUAGE_SET.map(async ({ code }) => {
        const content = await loadContent(code);
        const page = content.pages.legal.accountDeletion;
        expect(page).toBeDefined();
        expect(page.title).toBeTruthy();
        expect(page.selfServiceBody).toBeTruthy();
        expect(page.emailFallbackBody).toBeTruthy();
        expect(JSON.stringify(page)).not.toMatch(/privacy@zanvrox\.com/);
      })
    );
  });

  test('Privacy discloses Workforce location-aware clock events', () => {
    const privacy = getCachedContent('en').pages.legal.privacy;
    const text = privacy.paragraphs.join(' ');
    expect(text).toMatch(/location/i);
    expect(text).toMatch(/clock/i);
  });

  test('Privacy does not claim continuous or real-time tracking', () => {
    const privacy = getCachedContent('en').pages.legal.privacy;
    const text = privacy.paragraphs.join(' ');
    expect(text).toMatch(/not collected continuously/i);
    expect(text).not.toMatch(
      /track(s|ing)? (the )?employee('s)? location (continuously|at all times|in real[- ]time)/i
    );
  });
});
