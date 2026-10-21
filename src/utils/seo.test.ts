import { describe, expect, it } from 'vitest';
import { absoluteUrl, pageTitle } from './seo';

describe('pageTitle', () => {
  it('uses the full headline when no title is given', () => {
    expect(pageTitle()).toBe('Alex Kramer | Backend & Cloud Engineer');
  });
  it('treats blank titles as missing', () => {
    expect(pageTitle('   ')).toBe(pageTitle());
  });
  it('suffixes the site name', () => {
    expect(pageTitle(' Projects ')).toBe('Projects | Alex Kramer');
  });
});

describe('absoluteUrl', () => {
  it('resolves against the site URL', () => {
    expect(absoluteUrl('/projects/', 'https://x.pages.dev')).toBe('https://x.pages.dev/projects/');
  });
  it('accepts a URL object', () => {
    expect(absoluteUrl('/', new URL('https://x.pages.dev')).toString()).toBe('https://x.pages.dev/');
  });
});
