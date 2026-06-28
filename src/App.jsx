import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { usePreviewCopy } from './content/previewCopy';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const SecurityArchitecturePage = lazy(() => import('./pages/SecurityArchitecturePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactDemoPage = lazy(() => import('./pages/ContactDemoPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPage = lazy(() => import('./pages/legal/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/legal/TermsPage'));

function RouteFallback() {
  const t = usePreviewCopy();
  return (
    <div className="section-shell">
      <div className="zx-card py-10 text-center text-sm text-zx-text-muted">{t('Loading...')}</div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/security" element={<SecurityArchitecturePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactDemoPage />} />

          <Route path="/platform" element={<Navigate to="/product" replace />} />
          <Route path="/modules" element={<Navigate to="/product" replace />} />
          <Route path="/solutions" element={<Navigate to="/product" replace />} />
          <Route path="/solutions/manufacturing" element={<Navigate to="/product" replace />} />
          <Route path="/solutions/food-distribution" element={<Navigate to="/product" replace />} />
          <Route path="/security-architecture" element={<Navigate to="/security" replace />} />
          <Route path="/integrations-api" element={<Navigate to="/resources" replace />} />
          <Route path="/ai" element={<Navigate to="/product" replace />} />
          <Route path="/contact-demo" element={<Navigate to="/contact" replace />} />

          <Route path="/legal/privacy" element={<PrivacyPage />} />
          <Route path="/legal/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
