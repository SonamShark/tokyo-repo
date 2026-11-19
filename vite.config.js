import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative: works on Vercel and GitHub Pages (any sub-path)
export default defineConfig({ base: './', plugins: [react()] })
