import {
  createBetaLeadSubject,
  serializeBetaLeadBody,
  validateBetaLeadPayload,
} from '../src/utils/betaLeadValidation.js';

const env = globalThis.process?.env || {};
const NOTIFICATION_EMAIL =
  env.WORKFORCE_BETA_NOTIFICATION_EMAIL || env.CONTACT_NOTIFICATION_EMAIL || 'support@zanvrox.com';
const EMAIL_FROM = env.CONTACT_EMAIL_FROM || env.EMAIL_FROM || '';
const EMAIL_API_KEY = env.RESEND_API_KEY || '';
const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://zanvrox.com',
  'https://www.zanvrox.com',
];

const createHeaders = (origin = '') => {
  const headers = {
    'Content-Type': 'application/json',
    Vary: 'Origin',
  };

  if (ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }

  return headers;
};

const readJson = async (request) => {
  try {
    return await request.json();
  } catch {
    return null;
  }
};

const buildHtml = ({ payload }) => {
  const safeMessage = String(payload?.message || '').trim() || 'No additional message provided.';

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a">
      <h2 style="margin:0 0 16px">ZANVROX Workforce - Ontario Restaurant Beta application</h2>
      <p><strong>Restaurant name:</strong> ${payload.restaurantName}</p>
      <p><strong>Contact name:</strong> ${payload.contactName}</p>
      <p><strong>Business email:</strong> ${payload.email}</p>
      <p><strong>City:</strong> ${payload.city}</p>
      <p><strong>Number of employees:</strong> ${payload.employeeCount}</p>
      <p><strong>Number of locations:</strong> ${payload.locationCount}</p>
      <p><strong>Current time tracking method:</strong> ${payload.currentMethod}</p>
      <p><strong>Employees who could participate:</strong> ${payload.participantCount}</p>
      <p><strong>Message:</strong><br/>${safeMessage.replace(/\n/g, '<br/>')}</p>
    </div>
  `;
};

export default async function handler(request, response) {
  const origin = request.headers.origin || '';

  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    Object.entries(createHeaders(origin)).forEach(([key, value]) => response.setHeader(key, value));
    return response.status(204).end();
  }

  Object.entries(createHeaders(origin)).forEach(([key, value]) => response.setHeader(key, value));

  if (request.method !== 'POST') {
    return response.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  if (!EMAIL_API_KEY || !EMAIL_FROM) {
    return response.status(500).json({
      ok: false,
      code: 'EMAIL_NOT_CONFIGURED',
      error: 'Form delivery is not configured yet. Set RESEND_API_KEY and CONTACT_EMAIL_FROM.',
    });
  }

  const body = (await readJson(request)) || {};
  const payload = body.payload || {};
  const fieldErrors = validateBetaLeadPayload(payload);

  if (Object.keys(fieldErrors).length > 0) {
    return response.status(400).json({
      ok: false,
      code: 'INVALID_INPUT',
      error: 'Please correct the highlighted fields and try again.',
      fieldErrors,
    });
  }

  const subject = String(body.subject || createBetaLeadSubject({ payload })).trim();
  const textBody = String(body.body || serializeBetaLeadBody({ payload }));
  const htmlBody = buildHtml({ payload });

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${EMAIL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to: [NOTIFICATION_EMAIL],
      reply_to: payload.email,
      subject,
      text: textBody,
      html: htmlBody,
    }),
  });

  const resendData = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    return response.status(502).json({
      ok: false,
      code: 'EMAIL_DELIVERY_FAILED',
      error: resendData?.message || 'Email delivery failed.',
    });
  }

  return response.status(200).json({
    ok: true,
    id: resendData?.id || null,
  });
}
