import { Link } from 'react-router';
import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import {
  organizationSchema,
  softwareSchema,
  websiteSchema,
  workforceSoftwareSchema,
} from '../content/schema';
import { useLanguage } from '../contexts/LanguageContext';

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Card className="flex h-full flex-col">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zx-accent">
        {product.eyebrow}
      </p>
      <h3 className="mt-3 font-heading text-2xl font-semibold text-zx-text">{product.title}</h3>
      <p className="mt-2 text-sm text-zx-text-muted">{product.body}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {(product.bullets || []).map((bullet) => (
          <span key={bullet} className="zx-badge">
            {bullet}
          </span>
        ))}
      </div>
      {product.cta ? (
        <div className="mt-6 pt-2">
          <Link to={product.cta.path} className="zx-button zx-button-primary w-full justify-center">
            {product.cta.label}
          </Link>
        </div>
      ) : null}
    </Card>
  );
}

export default function PricingPage() {
  const { content } = useLanguage();
  const hub = content?.pages?.pricingHub || {};
  const upgradePath = content?.pages?.pricing?.upgradePath;

  return (
    <>
      <SeoManager
        meta={content?.seo?.pricing}
        schema={[organizationSchema, websiteSchema, softwareSchema, workforceSoftwareSchema]}
      />
      <PageHero title={hub.heroTitle} subtitle={hub.heroSubtitle} preview={{ type: 'invoices' }} />

      <section className="section-shell pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <ProductCard product={hub.erpCard} />
          <ProductCard product={hub.workforceCard} />
        </div>
        {hub.differenceNote ? (
          <p className="mt-6 text-sm text-zx-text-muted">{hub.differenceNote}</p>
        ) : null}
      </section>

      {upgradePath ? (
        <section className="section-shell pb-16">
          <div className="zx-card">
            <SectionHeading
              eyebrow={upgradePath.eyebrow}
              title={upgradePath.title}
              subtitle={upgradePath.subtitle}
            />
            <div className="mt-6 grid gap-3 md:grid-cols-5">
              {(upgradePath.steps || []).map((step) => (
                <div
                  key={step.name}
                  className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3"
                >
                  <p className="text-sm font-semibold text-zx-text">{step.name}</p>
                  <p className="mt-1 text-xs text-zx-text-muted">{step.body}</p>
                </div>
              ))}
            </div>
            {upgradePath.note ? (
              <p className="mt-5 text-sm text-zx-text-muted">{upgradePath.note}</p>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
}
