import { useMemo, useState } from 'react';
import { submitContactLead } from '../../utils/contactLead';
import {
  createLeadInitialState,
  LEAD_TYPES,
  validateLeadPayload,
} from '../../utils/contactLeadValidation';

export default function BriefRequestForm({ formContent, leadContext = null }) {
  const [form, setForm] = useState(() => createLeadInitialState());
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [hasValidated, setHasValidated] = useState(false);

  const fields = useMemo(() => formContent?.fields || {}, [formContent?.fields]);
  const placeholders = useMemo(() => formContent?.placeholders || {}, [formContent?.placeholders]);
  const options = useMemo(() => formContent?.options || {}, [formContent?.options]);
  const errorMessages = useMemo(() => formContent?.errors || {}, [formContent?.errors]);

  const fieldClass =
    'w-full rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text outline-none transition focus:border-zx-accent focus:ring-2 focus:ring-zx-accent';

  const liveErrors = useMemo(() => validateLeadPayload(form, errorMessages), [errorMessages, form]);

  const setField = (event) => {
    const { name, value, checked, type } = event.target;
    const nextValue = type === 'checkbox' ? checked : value;

    setForm((prev) => {
      const next = { ...prev, [name]: nextValue };
      if (hasValidated) {
        setErrors(validateLeadPayload(next, errorMessages));
      }
      return next;
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateLeadPayload(form, errorMessages);
    setHasValidated(true);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      await submitContactLead({
        type: LEAD_TYPES.contact,
        payload: form,
        context: leadContext,
      });
      setSubmitted(true);
      setForm(createLeadInitialState());
      setErrors({});
      setHasValidated(false);
    } catch (error) {
      console.error(error);
      if (error?.fieldErrors) {
        setErrors(error.fieldErrors);
      }
      setSubmitError(
        formContent?.submitError || 'We could not submit your request. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="zx-card" id="technical-brief">
      <h2 className="font-heading text-2xl font-semibold text-zx-text">{formContent?.title}</h2>
      <p className="mt-2 text-sm text-zx-text-muted">{formContent?.helper}</p>

      {submitted ? (
        <p className="zx-success-soft mt-4 rounded-lg border px-4 py-3 text-sm text-zx-success">
          {formContent?.confirmation}
        </p>
      ) : null}
      {submitError ? (
        <p className="mt-4 rounded-lg border border-zx-danger/40 bg-zx-danger/10 px-4 py-3 text-sm text-zx-danger">
          {submitError}
        </p>
      ) : null}

      <form className="mt-6 space-y-4" noValidate onSubmit={onSubmit}>
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={setField}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <input type="hidden" name="startedAt" value={form.startedAt} readOnly />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-zx-text-muted">
            {fields.name}
            <input
              name="name"
              value={form.name}
              onChange={setField}
              className={fieldClass}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <span className="text-xs text-zx-danger">{errors.name}</span> : null}
          </label>

          <label className="space-y-2 text-sm text-zx-text-muted">
            {fields.company}
            <input
              name="company"
              value={form.company}
              onChange={setField}
              className={fieldClass}
              autoComplete="organization"
              aria-invalid={Boolean(errors.company)}
            />
            {errors.company ? (
              <span className="text-xs text-zx-danger">{errors.company}</span>
            ) : null}
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-zx-text-muted">
            {fields.email}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={setField}
              className={fieldClass}
              autoComplete="email"
              placeholder={placeholders.email}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <span className="text-xs text-zx-danger">{errors.email}</span> : null}
          </label>

          <label className="space-y-2 text-sm text-zx-text-muted">
            {fields.companySize}
            <select
              name="companySize"
              value={form.companySize}
              onChange={setField}
              className={fieldClass}
              aria-invalid={Boolean(errors.companySize)}
            >
              <option value="">{placeholders.companySize}</option>
              {(options.companySizes || []).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.companySize ? (
              <span className="text-xs text-zx-danger">{errors.companySize}</span>
            ) : null}
          </label>
        </div>

        <label className="space-y-2 text-sm text-zx-text-muted">
          {fields.interestArea}
          <select
            name="interestArea"
            value={form.interestArea}
            onChange={setField}
            className={fieldClass}
            aria-invalid={Boolean(errors.interestArea)}
          >
            <option value="">{placeholders.interestArea}</option>
            {(options.interestAreas || []).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.interestArea ? (
            <span className="text-xs text-zx-danger">{errors.interestArea}</span>
          ) : null}
        </label>

        <label className="space-y-2 text-sm text-zx-text-muted">
          {fields.message}
          <textarea
            name="message"
            value={form.message}
            onChange={setField}
            className={`${fieldClass} min-h-[120px]`}
            placeholder={placeholders.message}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <span className="text-xs text-zx-danger">{errors.message}</span> : null}
          {!errors.message && formContent?.messageHint ? (
            <span className="text-xs text-zx-text-muted">{formContent.messageHint}</span>
          ) : null}
        </label>

        <label className="flex items-start gap-3 text-sm text-zx-text-muted">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={setField}
            className="mt-1 h-4 w-4 rounded border-zx-border bg-zx-surface-strong text-zx-accent focus:ring-zx-accent"
          />
          <span>{fields.consent}</span>
        </label>
        {errors.consent ? <p className="text-xs text-zx-danger">{errors.consent}</p> : null}

        {hasValidated && liveErrors.startedAt ? (
          <p className="text-xs text-zx-danger">{liveErrors.startedAt}</p>
        ) : null}

        <button
          type="submit"
          className="zx-button zx-button-secondary w-full sm:w-auto"
          disabled={submitting}
        >
          {submitting ? formContent?.submittingCta || formContent?.cta : formContent?.cta}
        </button>
      </form>
    </section>
  );
}
