'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navigation = [
  ['Model', '/model'],
  ['Advisory', '/advisory'],
  ['Architecture', '/architecture'],
  ['Ventures', '/ventures'],
  ['Research', '/research'],
  ['Content Studio', '/#content-studio'],
  ['About', '/about'],
] as const;

export function HomeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="National Brand Group home">
        <Image
          className="brand-logo"
          src="/images/national-brand-group-logo-white.png"
          alt=""
          width={466}
          height={146}
          priority
        />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="/partnerships">
        Build with us <ArrowUpRight size={15} />
      </a>
      <div className="mobile-nav">
        <button
          className="mobile-nav-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          {mobileMenuOpen ? (
            <X size={16} aria-hidden="true" />
          ) : (
            <Menu size={16} aria-hidden="true" />
          )}
        </button>
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav-panel"
            aria-label="Mobile navigation"
          >
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href="/partnerships" onClick={() => setMobileMenuOpen(false)}>
              Build with us <ArrowUpRight size={14} />
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
