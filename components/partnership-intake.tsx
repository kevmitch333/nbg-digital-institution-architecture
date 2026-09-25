'use client';
import { useState } from 'react';
const paths = [
  'Technology partner',
  'Institutional partner',
  'Strategic investor',
  'Operating partner',
  'Community & market partner',
  'Media & research',
];
export function PartnershipIntake() {
  const [path, setPath] = useState('');
  return (
    <form
      className="intake"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const field = (name: string) => {
          const value = data.get(name);
          return typeof value === 'string' ? value : '';
        };
        const subject = `NBG partnership inquiry — ${path}`;
        const body = [
          `Partnership path: ${path}`,
          `Name: ${field('name')}`,
          `Organization: ${field('organization')}`,
          `Email: ${field('email')}`,
          '',
          field('message'),
        ].join('\n');
        window.location.href = `mailto:hello@nationalbrandgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }}
    >
      <fieldset>
        <legend>I’m approaching NBG as a…</legend>
        <div className="path-grid">
          {paths.map((x) => (
            <button
              type="button"
              aria-pressed={path === x}
              onClick={() => setPath(x)}
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
      </fieldset>
      {path && (
        <div className="intake-fields">
          <label>
            Name
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Organization
            <input name="organization" autoComplete="organization" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            What could we build together?
            <textarea name="message" required rows={4} />
          </label>
          <button className="button primary" type="submit">
            Continue by email
          </button>
          <p className="intake-note">
            Opens your email app. This site does not store your information.
          </p>
        </div>
      )}
    </form>
  );
}
