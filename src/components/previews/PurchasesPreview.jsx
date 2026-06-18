import { usePreviewCopy } from '../../content/previewCopy'

const orders = [
  { po: 'PO-7821', vendor: 'Northern Packs', amount: '$12,400', state: 'Approved' },
  { po: 'PO-7822', vendor: 'Westline Metals', amount: '$38,970', state: 'Received' },
  { po: 'PO-7823', vendor: 'Maple Ingredients', amount: '$9,860', state: 'Pending' },
]

export default function PurchasesPreview() {
  const t = usePreviewCopy()
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-[#091124] via-[#0e203d] to-[#091226] p-3 sm:p-4">
      <div className="h-full rounded-lg border border-zx-border bg-zx-surface/70 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">{t('Purchases module')}</p>
          <span className="rounded-full border border-zx-border px-2 py-0.5 text-[10px] text-zx-text-muted">{t('6 vendors active')}</span>
        </div>

        <div className="mt-3 grid gap-2 md:grid-cols-3">
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Open POs')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-text">14</p>
          </div>
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Approved value')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-text">$186K</p>
          </div>
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Lead-time risk')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-warning">{t('Low')}</p>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {orders.map((item) => (
            <div key={item.po} className="rounded-md border border-zx-border bg-zx-bg/60 px-3 py-2">
              <div className="flex items-center justify-between text-xs">
                <p className="font-medium text-zx-text">{item.po}</p>
                <p className="text-zx-accent">{item.amount}</p>
              </div>
              <p className="mt-1 text-[11px] text-zx-text-muted">{item.vendor}</p>
              <p className="mt-1 text-[11px] text-zx-text-muted">{t('Status:')} {t(item.state)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
