export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zx-accent">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-2xl font-semibold text-zx-text sm:text-3xl">{title}</h2>
      {subtitle ? <p className="text-base text-zx-text-muted">{subtitle}</p> : null}
    </div>
  )
}
