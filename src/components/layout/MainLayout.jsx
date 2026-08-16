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

  useEffect(() => {
    if (!location.hash) return;

    const targetId = decodeURIComponent(location.hash.slice(1));
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

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
