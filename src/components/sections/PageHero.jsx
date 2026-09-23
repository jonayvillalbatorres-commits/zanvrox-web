import { Link } from 'react-router';
import StatusBadge from '../ui/StatusBadge';
import ProductPreview from '../ui/ProductPreview';
import { resolvePublicAppLink } from '../../utils/publicApp';

export default function PageHero({ title, subtitle, primaryCta, secondaryCta, kicker, preview }) {
  const renderCta = (cta, variantClass) => {
    if (!cta?.path) return null;

    const resolvedPath = resolvePublicAppLink(cta.path);
    const isExternal = /^https?:\/\//i.test(resolvedPath);

    if (isExternal) {
      return (
        <a href={resolvedPath} className={variantClass}>
          {cta.label}
        </a>
      );
    }

    return (
      <Link to={resolvedPath} className={variantClass}>
        {cta.label}
      </Link>
    );
  };

  return (
    <section className="section-shell pt-6 sm:pt-10 lg:pt-14">
      <div className="hero-grid">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
          <div className="space-y-7">
            {kicker ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zx-accent">
                {kicker}
              </p>
            ) : null}
            <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-zx-text sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zx-text-muted sm:text-xl">{subtitle}</p>
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-3 pt-1">
                {primaryCta ? renderCta(primaryCta, 'zx-button zx-button-primary') : null}
                {secondaryCta ? renderCta(secondaryCta, 'zx-button zx-button-secondary') : null}
              </div>
            )}
          </div>

          <aside className="reveal-up">
            <div className="zx-product-stage relative overflow-hidden rounded-[1.75rem] border border-zx-border bg-zx-surface-strong p-3 shadow-panel backdrop-blur-lg sm:p-5">
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-zx-accent/20 to-transparent" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zx-accent">
                  {preview?.title || 'Product Preview'}
                </p>
                <div className="mt-3">
                  <ProductPreview
                    type={preview?.type}
                    imageSrc={preview?.imageSrc}
                    imageAlt={preview?.imageAlt || 'Product preview'}
                  />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-zx-text-muted">
                  {preview?.caption || 'Live inside the ERP'}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(preview?.callouts || []).map((callout) => (
                    <StatusBadge key={callout.text} status={callout.status} text={callout.text} />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
