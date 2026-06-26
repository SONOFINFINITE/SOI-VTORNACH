import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (source, filename) => {
          if (filename.includes('_variables') || filename.includes('_mixins') || filename.includes('_index') || filename.includes('_reset') || filename.includes('global.scss')) {
            return source;
          }
          return `@use "@/shared/styles/index" as *;\n${source}`;
        },
      },
    },
  },
});
