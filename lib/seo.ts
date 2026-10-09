import type { Metadata } from 'next';

export const siteUrl = 'https://nationalbrandgroup.com';
export const socialImage = {
  url: '/images/nbg-institution-architecture-hero-v2.jpg',
  alt: 'National Brand Group — Institution Studio for the Intelligence Economy',
};

export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      siteName: 'National Brand Group',
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
  };
}
