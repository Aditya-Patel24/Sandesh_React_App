import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 5173, // Ensure this matches the port Render expects
    host: true, // Allow external access
  },
  plugins: [react()]
});
