export const SITE_NAME = 'Alex Kramer';

/** "Home" -> "Home | Alex Kramer"; the home page passes no title and gets the full headline. */
export function pageTitle(title?: string): string {
  const trimmed = title?.trim();
  return trimmed ? `${trimmed} | ${SITE_NAME}` : `${SITE_NAME} | Backend & Cloud Engineer`;
}

/** Resolve a path against the configured site URL (never hardcode a domain). */
export function absoluteUrl(path: string, site: URL | string): string {
  return new URL(path, site).toString();
}
