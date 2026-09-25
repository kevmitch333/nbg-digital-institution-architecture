import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const directory = [
  ['Model', '/model'],
  ['Strategic Advisory', '/advisory'],
  ['Architecture', '/architecture'],
  ['Ventures', '/ventures'],
  ['Research', '/research'],
  ['Content Studio', '/#content-studio'],
  ['About NBG', '/about'],
  ['Kevin Mitchell', '/founder'],
  ['Partnerships', '/partnerships'],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a className="wordmark" href="/" aria-label="National Brand Group home">
          <Image
            className="brand-logo"
            src="/images/national-brand-group-logo-white.png"
            alt=""
            width={466}
            height={146}
          />
        </a>
        <p>Institution Studio for the Intelligence Economy</p>
      </div>
      <nav className="footer-directory" aria-label="Site directory">
        {directory.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="footer-actions">
        <script
          src="https://cdn.sendfox.com/js/embed.js"
          data-form="3ljpv0"
          data-api="https://sendfox.com"
          async
        />
        <a className="footer-cta" href="/partnerships">
          Start a conversation <ArrowUpRight size={14} />
        </a>
      </div>
      <small>© {new Date().getFullYear()} National Brand Group. Portfolio initiatives are presented at their current stage of development.</small>
    </footer>
  );
}
