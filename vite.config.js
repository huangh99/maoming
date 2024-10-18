import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 6601,
    open: true
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: [ 'src/**/*.js', 'src/**/*.vue', 'src/**/*.ts' ], // 指定需要检查的文件
      exclude: [ 'node_modules/**', 'dist/**' ], // 指定不需要检查的文件
      fix: true, // 是否自动修复
      cache: false // 是否启用缓存
    })
  ],
  resolve: {
    // 设置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern' // 'modern-compiler' or 'modern'
      }
    }
  }
})
