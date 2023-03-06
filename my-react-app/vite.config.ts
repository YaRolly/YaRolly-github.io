import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
    assetsDir: '.',
    manifest: true,
    emptyOutDir: true
  },
  define: {
    'process.env': {},
    viteBase: process.env.NODE_ENV === 'production' ? '/yarolly-github.io/' : '/'
  },
  base: './',
})
