import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Sandesh_React_App/',
  build: {
    outDir: 'build', // This should match the directory you're trying to deploy
  },
})

