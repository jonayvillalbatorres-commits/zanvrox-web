import { createLeadSubject, serializeLeadBody, validateLeadPayload } from './contactLeadValidation'

const FALLBACK_ENDPOINT = '/api/contact-lead'

const getLeadEndpoint = () => {
  const configured = String(import.meta.env.VITE_CONTACT_LEAD_ENDPOINT || '').trim()
  if (configured) return configured
  return FALLBACK_ENDPOINT
}

export async function submitContactLead({ type, payload, context }) {
  const validationErrors = validateLeadPayload(payload)
  if (Object.keys(validationErrors).length > 0) {
    const error = new Error('Please correct the highlighted fields and try again.')
    error.code = 'INVALID_LEAD_PAYLOAD'
    error.fieldErrors = validationErrors
    throw error
  }

  const endpoint = getLeadEndpoint()
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type,
      payload,
      context,
      subject: createLeadSubject({ type, payload }),
      body: serializeLeadBody({ type, payload, context }),
    }),
  })

  const data = await response.json().catch(() => null)

  if (import.meta.env.DEV) {
    console.info('[zanvrox-web] contact lead submission', {
      endpoint,
      type,
      status: response.status,
      ok: Boolean(response.ok && data?.ok),
      hasResponseId: Boolean(data?.id),
    })
  }

  if (!response.ok || !data?.ok) {
    const error = new Error(data?.error || 'We could not submit your request. Please try again.')
    error.code = data?.code || 'CONTACT_LEAD_SUBMISSION_FAILED'
    throw error
  }

  return data
}
