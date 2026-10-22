import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: replace with the real *.pages.dev URL (later the custom domain). Single source of truth for canonical/OG/sitemap URLs.
  site: 'https://software-factory.ajkramer90.workers.dev',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
