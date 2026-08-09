import {
  createBetaLeadSubject,
  serializeBetaLeadBody,
  validateBetaLeadPayload,
} from './betaLeadValidation';

const FALLBACK_ENDPOINT = '/api/workforce-beta-lead';

const getBetaLeadEndpoint = () => {
  const configured = String(import.meta.env.VITE_WORKFORCE_BETA_LEAD_ENDPOINT || '').trim();
  if (configured) return configured;
  return FALLBACK_ENDPOINT;
};

export async function submitBetaLead({ payload }) {
  const validationErrors = validateBetaLeadPayload(payload);
  if (Object.keys(validationErrors).length > 0) {
    const error = new Error('Please correct the highlighted fields and try again.');
    error.code = 'INVALID_LEAD_PAYLOAD';
    error.fieldErrors = validationErrors;
    throw error;
  }

  const endpoint = getBetaLeadEndpoint();
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'workforce-beta',
      payload,
      subject: createBetaLeadSubject({ payload }),
      body: serializeBetaLeadBody({ payload }),
    }),
  });

  const data = await response.json().catch(() => null);

  if (import.meta.env.DEV) {
    console.info('[zanvrox-web] workforce beta lead submission', {
      endpoint,
      status: response.status,
      ok: Boolean(response.ok && data?.ok),
      hasResponseId: Boolean(data?.id),
    });
  }

  if (!response.ok || !data?.ok) {
    const error = new Error(
      data?.error || 'We could not submit your application. Please try again.'
    );
    error.code = data?.code || 'BETA_LEAD_SUBMISSION_FAILED';
    throw error;
  }

  return data;
}
