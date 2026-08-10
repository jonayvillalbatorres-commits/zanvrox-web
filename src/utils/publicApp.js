const DEFAULT_DEMO_PATH = '/resources#demo-environment';
const DEFAULT_PUBLIC_APP_URL = 'https://app.zanvrox.com';

const normalizeBaseUrl = (value) =>
  String(value || '')
    .trim()
    .replace(/\/+$/, '');

const resolveRuntimePublicAppUrl = () => {
  const configured = normalizeBaseUrl(
    import.meta.env.VITE_PUBLIC_APP_URL || import.meta.env.VITE_APP_URL || ''
  );
  if (configured) return configured;

  if (typeof window !== 'undefined') {
    const { protocol, hostname } = window.location;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return `${protocol}//${hostname}:3000`;
    }
  }

  return DEFAULT_PUBLIC_APP_URL;
};

const PUBLIC_APP_URL = resolveRuntimePublicAppUrl();

const buildDemoUrl = (path = '/login', params = {}) => {
  const url = new URL(path, PUBLIC_APP_URL.endsWith('/') ? PUBLIC_APP_URL : `${PUBLIC_APP_URL}/`);
  url.searchParams.set('demo', '1');

  if (params.language) url.searchParams.set('lang', String(params.language).trim().toLowerCase());
  if (params.source) url.searchParams.set('source', String(params.source).trim().toLowerCase());

  return url.toString();
};

export const isDemoWorkspaceCtaPath = (path) => String(path || '').trim() === DEFAULT_DEMO_PATH;
export const isGuidedDemoLoginUrl = (path) =>
  /\/login(?:\?|$)/i.test(String(path || '')) && /[?&]demo=1(?:&|$)/i.test(String(path || ''));

export const resolvePublicAppLink = (path, params = {}) => {
  if (isDemoWorkspaceCtaPath(path)) {
    return buildDemoUrl('/login', params);
  }

  return path;
};

export const createDemoWorkspaceUrl = (params = {}) => buildDemoUrl('/login', params);

// Sends a visitor who picked a Workforce plan on the public site to the ERP's
// login/signup screen with the plan intent attached as context (product,
// plan slug, billing period). This intentionally never links straight to
// /settings/billing: that page requires an authenticated org member, so an
// anonymous visitor would otherwise land on a bare login screen with no idea
// why. The login page reads these params to show Workforce-specific context
// and carries the intent through signup/org-creation back to billing, where
// the user still has to click to start checkout -- Stripe price, quantity,
// and customer resolution stay fully server-side either way.
export const createWorkforceCheckoutUrl = ({ plan, period, language, source } = {}) => {
  const url = new URL(
    '/login',
    PUBLIC_APP_URL.endsWith('/') ? PUBLIC_APP_URL : `${PUBLIC_APP_URL}/`
  );
  url.searchParams.set('product', 'workforce');
  if (plan) url.searchParams.set('plan', String(plan).trim().toLowerCase());
  if (period) url.searchParams.set('period', String(period).trim().toLowerCase());
  if (source) url.searchParams.set('source', String(source).trim().toLowerCase());
  if (language) url.searchParams.set('lang', String(language).trim().toLowerCase());
  return url.toString();
};
