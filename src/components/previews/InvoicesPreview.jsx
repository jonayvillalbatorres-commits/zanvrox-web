import { usePreviewCopy } from '../../content/previewCopy'

const invoices = [
  { id: 'INV-1042', client: 'Northline Foods', total: '$14,220', status: 'Paid', tone: 'success' },
  { id: 'INV-1043', client: 'Canopy Retail', total: '$8,450', status: 'Draft', tone: 'muted' },
  { id: 'INV-1044', client: 'Atlas Supply', total: '$21,900', status: 'Overdue', tone: 'danger' },
  { id: 'INV-1045', client: 'Prairie Labs', total: '$6,180', status: 'Paid', tone: 'success' },
]

const statusClass = {
  success: 'border-zx-success/40 bg-zx-success/10 text-zx-success',
  danger: 'border-zx-danger/40 bg-zx-danger/10 text-zx-danger',
  muted: 'border-zx-border bg-zx-surface-strong text-zx-text-muted',
}

export default function InvoicesPreview() {
  const t = usePreviewCopy()
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-[#0a1326] via-[#101d38] to-[#0a1428] p-3 sm:p-4">
      <div className="h-full rounded-lg border border-zx-border bg-zx-surface/70 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">{t('Invoices module')}</p>
          <span className="rounded-full border border-zx-border px-2 py-0.5 text-[10px] text-zx-text-muted">{t('112 open')}</span>
        </div>

        <div className="mt-3 overflow-hidden rounded-md border border-zx-border bg-zx-bg/60">
          <div className="grid grid-cols-[1fr_1.4fr_0.8fr_0.7fr] border-b border-zx-border px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">
            <p>{t('Invoice')}</p>
            <p>{t('Client')}</p>
            <p>{t('Total')}</p>
            <p>{t('Status')}</p>
          </div>
          <div className="divide-y divide-zx-border/70">
            {invoices.map((item) => (
              <div key={item.id} className="grid grid-cols-[1fr_1.4fr_0.8fr_0.7fr] items-center px-3 py-2 text-xs">
                <p className="font-medium text-zx-text">{item.id}</p>
                <p className="text-zx-text-muted">{item.client}</p>
                <p className="font-medium text-zx-text">{item.total}</p>
                <span className={`inline-flex w-fit rounded-full border px-2 py-0.5 text-[10px] ${statusClass[item.tone]}`}>{t(item.status)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Draft')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-text">18</p>
          </div>
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Paid')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-success">76</p>
          </div>
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">{t('Overdue')}</p>
            <p className="mt-1 text-sm font-semibold text-zx-danger">7</p>
          </div>
        </div>
      </div>
    </div>
  )
}
