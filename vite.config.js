import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  loader: { '.js': 'jsx' },
  build: {
    outDir: 'app',
    assetsDir: './',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
