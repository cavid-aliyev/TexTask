import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@layouts': path.resolve(__dirname, 'src/components/layouts'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@sections': path.resolve(__dirname, 'src/components/sections'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@context': path.resolve(__dirname, 'src/context'),
    }
  }
})
