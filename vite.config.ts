/*
 * @Descripttion: vite配置
 * @version: 模块说明
 * @Author: wangfquan
 * @Date: 2023-06-05 10:31:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-05 14:06:06
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {//配置别名
    alias: {
      // 配置别名指向src目录，在任何模块文件内部，可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径。
      "@": resolve(__dirname, 'src'),
      // 或者
      // '@': path.join(__dirname, './src'),
      // '@Project': path.join(__dirname, './src/Project')
    },
    // 使用别名的文件后缀
    extensions: ['.js', '.json', '.ts']

  },
  // 配置下启动端口，热更新
  server: {
    host: 'localhost', //ip地址
    port: 3006, //端口号
    hmr: true,  // 开启热更新
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    https: false // 是否开启 https
  },
})
