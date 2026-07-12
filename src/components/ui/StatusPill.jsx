const styles = {
  available: 'zx-success-soft text-zx-success',
  info: 'border-zx-border bg-zx-surface-strong text-zx-text-muted',
};

export default function StatusPill({ status = 'available', children }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
        styles[status] || styles.available
      }`}
    >
      {children || status}
    </span>
  );
}
