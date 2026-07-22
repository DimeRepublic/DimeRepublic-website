import { defineConfig } from 'vite';

export default defineConfig({
  base: '/DimeRepublic-website/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'docs',
  },
});
