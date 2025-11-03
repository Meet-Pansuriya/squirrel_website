import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const base =
    process.env.VITE_BASE_PATH ??
    (mode === 'production' ? '/squirrel_website/' : '/')

  return {
    base,
    plugins: [react(), imagetools()],
  }
})
