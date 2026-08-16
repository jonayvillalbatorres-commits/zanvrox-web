# zanvrox-web

Public marketing site for ZANVROX. Deploys to `zanvrox.com` (and, via a host
alias in `src/utils/workforceHost.js`, `workforce.zanvrox.com`). This app is
fully standalone: it does not depend on anything outside this folder.

## Independence

- No file in `src/` or `api/` imports a path outside `zanvrox-web` (no
  `../packages`, `../../src`, parent `node_modules`, etc). This is enforced
  by `src/importIsolation.test.js`, which scans every source file and fails
  if such an import is reintroduced.
- Commercial facts (plan prices, employee limits, bundle rules) live locally
  in `src/commercial-config/index.js`. This is a copy of the ERP's canonical
  `packages/commercial-config/index.js`, kept in sync by
  `tests/unit/commercialConfigWebSync.test.js` at the repo root — that test
  only runs while both projects share this monorepo, so any change to plan
  pricing must be made in both files in the same commit.
- Has its own `package.json`, `package-lock.json`, and `vercel.json`. `npm
install`, `npm run dev`, `npm run build`, and `npm run test:run` all work
  from a copy of this folder alone, with no parent `node_modules` or config.

## Scripts

- `npm run dev` — local dev server (Vite)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — ESLint
- `npm run test` / `npm run test:run` — Vitest

## Routing

Client-side routes (React Router) covering `/`, `/erp`, `/workforce`,
`/workforce/restaurants`, `/workforce/pricing`, `/pricing`, and the rest of the
public site are declared in `src/App.jsx`. `vercel.json` rewrites all paths
to `/index.html` so direct navigation to any of these routes works instead of
returning a Vercel 404.

### workforce.zanvrox.com

The same build serves both `zanvrox.com` and `workforce.zanvrox.com` — there
is no second app. `src/utils/workforceHost.js` detects the request host at
render time and, only on `workforce.zanvrox.com`, redirects:

- `/` → `/workforce`
- `/restaurants` → `/workforce/restaurants`
- `/beta` → `/workforce` (retired beta campaign)

On `zanvrox.com` these paths behave exactly as before. To enable the
subdomain in Vercel, add `workforce.zanvrox.com` as an extra Domain on the
same Vercel project — no separate deployment needed.

## Vercel configuration

- **Root Directory:** `zanvrox-web`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** default (`npm install`)

`vercel.json` in this folder defines the SPA rewrite and the security
headers (CSP, HSTS, X-Frame-Options, Permissions-Policy blocking camera /
geolocation / microphone). `public/_redirects` and `public/_headers` are
Netlify-only files kept for portability; Vercel ignores them and uses
`vercel.json` instead.
