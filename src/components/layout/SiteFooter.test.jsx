import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, test, vi } from 'vitest';
import SiteFooter from './SiteFooter';
import { LanguageProvider } from '../../contexts/LanguageContext';

const renderFooter = () =>
  render(
    <LanguageProvider>
      <MemoryRouter>
        <SiteFooter />
      </MemoryRouter>
    </LanguageProvider>
  );

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('SiteFooter on the main zanvrox.com host', () => {
  test('shows the full corporate footer', async () => {
    vi.stubGlobal('location', { hostname: 'zanvrox.com' });
    renderFooter();

    expect(await screen.findAllByRole('link', { name: 'ERP' })).not.toHaveLength(0);
    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});

describe('SiteFooter on the workforce.zanvrox.com host', () => {
  test('prioritizes Workforce, Pricing, Restaurants, Security, Support, and legal', async () => {
    vi.stubGlobal('location', { hostname: 'workforce.zanvrox.com' });
    renderFooter();

    expect(await screen.findAllByText('Workforce')).not.toHaveLength(0);
    expect(screen.getAllByText('Support').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: 'Beta' })).toHaveAttribute('href', '/workforce/beta');
    expect(screen.getAllByRole('link', { name: 'Restaurants' }).length).toBeGreaterThan(0);
    const securityLinks = screen.getAllByRole('link', { name: 'Security' });
    expect(securityLinks.length).toBeGreaterThan(0);
    expect(securityLinks[0]).toHaveAttribute('href', '/security');
    expect(screen.getAllByRole('link', { name: 'Privacy' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: 'Terms' }).length).toBeGreaterThan(0);
  });

  test('offers a secondary link back to ZANVROX ERP', async () => {
    vi.stubGlobal('location', { hostname: 'workforce.zanvrox.com' });
    renderFooter();

    const erpLink = await screen.findByRole('link', { name: 'ZANVROX ERP' });
    expect(erpLink).toHaveAttribute('href', '/erp');
  });
});
