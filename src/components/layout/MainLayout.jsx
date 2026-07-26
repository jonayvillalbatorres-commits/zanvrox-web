import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { normalizeLanguageCode } from '../../content';
import { useLanguage } from '../../contexts/LanguageContext';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function MainLayout() {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const nextLanguage = params.get('lang');
    if (!nextLanguage) return;

    const normalized = normalizeLanguageCode(nextLanguage);
    if (normalized !== language) {
      setLanguage(normalized);
    }
  }, [language, location.search, setLanguage]);

  return (
    <div className="min-h-screen bg-zx-bg text-zx-text">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
