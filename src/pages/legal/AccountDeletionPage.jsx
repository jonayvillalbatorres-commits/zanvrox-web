import SeoManager from '../../components/seo/SeoManager';
import PageHero from '../../components/sections/PageHero';
import Card from '../../components/ui/Card';
import { organizationSchema } from '../../content/schema';

export default function AccountDeletionPage() {
  return (
    <>
      <SeoManager
        meta={{
          title: 'Account deletion | ZANVROX',
          description: 'How to request deletion of a ZANVROX account and associated data.',
          path: '/account-deletion',
        }}
        schema={organizationSchema}
      />
      <PageHero
        title="Request account deletion"
        subtitle="Delete your ZANVROX Employee, Manager, or ERP sign-in account."
      />
      <section className="section-shell pb-16">
        <Card className="space-y-5 text-sm leading-7 text-zx-text-muted">
          <p>
            The fastest and most secure method is to sign in, open Settings, and select Account
            deletion. The application will verify your identity and let you track or cancel a
            pending request.
          </p>
          <p>
            If you cannot sign in, email{' '}
            <a className="font-semibold text-zx-accent" href="mailto:privacy@zanvrox.com">
              privacy@zanvrox.com
            </a>{' '}
            from the address registered to your account and use “Account deletion request” as the
            subject. We may request additional identity verification.
          </p>
          <p>
            We delete or anonymize the sign-in identity, personal profile, device subscriptions, and
            information that is not required to be retained. Payroll, tax, employment, financial,
            inventory traceability, security, and audit records may be retained for legally required
            periods with restricted access.
          </p>
          <a
            className="inline-flex rounded-lg bg-zx-accent px-4 py-2 font-semibold text-white"
            href="https://app.zanvrox.com/account-deletion"
          >
            Open the account deletion page
          </a>
        </Card>
      </section>
    </>
  );
}
