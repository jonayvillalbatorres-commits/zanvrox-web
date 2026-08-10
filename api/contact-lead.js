import {
  createLeadSubject,
  escapeHtml,
  normalizeLeadType,
  sanitizeLeadContext,
  sanitizeLeadPayload,
  serializeLeadBody,
  validateLeadPayload,
} from '../src/utils/contactLeadValidation.js';

const env = globalThis.process?.env || {};
const NOTIFICATION_EMAIL = env.CONTACT_NOTIFICATION_EMAIL || 'support@zanvrox.com';
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

// Vercel's Node.js function runtime (the default here -- no `export const
// config = { runtime: 'edge' }`) pre-parses a JSON request body into
// `request.body`; unlike an Edge function or a browser `Request`, it has no
// `.json()` method. Reading `request.body` first is what actually works in
// production; the raw-string and `.json()` fallbacks only exist for
// robustness (an unparsed body, or a future Edge runtime).
const readJson = async (request) => {
  if (request.body && typeof request.body === 'object') return request.body;
  if (typeof request.body === 'string' && request.body.trim()) {
    try {
      return JSON.parse(request.body);
    } catch {
      return null;
    }
  }
  if (typeof request.json === 'function') {
    try {
      return await request.json();
    } catch {
      return null;
    }
  }
  return null;
};

const buildHtml = ({ type, payload, context }) => {
  const safeMessage = escapeHtml(payload?.message) || 'No additional message provided.';
  const contextRows = [
    context?.planLabel || context?.plan
      ? `<li><strong>Plan:</strong> ${escapeHtml(context?.planLabel || context?.plan)}</li>`
      : '',
    context?.billingLabel || context?.billing
      ? `<li><strong>Billing:</strong> ${escapeHtml(context?.billingLabel || context?.billing)}</li>`
      : '',
    context?.payrollInterest
      ? `<li><strong>Payroll:</strong> ${escapeHtml(context?.payrollLabel || 'Interested')}</li>`
      : '',
    context?.promoLabel || context?.promo
      ? `<li><strong>Offer:</strong> ${escapeHtml(context?.promoLabel || context?.promo)}</li>`
      : '',
    context?.language ? `<li><strong>Language:</strong> ${escapeHtml(context.language)}</li>` : '',
    context?.source ? `<li><strong>Source:</strong> ${escapeHtml(context.source)}</li>` : '',
  ].filter(Boolean);

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a">
      <h2 style="margin:0 0 16px">ZANVROX website lead</h2>
      <p><strong>Lead type:</strong> ${escapeHtml(normalizeLeadType(type))}</p>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company size:</strong> ${escapeHtml(payload.companySize)}</p>
      <p><strong>Interest area:</strong> ${escapeHtml(payload.interestArea)}</p>
      <p><strong>Message:</strong><br/>${safeMessage.replace(/\n/g, '<br/>')}</p>
      ${contextRows.length ? `<h3 style="margin:24px 0 8px">Commercial context</h3><ul>${contextRows.join('')}</ul>` : ''}
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
  const rawPayload = body.payload && typeof body.payload === 'object' ? body.payload : {};
  const fieldErrors = validateLeadPayload(rawPayload);

  if (Object.keys(fieldErrors).length > 0) {
    return response.status(400).json({
      ok: false,
      code: 'INVALID_INPUT',
      error: 'Please correct the highlighted fields and try again.',
      fieldErrors,
    });
  }

  const payload = sanitizeLeadPayload(rawPayload);
  const context = sanitizeLeadContext(body.context);
  const type = normalizeLeadType(body.type);
  const subject = createLeadSubject({ type, payload });
  const textBody = serializeLeadBody({ type, payload, context });
  const htmlBody = buildHtml({ type, payload, context });

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
        reply_to: payload.email,
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });
  } catch {
    return response.status(502).json({
      ok: false,
      code: 'EMAIL_DELIVERY_FAILED',
      error: 'Email delivery failed.',
    });
  }

  const resendData = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    return response.status(502).json({
      ok: false,
      code: 'EMAIL_DELIVERY_FAILED',
      error: 'Email delivery failed.',
    });
  }

  return response.status(200).json({
    ok: true,
    id: resendData?.id || null,
  });
}
