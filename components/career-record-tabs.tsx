'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const careerRecord = [
  {
    title: 'National Brand Group',
    text: 'Building an Institution Studio for the Intelligence Economy and developing AGONiQ, Patients Intelligence, Tubaron / Cabo Verde and the EsportsX portfolio through research, partnership design and disciplined validation.',
  },
  {
    title: 'Routledge Handbook of Esports',
    text: 'Co-authored the chapter “Esports Public Relations” with Jana Möglich and Alan Ritacco, extending practical operating experience into the academic record.',
  },
  {
    title: 'Emerson College',
    text: 'Joined Emerson as affiliated faculty and taught esports management and business, connecting industry practice, communications and event design with classroom learning.',
  },
  {
    title: 'HP / AMD / edX esports education',
    text: 'Created and teaches “The What and How of Esports Management,” developed with HP and AMD, delivered through edX and included in HP’s Esports Management and Game Development professional certificate.',
  },
  {
    title: 'National Amusements',
    text: 'Served in senior business-development and strategic-intelligence leadership, exploring how media, gaming, technology and immersive experiences could reshape theatrical exhibition and audience engagement across the National Amusements ecosystem then spanning Viacom and CBS.',
  },
  {
    title: 'Industry advisory and convening',
    text: 'Advisory and consulting work included engagements involving Red Bull, Intel, Sony Music, the U.S. Army and Twitch. Mitchell also co-hosted an esports panel at the U.S. Capitol and moderated a national discussion on esports and the U.S. armed forces.',
  },
  {
    title: 'College Esports Expo',
    text: 'Founded and led a conference platform that brought students, educators and industry operators together around the emerging collegiate esports economy.',
  },
  {
    title: 'Collegiate competition and ecosystem work',
    text: 'Served as co-commissioner of Ivy League Esports and helped organize a six-state Kraft Group / Boston Uprising Overwatch competition involving 32 New England universities.',
  },
  {
    title: 'Film, television, games and live media',
    text: 'Expanded into music supervision, placements and production across feature films, television programming, game franchises, branded entertainment and festival media.',
  },
  {
    title: 'Associated Artists',
    text: 'Founded Codeine Records; served as an executive producer on Lord Tariq & Peter Gunz’s Make It Reign, built around “Déjà Vu (Uptown Baby)”; and managed Nappy Roots during the group’s breakthrough period. These roles spanned artist development, executive production, management, touring, promotion, commercial partnerships and long-term business development.',
  },
  {
    title: 'Major-label apprenticeship',
    text: 'Began in music marketing and promotion, learning how culture, radio, touring, retail and distribution combine to build durable audiences. His early career included work across Sony Music, Def Jam, Geffen, Atlantic and Universal Music environments.',
  },
];

const consultingClients = [
  {
    name: 'Sony',
    category: 'Music and entertainment',
    text: 'Consulting work connected to music marketing, artist strategy and audience development.',
  },
  {
    name: 'Atlantic Records',
    category: 'Recorded music',
    text: 'Engagements connected to label strategy, artists and release development.',
  },
  {
    name: 'Universal Music',
    category: 'Music and commercialization',
    text: 'Advisory work spanning artist, audience and market development.',
  },
  {
    name: 'Cognizant',
    category: 'Technology and innovation',
    text: 'Consulting connected to emerging technology, gaming and digital engagement.',
  },
  {
    name: 'Disney / Touchstone',
    category: 'Film and media',
    text: 'Music, production and entertainment work connected to screen properties.',
  },
  {
    name: 'National Amusements',
    category: 'Media and theatrical exhibition',
    text: 'Business-development and strategic-intelligence leadership within the parent-company ecosystem then spanning Viacom and CBS.',
  },
  {
    name: 'U.S. Army',
    category: 'Gaming and esports engagement',
    text: 'Advisory and convening work examining esports as a channel for engagement, recruitment and institutional participation.',
  },
];

export function CareerRecordTabs() {
  return (
    <Tabs defaultValue="career" className="career-record-tabs">
      <TabsList
        className="career-tabs-list"
        variant="line"
        aria-label="Kevin Mitchell career information"
      >
        <TabsTrigger value="career">Career record</TabsTrigger>
        <TabsTrigger value="consulting">Consulting</TabsTrigger>
      </TabsList>

      <TabsContent value="career" className="career-tab-panel career-panel">
        {careerRecord.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </TabsContent>

      <TabsContent
        value="consulting"
        className="career-tab-panel consulting-panel"
      >
        <div className="consulting-intro">
          <h3>Selected consulting clients</h3>
          <p>
            Engagements across music, media, technology, entertainment and
            institutional esports.
          </p>
        </div>
        {consultingClients.map((client) => (
          <article key={client.name}>
            <div className="record-date">
              <span>{client.category}</span>
            </div>
            <h3>{client.name}</h3>
            <p>{client.text}</p>
          </article>
        ))}
      </TabsContent>
    </Tabs>
  );
}
