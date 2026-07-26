import { render, screen } from '@testing-library/react';
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
});
