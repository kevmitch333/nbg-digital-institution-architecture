import type { Metadata } from 'next';
import Link from '@/components/durable-link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/content/site';
import { ventureImagery } from '@/content/imagery';
import { SourcePageNav } from '@/components/source-page-nav';

export function generateStaticParams() {
  return portfolio.map((v) => ({ slug: v.slug }));
}

export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = portfolio.find((x) => x.slug === slug);
  return v
    ? {
        title: `${v.name} | NBG Portfolio`,
        description: v.description,
        openGraph: {
          title: `${v.name} | NBG Portfolio`,
          description: v.description,
          images: [],
        },
        twitter: {
          card: 'summary',
          title: `${v.name} | NBG Portfolio`,
          description: v.description,
          images: [],
        },
      }
    : { title: 'Portfolio | NBG' };
}
export default async function VenturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = portfolio.find((x) => x.slug === slug);
  if (!v) notFound();
  const image = ventureImagery[v.slug];
  return (
    <main
      id="main-content"
      className={`detail-page venture-detail venture-${v.slug}`}
    >
      <SourcePageNav backLabel="Portfolio" backHref="/ventures" />
      <section className="detail-hero">
        <div>
          <span className="status">{v.stage}</span>
          <p className="maturity">
            {v.maturity} / {v.category}
          </p>
          <h1>{v.name}</h1>
        </div>
        <blockquote>{v.statement}</blockquote>
      </section>
      {image && (
        <figure className="venture-hero-image">
          <img
            src={image.src}
            alt={image.alt}
            width="1672"
            height="941"
            style={{ objectPosition: image.position }}
          />
          <figcaption>
            <span>{v.name}</span>
            {v.category}
          </figcaption>
        </figure>
      )}
      <section className="detail-body">
        <div className="detail-main">
          <div className="section-index">Institutional thesis</div>
          <p className="detail-lede">{v.description}</p>
          <div className="venture-narrative">
            <h2>{v.narrativeTitle}</h2>
            {v.narrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h2>What is being developed</h2>
          <div className="system-list">
            {v.systems.map((x, i) => (
              <div key={x}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {x}
              </div>
            ))}
          </div>
          {v.relatedConcepts && (
            <div className="related-concepts">
              <h2>Concepts within the AGONiQ architecture</h2>
              {v.relatedConcepts.map((concept) => (
                <p key={concept}>{concept}</p>
              ))}
            </div>
          )}
          {v.note && <p className="detail-note">{v.note}</p>}
        </div>
        <aside>
          <div>
            <span>Architecture components</span>
            {v.components.map((x) => (
              <p key={x}>{x}</p>
            ))}
          </div>
          <div>
            <span>Current focus</span>
            <p>{v.focus}</p>
          </div>
          <div>
            <span>Partnership needs</span>
            {v.needs.map((x) => (
              <p key={x}>{x}</p>
            ))}
          </div>
        </aside>
      </section>
      <section className="detail-cta">
        <div>
          <span className="section-index">Build with NBG</span>
          <h2>Bring the right capability to the next stage.</h2>
        </div>
        <Link className="button primary" href="/partnerships">
          Start a conversation <ArrowUpRight size={15} />
        </Link>
      </section>
    </main>
  );
}
