const statusStyles = {
  ready: {
    icon: '🟢',
    className: 'border-emerald-600/30 bg-emerald-50 text-emerald-800',
  },
  warning: {
    icon: '🟡',
    className: 'border-amber-600/30 bg-amber-50 text-amber-800',
  },
  locked: {
    icon: '🔒',
    className: 'border-violet-600/30 bg-violet-50 text-violet-800',
  },
  filed: {
    icon: '🧾',
    className: 'border-sky-600/30 bg-sky-50 text-sky-800',
  },
  info: {
    icon: 'ℹ️',
    className: 'border-zx-border bg-zx-surface-strong text-zx-text-muted',
  },
};

export default function StatusBadge({ status = 'info', text }) {
  const meta = statusStyles[status] || statusStyles.info;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${meta.className}`}
    >
      <span aria-hidden>{meta.icon}</span>
      <span>{text}</span>
    </span>
  );
}
