import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  server: {
    host: true,
    port: 5177
  },
  base: '/jsac/',
  resolve: {
    alias: {
      '$lib': path.resolve('./src/lib')
    }
  }
})
