import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'National Brand Group | Institution Studio',
  description: 'National Brand Group designs the institutional infrastructure that helps emerging categories become trusted, functioning markets.',
  keywords: ['institution studio','AI governance','digital ownership','human-AI collaboration','institutional infrastructure'],
  openGraph: {title:'Build the Institutions the Future Requires',description:'National Brand Group is an Institution Studio for the Intelligence Economy.',type:'website',siteName:'National Brand Group'},
  twitter: {card:'summary',title:'National Brand Group | Institution Studio',description:'Institutional infrastructure for emerging markets.'},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a className="skip-link" href="#model">Skip to content</a>{children}
      </body>
    </html>
  );
}
