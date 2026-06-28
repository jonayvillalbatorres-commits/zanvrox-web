import { usePreviewCopy } from '../../content/previewCopy';

const insights = [
  { title: 'Revenue momentum', detail: '+12.4% projected for next 30 days', tone: 'success' },
  { title: 'Margin pressure', detail: 'Raw material cost up 3.1% this week', tone: 'warning' },
  { title: 'Receivables risk', detail: '4 accounts likely to miss due date', tone: 'danger' },
];

const toneClass = {
  success: 'text-zx-success border-zx-success/35 bg-zx-success/10',
  warning: 'text-zx-warning border-zx-warning/35 bg-zx-warning/10',
  danger: 'text-zx-danger border-zx-danger/35 bg-zx-danger/10',
};

export default function AIPreview() {
  const t = usePreviewCopy();
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-[#091126] via-[#0e1f3a] to-[#081022] p-3 sm:p-4">
      <div className="h-full rounded-lg border border-zx-border bg-zx-surface/70 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">
            {t('AI business insights')}
          </p>
          <span className="rounded-full border border-zx-accent/40 bg-zx-accent/10 px-2 py-0.5 text-[10px] text-zx-accent">
            {t('Assistant active')}
          </span>
        </div>

        <div className="mt-3 grid gap-2 md:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-md border border-zx-border bg-zx-bg/60 p-2.5">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">
              {t('Sales prediction model')}
            </p>
            <div className="mt-2 h-20 rounded-md border border-zx-border bg-gradient-to-tr from-zx-accent/20 to-zx-accent-alt/25 p-2">
              <div className="flex h-full items-end gap-1.5">
                {[34, 42, 51, 48, 59, 66, 72, 78].map((value, idx) => (
                  <div
                    key={`${idx}-${value}`}
                    className="flex-1 rounded-sm bg-zx-accent/80"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="rounded-md border border-zx-border bg-zx-bg/60 p-2.5">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">
              {t('Confidence')}
            </p>
            <p className="mt-1 text-lg font-semibold text-zx-text">87.3%</p>
            <p className="mt-1 text-xs text-zx-text-muted">
              {t('Model based on current ERP transactions')}
            </p>
          </section>
        </div>

        <div className="mt-3 space-y-2">
          {insights.map((item) => (
            <div
              key={item.title}
              className="rounded-md border border-zx-border bg-zx-bg/60 px-3 py-2"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-medium text-zx-text">{t(item.title)}</p>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] ${toneClass[item.tone]}`}
                >
                  {t(item.tone)}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-zx-text-muted">{t(item.detail)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
