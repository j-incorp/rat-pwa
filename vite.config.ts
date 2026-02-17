import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const https =
  fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')
    ? {
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem'),
      }
    : undefined

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: https,
  },
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'rat-pwa',
        short_name: 'rat-pwa',
        start_url: '.',
        description: 'react app template progressive web app',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: '192x192-icon.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '512x512-icon.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
    }),
  ],
})
