const statusStyles = {
  ready: {
    icon: '🟢',
    className: 'border-emerald-400/45 bg-emerald-500/10 text-emerald-300',
  },
  warning: {
    icon: '🟡',
    className: 'border-amber-400/45 bg-amber-500/10 text-amber-300',
  },
  locked: {
    icon: '🔒',
    className: 'border-violet-400/45 bg-violet-500/10 text-violet-300',
  },
  filed: {
    icon: '🧾',
    className: 'border-sky-400/45 bg-sky-500/10 text-sky-300',
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
