import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      host: true,
      hmr: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL
        }
      },
      watch: {
        usePolling: true,
        interval: 1000
      }
    }
  }
});
