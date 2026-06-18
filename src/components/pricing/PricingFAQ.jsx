import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

export default function PricingFAQ({ pricing }) {
  return (
    <section className="section-shell">
      <SectionHeading title={pricing?.faq?.title} subtitle={pricing?.faq?.subtitle} />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {(pricing?.faq?.items || []).map((item) => (
          <Card key={item.question}>
            <h3 className="font-heading text-lg font-semibold text-zx-text">{item.question}</h3>
            <p className="mt-2 text-sm text-zx-text-muted">{item.answer}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
