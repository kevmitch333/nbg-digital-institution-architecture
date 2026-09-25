export type VentureImage = {
  src: string;
  alt: string;
  position?: string;
};

export const ventureImagery: Record<string, VentureImage> = {
  agoniq: {
    src: '/images/agoniq-team-competition.webp',
    alt: 'A diverse five-person AGONiQ team collaborating during a competitive human–AI performance session.',
    position: 'center 42%',
  },
  'patients-intelligence': {
    src: '/images/patients-intelligence-guided-review-v2.webp',
    alt: 'A patient leads a collaborative review of prepared health information with a clinician and patient advocate.',
    position: 'center 45%',
  },
  'tubaron-cabo-verde': {
    src: '/images/tubaron-community-innovation-v2.webp',
    alt: 'Cape Verdean students and mentors connect sport, culture, education, and community projects beside a coastal football field.',
    position: 'center 48%',
  },
  esportsx: {
    src: '/images/esportsx-gaming-team-v2.webp',
    alt: 'A diverse esports team in coordinated jerseys collabor during practice in a modern gaming lab.',
    position: 'center 44%',
  },
  warzai: {
    src: '/images/warzai-creative-challenge-v2.webp',
    alt: 'Creative teams develop and evaluate written, visual, and audio work during a timed multimodal challenge.',
    position: 'center 46%',
  },
  cerebran: {
    src: '/images/cerebran-enterprise-simulation-v2.webp',
    alt: 'A cross-functional enterprise team rehearses a complex decision using scenario cards and a branching operations map.',
    position: 'center 43%',
  },
  'the-college-company': {
    src: '/images/college-company-innovation-commons-v2.webp',
    alt: 'College students connect technology, media production, and venture design in a campus innovation commons.',
    position: 'center 48%',
  },
  thehomie: {
    src: '/images/thehomie-family-intelligence-v2.webp',
    alt: 'A family uses a private personal-intelligence timeline to coordinate decisions while preserving human agency.',
    position: 'center 46%',
  },
  'artist-intel': {
    src: '/images/artist-intel-rights-strategy-v2.webp',
    alt: 'An independent artist leads a studio strategy session about audience opportunities, releases, and rights.',
    position: 'center 44%',
  },
  'estate-me': {
    src: '/images/estate-me-family-archive-v2.webp',
    alt: 'A multigenerational family organizes estate records, photographs, and digital archives together.',
    position: 'center 46%',
  },
};
