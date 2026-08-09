import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from './App';
import { getCachedContent } from './content';
import { LanguageProvider } from './contexts/LanguageContext';

const renderApp = (initialEntry) =>
  render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[initialEntry]}>
        <App />
      </MemoryRouter>
    </LanguageProvider>
  );

describe('public app routes', () => {
  test('renders the home route', async () => {
    const content = getCachedContent('en');
    renderApp('/');
    expect(
      await screen.findByRole('heading', { name: content.pages.home.heroTitle }, { timeout: 5000 })
    ).toBeInTheDocument();
  });

  test('renders the pricing route', async () => {
    const content = getCachedContent('en');
    renderApp('/pricing');
    expect(
      await screen.findByRole(
        'heading',
        { name: content.pages.pricing.heroTitle },
        { timeout: 5000 }
      )
    ).toBeInTheDocument();
  });

  test('renders the /erp route', async () => {
    const content = getCachedContent('en');
    renderApp('/erp');
    expect(
      await screen.findByRole(
        'heading',
        { name: content.pages.product.heroTitle },
        { timeout: 5000 }
      )
    ).toBeInTheDocument();
  });

  test('redirects the legacy /product route to /erp', async () => {
    const content = getCachedContent('en');
    renderApp('/product');
    expect(
      await screen.findByRole(
        'heading',
        { name: content.pages.product.heroTitle },
        { timeout: 5000 }
      )
    ).toBeInTheDocument();
  });

  test('renders the /workforce route', async () => {
    const content = getCachedContent('en');
    renderApp('/workforce');
    expect(
      await screen.findByRole(
        'heading',
        { name: content.pages.workforce.heroTitle },
        { timeout: 5000 }
      )
    ).toBeInTheDocument();
  });

  test('renders the /workforce/restaurants route', async () => {
    const content = getCachedContent('en');
    renderApp('/workforce/restaurants');
    expect(
      await screen.findByRole(
        'heading',
        { name: content.pages.workforceRestaurants.heroTitle },
        { timeout: 5000 }
      )
    ).toBeInTheDocument();
  });

  test('renders the /workforce/beta route with beta terms and no public closed-testing link', async () => {
    const content = getCachedContent('en');
    renderApp('/workforce/beta');
    expect(
      await screen.findByRole(
        'heading',
        { name: content.pages.workforceBeta.heroTitle },
        { timeout: 5000 }
      )
    ).toBeInTheDocument();

    expect(screen.getByText('14-day beta')).toBeInTheDocument();
    expect(screen.getByText('6 months free after launch')).toBeInTheDocument();
    expect(screen.queryByText(/play\.google\.com/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/closed testing/i)).not.toBeInTheDocument();
  });
});

describe('navigation', () => {
  test('desktop nav exposes ERP and Workforce as distinct links', async () => {
    const content = getCachedContent('en');
    renderApp('/');
    await screen.findByRole('heading', { name: content.pages.home.heroTitle }, { timeout: 5000 });

    const erpLinks = screen.getAllByRole('link', { name: 'ERP' });
    const workforceLinks = screen.getAllByRole('link', { name: 'Workforce' });
    expect(erpLinks.length).toBeGreaterThan(0);
    expect(workforceLinks.length).toBeGreaterThan(0);
    expect(erpLinks[0]).toHaveAttribute('href', '/erp');
    expect(workforceLinks[0]).toHaveAttribute('href', '/workforce');
  });

  test('mobile menu toggle reveals the Workforce link', async () => {
    const content = getCachedContent('en');
    renderApp('/');
    await screen.findByRole('heading', { name: content.pages.home.heroTitle }, { timeout: 5000 });

    const toggle = screen.getByRole('button', { name: /menu/i });
    await userEvent.click(toggle);

    expect(screen.getAllByRole('link', { name: 'Workforce' }).length).toBeGreaterThan(1);
  });
});

describe('account deletion contact address', () => {
  test('renders localized content-driven copy instead of hardcoded English', async () => {
    const content = getCachedContent('en');
    renderApp('/account-deletion');
    expect(
      await screen.findByRole(
        'heading',
        { name: content.pages.legal.accountDeletion.title },
        { timeout: 5000 }
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(content.pages.legal.accountDeletion.selfServiceBody)
    ).toBeInTheDocument();
  });

  test('uses support@zanvrox.com instead of an unconfirmed privacy@ alias', async () => {
    renderApp('/account-deletion');
    const mailLinks = await screen.findAllByRole('link', { name: /support@zanvrox\.com/i });
    expect(mailLinks.length).toBeGreaterThan(0);
    mailLinks.forEach((link) => expect(link).toHaveAttribute('href', 'mailto:support@zanvrox.com'));
    expect(screen.queryByText(/privacy@zanvrox\.com/i)).not.toBeInTheDocument();
  });
});
