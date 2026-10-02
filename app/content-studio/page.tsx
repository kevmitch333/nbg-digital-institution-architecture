import { pageMetadata } from '@/lib/seo';
import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { ContentStudio } from '@/components/content-studio';
import { SourcePageNav } from '@/components/source-page-nav';

export const metadata = pageMetadata(
  '/content-studio/',
  'Content Studio | National Brand Group',
  'Original media, participatory experiences and learning simulations developed through the National Brand Group Institution Studio.',
);

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
      <figure className="source-image-band source-image-band-studio">
        <img
          src="/images/nbg-content-simulation-studio-v1.png"
          alt="A Black male creative director guides a diverse production team testing an interactive story inside a virtual production studio."
          width="1672"
          height="941"
          loading="lazy"
        />
        <figcaption>
          <span>Content as simulation</span> Story worlds become spaces to test
          decisions, participation and learning before larger productions.
        </figcaption>
      </figure>
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
