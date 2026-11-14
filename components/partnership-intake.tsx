'use client';
import { useEffect, useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
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
  const [inquiry, setInquiry] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const selectedPath = new URLSearchParams(window.location.search).get('path');
    if (!selectedPath || !paths.includes(selectedPath)) return;
    const frame = window.requestAnimationFrame(() => setPath(selectedPath));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const buildInquiry = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const field = (name: string) => {
      const value = data.get(name);
      return typeof value === 'string' ? value : '';
    };
    return [
      `Partnership path: ${path}`,
      `Name: ${field('name')}`,
      `Organization: ${field('organization')}`,
      `Email: ${field('email')}`,
      '',
      field('message'),
    ].join('\n');
  };

  const emailInquiry = () => {
    const subject = `NBG partnership inquiry — ${path}`;
    window.location.href = `mailto:hello@nationalbrandgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiry)}`;
  };
  return (
    <form
      className="intake"
      onSubmit={(e) => {
        e.preventDefault();
        setInquiry(buildInquiry(e.currentTarget));
        setCopied(false);
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
      {path && !inquiry && (
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
            Prepare my inquiry
          </button>
          <p className="intake-note">
            You will review your inquiry before sending. This site does not store your information.
          </p>
        </div>
      )}
      {inquiry && (
        <output className="inquiry-ready">
          <Check size={20} aria-hidden="true" />
          <div>
            <strong>Your inquiry is ready.</strong>
            <p>Send it to hello@nationalbrandgroup.com, or copy it into your preferred email client.</p>
            <div className="inquiry-actions">
              <button className="button primary" type="button" onClick={emailInquiry}>
                Send by email <Mail size={16} />
              </button>
              <button className="button ghost" type="button" onClick={async () => {
                await navigator.clipboard.writeText(inquiry);
                setCopied(true);
              }}>
                {copied ? 'Copied' : 'Copy inquiry'} <Copy size={16} />
              </button>
            </div>
            <button className="intake-reset" type="button" onClick={() => setInquiry('')}>Edit inquiry</button>
          </div>
        </output>
      )}
    </form>
  );
}
