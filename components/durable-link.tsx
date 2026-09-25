import type { AnchorHTMLAttributes } from 'react';

type DurableLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
};

/**
 * Internal navigation uses a normal document request so every route remains
 * reachable even when client-side routing is unavailable in the hosted build.
 */
export default function DurableLink({ href, ...props }: DurableLinkProps) {
  return <a href={href} {...props} />;
}
