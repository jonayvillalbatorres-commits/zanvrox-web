import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import SeoManager from './SeoManager';
import { getCachedContent } from '../../content';
import { LanguageProvider } from '../../contexts/LanguageContext';

describe('SeoManager', () => {
  test('writes canonical, meta tags, and full hreflang set', async () => {
    const meta = getCachedContent('en').seo.pricing;

    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={['/pricing']}>
          <SeoManager meta={meta} />
        </MemoryRouter>
      </LanguageProvider>
    );

    await waitFor(() => {
      expect(document.title).toBe(meta.title);
    });

    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      meta.description
    );
    expect(document.head.querySelector('meta[property="og:title"]')).toHaveAttribute(
      'content',
      meta.title
    );
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://zanvrox.com${meta.path}`
    );

    const alternateLinks = Array.from(
      document.head.querySelectorAll('link[data-zx-hreflang="true"]')
    );
    expect(alternateLinks).toHaveLength(8);
    expect(alternateLinks.map((link) => link.getAttribute('hreflang'))).toEqual(
      expect.arrayContaining(['en-CA', 'fr-CA', 'es', 'zh-CN', 'pa-IN', 'ar', 'tl-PH', 'x-default'])
    );
  });
});
