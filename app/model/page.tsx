import type { Metadata } from 'next';
import Link from '@/components/durable-link';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import { SourcePageNav } from '@/components/source-page-nav';

export const metadata: Metadata = {
  title: 'The NBG Model | National Brand Group',
  description: 'How National Brand Group identifies institutional gaps and advances evidence-backed ventures and shared infrastructure.',
};

const pillars = [
  ['01', 'Intelligence', 'Capability to understand, reason, coordinate and act.'],
  ['02', 'Trust', 'Evidence, verification and standards that enable adoption.'],
  ['03', 'Ownership', 'Rights, provenance and participation in created value.'],
  ['04', 'Governance', 'Rules, oversight and accountability that create legitimacy.'],
];

const stages = ['Opportunity', 'Institutional gap', 'Architecture', 'Validation', 'Partners & community', 'Evidence', 'Sustainable economics', 'Stewardship'];

export default function ModelPage() {
  return (
    <main id="main-content" className="detail-page source-page">
      <SourcePageNav />
      <section className="source-hero">
        <span className="status">The NBG model</span>
        <h1>Build beyond the product.</h1>
        <p>National Brand Group starts with the systems an emerging category needs to become credible, measurable, governable, investable and economically sustainable.</p>
      </section>
      <section className="source-section">
        <div className="source-intro">
          <div className="section-index">Core architecture</div>
          <h2>Four requirements for durable participation.</h2>
        </div>
        <div className="source-card-grid four-up">
          {pillars.map(([number, title, description]) => (
            <article key={title}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
        <p className="source-callout">Supported by economic and participation rails: payments, settlement, royalties, commerce and community funding.</p>
      </section>
      <section className="source-section source-section-light">
        <div className="source-intro">
          <div className="section-index">The Foundry Model</div>
          <h2>Ideas advance through evidence and disciplined construction.</h2>
          <p>NBG does not treat a name, domain or technology as proof. Each opportunity must clarify the institutional gap, produce learning and earn the next investment of time or capital.</p>
        </div>
        <ol className="foundry-flow" aria-label="NBG Foundry Model">
          {stages.map((stage, index) => (
            <li key={stage}>
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong>
              {index < stages.length - 1 && <MoveRight aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </section>
      <section className="source-next">
        <div><span className="section-index">See the system</span><h2>Explore the seven architecture layers.</h2></div>
        <Link className="button primary" href="/architecture">View architecture <ArrowUpRight size={15} /></Link>
      </section>
    </main>
  );
}
