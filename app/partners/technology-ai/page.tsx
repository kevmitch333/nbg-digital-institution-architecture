import type { Metadata } from 'next';
import { audiencePages, PartnerAudiencePage } from '@/components/partner-audience-page';
export const metadata: Metadata = { title: 'For Technology & AI Partners | National Brand Group', description: 'Technology and AI partnership pathways with National Brand Group.' };
export default function TechnologyPage() { return <PartnerAudiencePage audience={audiencePages.technology} />; }
