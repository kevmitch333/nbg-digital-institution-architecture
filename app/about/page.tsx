import type { Metadata } from 'next';
import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { SourcePageNav } from '@/components/source-page-nav';

export const metadata: Metadata = {
  title: 'About National Brand Group',
  description: 'National Brand Group is an Institution Studio for the Intelligence Economy founded by Kevin Mitchell.',
};

const commitments = [
  ['Human-led', 'Consequential decisions remain accountable to people.'],
  ['Technology-agnostic', 'Tools are selected after the institutional problem is understood.'],
  ['Evidence-directed', 'Concepts earn investment by producing learning and proof.'],
  ['Ecosystem-built', 'NBG assembles complementary institutions, operators and technical capabilities.'],
];

export default function AboutPage() {
  return (
    <main id="main-content" className="detail-page source-page">
      <SourcePageNav />
      <section className="source-hero">
        <span className="status">About NBG</span>
        <h1>Institution building across culture, technology and markets.</h1>
        <p>National Brand Group is an Institution Studio for the Intelligence Economy. It combines research, strategic advisory, venture architecture, intellectual property and partnership development.</p>
      </section>
      <section className="source-section source-story">
        <div><div className="section-index">Why NBG exists</div><h2>Innovation needs more than invention.</h2></div>
        <div><p>Products can demonstrate possibility. Markets become durable when participants can measure performance, establish trust, clarify rights, govern risk and share economic value.</p><p>NBG works in that institutional gap—designing the connective systems and partnership structures that help emerging categories become credible and sustainable.</p></div>
      </section>
      <figure className="source-image-band">
        <img src="/images/human-centered-ai-lab.webp" alt="A diverse team collaborating in a human-centered artificial intelligence lab." width="1672" height="941" loading="lazy" />
        <figcaption><span>Institution design</span> Human judgment, technical capability and institutional responsibility working together.</figcaption>
      </figure>
      <section className="source-section source-section-light">
        <div className="source-intro"><div className="section-index">Operating commitments</div><h2>Disciplined construction, not technology theater.</h2></div>
        <div className="source-card-grid four-up">{commitments.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="source-section founder-source">
        <div><div className="section-index">Founder</div><h2>Kevin Mitchell</h2><p>Founder, venture architect and educator whose record spans major-label music, cross-platform media, National Amusements strategy, collegiate esports, HP / AMD education and AI-era institution design.</p></div>
        <Link className="button primary" href="/founder">Read the full biography <ArrowUpRight size={15} /></Link>
      </section>
      <section className="source-next">
        <div><span className="section-index">Work with NBG</span><h2>Connect your capabilities to an institutional need.</h2></div>
        <Link className="button primary" href="/partnerships">Explore partnership paths <ArrowUpRight size={15} /></Link>
      </section>
    </main>
  );
}
