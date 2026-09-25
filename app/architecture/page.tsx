import type { Metadata } from 'next';
import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { ArchitectureExplorer } from '@/components/architecture-explorer';
import { SourcePageNav } from '@/components/source-page-nav';
import { architectureLayers } from '@/content/site';

export const metadata: Metadata = {
  title: 'Digital Institution Architecture | National Brand Group',
  description: 'The seven-layer architecture NBG uses to assemble trustworthy systems for emerging markets.',
};

export default function ArchitecturePage() {
  return (
    <main id="main-content" className="detail-page source-page">
      <SourcePageNav />
      <section className="source-hero">
        <span className="status">Digital Institution Architecture</span>
        <h1>Seven layers. One coherent system.</h1>
        <p>Each layer answers a different institutional requirement. NBG assembles only the layers the problem needs, with technology selected after outcomes, evidence and responsibilities are clear.</p>
      </section>
      <section className="source-section">
        <div className="source-intro"><div className="section-index">Interactive architecture</div><h2>Inspect what each layer contributes.</h2></div>
        <ArchitectureExplorer />
      </section>
      <section className="source-section architecture-register">
        <div className="source-intro"><div className="section-index">Layer register</div><h2>From intelligence to participation.</h2></div>
        {architectureLayers.map((layer) => (
          <article key={layer.n}>
            <span>{layer.n}</span><h3>{layer.name}</h3><p>{layer.problem}</p><small>{layer.tech}</small>
          </article>
        ))}
      </section>
      <section className="source-next">
        <div><span className="section-index">Architecture in practice</span><h2>See how the portfolio applies these layers.</h2></div>
        <Link className="button primary" href="/ventures">View ventures <ArrowUpRight size={15} /></Link>
      </section>
    </main>
  );
}
