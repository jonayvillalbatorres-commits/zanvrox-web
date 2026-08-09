import SeoManager from '../../components/seo/SeoManager';
import PageHero from '../../components/sections/PageHero';
import Card from '../../components/ui/Card';
import { organizationSchema } from '../../content/schema';
import { useLanguage } from '../../contexts/LanguageContext';

export default function AccountDeletionPage() {
  const { content } = useLanguage();
  const page = content?.pages?.legal?.accountDeletion || {};

  return (
    <>
      <SeoManager meta={content?.seo?.accountDeletion} schema={organizationSchema} />
      <PageHero title={page.title} subtitle={page.intro} />
      <section className="section-shell pb-16">
        <Card className="space-y-6 text-sm leading-7 text-zx-text-muted">
          <div>
            <h2 className="font-heading text-lg font-semibold text-zx-text">
              {page.selfServiceTitle}
            </h2>
            <p className="mt-2">{page.selfServiceBody}</p>
            {(page.steps || []).length ? (
              <ol className="mt-3 list-decimal space-y-1 pl-5">
                {(page.steps || []).map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            ) : null}
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-zx-text">
              {page.emailFallbackTitle}
            </h2>
            <p className="mt-2">{page.emailFallbackBody}</p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-zx-text">
              {page.retentionTitle}
            </h2>
            <p className="mt-2">{page.retentionBody}</p>
          </div>

          {page.appLinkPath ? (
            <a
              className="inline-flex rounded-lg bg-zx-accent px-4 py-2 font-semibold text-white"
              href={page.appLinkPath}
            >
              {page.appLinkLabel}
            </a>
          ) : null}
        </Card>
      </section>
    </>
  );
}
