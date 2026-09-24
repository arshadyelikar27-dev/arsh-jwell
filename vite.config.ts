import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    host: true,
  },

  build: {
    // Increase chunk warning limit (our lazy-loaded chunks are intentionally split)
    chunkSizeWarningLimit: 600,

    // Terser-style minification
    minify: 'esbuild',

    // Split vendor chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — changes rarely, cache long
          'vendor-react': ['react', 'react-dom'],
          // Framer Motion — large, split separately
          'vendor-framer': ['framer-motion'],
          // GSAP + Lenis — scroll libs
          'vendor-scroll': ['gsap', 'lenis'],
          // Icon lib
          'vendor-icons': ['lucide-react'],
        },
      },
    },

    // Target modern browsers for smaller output
    target: 'es2020',
  },

  // Optimize deps for faster dev startup
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'gsap', 'lenis', 'lucide-react'],
  },
});
