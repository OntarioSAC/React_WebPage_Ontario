import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          formik_yup: ['formik', 'yup'],
          router: ['react-router-dom'],
          axios: ['axios'],
          misc: ['i18next', 'react-i18next', '@popperjs/core', 'swiper', 'bootstrap'],
        }
      }
    }
  }
});
