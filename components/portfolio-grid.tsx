'use client';

import Link from '@/components/durable-link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/content/site';
import { ventureImagery } from '@/content/imagery';

const filters = [
  'All',
  'Priority',
  'Architecture extension',
  'Portfolio development',
] as const;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const shown =
    filter === 'All'
      ? portfolio
      : portfolio.filter((venture) => venture.maturity === filter);

  return (
    <div>
      <fieldset className="portfolio-filters">
        <legend className="sr-only">Filter portfolio by maturity</legend>
        {filters.map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
            <span>
              {item === 'All'
                ? portfolio.length
                : portfolio.filter((venture) => venture.maturity === item)
                    .length}
            </span>
          </button>
        ))}
      </fieldset>
      <p className="filter-result" aria-live="polite">
        Showing {shown.length} initiatives
      </p>
      <div className="venture-grid">
        {shown.map((venture, index) => (
          <article
            key={venture.slug}
            className={venture.slug === 'agoniq' ? 'featured' : ''}
          >
            {venture.maturity === 'Priority' && ventureImagery[venture.slug] && (
              <div className="venture-card-image">
                <img
                  src={ventureImagery[venture.slug].src}
                  alt=""
                  width="1672"
                  height="941"
                  loading="lazy"
                  style={{ objectPosition: ventureImagery[venture.slug].position }}
                />
              </div>
            )}
            <div>
              <span className="status">{venture.stage}</span>
              <span className="venture-no">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="maturity">{venture.maturity}</p>
            <h3>{venture.name}</h3>
            <p className="category">{venture.category}</p>
            <p className="question">{venture.question}</p>
            <p className="venture-summary">{venture.description}</p>
            <div className="evidence">
              <span>Current focus</span>
              {venture.focus}
            </div>
            <Link
              className="detail-link"
              href={`/ventures/${venture.slug}`}
            >
              Explore architecture <ArrowUpRight size={15} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
