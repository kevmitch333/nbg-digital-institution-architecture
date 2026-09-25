import { ArrowUpRight } from 'lucide-react';

const capabilities = [
  ['01', 'Narrative & production', 'Turn research, cultural material and venture ideas into original stories, vertical micro-dramas and educational series. Combine human creative direction with AI-assisted and hybrid production.'],
  ['02', 'Interactive story worlds', 'Extend stories into explorable environments, branching narratives and community challenges that let people influence what happens next.'],
  ['03', 'Rights & participation', 'Build contributor consent, cultural attribution, asset provenance and licensing into each project, with clear terms for ownership and revenue participation.'],
  ['04', 'Simulation & learning', 'Design scenarios for people to practice decisions, collaborate with AI and learn through experience, with measurement suited to the purpose.'],
];

export function ContentStudio() {
  return (
    <section className="content-studio" id="content-studio" aria-labelledby="studio-title">
      <div className="studio-intro">
        <div>
          <div className="section-index">09 / NBG CONTENT STUDIO</div>
          <span className="studio-stage">Capability in development</span>
        </div>
        <div>
          <h2 id="studio-title">Stories to watch.<br />Worlds to enter.</h2>
          <p>NBG is developing a creative capability within the Institution Studio to turn ideas, cultural assets and venture IP into original media, participatory experiences and learning simulations.</p>
          <p>Content becomes a way to bring communities together, explore ideas and build intellectual property that can grow across formats.</p>
        </div>
      </div>
      <div className="studio-capabilities">
        {capabilities.map(([number, title, copy]) => (
          <article key={number}>
            <span className="studio-number">{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className="studio-pilots">
        <div className="studio-pilot-heading">
          <span className="studio-label">Proposed pilot directions</span>
          <h3>Start with a story.<br />Prove the experience.</h3>
          <p>Small demonstrations would test creative quality, participation and learning before larger productions or persistent worlds.</p>
        </div>
        <div className="studio-pilot-list">
          <article><h4>Cabo Verde story world</h4><p>A focused cultural journey connecting football, island life and diaspora stories through one location, a central character and a few meaningful choices. Developed with cultural contributors and clear attribution.</p></article>
          <article><h4>AGONiQ performance scenarios</h4><p>Repeatable simulations for human–AI collaboration, evidence assessment and strategic decisions, designed to support education, workforce readiness and research.</p></article>
          <article><h4>Chemxcons original universe</h4><p>An early concept for element-inspired characters and serialized vertical dramas, with potential for branching stories and a separate, fact-checked science-learning series.</p></article>
        </div>
      </div>
      <div className="studio-closing">
        <p><strong>Human direction. Clear rights. Measurable purpose.</strong><br />The studio vision connects creators, cultural institutions, universities and technology partners around projects with agreed ownership, oversight and evidence of value.</p>
        <a className="section-link" href="/partnerships">Discuss a Content Studio pilot <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
