export const architectureLayers = [
  {
    n: '01',
    name: 'AI Intelligence & Orchestration',
    purpose: 'Understand, reason, coordinate and act.',
    problem:
      'Turns expanding technical capability into useful institutional decisions.',
    tech: 'AI models · agents · research · simulation',
    examples: 'AGONiQ · Patients Intelligence',
    partners: 'AI platforms · cloud · research institutions',
  },
  {
    n: '02',
    name: 'Data, Evidence & Observability',
    purpose: 'Make activity measurable and accountable.',
    problem: 'Creates the evidence required to evaluate systems and outcomes.',
    tech: 'Telemetry · analytics · audit trails · evidence systems',
    examples: 'AGONiQ · Patients Intelligence',
    partners: 'Data infrastructure · universities · health systems',
  },
  {
    n: '03',
    name: 'Institutional Governance',
    purpose: 'Determine what is permitted, accountable and trusted.',
    problem: 'Establishes oversight, controls and legitimacy.',
    tech: 'Rules · permissions · appeals · human oversight',
    examples: 'Patients Intelligence · AGONiQ',
    partners: 'Standards bodies · institutions · policy experts',
  },
  {
    n: '04',
    name: 'Identity & Reputation',
    purpose: 'Establish who participated and what they demonstrated.',
    problem: 'Makes verified achievement portable across institutions.',
    tech: 'Digital identity · credentials · reputation',
    examples: 'AGONiQ',
    partners: 'Universities · employers · identity providers',
  },
  {
    n: '05',
    name: 'Rights & Provenance',
    purpose: 'Establish who created, owns, licenses or contributed.',
    problem: 'Clarifies attribution and permissions in AI-enabled markets.',
    tech: 'Rights registries · attestations · licensing',
    examples: 'EsportsX · NBG asset registry research',
    partners: 'Creators · IP platforms · licensing partners',
  },
  {
    n: '06',
    name: 'Economic & Settlement Infrastructure',
    purpose: 'Move value between participants.',
    problem: 'Enables transparent, appropriate participation in new markets.',
    tech: 'Payments · settlement · royalties · controls',
    examples: 'College Company · EsportsX',
    partners: 'Payment providers · sponsors · commerce platforms',
  },
  {
    n: '07',
    name: 'Community & Participation',
    purpose: 'Convert infrastructure into real ecosystems.',
    problem: 'Connects systems to people, institutions and local context.',
    tech: 'Education · media · community funding · marketplaces',
    examples: 'College Company',
    partners: 'Communities · educators · regional operators',
  },
];
export const ventures = [
  {
    name: 'AGONiQ',
    stage: 'Architecture in development',
    category: 'Human–AI Performance Infrastructure',
    problem: 'How do organizations measure and develop human–AI capability?',
    emphasis: 'Intelligence · Trust · Identity · Credentials · Governance',
    need: 'Universities · employers · AI platforms',
  },
  {
    name: 'Patients Intelligence',
    stage: 'Exploratory initiative',
    category: 'Patient-Centered AI',
    problem:
      'How should patient-generated AI intelligence enter clinical systems responsibly?',
    emphasis: 'Intelligence · Trust · Governance · Evidence · Human escalation',
    need: 'Health systems · researchers · patient advocates',
  },
  {
    name: 'College Company',
    stage: 'Commercialization strategy in development',
    category: 'Collegiate IP, Media, Education & Commercialization',
    problem:
      'How can collegiate brands, programs and participation become rights-aware, fundable commercial systems?',
    emphasis: 'Education · Media · Participation · Rights · Commercialization',
    need: 'College operators · campus leaders · brands · media partners',
  },
  {
    name: 'EsportsX',
    stage: 'Portfolio development',
    category: 'Esports IP & Licensing',
    problem:
      'How can esports IP, education, brands and operating assets be structured for scalable licensing?',
    emphasis: 'Ownership · Rights · Licensing · Education · Media · Commerce',
    need: 'Operators · educators · licensing partners',
  },
];
export const researchTracks = [
  [
    '01',
    'Verifiable Human–AI Credentials',
    'AGONiQ',
    'Can competency records become independently verifiable and portable between universities, employers and institutions?',
  ],
  [
    '02',
    'Digital Asset & IP Registry',
    'National Brand Group',
    'Can NBG structure provenance and rights across domains, brands, research, media, curricula and software?',
  ],
  [
    '03',
    'Programmable Global Settlement',
    'Portfolio-wide research',
    'How can global partnerships, royalties, prize payments, sponsorships and grants settle more transparently?',
  ],
  [
    '04',
    'Campus Participation & Commercial Readiness',
    'College Company',
    'How can campus participants, institutions and commercial partners create programs with clear permissions, responsibilities and value exchange?',
  ],
  [
    '05',
    'Creator & Producer Economics',
    'Cross-portfolio research',
    'Can provenance and programmable revenue-sharing improve creator participation?',
  ],
];

