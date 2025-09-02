
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { progress } from 'framer-motion';

export default defineConfig({
  plugins: [react()],
  base: progress.env.VITE_BASE_PATH || "/creative-pair" ,
});
