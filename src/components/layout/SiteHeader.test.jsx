import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, test, vi } from 'vitest';
import SiteHeader from './SiteHeader';
import { LanguageProvider } from '../../contexts/LanguageContext';

const renderHeader = () =>
  render(
    <LanguageProvider>
      <MemoryRouter>
        <SiteHeader />
      </MemoryRouter>
    </LanguageProvider>
  );

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('SiteHeader on the main zanvrox.com host', () => {
  test('shows the corporate nav and the generic demo-workspace CTA', async () => {
    vi.stubGlobal('location', { hostname: 'zanvrox.com' });
    renderHeader();

    expect(await screen.findAllByRole('link', { name: 'ERP' })).not.toHaveLength(0);
    expect(screen.getAllByRole('link', { name: 'Workforce' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /open workspace/i }).length).toBeGreaterThan(0);
    expect(screen.queryByRole('link', { name: /request beta/i })).not.toBeInTheDocument();
  });
});

describe('SiteHeader on the workforce.zanvrox.com host', () => {
  test('shows Workforce-specific nav instead of the corporate nav', async () => {
    vi.stubGlobal('location', { hostname: 'workforce.zanvrox.com' });
    renderHeader();

    expect(await screen.findAllByRole('link', { name: 'Beta' })).not.toHaveLength(0);
    expect(screen.getAllByRole('link', { name: 'Restaurants' }).length).toBeGreaterThan(0);
    // ERP is not part of the primary Workforce nav pills anymore.
    expect(screen.queryByRole('link', { name: 'ERP' })).not.toBeInTheDocument();
  });

  test('offers Request beta and Log in instead of the ERP demo-workspace CTA', async () => {
    vi.stubGlobal('location', { hostname: 'workforce.zanvrox.com' });
    renderHeader();

    expect(await screen.findAllByRole('link', { name: /request beta/i })).not.toHaveLength(0);
    expect(screen.getAllByRole('link', { name: /log in/i }).length).toBeGreaterThan(0);
    expect(screen.queryByRole('link', { name: /open workspace/i })).not.toBeInTheDocument();
  });

  test('still exposes a discreet link back to ZANVROX ERP', async () => {
    vi.stubGlobal('location', { hostname: 'workforce.zanvrox.com' });
    renderHeader();

    const erpLinks = await screen.findAllByRole('link', { name: 'ZANVROX ERP' });
    expect(erpLinks.length).toBeGreaterThan(0);
    expect(erpLinks[0]).toHaveAttribute('href', '/erp');
  });
});
