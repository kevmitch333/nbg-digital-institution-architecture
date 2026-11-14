import type { Metadata } from 'next';
import { audiencePages, PartnerAudiencePage } from '@/components/partner-audience-page';
export const metadata: Metadata = { title: 'For Institutions | National Brand Group', description: 'Institutional partnership pathways with National Brand Group.' };
export default function InstitutionsPage() { return <PartnerAudiencePage audience={audiencePages.institutions} />; }
