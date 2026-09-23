export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zx-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold tracking-[-0.025em] text-zx-text sm:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base leading-7 text-zx-text-muted sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
