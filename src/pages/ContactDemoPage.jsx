import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import BriefRequestForm from '../components/forms/BriefRequestForm'
import DemoForm from '../components/forms/DemoForm'
import SeoManager from '../components/seo/SeoManager'
import PageHero from '../components/sections/PageHero'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import { normalizeLanguageCode } from '../content'
import { organizationSchema, softwareSchema, websiteSchema } from '../content/schema'
import { useLanguage } from '../contexts/LanguageContext'
import { BILLING_PERIODS, CONTACT_PROMOS, getContactDemoContext } from '../utils/contactDemo'

export default function ContactDemoPage() {
  const location = useLocation()
  const { content, language, setLanguage } = useLanguage()
  const page = content?.pages?.contact || {}
  const pricingPage = useMemo(() => content?.pages?.pricing || {}, [content])
  const pricingContext = useMemo(() => page.pricingContext || {}, [page.pricingContext])
  const contextLabels = useMemo(
    () => ({
      plan: pricingContext?.labels?.plan || 'Plan',
      billing: pricingContext?.labels?.billing || 'Billing',
      payroll: pricingContext?.labels?.payroll || 'Payroll',
      offer: pricingContext?.labels?.offer || 'Offer',
      notSelected: pricingContext?.labels?.notSelected || 'Not selected',
      payrollInterested: pricingContext?.labels?.payrollInterested || 'Payroll Canada add-on',
      payrollNotSelected: pricingContext?.labels?.payrollNotSelected || 'No payroll add-on selected',
    }),
    [pricingContext],
  )

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const nextLanguage = normalizeLanguageCode(params.get('lang'))

    if (params.get('lang') && nextLanguage !== language) {
      setLanguage(nextLanguage)
    }
  }, [language, location.search, setLanguage])

  const leadContext = useMemo(() => {
    const context = getContactDemoContext(location.search)
    const selectedPlan = (pricingPage.tiers || []).find((tier) => tier.slug === context.plan)

    return {
      ...context,
      planLabel: selectedPlan?.name || '',
      billingLabel:
        context.billing === BILLING_PERIODS.annual ? pricingPage.billingToggle?.annual : pricingPage.billingToggle?.monthly,
      payrollLabel: context.payrollInterest ? pricingPage.payrollAddon?.title : '',
      promoLabel: context.promo === CONTACT_PROMOS.annualLaunch ? pricingPage.launchOfferLabel : '',
      language,
    }
  }, [language, location.search, pricingPage])

  const contextItems = useMemo(
    () => [
      { label: contextLabels.plan, value: leadContext.planLabel || contextLabels.notSelected },
      { label: contextLabels.billing, value: leadContext.billingLabel || contextLabels.notSelected },
      {
        label: contextLabels.payroll,
        value: leadContext.payrollInterest ? contextLabels.payrollInterested : contextLabels.payrollNotSelected,
      },
      { label: contextLabels.offer, value: leadContext.promoLabel || contextLabels.notSelected },
    ],
    [contextLabels, leadContext],
  )

  return (
    <>
      <SeoManager meta={content?.seo?.contact} schema={[organizationSchema, websiteSchema, softwareSchema]} />
      <PageHero title={page.heroTitle} subtitle={page.heroSubtitle} preview={{ type: 'warehouse' }} />

      <section className="section-shell">
        <SectionHeading title={page.conversion?.title} subtitle={page.conversion?.subtitle} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {(page.conversion?.cards || []).map((card) => (
            <Card key={card.title}>
              <h3 className="font-heading text-lg font-semibold text-zx-text">{card.title}</h3>
              <p className="mt-2 text-sm text-zx-text-muted">{card.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="zx-card">
          <SectionHeading title={page.supportBlock?.title} subtitle={page.supportBlock?.subtitle} />
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {(page.supportBlock?.items || []).map((item) => (
              <div key={item} className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3 text-sm text-zx-text-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {leadContext.hasSelection ? (
        <section className="section-shell">
          <Card>
            <SectionHeading
              title={pricingContext?.title || 'Selected pricing context'}
              subtitle={pricingContext?.subtitle || 'We keep this commercial context attached to your request.'}
            />
            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {contextItems.map((item) => (
                <div key={item.label} className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-zx-text-muted">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-zx-text">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      ) : null}

      <section className="section-shell pb-16">
        <div className="grid gap-8 xl:grid-cols-2">
          <DemoForm formContent={page.demoForm} leadContext={leadContext} />
          <BriefRequestForm formContent={page.briefForm} leadContext={leadContext} />
        </div>
      </section>
    </>
  )
}
