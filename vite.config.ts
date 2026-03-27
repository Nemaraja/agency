import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/agency/', // This MUST match your repo name exactly
  plugins: [react()],
})
