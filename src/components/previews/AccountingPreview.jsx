import { usePreviewCopy } from '../../content/previewCopy'

const revenueSeries = [62, 74, 58, 81, 77, 90, 84, 95]

export default function AccountingPreview() {
  const t = usePreviewCopy()
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-[#0a1428] via-[#0b1a33] to-[#091326] p-3 sm:p-4">
      <div className="grid h-full gap-3 md:grid-cols-[1.35fr_0.65fr]">
        <section className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">{t('Accounting dashboard')}</p>
            <span className="rounded-full border border-zx-border px-2 py-0.5 text-[10px] text-zx-text-muted">Q2</span>
          </div>

          <div className="mt-3 h-28 rounded-md border border-zx-border bg-zx-bg/60 p-2">
            <div className="flex h-full items-end gap-1.5">
              {revenueSeries.map((value, idx) => (
                <div key={`${idx}-${value}`} className="flex-1 rounded-sm bg-gradient-to-t from-zx-accent/35 to-zx-accent" style={{ height: `${value}%` }} />
              ))}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
              <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Revenue')}</p>
              <p className="mt-1 text-sm font-semibold text-zx-text">$482K</p>
            </div>
            <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
              <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Expenses')}</p>
              <p className="mt-1 text-sm font-semibold text-zx-text">$319K</p>
            </div>
            <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
              <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Net profit')}</p>
              <p className="mt-1 text-sm font-semibold text-zx-success">$163K</p>
            </div>
          </div>
        </section>

        <section className="grid gap-2">
          <div className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Cash balance')}</p>
            <p className="mt-1 text-lg font-semibold text-zx-text">$1.24M</p>
            <p className="mt-1 text-xs text-zx-success">{t('+4.8% vs previous month')}</p>
          </div>
          <div className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Tax position')}</p>
            <p className="mt-1 text-lg font-semibold text-zx-text">$27,560</p>
            <p className="mt-1 text-xs text-zx-text-muted">{t('GST/HST payable snapshot')}</p>
          </div>
          <div className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Financial status')}</p>
            <div className="mt-2 space-y-1 text-xs text-zx-text-muted">
              <p>{t('Current ratio: 1.9')}</p>
              <p>{t('AR days: 31')}</p>
              <p>{t('AP days: 26')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
