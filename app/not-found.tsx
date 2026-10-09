import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { SourcePageNav } from '@/components/source-page-nav';

export default function NotFound() {
  return (
    <main id="main-content" className="detail-page source-page">
      <SourcePageNav />
      <section className="source-hero not-found-hero">
        <span className="status">Page not found</span>
        <h1>This path does not lead to an active NBG page.</h1>
        <p>The page may have moved or the address may be incomplete. Continue through the portfolio or return to the NBG homepage.</p>
        <div className="not-found-actions">
          <Link className="button primary" href="/">Return home <ArrowUpRight size={15} /></Link>
          <Link className="button ghost" href="/ventures">Explore ventures <ArrowUpRight size={15} /></Link>
        </div>
      </section>
    </main>
  );
}
