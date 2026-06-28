import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import defaultOgImagePath from '../../assets/og/og-image.png';
import { useLanguage } from '../../contexts/LanguageContext';

const DEFAULT_SITE_URL = 'https://zanvrox.com';
const HREFLANGS = [
  { hrefLang: 'en-CA', code: 'en' },
  { hrefLang: 'fr-CA', code: 'fr' },
  { hrefLang: 'es', code: 'es' },
  { hrefLang: 'zh-CN', code: 'zh' },
  { hrefLang: 'pa-IN', code: 'pa' },
  { hrefLang: 'ar', code: 'ar' },
  { hrefLang: 'tl-PH', code: 'tl' },
];

const setMeta = (attribute, key, value) => {
  if (!value) return;
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
};

const setCanonical = (href) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const clearAlternateLinks = () => {
  document.head.querySelectorAll('link[data-zx-hreflang="true"]').forEach((tag) => tag.remove());
};

const setAlternateLinks = (href) => {
  clearAlternateLinks();

  HREFLANGS.forEach(({ hrefLang, code }) => {
    const tag = document.createElement('link');
    tag.setAttribute('rel', 'alternate');
    tag.setAttribute('hreflang', hrefLang);
    tag.dataset.zxHreflang = 'true';
    tag.setAttribute('href', `${href}${href.includes('?') ? '&' : '?'}lang=${code}`);
    document.head.appendChild(tag);
  });

  const fallback = document.createElement('link');
  fallback.setAttribute('rel', 'alternate');
  fallback.setAttribute('hreflang', 'x-default');
  fallback.dataset.zxHreflang = 'true';
  fallback.setAttribute('href', href);
  document.head.appendChild(fallback);
};

const clearExistingSchemas = () => {
  document.head.querySelectorAll('script[data-zx-schema="true"]').forEach((tag) => tag.remove());
};

const injectSchemas = (schemas) => {
  clearExistingSchemas();
  const list = Array.isArray(schemas) ? schemas : [schemas];
  list.filter(Boolean).forEach((schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.zxSchema = 'true';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};

export default function SeoManager({ meta, schema }) {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    if (!meta) return;

    const siteUrl = String(import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');
    const path = meta.path || location.pathname;
    const url = `${siteUrl}${path}`;
    const defaultImage = `${siteUrl}${defaultOgImagePath}`;
    document.title = meta.title;

    setMeta('name', 'description', meta.description);
    setMeta('name', 'robots', meta.noIndex ? 'noindex, nofollow' : 'index, follow');
    setMeta('property', 'og:site_name', 'ZANVROX');
    setMeta('property', 'og:type', meta.ogType || 'website');
    setMeta(
      'property',
      'og:locale',
      meta.ogLocale || (language === 'fr' ? 'fr_CA' : language === 'es' ? 'es_ES' : 'en_CA')
    );
    setMeta('property', 'og:title', meta.ogTitle || meta.title);
    setMeta('property', 'og:description', meta.ogDescription || meta.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', meta.ogImage || defaultImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', meta.ogImageAlt || meta.title);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', meta.twitterTitle || meta.title);
    setMeta('name', 'twitter:description', meta.twitterDescription || meta.description);
    setMeta('name', 'twitter:image', meta.twitterImage || meta.ogImage || defaultImage);
    setCanonical(url);
    setAlternateLinks(url);

    injectSchemas(schema);
  }, [language, location.pathname, meta, schema]);

  return null;
}
