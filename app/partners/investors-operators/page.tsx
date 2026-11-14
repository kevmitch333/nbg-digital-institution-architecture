import type { Metadata } from 'next';
import { audiencePages, PartnerAudiencePage } from '@/components/partner-audience-page';
export const metadata: Metadata = { title: 'For Investors & Operators | National Brand Group', description: 'Investor and strategic operator partnership pathways with National Brand Group.' };
export default function InvestorsOperatorsPage() { return <PartnerAudiencePage audience={audiencePages.investors_operators} />; }
