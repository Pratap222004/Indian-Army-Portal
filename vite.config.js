import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  host: '0.0.0.0',
  port: 5173, // Hardcode frontend port
    strictPort: true ,// Prevent port fallback
    allowedHosts: ['indian-army-portal-4.onrender.com',
      'indian-army-portal-5.onrender.com',
    'localhost' // For local development
    ]
}
});
