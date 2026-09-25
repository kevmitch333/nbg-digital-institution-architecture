import type { Metadata } from 'next';
import Link from '@/components/durable-link';
import { ExternalLink } from 'lucide-react';
import { CareerRecordTabs } from '@/components/career-record-tabs';
import { SourcePageNav } from '@/components/source-page-nav';

export const metadata: Metadata = {
  title: 'Kevin Mitchell | Founder, National Brand Group',
  description:
    'Kevin Mitchell is a founder, venture architect and educator with three decades of experience across music, media, corporate innovation, esports, education and AI-era institution building.',
};

const chapters: Array<{
  number: string;
  title: string;
  text: string;
}> = [
  {
    number: '01',
    title: 'Music, labels & artist development',
    text: 'Major-label marketing and promotion experience across Sony Music, Def Jam and Geffen developed into artist management, executive production and independent-label building. Mitchell founded Codeine Records and worked with Lord Tariq & Peter Gunz and Nappy Roots across career chapters connected to Grammy-nominated talent and a Billboard-recognized hit.',
  },
  {
    number: '02',
    title: 'Screen, media & cultural production',
    text: 'His career record extends into music supervision, placement, production and consulting for film, television, games and live entertainment, with credits associated with Training Day, The Ladykillers, South Park, Friday After Next, BET, CBS and EA Sports.',
  },
  {
    number: '03',
    title: 'Corporate strategy & innovation',
    text: 'At National Amusements, Mitchell served in a senior business-development and strategic-intelligence role, working at the intersection of theatrical exhibition, entertainment, gaming and emerging technology within the corporate ecosystem then spanning Paramount and CBS.',
  },
  {
    number: '04',
    title: 'Esports institution-building',
    text: 'He brought the business of esports into higher education, founded the College Esports Expo, co-led Ivy League Esports and helped organize a Kraft Group / Boston Uprising competition spanning 32 universities across six New England states.',
  },
  {
    number: '05',
    title: 'Teaching, curriculum & publishing',
    text: 'Mitchell joined Emerson College as affiliated faculty in 2017, taught esports management and business, created and taught an HP / AMD esports-management program delivered through edX, and co-authored the “Esports Public Relations” chapter in the 2025 Routledge Handbook of Esports.',
  },
  {
    number: '06',
    title: 'Venture architecture & AI systems',
    text: 'National Brand Group now applies that cross-industry operating history to AI-era institution design—developing ventures, rights frameworks, evidence systems and partnership models for categories whose infrastructure is still forming.',
  },
];

const formation = [
  ['University of Massachusetts Amherst', 'B.A., Communication and Society'],
  [
    'Richmond, The American International University in London',
    'International business study and co-op experience',
  ],
  ['Harvard Business School Executive Education', 'Building New Ventures'],
  [
    'MIT Enterprise Forum and Babson College',
    'Lean startup and entrepreneurship executive programs',
  ],
];

const currentBuilds = [
  [
    'AGONiQ',
    '/ventures/agoniq',
    'Human–AI performance, evidence and credentials',
  ],
  [
    'Patients Intelligence',
    '/ventures/patients-intelligence',
    'Patient-centered AI assurance and clinical review pathways',
  ],
  [
    'Tubaron / Cabo Verde',
    '/ventures/tubaron-cabo-verde',
    'Sport, culture, education and diaspora participation infrastructure',
  ],
  [
    'EsportsX',
    '/ventures/esportsx',
    'Esports intellectual property, education and licensing architecture',
  ],
];

