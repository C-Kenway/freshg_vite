import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Esto permite conexiones desde cualquier dirección IP
    port: 3000, // O cualquier puerto que prefieras
  }
})
