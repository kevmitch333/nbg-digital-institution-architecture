'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/content/site';

const filters=['All','Priority','Architecture extension','Portfolio development'] as const;
export function PortfolioGrid(){const [filter,setFilter]=useState<(typeof filters)[number]>('All');const shown=filter==='All'?portfolio:portfolio.filter(v=>v.maturity===filter);return <div><div className="portfolio-filters" role="group" aria-label="Filter portfolio by maturity">{filters.map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}<span>{f==='All'?portfolio.length:portfolio.filter(v=>v.maturity===f).length}</span></button>)}</div><p className="filter-result" aria-live="polite">Showing {shown.length} initiatives</p><div className="venture-grid">{shown.map((v,i)=><article key={v.slug} className={v.slug==='agoniq'?'featured':''}><div><span className="status">{v.stage}</span><span className="venture-no">{String(i+1).padStart(2,'0')}</span></div><p className="maturity">{v.maturity}</p><h3>{v.name}</h3><p className="category">{v.category}</p><p className="question">{v.question}</p><p className="venture-summary">{v.description}</p><div className="evidence"><span>Evidence status</span>{v.evidence}</div><Link className="detail-link" href={`/ventures/${v.slug}`}>Explore architecture <ArrowUpRight size={15}/></Link></article>)}</div></div>}
