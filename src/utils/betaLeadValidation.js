const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const normalizeString = (value) => String(value || '').trim();

export const isValidEmail = (value) => EMAIL_REGEX.test(normalizeString(value).toLowerCase());

export const createBetaLeadInitialState = () => ({
  restaurantName: '',
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
  const restaurantName = normalizeString(payload?.restaurantName);
  const contactName = normalizeString(payload?.contactName);
  const email = normalizeString(payload?.email);
  const city = normalizeString(payload?.city);
  const employeeCount = normalizeString(payload?.employeeCount);
  const locationCount = normalizeString(payload?.locationCount);
  const currentMethod = normalizeString(payload?.currentMethod);
  const participantCount = normalizeString(payload?.participantCount);
  const message = normalizeString(payload?.message);
  const startedAt = Number(payload?.startedAt || 0);

  if (!restaurantName)
    next.restaurantName = messages.restaurantName || 'Enter your restaurant name.';
  if (!contactName) next.contactName = messages.contactName || 'Enter a contact name.';
  if (!email || !isValidEmail(email))
    next.email = messages.email || 'Enter a valid business email.';
  if (!city) next.city = messages.city || 'Enter your city.';
  if (!employeeCount)
    next.employeeCount = messages.employeeCount || 'Enter the number of employees.';
  if (!locationCount)
    next.locationCount = messages.locationCount || 'Enter the number of locations.';
  if (!currentMethod)
    next.currentMethod = messages.currentMethod || 'Tell us your current time tracking method.';
  if (!participantCount)
    next.participantCount =
      messages.participantCount || 'Enter how many employees could participate.';
  if (message.length > 2000)
    next.message = messages.message || 'Keep the message under 2000 characters.';
  if (!payload?.consent)
    next.consent = messages.consent || 'Consent is required to apply for the beta.';
  if (normalizeString(payload?.website))
    next.website = messages.website || 'Spam protection triggered.';
  if (startedAt > 0 && Date.now() - startedAt < 1500)
    next.startedAt = messages.startedAt || 'Please take a moment before submitting.';

  return next;
};

export const createBetaLeadSubject = ({ payload }) => {
  const restaurantName = normalizeString(payload?.restaurantName) || 'Unknown restaurant';
  const city = normalizeString(payload?.city) || 'Unknown city';

  return `[ZANVROX] Ontario Workforce beta application - ${restaurantName} - ${city}`;
};

export const serializeBetaLeadBody = ({ payload }) => {
  const lines = [
    'Lead type: workforce-beta',
    `Restaurant name: ${normalizeString(payload?.restaurantName)}`,
    `Contact name: ${normalizeString(payload?.contactName)}`,
    `Business email: ${normalizeString(payload?.email)}`,
    `City: ${normalizeString(payload?.city)}`,
    `Number of employees: ${normalizeString(payload?.employeeCount)}`,
    `Number of locations: ${normalizeString(payload?.locationCount)}`,
    `Current time tracking method: ${normalizeString(payload?.currentMethod)}`,
    `Employees who could participate: ${normalizeString(payload?.participantCount)}`,
    `Message: ${normalizeString(payload?.message) || 'No additional message provided.'}`,
  ];

  return lines.join('\n');
};
