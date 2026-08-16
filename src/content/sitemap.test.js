import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const PUBLIC_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../../public');
const sitemap = readFileSync(resolve(PUBLIC_DIR, 'sitemap.xml'), 'utf8');
const vercelConfig = JSON.parse(readFileSync(resolve(PUBLIC_DIR, '../vercel.json'), 'utf8'));

const REQUIRED_ROUTES = [
  '/',
  '/erp',
  '/erp/pricing',
  '/workforce',
  '/workforce/pricing',
  '/workforce/restaurants',
  '/pricing',
  '/resources',
  '/security',
  '/about',
  '/contact',
  '/legal/privacy',
  '/legal/terms',
  '/account-deletion',
];

describe('sitemap.xml', () => {
  it.each(REQUIRED_ROUTES)('includes %s', (route) => {
    expect(sitemap).toContain(`https://zanvrox.com${route}</loc>`);
  });

  it('does not list the legacy /product redirect (it 302s, not a canonical page)', () => {
    expect(sitemap).not.toContain('https://zanvrox.com/product<');
    expect(sitemap).toContain('https://zanvrox.com/workforce/beta</loc>');
  });
});

describe('vercel.json SPA fallback', () => {
  it('rewrites every path to index.html so direct navigation never 404s', () => {
    const rewrite = (vercelConfig.rewrites || []).find(
      (entry) => entry.destination === '/index.html'
    );
    expect(rewrite).toBeDefined();
    expect(rewrite.source).toBe('/(.*)');
  });
});
