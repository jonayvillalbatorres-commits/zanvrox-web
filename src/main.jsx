import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router';
import './index.css';
import App from './App.jsx';
import { LanguageProvider } from './contexts/LanguageContext';
import { trackMetaPageView } from './utils/metaPixel';

const META_PIXEL_ID = '4054508864854243';

function MetaPixel() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    if (!window.fbq) {
      const fbq = function (...args) {
        if (fbq.callMethod) fbq.callMethod.apply(fbq, args);
        else fbq.queue.push(args);
      };
      window.fbq = fbq;
      if (!window._fbq) window._fbq = fbq;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);

      window.fbq('init', META_PIXEL_ID);
    }

    trackMetaPageView();
  }, [location.pathname, location.search]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MetaPixel />
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
