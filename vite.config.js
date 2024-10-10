import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: '0.0.0.0',
    port: 6600,
    open: true,
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    // 设置路径别名
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
},
})
