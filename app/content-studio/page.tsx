import type { Metadata } from 'next';
import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { ContentStudio } from '@/components/content-studio';
import { SourcePageNav } from '@/components/source-page-nav';

export const metadata: Metadata = {
  title: 'Content Studio | National Brand Group',
  description:
    'Original media, participatory experiences and learning simulations developed through the National Brand Group Institution Studio.',
};

export default function ContentStudioPage() {
  return (
    <main
      id="main-content"
      className="detail-page source-page content-studio-page"
    >
      <SourcePageNav />
      <section className="source-hero">
        <span className="status">NBG Content Studio</span>
        <h1>
          Stories to watch.
          <br />
          Worlds to enter.
        </h1>
        <p>
          Creative development becomes part of institution building when stories
          carry clear rights, meaningful participation and a measurable purpose.
        </p>
      </section>
      <ContentStudio />
      <section className="source-next">
        <div>
          <span className="section-index">Build together</span>
          <h2>Start with a focused pilot.</h2>
        </div>
        <Link className="button primary" href="/partnerships">
          Discuss a pilot <ArrowUpRight size={15} />
        </Link>
      </section>
    </main>
  );
}
