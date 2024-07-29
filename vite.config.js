// Vite file is faster create react app alternative

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/spotify-project/",
  plugins: [react()],
});

