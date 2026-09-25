import type { Metadata } from 'next';
import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { advisoryServices } from '@/content/site';
import { SourcePageNav } from '@/components/source-page-nav';
export const metadata: Metadata = {
  title: 'Strategic Advisory | National Brand Group',
  description:
    'Institutional strategy for organizations operating where technology is moving faster than the systems around it.',
};
export default function Advisory() {
  return (
    <main id="main-content" className="detail-page">
      <SourcePageNav />
      <section className="advisory-hero">
        <span className="status">Strategic Advisory</span>
        <h1>
          Work inside
          <br />
          the institutional gap.
        </h1>
        <p>
          NBG advises organizations operating where technology is advancing
          faster than the institutions around it. We identify what the market
          needs beyond a product and help assemble the architecture for credible
          adoption.
        </p>
      </section>
      <figure className="source-image-band">
        <img src="/images/ai-strategy-meeting-alt-02.webp" alt="White and Asian business leaders discussing artificial intelligence and data strategy." width="1672" height="941" loading="lazy" />
        <figcaption><span>Strategic advisory</span> Align the institutional problem, decision-makers and evidence before committing to technology.</figcaption>
      </figure>
      <section className="advisory-list">
        {advisoryServices.map(([n, title, desc]) => (
          <article key={n}>
            <span>{n}</span>
            <h2>{title}</h2>
            <p>{desc}</p>
          </article>
        ))}
      </section>
      <section className="advisory-rule">
        <div className="section-index">Our operating rule</div>
        <blockquote>
          Start with the institutional problem. Select the technology afterward.
        </blockquote>
        <p>
          Recommendations are designed around outcomes, evidence, risk and
          stakeholder responsibility—not a preferred vendor, platform or
          ideology.
        </p>
      </section>
      <section className="detail-cta">
        <div>
          <span className="section-index">Strategic conversation</span>
          <h2>What infrastructure is your market missing?</h2>
        </div>
        <Link className="button primary" href="/partnerships">
          Build with NBG <ArrowUpRight size={15} />
        </Link>
      </section>
    </main>
  );
}
