const WORKFORCE_HOST_PREFIX = 'workforce.';

export const isWorkforceHost = (hostname = '') =>
  typeof hostname === 'string' && hostname.toLowerCase().startsWith(WORKFORCE_HOST_PREFIX);

const WORKFORCE_HOST_ALIASES = Object.freeze({
  '/': '/workforce',
  '/restaurants': '/workforce/restaurants',
  '/beta': '/workforce/beta',
});

// On workforce.zanvrox.com, short paths alias into the corresponding
// zanvrox.com/workforce/* route so the same build serves both hosts without
// duplicating the app. Returns null when no alias applies (main domain, or a
// path with no workforce-subdomain shortcut).
export const getWorkforceHostRedirect = (pathname, hostname = '') => {
  if (!isWorkforceHost(hostname)) return null;
  return WORKFORCE_HOST_ALIASES[pathname] || null;
};
