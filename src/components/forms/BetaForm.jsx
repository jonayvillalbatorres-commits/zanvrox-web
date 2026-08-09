import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { submitBetaLead } from '../../utils/betaLead';
import {
  createBetaLeadInitialState,
  validateBetaLeadPayload,
} from '../../utils/betaLeadValidation';

export default function BetaForm({ formContent }) {
  const [form, setForm] = useState(() => createBetaLeadInitialState());
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [hasValidated, setHasValidated] = useState(false);

  const placeholders = useMemo(() => formContent?.placeholders || {}, [formContent?.placeholders]);
  const errorMessages = useMemo(() => formContent?.errors || {}, [formContent?.errors]);
  const fields = useMemo(() => formContent?.fields || {}, [formContent?.fields]);

  const fieldClass =
    'w-full rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text outline-none transition focus:border-zx-accent focus:ring-2 focus:ring-zx-accent';

  const liveErrors = useMemo(
    () => validateBetaLeadPayload(form, errorMessages),
    [errorMessages, form]
  );

  const setField = (event) => {
    const { name, value, type, checked } = event.target;
    const nextValue = type === 'checkbox' ? checked : value;

    setForm((prev) => {
      const next = { ...prev, [name]: nextValue };
      if (hasValidated) {
        setErrors(validateBetaLeadPayload(next, errorMessages));
      }
      return next;
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateBetaLeadPayload(form, errorMessages);
    setHasValidated(true);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      await submitBetaLead({ payload: form });
      setSubmitted(true);
      setForm(createBetaLeadInitialState());
      setErrors({});
      setHasValidated(false);
    } catch (error) {
      console.error(error);
      if (error?.fieldErrors) {
        setErrors(error.fieldErrors);
      }
      setSubmitError(
        formContent?.submitError || 'We could not submit your application. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="zx-card" id="beta-form">
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
            {fields.restaurantName}
            <input
              name="restaurantName"
              value={form.restaurantName}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.restaurantName}
              autoComplete="organization"
              aria-invalid={Boolean(errors.restaurantName)}
            />
            {errors.restaurantName ? (
              <span className="text-xs text-zx-danger">{errors.restaurantName}</span>
            ) : null}
          </label>

          <label className="space-y-2 text-sm text-zx-text-muted">
            {fields.contactName}
            <input
              name="contactName"
              value={form.contactName}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.contactName}
              autoComplete="name"
              aria-invalid={Boolean(errors.contactName)}
            />
            {errors.contactName ? (
              <span className="text-xs text-zx-danger">{errors.contactName}</span>
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
            {fields.city}
            <input
              name="city"
              value={form.city}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.city}
              autoComplete="address-level2"
              aria-invalid={Boolean(errors.city)}
            />
            {errors.city ? <span className="text-xs text-zx-danger">{errors.city}</span> : null}
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-zx-text-muted">
            {fields.employeeCount}
            <input
              type="number"
              min="0"
              inputMode="numeric"
              name="employeeCount"
              value={form.employeeCount}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.employeeCount}
              aria-invalid={Boolean(errors.employeeCount)}
            />
            {errors.employeeCount ? (
              <span className="text-xs text-zx-danger">{errors.employeeCount}</span>
            ) : null}
          </label>

          <label className="space-y-2 text-sm text-zx-text-muted">
            {fields.locationCount}
            <input
              type="number"
              min="0"
              inputMode="numeric"
              name="locationCount"
              value={form.locationCount}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.locationCount}
              aria-invalid={Boolean(errors.locationCount)}
            />
            {errors.locationCount ? (
              <span className="text-xs text-zx-danger">{errors.locationCount}</span>
            ) : null}
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-zx-text-muted">
            {fields.currentMethod}
            <input
              name="currentMethod"
              value={form.currentMethod}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.currentMethod}
              aria-invalid={Boolean(errors.currentMethod)}
            />
            {errors.currentMethod ? (
              <span className="text-xs text-zx-danger">{errors.currentMethod}</span>
            ) : null}
          </label>

          <label className="space-y-2 text-sm text-zx-text-muted">
            {fields.participantCount}
            <input
              type="number"
              min="0"
              inputMode="numeric"
              name="participantCount"
              value={form.participantCount}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.participantCount}
              aria-invalid={Boolean(errors.participantCount)}
            />
            {errors.participantCount ? (
              <span className="text-xs text-zx-danger">{errors.participantCount}</span>
            ) : null}
          </label>
        </div>

        <label className="space-y-2 text-sm text-zx-text-muted">
          {fields.message}
          <textarea
            name="message"
            value={form.message}
            onChange={setField}
            className={`${fieldClass} min-h-[100px]`}
            placeholder={placeholders.message}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <span className="text-xs text-zx-danger">{errors.message}</span> : null}
        </label>

        <label className="flex items-start gap-3 text-sm text-zx-text-muted">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={setField}
            className="mt-1 h-4 w-4 rounded border-zx-border bg-zx-surface-strong text-zx-accent focus:ring-zx-accent"
          />
          <span>
            {fields.consent}{' '}
            {formContent?.consentPrivacyPath ? (
              <Link to={formContent.consentPrivacyPath} className="text-zx-accent underline">
                {formContent.consentPrivacyLabel}
              </Link>
            ) : null}
          </span>
        </label>
        {errors.consent ? <p className="text-xs text-zx-danger">{errors.consent}</p> : null}

        {hasValidated && liveErrors.startedAt ? (
          <p className="text-xs text-zx-danger">{liveErrors.startedAt}</p>
        ) : null}

        <button
          type="submit"
          className="zx-button zx-button-primary w-full sm:w-auto"
          disabled={submitting}
        >
          {submitting ? formContent?.submittingCta || formContent?.cta : formContent?.cta}
        </button>
      </form>
    </section>
  );
}
