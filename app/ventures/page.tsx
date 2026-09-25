import type { Metadata } from 'next';
import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { SourcePageNav } from '@/components/source-page-nav';

export const metadata: Metadata = {
  title: 'Venture Portfolio | National Brand Group',
  description: 'Explore NBG ventures, architecture extensions and developing concepts by maturity and current focus.',
};

export default function VenturesPage() {
  return (
    <main id="main-content" className="detail-page source-page">
      <SourcePageNav />
      <section className="source-hero">
        <span className="status">Portfolio as proof</span>
        <h1>Different stages. Shared architecture.</h1>
        <p>Each initiative is presented at its current stage, with the problem it addresses, its present development focus and the partners needed to validate the next step.</p>
      </section>
      <section className="source-section portfolio-source"><PortfolioGrid /></section>
      <section className="source-next">
        <div><span className="section-index">Partner with NBG</span><h2>Bring evidence, capability or operating reach.</h2></div>
        <Link className="button primary" href="/partnerships">Explore partnership paths <ArrowUpRight size={15} /></Link>
      </section>
    </main>
  );
}
