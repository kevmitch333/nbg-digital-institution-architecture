import Link from '@/components/durable-link';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Compass,
  Eye,
  Fingerprint,
  Gauge,
  Landmark,
  MoveRight,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { ArchitectureExplorer } from '@/components/architecture-explorer';
import { PartnershipIntake } from '@/components/partnership-intake';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { FAQ } from '@/components/faq';
import { ContentStudio } from '@/components/content-studio';
import { HomeHeader } from '@/components/home-header';
import { advisoryServices, researchTracks } from '@/content/site';
const pillars = ['Intelligence', 'Trust', 'Ownership', 'Governance'];
const pillarCopy = [
  'Capability to understand, reason, coordinate and act.',
  'Evidence, verification and standards that enable adoption.',
  'Rights, provenance and participation in created value.',
  'Rules, oversight and accountability that create legitimacy.',
];
const pillarIcons = [Sparkles, ShieldCheck, Fingerprint, Scale];
const advisoryIcons = [Compass, Network, Landmark, Gauge, Users, Eye];
const foundry = [
  'Opportunity',
  'Institutional gap',
  'Architecture',
  'Validation',
  'Partners & community',
  'Evidence',
  'Sustainable economics',
  'Stewardship',
];
export default function Home() {
  return (
    <main id="main-content">
      <HomeHeader />
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/nbg-institution-architecture-hero-v2.jpg"
          alt="A multidisciplinary team maps an interconnected institutional system across a large digital wall in an advanced design studio."
          width="1672"
          height="941"
          fetchPriority="high"
        />
        <div className="hero-image-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="eyebrow">
          <span /> Institution Studio for the Intelligence Economy
        </div>
        <h1 id="hero-title">
          Build the institutions
          <br />
          the future requires.
        </h1>
        <div className="hero-lower">
          <p>
            National Brand Group designs the intelligence, trust, ownership,
            governance and economic infrastructure that helps emerging
            categories become functioning markets.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/model">
              Explore the NBG model <ArrowDownRight size={17} />
            </Link>
            <Link className="button ghost" href="/partnerships">
              Build with us <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <Link className="text-link" href="/ventures">
          Explore our ventures <ArrowUpRight size={14} />
        </Link>
      </section>
      <div className="hero-visual-spacer" aria-hidden="true">
        <span />
      </div>
      <section className="home-visual-story" aria-label="NBG work in practice">
        <figure className="visual-story-primary">
          <img
            src="/images/ai-strategy-meeting-alt-02.webp"
            alt="A diverse group of business and technology leaders reviewing data together."
            width="1672"
            height="941"
          />
          <figcaption>
            <span>Strategy + intelligence</span>
            Build shared understanding before selecting the system.
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/public-space-content-creator.webp"
            alt="A content creator filming in an active public space."
            width="1672"
            height="941"
            loading="lazy"
          />
          <figcaption>
            <span>Culture + participation</span>
            Connect new infrastructure to the people who will use it.
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/college-drone-coaching.webp"
            alt="A college drone-racing student and coach working together."
            width="1672"
            height="941"
            loading="lazy"
          />
          <figcaption>
            <span>Learning + performance</span>
            Turn emerging capability into evidence and opportunity.
          </figcaption>
        </figure>
      </section>
      <section className="problem" id="model">
        <div className="section-index">01 / THE INSTITUTIONAL GAP</div>
        <div>
          <h2>
            Innovation moves faster
            <br />
            than institutions.
          </h2>
          <p>
            New technologies can emerge in months. The systems required to
            govern them often take decades. Standards. Credentials. Rights.
            Measurement. Governance. Education. Economic systems. NBG works
            inside that gap.
          </p>
        </div>
        <div
          className="bridge"
          role="img"
          aria-label="NBG infrastructure connects emerging technology to a trusted functioning market"
        >
          <span>Technology</span>
          <div>
            <i />
            <b>NBG infrastructure</b>
            <i />
          </div>
          <span>Market</span>
        </div>
      </section>
      <section className="formula">
        <div className="section-index">02 / THE NBG MODEL</div>
        <h2>
          A reusable architecture
          <br />
          for emerging institutions.
        </h2>
        <div className="pillars">
          {pillars.map((p, i) => (
            <article key={p}>
              <div className="concept-marker">
                <span>0{i + 1}</span>
                {(() => {
                  const Icon = pillarIcons[i];
                  return <Icon size={19} strokeWidth={1.35} aria-hidden="true" />;
                })()}
              </div>
              <h3>{p}</h3>
              <p>{pillarCopy[i]}</p>
            </article>
          ))}
        </div>
        <div className="rails">
          <span>Supported by</span>
          <strong>Economic &amp; Participation Rails</strong>
          <span>
            Payments · settlement · royalties · commerce · community funding
          </span>
        </div>
        <div className="model-flywheel">
          <div className="model-flywheel-copy">
            <span className="section-index">Institutional flywheel</span>
            <h3>Four forces. One institutional system.</h3>
            <p>
              Intelligence becomes durable when trust, ownership and
              governance move with it.
            </p>
          </div>
          <div
            className="system-map model-system-map"
            role="img"
            aria-label="NBG institutional architecture connects intelligence, trust, ownership and governance"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            {pillars.map((p, i) => (
              <span className={`node n${i + 1}`} key={p}>
                {p}
              </span>
            ))}
            <span className="core">
              NBG
              <small>
                INSTITUTION
                <br />
                ARCHITECTURE
              </small>
            </span>
          </div>
        </div>
      </section>
      <section className="foundry">
        <div className="section-head">
          <div className="section-index">03 / HOW NBG BUILDS</div>
          <h2>The Foundry Model.</h2>
          <p>
            An idea does not become an institution because it has a compelling
            name. It advances through evidence, governance and disciplined
            construction.
          </p>
        </div>
        <div
          className="foundry-flow"
          role="list"
          aria-label="NBG Foundry Model"
        >
          {foundry.map((x, i) => (
            <div role="listitem" key={x}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <strong>{x}</strong>
              {i < foundry.length - 1 && <MoveRight aria-hidden="true" />}
            </div>
          ))}
        </div>
        <div className="foundry-principles">
          <p>
            <strong>Human-led.</strong> Consequential decisions remain
            accountable to people.
          </p>
          <p>
            <strong>Technology-agnostic.</strong> Tools are selected after the
            problem is understood.
          </p>
          <p>
            <strong>Evidence-directed.</strong> Concepts earn investment by
            producing learning and proof.
          </p>
        </div>
      </section>
      <section className="advisory" id="advisory">
        <div className="section-head">
          <div className="section-index">04 / STRATEGIC ADVISORY</div>
          <h2>
            Work inside the
            <br />
            institutional gap.
          </h2>
          <p>
            NBG helps organizations determine what an emerging market needs
            beyond a product—and how those systems can be assembled responsibly.
          </p>
        </div>
        <div className="advisory-cards">
          {advisoryServices.map(([n, title, desc]) => (
            <article key={n}>
              <div className="concept-marker">
                <span>{n}</span>
                {(() => {
                  const Icon = advisoryIcons[Number(n) - 1];
                  return Icon ? (
                    <Icon size={20} strokeWidth={1.35} aria-hidden="true" />
                  ) : null;
                })()}
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
        <Link className="section-link" href="/advisory">
          Explore Strategic Advisory <ArrowUpRight size={15} />
        </Link>
      </section>
      <section className="architecture section-dark" id="architecture">
        <div className="section-head">
          <div className="section-index">
            05 / DIGITAL INSTITUTION ARCHITECTURE
          </div>
          <h2>
            Seven layers.
            <br />
            Assembled for the problem.
          </h2>
          <p>
            Not every institution requires every layer. NBG assembles the
            architecture appropriate to the problem.
          </p>
        </div>
        <ArchitectureExplorer />
        <Link className="section-link" href="/architecture">
          Explore the full architecture <ArrowUpRight size={15} />
        </Link>
      </section>
      <section className="ventures" id="ventures">
        <div className="section-head">
          <div className="section-index">06 / PORTFOLIO AS PROOF</div>
          <h2>
            Different stages.
            <br />
            Shared architecture.
          </h2>
          <p>
            The portfolio distinguishes strategic priorities, architecture
            extensions and developing concepts. Each initiative shows its
            purpose, current stage and partnership focus.
          </p>
        </div>
        <PortfolioGrid />
      </section>
      <section className="ownership">
        <div className="section-index">07 / OWNERSHIP &amp; SETTLEMENT</div>
        <div className="split-copy">
          <div>
            <h2>The Intelligence Economy needs an ownership layer.</h2>
            <p>
              Infrastructure for a world where intelligence, rights and economic
              participation increasingly move across digital systems.
            </p>
          </div>
          <div className="questions">
            {[
              'Who created this?',
              'Who contributed?',
              'Who owns it?',
              'Who may use it?',
              'How should value be distributed?',
            ].map((x) => (
              <p key={x}>
                <Check size={14} />
                {x}
              </p>
            ))}
          </div>
        </div>
        <div className="distinction">
          <div>
            <span>Not our focus</span>
            <strong>Speculation</strong>
            <p>Token prices, trading interfaces or ideology.</p>
          </div>
          <MoveRight />
          <div>
            <span>Our focus</span>
            <strong>Infrastructure</strong>
            <p>
              Identity, attestations, rights, licensing, royalties and
              appropriate settlement.
            </p>
          </div>
        </div>
        <blockquote>
          “If a conventional database or payment system solves the problem
          better, use it.”
        </blockquote>
        <p className="chain-note">
          Blockchain is one optional, chain-agnostic infrastructure
          choice—evaluated only where it creates a material advantage in
          verification, provenance, rights, settlement or cross-organizational
          trust.
        </p>
      </section>
      <section className="lab" id="research">
        <div className="section-head">
          <span className="status">Research + Prototyping</span>
          <div className="section-index">
            08 / NBG DIGITAL ASSET INFRASTRUCTURE LAB
          </div>
          <h2>Questions before products.</h2>
          <p>
            A shared research program exploring the infrastructure required for
            trusted participation in emerging digital markets.
          </p>
        </div>
        <div className="research-list">
          {researchTracks.map(([n, title, context, q]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h3>{title}</h3>
                <small>{context}</small>
              </div>
              <p>{q}</p>
            </article>
          ))}
        </div>
        <Link className="section-link" href="/research">
          Explore the research agenda <ArrowUpRight size={15} />
        </Link>
      </section>
      <ContentStudio />
      <section className="about" id="about">
        <div className="section-index">10 / ABOUT NBG</div>
        <div>
          <h2>Institution building across culture, technology and markets.</h2>
          <p>
            National Brand Group operates at the intersection of research,
            standards, technology, venture creation and strategic partnership.
            Founder Kevin Mitchell brings an operating history spanning
            major-label music and artist development, film and television,
            National Amusements strategy, collegiate esports, higher education,
            AI and venture development.
          </p>
          <Link
            className="founder-role"
            href="/founder"
            aria-label="Read Kevin Mitchell's full biography"
          >
            Kevin Mitchell{' '}
            <span>Founder · Venture Architect · Institution Builder</span>
          </Link>
          <Link className="section-link" href="/founder">
            Meet Kevin Mitchell <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="faq">
        <div className="section-head">
          <div className="section-index">11 / FREQUENTLY ASKED</div>
          <h2>
            Clear questions.
            <br />
            Grounded answers.
          </h2>
          <p>
            How the Institution Studio model, portfolio stages and technology
            choices work.
          </p>
        </div>
        <FAQ />
      </section>
      <section className="partner" id="partner">
        <div className="partner-intro">
          <div className="section-index">12 / PARTNERSHIP ENGINE</div>
          <h2>
            What institution
            <br />
            does your market need?
          </h2>
          <p>
            NBG collaborates with technology companies, universities, operators,
            investors and institutions building the infrastructure of emerging
            markets.
          </p>
          <p className="ecosystem-note">
            We don’t need to build every layer ourselves. The next generation of
            institutions will be assembled through ecosystems.
          </p>
        </div>
        <PartnershipIntake />
      </section>
    </main>
  );
}
