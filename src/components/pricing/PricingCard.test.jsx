import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PricingCard from './PricingCard';
import { getCachedContent } from '../../content';
import { BILLING_PERIODS, CONTACT_PROMOS } from '../../utils/contactDemo';

const pricing = getCachedContent('en').pages.pricing;

const renderCard = (group, slug, billingPeriod) => {
  const tier = group.tiers.find((item) => item.slug === slug);
  return render(
    <MemoryRouter>
      <PricingCard tier={tier} pricing={group} language="en" billingPeriod={billingPeriod} />
    </MemoryRouter>
  );
};

describe('PricingCard annual display', () => {
  test('Workforce annual view shows the yearly total, not the confusing monthly-rate + billed-annually pairing', () => {
    renderCard(pricing.workforce, 'workforce-starter', BILLING_PERIODS.annual);

    expect(screen.getByText(/290/)).toBeInTheDocument();
    expect(screen.getByText(/year/i)).toBeInTheDocument();
    expect(screen.queryByText(/billed annually at cad 290/i)).not.toBeInTheDocument();
  });

  test('Workforce monthly view is unaffected', () => {
    renderCard(pricing.workforce, 'workforce-starter', BILLING_PERIODS.monthly);

    expect(screen.getByText(/29/)).toBeInTheDocument();
    expect(screen.getByText(/month per location/i)).toBeInTheDocument();
  });

  test('ERP annual view keeps its existing monthly-rate headline (unchanged approved behavior)', () => {
    renderCard(pricing.erp, 'finance', BILLING_PERIODS.annual);

    // Headline still shows the monthly rate (179), and the annual total only
    // appears in the note text below it, exactly as before this change.
    expect(screen.getAllByText(/179/).length).toBeGreaterThan(0);
    expect(screen.getByText(/billed annually at cad 1,969/i)).toBeInTheDocument();
  });

  test('routes self-serve Workforce to the Workforce manager sign-in with purchase intent (not the ERP login, not straight to billing) and keeps ERP promotion context', () => {
    const workforce = renderCard(pricing.workforce, 'workforce-starter', BILLING_PERIODS.annual);
    const workforceHref = workforce.container.querySelector('a').getAttribute('href');
    const url = new URL(workforceHref);
    // Anonymous visitors must never link straight to /manager/settings/billing
    // (it requires an authenticated org member and would just dead-end with
    // no context), and must never land on the ERP's generic /login (it looks
    // like ERP, not Workforce). They go to the Workforce-branded
    // /manager/login with the plan intent attached instead -- see
    // createWorkforceCheckoutUrl.
    expect(url.pathname).toBe('/manager/login');
    expect(url.searchParams.get('product')).toBe('workforce');
    expect(url.searchParams.get('plan')).toBe('starter');
    expect(url.searchParams.get('period')).toBe('annual');
    workforce.unmount();

    const erp = renderCard(pricing.erp, 'finance', BILLING_PERIODS.annual);
    expect(erp.container.querySelector('a').getAttribute('href')).toContain(
      encodeURIComponent(CONTACT_PROMOS.erpAnnual)
    );
  });
});
