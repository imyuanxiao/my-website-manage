import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      'views': path.resolve(__dirname, 'src/views'),
      'api': path.resolve(__dirname, 'src/api'),
      'utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 需要跨域的目标服务器地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 将请求路径前缀 /api 去掉
      }
    }
  }
})
