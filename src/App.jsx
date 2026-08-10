import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import MainLayout from './components/layout/MainLayout';
import { usePreviewCopy } from './content/previewCopy';
import { getWorkforceHostRedirect } from './utils/workforceHost';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const WorkforcePage = lazy(() => import('./pages/WorkforcePage'));
const WorkforceRestaurantsPage = lazy(() => import('./pages/WorkforceRestaurantsPage'));
const WorkforceBetaPage = lazy(() => import('./pages/WorkforceBetaPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const SecurityArchitecturePage = lazy(() => import('./pages/SecurityArchitecturePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactDemoPage = lazy(() => import('./pages/ContactDemoPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPage = lazy(() => import('./pages/legal/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/legal/TermsPage'));
const AccountDeletionPage = lazy(() => import('./pages/legal/AccountDeletionPage'));

function RouteFallback() {
  const t = usePreviewCopy();
  return (
    <div className="section-shell">
      <div className="zx-card py-10 text-center text-sm text-zx-text-muted">{t('Loading...')}</div>
    </div>
  );
}

// On workforce.zanvrox.com, a handful of short paths alias into the
// corresponding zanvrox.com/workforce/* route so this single build serves
// both hosts without a second app. On every other host these paths render
// their normal element unchanged.
function HostAwareRoute({ path, element }) {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const redirectTo = getWorkforceHostRedirect(path, hostname);
  return redirectTo ? <Navigate to={redirectTo} replace /> : element;
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HostAwareRoute path="/" element={<HomePage />} />} />
          <Route path="/erp" element={<ProductPage />} />
          <Route path="/workforce" element={<WorkforcePage />} />
          <Route path="/workforce/restaurants" element={<WorkforceRestaurantsPage />} />
          <Route path="/workforce/beta" element={<WorkforceBetaPage />} />
          <Route
            path="/restaurants"
            element={<HostAwareRoute path="/restaurants" element={<NotFoundPage />} />}
          />
          <Route
            path="/beta"
            element={<HostAwareRoute path="/beta" element={<NotFoundPage />} />}
          />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/security" element={<SecurityArchitecturePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactDemoPage />} />

          <Route path="/product" element={<Navigate to="/erp" replace />} />
          <Route path="/platform" element={<Navigate to="/erp" replace />} />
          <Route path="/modules" element={<Navigate to="/erp" replace />} />
          <Route path="/solutions" element={<Navigate to="/erp" replace />} />
          <Route path="/solutions/manufacturing" element={<Navigate to="/erp" replace />} />
          <Route path="/solutions/food-distribution" element={<Navigate to="/erp" replace />} />
          <Route path="/security-architecture" element={<Navigate to="/security" replace />} />
          <Route path="/integrations-api" element={<Navigate to="/resources" replace />} />
          <Route path="/ai" element={<Navigate to="/erp" replace />} />
          <Route path="/contact-demo" element={<Navigate to="/contact" replace />} />

          <Route path="/legal/privacy" element={<PrivacyPage />} />
          <Route path="/legal/terms" element={<TermsPage />} />
          <Route path="/account-deletion" element={<AccountDeletionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
