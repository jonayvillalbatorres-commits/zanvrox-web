import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { submitBetaLead } from '../../utils/betaLead';
import {
  createBetaLeadInitialState,
  validateBetaLeadPayload,
} from '../../utils/betaLeadValidation';

const FIELD_ORDER = [
  'restaurantName',
  'contactName',
  'email',
  'city',
  'employeeCount',
  'locationCount',
  'currentMethod',
  'participantCount',
  'message',
  'consent',
];

const errorId = (name) => `beta-form-${name}-error`;
const fieldId = (name) => `beta-form-${name}`;

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
    'w-full rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text outline-none transition focus:border-zx-accent focus:ring-2 focus:ring-zx-accent aria-[invalid=true]:border-zx-danger';

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

  const focusFirstError = (nextErrors) => {
    const firstInvalid = FIELD_ORDER.find((name) => nextErrors[name]);
    if (!firstInvalid) return;
    const el = document.getElementById(fieldId(firstInvalid));
    el?.focus();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateBetaLeadPayload(form, errorMessages);
    setHasValidated(true);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

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
        focusFirstError(error.fieldErrors);
      }
      setSubmitError(
        formContent?.submitError || 'We could not submit your application. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const describedBy = (name) => (errors[name] ? errorId(name) : undefined);

  return (
    <section className="zx-card" id="beta-form">
      <h2 className="font-heading text-2xl font-semibold text-zx-text">{formContent?.title}</h2>
      <p className="mt-2 text-sm text-zx-text-muted">{formContent?.helper}</p>

      <div aria-live="polite">
        {submitted ? (
          <p className="zx-success-soft mt-4 rounded-lg border px-4 py-3 text-sm text-zx-success">
            {formContent?.confirmation}
          </p>
        ) : null}
        {submitError ? (
          <p
            role="alert"
            className="mt-4 rounded-lg border border-zx-danger/40 bg-zx-danger/10 px-4 py-3 text-sm text-zx-danger"
          >
            {submitError}
          </p>
        ) : null}
      </div>

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
          <label
            htmlFor={fieldId('restaurantName')}
            className="space-y-2 text-sm text-zx-text-muted"
          >
            {fields.restaurantName}
            <input
              id={fieldId('restaurantName')}
              name="restaurantName"
              value={form.restaurantName}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.restaurantName}
              autoComplete="organization"
              aria-invalid={Boolean(errors.restaurantName)}
              aria-describedby={describedBy('restaurantName')}
            />
            {errors.restaurantName ? (
              <span id={errorId('restaurantName')} className="text-xs text-zx-danger">
                {errors.restaurantName}
              </span>
            ) : null}
          </label>

          <label htmlFor={fieldId('contactName')} className="space-y-2 text-sm text-zx-text-muted">
            {fields.contactName}
            <input
              id={fieldId('contactName')}
              name="contactName"
              value={form.contactName}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.contactName}
              autoComplete="name"
              aria-invalid={Boolean(errors.contactName)}
              aria-describedby={describedBy('contactName')}
            />
            {errors.contactName ? (
              <span id={errorId('contactName')} className="text-xs text-zx-danger">
                {errors.contactName}
              </span>
            ) : null}
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label htmlFor={fieldId('email')} className="space-y-2 text-sm text-zx-text-muted">
            {fields.email}
            <input
              id={fieldId('email')}
              type="email"
              name="email"
              value={form.email}
              onChange={setField}
              className={fieldClass}
              autoComplete="email"
              placeholder={placeholders.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy('email')}
            />
            {errors.email ? (
              <span id={errorId('email')} className="text-xs text-zx-danger">
                {errors.email}
              </span>
            ) : null}
          </label>

          <label htmlFor={fieldId('city')} className="space-y-2 text-sm text-zx-text-muted">
            {fields.city}
            <input
              id={fieldId('city')}
              name="city"
              value={form.city}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.city}
              autoComplete="address-level2"
              aria-invalid={Boolean(errors.city)}
              aria-describedby={describedBy('city')}
            />
            {errors.city ? (
              <span id={errorId('city')} className="text-xs text-zx-danger">
                {errors.city}
              </span>
            ) : null}
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label
            htmlFor={fieldId('employeeCount')}
            className="space-y-2 text-sm text-zx-text-muted"
          >
            {fields.employeeCount}
            <input
              id={fieldId('employeeCount')}
              type="number"
              min="1"
              max="10000"
              step="1"
              inputMode="numeric"
              name="employeeCount"
              value={form.employeeCount}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.employeeCount}
              aria-invalid={Boolean(errors.employeeCount)}
              aria-describedby={describedBy('employeeCount')}
            />
            {errors.employeeCount ? (
              <span id={errorId('employeeCount')} className="text-xs text-zx-danger">
                {errors.employeeCount}
              </span>
            ) : null}
          </label>

          <label
            htmlFor={fieldId('locationCount')}
            className="space-y-2 text-sm text-zx-text-muted"
          >
            {fields.locationCount}
            <input
              id={fieldId('locationCount')}
              type="number"
              min="1"
              max="1000"
              step="1"
              inputMode="numeric"
              name="locationCount"
              value={form.locationCount}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.locationCount}
              aria-invalid={Boolean(errors.locationCount)}
              aria-describedby={describedBy('locationCount')}
            />
            {errors.locationCount ? (
              <span id={errorId('locationCount')} className="text-xs text-zx-danger">
                {errors.locationCount}
              </span>
            ) : null}
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label
            htmlFor={fieldId('currentMethod')}
            className="space-y-2 text-sm text-zx-text-muted"
          >
            {fields.currentMethod}
            <input
              id={fieldId('currentMethod')}
              name="currentMethod"
              value={form.currentMethod}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.currentMethod}
              aria-invalid={Boolean(errors.currentMethod)}
              aria-describedby={describedBy('currentMethod')}
            />
            {errors.currentMethod ? (
              <span id={errorId('currentMethod')} className="text-xs text-zx-danger">
                {errors.currentMethod}
              </span>
            ) : null}
          </label>

          <label
            htmlFor={fieldId('participantCount')}
            className="space-y-2 text-sm text-zx-text-muted"
          >
            {fields.participantCount}
            <input
              id={fieldId('participantCount')}
              type="number"
              min="1"
              max="10000"
              step="1"
              inputMode="numeric"
              name="participantCount"
              value={form.participantCount}
              onChange={setField}
              className={fieldClass}
              placeholder={placeholders.participantCount}
              aria-invalid={Boolean(errors.participantCount)}
              aria-describedby={describedBy('participantCount')}
            />
            {errors.participantCount ? (
              <span id={errorId('participantCount')} className="text-xs text-zx-danger">
                {errors.participantCount}
              </span>
            ) : null}
          </label>
        </div>

        <label htmlFor={fieldId('message')} className="space-y-2 text-sm text-zx-text-muted">
          {fields.message}
          <textarea
            id={fieldId('message')}
            name="message"
            value={form.message}
            onChange={setField}
            className={`${fieldClass} min-h-[100px]`}
            placeholder={placeholders.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy('message')}
          />
          {errors.message ? (
            <span id={errorId('message')} className="text-xs text-zx-danger">
              {errors.message}
            </span>
          ) : null}
        </label>

        <label
          htmlFor={fieldId('consent')}
          className="flex items-start gap-3 text-sm text-zx-text-muted"
        >
          <input
            id={fieldId('consent')}
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={setField}
            className="mt-1 h-4 w-4 rounded border-zx-border bg-zx-surface-strong text-zx-accent focus:ring-zx-accent"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={describedBy('consent')}
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
        {errors.consent ? (
          <p id={errorId('consent')} className="text-xs text-zx-danger">
            {errors.consent}
          </p>
        ) : null}

        {hasValidated && liveErrors.startedAt ? (
          <p role="alert" className="text-xs text-zx-danger">
            {liveErrors.startedAt}
          </p>
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
