import {
  createBetaLeadHtml,
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
    return response.status(405).json({
      ok: false,
      code: 'METHOD_NOT_ALLOWED',
      error: 'Method not allowed.',
    });
  }

  if (!EMAIL_API_KEY || !EMAIL_FROM) {
    return response.status(500).json({
      ok: false,
      code: 'EMAIL_NOT_CONFIGURED',
      error: 'Form delivery is not configured yet.',
    });
  }

  const body = await readJson(request);
  if (!body || typeof body !== 'object') {
    return response.status(400).json({
      ok: false,
      code: 'INVALID_REQUEST',
      error: 'Malformed request body.',
    });
  }

  // The payload is the only client-controlled input trusted by this handler.
  // subject/body/html/from/to/cc/bcc are never read from the request: the
  // server always derives the email subject, text, and HTML from the
  // validated payload below, so the client cannot inject arbitrary email
  // content or headers.
  const payload = body.payload && typeof body.payload === 'object' ? body.payload : {};
  const fieldErrors = validateBetaLeadPayload(payload);

  if (Object.keys(fieldErrors).length > 0) {
    return response.status(400).json({
      ok: false,
      code: 'VALIDATION_FAILED',
      error: 'Please correct the highlighted fields and try again.',
      fieldErrors,
    });
  }

  const subject = createBetaLeadSubject({ payload });
  const textBody = serializeBetaLeadBody({ payload });
  const htmlBody = createBetaLeadHtml({ payload });

  let resendResponse;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${EMAIL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: [NOTIFICATION_EMAIL],
        reply_to: sanitizeReplyTo(payload.email),
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });
  } catch {
    return response.status(502).json({
      ok: false,
      code: 'EMAIL_SEND_FAILED',
      error: 'Email delivery failed.',
    });
  }

  const resendData = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    console.error('[workforce-beta-lead] Resend delivery failed', {
      status: resendResponse.status,
    });
    return response.status(502).json({
      ok: false,
      code: 'EMAIL_SEND_FAILED',
      error: 'Email delivery failed.',
    });
  }

  return response.status(200).json({
    ok: true,
    id: resendData?.id || null,
  });
}

// reply_to must only ever be the validated applicant email; never anything
// else the client might have sent under a different key.
function sanitizeReplyTo(email) {
  return String(email || '').trim();
}