export type Venture = {
  slug: string;
  name: string;
  stage: string;
  maturity: 'Priority';
  category: string;
  statement: string;
  description: string;
  components: string[];
  focus: string;
  needs: string[];
  systems: string[];
  narrativeTitle: string;
  narrative: string[];
  note?: string;
  relatedConcepts?: string[];
};

export const portfolio: Venture[] = [
  {
    slug: 'agoniq',
    name: 'AGONiQ',
    stage: 'Architecture in development',
    maturity: 'Priority',
    category: 'Human–AI Performance Infrastructure',
    statement: 'Cognitive competition. Human ingenuity. AI in play.',
    description:
      'AGONiQ is developing a new arena for human–AI performance: structured challenges where outcomes matter, the process is visible and capability can be demonstrated.',
    narrativeTitle: 'Make human–AI performance observable.',
    narrative: [
      'Most AI evaluation measures the model. AGONiQ focuses on the human working with it—how people frame a problem, evaluate evidence, direct systems and take responsibility for the result.',
      'Competition formats, scoring systems, participant records and media experiences are being developed as connected parts of that performance infrastructure. An initial university pilot is being scoped for collaborative validation.',
    ],
    components: [
      'Intelligence',
      'Trust',
      'Identity',
      'Credentials',
      'Governance',
    ],
    focus:
      'Advancing the architecture toward a scoped university pilot and partner validation.',
    needs: [
      'University hosts',
      'Research collaborators',
      'Technology partners',
      'Founding sponsors',
    ],
    systems: [
      'Structured challenge formats',
      'Visible human–AI process',
      'Performance scoring',
      'Participant records',
      'Media experiences',
    ],
    relatedConcepts: [
      'Warzai explores multimodal challenges across written, visual and mixed-media work.',
      'Cerebran explores workplace and team-based applications of human–AI capability.',
    ],
  },
  {
    slug: 'patients-intelligence',
    name: 'Patients Intelligence',
    stage: 'Exploratory initiative',
    maturity: 'Priority',
    category: 'Patient-Centered AI',
    statement:
      'Your information. Better questions. More informed care conversations.',
    description:
      'Patients Intelligence explores a trusted layer between patient-generated information, AI-assisted research and human care—helping people prepare for clinical conversations without replacing professional judgment.',
    narrativeTitle: 'Turn scattered information into a clearer conversation.',
    narrative: [
      'Patients already arrive with symptom notes, histories, questions, wearable data and AI-generated answers. The opportunity is to help them organize that material, examine sources and distinguish personal observations from documented information and AI interpretation.',
      'The proposed experience centers patient control, provenance, uncertainty, privacy and clinician authority. Patient-reviewed summaries and questions could support a more prepared handoff to care, subject to a bounded pilot designed with clinical and patient stakeholders.',
    ],
    components: [
      'Patient control',
      'Provenance',
      'Uncertainty',
      'Privacy',
      'Clinician authority',
    ],
    focus:
      'Designing a bounded validation pathway with healthcare, research and patient stakeholders.',
    needs: [
      'Patient advocates',
      'Clinical collaborators',
      'Health systems',
      'Researchers',
      'Technology partners',
    ],
    systems: [
      'Patient-controlled intake',
      'Source-aware organization',
      'Patient-reviewed summaries',
      'Question preparation',
      'Professional review pathway',
    ],
    note: 'Patients Intelligence is not a diagnostic or treatment service. Any pilot would preserve clinician authority and clearly separate patient observations, sourced information and AI interpretation.',
  },
  {
    slug: 'college-company',
    name: 'College Company',
    stage: 'Commercialization strategy in development',
    maturity: 'Priority',
    category: 'Collegiate IP, Media, Education & Commercialization',
    statement: 'Turning collegiate potential into enduring value.',
    description:
      'College Company is NBG’s collegiate IP, media, education and commercialization initiative. It is being shaped to turn collegiate brands, events, content, educational know-how and selected digital assets into programs that institutions and sponsors can buy, operators can license and strategic buyers can acquire.',
    narrativeTitle: 'Build focused commercial systems—not a collection of domains.',
    narrative: [
      'The proposed model connects institutional advisory and program design, participation and event formats, media and education, and IP licensing or transactions. College EsportsX, College Esports Expo and College Esports Network each have a distinct potential role, subject to rights, demand and operating validation.',
      'The immediate strategy is to validate through paid services and partner delivery, then license, partner or sell selectively when rights and commercial evidence support the next step. Not every asset is intended to become a standalone website or operating business.',
    ],
    components: [
      'Institutional strategy',
      'Participation',
      'Media & education',
      'Rights & licensing',
      'Commercialization',
    ],
    focus:
      'Validating one buyer-funded program or license opportunity with a clear rights, delivery and economics path.',
    needs: [
      'Collegiate event operators',
      'Campus program leaders',
      'Brands and agencies',
      'Media partners',
      'Rights and licensing partners',
    ],
    systems: [
      'Paid design and validation engagements',
      'Permissioned participation and event formats',
      'Original media and education resources',
      'Rights and dependency registers',
      'Selective licenses, partnerships and transactions',
    ],
    note: 'College Company is at a commercialization-validation stage. Asset title, institutional permissions, buyer demand, operating delivery and pricing must be verified before any offer, license or transaction advances.',
  },
  {
    slug: 'esportsx',
    name: 'EsportsX',
    stage: 'Portfolio development',
    maturity: 'Priority',
    category: 'Esports IP & Venture Development',
    statement: 'Acquire the opportunity. Accelerate the entry.',
    description:
      'EsportsX brings together selected esports brands, digital assets and venture-development opportunities for organizations seeking a faster, more structured entry into competitive gaming.',
    narrativeTitle: 'A flexible path into esports.',
    narrative: [
      'Opportunities may include acquisition, asset packages, licensing, joint development or operating partnerships. NBG can support positioning, concept development, partnership design and go-to-market planning around the selected opportunity.',
      'Each engagement is evaluated on its own merits. Rights and asset schedules must be verified, terms made clear, and audience, revenue and operating assumptions assessed separately before a transaction advances.',
    ],
    components: [
      'Ownership',
      'Rights',
      'Licensing',
      'Development',
      'Media',
      'Commerce',
    ],
    focus:
      'Organizing selected intellectual property and digital assets into clearly scoped, partner-ready opportunities.',
    needs: [
      'Strategic acquirers',
      'Operators',
      'Media organizations',
      'Education partners',
      'Licensing partners',
    ],
    systems: [
      'Opportunity screening',
      'Verified asset schedules',
      'Licensing structures',
      'Joint development pathways',
      'Go-to-market support',
    ],
    note: 'Availability, ownership, audience and commercial potential require opportunity-specific diligence. No asset or transaction is represented as approved until terms and rights are verified.',
  },
];

