import type { MetadataRoute } from 'next';
import { portfolio } from '@/content/site';
import { siteUrl } from '@/lib/seo';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/about/',
    '/advisory/',
    '/architecture/',
    '/content-studio/',
    '/founder/',
    '/model/',
    '/partnerships/',
    '/research/',
    '/ventures/',
    ...portfolio.map((v) => '/ventures/' + v.slug + '/'),
  ];
  return paths.map((path) => ({ url: siteUrl + path }));
}
