import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        runnable: resolve(__dirname, 'runnable.html'),
        journeal: resolve(__dirname, 'journeal.html'),
        busuu: resolve(__dirname, 'busuu.html'),
      },
    },
  },
})