export const advisoryServices = [
  [
    '01',
    'Emerging Category Architecture',
    'Identify the standards, governance, evidence, rights and participation systems an emerging market needs beyond a product.',
  ],
  [
    '02',
    'AI & Human–AI Strategy',
    'Determine where AI should support research, decisions, workforce development and operations—with appropriate human oversight.',
  ],
  [
    '03',
    'Trust, Evidence & Governance',
    'Design measurement, verification, accountability and risk controls that help new systems earn institutional confidence.',
  ],
  [
    '04',
    'Digital Ownership & Rights',
    'Explore infrastructure for intellectual property, attribution, provenance, licensing, royalties and permissions.',
  ],
  [
    '05',
    'Venture & Portfolio Architecture',
    'Turn insights and strategic assets into structured opportunities through disciplined validation and stage-based development.',
  ],
  [
    '06',
    'Partnership & Ecosystem Design',
    'Define how institutions, technology companies, operators, investors and communities can assemble complementary capabilities.',
  ],
];

export const faqs = [
  [
    'What is an Institution Studio?',
    'An Institution Studio works beyond individual products or companies. It helps design the standards, governance, evidence, ownership systems, economic rails and partnerships that allow an emerging category to function credibly.',
  ],
  [
    'How is NBG different from a traditional venture studio?',
    'NBG begins with an institutional gap, then determines what combination of research, technology, governance, ventures and partnerships is appropriate. Venture creation is one instrument within the larger architecture.',
  ],
  [
    'Does every NBG system use blockchain?',
    'No. Blockchain is considered only when it creates a material advantage in verification, provenance, rights, settlement or cross-organizational trust. If a conventional database or payment system solves the problem better, NBG uses it.',
  ],
  [
    'What stage are the portfolio initiatives in?',
    'Stages vary. The site distinguishes priority architecture, exploratory initiatives, prototype concepts and portfolio development. Each detail page identifies the initiative’s current stage, development focus and partnership needs.',
  ],
  [
    'What kinds of partners is NBG seeking?',
    'Relevant partners may include technology platforms, universities, employers, health systems, operators, investors, standards organizations, creators and community institutions. Specific needs appear on each portfolio page.',
  ],
  [
    'How does NBG evaluate new opportunities?',
    'NBG moves from opportunity and institutional gap through architecture, validation, partnership design, evidence, sustainable economics and stewardship. Ideas do not advance on naming or technology alone.',
  ],
];
