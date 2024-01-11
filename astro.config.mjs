import { defineConfig } from 'astro/config';
import sassGlobImports from 'vite-plugin-sass-glob-import';

// https://astro.build/config
export default defineConfig({
  site: 'https://sacck.me/',
  base: '/',
  server: {
    host: true,
    port: 8080,
  },
  vite: {
    plugins: [sassGlobImports()],
  },
});
