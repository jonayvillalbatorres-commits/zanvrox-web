import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, test } from 'vitest';
import WorkforcePage from './WorkforcePage';
import WorkforceRestaurantsPage from './WorkforceRestaurantsPage';
import WorkforcePricingPage from './WorkforcePricingPage';
import { LanguageProvider } from '../contexts/LanguageContext';

const renderWithProviders = (ui, initialEntry) =>
  render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[initialEntry]}>{ui}</MemoryRouter>
    </LanguageProvider>
  );

describe('/workforce CTAs', () => {
  test('"Start with Workforce" leads to the dedicated Workforce pricing page, not the mixed /pricing page', async () => {
    renderWithProviders(<WorkforcePage />, '/workforce');
    const links = await screen.findAllByRole('link', { name: /start with workforce/i });
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => expect(link).toHaveAttribute('href', '/workforce/pricing'));
  });

  test('offers both the broader industry overview and Canada-wide beta', async () => {
    renderWithProviders(<WorkforcePage />, '/workforce');
    const links = await screen.findAllByRole('link', { name: /see who workforce is for/i });
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => expect(link).toHaveAttribute('href', '/workforce#industries'));
    expect(screen.getByRole('link', { name: /beta/i })).toHaveAttribute('href', '/workforce/beta');
  });

  test('explains the Manager vs Employee access split once, near the final CTA', async () => {
    renderWithProviders(<WorkforcePage />, '/workforce');
    expect(
      await screen.findByText(/Managers manage the company, team, and schedules/i)
    ).toBeInTheDocument();
  });
});

describe('/workforce/restaurants Canada-wide CTAs', () => {
  test('the primary CTA starts with Workforce pricing', async () => {
    renderWithProviders(<WorkforceRestaurantsPage />, '/workforce/restaurants');
    const startLinks = await screen.findAllByRole('link', { name: /start with workforce/i });
    expect(startLinks.length).toBeGreaterThan(0);
    startLinks.forEach((link) => expect(link).toHaveAttribute('href', '/workforce/pricing'));
  });

  test('Workforce pricing is offered only as the secondary CTA', async () => {
    renderWithProviders(<WorkforceRestaurantsPage />, '/workforce/restaurants');
    const pricingLinks = await screen.findAllByRole('link', { name: /see workforce pricing/i });
    expect(pricingLinks.length).toBeGreaterThan(0);
    pricingLinks.forEach((link) => expect(link).toHaveAttribute('href', '/workforce/pricing'));
  });
});

describe('/workforce/pricing is available Canada-wide', () => {
  test('shows the Canada-wide beta callout', async () => {
    renderWithProviders(<WorkforcePricingPage />, '/workforce/pricing');
    await screen.findAllByText('Starter');
    expect(screen.getByRole('link', { name: /beta/i })).toHaveAttribute('href', '/workforce/beta');
  });

  test('does not show any ERP pricing tier', async () => {
    renderWithProviders(<WorkforcePricingPage />, '/workforce/pricing');
    await screen.findAllByText('Starter');
    expect(screen.queryByText('Finance')).not.toBeInTheDocument();
  });
});
