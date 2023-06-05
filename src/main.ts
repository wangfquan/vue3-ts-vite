import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App)


// 引入 Element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

// 注册路由
import router from './router/index'
app.use(router)
app.mount('#app')
