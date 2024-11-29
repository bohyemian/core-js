import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const env = process.env.NODE_ENV;

export default defineConfig({
  build: {
    outDir: 'docs',
  },
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: env === 'development' ? '[local]__[hash:base64:3]' : '[local]__[hash:base64:5]',
    },
  },
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
});
