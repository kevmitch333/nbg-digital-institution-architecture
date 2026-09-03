import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kevin Mitchell | Founder, Venture Architect & Institution Builder',
  description: 'The verified public record and operating thesis of Kevin Mitchell, founder of National Brand Group.',
};

const record = [
  {year:'2017',title:'Esports education at Emerson College',text:'Emerson documented Mitchell as a National Amusements executive who would co-teach its new Introduction to Esports Management course within the Sports Communication major.'},
  {year:'2018',title:'College Esports Expo and experiential learning',text:'Emerson identified Mitchell as affiliated faculty teaching esports and documented the first College Esports Expo, followed by student participation in the inaugural Boston Uprising Collegiate Cup.'},
  {year:'2020',title:'Convening an emerging field',text:'Emerson described Mitchell as founder and managing director of the College Esports Expo and credited his leadership in the development of the College’s esports curriculum.'},
  {year:'2022',title:'Industry perspective',text:'Emerson identified Mitchell as Communication Studies affiliated faculty and College EsportsX CEO in coverage of his commentary on esports and regulated sports wagering.'},
  {year:'2024',title:'Routledge Handbook of Esports',text:'Mitchell co-authored the chapter “Esports Public Relations” with Jana Möglich and Alan Ritacco.'},
];

const sources = [
  ['Emerson College faculty directory','https://emerson.edu/faculty/?_programs%5B%5D=Sports+Communication'],
  ['Emerson · Esports education record (2017)','https://today.emerson.edu/2017/07/10/students-serve-as-emerson-esports-ambassadors-at-gaming-conference/'],
  ['Emerson · College Esports Expo (2018)','https://today.emerson.edu/2018/04/04/emerson-offering-expo-to-connect-esports-to-academia/'],
  ['Emerson · Boston Uprising Collegiate Cup (2018)','https://today.emerson.edu/2018/12/12/emerson-esports-students-rise-to-occasion-with-overwatch-tournament/'],
  ['Emerson · Third annual College Esports Expo (2020)','https://today.emerson.edu/2020/04/21/emerson-students-host-third-annual-college-esports-expo/'],
  ['Emerson · Industry commentary (2022)','https://today.emerson.edu/2022/09/14/mitchell-on-esports-gambling-in-ma-masslive/'],
  ['Routledge · Handbook contributor record','https://www.routledge.com/Routledge-Handbook-of-Esports/Jenny-Besombes-Brock-Cote-Scholz/p/book/9781032531502'],
] as const;

export default function Founder() {
  return <main className="detail-page founder-page">
    <header className="detail-nav"><Link href="/#about"><ArrowLeft size={15}/> About NBG</Link><Link className="wordmark" href="/"><span className="mark">N</span><span>National Brand Group</span></Link></header>
    <section className="founder-hero">
      <div className="founder-kicker">Founder <span>·</span> Venture Architect <span>·</span> Institution Builder</div>
      <div className="founder-hero-grid">
        <div><h1>Kevin<br/>Mitchell</h1><p>A cross-disciplinary builder working where culture, media, education, competitive gaming, artificial intelligence and institutional design converge.</p></div>
        <div className="founder-signal" aria-label="The operating pattern connects culture, media, education, esports, artificial intelligence and institutional design">{['Culture','Media','Education','Esports','AI','Institutions'].map((item,index)=><span key={item} style={{'--i':index} as React.CSSProperties}>{item}</span>)}<strong>NBG</strong></div>
      </div>
    </section>
    <section className="founder-story">
      <div><div className="section-index">The operating pattern</div><h2>Build the infrastructure before the category is obvious.</h2></div>
      <div><p>Kevin Mitchell’s public record shows a consistent pattern: enter an emerging field early, connect education to industry, and create the operating structures that help people participate.</p><p>At Emerson College, that meant helping students learn the business and production of esports through coursework, conferences and live competition. At National Brand Group, the same pattern becomes a repeatable method: identify an institutional gap, assemble the necessary systems and partners, test the architecture, and build toward durable participation.</p><p>This page deliberately separates documented history from forward-looking NBG architecture. Earlier NBG sites contained additional career, commercial and partnership claims; those remain outside the public record until supporting evidence is approved.</p></div>
    </section>
    <section className="founder-principles">
      <div className="section-index">Founder method</div>
      <div className="principle-grid"><article><span>01</span><h2>See the convergence</h2><p>Recognize when previously separate fields are becoming one operating environment.</p></article><article><span>02</span><h2>Find the missing institution</h2><p>Define the standards, education, evidence, governance and ownership systems the category lacks.</p></article><article><span>03</span><h2>Build through participation</h2><p>Bring students, practitioners, institutions and technology partners into the architecture.</p></article></div>
    </section>
    <section className="record"><div className="section-index">Selected verified record</div>{record.map(item=><article key={item.year}><span>{item.year}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</section>
    <section className="source-panel"><h2>Evidence, not mythology.</h2><p>Primary institutional and publisher sources are linked directly so partners can evaluate the public record for themselves.</p><div>{sources.map(([label,href])=><a href={href} target="_blank" rel="noreferrer" key={href}>{label} <ExternalLink size={13}/></a>)}</div></section>
    <section className="detail-cta"><div><span className="section-index">National Brand Group</span><h2>See how the founder’s operating pattern becomes an institution-building model.</h2></div><Link className="button primary" href="/#model">Explore the NBG model <ArrowUpRight size={15}/></Link></section>
  </main>;
}
