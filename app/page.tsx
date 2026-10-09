import { pageMetadata } from '@/lib/seo';
import Link from '@/components/durable-link';
import {
  ArrowDownRight,
  ArrowUpRight,
  Fingerprint,
  Scale,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { HomeHeader } from '@/components/home-header';
import { portfolio } from '@/content/site';

export const metadata = pageMetadata(
  '/',
  'National Brand Group | Institution Studio',
  'National Brand Group designs the institutional infrastructure that helps emerging categories become trusted, functioning markets.',
);

const pillars = [
  ['Intelligence', 'Understand, reason, coordinate and act.', Sparkles],
  ['Trust', 'Build evidence, verification and standards.', ShieldCheck],
  ['Ownership', 'Clarify rights, provenance and participation.', Fingerprint],
  ['Governance', 'Create oversight, accountability and legitimacy.', Scale],
] as const;

const gateways = [
  [
    '01',
    'The NBG Model',
    'How ideas advance through evidence, governance and disciplined construction.',
    '/model',
  ],
  [
    '02',
    'Strategic Advisory',
    'Architecture for organizations working inside emerging categories and markets.',
    '/advisory',
  ],
  [
    '03',
    'Institution Architecture',
    'Seven interoperable layers assembled around the problem—not the technology.',
    '/architecture',
  ],
  [
    '04',
    'Research Agenda',
    'Questions that test the infrastructure required for trusted participation.',
    '/research',
  ],
  [
    '05',
    'Content Studio',
    'Stories, simulations and participatory worlds built with clear rights and purpose.',
    '/content-studio',
  ],
  [
    '06',
    'About NBG',
    'The operating history and point of view behind the Institution Studio.',
    '/about',
  ],
] as const;

export default function Home() {
  return (
    <main id="main-content">
      <HomeHeader />
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/nbg-institution-studio-hero-2026.webp"
          alt="A multidisciplinary team works around a table of system maps and printed research in a design studio at dusk."
          width="1672"
          height="941"
          fetchPriority="high"
        />
        <div className="hero-image-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="eyebrow">
          <span /> Institution Studio
        </div>
        <h1 id="hero-title">
          Build ventures—and the systems
          <br />
          that help them last.
        </h1>
        <div className="hero-lower">
          <p>
            National Brand Group develops ventures and works with partners on
            the strategy, evidence, governance, rights and operating design
            that emerging markets need to earn trust.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/ventures">
              See current initiatives <ArrowDownRight size={17} />
            </Link>
            <Link className="button ghost" href="/partnerships">
              Talk with NBG <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <Link className="text-link" href="/ventures">
          How the Institution Studio works <ArrowUpRight size={14} />
        </Link>
      </section>
      <div className="hero-visual-spacer" aria-hidden="true">
        <span />
      </div>
      <section className="home-visual-story" aria-label="NBG work in practice">
        <figure className="visual-story-primary">
          <img
            src="/images/nbg-evidence-atlas-2026.webp"
            alt="A multigenerational group builds a shared evidence map with archival photographs, notes and connecting threads."
            width="1672"
            height="941"
          />
          <figcaption>
            <span>Evidence + intelligence</span>Build shared understanding
            before choosing the system.
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/nbg-participation-lab-2026.webp"
            alt="Participants and mentors test a projected learning and performance prototype in an industrial studio."
            width="1672"
            height="941"
            loading="lazy"
          />
          <figcaption>
            <span>Participation + testing</span>Test the system with the
            people who will use it.
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/nbg-material-library-2026.webp"
            alt="A material library with system diagrams, acetate overlays, geometric cards and physical objects on a cobalt-blue table."
            width="1672"
            height="941"
            loading="lazy"
          />
          <figcaption>
            <span>Design + delivery</span>Turn emerging capability into
            accountable action.
          </figcaption>
        </figure>
      </section>
      <section className="problem home-thesis" id="model">
        <div className="section-index">01 / THE INSTITUTIONAL GAP</div>
        <div>
          <h2>
            Innovation moves faster
            <br />
            than institutions.
          </h2>
          <p>
            New technologies can emerge in months. The systems required to
            govern them often take decades. NBG works inside that gap—connecting
            capability to the standards, rights, evidence and participation
            systems a functioning market requires.
          </p>
          <Link className="section-link" href="/model">
            Read the institutional thesis <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="formula home-model">
        <div className="section-index">02 / THE NBG MODEL</div>
        <h2>
          A reusable architecture
          <br />
          for emerging institutions.
        </h2>
        <div className="pillars">
          {pillars.map(([title, copy, Icon], index) => (
            <article key={title}>
              <div className="concept-marker">
                <span>0{index + 1}</span>
                <Icon size={19} strokeWidth={1.35} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <Link className="section-link" href="/model">
          Explore the full NBG model <ArrowUpRight size={15} />
        </Link>
      </section>
      <section className="home-portfolio" id="ventures">
        <div className="section-head">
          <div className="section-index">03 / CURRENT INITIATIVES</div>
          <h2>
            Four initiatives.
            <br />
            One institutional discipline.
          </h2>
          <p>
            Each initiative is in active development, applying the Institution
            Studio method to a distinct market, community and development path.
          </p>
        </div>
        <div className="home-venture-grid">
          {portfolio.map((venture, index) => (
            <Link
              href={`/ventures/${venture.slug}`}
              className="home-venture-card"
              key={venture.slug}
            >
              <span className="home-venture-number">0{index + 1}</span>
              <span className="status">{venture.stage}</span>
              <h3>{venture.name}</h3>
              <p>{venture.category}</p>
              <span className="detail-link">
                Explore venture <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
        <Link className="section-link" href="/ventures">
          View the complete portfolio <ArrowUpRight size={15} />
        </Link>
      </section>
      <section className="home-gateways">
        <div className="section-head">
          <div className="section-index">
            04 / EXPLORE THE INSTITUTION STUDIO
          </div>
          <h2>
            Choose the depth
            <br />
            you need.
          </h2>
          <p>
            The homepage introduces the system. Each section below opens a
            focused reading path.
          </p>
        </div>
        <div className="gateway-grid">
          {gateways.map(([number, title, copy, href]) => (
            <Link href={href} className="gateway-card" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="detail-link">
                Open {title} <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-founder">
        <div className="section-index">
          05 / FOUNDER &amp; INSTITUTION BUILDER
        </div>
        <div>
          <h2>Experience across culture, technology and markets.</h2>
          <p>
            Founder Kevin Mitchell brings an operating history spanning music,
            film and television, corporate strategy, collegiate esports, higher
            education, AI and venture development.
          </p>
          <Link className="section-link" href="/founder">
            Meet Kevin Mitchell <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="home-partner">
        <div>
          <div className="section-index">06 / BUILD WITH NBG</div>
          <h2>
            What institution
            <br />
            does your market need?
          </h2>
        </div>
        <div>
          <p>
            NBG collaborates with technology companies, universities, operators,
            investors and institutions building the infrastructure of emerging
            markets.
          </p>
          <Link className="button primary" href="/partnerships">
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
