import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // mode: 'production',
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ],
  resolve:{
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js', // 定义vue的别名，如果使用其他的插件，可能会用到别名
      '@': path.resolve(__dirname, 'src'), //定义路径别名
    },
  },
  server:{
    port:8080,
    proxy:{
      '/service': {
        target: 'http://localhost:9999',
        changeOrigin: true,
      },
      // Proxying websockets or socket.io
      // '/socket.io': {
      //   target: 'ws://localhost:3000',
      //   ws: true
      // }
    }
  },
  css: {
    //css模块化，文件名：.module.[css|less|scss]
    modules:{
      generateScopedName:`[name]_[local]_[hash:base64:5]`,
      hashPrefix:'prefix'
    },
    //预编译支持scss
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scssVar/variable.scss";`
      }
    }
  }
})
