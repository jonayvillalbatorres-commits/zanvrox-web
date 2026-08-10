import { BILLING_PERIODS } from '../../utils/contactDemo';

export default function BillingToggle({ billingToggle, billingPeriod, onChange }) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-zx-border bg-zx-surface-strong/80 p-2">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onChange(BILLING_PERIODS.monthly)}
          className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
            billingPeriod === BILLING_PERIODS.monthly
              ? 'bg-zx-accent text-zx-bg shadow-[0_12px_24px_rgba(23,151,234,0.28)]'
              : 'bg-zx-surface text-zx-text-muted hover:text-zx-text'
          }`}
        >
          {billingToggle?.monthly}
        </button>
        <button
          type="button"
          onClick={() => onChange(BILLING_PERIODS.annual)}
          className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
            billingPeriod === BILLING_PERIODS.annual
              ? 'bg-zx-accent text-zx-bg shadow-[0_12px_24px_rgba(23,151,234,0.28)]'
              : 'bg-zx-surface text-zx-text-muted hover:text-zx-text'
          }`}
        >
          <span>{billingToggle?.annual}</span>
          {billingToggle?.annualBadge ? (
            <span
              className={`ml-2 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] ${
                billingPeriod === BILLING_PERIODS.annual
                  ? 'bg-zx-bg/15 text-zx-bg'
                  : 'bg-zx-accent/10 text-zx-accent'
              }`}
            >
              {billingToggle.annualBadge}
            </span>
          ) : null}
        </button>
      </div>
      {billingToggle?.helper ? (
        <p className="px-2 pt-3 text-xs text-zx-text-muted">{billingToggle.helper}</p>
      ) : null}
    </div>
  );
}
