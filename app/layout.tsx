import type { Metadata } from 'next';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import './globals.css';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'National Brand Group | Institution Studio',
  description:
    'National Brand Group designs the institutional infrastructure that helps emerging categories become trusted, functioning markets.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  keywords: [
    'institution studio',
    'AI governance',
    'digital ownership',
    'human-AI collaboration',
    'institutional infrastructure',
  ],
  openGraph: {
    title: 'Build the Institutions the Future Requires',
    description:
      'National Brand Group is an Institution Studio for the Intelligence Economy.',
    type: 'website',
    siteName: 'National Brand Group',
  },
  twitter: {
    card: 'summary',
    title: 'National Brand Group | Institution Studio',
    description: 'Institutional infrastructure for emerging markets.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
