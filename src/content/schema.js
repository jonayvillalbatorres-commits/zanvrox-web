const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://zanvrox.com').replace(/\/$/, '');

export const createFaqSchema = (items = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: (items || []).map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'ZANVROX',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-zanvrox.png`,
  sameAs: [SITE_URL],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@zanvrox.com',
      areaServed: 'CA',
      availableLanguage: ['English', 'French', 'Spanish'],
    },
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'ZANVROX',
  inLanguage: ['en-CA', 'fr-CA', 'es'],
};

export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#software`,
  name: 'ZANVROX ERP',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Cloud',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'CAD',
  },
  featureList: [
    'Accounting and invoicing',
    'Expenses and financial reporting',
    'Inventory and warehouse workflows',
    'Production and BOM support',
    'Approvals and governance',
    'Canadian tax workflows',
    'Payroll add-on',
    'Multi-company support',
  ],
};

export const faqSchema = createFaqSchema([]);
