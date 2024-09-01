import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: process.env.PORT || 5173, // Ensure this is the port Render expects
    host: true, // Allow external access
  },
  plugins: [react()]
});
