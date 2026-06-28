import { usePreviewCopy } from '../../content/previewCopy';

const expenses = [
  { category: 'Logistics', amount: '$18,220', tax: '$2,369' },
  { category: 'Facility', amount: '$12,440', tax: '$1,617' },
  { category: 'Software', amount: '$8,910', tax: '$1,158' },
  { category: 'Travel', amount: '$6,370', tax: '$828' },
];

export default function ExpensesPreview() {
  const t = usePreviewCopy();
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-[#081021] via-[#0d1d38] to-[#091428] p-3 sm:p-4">
      <div className="grid h-full gap-3 md:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">
            {t('Expenses tracking')}
          </p>
          <div className="mt-3 space-y-2">
            {expenses.map((entry) => (
              <div
                key={entry.category}
                className="rounded-md border border-zx-border bg-zx-bg/60 px-3 py-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <p className="font-medium text-zx-text">{entry.category}</p>
                  <p className="text-zx-text">{entry.amount}</p>
                </div>
                <p className="mt-1 text-[11px] text-zx-text-muted">
                  {t('Tax associated:')} {entry.tax}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-2">
          <div className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">
              {t('Month to date')}
            </p>
            <p className="mt-1 text-lg font-semibold text-zx-text">$45,940</p>
            <p className="mt-1 text-xs text-zx-text-muted">{t('Expenses posted')}</p>
          </div>
          <div className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">
              {t('Recoverable tax')}
            </p>
            <p className="mt-1 text-lg font-semibold text-zx-success">$5,972</p>
            <p className="mt-1 text-xs text-zx-text-muted">{t('GST/HST/PST/QST credits')}</p>
          </div>
          <div className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">
              {t('Policy variance')}
            </p>
            <p className="mt-1 text-lg font-semibold text-zx-warning">{t('3 flagged')}</p>
            <p className="mt-1 text-xs text-zx-text-muted">{t('Pending review')}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
