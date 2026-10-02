'use client';

import Link from '@/components/durable-link';
import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/content/site';
import { ventureImagery } from '@/content/imagery';

export function PortfolioGrid() {
  return (
    <div>
      <p className="filter-result">Four focused initiatives</p>
      <div className="venture-grid">
        {portfolio.map((venture, index) => (
          <article
            key={venture.slug}
            className={venture.slug === 'agoniq' ? 'featured' : ''}
          >
            {venture.maturity === 'Priority' &&
              ventureImagery[venture.slug] && (
                <div className="venture-card-image">
                  <img
                    src={ventureImagery[venture.slug].src}
                    alt=""
                    width="1672"
                    height="941"
                    loading="lazy"
                    style={{
                      objectPosition: ventureImagery[venture.slug].position,
                    }}
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
            <p className="question">{venture.statement}</p>
            <p className="venture-summary">{venture.description}</p>
            <div className="evidence">
              <span>Current focus</span>
              {venture.focus}
            </div>
            <Link className="detail-link" href={`/ventures/${venture.slug}`}>
              Explore architecture <ArrowUpRight size={15} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
