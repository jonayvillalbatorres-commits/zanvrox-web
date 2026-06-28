import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import defaultVideoUrl from '../../assets/videos/zanvrox-overview.mp4';
import previewImage from '../../assets/videos/zanvrox-overview-poster.jpg';
import SectionHeading from '../ui/SectionHeading';
import { resolvePublicAppLink } from '../../utils/publicApp';

const DEFAULT_CHAPTERS = [
  'Intro (0:00)',
  'Invoices (0:06)',
  'Purchases + Expenses (0:18)',
  'Inventory + Warehouse (0:30)',
  'Production (0:42)',
  'Taxes (0:55)',
  'Reports + CTA (1:22)',
];

export default function ProductVideo({ video }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const resolvedVideoUrl = useMemo(() => video?.videoUrl || defaultVideoUrl, [video?.videoUrl]);
  const canRenderVideo = Boolean(video?.hasRealVideo && resolvedVideoUrl && !videoFailed);
  const secondaryHref = resolvePublicAppLink(
    video?.secondaryCta?.path || '/resources#demo-environment'
  );
  const secondaryIsExternal = /^https?:\/\//i.test(secondaryHref);

  return (
    <section className="section-shell" id="product-overview">
      <div className="zx-card">
        <SectionHeading
          title={video?.title || 'See ZANVROX in action'}
          subtitle={
            video?.subtitle ||
            'A 90-second walkthrough of accounting, operations, and Canada tax filing.'
          }
        />

        <div className="mt-6 overflow-hidden rounded-2xl border border-zx-border bg-zx-bg/70 shadow-panel">
          <div className="flex items-center justify-between border-b border-zx-border bg-zx-surface px-4 py-2">
            <div className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-zx-danger/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-zx-warning/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-zx-success/80" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-zx-text-muted">
              {video?.windowLabel || 'Product overview'}
            </p>
            <span className="rounded-full border border-zx-border px-2 py-0.5 text-[10px] text-zx-text-muted">
              {video?.duration || '90 sec'}
            </span>
          </div>

          <div className="relative aspect-video w-full bg-zx-bg">
            {canRenderVideo ? (
              <video
                controls
                playsInline
                preload="metadata"
                poster={video?.posterImage || previewImage}
                className="h-full w-full object-cover"
                onError={() => setVideoFailed(true)}
              >
                <source src={resolvedVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <>
                <img
                  src={video?.posterImage || previewImage}
                  alt={video?.posterAlt || 'ZANVROX ERP walkthrough poster'}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-zx-bg/20">
                  <span className="rounded-full border border-zx-border bg-zx-surface/85 px-6 py-3 text-sm font-semibold text-zx-text backdrop-blur-sm">
                    {video?.fallbackLabel || video?.overlayLabel || 'Product walkthrough preview'}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {(video?.chapters || DEFAULT_CHAPTERS).map((chapter) => (
            <span
              key={chapter}
              className="rounded-full border border-zx-border bg-zx-surface-strong px-3 py-1 text-xs text-zx-text-muted"
            >
              {chapter}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={video?.primaryCta?.path || '/product'} className="zx-button zx-button-primary">
            {video?.primaryCta?.label || 'Explore product'}
          </Link>
          {secondaryIsExternal ? (
            <a href={secondaryHref} className="zx-button zx-button-secondary">
              {video?.secondaryCta?.label || 'Try demo environment'}
            </a>
          ) : (
            <Link to={secondaryHref} className="zx-button zx-button-secondary">
              {video?.secondaryCta?.label || 'Try demo environment'}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
