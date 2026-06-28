import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import StatusPill from '../components/ui/StatusPill';
import { useLanguage } from '../contexts/LanguageContext';
import { organizationSchema, softwareSchema } from '../content/schema';

function ModuleList({ title, items }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zx-accent">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-zx-text-muted">
        {(items || []).map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-zx-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ModulesPage() {
  const { content } = useLanguage();
  const page = content?.pages?.modules || {};

  return (
    <>
      <SeoManager meta={content?.seo?.modules} schema={[organizationSchema, softwareSchema]} />
      <PageHero
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        preview={{ type: 'inventory' }}
      />

      <section className="section-shell pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {(page.modules || []).map((module) => (
            <Card key={module.name}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="font-heading text-2xl font-semibold text-zx-text">{module.name}</h3>
                <StatusPill status="available">{page.activeLabel || 'Active'}</StatusPill>
              </div>
              <ModuleList
                title={page.includedTitle || 'Included'}
                items={module.included || module.available}
              />
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
