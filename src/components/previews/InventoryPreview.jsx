import { usePreviewCopy } from '../../content/previewCopy'

const items = [
  { name: 'Cacao 70%', sku: 'RM-441', stock: 640, min: 280, tone: 'ok' },
  { name: 'Bottles 500ml', sku: 'PK-882', stock: 180, min: 220, tone: 'low' },
  { name: 'Label Roll A2', sku: 'PK-240', stock: 920, min: 300, tone: 'ok' },
  { name: 'Caps Black', sku: 'PK-903', stock: 95, min: 160, tone: 'low' },
]

export default function InventoryPreview() {
  const t = usePreviewCopy()
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-[#091426] via-[#0c1d37] to-[#0b1323] p-3 sm:p-4">
      <div className="h-full rounded-lg border border-zx-border bg-zx-surface/70 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">{t('Inventory management')}</p>
          <span className="rounded-full border border-zx-warning/40 bg-zx-warning/10 px-2 py-0.5 text-[10px] text-zx-warning">{t('2 low-stock alerts')}</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('SKUs')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-text">1,248</p>
          </div>
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('On hand')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-text">48,320</p>
          </div>
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Inventory value')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-text">$2.4M</p>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {items.map((item) => {
            const ratio = Math.max(6, Math.min(100, Math.round((item.stock / (item.min * 2)) * 100)))
            return (
              <div key={item.sku} className="rounded-md border border-zx-border bg-zx-bg/60 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <p className="font-medium text-zx-text">{item.name}</p>
                  <p className="text-zx-text-muted">{item.sku}</p>
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-zx-text-muted">
                  <p>
                    {t('Stock:')} <span className="text-zx-text">{item.stock}</span>
                  </p>
                  <p>
                    {t('Min:')} <span className="text-zx-text">{item.min}</span>
                  </p>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zx-surface-strong">
                  <div className={`h-full rounded-full ${item.tone === 'low' ? 'bg-zx-warning' : 'bg-zx-success'}`} style={{ width: `${ratio}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
