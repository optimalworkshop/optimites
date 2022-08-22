import { defineConfig } from 'vite';
import { VitePluginFonts } from 'vite-plugin-fonts';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: 'Obviously',
            local: 'Obviously',
            src: './src/assets/fonts/*.woff2',
          },
        ],

        display: 'auto',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend',
      },
    }),
  ],
});
