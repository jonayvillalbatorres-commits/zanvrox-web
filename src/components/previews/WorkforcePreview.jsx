import { usePreviewCopy } from '../../content/previewCopy';

const shifts = [
  { role: 'Front counter', status: 'in', time: '9:02 AM' },
  { role: 'Kitchen line', status: 'in', time: '9:00 AM' },
  { role: 'Shift lead', status: 'break', time: '11:15 AM' },
  { role: 'Delivery', status: 'scheduled', time: '2:00 PM' },
];

const statusTone = {
  in: 'text-zx-success',
  break: 'text-zx-warning',
  scheduled: 'text-zx-text-muted',
};

export default function WorkforcePreview() {
  const t = usePreviewCopy();
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-[#091426] via-[#0c1d37] to-[#0b1323] p-3 sm:p-4">
      <div className="h-full rounded-lg border border-zx-border bg-zx-surface/70 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zx-accent">
            {t('Today’s shift')}
          </p>
          <span className="rounded-full border border-zx-success/40 bg-zx-success/10 px-2 py-0.5 text-[10px] text-zx-success">
            {t('3 clocked in')}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">
              {t('On shift')}
            </p>
            <p className="mt-1 text-sm font-semibold text-zx-text">3</p>
          </div>
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">
              {t('Open tasks')}
            </p>
            <p className="mt-1 text-sm font-semibold text-zx-text">4</p>
          </div>
          <div className="rounded-md border border-zx-border bg-zx-surface-strong/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.12em] text-zx-text-muted">
              {t('Hours today')}
            </p>
            <p className="mt-1 text-sm font-semibold text-zx-text">18.5</p>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {shifts.map((shift) => (
            <div
              key={shift.role}
              className="flex items-center justify-between rounded-md border border-zx-border bg-zx-bg/60 px-3 py-2"
            >
              <p className="text-xs font-medium text-zx-text">{t(shift.role)}</p>
              <div className="flex items-center gap-2 text-[11px]">
                <span className={statusTone[shift.status] || 'text-zx-text-muted'}>
                  {t(
                    shift.status === 'in'
                      ? 'Clocked in'
                      : shift.status === 'break'
                        ? 'On break'
                        : 'Scheduled'
                  )}
                </span>
                <span className="text-zx-text-muted">{shift.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
