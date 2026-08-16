const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const STRING_LIMITS = {
  businessName: { min: 2, max: 120 },
  contactName: { min: 2, max: 120 },
  city: { min: 2, max: 120 },
  currentMethod: { min: 1, max: 200 },
  message: { min: 0, max: 2000 },
};

export const BETA_BUSINESS_TYPES = [
  'restaurant',
  'cafe',
  'bar',
  'retail_store',
  'small_shop',
  'small_warehouse',
  'other',
];

const EMAIL_MAX_LENGTH = 254;

const NUMERIC_LIMITS = {
  employeeCount: { min: 1, max: 10000 },
  locationCount: { min: 1, max: 1000 },
  participantCount: { min: 1, max: 10000 },
};

const normalizeString = (value) => String(value ?? '').trim();

const collapseWhitespace = (value) => normalizeString(value).replace(/\s+/g, ' ');

const normalizeBusinessType = (payload) =>
  collapseWhitespace(payload?.businessType || (payload?.restaurantName ? 'restaurant' : ''));

export const escapeHtml = (value) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
  );

export const isValidEmail = (value) => {
  const email = normalizeString(value).toLowerCase();
  return email.length > 0 && email.length <= EMAIL_MAX_LENGTH && EMAIL_REGEX.test(email);
};

const parseBoundedInteger = (value, { min, max }) => {
  const str = normalizeString(value);
  if (!/^\d+$/.test(str)) return null;
  const num = Number(str);
  if (!Number.isFinite(num) || num < min || num > max) return null;
  return num;
};

export const createBetaLeadInitialState = () => ({
  businessName: '',
  businessType: '',
  contactName: '',
  email: '',
  city: '',
  employeeCount: '',
  locationCount: '',
  currentMethod: '',
  participantCount: '',
  message: '',
  consent: false,
  website: '',
  startedAt: Date.now(),
});

export const validateBetaLeadPayload = (payload, messages = {}) => {
  const next = {};
  const businessName = collapseWhitespace(payload?.businessName || payload?.restaurantName);
  const businessType = normalizeBusinessType(payload);
  const contactName = collapseWhitespace(payload?.contactName);
  const email = normalizeString(payload?.email);
  const city = collapseWhitespace(payload?.city);
  const currentMethod = collapseWhitespace(payload?.currentMethod);
  const message = normalizeString(payload?.message);
  const startedAt = Number(payload?.startedAt || 0);

  const employeeCount = parseBoundedInteger(payload?.employeeCount, NUMERIC_LIMITS.employeeCount);
  const locationCount = parseBoundedInteger(payload?.locationCount, NUMERIC_LIMITS.locationCount);
  const participantCount = parseBoundedInteger(
    payload?.participantCount,
    NUMERIC_LIMITS.participantCount
  );

  if (
    businessName.length < STRING_LIMITS.businessName.min ||
    businessName.length > STRING_LIMITS.businessName.max
  ) {
    next.businessName = messages.businessName || 'Enter your business name.';
  }
  if (!BETA_BUSINESS_TYPES.includes(businessType)) {
    next.businessType = messages.businessType || 'Select your business type.';
  }
  if (
    contactName.length < STRING_LIMITS.contactName.min ||
    contactName.length > STRING_LIMITS.contactName.max
  ) {
    next.contactName = messages.contactName || 'Enter a contact name.';
  }
  if (!isValidEmail(email)) {
    next.email = messages.email || 'Enter a valid business email.';
  }
  if (city.length < STRING_LIMITS.city.min || city.length > STRING_LIMITS.city.max) {
    next.city = messages.city || 'Enter your city.';
  }
  if (employeeCount === null) {
    next.employeeCount = messages.employeeCount || 'Enter a valid number of employees (1-10000).';
  }
  if (locationCount === null) {
    next.locationCount = messages.locationCount || 'Enter a valid number of locations (1-1000).';
  }
  if (
    currentMethod.length < STRING_LIMITS.currentMethod.min ||
    currentMethod.length > STRING_LIMITS.currentMethod.max
  ) {
    next.currentMethod = messages.currentMethod || 'Tell us your current time tracking method.';
  }
  if (participantCount === null) {
    next.participantCount =
      messages.participantCount || 'Enter a valid number of participating employees.';
  } else if (employeeCount !== null && participantCount > employeeCount) {
    next.participantCount =
      messages.participantCountExceedsEmployees ||
      'The number of participants cannot exceed the number of employees.';
  }
  if (message.length > STRING_LIMITS.message.max) {
    next.message = messages.message || 'Keep the message under 2000 characters.';
  }
  if (!payload?.consent) {
    next.consent = messages.consent || 'Consent is required to apply for the beta.';
  }
  if (normalizeString(payload?.website)) {
    next.website = messages.website || 'Spam protection triggered.';
  }
  if (startedAt > 0 && Date.now() - startedAt < 1500) {
    next.startedAt = messages.startedAt || 'Please take a moment before submitting.';
  }

  return next;
};

