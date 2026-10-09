import { pageMetadata } from '@/lib/seo';
import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { SourcePageNav } from '@/components/source-page-nav';

export const metadata = pageMetadata(
  '/ventures/',
  'Venture Portfolio | National Brand Group',
  'Explore four focused NBG initiatives across human–AI performance, patient-centered intelligence, Cabo Verde development and esports.',
);

export default function VenturesPage() {
  return (
    <main id="main-content" className="detail-page source-page">
      <SourcePageNav />
      <section className="source-hero">
        <span className="status">Current initiatives</span>
        <h1>Four initiatives. Four paths to institutional value.</h1>
        <p>
          Each initiative is in active development, with its own field, voice
          and path—united by disciplined validation, responsible partnership
          and infrastructure built to last.
        </p>
      </section>
      <section className="source-section portfolio-source">
        <PortfolioGrid />
      </section>
      <section className="source-next">
        <div>
          <span className="section-index">Partner with NBG</span>
          <h2>Bring evidence, capability or operating reach.</h2>
        </div>
        <Link className="button primary" href="/partnerships">
          Explore partnership paths <ArrowUpRight size={15} />
        </Link>
      </section>
    </main>
  );
}
