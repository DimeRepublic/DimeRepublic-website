import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        igate: resolve(__dirname, 'igate-dimerepublic-case-study.html'),
        infinitex: resolve(__dirname, 'infinitex-trade-syndicate-case-study.html'),
        titan: resolve(__dirname, 'titan-anaesthesia-case-study.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) return 'assets/main.css';
          if (assetInfo.name.endsWith('.js')) return 'assets/main.js';
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