// Assumes validateBetaLeadPayload(payload) returned no errors.
export const sanitizeBetaLeadPayload = (payload) => ({
  businessName: collapseWhitespace(payload?.businessName || payload?.restaurantName).slice(
    0,
    STRING_LIMITS.businessName.max
  ),
  businessType: BETA_BUSINESS_TYPES.includes(normalizeBusinessType(payload))
    ? normalizeBusinessType(payload)
    : 'other',
  contactName: collapseWhitespace(payload?.contactName).slice(0, STRING_LIMITS.contactName.max),
  email: normalizeString(payload?.email).toLowerCase().slice(0, EMAIL_MAX_LENGTH),
  city: collapseWhitespace(payload?.city).slice(0, STRING_LIMITS.city.max),
  employeeCount: parseBoundedInteger(payload?.employeeCount, NUMERIC_LIMITS.employeeCount),
  locationCount: parseBoundedInteger(payload?.locationCount, NUMERIC_LIMITS.locationCount),
  currentMethod: collapseWhitespace(payload?.currentMethod).slice(
    0,
    STRING_LIMITS.currentMethod.max
  ),
  participantCount: parseBoundedInteger(payload?.participantCount, NUMERIC_LIMITS.participantCount),
  message: normalizeString(payload?.message).slice(0, STRING_LIMITS.message.max),
});

export const createBetaLeadSubject = ({ payload }) => {
  const safe = sanitizeBetaLeadPayload(payload);
  const businessName = safe.businessName || 'Unknown business';
  const city = safe.city || 'Unknown city';

  return `[ZANVROX] Ontario Workforce beta application - ${businessName} - ${city}`;
};

export const serializeBetaLeadBody = ({ payload }) => {
  const safe = sanitizeBetaLeadPayload(payload);
  const lines = [
    'Lead type: workforce-beta',
    `Business name: ${safe.businessName}`,
    `Business type: ${safe.businessType}`,
    `Contact name: ${safe.contactName}`,
    `Business email: ${safe.email}`,
    `City: ${safe.city}`,
    `Number of employees: ${safe.employeeCount ?? ''}`,
    `Number of locations: ${safe.locationCount ?? ''}`,
    `Current time tracking method: ${safe.currentMethod}`,
    `Employees who could participate: ${safe.participantCount ?? ''}`,
    `Message: ${safe.message || 'No additional message provided.'}`,
  ];

  return lines.join('\n');
};

export const createBetaLeadHtml = ({ payload }) => {
  const safe = sanitizeBetaLeadPayload(payload);
  const safeMessage = escapeHtml(safe.message || 'No additional message provided.').replace(
    /\n/g,
    '<br/>'
  );

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a">
      <h2 style="margin:0 0 16px">ZANVROX Workforce - Ontario Small Business Beta application</h2>
      <p><strong>Business name:</strong> ${escapeHtml(safe.businessName)}</p>
      <p><strong>Business type:</strong> ${escapeHtml(safe.businessType)}</p>
      <p><strong>Contact name:</strong> ${escapeHtml(safe.contactName)}</p>
      <p><strong>Business email:</strong> ${escapeHtml(safe.email)}</p>
      <p><strong>City:</strong> ${escapeHtml(safe.city)}</p>
      <p><strong>Number of employees:</strong> ${escapeHtml(safe.employeeCount ?? '')}</p>
      <p><strong>Number of locations:</strong> ${escapeHtml(safe.locationCount ?? '')}</p>
      <p><strong>Current time tracking method:</strong> ${escapeHtml(safe.currentMethod)}</p>
      <p><strong>Employees who could participate:</strong> ${escapeHtml(safe.participantCount ?? '')}</p>
      <p><strong>Message:</strong><br/>${safeMessage}</p>
    </div>
  `;
};
