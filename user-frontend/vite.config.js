import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '45f5e4238118.ngrok-free.app',
      'localhost'
    ]
  }
})