export default function Founder() {
  return (
    <main id="main-content" className="detail-page founder-page">
      <SourcePageNav backLabel="About NBG" backHref="/about" />

      <section className="founder-hero">
        <div className="section-index">
          Founder / Venture Architect / Institution Builder
        </div>
        <h1>
          Kevin
          <br />
          Mitchell
        </h1>
        <p>
          An operator with more than three decades across music, artist
          development, screen and live media, corporate innovation, collegiate
          esports, education and AI-era institution design.
        </p>
        <div className="founder-hero-band" aria-label="Career disciplines">
          <span>Culture</span>
          <span>Commerce</span>
          <span>Education</span>
          <span>Technology</span>
          <span>Institutions</span>
        </div>
      </section>

      <section className="founder-story">
        <div>
          <div className="section-index">The operating pattern</div>
          <h2>Build the infrastructure before the category is obvious.</h2>
        </div>
        <div>
          <p>
            Mitchell’s career did not move through isolated industries. Each
            chapter added a layer: music taught audience development and rights;
            film and television added cross-platform production; corporate media
            added institutional scale; esports added community, competition and
            education; AI now brings those systems together.
          </p>
          <p>
            Across those chapters, the method has remained consistent: identify
            a category before its infrastructure is mature, connect culture with
            technology and institutions, then build the systems that make
            participation credible and sustainable.
          </p>
          <p>
            That pattern is the foundation of National Brand Group: identify an
            institutional gap, assemble the people and systems around it, test
            the architecture, and build toward durable participation rather than
            short-lived attention.
          </p>
        </div>
      </section>

      <section
        className="founder-image-pair"
        aria-label="Career fields in practice"
      >
        <figure>
          <img
            src="/images/artist-intel-studio.webp"
            alt="An artist and creative team reviewing career intelligence in a studio."
            width="1672"
            height="941"
            loading="lazy"
          />
          <figcaption>
            <span>Culture + rights</span> Artist development, media and
            ownership.
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/college-esports-lab-alt-02.webp"
            alt="White and Asian college esports students collaborating in a campus computer lab."
            width="1672"
            height="941"
            loading="lazy"
          />
          <figcaption>
            <span>Education + competition</span> Collegiate ecosystems and human
            performance.
          </figcaption>
        </figure>
      </section>

      <section className="career-chapters">
        <div className="section-index">Six chapters / one throughline</div>
        <div className="career-chapter-grid">
          {chapters.map((chapter) => (
            <article key={chapter.number}>
              <div>
                <span>{chapter.number}</span>
              </div>
              <h2>{chapter.title}</h2>
              <p>{chapter.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="record">
        <div className="record-heading">
          <div className="section-index">Expanded career record</div>
          <p>
            Selected milestones across culture, media, education, technology and
            venture development.
          </p>
        </div>
        <CareerRecordTabs />
      </section>

      <section className="founder-formation">
        <div>
          <div className="section-index">Education & executive formation</div>
          <h2>
            Learning across communication, entrepreneurship and venture design.
          </h2>
          <p>
            Academic and executive programs that informed a cross-disciplinary
            approach to institution and venture building.
          </p>
        </div>
        <div className="formation-list">
          {formation.map(([institution, program]) => (
            <article key={institution}>
              <h3>{institution}</h3>
              <p>{program}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder-builds">
        <div>
          <div className="section-index">Current build portfolio</div>
          <h2>
            Applying a cross-industry operating history to the Intelligence
            Economy.
          </h2>
        </div>
        <div className="founder-build-grid">
          {currentBuilds.map(([name, href, description]) => (
            <Link href={href} key={name}>
              <span>{name}</span>
              <p>{description}</p>
              <ExternalLink size={15} />
            </Link>
          ))}
        </div>
      </section>

      <section className="source-panel">
        <h2>Selected references</h2>
        <p>
          Explore selected faculty, teaching, publishing and industry references
          connected to Kevin Mitchell’s work.
        </p>
        <div>
          <a
            href="https://emerson.edu/faculty/kevin-mitchell/"
            target="_blank"
            rel="noreferrer"
          >
            Emerson College · faculty profile <ExternalLink size={13} />
          </a>
          <a
            href="https://www.televisionconference.com/session/the-u-s-armed-forces-esports-a-blueprint-for-engagement-recruitment/"
            target="_blank"
            rel="noreferrer"
          >
            Future of Television · U.S. armed forces panel{' '}
            <ExternalLink size={13} />
          </a>
          <a
            href="https://news.pollstar.com/2002/09/30/nappy-roots/"
            target="_blank"
            rel="noreferrer"
          >
            Pollstar · Nappy Roots management profile <ExternalLink size={13} />
          </a>
          <a
            href="https://www.televisionconference.com/speaker/kevin-mitchell/"
            target="_blank"
            rel="noreferrer"
          >
            Future of Television · speaker profile <ExternalLink size={13} />
          </a>
          <a
            href="https://www.edx.org/bio/kevin-mitchell"
            target="_blank"
            rel="noreferrer"
          >
            edX · instructor profile <ExternalLink size={13} />
          </a>
          <a
            href="https://www.taylorfrancis.com/chapters/edit/10.4324/9781003410591-37/esports-public-relations-kevin-mitchell-jana-m%C3%B6glich-alan-ritacco"
            target="_blank"
            rel="noreferrer"
          >
            Routledge · Handbook of Esports <ExternalLink size={13} />
          </a>
        </div>
      </section>
    </main>
  );
}
