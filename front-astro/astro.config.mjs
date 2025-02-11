// astro.config.mjs
import { defineConfig } from 'astro/config';
import node from '@astrojs/node'; // Asegúrate de que esta línea esté correctamente importada

export default defineConfig({
  site: 'https://example.com', // Cambia por tu URL real
  output: 'server',
  adapter: node({
    mode: 'standalone', // Usa el modo standalone para Railway
  }),
});

