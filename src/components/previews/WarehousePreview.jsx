import { usePreviewCopy } from '../../content/previewCopy';

const locations = [
  { code: 'A-01-04', fill: '92%', state: 'Ready' },
  { code: 'B-09-02', fill: '67%', state: 'Picking' },
  { code: 'C-11-01', fill: '41%', state: 'Inbound' },
];

const movements = [
  { item: 'SKU-441', from: 'Dock 2', to: 'A-01-04', qty: 220 },
  { item: 'SKU-882', from: 'B-09-02', to: 'Packing', qty: 60 },
  { item: 'SKU-903', from: 'Reserve', to: 'B-09-02', qty: 90 },
];

export default function WarehousePreview() {
  const t = usePreviewCopy();
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-[#0a1120] via-[#0d1f3a] to-[#0a1324] p-3 sm:p-4">
      <div className="grid h-full gap-3 md:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">
            {t('Warehouse map')}
          </p>
          <div className="mt-3 space-y-2">
            {locations.map((slot) => (
              <div key={slot.code} className="rounded-md border border-zx-border bg-zx-bg/60 p-2">
                <div className="flex items-center justify-between text-xs">
                  <p className="font-medium text-zx-text">{slot.code}</p>
                  <p className="text-zx-text-muted">{t(slot.state)}</p>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zx-surface-strong">
                  <div className="h-full rounded-full bg-zx-accent" style={{ width: slot.fill }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">
              {t('Picking queue')}
            </p>
            <p className="mt-1 text-sm font-semibold text-zx-text">{t('24 tasks in progress')}</p>
          </div>
        </section>

        <section className="rounded-lg border border-zx-border bg-zx-surface/70 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">
            {t('Stock movement flow')}
          </p>
          <div className="mt-3 space-y-2">
            {movements.map((move) => (
              <div
                key={`${move.item}-${move.from}`}
                className="rounded-md border border-zx-border bg-zx-bg/60 px-3 py-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <p className="font-medium text-zx-text">{move.item}</p>
                  <p className="text-zx-accent">
                    {move.qty} {t('units')}
                  </p>
                </div>
                <p className="mt-1 text-[11px] text-zx-text-muted">
                  {move.from} <span className="mx-1 text-zx-accent">-&gt;</span> {move.to}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
