import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => { // Access mode here
  return {
    base: mode === 'production' ? '/fuzzy-octo-funicular/' : '/',
    plugins: [react(), tailwindcss()],
    server: {
      host: true
    }
  };
});