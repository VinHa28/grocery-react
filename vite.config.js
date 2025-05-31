import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
      data: path.resolve(__dirname, 'src/data'),
      img: path.resolve(__dirname, 'src/assets/img'),
      context: path.resolve(__dirname, 'src/context'),
      commons: path.resolve(__dirname, 'src/commons'),
    },
  },
})
