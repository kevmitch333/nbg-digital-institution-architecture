import Link from '@/components/durable-link';
import { ArrowUpRight, Building2, Landmark, Network, Rocket } from 'lucide-react';

const pathways = [
  { href: '/partners/institutions', label: 'Universities & institutions', copy: 'Design a validation pathway, credential, governance model or new category program.', icon: Building2 },
  { href: '/partners/technology-ai', label: 'Technology & AI partners', copy: 'Apply your platform to a real institutional problem with evidence, oversight and adoption in view.', icon: Network },
  { href: '/partners/investors-operators', label: 'Investors & strategic operators', copy: 'Explore emerging-market infrastructure, venture architecture and aligned operating opportunities.', icon: Landmark },
  { href: '/partners/rights-holders', label: 'Rights holders', copy: 'Structure rights, licensing, attribution and asset participation for partner-ready growth.', icon: Rocket },
];

export function PartnerPathways() {
  return (
    <section className="partner-pathways" id="partner-pathways" aria-labelledby="partner-pathways-title">
      <div className="section-head">
        <div className="section-index">START HERE / PARTNERSHIP PATHWAYS</div>
        <h2 id="partner-pathways-title">Choose the work that brings you here.</h2>
        <p>NBG works with different partners in different ways. Start with the opportunity closest to your organization.</p>
      </div>
      <div className="pathway-grid">
        {pathways.map(({ href, label, copy, icon: Icon }) => (
          <Link className="pathway-card" href={href} key={href}>
            <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
            <h3>{label}</h3>
            <p>{copy}</p>
            <span>See your partnership path <ArrowUpRight size={15} /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
