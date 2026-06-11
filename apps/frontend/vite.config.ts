/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.NODE_ENV === 'preview' ? '/lovewithlegs.com/' : '/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
   define: {
    VITE_baseURL: JSON.stringify(process.env.NODE_ENV === 'preview' ? '/lovewithlegs.com/' : '/'),
    VITE_API_URL: JSON.stringify(process.env.VITE_API_URL ?? 'api.test.com')
  },
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
