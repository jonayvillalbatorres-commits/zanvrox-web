import { usePreviewCopy } from '../../content/previewCopy'

const reports = [
  { label: 'Revenue', value: '$1.84M', tone: 'text-zx-text' },
  { label: 'COGS', value: '$1.09M', tone: 'text-zx-text' },
  { label: 'Gross profit', value: '$750K', tone: 'text-zx-success' },
]

export default function ReportsPreview() {
  const t = usePreviewCopy()
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-[#091225] via-[#0d1e39] to-[#091226] p-3 sm:p-4">
      <div className="h-full rounded-lg border border-zx-border bg-zx-surface/70 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">{t('Reports and analytics')}</p>
          <span className="rounded-full border border-zx-border px-2 py-0.5 text-[10px] text-zx-text-muted">P&amp;L / KPI</span>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-md border border-zx-border bg-zx-bg/60 p-2.5">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Profit and loss trend')}</p>
            <div className="mt-2 h-24 rounded-md border border-zx-border bg-zx-surface-strong/50 p-2">
              <div className="flex h-full items-end gap-1.5">
                {[44, 36, 55, 49, 61, 67, 74, 70].map((value, idx) => (
                  <div key={`${idx}-${value}`} className="flex-1 rounded-sm bg-gradient-to-t from-zx-accent-alt/45 to-zx-accent-alt" style={{ height: `${value}%` }} />
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-2">
            {reports.map((item) => (
              <div key={item.label} className="rounded-md border border-zx-border bg-zx-bg/60 p-2">
                <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t(item.label)}</p>
                <p className={`mt-1 text-sm font-semibold ${item.tone}`}>{item.value}</p>
              </div>
            ))}
          </section>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">EBITDA</p>
            <p className="mt-1 text-sm font-semibold text-zx-text">$412K</p>
          </div>
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Runway')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-text">18 mo</p>
          </div>
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Forecast')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-success">{t('On track')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
