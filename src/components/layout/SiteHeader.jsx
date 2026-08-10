import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { useLanguage } from '../../contexts/LanguageContext';
import { createDemoWorkspaceUrl, createWorkforceCheckoutUrl } from '../../utils/publicApp';
import { isWorkforceHost } from '../../utils/workforceHost';

const PRIMARY_LANGUAGE_CODES = ['en', 'fr'];
const FLAG_COUNTRY_BY_LANGUAGE = {
  en: 'ca',
  fr: 'ca',
  es: 'es',
  zh: 'cn',
  pa: 'in',
  ar: 'sa',
  tl: 'ph',
};

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);

  const { language, setLanguage, content, languages } = useLanguage();
  const isWorkforce = isWorkforceHost(
    typeof window !== 'undefined' ? window.location.hostname : ''
  );
  const navItems = (isWorkforce ? content?.workforceNav?.items : content?.navItems) || [];
  const erpLink = isWorkforce ? content?.workforceNav?.erpLink : null;
  const labels = content?.labels || {};
  const workforceLoginUrl = createWorkforceCheckoutUrl({ language, source: 'site-header' });

  const primaryLanguages = PRIMARY_LANGUAGE_CODES.map((code) =>
    languages.find((option) => option.code === code)
  ).filter(Boolean);
  const secondaryLanguages = languages.filter(
    (option) => !PRIMARY_LANGUAGE_CODES.includes(option.code)
  );
  const isSecondaryLanguageActive = !PRIMARY_LANGUAGE_CODES.includes(language);
  const globeActive = languageMenuOpen || isSecondaryLanguageActive;

  const getFlagSrc = (code) => {
    const countryCode = FLAG_COUNTRY_BY_LANGUAGE[code] || 'ca';
    return `https://flagcdn.com/w40/${countryCode}.png`;
  };

  useEffect(() => {
    if (!languageMenuOpen) return undefined;
    const onClick = (event) => {
      if (!languageMenuRef.current?.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [languageMenuOpen]);

  const changeLanguage = (code) => {
    setLanguage(code);
    setLanguageMenuOpen(false);
  };

  return (
    <header
      dir="ltr"
      className="sticky top-0 z-40 border-b border-zx-border bg-zx-bg backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <img
            src="/logo-zanvrox.png"
            alt="ZANVROX logo"
            className="h-10 w-10 shrink-0 scale-[1.35] object-cover transition duration-200 group-hover:scale-[1.42]"
            loading="eager"
            decoding="async"
          />
          <span className="font-heading text-lg font-bold tracking-[0.14em] text-zx-text">
            ZANVROX
          </span>
        </Link>

        <button
          type="button"
          className="zx-button zx-button-secondary px-3 py-2 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {labels.menu || 'Menu'}
        </button>

        <nav className="zx-glass-strip mx-2 hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-hidden p-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              dir="auto"
              className={({ isActive }) =>
                `inline-flex h-8 items-center justify-center whitespace-nowrap rounded-lg px-2 text-[12px] font-medium leading-none transition xl:px-2.5 xl:text-[13px] ${
                  isActive
                    ? 'bg-zx-accent text-zx-bg shadow-[0_8px_14px_rgba(23,151,234,0.3)]'
                    : 'text-zx-text-muted hover:bg-zx-surface hover:text-zx-text'
                }`
              }
            >
              <span dir="auto">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 md:flex">
          <div
            className="zx-glass-strip relative flex h-10 items-center gap-0.5 px-1 py-1"
            ref={languageMenuRef}
          >
            <img
              src={getFlagSrc('ca')}
              alt="Canada"
              className="ml-1 mr-1 h-3.5 w-5 rounded-[2px] object-cover"
              loading="lazy"
              decoding="async"
            />
            {primaryLanguages.map((option, index) => (
              <div key={option.code} className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => changeLanguage(option.code)}
                  className={`h-8 whitespace-nowrap rounded-md px-2 text-[12px] font-semibold leading-none transition xl:px-2.5 ${
                    option.code === language
                      ? 'bg-zx-accent text-zx-bg'
                      : 'text-zx-text-muted hover:text-zx-text'
                  }`}
                >
                  <span dir="auto">{option.label}</span>
                </button>
                {index === 0 ? <span className="px-0.5 text-xs text-zx-text-muted">|</span> : null}
              </div>
            ))}
            <span className="px-0.5 text-xs text-zx-text-muted">|</span>
            <button
              type="button"
              className={`flex h-8 w-8 items-center justify-center rounded-md transition ${
                globeActive ? 'bg-zx-accent text-zx-bg' : 'text-zx-text-muted hover:text-zx-text'
              }`}
              onClick={() => setLanguageMenuOpen((value) => !value)}
              aria-haspopup="menu"
              aria-expanded={languageMenuOpen}
              aria-label="Open language menu"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0">
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.93 9h-3.01a15.3 15.3 0 0 0-1.39-5.04A8.04 8.04 0 0 1 19.93 11ZM12 4.07c.86 1.13 1.94 3.47 2.39 6.93H9.61C10.06 7.54 11.14 5.2 12 4.07ZM4.07 13h3.01c.19 1.76.7 3.5 1.39 5.04A8.04 8.04 0 0 1 4.07 13Zm3.01-2H4.07a8.04 8.04 0 0 1 4.4-5.04A15.3 15.3 0 0 0 7.08 11Zm1.99 2h5.86c-.45 3.46-1.53 5.8-2.39 6.93-.86-1.13-1.94-3.47-2.39-6.93Zm0-2c.45-3.46 1.53-5.8 2.39-6.93.86 1.13 1.94 3.47 2.39 6.93H9.07Zm6.46 7.04c.69-1.54 1.2-3.28 1.39-5.04h3.01a8.04 8.04 0 0 1-4.4 5.04Z"
                />
              </svg>
            </button>
            {languageMenuOpen ? (
              <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[190px] rounded-xl border border-zx-border bg-zx-surface p-1 shadow-panel">
                {secondaryLanguages.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => changeLanguage(option.code)}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm ${
                      option.code === language
                        ? 'bg-zx-accent text-zx-bg'
                        : 'text-zx-text-muted hover:bg-zx-surface-strong hover:text-zx-text'
                    }`}
                  >
                    <img
                      src={getFlagSrc(option.code)}
                      alt={`Flag ${option.label}`}
                      className="h-4 w-6 rounded-[2px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <span dir="auto">{option.label}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          {isWorkforce ? (
            <>
              {erpLink ? (
                <Link
                  to={erpLink.path}
                  className="px-2 text-xs font-medium text-zx-text-muted transition hover:text-zx-text"
                >
                  {erpLink.label}
                </Link>
              ) : null}
              <a
                href={workforceLoginUrl}
                className="zx-button zx-button-secondary h-9 px-3 py-2 text-xs"
              >
                {labels.login || 'Log in'}
              </a>
              <Link
                to="/workforce/beta"
                className="zx-button zx-button-primary h-9 px-3 py-2 text-xs"
              >
                {labels.requestBeta || 'Request beta'}
              </Link>
            </>
          ) : (
            <a
              href={createDemoWorkspaceUrl({ source: 'site-header' })}
              className="zx-button zx-button-primary h-9 px-3 py-2 text-xs"
            >
              {labels.tryDemo || labels.reviewResources || 'Try demo'}
            </a>
          )}
        </div>
      </div>

      {open ? (
        <nav className="border-t border-zx-border bg-zx-bg px-4 pb-4 pt-2 backdrop-blur md:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-zx-accent text-zx-bg'
                      : 'text-zx-text-muted hover:bg-zx-surface hover:text-zx-text'
                  }`
                }
              >
                <span dir="auto">{item.label}</span>
              </NavLink>
            ))}
            <div className="mt-2 rounded-lg border border-zx-border bg-zx-surface-strong px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-zx-text-muted">
                {labels.language || 'Language'}
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {languages.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => changeLanguage(option.code)}
                    className={`flex items-center justify-center gap-2 rounded px-2 py-1 text-xs font-semibold ${
                      option.code === language ? 'bg-zx-accent text-zx-bg' : 'text-zx-text-muted'
                    }`}
                  >
                    <img
                      src={getFlagSrc(option.code)}
                      alt={`Flag ${option.label}`}
                      className="h-3.5 w-5 rounded-[2px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <span dir="auto">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
            {isWorkforce ? (
              <div className="mt-2 grid gap-2">
                <a
                  href={createWorkforceCheckoutUrl({ language, source: 'site-header-mobile' })}
                  onClick={() => setOpen(false)}
                  className="zx-button zx-button-secondary w-full justify-center"
                >
                  {labels.login || 'Log in'}
                </a>
                <Link
                  to="/workforce/beta"
                  onClick={() => setOpen(false)}
                  className="zx-button zx-button-primary w-full justify-center"
                >
                  {labels.requestBeta || 'Request beta'}
                </Link>
                {erpLink ? (
                  <Link
                    to={erpLink.path}
                    onClick={() => setOpen(false)}
                    className="px-2 py-1 text-center text-xs font-medium text-zx-text-muted"
                  >
                    {erpLink.label}
                  </Link>
                ) : null}
              </div>
            ) : (
              <a
                href={createDemoWorkspaceUrl({ source: 'site-header-mobile' })}
                onClick={() => setOpen(false)}
                className="zx-button zx-button-primary mt-2 w-full justify-center"
              >
                {labels.tryDemo || labels.reviewResources || 'Try demo'}
              </a>
            )}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
