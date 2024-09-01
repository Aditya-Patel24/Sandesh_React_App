import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 5173, // Ensure this is set correctly
    host: true, // Expose the server to external requests
  },
  plugins: [react()]
});
