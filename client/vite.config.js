import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ← make sure to import this

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
