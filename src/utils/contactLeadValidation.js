const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'icloud.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
]);

export const LEAD_TYPES = {
  demo: 'demo',
  contact: 'contact',
};

const WORK_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const normalizeString = (value) => String(value || '').trim();

export const LEAD_FIELD_LIMITS = Object.freeze({
  name: 120,
  company: 160,
  email: 254,
  companySize: 80,
  interestArea: 120,
  message: 2000,
  contextValue: 160,
});

export const escapeHtml = (value) =>
  normalizeString(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const bounded = (value, limit) => normalizeString(value).slice(0, limit);

export const sanitizeLeadPayload = (payload) => ({
  name: bounded(payload?.name, LEAD_FIELD_LIMITS.name),
  company: bounded(payload?.company, LEAD_FIELD_LIMITS.company),
  email: bounded(payload?.email, LEAD_FIELD_LIMITS.email).toLowerCase(),
  companySize: bounded(payload?.companySize, LEAD_FIELD_LIMITS.companySize),
  interestArea: bounded(payload?.interestArea, LEAD_FIELD_LIMITS.interestArea),
  message: bounded(payload?.message, LEAD_FIELD_LIMITS.message),
  consent: payload?.consent === true,
  website: bounded(payload?.website, 200),
  startedAt: Number(payload?.startedAt || 0),
});

export const sanitizeLeadContext = (context) => {
  const source = context && typeof context === 'object' && !Array.isArray(context) ? context : {};
  return {
    plan: bounded(source.plan, LEAD_FIELD_LIMITS.contextValue),
    planLabel: bounded(source.planLabel, LEAD_FIELD_LIMITS.contextValue),
    billing: bounded(source.billing, LEAD_FIELD_LIMITS.contextValue),
    billingLabel: bounded(source.billingLabel, LEAD_FIELD_LIMITS.contextValue),
    payrollInterest: source.payrollInterest === true,
    payrollLabel: bounded(source.payrollLabel, LEAD_FIELD_LIMITS.contextValue),
    promo: bounded(source.promo, LEAD_FIELD_LIMITS.contextValue),
    promoLabel: bounded(source.promoLabel, LEAD_FIELD_LIMITS.contextValue),
    language: bounded(source.language, 16),
    source: bounded(source.source, LEAD_FIELD_LIMITS.contextValue),
  };
};

export const normalizeLeadType = (value) => {
  return value === LEAD_TYPES.demo ? LEAD_TYPES.demo : LEAD_TYPES.contact;
};

export const isWorkEmail = (value) => {
  const email = normalizeString(value).toLowerCase();
  if (!WORK_EMAIL_REGEX.test(email)) return false;
  const [, domain = ''] = email.split('@');
  return !FREE_EMAIL_DOMAINS.has(domain);
};

export const createLeadInitialState = () => ({
  name: '',
  company: '',
  email: '',
  companySize: '',
  interestArea: '',
  message: '',
  consent: false,
  website: '',
  startedAt: Date.now(),
});

export const validateLeadPayload = (payload, messages = {}) => {
  const next = {};
  const name = normalizeString(payload?.name);
  const company = normalizeString(payload?.company);
  const email = normalizeString(payload?.email);
  const companySize = normalizeString(payload?.companySize);
  const interestArea = normalizeString(payload?.interestArea);
  const message = normalizeString(payload?.message);
  const startedAt = Number(payload?.startedAt || 0);

  if (!name) next.name = messages.name || 'Enter your name.';
  if (name.length > LEAD_FIELD_LIMITS.name) next.name = messages.name || 'Name is too long.';
  if (!company) next.company = messages.company || 'Enter your company name.';
  if (company.length > LEAD_FIELD_LIMITS.company)
    next.company = messages.company || 'Company name is too long.';
  if (!email || !isWorkEmail(email)) next.email = messages.email || 'Enter a valid work email.';
  if (email.length > LEAD_FIELD_LIMITS.email) next.email = messages.email || 'Email is too long.';
  if (!companySize) next.companySize = messages.companySize || 'Select company size.';
  if (companySize.length > LEAD_FIELD_LIMITS.companySize)
    next.companySize = messages.companySize || 'Company size is too long.';
  if (!interestArea) next.interestArea = messages.interestArea || 'Select an area of interest.';
  if (interestArea.length > LEAD_FIELD_LIMITS.interestArea)
    next.interestArea = messages.interestArea || 'Interest area is too long.';
  if (message.length > LEAD_FIELD_LIMITS.message)
    next.message =
      messages.message || `Keep the message under ${LEAD_FIELD_LIMITS.message} characters.`;
  if (!payload?.consent) next.consent = messages.consent || 'Consent is required.';
  if (normalizeString(payload?.website))
    next.website = messages.website || 'Spam protection triggered.';
  if (!Number.isFinite(startedAt) || startedAt <= 0 || Date.now() - startedAt < 1500)
    next.startedAt = messages.startedAt || 'Please take a moment before submitting.';

  return next;
};

export const createLeadSubject = ({ type, payload }) => {
  const normalizedType = normalizeLeadType(type);
  const company = normalizeString(payload?.company) || 'Unknown company';
  const interestArea = normalizeString(payload?.interestArea) || 'General';
  const prefix = normalizedType === LEAD_TYPES.demo ? 'Optional demo request' : 'Website contact';

  return `[ZANVROX] ${prefix} - ${company} - ${interestArea}`;
};

export const serializeLeadBody = ({ type, payload, context }) => {
  const normalizedType = normalizeLeadType(type);
  const lines = [
    `Lead type: ${normalizedType}`,
    `Name: ${normalizeString(payload?.name)}`,
    `Company: ${normalizeString(payload?.company)}`,
    `Email: ${normalizeString(payload?.email)}`,
    `Company size: ${normalizeString(payload?.companySize)}`,
    `Interest area: ${normalizeString(payload?.interestArea)}`,
    `Message: ${normalizeString(payload?.message) || 'No additional message provided.'}`,
  ];

  if (context?.planLabel || context?.plan) {
    lines.push(`Plan context: ${normalizeString(context?.planLabel || context?.plan)}`);
  }
  if (context?.billingLabel || context?.billing) {
    lines.push(`Billing context: ${normalizeString(context?.billingLabel || context?.billing)}`);
  }
  if (context?.payrollInterest) {
    lines.push(`Payroll interest: ${normalizeString(context?.payrollLabel) || 'Yes'}`);
  }
  if (context?.promoLabel || context?.promo) {
    lines.push(`Promotion context: ${normalizeString(context?.promoLabel || context?.promo)}`);
  }
  if (context?.language) {
    lines.push(`Language: ${normalizeString(context.language)}`);
  }
  if (context?.source) {
    lines.push(`Lead source: ${normalizeString(context.source)}`);
  }

  return lines.join('\n');
};
