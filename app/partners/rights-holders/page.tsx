import type { Metadata } from 'next';
import { audiencePages, PartnerAudiencePage } from '@/components/partner-audience-page';
export const metadata: Metadata = { title: 'For Rights Holders | National Brand Group', description: 'Rights-holder partnership pathways with National Brand Group.' };
export default function RightsHoldersPage() { return <PartnerAudiencePage audience={audiencePages.rights_holders} />; }
