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
])

export const LEAD_TYPES = {
  demo: 'demo',
  contact: 'contact',
}

const WORK_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

const normalizeString = (value) => String(value || '').trim()

export const normalizeLeadType = (value) => {
  return value === LEAD_TYPES.demo ? LEAD_TYPES.demo : LEAD_TYPES.contact
}

export const isWorkEmail = (value) => {
  const email = normalizeString(value).toLowerCase()
  if (!WORK_EMAIL_REGEX.test(email)) return false
  const [, domain = ''] = email.split('@')
  return !FREE_EMAIL_DOMAINS.has(domain)
}

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
})

export const validateLeadPayload = (payload, messages = {}) => {
  const next = {}
  const name = normalizeString(payload?.name)
  const company = normalizeString(payload?.company)
  const email = normalizeString(payload?.email)
  const companySize = normalizeString(payload?.companySize)
  const interestArea = normalizeString(payload?.interestArea)
  const message = normalizeString(payload?.message)
  const startedAt = Number(payload?.startedAt || 0)

  if (!name) next.name = messages.name || 'Enter your name.'
  if (!company) next.company = messages.company || 'Enter your company name.'
  if (!email || !isWorkEmail(email)) next.email = messages.email || 'Enter a valid work email.'
  if (!companySize) next.companySize = messages.companySize || 'Select company size.'
  if (!interestArea) next.interestArea = messages.interestArea || 'Select an area of interest.'
  if (message.length > 2000) next.message = messages.message || 'Keep the message under 2000 characters.'
  if (!payload?.consent) next.consent = messages.consent || 'Consent is required.'
  if (normalizeString(payload?.website)) next.website = messages.website || 'Spam protection triggered.'
  if (startedAt > 0 && Date.now() - startedAt < 1500) next.startedAt = messages.startedAt || 'Please take a moment before submitting.'

  return next
}

export const createLeadSubject = ({ type, payload }) => {
  const normalizedType = normalizeLeadType(type)
  const company = normalizeString(payload?.company) || 'Unknown company'
  const interestArea = normalizeString(payload?.interestArea) || 'General'
  const prefix = normalizedType === LEAD_TYPES.demo ? 'Optional demo request' : 'Website contact'

  return `[ZANVROX] ${prefix} - ${company} - ${interestArea}`
}

export const serializeLeadBody = ({ type, payload, context }) => {
  const normalizedType = normalizeLeadType(type)
  const lines = [
    `Lead type: ${normalizedType}`,
    `Name: ${normalizeString(payload?.name)}`,
    `Company: ${normalizeString(payload?.company)}`,
    `Email: ${normalizeString(payload?.email)}`,
    `Company size: ${normalizeString(payload?.companySize)}`,
    `Interest area: ${normalizeString(payload?.interestArea)}`,
    `Message: ${normalizeString(payload?.message) || 'No additional message provided.'}`,
  ]

  if (context?.planLabel || context?.plan) {
    lines.push(`Plan context: ${normalizeString(context?.planLabel || context?.plan)}`)
  }
  if (context?.billingLabel || context?.billing) {
    lines.push(`Billing context: ${normalizeString(context?.billingLabel || context?.billing)}`)
  }
  if (context?.payrollInterest) {
    lines.push(`Payroll interest: ${normalizeString(context?.payrollLabel) || 'Yes'}`)
  }
  if (context?.promoLabel || context?.promo) {
    lines.push(`Promotion context: ${normalizeString(context?.promoLabel || context?.promo)}`)
  }
  if (context?.language) {
    lines.push(`Language: ${normalizeString(context.language)}`)
  }
  if (context?.source) {
    lines.push(`Lead source: ${normalizeString(context.source)}`)
  }

  return lines.join('\n')
}

