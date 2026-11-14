import Link from '@/components/durable-link';
import { ArrowUpRight, Check } from 'lucide-react';
import { SourcePageNav } from '@/components/source-page-nav';

type AudiencePage = {
  eyebrow: string;
  title: string;
  lead: string;
  promise: string;
  contributions: Array<{ title: string; copy: string }>;
  intersections: Array<{ title: string; copy: string }>;
  steps: string[];
  inquiryPath: string;
};

export function PartnerAudiencePage({ audience }: { audience: AudiencePage }) {
  return (
    <main id="main-content" className="detail-page source-page audience-page">
      <SourcePageNav />
      <section className="source-hero audience-hero">
        <span className="status">{audience.eyebrow}</span>
        <h1>{audience.title}</h1>
        <p>{audience.lead}</p>
        <div className="not-found-actions">
          <Link className="button primary" href={`/partnerships?path=${encodeURIComponent(audience.inquiryPath)}#intake`}>
            Start a conversation <ArrowUpRight size={16} />
          </Link>
          <Link className="button ghost" href="/ventures">Explore the portfolio <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="source-section audience-promise">
        <div className="source-intro">
          <div className="section-index">THE PARTNERSHIP PREMISE</div>
          <h2>{audience.promise}</h2>
        </div>
        <div className="source-card-grid">
          {audience.contributions.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="source-section source-section-light audience-approach">
        <div className="source-intro">
          <div className="section-index">HOW WE BEGIN</div>
          <h2>Start with the institutional gap—not a preselected product.</h2>
        </div>
        <ol className="audience-steps">
          {audience.steps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}
        </ol>
      </section>

      <section className="source-section">
        <div className="source-intro">
          <div className="section-index">CURRENT NBG INTERSECTIONS</div>
          <h2>Where the conversation may lead.</h2>
          <p>These are current areas of architecture, research or portfolio development—not claims of a contracted program or partnership.</p>
        </div>
        <div className="source-card-grid">
          {audience.intersections.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="source-next audience-closing">
        <div>
          <span className="section-index">BUILD WITH NBG</span>
          <h2>Bring the capability your market is missing.</h2>
        </div>
        <Link className="button primary" href={`/partnerships?path=${encodeURIComponent(audience.inquiryPath)}#intake`}>
          Start a conversation <ArrowUpRight size={15} />
        </Link>
      </section>
    </main>
  );
}

export const audiencePages = {
  institutions: {
    eyebrow: 'For universities & institutions',
    title: 'Turn emerging capability into credible institutional practice.',
    lead: 'NBG works with universities, health systems, employers and mission-led institutions that want to turn fast-moving technology into governed, evidence-directed programs.',
    promise: 'Institutional reach makes it possible to test what is credible, useful and accountable in the real world.',
    contributions: [
      { title: 'A bounded setting', copy: 'Bring a real environment in which a new model, protocol or learning pathway can be defined with appropriate scope and oversight.' },
      { title: 'Subject-matter perspective', copy: 'Help define the decisions, standards and participant needs that technology alone cannot resolve.' },
      { title: 'Evidence orientation', copy: 'Shape questions, measures and review practices that can distinguish learning from unsupported claims.' },
    ],
    steps: ['Define the institutional gap and the stakeholders affected.', 'Determine what evidence, safeguards and operating boundaries are required.', 'Design a bounded validation or co-development pathway before broader commitment.'],
    intersections: [
      { title: 'AGONiQ', copy: 'Human–AI performance measurement, portable evidence and university-grounded validation pathways.' },
      { title: 'Patients Intelligence', copy: 'Bounded pathways for patient-originated AI assurance with health-system, clinical research and patient-advocacy partners.' },
      { title: 'The College Company', copy: 'Collegiate competition, creator programs and documentation architecture for evolving athletics environments.' },
    ],
    inquiryPath: 'Institutional partner',
  },
  technology: {
    eyebrow: 'For technology & AI partners',
    title: 'Apply technical capability where trust, evidence and adoption matter.',
    lead: 'NBG works with technology and AI partners that see institutional deployment as more than an integration problem: it requires clear roles, meaningful measures and credible oversight.',
    promise: 'Technology earns durable value when it is assembled with the governance, evidence and participation systems around it.',
    contributions: [
      { title: 'Technical capability', copy: 'Bring models, cloud, data, identity, payment or workflow infrastructure that is relevant to a defined institutional need.' },
      { title: 'Product insight', copy: 'Help identify what the system can responsibly support, where human decision-making remains necessary and what must be measured.' },
      { title: 'Co-development discipline', copy: 'Contribute to a scoped opportunity that produces learning before claims, broad rollout or category-level commitments.' },
    ],
    steps: ['Identify the market or institutional context where capability meets a real operating gap.', 'Map the technical layer alongside human oversight, data, rights and economic considerations.', 'Define a testable partnership thesis with measurable learning objectives.'],
    intersections: [
      { title: 'AGONiQ', copy: 'Technology, assessment and telemetry partners supporting human–AI performance evidence and competition formats.' },
      { title: 'Patients Intelligence', copy: 'Infrastructure relevant to provenance, evidence review and safe routing of patient-originated AI material.' },
      { title: 'Digital Institution Architecture', copy: 'Cross-portfolio work on intelligence, observability, identity, rights, settlement and participation layers.' },
    ],
    inquiryPath: 'Technology partner',
  },
  investors_operators: {
    eyebrow: 'For investors & strategic operators',
    title: 'Build the operating architecture behind emerging markets.',
    lead: 'NBG works with investors and operators looking beyond a single product toward the standards, rights, evidence, governance and partner systems that make a market durable.',
    promise: 'The strongest opportunities combine a clear operating role with a disciplined path from institutional gap to sustainable economics.',
    contributions: [
      { title: 'Market access', copy: 'Bring the operating context, channels, customer understanding or execution capacity needed to test a real opportunity.' },
      { title: 'Strategic judgment', copy: 'Pressure-test where an emerging category needs infrastructure rather than another isolated feature or brand.' },
      { title: 'Aligned capital', copy: 'Support learning and staged validation with an understanding that evidence should precede expansion.' },
    ],
    steps: ['Clarify the market problem and the operating role required to address it.', 'Assess the institutional architecture: evidence, governance, rights, community and economic rails.', 'Structure a staged opportunity with defined learning, ownership and partner responsibilities.'],
    intersections: [
      { title: 'The College Company', copy: 'Venture-in-formation work on collegiate competition, compliance, creator infrastructure and community economics.' },
      { title: 'EsportsX', copy: 'Portfolio development to organize esports formats, curricula, community brands and IP into partner-ready licensing packages.' },
      { title: 'NBG Strategic Advisory', copy: 'Emerging-category, venture and partnership architecture for organizations working across technology, culture and markets.' },
    ],
    inquiryPath: 'Strategic investor',
  },
  rights_holders: {
    eyebrow: 'For rights holders',
    title: 'Make intellectual property legible, licensable and built for participation.',
    lead: 'NBG works with creators, brands, operators and rights holders who want to move valuable assets from scattered ownership into a clearer architecture for attribution, permissions, licensing and responsible participation.',
    promise: 'Rights infrastructure is not speculation. It is the practical work of knowing what exists, who may use it and how value can move appropriately.',
    contributions: [
      { title: 'Assets & context', copy: 'Bring brands, formats, curricula, media, domains or other assets with the history and operating context needed to document them responsibly.' },
      { title: 'Rights clarity', copy: 'Identify ownership, permissions, contributors and limits before commercial packaging or technical implementation.' },
      { title: 'Distribution intent', copy: 'Define whether an asset is best positioned for licensing, partnerships, education, media, commerce or a staged combination.' },
    ],
    steps: ['Inventory the asset, contributors and current rights position.', 'Identify the use cases, permissions and provenance requirements that matter most.', 'Design a partner-ready licensing or participation pathway with appropriate controls.'],
    intersections: [
      { title: 'EsportsX', copy: 'Rights documentation and packaging for esports formats, educational concepts, community brands and digital assets.' },
      { title: 'NBG Digital Asset Infrastructure Lab', copy: 'Research on provenance, rights registries, creator economics and transparent settlement questions.' },
      { title: 'NBG Content Studio', copy: 'Capability in development exploring original media and participatory experiences with clear contributor consent, attribution and licensing.' },
    ],
    inquiryPath: 'Operating partner',
  },
} satisfies Record<string, AudiencePage>;
