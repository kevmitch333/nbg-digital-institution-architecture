'use client';

import { useRef, useState } from 'react';
import { architectureLayers } from '@/content/site';

export function ArchitectureExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const item = architectureLayers[active];

  const activate = (index: number) => {
    setActive(index);
    requestAnimationFrame(() => tabs.current[index]?.focus());
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = architectureLayers.length - 1;
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = index === last ? 0 : index + 1;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = index === 0 ? last : index - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = last;
    if (next !== index) {
      event.preventDefault();
      activate(next);
    }
  };

  return (
    <div className="architecture-explorer">
      <div className="layer-list" role="tablist" aria-label="Institution architecture layers">
        {architectureLayers.map((layer, index) => (
          <button
            aria-controls="architecture-layer-panel"
            aria-selected={active === index}
            id={`architecture-tab-${index}`}
            key={layer.n}
            onClick={() => activate(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            ref={(element) => { tabs.current[index] = element; }}
            role="tab"
            tabIndex={active === index ? 0 : -1}
          >
            <span>{layer.n}</span>{layer.name}
          </button>
        ))}
      </div>
      <article aria-labelledby={`architecture-tab-${active}`} className="layer-detail" id="architecture-layer-panel" role="tabpanel">
        <span className="status">Layer {item.n}</span>
        <h3>{item.purpose}</h3>
        <dl>
          <div><dt>Institutional problem</dt><dd>{item.problem}</dd></div>
          <div><dt>Systems involved</dt><dd>{item.tech}</dd></div>
          <div><dt>NBG examples</dt><dd>{item.examples}</dd></div>
          <div><dt>Potential partners</dt><dd>{item.partners}</dd></div>
        </dl>
      </article>
    </div>
  );
}
