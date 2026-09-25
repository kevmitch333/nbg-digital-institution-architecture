import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'National Brand Group',
    short_name: 'NBG',
    description: 'Institution Studio for the Intelligence Economy',
    start_url: '/',
    display: 'standalone',
    background_color: '#090a0d',
    theme_color: '#090a0d',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
