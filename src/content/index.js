import siteContentEn from './siteContent.en';

export const ERP_LANGUAGE_SET = [
  { code: 'en', label: 'English', flag: 'CA', primary: true, erpLocale: 'en-CA' },
  { code: 'fr', label: 'Français', flag: 'CA', primary: true, erpLocale: 'fr-CA' },
  { code: 'es', label: 'Español', flag: 'ES', primary: false, erpLocale: 'es-ES' },
  { code: 'zh', label: '中文', flag: 'CN', primary: false, erpLocale: 'zh-CN' },
  { code: 'pa', label: 'Punjabi', flag: 'IN', primary: false, erpLocale: 'pa-IN' },
  { code: 'ar', label: 'العربية', flag: 'SA', primary: false, erpLocale: 'ar' },
  { code: 'tl', label: 'Filipino', flag: 'PH', primary: false, erpLocale: 'tl-PH' },
];

const CONTENT_BY_LANGUAGE = {
  en: siteContentEn,
};

const LOADERS_BY_LANGUAGE = {
  fr: () => import('./siteContent.fr'),
  es: () => import('./siteContent.es'),
  zh: () => import('./siteContent.zh'),
  pa: () => import('./siteContent.pa'),
  ar: () => import('./siteContent.ar'),
  tl: () => import('./siteContent.tl'),
};

const ALIASES = {
  en: 'en',
  'en-ca': 'en',
  fr: 'fr',
  'fr-ca': 'fr',
  es: 'es',
  'es-ES': 'es',
  'es-ca': 'es',
  zh: 'zh',
  'zh-cn': 'zh',
  'zh-hans': 'zh',
  pa: 'pa',
  'pa-in': 'pa',
  ar: 'ar',
  'ar-sa': 'ar',
  tl: 'tl',
  fil: 'tl',
  'tl-ph': 'tl',
  'fil-ph': 'tl',
};

const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const deepMerge = (base, override) => {
  if (Array.isArray(base)) {
    return Array.isArray(override) ? override : base;
  }
  if (isObject(base)) {
    const next = { ...base };
    Object.keys(override || {}).forEach((key) => {
      if (!(key in base)) {
        next[key] = override[key];
        return;
      }
      next[key] = deepMerge(base[key], override[key]);
    });
    return next;
  }
  return override === undefined ? base : override;
};

const collectMissingKeys = (base, override, path = '', out = []) => {
  if (!isObject(base)) return out;
  Object.keys(base).forEach((key) => {
    const nextPath = path ? `${path}.${key}` : key;
    const baseValue = base[key];
    const overrideValue = override ? override[key] : undefined;
    if (overrideValue === undefined) {
      out.push(nextPath);
      return;
    }
    if (isObject(baseValue)) collectMissingKeys(baseValue, overrideValue, nextPath, out);
  });
  return out;
};

export const normalizeLanguageCode = (value) => {
  const raw = String(value || '')
    .trim()
    .toLowerCase();
  if (!raw) return 'en';
  if (CONTENT_BY_LANGUAGE[raw] || LOADERS_BY_LANGUAGE[raw]) return raw;
  return ALIASES[raw] || 'en';
};

export const detectBrowserLanguage = () => {
  if (typeof navigator === 'undefined') return 'en';
  const candidates = [navigator.language, ...(navigator.languages || [])];
  for (const candidate of candidates) {
    const normalized = normalizeLanguageCode(candidate);
    if (CONTENT_BY_LANGUAGE[normalized] || LOADERS_BY_LANGUAGE[normalized]) return normalized;
  }
  return 'en';
};

const mergeCache = new Map();

export const getCachedContent = (languageCode) => {
  const normalized = normalizeLanguageCode(languageCode);
  if (mergeCache.has(normalized)) return mergeCache.get(normalized);

  const english = CONTENT_BY_LANGUAGE.en;
  const localized = CONTENT_BY_LANGUAGE[normalized] || english;
  const merged = normalized === 'en' ? english : deepMerge(english, localized);

  if (normalized !== 'en' && import.meta.env.DEV) {
    const missing = collectMissingKeys(english, localized);
    if (missing.length) {
      console.warn(`[i18n] Missing keys for "${normalized}". Fallback to English for:`, missing);
    }
  }

  mergeCache.set(normalized, merged);
  return merged;
};

export const loadContent = async (languageCode) => {
  const normalized = normalizeLanguageCode(languageCode);
  if (mergeCache.has(normalized)) return mergeCache.get(normalized);
  if (normalized === 'en') return getCachedContent('en');

  if (!CONTENT_BY_LANGUAGE[normalized] && LOADERS_BY_LANGUAGE[normalized]) {
    const module = await LOADERS_BY_LANGUAGE[normalized]();
    CONTENT_BY_LANGUAGE[normalized] = module.default;
  }

  return getCachedContent(normalized);
};

export const getAllLanguages = () => ERP_LANGUAGE_SET;

export default {
  getCachedContent,
  loadContent,
  getAllLanguages,
  normalizeLanguageCode,
  detectBrowserLanguage,
  ERP_LANGUAGE_SET,
};
