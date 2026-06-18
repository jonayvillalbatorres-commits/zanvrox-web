import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'
import { BILLING_PERIODS } from '../../utils/contactDemo'

function CheckIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MinusIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const renderCellValue = (value) => {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="inline-flex items-center justify-center text-zx-success">
        <CheckIcon className="h-4 w-4" />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center text-zx-text-muted">
        <MinusIcon className="h-4 w-4" />
      </span>
    )
  }

  return <span className="text-zx-text">{value}</span>
}

export default function PricingComparison({ pricing, billingPeriod = BILLING_PERIODS.monthly }) {
  const comparison = pricing?.comparison || {}
  const tiers = pricing?.tiers || []
  const isAnnual = billingPeriod === BILLING_PERIODS.annual

  return (
    <section className="section-shell">
      <div className="zx-card">
        <SectionHeading title={comparison?.title} subtitle={comparison?.subtitle} />
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="overflow-hidden rounded-2xl border border-zx-border bg-zx-surface-strong/70">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zx-border text-left">
                    <th className="px-4 py-4 font-medium text-zx-text-muted">{comparison?.featureLabel}</th>
                    {tiers.map((tier) => (
                      <th key={tier.slug} className="px-4 py-4 font-semibold text-zx-text">
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(comparison?.rows || []).map((row) => (
                    <tr key={row.label} className="border-b border-zx-border/70 last:border-b-0">
                      <th className="px-4 py-4 text-left font-medium text-zx-text">{row.label}</th>
                      {(row.values || []).map((value, index) => (
                        <td key={`${row.label}-${tiers[index]?.slug || index}`} className="px-4 py-4 text-zx-text-muted">
                          {renderCellValue(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Card className="h-full">
            <p className="text-xs uppercase tracking-[0.14em] text-zx-accent">{comparison?.notesTitle}</p>
            <div className="mt-4 space-y-3 text-sm text-zx-text-muted">
              {(comparison?.notes || []).map((item) => (
                <div key={item} className="rounded-xl border border-zx-border bg-zx-surface-strong px-4 py-3">
                  {item}
                </div>
              ))}
              {isAnnual && comparison?.annualNote ? (
                <div className="rounded-xl border border-zx-accent bg-zx-accent/10 px-4 py-3 text-zx-text">
                  {comparison.annualNote}
                </div>
              ) : null}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
