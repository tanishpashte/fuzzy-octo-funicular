import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => { // Access mode here
  return {
    plugins: [react(), tailwindcss()],
    base: mode === 'production' ? '/yourrepository/' : '/', // Now mode is defined
  };
});