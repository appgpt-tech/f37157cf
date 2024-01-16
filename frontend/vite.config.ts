
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: '/f37157cf/',
    build: {
      outDir: '.output/f37157cf',
      emptyOutDir: true
    },
    server: {
      host: true,
      strictPort: true,
      port: 5173
    }
  })
