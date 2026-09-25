import Image from 'next/image';
import Link from '@/components/durable-link';
import { ArrowLeft } from 'lucide-react';

const sectionNavigation = [
  ['Model', '/model'],
  ['Architecture', '/architecture'],
  ['Ventures', '/ventures'],
  ['Research', '/research'],
  ['Partnerships', '/partnerships'],
] as const;

export function SourcePageNav({ backLabel = 'Home', backHref = '/' }) {
  return (
    <header className="detail-nav">
      <Link className="detail-nav-back" href={backHref}>
        <ArrowLeft size={15} /> {backLabel}
      </Link>
      <nav className="detail-nav-links" aria-label="Section navigation">
        {sectionNavigation.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <Link className="wordmark" href="/" aria-label="National Brand Group home">
        <Image
          className="brand-logo"
          src="/images/national-brand-group-logo-white.png"
          alt=""
          width={466}
          height={146}
        />
      </Link>
    </header>
  );
}
