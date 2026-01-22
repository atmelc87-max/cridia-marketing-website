import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://cridia.ai',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  output: 'static',
  build: {
    format: 'directory'
  }
});