import { usePreviewCopy } from '../../content/previewCopy'

const orders = [
  { code: 'MO-23018', product: 'Chocolate Bar 80g', progress: 78, state: 'Running' },
  { code: 'MO-23019', product: 'Energy Mix 250g', progress: 46, state: 'Queued' },
  { code: 'MO-23020', product: 'Protein Blend 1kg', progress: 92, state: 'Final check' },
]

export default function ProductionPreview() {
  const t = usePreviewCopy()
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-[#091224] via-[#0e1e37] to-[#091021] p-3 sm:p-4">
      <div className="grid h-full gap-3 md:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">{t('BOM summary')}</p>
          <div className="mt-3 space-y-2 text-xs text-zx-text-muted">
            <div className="rounded-md border border-zx-border bg-zx-bg/60 p-2">
              <p className="font-medium text-zx-text">BOM-CHOC-08</p>
              <p className="mt-1">{t('12 components linked to cost rollup')}</p>
            </div>
            <div className="rounded-md border border-zx-border bg-zx-bg/60 p-2">
              <p className="font-medium text-zx-text">BOM-MIX-25</p>
              <p className="mt-1">{t('8 components linked to lot traceability')}</p>
            </div>
          </div>
          <div className="mt-3 rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Capacity usage')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-text">{t('84% this shift')}</p>
          </div>
        </section>

        <section className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">{t('Production orders')}</p>
          <div className="mt-3 space-y-2">
            {orders.map((order) => (
              <div key={order.code} className="rounded-md border border-zx-border bg-zx-bg/60 p-2">
                <div className="flex items-center justify-between text-xs">
                  <p className="font-medium text-zx-text">{order.code}</p>
                  <p className="text-zx-text-muted">{t(order.state)}</p>
                </div>
                <p className="mt-1 text-[11px] text-zx-text-muted">{order.product}</p>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zx-surface-strong">
                  <div className="h-full rounded-full bg-zx-accent-alt" style={{ width: `${order.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
