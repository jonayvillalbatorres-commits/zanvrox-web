import BetaForm from '../components/forms/BetaForm';
import SeoManager from '../components/seo/SeoManager';
import PageHero from '../components/sections/PageHero';
import Card from '../components/ui/Card';
import { organizationSchema } from '../content/schema';
import { useLanguage } from '../contexts/LanguageContext';

export default function WorkforceBetaPage() {
  const { content } = useLanguage();
  const page = content?.pages?.workforceBeta || {};

  return (
    <>
      <SeoManager meta={content?.seo?.workforceBeta} schema={organizationSchema} />
      <PageHero kicker={page.heroKicker} title={page.heroTitle} subtitle={page.heroSubtitle} />

      <section className="section-shell">
        <div className="flex flex-wrap gap-2">
          {(page.badges || []).map((badge) => (
            <span key={badge} className="zx-badge zx-success-soft text-zx-success">
              {badge}
            </span>
          ))}
        </div>
      </section>

      {page.intro ? (
        <section className="section-shell">
          <Card className="space-y-4 text-sm text-zx-text-muted">
            {(page.intro.paragraphs || []).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Card>
        </section>
      ) : null}

      {page.terms ? (
        <section className="section-shell">
          <div className="zx-card">
            <h2 className="font-heading text-xl font-semibold text-zx-text">{page.terms.title}</h2>
            {page.terms.subtitle ? (
              <p className="mt-2 text-sm text-zx-text-muted">{page.terms.subtitle}</p>
            ) : null}
            <ul className="mt-5 space-y-3 text-sm text-zx-text-muted">
              {(page.terms.items || []).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-zx-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section-shell pb-16">
        <BetaForm formContent={page.form} />
      </section>
    </>
  );
}
