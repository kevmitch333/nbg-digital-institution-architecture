import type { Metadata } from 'next';
import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { PartnershipIntake } from '@/components/partnership-intake';
import { SourcePageNav } from '@/components/source-page-nav';

export const metadata: Metadata = {
  title: 'Partnerships | National Brand Group',
  description: 'Partnership pathways for institutions, operators, technology companies, investors, communities and research collaborators.',
};

const paths = [
  ['Technology partners', 'Contribute platforms, infrastructure, engineering or technical validation.'],
  ['Institutional partners', 'Connect a venture to a university, health system, employer, standards body or public institution.'],
  ['Operating partners', 'Bring market access, execution capability, rights, distribution or local leadership.'],
  ['Strategic investors', 'Support evidence-backed ventures and the shared architecture behind them.'],
  ['Community & market partners', 'Ground design in real participants, regional context and accountable outcomes.'],
  ['Media & research partners', 'Develop credible evidence, public learning and responsible category narratives.'],
];

export default function PartnershipsPage() {
  return (
    <main id="main-content" className="detail-page source-page">
      <SourcePageNav />
      <section className="source-hero">
        <span className="status">Partnership engine</span>
        <h1>Build the missing infrastructure together.</h1>
        <p>NBG collaborates with organizations that can connect institutional problems to evidence, technology, operating capability, rights, capital or community participation.</p>
      </section>
      <figure className="source-image-band source-image-band-right">
        <img src="/images/ai-strategy-meeting.webp" alt="A diverse group of colleagues collaborating around a large data display." width="1672" height="941" loading="lazy" />
        <figcaption><span>Complementary capability</span> The strongest systems combine institutional reach, operating experience and shared evidence.</figcaption>
      </figure>
      <section className="source-section">
        <div className="source-intro"><div className="section-index">Partnership paths</div><h2>Enter through the capability you can contribute.</h2></div>
        <div className="source-card-grid">{paths.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="source-section partnership-source">
        <div className="source-intro"><div className="section-index">Start a conversation</div><h2>What could we build together?</h2><p>Select the path that best describes you. The form prepares an email in your preferred email application; the site does not store your information.</p></div>
        <PartnershipIntake />
      </section>
      <section className="source-next">
        <div><span className="section-index">Need strategic guidance?</span><h2>Explore NBG Strategic Advisory.</h2></div>
        <Link className="button primary" href="/advisory">View advisory services <ArrowUpRight size={15} /></Link>
      </section>
    </main>
  );
}
