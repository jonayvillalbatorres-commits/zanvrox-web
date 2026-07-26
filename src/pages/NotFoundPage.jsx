import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFoundPage() {
  const { content } = useLanguage();
  const page = content?.pages?.notFound || {};

  return (
    <section className="section-shell py-20">
      <div className="zx-card max-w-xl">
        <h1 className="font-heading text-3xl font-semibold text-zx-text">{page.title}</h1>
        <p className="mt-3 text-sm text-zx-text-muted">{page.subtitle}</p>
        <Link to="/" className="zx-button zx-button-primary mt-6 inline-flex">
          {page.cta}
        </Link>
      </div>
    </section>
  );
}
