import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  build:{
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: './static', //指定生成静态资源的存放路径
    minify: 'terser'
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'http://172.20.10.3:8888', 
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/')
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement:resolve(__dirname,'src')
      }
    ]
  }
})
