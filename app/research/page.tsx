import type { Metadata } from 'next';
import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { SourcePageNav } from '@/components/source-page-nav';
import { researchTracks } from '@/content/site';

export const metadata: Metadata = {
  title: 'Research & Prototyping | National Brand Group',
  description: 'NBG research tracks for trustworthy intelligence, rights, settlement, community funding and creator economics.',
};

const principles = [
  ['Question before product', 'Define the institutional uncertainty before selecting a tool or business model.'],
  ['Evidence before scale', 'Use bounded pilots and observable outcomes to decide what deserves expansion.'],
  ['Governance by design', 'Clarify permissions, accountability, appeal and human oversight early.'],
];

export default function ResearchPage() {
  return (
    <main id="main-content" className="detail-page source-page">
      <SourcePageNav />
      <section className="source-hero">
        <span className="status">Research + prototyping</span>
        <h1>Questions before products.</h1>
        <p>NBG investigates the shared infrastructure required for trusted participation in emerging digital markets. Research is tied to a venture, institutional need or testable operating hypothesis.</p>
      </section>
      <figure className="source-image-band">
        <img src="/images/college-esports-lab-alt-02.webp" alt="White and Asian college esports students collaborating with a coach in a campus computer lab." width="1672" height="941" loading="lazy" />
        <figcaption><span>Evidence in practice</span> Research becomes useful when people can test, observe and improve real performance.</figcaption>
      </figure>
      <section className="source-section">
        <div className="source-intro"><div className="section-index">Current research agenda</div><h2>Five tracks with portfolio applications.</h2></div>
        <div className="research-list source-research-list">
          {researchTracks.map(([number, title, context, question]) => (
            <article key={number}><span>{number}</span><div><h3>{title}</h3><small>{context}</small></div><p>{question}</p></article>
          ))}
        </div>
      </section>
      <section className="source-section source-section-light">
        <div className="source-intro"><div className="section-index">Operating principles</div><h2>Research must improve a decision.</h2></div>
        <div className="source-card-grid">
          {principles.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="source-next">
        <div><span className="section-index">Collaborate</span><h2>Connect research to a real institutional pathway.</h2></div>
        <Link className="button primary" href="/partnerships">Propose a collaboration <ArrowUpRight size={15} /></Link>
      </section>
    </main>
  );
}
